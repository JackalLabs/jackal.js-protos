import { IQueryFileTree } from '@/interfaces/classes/IQueryFileTree'
import { IQueryJklMint } from '@/interfaces/classes/IQueryJklMint'
import { IQueryNotifications } from '@/interfaces/classes/IQueryNotifications'
import { IQueryOracle } from '@/interfaces/classes/IQueryOracle'
import { IQueryRns } from '@/interfaces/classes/IQueryRns'
import { IQueryStorage } from '@/interfaces/classes/IQueryStorage'
import { IQueryABCI } from '@/interfaces/classes/IQueryABCI'
import { IQueryBank } from '@/interfaces/classes/IQueryBank'
import { IQueryDistribution } from '@/interfaces/classes/IQueryDistribution'
import { IQueryGov } from '@/interfaces/classes/IQueryGov'
import { IQuerySlashing } from '@/interfaces/classes/IQuerySlashing'
import { IQueryStaking } from '@/interfaces/classes/IQueryStaking'

export interface IAllQuery {
  /** Custom */
  fileTree: IQueryFileTree
  jklMint: IQueryJklMint
  notifications: IQueryNotifications
  oracle: IQueryOracle
  rns: IQueryRns
  storage: IQueryStorage
  /** Static */
  abci: IQueryABCI
  bank: IQueryBank
  distribution: IQueryDistribution
  gov: IQueryGov
  slashing: IQuerySlashing
  staking: IQueryStaking
}
