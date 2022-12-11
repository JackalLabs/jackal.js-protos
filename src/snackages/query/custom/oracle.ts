import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query, QueryAllFeedsRequest, QueryAllFeedsResponse,
  QueryClientImpl, QueryFeedRequest, QueryFeedResponse,
  QueryParamsRequest, QueryParamsResponse
} from '@/postgen/canine_chain/oracle/query'
import IQueryOracle from '@/interfaces/classes/IQueryOracle'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryOracle implements IQueryOracle {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  async queryParams (
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>> {
    return await this.queryClient.Params(request, metadata)
      .then((resp: QueryParamsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryParamsResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Oracle] queryParams: ${err}`)
        const errRet: SuccessNoUndefined<QueryParamsResponse> = {
          success: false,
          params: {
            deposit: ''
          }
        }
        return errRet
      })
  }

  async queryFeed (
    request: DeepPartial<QueryFeedRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFeedResponse>> {
    return await this.queryClient.Feed(request, metadata)
      .then((resp: QueryFeedResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryFeedResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Oracle] queryFeed: ${err}`)
        const errRet: SuccessNoUndefined<QueryFeedResponse> = {
          success: false,
          feed: {
            owner: '',
            data: '',
            lastUpdate: new Date(),
            name: ''
          }
        }
        return errRet
      })
  }

  async queryAllFeeds (
    request: DeepPartial<QueryAllFeedsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllFeedsResponse>> {
    return await this.queryClient.AllFeeds(request, metadata)
      .then((resp: QueryAllFeedsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllFeedsResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Oracle] queryAllFeeds: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllFeedsResponse> = {
          success: false,
          feed: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }
}
