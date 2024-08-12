import type { PageRequest } from '@/postGen/cosmos/base/query/v1beta1/pagination'
import { WithOptional } from '@/types/misc'
import { QueryAllBalancesRequest, QueryBalanceRequest } from '@/postGen/cosmos/bank/v1beta1/query'

/**
 * QueryAllBalances Documentation
 * @prop {string} address - Address of token.
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllBalances = Documentation<
  {
    address: string
    pagination?: PageRequest
  },
  WithOptional<QueryAllBalancesRequest, 'pagination'>
>

/**
 * QueryBalance Documentation
 * @prop {string} address - Address of token.
 * @prop {string} denom - Denom of token.
 */
export type DQueryBalance = Documentation<
  {
    address: string
    denom: string

  },
  QueryBalanceRequest
>
