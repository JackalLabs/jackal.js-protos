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
  QueryParamsResponse,
} from '@/postGen/canine_chain/rns/query'
import type { Params } from '@/postGen/canine_chain/rns/params'
import type { PageResponse } from '@/postGen/cosmos/base/query/v1beta1/pagination'
import type { DBid, DForsale, DName } from '@/types/rns'

/**
 * This is the response for the [RNS] Query/AllBids RPC method.
 *
 * @prop {DBid[]} bids - Array of Bid items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllBidsResponseStrict = ModifyDeep<
  QueryAllBidsResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [RNS] Query/AllForSale RPC method.
 *
 * @prop {DForsale[]} forSale - Array of Forsale items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllForSaleResponseStrict = ModifyDeep<
  QueryAllForSaleResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [RNS] Query/AllInits RPC method.
 *
 * @prop {DInit[]} init - Array of Init items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllInitsResponseStrict = ModifyDeep<
  QueryAllInitsResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [RNS] Query/AllNames RPC method.
 *
 * @prop {DName[]} name - Array of Name items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllNamesResponseStrict = ModifyDeep<
  QueryAllNamesResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [RNS] Query/Bid RPC method.
 *
 * @prop {DBid} bids - Single Bid item.
 */
export type TQueryBidResponseStrict = ModifyDeep<
  QueryBidResponse,
  { bids: DBid }
>

/**
 * This is the response for the [RNS] Query/ForSale RPC method.
 *
 * @prop {DForsale} forSale - Single Forsale item.
 */
export type TQueryForSaleResponseStrict = ModifyDeep<
  QueryForSaleResponse,
  { forSale: DForsale }
>

/**
 * This is the response for the [RNS] Query/Init RPC method.
 *
 * @prop {boolean} init - Init status of single address.
 */
export type TQueryInitResponseStrict = ModifyDeep<
  QueryInitResponse,
  { init: boolean }
>

/**
 * This is the response for the [RNS] Query/ListOwnedNames RPC method.
 *
 * @prop {DName[]} names - Array of Name items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryListOwnedNamesResponseStrict = ModifyDeep<
  QueryListOwnedNamesResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [RNS] Query/Name RPC method.
 *
 * @prop {DName} name - Single Name item.
 */
export type TQueryNameResponseStrict = ModifyDeep<
  QueryNameResponse,
  { name: DName }
>

/**
 * This is the response for the [RNS] Query/Params RPC method.
 *
 * @prop {DRnsParams} params - Current parameters of the RNS module.
 */
export type TQueryRnsParamsResponseStrict = ModifyDeep<
  QueryParamsResponse,
  { params: Params }
>

/**
 * RnsParams Documentation
 *
 * RnsParams defines current parameters of the RNS module.
 * @prop {string} depositAccount - Jackal Wallet address to receive funds from RNS registrations.
 */
export type DRnsParams = {
  depositAccount: string
}
