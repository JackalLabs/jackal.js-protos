import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryAllFeedsRequest,
  QueryAllFeedsResponse,
  QueryFeedRequest,
  QueryFeedResponse,
  QueryParamsRequest,
  QueryParamsResponse
} from '@/postgen/canine_chain/oracle/query'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export interface IQueryOracle {
  /** Parameters queries the parameters of the module. */
  queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>>

  queryFeed(
    request: DeepPartial<QueryFeedRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFeedResponse>>

  queryAllFeeds(
    request: DeepPartial<QueryAllFeedsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllFeedsResponse>>
}
