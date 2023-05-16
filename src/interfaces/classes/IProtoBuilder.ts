import { ITxFileTree } from '@/snackages/tx/custom/fileTree'
import { ITxOracle } from '@/snackages/tx/custom/oracle'
import { ITxRns } from '@/snackages/tx/custom/rns'
import { ITxStorage } from '@/snackages/tx/custom/storage'
import { ITxBank } from '@/snackages/tx/static/bank'
import { ITxDistribution } from '@/snackages/tx/static/distribution'
import { ITxGov } from '@/snackages/tx/static/gov'
import { ITxSlashing } from '@/snackages/tx/static/slashing'
import { ITxStaking } from '@/snackages/tx/static/staking'
import { IAllTx } from '@/interfaces/IAllTx'
import { IGenBroadcaster } from '@/customBroadcast'
import IQueryBuilder from '@/interfaces/classes/IQueryBuilder'
import { ITxNotifications } from '@/snackages/tx/custom/notifications'

export default interface IProtoBuilder extends IQueryBuilder {
  /** General */
  makeMasterBroadcaster(): Promise<IGenBroadcaster>

  /** Custom */
  makeFileTreeTx(): ITxFileTree
  makeNotificationsTx(): ITxNotifications
  makeOracleTx(): ITxOracle
  makeRnsTx(): ITxRns
  makeStorageTx(): ITxStorage

  /** Static */
  makeBankTx(): ITxBank
  makeDistributionTx(): ITxDistribution
  makeGovTx(): ITxGov
  makeSlashingTx(): ITxSlashing
  makeStakingTx(): ITxStaking

  /** Bundles */
  makeAllTx(): IAllTx
}
