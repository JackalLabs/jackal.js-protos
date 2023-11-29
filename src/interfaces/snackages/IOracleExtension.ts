import type {
  DQueryAllFeeds,
  DQueryFeed,
  DQueryOracleParams,
  TQueryAllFeedsResponseStrict,
  TQueryFeedResponseStrict,
  TQueryOracleParamsResponseStrict
} from '@/types/queries'

export interface IOracleExtension {
  readonly oracle: {
    readonly allFeeds: (request: DQueryAllFeeds) => Promise<TQueryAllFeedsResponseStrict>
    readonly feed: (request: DQueryFeed) => Promise<TQueryFeedResponseStrict>
    readonly params: (request: DQueryOracleParams) => Promise<TQueryOracleParamsResponseStrict>
  }
}
