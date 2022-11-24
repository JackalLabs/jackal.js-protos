import { OfflineSigner } from '@cosmjs/proto-signing'
import IQueryRns from '@/interfaces/classes/IQueryRns'
import IQueryJklMint from '@/interfaces/classes/IQueryJklMint'
import IQueryBank from '@/interfaces/classes/IQueryBank'
import IQueryDistribution from '@/interfaces/classes/IQueryDistribution'
import IQueryGov from '@/interfaces/classes/IQueryGov'
import IQueryStaking from '@/interfaces/classes/IQueryStaking'
import { ITxRns } from '@/snackages/tx/custom/rns'
import { ITxBank } from '@/snackages/tx/static/bank'
import { ITxDistribution } from '@/snackages/tx/static/distribution'
import { ITxGov } from '@/snackages/tx/static/gov'
import { ITxStaking } from '@/snackages/tx/static/staking'
import IQueryStorage from '@/interfaces/classes/IQueryStorage'
import { ITxStorage } from '@/snackages/tx/custom/storage'
import IAllQuery from '@/interfaces/IAllQuery'
import IAllTx from '@/interfaces/IAllTx'
import { IGenBroadcaster } from '@/customBroadcast'

export default interface IProtoBuilder {
  /** General */
  makeMasterBroadcaster (): Promise<IGenBroadcaster>

  /** Custom */
  makeJklMintQuery (): IQueryJklMint
  makeRnsQuery (): IQueryRns
  makeRnsTx (): ITxRns
  makeStorageQuery (): IQueryStorage
  makeStorageTx (): ITxStorage

  /** Static */
  makeBankQuery (): IQueryBank
  makeBankTx (): ITxBank
  makeDistributionQuery (): IQueryDistribution
  makeDistributionTx (): ITxDistribution
  makeGovQuery (): IQueryGov
  makeGovTx (): ITxGov
  makeStakingQuery (): IQueryStaking
  makeStakingTx (): ITxStaking

  /** Bundles */
  makeAllQuery (): IAllQuery
  makeAllTx (): IAllTx
}
