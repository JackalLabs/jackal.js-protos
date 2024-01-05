import type { ITxBank, ITxFileTree, ITxNotifications, ITxOracle, ITxRns, ITxStorage } from '@/snackages'

/**
 * Collection of all custom Jackal Msgs.
 * @interface ITxLibrary
 * @property {ITxFileTree} fileTree
 * @property {ITxNotifications} notifications
 * @property {ITxOracle} oracle
 * @property {ITxRns} rns
 * @property {ITxStorage} storage
 * @property {ITxBank} bank
 */
export interface ITxLibrary {
  fileTree: ITxFileTree
  notifications: ITxNotifications
  oracle: ITxOracle
  rns: ITxRns
  storage: ITxStorage
  /* cosmos */
  bank: ITxBank
}
