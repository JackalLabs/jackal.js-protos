import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate'
import { assertDefined } from '@cosmjs/utils'
import {
  QueryAllFeeds,
  QueryClientImpl,
} from '@/postGen/canine_chain/oracle/query'
import { warnError } from '@/utils/misc'
import type { IOracleExtension } from '@/interfaces/snackages'
import type {
  DQueryAllFeeds,
  DQueryFeed,
  DQueryOracleParams,
} from '@/types/queries'
import type {
  TQueryAllFeedsResponseStrict,
  TQueryFeedResponseStrict,
  TQueryOracleParamsResponseStrict,
} from '@/types/queries/responses'

export function createOracleExtension(base: QueryClient): IOracleExtension {
  const rpc = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpc)

  return {
    oracle: {
      allFeeds: async (
        request: DQueryAllFeeds = {},
      ): Promise<TQueryAllFeedsResponseStrict> => {
        const resp = await queryService
          .AllFeeds(request as QueryAllFeeds)
          .catch((err) => {
            warnError('[Oracle] allFeeds', err)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllFeedsResponseStrict
      },
      feed: async (request: DQueryFeed): Promise<TQueryFeedResponseStrict> => {
        const resp = await queryService.Feed(request).catch((err) => {
          warnError('[Oracle] feed', err)
          throw err
        })
        assertDefined(resp.feed)
        return resp as TQueryFeedResponseStrict
      },
      params: async (
        request: DQueryOracleParams = {},
      ): Promise<TQueryOracleParamsResponseStrict> => {
        const resp = await queryService.Params(request).catch((err) => {
          warnError('[Oracle] params', err)
          throw err
        })
        assertDefined(resp.params)
        return resp as TQueryOracleParamsResponseStrict
      },
    },
  }
}
