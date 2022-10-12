import { StdFee } from '@cosmjs/launchpad'
import { EncodeObject, OfflineSigner, Registry } from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'

/**
 * Jackal Custom Protos
 */
import { types as cosmTypes } from './protos/jackal-dao/canine/cosmwasm.wasm.v1/module'
import { types as dsigTypes } from './protos/jackal-dao/canine/jackaldao.canine.dsig/module'
import { types as filetreeTypes } from './protos/jackal-dao/canine/jackaldao.canine.filetree/module'
import { types as jklTypes } from './protos/jackal-dao/canine/jackaldao.canine.jklmint/module'
import { types as lpTypes } from './protos/jackal-dao/canine/jackaldao.canine.lp/module'
import { types as rnsTypes } from './protos/jackal-dao/canine/jackaldao.canine.rns/module'
import { types as storageTypes } from './protos/jackal-dao/canine/jackaldao.canine.storage/module'

/**
 * Jackal Stock CosmosSDK Protos
 */
import { types as bankTypes } from './protos/cosmos/cosmos-sdk/cosmos.bank.v1beta1/module'
import { types as govTypes } from './protos/cosmos/cosmos-sdk/cosmos.gov.v1beta1/module'
import { types as stakingTypes } from './protos/cosmos/cosmos-sdk/cosmos.staking.v1beta1/module'

/**
 * Interfaces
 */
interface TxClientOptions {
  addr: string
}
interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

/**
 * The Magic
 */
const masterTypes = [
  ...cosmTypes,
  ...dsigTypes,
  ...filetreeTypes,
  ...jklTypes,
  ...lpTypes,
  ...rnsTypes,
  ...storageTypes,
  ...bankTypes,
  ...govTypes,
  ...stakingTypes
]
const registry = new Registry(<any>masterTypes)
const defaultFee = {
  amount: [],
  gas: '200000',
}

const genBroadcaster = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: 'http://localhost:26657' }) => {
  if (!wallet) throw new Error('wallet is required')
  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry })
  const { address } = (await wallet.getAccounts())[0]

  return {
    masterBroadcaster: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ''}) => client.signAndBroadcast(address, msgs, fee,memo)
  }
}

export {
  genBroadcaster
}
