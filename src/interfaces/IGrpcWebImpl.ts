import { GrpcWebImpl as IFileTreeGrpc } from '@/postgen/canine_chain/filetree/query'
import {
  GrpcWebImpl,
  GrpcWebImpl as IJklMintGrpc
} from '@/postgen/canine_chain/jklmint/query'
import { GrpcWebImpl as INotificationsGrpc } from '@/postgen/canine_chain/notifications/query'
import { GrpcWebImpl as IOracleGrpc } from '@/postgen/canine_chain/oracle/query'
import { GrpcWebImpl as IRnsGrpc } from '@/postgen/canine_chain/rns/query'
import { GrpcWebImpl as IStorageGrpc } from '@/postgen/canine_chain/storage/query'

import { GrpcWebImpl as IABCIGrpc } from '@/postgen/tendermint/abci/types'
import { GrpcWebImpl as IBankGrpc } from '@/postgen/cosmos/bank/v1beta1/query'
import { GrpcWebImpl as IDistributionGrpc } from '@/postgen/cosmos/distribution/v1beta1/query'
import { GrpcWebImpl as IGovGrpc } from '@/postgen/cosmos/gov/v1beta1/query'
import { GrpcWebImpl as ISlashingGrpc } from '@/postgen/cosmos/slashing/v1beta1/query'
import { GrpcWebImpl as IStakingGrpc } from '@/postgen/cosmos/staking/v1beta1/query'

type TGrpc =
  | IFileTreeGrpc
  | IJklMintGrpc
  | INotificationsGrpc
  | IOracleGrpc
  | IRnsGrpc
  | IStorageGrpc
  | IABCIGrpc
  | IBankGrpc
  | IDistributionGrpc
  | IGovGrpc
  | ISlashingGrpc
  | IStakingGrpc

export {
  GrpcWebImpl,
  TGrpc,
  /** Custom */
  IFileTreeGrpc,
  IJklMintGrpc,
  INotificationsGrpc,
  IOracleGrpc,
  IRnsGrpc,
  IStorageGrpc,
  /** Stock */
  IABCIGrpc,
  IBankGrpc,
  IDistributionGrpc,
  IGovGrpc,
  ISlashingGrpc,
  IStakingGrpc
}
