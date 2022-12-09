import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryAllFeedsRequest, QueryAllFeedsResponse,
  QueryFeedRequest, QueryFeedResponse,
  QueryParamsRequest, QueryParamsResponse
} from '@/postgen/canine_chain/oracle/query'

export default interface IQueryOracle {
  /** Parameters queries the parameters of the module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  queryFeed(request: DeepPartial<QueryFeedRequest>, metadata?: grpc.Metadata): Promise<QueryFeedResponse>;
  queryAllFeeds(request: DeepPartial<QueryAllFeedsRequest>, metadata?: grpc.Metadata): Promise<QueryAllFeedsResponse>;
}
