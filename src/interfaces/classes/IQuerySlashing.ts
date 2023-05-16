import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryParamsRequest,
  QueryParamsResponse,
  QuerySigningInfoRequest,
  QuerySigningInfoResponse,
  QuerySigningInfosRequest,
  QuerySigningInfosResponse
} from '@/postgen/cosmos/slashing/v1beta1/query'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export interface IQuerySlashing {
  /** Params queries the parameters of slashing module */
  queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>>
  /** SigningInfo queries the signing info of given cons address */
  querySigningInfo(
    request: DeepPartial<QuerySigningInfoRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QuerySigningInfoResponse>>
  /** SigningInfos queries signing info of all validators */
  querySigningInfos(
    request: DeepPartial<QuerySigningInfosRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QuerySigningInfosResponse>>
}
