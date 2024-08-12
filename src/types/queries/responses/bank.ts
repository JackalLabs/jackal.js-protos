import type { PageResponse } from '@/postGen/cosmos/base/query/v1beta1/pagination'
import type { QueryAllBalancesResponse, QueryBalanceResponse } from '@/postGen/cosmos/bank/v1beta1/query'
import type { DCoin } from '@/types'

/**
 * This is the response for the [Bank] Query/AllBalances RPC method.
 *
 * @prop {DCoin[]} balances - Array of DCoin items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllBalancesResponseStrict = ModifyDeep<
  QueryAllBalancesResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Bank] Query/Balance RPC method.
 *
 * @prop {DCoin} balance - Single DCoin item.
 */
export type TQueryBalanceResponseStrict = ModifyDeep<
  QueryBalanceResponse,
  { balance: DCoin }
>

