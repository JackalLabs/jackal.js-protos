import type {
  DQueryAllFeeds,
  DQueryFeed,
  DQueryOracleParams,
  TQueryAllFeedsResponseStrict,
  TQueryFeedResponseStrict,
  TQueryOracleParamsResponseStrict
} from '@/types/queries'

/**
 * @interface IOracleExtension
 * @property {IOracleExtensionMembers} oracle
 */
export interface IOracleExtension {
  readonly oracle: IOracleExtensionMembers
}

/**
 * All functions for querying data from the Oracle module.
 *
 * @interface IOracleExtensionMembers
 * @property {allFeeds} allFeeds()
 * @property {feed} feed()
 * @property {params} params()
 */
export interface IOracleExtensionMembers {

  /**
   * @function allFeeds
   * @param {DQueryAllFeeds} request
   * @returns Promise<TQueryAllFeedsResponseStrict>
   */
  readonly allFeeds: (request: DQueryAllFeeds) => Promise<TQueryAllFeedsResponseStrict>

  /**
   * @function feed
   * @param {DQueryFeed} request
   * @returns Promise<TQueryFeedResponseStrict>
   */
  readonly feed: (request: DQueryFeed) => Promise<TQueryFeedResponseStrict>

  /**
   * @function params
   * @param {DQueryOracleParams} request
   * @returns Promise<TQueryOracleParamsResponseStrict>
   */
  readonly params: (request: DQueryOracleParams) => Promise<TQueryOracleParamsResponseStrict>
}
