import type { ITxBank, ITxCosmwasm, ITxFileTree, ITxNotifications, ITxOracle, ITxRns, ITxStorage } from '@/snackages'

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
}

/**
 * Collection of all host Msgs.
 * @property {ITxCosmwasm} cosmwasm
 */
export interface IHostTxLibrary extends Record<string, any> {
  cosmwasm: ITxCosmwasm
}
