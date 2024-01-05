import type { PageRequest } from '@/postGen/cosmos/base/query/v1beta1/pagination'
import type {
  QueryAllFeeds,
  QueryFeed,
  QueryParams,
} from '@/postGen/canine_chain/oracle/query'
import { WithOptional } from '@/types/misc'

/**
 * QueryAllFeeds Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllFeeds = Documentation<
  {
    pagination?: PageRequest
  },
  WithOptional<QueryAllFeeds, 'pagination'>
>

/**
 * QueryFeed Documentation
 * @prop {string} name - Name of feed.
 */
export type DQueryFeed = Documentation<
  {
    name: string
  },
  QueryFeed
>

/**
 * QueryJklMintParams Documentation
 *
 * No parameters.
 */
export type DQueryOracleParams = Documentation<{}, QueryParams>
