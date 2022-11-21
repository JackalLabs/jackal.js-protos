import { GrpcWebImpl, GrpcWebImpl as IJklMintGrpc } from '@/postgen/canine-chain/jklmint/query'
import { GrpcWebImpl as IRnsGrpc } from '@/postgen/canine-chain/rns/query'
import { GrpcWebImpl as IStorageGrpc } from '@/postgen/canine-chain/storage/query'

import { GrpcWebImpl as IBankGrpc } from '@/postgen/cosmos/bank/v1beta1/query'
import { GrpcWebImpl as IDistributionGrpc } from '@/postgen/cosmos/distribution/v1beta1/query'
import { GrpcWebImpl as IGovGrpc } from '@/postgen/cosmos/gov/v1beta1/query'
import { GrpcWebImpl as IStakingGrpc } from '@/postgen/cosmos/staking/v1beta1/query'

type TGrpc = IJklMintGrpc
  | IRnsGrpc
  | IStorageGrpc
  | IBankGrpc
  | IDistributionGrpc
  | IGovGrpc
  | IStakingGrpc

export {
  GrpcWebImpl,
  TGrpc,
  /** Custom */
  IJklMintGrpc,
  IRnsGrpc,
  IStorageGrpc,
  /** Stock */
  IBankGrpc,
  IDistributionGrpc,
  IGovGrpc,
  IStakingGrpc
}



