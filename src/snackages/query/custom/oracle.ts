import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryAllFeedsRequest,
  QueryAllFeedsResponse,
  QueryClientImpl,
  QueryFeedRequest,
  QueryFeedResponse,
  QueryParamsRequest,
  QueryParamsResponse
} from '@/postgen/canine_chain/oracle/query'
import { IQueryOracle } from '@/interfaces/classes/IQueryOracle'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryOracle implements IQueryOracle {
  private readonly queryClient: Query

  constructor(rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  async queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>> {
    return await this.queryClient
      .Params(request, metadata)
      .then((resp: QueryParamsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Oracle] queryParams: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            params: {
              deposit: ''
            }
          }
        }
      })
  }

  async queryFeed(
    request: DeepPartial<QueryFeedRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFeedResponse>> {
    return await this.queryClient
      .Feed(request, metadata)
      .then((resp: QueryFeedResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Oracle] queryFeed: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            feed: {
              owner: '',
              data: '',
              lastUpdate: new Date(),
              name: ''
            }
          }
        }
      })
  }

  async queryAllFeeds(
    request: DeepPartial<QueryAllFeedsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllFeedsResponse>> {
    return await this.queryClient
      .AllFeeds(request, metadata)
      .then((resp: QueryAllFeedsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Oracle] queryAllFeeds: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            feed: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }
}
