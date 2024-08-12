import {
  DQueryAllBalances,
  DQueryBalance,
  TQueryAllBalancesResponseStrict,
  TQueryBalanceResponseStrict
} from '@/types/queries'

/**
 * @interface IBankExtension
 * @property {IBankExtensionMembers} bank
 */
export interface IBankExtension
  extends Record<string, IBankExtensionMembers> {
  readonly bank: IBankExtensionMembers
}

/**
 * Some functions for querying data from the Bank module.
 *
 * @interface IStorageExtensionMembers
 * @property {allBalances} allBalances()
 * @property {balance} balance()

 */
export interface IBankExtensionMembers
  extends Record<string, (request?: any) => Promise<any>> {
  /**
   * @function allBalances
   * @param {DQueryAllBalances} request
   * @returns Promise<TQueryAllBalancesResponseStrict>
   */
  readonly allBalances: (
    request: DQueryAllBalances
  ) => Promise<TQueryAllBalancesResponseStrict>

  /**
   * @function balance
   * @param {DQueryBalance} request
   * @returns Promise<TQueryBalanceResponseStrict>
   */
  readonly balance: (
    request: DQueryBalance
  ) => Promise<TQueryBalanceResponseStrict>

}
