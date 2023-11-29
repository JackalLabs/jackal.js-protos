import type {
  QueryInflationResponse,
  QueryParamsResponse
} from '@/postgen/canine_chain/jklmint/query'
import type { Params } from '@/postgen/canine_chain/jklmint/params'

/**
 * This is the response for the [JklMint] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryInflationResponseStrict
  = ModifyDeep<QueryInflationResponse, { inflation: Uint8Array }>

/**
 * This is the response for the [JklMint] Query/Params RPC method
 *
 * @prop {Params} params
 * - mintDenom: string
 * - providerRatio: number
 * - tokensPerBlock: number
 */
export type TQueryJklMintParamsResponseStrict
  = ModifyDeep<QueryParamsResponse, { params: Params }>
