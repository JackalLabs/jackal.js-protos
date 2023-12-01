import {
  QueryClient,
  setupBankExtension,
  setupDistributionExtension,
  setupGovExtension,
  setupSlashingExtension,
  setupStakingExtension,
  SigningStargateClient,
  SigningStargateClientOptions
} from '@cosmjs/stargate'
import {
  createFileTreeExtension,
  createJklMintExtension,
  createNotificationsExtension,
  createOracleExtension,
  createRnsExtension,
  createStorageExtension
} from '@/snackages/query'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { OfflineSigner } from '@cosmjs/launchpad'
import { createDefaultRegistry } from '@/snackages/registry'
import { TxFileTree, TxOracle, TxRns, TxStorage } from '@/snackages'
import type { ISignAndBroadcastOptions } from '@/interfaces/ISignAndBroadcastOptions'
import type { IJackalSigningStargateClient } from '@/interfaces/classes/ISignerClient'
import type { DDeliverTxResponse, DEncodeObject } from '@/types/msgs'
import type { DHttpEndpoint, TQueryExtensions } from '@/types'
import type { ITxLibrary } from '@/interfaces'
import { TxNotifications } from '@/snackages/tx/notifications'

/**
 * @class {IJackalSigningStargateClient} JackalSigningStargateClient
 */
export class JackalSigningStargateClient extends SigningStargateClient implements IJackalSigningStargateClient {
  protected readonly address: string
  public readonly queries: TQueryExtensions
  public readonly txLibrary: ITxLibrary

  /**
   * @function connectWithSigner
   * @memberof JackalSigningStargateClient
   * @async
   * @static
   */
  public static async connectWithSigner(
    endpoint: string | DHttpEndpoint,
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {}
  ): Promise<JackalSigningStargateClient> {
    if (!endpoint) throw new Error("A valid endpoint is required!")
    const tmClient = await Tendermint34Client
      .connect(endpoint)
      .catch(err => {
        throw err
      })
    if (!tmClient) throw new Error("Tendermint34Client creation failed")
    const { address } = (await signer.getAccounts())[0]
    return new JackalSigningStargateClient(tmClient, signer, address, {
      registry: createDefaultRegistry(),
      ...options,
    })
  }

  protected constructor(tmClient: Tendermint34Client, signer: OfflineSigner, address: string, options: SigningStargateClientOptions) {
    super(tmClient, signer, options)
    this.address = address
    this.queries = QueryClient.withExtensions(
      tmClient,
      /* Jackal Extensions */
      createFileTreeExtension,
      createJklMintExtension,
      createNotificationsExtension,
      createOracleExtension,
      createRnsExtension,
      createStorageExtension,
      /* Cosmos Extensions */
      setupBankExtension,
      setupDistributionExtension,
      setupGovExtension,
      setupSlashingExtension,
      setupStakingExtension
    )

    this.txLibrary = {
      fileTree: TxFileTree,
      /* No jklMint tx */
      notifications: TxNotifications,
      oracle: TxOracle,
      rns: TxRns,
      storage: TxStorage
    }
  }

  async selfSignAndBroadcast(msgs: DEncodeObject[], options: ISignAndBroadcastOptions = {}): Promise<DDeliverTxResponse> {
    const { fee, memo } = {
      fee: {
        amount: [],
        gas: (msgs.length * 100000).toString()
      },
      memo: '',
      ...options
    }
    return this.signAndBroadcast(this.address, msgs, fee, memo)
  }
}
