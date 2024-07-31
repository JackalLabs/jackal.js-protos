import type {
  QueryAllFilesResponse,
  QueryAllPubKeysResponse,
  QueryFileResponse,
  QueryParamsResponse,
  QueryPubKeyResponse,
} from '@/postGen/canine_chain/filetree/query'
import type { Params } from '@/postGen/canine_chain/filetree/params'
import type { PageResponse } from '@/postGen/cosmos/base/query/v1beta1/pagination'
import type { DFile, DPubkey } from '@/types/fileTree'

/**
 * This is the response for the [FileTree] Query/AllFiles RPC method.
 *
 * @prop {DFile[]} files - Array of File items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryFileTreeAllFilesResponseStrict = ModifyDeep<
  QueryAllFilesResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [FileTree] Query/AllPubKey RPC method.
 *
 * @prop {DPubkey[]} pubKey - Array of Pubkey items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllPubKeysResponseStrict = ModifyDeep<
  QueryAllPubKeysResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [FileTree] Query/File RPC method.
 *
 * @prop {DFile} file - Single File item.
 */
export type TQueryFileTreeFileResponseStrict = ModifyDeep<
  QueryFileResponse,
  { file: DFile }
>

/**
 * This is the response for the [FileTree] Query/PubKey RPC method.
 *
 * @prop {DPubkey} pubKey - Single Pubkey item.
 */
export type TQueryPubKeyResponseStrict = ModifyDeep<
  QueryPubKeyResponse,
  { pubKey: DPubkey }
>

/**
 * This is the response for the [FileTree] Query/Params RPC method.
 *
 * @prop {Params} params - Currently none.
 */
export type TQueryFileTreeParamsResponseStrict = ModifyDeep<
  QueryParamsResponse,
  { params: Params }
>
