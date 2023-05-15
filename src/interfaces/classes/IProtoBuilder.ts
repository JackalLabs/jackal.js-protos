import IQueryFileTree from '@/interfaces/classes/IQueryFileTree'
import IQueryJklMint from '@/interfaces/classes/IQueryJklMint'
import IQueryOracle from '@/interfaces/classes/IQueryOracle'
import IQueryRns from '@/interfaces/classes/IQueryRns'
import IQueryStorage from '@/interfaces/classes/IQueryStorage'
import IQueryABCI from '@/interfaces/classes/IQueryABCI'
import IQueryBank from '@/interfaces/classes/IQueryBank'
import IQueryDistribution from '@/interfaces/classes/IQueryDistribution'
import IQueryGov from '@/interfaces/classes/IQueryGov'
import IQuerySlashing from '@/interfaces/classes/IQuerySlashing'
import IQueryStaking from '@/interfaces/classes/IQueryStaking'
import { ITxFileTree } from '@/snackages/tx/custom/fileTree'
import { ITxOracle } from '@/snackages/tx/custom/oracle'
import { ITxRns } from '@/snackages/tx/custom/rns'
import { ITxStorage } from '@/snackages/tx/custom/storage'
import { ITxBank } from '@/snackages/tx/static/bank'
import { ITxDistribution } from '@/snackages/tx/static/distribution'
import { ITxGov } from '@/snackages/tx/static/gov'
import { ITxSlashing } from '@/snackages/tx/static/slashing'
import { ITxStaking } from '@/snackages/tx/static/staking'
import IAllQuery from '@/interfaces/IAllQuery'
import IAllTx from '@/interfaces/IAllTx'
import { IGenBroadcaster } from '@/customBroadcast'
import IQueryBuilder from '@/interfaces/classes/IQueryBuilder'
import { ITxNotifications } from '@/snackages/tx/custom/notifications'

export default interface IProtoBuilder extends IQueryBuilder {
  /** General */
  makeMasterBroadcaster (): Promise<IGenBroadcaster>

  /** Custom */
  makeFileTreeTx (): ITxFileTree
  makeNotificationsTx (): ITxNotifications
  makeOracleTx (): ITxOracle
  makeRnsTx (): ITxRns
  makeStorageTx (): ITxStorage

  /** Static */
  makeBankTx (): ITxBank
  makeDistributionTx (): ITxDistribution
  makeGovTx (): ITxGov
  makeSlashingTx (): ITxSlashing
  makeStakingTx (): ITxStaking

  /** Bundles */
  makeAllTx (): IAllTx
}
