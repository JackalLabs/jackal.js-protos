import type { PageRequest } from '@/postgen/cosmos/base/query/v1beta1/pagination'
import type { QueryAllFeeds, QueryFeed, QueryParams } from '@/postgen/canine_chain/oracle/query'

/**
 * QueryAllFeeds Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllFeeds = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllFeeds>

/**
 * QueryFeed Documentation
 * @prop {string} name - Name of feed.
 */
export type DQueryFeed = Documentation<{
  name: string;
}, QueryFeed>

/**
 * QueryJklMintParams Documentation
 *
 * No parameters.
 */
export type DQueryOracleParams = Documentation<{}, QueryParams>
