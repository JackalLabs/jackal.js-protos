import type {
  QueryAllFilesResponse,
  QueryAllPubKeysResponse,
  QueryFileResponse,
  QueryParamsResponse,
  QueryPubKeyResponse
} from '@/postgen/canine_chain/filetree/query'
import type { Params } from '@/postgen/canine_chain/filetree/params'
import type { PageResponse } from '@/postgen/cosmos/base/query/v1beta1/pagination'
import type { DFiles, DPubkey } from '@/types/fileTree'

/**
 * This is the response for the [FileTree] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryFileTreeAllFilesResponseStrict
  = ModifyDeep<QueryAllFilesResponse, { pagination: PageResponse }>

/**
 * This is the response for the [FileTree] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryAllPubKeysResponseStrict
  = ModifyDeep<QueryAllPubKeysResponse, { pagination: PageResponse }>

/**
 * This is the response for the [FileTree] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryFileTreeFileResponseStrict
  = ModifyDeep<QueryFileResponse, { file: DFiles }>

/**
 * This is the response for the [FileTree] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryFileTreeParamsResponseStrict
  = ModifyDeep<QueryParamsResponse, { params: Params }>

/**
 * This is the response for the [FileTree] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryPubKeyResponseStrict
  = ModifyDeep<QueryPubKeyResponse, { pubKey: DPubkey }>
