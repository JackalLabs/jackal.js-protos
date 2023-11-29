import type { Params } from '@/postgen/canine_chain/oracle/params'
import type { PageResponse } from '@/postgen/cosmos/base/query/v1beta1/pagination'
import { QueryAllFeedsResponse, QueryFeedResponse, QueryParamsResponse } from '@/postgen/canine_chain/oracle/query'
import { DFeed } from '@/types/oracle'

/**
 * This is the response for the [Oracle] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryAllFeedsResponseStrict
  = ModifyDeep<QueryAllFeedsResponse, { pagination: PageResponse }>

/**
 * This is the response for the [Oracle] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryFeedResponseStrict
  = ModifyDeep<QueryFeedResponse, { feed: DFeed }>

/**
 * This is the response for the [Oracle] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryOracleParamsResponseStrict
  = ModifyDeep<QueryParamsResponse, { params: Params }>
