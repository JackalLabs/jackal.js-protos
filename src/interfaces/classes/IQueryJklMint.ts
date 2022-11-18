import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryInflationRequest, QueryInflationResponse,
  QueryParamsRequest, QueryParamsResponse
} from '@/postgen/canine-chain/jklmint/query'

export default interface IQueryJklMint {
  /** Parameters queries the parameters of the module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Inflation returns the current minting inflation value. */
  queryInflation(request: DeepPartial<QueryInflationRequest>, metadata?: grpc.Metadata): Promise<QueryInflationResponse>;
}
