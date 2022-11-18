import { OfflineSigner } from '@cosmjs/proto-signing'
import IQueryRns from '@/interfaces/classes/IQueryRns'
import IQueryJklMint from '@/interfaces/classes/IQueryJklMint'
import IQueryBank from '@/interfaces/classes/IQueryBank'
import IQueryDistribution from '@/interfaces/classes/IQueryDistribution'
import IQueryGov from '@/interfaces/classes/IQueryGov'
import IQueryStaking from '@/interfaces/classes/IQueryStaking'
import { ITxRns } from '@/snackages/tx/custom/rns'

export default interface IProtoBuilder {
  /** General */
  makeMasterBroadcaster(signer: OfflineSigner, { addr: string })

  /** Static */
  makeBankQuery (): IQueryBank
  makeDistributionQuery (): IQueryDistribution
  makeGovQuery (): IQueryGov
  makeStakingQuery (): IQueryStaking
  /** Custom */
  makeJklMintQuery (): IQueryJklMint
  makeRnsQuery (): IQueryRns
  makeRnsTx (): ITxRns

}
