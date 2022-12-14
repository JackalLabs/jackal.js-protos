import { GrpcWebImpl as IFileTreeGrpc } from '@/postgen/canine_chain/filetree/query'
import { GrpcWebImpl, GrpcWebImpl as IJklMintGrpc } from '@/postgen/canine_chain/jklmint/query'
import { GrpcWebImpl as IOracleGrpc } from '@/postgen/canine_chain/oracle/query'
import { GrpcWebImpl as IRnsGrpc } from '@/postgen/canine_chain/rns/query'
import { GrpcWebImpl as IStorageGrpc } from '@/postgen/canine_chain/storage/query'

import { GrpcWebImpl as IBankGrpc } from '@/postgen/cosmos/bank/v1beta1/query'
import { GrpcWebImpl as IDistributionGrpc } from '@/postgen/cosmos/distribution/v1beta1/query'
import { GrpcWebImpl as IGovGrpc } from '@/postgen/cosmos/gov/v1beta1/query'
import { GrpcWebImpl as IStakingGrpc } from '@/postgen/cosmos/staking/v1beta1/query'

type TGrpc = IFileTreeGrpc
  | IJklMintGrpc
  | IOracleGrpc
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
  IFileTreeGrpc,
  IJklMintGrpc,
  IOracleGrpc,
  IRnsGrpc,
  IStorageGrpc,
  /** Stock */
  IBankGrpc,
  IDistributionGrpc,
  IGovGrpc,
  IStakingGrpc
}
