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

export default interface IProtoBuilder {
  /** General */
  makeMasterBroadcaster (): Promise<IGenBroadcaster>

  /** Custom */
  makeFileTreeQuery (): IQueryFileTree
  makeFileTreeTx (): ITxFileTree
  makeJklMintQuery (): IQueryJklMint
  makeOracleQuery (): IQueryOracle
  makeOracleTx (): ITxOracle
  makeRnsQuery (): IQueryRns
  makeRnsTx (): ITxRns
  makeStorageQuery (): IQueryStorage
  makeStorageTx (): ITxStorage

  /** Static */
  makeABCIQuery (): IQueryABCI
  makeBankQuery (): IQueryBank
  makeBankTx (): ITxBank
  makeDistributionQuery (): IQueryDistribution
  makeDistributionTx (): ITxDistribution
  makeGovQuery (): IQueryGov
  makeGovTx (): ITxGov
  makeSlashingQuery (): IQuerySlashing
  makeSlashingTx (): ITxSlashing
  makeStakingQuery (): IQueryStaking
  makeStakingTx (): ITxStaking

  /** Bundles */
  makeAllQuery (): IAllQuery
  makeAllTx (): IAllTx
}
