import type {
  QueryAllFiles,
  QueryAllPubKeys,
  QueryFile,
  QueryParams,
  QueryPubKey
} from '@/postgen/canine_chain/filetree/query'
import type { PageRequest } from '@/postgen/cosmos/base/query/v1beta1/pagination'

export type DQueryFileTreeAllFiles = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllFiles>

export type DQueryAllPubKeys = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllPubKeys>

export type DQueryFileTreeFile = Documentation<{
  address: string;
  ownerAddress: string;
}, QueryFile>

export type DQueryFileTreeParams = Documentation<{}, QueryParams>

export type DQueryPubKey = Documentation<{
  address: string;
}, QueryPubKey>


