import IQueryFileTree from '@/interfaces/classes/IQueryFileTree'
import IQueryJklMint from '@/interfaces/classes/IQueryJklMint'
import IQueryOracle from '@/interfaces/classes/IQueryOracle'
import IQueryRns from '@/interfaces/classes/IQueryRns'
import IQueryStorage from '@/interfaces/classes/IQueryStorage'
import IQueryBank from '@/interfaces/classes/IQueryBank'
import IQueryDistribution from '@/interfaces/classes/IQueryDistribution'
import IQueryGov from '@/interfaces/classes/IQueryGov'
import IQueryStaking from '@/interfaces/classes/IQueryStaking'

export default interface IAllQuery {
  /** Custom */
  fileTree: IQueryFileTree,
  jklMint: IQueryJklMint,
  oracle: IQueryOracle,
  rns: IQueryRns,
  storage: IQueryStorage,
  /** Static */
  bank: IQueryBank,
  distribution: IQueryDistribution,
  gov: IQueryGov,
  staking: IQueryStaking
}
