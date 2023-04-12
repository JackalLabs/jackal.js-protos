import { StdFee } from '@cosmjs/launchpad'
import { EncodeObject, OfflineSigner, Registry } from '@cosmjs/proto-signing'
import {
  AminoConverters,
  AminoTypes,
  createDefaultAminoConverters,
  DeliverTxResponse,
  SigningStargateClient
} from '@cosmjs/stargate'

/**
 * Jackal Custom Protos
 */
import fileTreeTypes from '@/snackages/tx/custom/fileTree'
import oracleTypes from '@/snackages/tx/custom/oracle'
import rnsTypes from '@/snackages/tx/custom/rns'
import storageTypes from '@/snackages/tx/custom/storage'

/**
 * Jackal Stock CosmosSDK Protos
 */
import bankTypes from '@/snackages/tx/static/bank'
import distributionTypes from '@/snackages/tx/static/distribution'
import govTypes from '@/snackages/tx/static/gov'
import slashingTypes from '@/snackages/tx/static/slashing'
import stakingTypes from '@/snackages/tx/static/staking'

/**
 * Jackal Custom Aminos
 */
import {
  createFileTreeAminoConverters,
  createNotificationsAminoConverters,
  createOracleAminoConverters,
  createRnsAminoConverters,
  createStorageAminoConverters
} from '@/snackages/tx/custom/amino'

/**
 * Interfaces
 */
interface TxClientOptions {
  addr: string
}
export interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}
export type TMasterBroadcaster = (msgs: EncodeObject[], options: SignAndBroadcastOptions) => Promise<DeliverTxResponse>
export interface IGenBroadcaster {
  masterBroadcaster: TMasterBroadcaster
}

/**
 * The Magic
 */
const masterTypes = [
  ...Object.values(fileTreeTypes),
  ...Object.values(oracleTypes),
  ...Object.values(rnsTypes),
  ...Object.values(storageTypes),
  ...Object.values(bankTypes),
  ...Object.values(distributionTypes),
  ...Object.values(govTypes),
  ...Object.values(slashingTypes),
  ...Object.values(stakingTypes)
]

const masterAminos: AminoConverters = {
  ...createDefaultAminoConverters(),
  ...createFileTreeAminoConverters(),
  ...createNotificationsAminoConverters(),
  ...createOracleAminoConverters(),
  ...createRnsAminoConverters(),
  ...createStorageAminoConverters()
}

const registry = new Registry(<any>masterTypes)
const defaultFee = {
  amount: [],
  gas: '200000',
}

const genBroadcaster = async (
  wallet: OfflineSigner,
  { addr: addr }: TxClientOptions = { addr: 'http://localhost:26657' }
): Promise<IGenBroadcaster> => {
  if (!wallet) throw new Error('wallet is required')
  const client = await SigningStargateClient.connectWithSigner(
    addr,
    wallet,
    {
      registry,
      aminoTypes: new AminoTypes(masterAminos)
    }
  )
  const { address } = (await wallet.getAccounts())[0]

  return {
    masterBroadcaster: (
      msgs: EncodeObject[],
      { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ''}
    ) => client.signAndBroadcast(address, msgs, fee, memo)
  }
}

export {
  genBroadcaster
}
