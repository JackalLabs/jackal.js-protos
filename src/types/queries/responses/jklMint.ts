import type { QueryInflationResponse, QueryParamsResponse } from '@/postGen/canine_chain/jklmint/query'
import type { Params } from '@/postGen/canine_chain/jklmint/params'

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
 * @prop {number} providerRatio - Portion of emissions diverted to providers.
 * @prop {number} tokensPerBlock - Token emissions per block.
 */
export type DJklMintParams = {
  mintDenom: string
  providerRatio: number
  tokensPerBlock: number
}
