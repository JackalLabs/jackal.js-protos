import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query, QueryAllFeedsRequest, QueryAllFeedsResponse,
  QueryClientImpl, QueryFeedRequest, QueryFeedResponse,
  QueryParamsRequest, QueryParamsResponse
} from '@/postgen/canine_chain/oracle/query'
import IQueryOracle from '@/interfaces/classes/IQueryOracle'

export default class QueryOracle implements IQueryOracle {
  private readonly queryClient: Query

  constructor(rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.queryClient.Params(request, metadata)
  }
  queryFeed(request: DeepPartial<QueryFeedRequest>, metadata?: grpc.Metadata): Promise<QueryFeedResponse> {
    return this.queryClient.Feed(request, metadata)
  }
  queryAllFeeds(request: DeepPartial<QueryAllFeedsRequest>, metadata?: grpc.Metadata): Promise<QueryAllFeedsResponse> {
    return this.queryClient.AllFeeds(request, metadata)
  }
}
