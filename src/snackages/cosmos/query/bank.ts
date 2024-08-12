import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate'
import type { IBankExtension } from '@/interfaces'
import type { QueryAllBalancesRequest, QueryBalanceRequest } from '@/postGen/cosmos/bank/v1beta1/query'
import { QueryClientImpl } from '@/postGen/cosmos/bank/v1beta1/query'
import type {
  DQueryAllBalances,
  DQueryBalance,
  TQueryAllBalancesResponseStrict,
  TQueryBalanceResponseStrict
} from '@/types'
import { warnError } from '@/utils/misc'
import { assertDefined } from '@cosmjs/utils'

export function createBankExtension (base: QueryClient): IBankExtension {
  const rpc = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpc)

  return {
    bank: {
      allBalances: async (
        request: DQueryAllBalances
      ): Promise<TQueryAllBalancesResponseStrict> => {
        const resp = await queryService
          .AllBalances(request as QueryAllBalancesRequest)
          .catch((err) => {
            warnError('[Bank] allBalances', err)
            throw err
          })
        return resp as TQueryAllBalancesResponseStrict
      },
      balance: async (
        request: DQueryBalance
      ): Promise<TQueryBalanceResponseStrict> => {
        const resp = await queryService
          .Balance(request as QueryBalanceRequest)
          .catch((err) => {
            warnError('[Bank] balance', err)
            throw err
          })
        assertDefined(resp.balance)
        return resp as TQueryBalanceResponseStrict
      }
    }
  }
}
