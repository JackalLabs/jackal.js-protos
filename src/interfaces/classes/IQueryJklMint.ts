import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryInflationRequest,
  QueryInflationResponse,
  QueryParamsRequest,
  QueryParamsResponse
} from '@/postgen/canine_chain/jklmint/query'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export interface IQueryJklMint {
  /** Parameters queries the parameters of the module. */
  queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>>

  /** Inflation returns the current minting inflation value. */
  queryInflation(
    request: DeepPartial<QueryInflationRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryInflationResponse>>
}
