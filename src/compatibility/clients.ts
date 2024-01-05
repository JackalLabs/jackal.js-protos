import {
  Account,
  accountFromAny,
  AccountParser,
  AminoTypes,
  AuthExtension,
  BankExtension,
  Block,
  BroadcastTxError,
  calculateFee,
  Coin,
  defaultRegistryTypes,
  fromTendermintEvent,
  GasPrice,
  MsgDelegateEncodeObject,
  MsgSendEncodeObject,
  MsgTransferEncodeObject,
  MsgUndelegateEncodeObject,
  MsgWithdrawDelegatorRewardEncodeObject,
  QueryClient,
  SearchTxQuery,
  SequenceResponse,
  setupAuthExtension,
  setupBankExtension,
  setupDistributionExtension,
  setupGovExtension,
  setupStakingExtension,
  setupTxExtension,
  SignerData,
  SigningStargateClientOptions,
  StakingExtension,
  StargateClientOptions,
  TimeoutError,
  TxExtension,
} from '@cosmjs/stargate'

import { assert, assertDefined, sleep } from '@cosmjs/utils'
import { IIndexedTx } from '@/interfaces'
import { DDeliverTxResponse, DEncodeObject } from '@/types'
import { TxMsgData } from 'cosmjs-types/cosmos/base/abci/v1beta1/abci'
import { fromBase64, toHex } from '@cosmjs/encoding'
import {
  HttpEndpoint,
  Tendermint34Client,
  Tendermint37Client,
  TendermintClient,
  toRfc3339WithNanoseconds,
} from '@cosmjs/tendermint-rpc'
import { Int53, Uint53 } from '@cosmjs/math'
import { QueryDelegatorDelegationsResponse } from 'cosmjs-types/cosmos/staking/v1beta1/query'
import { DelegationResponse } from 'cosmjs-types/cosmos/staking/v1beta1/staking'
import {
  addCoins,
  encodeSecp256k1Pubkey,
  makeSignDoc as makeSignDocAmino,
  StdFee,
  StdSignature,
  StdSignDoc,
} from '@cosmjs/amino'
import {
  encodePubkey,
  isOfflineDirectSigner,
  makeAuthInfoBytes,
  makeSignDoc,
  Registry,
  TxBodyEncodeObject,
} from '@cosmjs/proto-signing'
import { OfflineSigner } from '@cosmjs/launchpad'
import { MsgDelegate, MsgUndelegate } from '@/postGen/cosmos/staking/v1beta1/tx'
import { MsgWithdrawDelegatorReward } from '@/postGen/cosmos/distribution/v1beta1/tx'
import { Height } from 'cosmjs-types/ibc/core/client/v1/client'

import Long from 'long'
import { MsgTransfer } from 'cosmjs-types/ibc/applications/transfer/v1/tx'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import { SignMode } from 'cosmjs-types/cosmos/tx/signing/v1beta1/signing'
import {
  createCompatibilityDefaultAminoConverters,
  createCompatibilityJackalAminoConverters
} from '@/compatibility/amino'

export class StargateCompatibilityClient {
  private readonly tmClient: TendermintClient | undefined
  private readonly queryClient:
    | (QueryClient &
        AuthExtension &
        BankExtension &
        StakingExtension &
        TxExtension)
    | undefined
  private chainId: string | undefined
  private readonly accountParser: AccountParser

  protected constructor(
    tmClient: TendermintClient | undefined,
    options: StargateClientOptions,
  ) {
    if (tmClient) {
      this.tmClient = tmClient
      this.queryClient = QueryClient.withExtensions(
        tmClient,
        setupAuthExtension,
        setupBankExtension,
        setupStakingExtension,
        setupTxExtension,

        setupDistributionExtension,
        setupGovExtension,
        // setupSlashingExtension,
      )
    }
    const { accountParser = accountFromAny } = options
    this.accountParser = accountParser
  }

  public static async connect(
    endpoint: string | HttpEndpoint,
    options: StargateClientOptions = {},
  ): Promise<StargateCompatibilityClient> {
    // Tendermint/CometBFT 0.34/0.37 auto-detection. Starting with 0.37 we seem to get reliable versions again 🎉
    // Using 0.34 as the fallback.
    let tmClient: TendermintClient
    const tm37Client = await Tendermint37Client.connect(endpoint)
    const version = (await tm37Client.status()).nodeInfo.version
    if (version.startsWith('0.37.')) {
      tmClient = tm37Client
    } else {
      tm37Client.disconnect()
      tmClient = await Tendermint34Client.connect(endpoint)
    }

    return StargateCompatibilityClient.create(tmClient, options)
  }

  public static async create(
    tmClient: TendermintClient,
    options: StargateClientOptions = {},
  ): Promise<StargateCompatibilityClient> {
    return new StargateCompatibilityClient(tmClient, options)
  }

  public baseQueries() {
    return this.queryClient
  }
  public baseTmClient() {
    return this.tmClient
  }

  public async getChainId(): Promise<string> {
    if (!this.chainId) {
      const response = await this.forceGetTmClient().status()
      const chainId = response.nodeInfo.network
      if (!chainId) {
        throw new Error('Chain ID must not be empty')
      }
      this.chainId = chainId
    }

    return this.chainId
  }

  public async getHeight(): Promise<number> {
    const status = await this.forceGetTmClient().status()
    return status.syncInfo.latestBlockHeight
  }

  public async getAccount(searchAddress: string): Promise<Account | null> {
    try {
      const account = await this.forceGetQueryClient().auth.account(
        searchAddress,
      )
      return account ? this.accountParser(account) : null
    } catch (error: any) {
      if (/rpc error: code = NotFound/i.test(error.toString())) {
        return null
      }
      throw error
    }
  }

  public async getSequence(address: string): Promise<SequenceResponse> {
    const account = await this.getAccount(address)
    if (!account) {
      throw new Error(
        `Account '${address}' does not exist on chain. Send some tokens there before trying to query sequence.`,
      )
    }
    return {
      accountNumber: account.accountNumber,
      sequence: account.sequence,
    }
  }

  public async getBlock(height?: number): Promise<Block> {
    const response = await this.forceGetTmClient().block(height)
    return {
      id: toHex(response.blockId.hash).toUpperCase(),
      header: {
        version: {
          block: new Uint53(response.block.header.version.block).toString(),
          app: new Uint53(response.block.header.version.app).toString(),
        },
        height: response.block.header.height,
        chainId: response.block.header.chainId,
        time: toRfc3339WithNanoseconds(response.block.header.time),
      },
      txs: response.block.txs,
    }
  }

  public async getBalance(address: string, searchDenom: string): Promise<Coin> {
    return this.forceGetQueryClient().bank.balance(address, searchDenom)
  }

  public async getAllBalances(address: string): Promise<readonly Coin[]> {
    return this.forceGetQueryClient().bank.allBalances(address)
  }

  public async getBalanceStaked(address: string): Promise<Coin | null> {
    const allDelegations = []
    let startAtKey: Uint8Array | undefined = undefined
    do {
      const {
        delegationResponses,
        pagination,
      }: QueryDelegatorDelegationsResponse =
        await this.forceGetQueryClient().staking.delegatorDelegations(
          address,
          startAtKey,
        )

      const loadedDelegations = delegationResponses || []
      allDelegations.push(...loadedDelegations)
      startAtKey = pagination?.nextKey
    } while (startAtKey !== undefined && startAtKey.length !== 0)

    const sumValues = allDelegations.reduce(
      (previousValue: Coin | null, currentValue: DelegationResponse): Coin => {
        // Safe because field is set to non-nullable (https://github.com/cosmos/cosmos-sdk/blob/v0.45.3/proto/cosmos/staking/v1beta1/staking.proto#L295)
        assert(currentValue.balance)
        return previousValue !== null
          ? addCoins(previousValue, currentValue.balance)
          : currentValue.balance
      },
      null,
    )

    return sumValues
  }

  public async getDelegation(
    delegatorAddress: string,
    validatorAddress: string,
  ): Promise<Coin | null> {
    let delegatedAmount: Coin | undefined
    try {
      delegatedAmount = (
        await this.forceGetQueryClient().staking.delegation(
          delegatorAddress,
          validatorAddress,
        )
      ).delegationResponse?.balance
    } catch (e: any) {
      if (e.toString().includes('key not found')) {
        // ignore, `delegatedAmount` remains undefined
      } else {
        throw e
      }
    }
    return delegatedAmount || null
  }

  public async getTx(id: string): Promise<IIndexedTx | null> {
    const results = await this.txsQuery(`tx.hash='${id}'`)
    return results[0] ?? null
  }

  public async searchTx(query: SearchTxQuery): Promise<IIndexedTx[]> {
    let rawQuery: string
    if (typeof query === 'string') {
      rawQuery = query
    } else if (Array.isArray(query)) {
      rawQuery = query.map((t) => `${t.key}='${t.value}'`).join(' AND ')
    } else {
      throw new Error(
        'Got unsupported query type. See CosmJS 0.31 CHANGELOG for API breaking changes here.',
      )
    }
    return this.txsQuery(rawQuery)
  }

  public disconnect(): void {
    if (this.tmClient) {
      this.tmClient.disconnect()
    }
  }

  public async broadcastTx(
    tx: Uint8Array,
    timeoutMs = 60_000,
    pollIntervalMs = 3_000,
  ): Promise<DDeliverTxResponse> {
    let timedOut = false
    const txPollTimeout = setTimeout(() => {
      timedOut = true
    }, timeoutMs)

    const pollForTx = async (txId: string): Promise<DDeliverTxResponse> => {
      if (timedOut) {
        throw new TimeoutError(
          `Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later. There was a wait of ${
            timeoutMs / 1000
          } seconds.`,
          txId,
        )
      }
      await sleep(pollIntervalMs)
      const result = await this.getTx(txId)
      return result
        ? {
            code: result.code,
            height: result.height,
            txIndex: result.txIndex,
            events: result.events,
            rawLog: result.rawLog,
            data: result.data ? TxMsgData.decode(result.data).data : undefined,
            transactionHash: txId,
            msgResponses: result.msgResponses,
            gasUsed: result.gasUsed,
            gasWanted: result.gasWanted,
          }
        : pollForTx(txId)
    }

    const transactionId = await this.broadcastTxSync(tx)

    return new Promise((resolve, reject) =>
      pollForTx(transactionId).then(
        (value) => {
          clearTimeout(txPollTimeout)
          resolve(value)
        },
        (error) => {
          clearTimeout(txPollTimeout)
          reject(error)
        },
      ),
    )
  }

  public async broadcastTxSync(tx: Uint8Array): Promise<string> {
    const broadcasted = await this.forceGetTmClient().broadcastTxSync({ tx })

    if (broadcasted.code) {
      return Promise.reject(
        new BroadcastTxError(
          broadcasted.code,
          broadcasted.codespace ?? '',
          broadcasted.log,
        ),
      )
    }

    const transactionId = toHex(broadcasted.hash).toUpperCase()

    return transactionId
  }

  protected getTmClient(): TendermintClient | undefined {
    return this.tmClient
  }

  protected forceGetTmClient(): TendermintClient {
    if (!this.tmClient) {
      throw new Error(
        'Tendermint client not available. You cannot use online functionality in offline mode.',
      )
    }
    return this.tmClient
  }

  protected getQueryClient():
    | (QueryClient &
        AuthExtension &
        BankExtension &
        StakingExtension &
        TxExtension)
    | undefined {
    return this.queryClient
  }

  protected forceGetQueryClient(): QueryClient &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension {
    if (!this.queryClient) {
      throw new Error(
        'Query client not available. You cannot use online functionality in offline mode.',
      )
    }
    return this.queryClient
  }

  private async txsQuery(query: string): Promise<IIndexedTx[]> {
    const results = await this.forceGetTmClient().txSearchAll({ query: query })
    return results.txs.map((tx): IIndexedTx => {
      const txMsgData = TxMsgData.decode(tx.result.data ?? new Uint8Array())
      return {
        height: tx.height,
        txIndex: tx.index,
        hash: toHex(tx.hash).toUpperCase(),
        code: tx.result.code,
        events: tx.result.events.map(fromTendermintEvent),
        rawLog: tx.result.log || '',
        data: tx.result.data,
        tx: tx.tx,
        msgResponses: txMsgData.msgResponses,
        gasUsed: tx.result.gasUsed,
        gasWanted: tx.result.gasWanted,
      }
    })
  }
}

export class SigningStargateCompatibilityClient extends StargateCompatibilityClient {
  public readonly registry: Registry
  public readonly broadcastTimeoutMs: number | undefined
  public readonly broadcastPollIntervalMs: number | undefined

  private readonly signer: OfflineSigner
  private readonly aminoTypes: AminoTypes
  private readonly gasPrice: GasPrice | undefined

  protected constructor(
    tmClient: TendermintClient | undefined,
    signer: OfflineSigner,
    options: SigningStargateClientOptions,
  ) {
    super(tmClient, options)
    const {
      registry = new Registry(defaultRegistryTypes),
      aminoTypes = new AminoTypes({
        ...createCompatibilityDefaultAminoConverters(),
        ...createCompatibilityJackalAminoConverters()
      }),
    } = options
    this.registry = registry
    this.aminoTypes = aminoTypes
    this.signer = signer
    this.broadcastTimeoutMs = options.broadcastTimeoutMs
    this.broadcastPollIntervalMs = options.broadcastPollIntervalMs
    this.gasPrice = options.gasPrice
  }

  public static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
  ): Promise<SigningStargateCompatibilityClient> {
    // Tendermint/CometBFT 0.34/0.37 auto-detection. Starting with 0.37 we seem to get reliable versions again 🎉
    // Using 0.34 as the fallback.
    let tmClient: TendermintClient
    const tm37Client = await Tendermint37Client.connect(endpoint)
    const version = (await tm37Client.status()).nodeInfo.version
    if (version.startsWith('0.37.')) {
      tmClient = tm37Client
    } else {
      tm37Client.disconnect()
      tmClient = await Tendermint34Client.connect(endpoint)
    }

    return SigningStargateCompatibilityClient.createWithSigner(
      tmClient,
      signer,
      options,
    )
  }

  public static async createWithSigner(
    tmClient: TendermintClient,
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
  ): Promise<SigningStargateCompatibilityClient> {
    return new SigningStargateCompatibilityClient(tmClient, signer, options)
  }

  public static async offline(
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
  ): Promise<SigningStargateCompatibilityClient> {
    return new SigningStargateCompatibilityClient(undefined, signer, options)
  }

  public async simulate(
    signerAddress: string,
    messages: readonly DEncodeObject[],
    memo: string | undefined,
  ): Promise<number> {
    const anyMsgs = messages.map((m) => this.registry.encodeAsAny(m))
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress,
    )
    if (!accountFromSigner) {
      throw new Error('Failed to retrieve account from signer')
    }
    const pubkey = encodeSecp256k1Pubkey(accountFromSigner.pubkey)
    const { sequence } = await this.getSequence(signerAddress)
    const { gasInfo } = await this.forceGetQueryClient().tx.simulate(
      anyMsgs,
      memo,
      pubkey,
      sequence,
    )
    assertDefined(gasInfo)
    return Uint53.fromString(gasInfo.gasUsed.toString()).toNumber()
  }

  public async sendTokens(
    senderAddress: string,
    recipientAddress: string,
    amount: readonly Coin[],
    fee: StdFee | 'auto' | number,
    memo = '',
  ): Promise<DDeliverTxResponse> {
    const sendMsg: MsgSendEncodeObject = {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress: senderAddress,
        toAddress: recipientAddress,
        amount: [...amount],
      },
    }
    return this.signAndBroadcast(senderAddress, [sendMsg], fee, memo)
  }

  public async delegateTokens(
    delegatorAddress: string,
    validatorAddress: string,
    amount: Coin,
    fee: StdFee | 'auto' | number,
    memo = '',
  ): Promise<DDeliverTxResponse> {
    const delegateMsg: MsgDelegateEncodeObject = {
      typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
      value: MsgDelegate.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorAddress: validatorAddress,
        amount: amount,
      }),
    }
    return this.signAndBroadcast(delegatorAddress, [delegateMsg], fee, memo)
  }

  public async undelegateTokens(
    delegatorAddress: string,
    validatorAddress: string,
    amount: Coin,
    fee: StdFee | 'auto' | number,
    memo = '',
  ): Promise<DDeliverTxResponse> {
    const undelegateMsg: MsgUndelegateEncodeObject = {
      typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
      value: MsgUndelegate.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorAddress: validatorAddress,
        amount: amount,
      }),
    }
    return this.signAndBroadcast(delegatorAddress, [undelegateMsg], fee, memo)
  }

  public async withdrawRewards(
    delegatorAddress: string,
    validatorAddress: string,
    fee: StdFee | 'auto' | number,
    memo = '',
  ): Promise<DDeliverTxResponse> {
    const withdrawMsg: MsgWithdrawDelegatorRewardEncodeObject = {
      typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
      value: MsgWithdrawDelegatorReward.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorAddress: validatorAddress,
      }),
    }
    return this.signAndBroadcast(delegatorAddress, [withdrawMsg], fee, memo)
  }

  public async sendIbcTokens(
    senderAddress: string,
    recipientAddress: string,
    transferAmount: Coin,
    sourcePort: string,
    sourceChannel: string,
    timeoutHeight: Height | undefined,
    /** timeout in seconds */
    timeoutTimestamp: number | undefined,
    fee: StdFee | 'auto' | number,
    memo = '',
  ): Promise<DDeliverTxResponse> {
    const timeoutTimestampNanoseconds = timeoutTimestamp
      ? Long.fromNumber(timeoutTimestamp).multiply(1_000_000_000)
      : undefined
    const transferMsg: MsgTransferEncodeObject = {
      typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
      value: MsgTransfer.fromPartial({
        sourcePort: sourcePort,
        sourceChannel: sourceChannel,
        sender: senderAddress,
        receiver: recipientAddress,
        token: transferAmount,
        timeoutHeight: timeoutHeight,
        timeoutTimestamp: timeoutTimestampNanoseconds,
      }),
    }
    return this.signAndBroadcast(senderAddress, [transferMsg], fee, memo)
  }

  public async signAndBroadcast(
    signerAddress: string,
    messages: readonly DEncodeObject[],
    fee: StdFee | 'auto' | number,
    memo = '',
  ): Promise<DDeliverTxResponse> {
    let usedFee: StdFee
    if (fee == 'auto' || typeof fee === 'number') {
      assertDefined(
        this.gasPrice,
        'Gas price must be set in the client options when auto gas is used.',
      )
      const gasEstimation = await this.simulate(signerAddress, messages, memo)
      // Starting with Cosmos SDK 0.47, we see many cases in which 1.3 is not enough anymore
      // E.g. https://github.com/cosmos/cosmos-sdk/issues/16020
      const multiplier = typeof fee === 'number' ? fee : 1.4
      usedFee = calculateFee(
        Math.round(gasEstimation * multiplier),
        this.gasPrice,
      )
    } else {
      usedFee = fee
    }
    const txRaw = await this.sign(signerAddress, messages, usedFee, memo)
    const txBytes = TxRaw.encode(txRaw).finish()
    return this.broadcastTx(
      txBytes,
      this.broadcastTimeoutMs,
      this.broadcastPollIntervalMs,
    )
  }

  public async signAndBroadcastSync(
    signerAddress: string,
    messages: readonly DEncodeObject[],
    fee: StdFee | 'auto' | number,
    memo = '',
  ): Promise<string> {
    let usedFee: StdFee
    if (fee == 'auto' || typeof fee === 'number') {
      assertDefined(
        this.gasPrice,
        'Gas price must be set in the client options when auto gas is used.',
      )
      const gasEstimation = await this.simulate(signerAddress, messages, memo)
      const multiplier = typeof fee === 'number' ? fee : 1.3
      usedFee = calculateFee(
        Math.round(gasEstimation * multiplier),
        this.gasPrice,
      )
    } else {
      usedFee = fee
    }
    const txRaw = await this.sign(signerAddress, messages, usedFee, memo)
    const txBytes = TxRaw.encode(txRaw).finish()
    return this.broadcastTxSync(txBytes)
  }

  public async sign(
    signerAddress: string,
    messages: readonly DEncodeObject[],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData,
  ): Promise<TxRaw> {
    let signerData: SignerData
    if (explicitSignerData) {
      signerData = explicitSignerData
    } else {
      const { accountNumber, sequence } = await this.getSequence(signerAddress)
      const chainId = await this.getChainId()
      signerData = {
        accountNumber: accountNumber,
        sequence: sequence,
        chainId: chainId,
      }
    }

    return isOfflineDirectSigner(this.signer)
      ? this.signDirect(signerAddress, messages, fee, memo, signerData)
      : this.signAmino(signerAddress, messages, fee, memo, signerData)
  }

  private async signAmino(
    signerAddress: string,
    messages: readonly DEncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData,
  ): Promise<TxRaw> {
    assert(!isOfflineDirectSigner(this.signer))
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress,
    )
    if (!accountFromSigner) {
      throw new Error('Failed to retrieve account from signer')
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey))
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg))
    const signDoc = makeSignDocAmino(
      msgs,
      fee,
      chainId,
      memo,
      accountNumber,
      sequence,
    )
    const {
      signature,
      signed,
    }: {
      signature: StdSignature
      signed: StdSignDoc
    } = await this.signer.signAmino(signerAddress, signDoc)
    const signedTxBody = {
      messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
      memo: signed.memo,
    }
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: '/cosmos.tx.v1beta1.TxBody',
      value: signedTxBody,
    }
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject)
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber()
    const signedSequence = Int53.fromString(signed.sequence).toNumber()
    const signedAuthInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence: signedSequence }],
      signed.fee.amount,
      signedGasLimit,
      signed.fee.granter,
      signed.fee.payer,
      signMode,
    )
    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    })
  }

  private async signDirect(
    signerAddress: string,
    messages: readonly DEncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData,
  ): Promise<TxRaw> {
    assert(isOfflineDirectSigner(this.signer))
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress,
    )
    if (!accountFromSigner) {
      throw new Error('Failed to retrieve account from signer')
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey))
    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: '/cosmos.tx.v1beta1.TxBody',
      value: {
        messages: messages,
        memo: memo,
      },
    }
    const txBodyBytes = this.registry.encode(txBodyEncodeObject)
    const gasLimit = Int53.fromString(fee.gas).toNumber()
    const authInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence }],
      fee.amount,
      gasLimit,
      fee.granter,
      fee.payer,
    )
    const signDoc = makeSignDoc(
      txBodyBytes,
      authInfoBytes,
      chainId,
      accountNumber,
    )
    const { signature, signed } = await this.signer.signDirect(
      signerAddress,
      signDoc,
    )
    return TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    })
  }
}
