import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryClientImpl,
  QueryInflationRequest, QueryInflationResponse,
  QueryParamsRequest, QueryParamsResponse
} from '@/postgen/canine_chain/jklmint/query'
import IQueryJklMint from '@/interfaces/classes/IQueryJklMint'

export default class QueryJklMint implements IQueryJklMint {
  private readonly queryClient: Query

  constructor(rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.queryClient.Params(request, metadata)
  }
  /** Inflation returns the current minting inflation value. */
  queryInflation(request: DeepPartial<QueryInflationRequest>, metadata?: grpc.Metadata): Promise<QueryInflationResponse> {
    return this.queryClient.Inflation(request, metadata)
  }
}
