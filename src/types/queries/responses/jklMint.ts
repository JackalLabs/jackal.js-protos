import type {QueryInflationResponse, QueryParamsResponse} from '@/postGen/canine_chain/jklmint/query'
import type {Params} from '@/postGen/canine_chain/jklmint/params'

/**
 * This is the response for the [JklMint] Query/Inflation RPC method.
 *
 * @prop {Uint8Array} inflation - Raw inflation rate.
 */
export type TQueryInflationResponseStrict = ModifyDeep<
  QueryInflationResponse,
  { inflation: Uint8Array }
>

/**
 * This is the response for the [JklMint] Query/Params RPC method.
 *
 * @prop {DJklMintParams} params - Current parameters of the JklMint module.
 */
export type TQueryJklMintParamsResponseStrict = ModifyDeep<
  QueryParamsResponse,
  { params: Params }
>

/**
 * JklMintParams Documentation
 *
 * JklMintParams defines current parameters of the JklMint module.
 * @prop {string} mintDenom - Denom of token, should be ujkl for Jackal.
 * @prop {number} devGrantsRatio - Portion of emissions diverted to grant pools.
 * @prop {number} stakerRatio - Portion of emissions diverted to stakers.
 * @prop {number} tokensPerBlock - Token emissions per block.
 * @prop {number} mintDecrease - Curve of emissions decrease.
 * @prop {string} storageStipendAddress - Multisig of storage stipends.
 * @prop {number} storageProviderRatio - Defaults to 12.
 */
export type DJklMintParams = {
  mintDenom: string
  devGrantsRatio: number
  stakerRatio: number
  tokensPerBlock: number
  mintDecrease: number
  storageStipendAddress: string
  storageProviderRatio: number
}
