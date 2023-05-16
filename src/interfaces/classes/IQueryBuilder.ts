import { IQueryFileTree } from '@/interfaces/classes/IQueryFileTree'
import { IQueryJklMint } from '@/interfaces/classes/IQueryJklMint'
import { IQueryOracle } from '@/interfaces/classes/IQueryOracle'
import { IQueryRns } from '@/interfaces/classes/IQueryRns'
import { IQueryStorage } from '@/interfaces/classes/IQueryStorage'
import { IQueryABCI } from '@/interfaces/classes/IQueryABCI'
import { IQueryBank } from '@/interfaces/classes/IQueryBank'
import { IQueryDistribution } from '@/interfaces/classes/IQueryDistribution'
import { IQueryGov } from '@/interfaces/classes/IQueryGov'
import { IQuerySlashing } from '@/interfaces/classes/IQuerySlashing'
import { IQueryStaking } from '@/interfaces/classes/IQueryStaking'
import { IAllQuery } from '@/interfaces/IAllQuery'

export default interface IQueryBuilder {
  /** Custom */
  makeFileTreeQuery(): IQueryFileTree
  makeJklMintQuery(): IQueryJklMint
  makeOracleQuery(): IQueryOracle
  makeRnsQuery(): IQueryRns
  makeStorageQuery(): IQueryStorage

  /** Static */
  makeABCIQuery(): IQueryABCI
  makeBankQuery(): IQueryBank
  makeDistributionQuery(): IQueryDistribution
  makeGovQuery(): IQueryGov
  makeSlashingQuery(): IQuerySlashing
  makeStakingQuery(): IQueryStaking

  /** Bundles */
  makeAllQuery(): IAllQuery
}
