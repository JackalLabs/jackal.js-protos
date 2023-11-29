import type {
  QueryAllBidsResponse,
  QueryAllForSaleResponse,
  QueryAllInitsResponse,
  QueryAllNamesResponse,
  QueryBidResponse,
  QueryForSaleResponse,
  QueryInitResponse,
  QueryListOwnedNamesResponse,
  QueryNameResponse,
  QueryParamsResponse
} from '@/postgen/canine_chain/rns/query'
import type { Params } from '@/postgen/canine_chain/rns/params'
import type { PageResponse } from '@/postgen/cosmos/base/query/v1beta1/pagination'
import type { DBid, DForsale, DName } from '@/types'

/**
 * This is the response for the [RNS] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryAllBidsResponseStrict
  = ModifyDeep<QueryAllBidsResponse, { pagination: PageResponse }>

/**
 * This is the response for the [RNS] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryAllForSaleResponseStrict
  = ModifyDeep<QueryAllForSaleResponse, { pagination: PageResponse }>

/**
 * This is the response for the [RNS] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryAllInitsResponseStrict
  = ModifyDeep<QueryAllInitsResponse, { pagination: PageResponse }>

/**
 * This is the response for the [RNS] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryAllNamesResponseStrict
  = ModifyDeep<QueryAllNamesResponse, { pagination: PageResponse }>

/**
 * This is the response for the [RNS] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryBidResponseStrict
  = ModifyDeep<QueryBidResponse, { bids: DBid }>

/**
 * This is the response for the [RNS] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryForSaleResponseStrict
  = ModifyDeep<QueryForSaleResponse, { forSale: DForsale }>

/**
 * This is the response for the [RNS] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryInitResponseStrict
  = ModifyDeep<QueryInitResponse, { init: boolean }>

/**
 * This is the response for the [RNS] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryListOwnedNamesResponseStrict
  = ModifyDeep<QueryListOwnedNamesResponse, { pagination: PageResponse }>

/**
 * This is the response for the [RNS] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryNameResponseStrict
  = ModifyDeep<QueryNameResponse, { name: DName }>

/**
 * This is the response for the [RNS] Query/Params RPC method
 *
 * @prop {Params} params
 * - depositAccount: string
 */
export type TQueryRnsParamsResponseStrict
  = ModifyDeep<QueryParamsResponse, { params: Params }>
