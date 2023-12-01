import type {
  QueryAllFiles,
  QueryAllPubKeys,
  QueryFile,
  QueryParams,
  QueryPubKey
} from '@/postGen/canine_chain/filetree/query'
import type { PageRequest } from '@/postGen/cosmos/base/query/v1beta1/pagination'

/**
 * QueryFileTreeAllFiles Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryFileTreeAllFiles = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllFiles>

/**
 * QueryAllPubKeys Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllPubKeys = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllPubKeys>

/**
 * QueryFileTreeFile Documentation
 * @prop {string} address - Merkle path of file.
 * @prop {string} ownerAddress - Hashed file owner Jackal wallet address.
 */
export type DQueryFileTreeFile = Documentation<{
  address: string;
  ownerAddress: string;
}, QueryFile>

/**
 * QueryFileTreeParams Documentation
 *
 * No parameters.
 */
export type DQueryFileTreeParams = Documentation<{}, QueryParams>

/**
 * QueryPubKey Documentation
 * @prop {string} address - Jackal wallet address.
 */
export type DQueryPubKey = Documentation<{
  address: string;
}, QueryPubKey>


