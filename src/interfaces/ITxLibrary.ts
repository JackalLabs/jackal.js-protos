import type {
  ITxBank,
  ITxCosmwasm,
  ITxFileTree,
  ITxIbc,
  ITxNotifications,
  ITxOracle,
  ITxRns,
  ITxStorage,
} from '@/snackages'

/**
 * Collection of all custom Jackal Msgs.
 * @interface ITxLibrary
 * @property {ITxFileTree} fileTree
 * @property {ITxNotifications} notifications
 * @property {ITxOracle} oracle
 * @property {ITxRns} rns
 * @property {ITxStorage} storage
 * @property {ITxBank} bank
 * @property {ITxCosmwasm} cosmwasm
 * @property {ITxIbc} ibc
 */
export interface ITxLibrary extends Record<string, any> {
  fileTree: ITxFileTree
  notifications: ITxNotifications
  oracle: ITxOracle
  rns: ITxRns
  storage: ITxStorage
  /* cosmos */
  bank: ITxBank
  cosmwasm: ITxCosmwasm
  ibc: ITxIbc
}

/**
 * Collection of all host Msgs.
 * @property {ITxCosmwasm} cosmwasm
 */
export interface IHostTxLibrary extends Record<string, any> {
  cosmwasm: ITxCosmwasm
}
