import {
  DQueryInflation,
  DQueryJklMintParams,
  TQueryInflationResponseStrict,
  TQueryJklMintParamsResponseStrict,
} from '@/types/queries'

/**
 * @interface IJklMintExtension
 * @property {IJklMintExtensionMembers} jklMint
 */
export interface IJklMintExtension
  extends Record<string, IJklMintExtensionMembers> {
  readonly jklMint: IJklMintExtensionMembers
}

/**
 * All functions for querying data from the JklMint module.
 *
 * @interface IJklMintExtensionMembers
 * @property {inflation} inflation()
 * @property {params} params()
 */
export interface IJklMintExtensionMembers
  extends Record<string, (request?: any) => Promise<any>> {
  /**
   * @function inflation
   * @param {DQueryInflation} [request]
   * @returns Promise<TQueryInflationResponseStrict>
   */
  readonly inflation: (
    request?: DQueryInflation,
  ) => Promise<TQueryInflationResponseStrict>

  /**
   * @function params
   * @param {DQueryJklMintParams} [request]
   * @returns Promise<TQueryJklMintParamsResponseStrict>
   */
  readonly params: (
    request?: DQueryJklMintParams,
  ) => Promise<TQueryJklMintParamsResponseStrict>
}
