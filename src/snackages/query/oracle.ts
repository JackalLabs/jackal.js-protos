import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate'
import { assertDefined } from '@cosmjs/utils'
import { QueryClientImpl } from '@/postgen/canine_chain/oracle/query'
import type { IOracleExtension } from '@/interfaces/snackages'
import {
  DQueryAllFeeds,
  DQueryFeed,
  DQueryOracleParams,
  TQueryAllFeedsResponseStrict,
  TQueryFeedResponseStrict,
  TQueryOracleParamsResponseStrict
} from '@/types/queries'

export function createOracleExtension(base: QueryClient): IOracleExtension {
  const rpc = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpc)

  return {
    oracle: {
      allFeeds: async (request: DQueryAllFeeds): Promise<TQueryAllFeedsResponseStrict> => {
        const resp = await queryService
          .AllFeeds(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [Oracle] allFeeds: ${err}`)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllFeedsResponseStrict
      },
      feed: async (request: DQueryFeed): Promise<TQueryFeedResponseStrict> => {
        const resp = await queryService
          .Feed(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [Oracle] feed: ${err}`)
            throw err
          })
        assertDefined(resp.feed)
        return resp as TQueryFeedResponseStrict
      },
      params: async (request: DQueryOracleParams): Promise<TQueryOracleParamsResponseStrict> => {
        const resp = await queryService
          .Params(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [Oracle] params: ${err}`)
            throw err
          })
        assertDefined(resp.params)
        return resp as TQueryOracleParamsResponseStrict
      }
    }
  }
}
