import { ITxFileTree } from '@/snackages/tx/custom/fileTree'
import { ITxNotifications } from '@/snackages/tx/custom/notifications'
import { ITxOracle } from '@/snackages/tx/custom/oracle'
import { ITxRns } from '@/snackages/tx/custom/rns'
import { ITxStorage } from '@/snackages/tx/custom/storage'
import { ITxBank } from '@/snackages/tx/static/bank'
import { ITxDistribution } from '@/snackages/tx/static/distribution'
import { ITxGov } from '@/snackages/tx/static/gov'
import { ITxSlashing } from '@/snackages/tx/static/slashing'
import { ITxStaking } from '@/snackages/tx/static/staking'

export interface IAllTx {
  /** Custom */
  fileTree: ITxFileTree
  jklMint: null
  notifications: ITxNotifications
  oracle: ITxOracle
  rns: ITxRns
  storage: ITxStorage
  /** Static */
  bank: ITxBank
  distribution: ITxDistribution
  gov: ITxGov
  slashing: ITxSlashing
  staking: ITxStaking
}
