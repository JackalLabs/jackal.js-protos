import type { PageRequest } from '@/postGen/cosmos/base/query/v1beta1/pagination'
import type {
  QueryAllBids,
  QueryAllForSale,
  QueryAllInits,
  QueryAllNames,
  QueryBid,
  QueryForSale,
  QueryInit,
  QueryListOwnedNames,
  QueryName,
  QueryParams,
} from '@/postGen/canine_chain/rns/query'
import { WithOptional } from '@/types/misc'

/**
 * QueryAllBids Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllBids = Documentation<
  {
    pagination?: PageRequest
  },
  WithOptional<QueryAllBids, 'pagination'>
>

/**
 * QueryAllForSale Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllForSale = Documentation<
  {
    pagination?: PageRequest
  },
  WithOptional<QueryAllForSale, 'pagination'>
>

/**
 * QueryAllInits Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllInits = Documentation<
  {
    pagination?: PageRequest
  },
  WithOptional<QueryAllInits, 'pagination'>
>

/**
 * QueryAllNames Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllNames = Documentation<
  {
    pagination?: PageRequest
  },
  WithOptional<QueryAllNames, 'pagination'>
>

/**
 * QueryBid Documentation
 * @prop {string} name - Name of RNS.
 */
export type DQueryBid = Documentation<
  {
    name: string
  },
  QueryBid
>

/**
 * QueryForSale Documentation
 * @prop {string} name - Name of RNS.
 */
export type DQueryForSale = Documentation<
  {
    name: string
  },
  QueryForSale
>

/**
 * QueryInit Documentation
 * @prop {string} address - Jackal wallet address to check.
 */
export type DQueryInit = Documentation<
  {
    address: string
  },
  QueryInit
>

/**
 * QueryListOwnedNames Documentation
 * @prop {string} address - Jackal wallet address to check.
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryListOwnedNames = Documentation<
  {
    address: string
    pagination?: PageRequest
  },
  WithOptional<QueryListOwnedNames, 'pagination'>
>

/**
 * QueryName Documentation
 * @prop {string} name - Name of RNS.
 */
export type DQueryName = Documentation<
  {
    name: string
  },
  QueryName
>

/**
 * QueryJklMintParams Documentation
 *
 * No parameters.
 */
export type DQueryRnsParams = Documentation<{}, QueryParams>
