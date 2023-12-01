import type { Params } from '@/postGen/canine_chain/oracle/params'
import type { PageResponse } from '@/postGen/cosmos/base/query/v1beta1/pagination'
import type { QueryAllFeedsResponse, QueryFeedResponse, QueryParamsResponse } from '@/postGen/canine_chain/oracle/query'
import type { DFeed } from '@/types/oracle'

/**
 * This is the response for the [Oracle] Query/AllFeeds RPC method.
 *
 * @prop {DFeed[]} feed - Array of Feed items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllFeedsResponseStrict
  = ModifyDeep<QueryAllFeedsResponse, { pagination: PageResponse }>

/**
 * This is the response for the [Oracle] Query/Feed RPC method.
 *
 * @prop {DFeed} feed - Single Feed item.
 */
export type TQueryFeedResponseStrict
  = ModifyDeep<QueryFeedResponse, { feed: DFeed }>

/**
 * This is the response for the [Oracle] Query/Params RPC method.
 *
 * @prop {DOracleParams} params - Current parameters of the Oracle module.
 */
export type TQueryOracleParamsResponseStrict
  = ModifyDeep<QueryParamsResponse, { params: Params }>

/**
 * OracleParams Documentation
 *
 * OracleParams defines current parameters of the Oracle module.
 * @prop {string} deposit - Required deposit total to create a new oracle instance.
 */
export type DOracleParams = {
  deposit: string;
}
