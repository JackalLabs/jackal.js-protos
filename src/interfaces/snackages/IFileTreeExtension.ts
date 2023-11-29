import type {
  DQueryAllPubKeys,
  DQueryFileTreeAllFiles,
  DQueryFileTreeFile,
  DQueryFileTreeParams,
  DQueryPubKey
} from '@/types/queries'
import type {
  TQueryAllPubKeysResponseStrict,
  TQueryFileTreeAllFilesResponseStrict,
  TQueryFileTreeFileResponseStrict,
  TQueryFileTreeParamsResponseStrict,
  TQueryPubKeyResponseStrict
} from '@/types/queries/responses'

export interface IFileTreeExtension {
  readonly fileTree: {
    readonly allFiles: (request: DQueryFileTreeAllFiles) => Promise<TQueryFileTreeAllFilesResponseStrict>
    readonly allPubKeys: (request: DQueryAllPubKeys) => Promise<TQueryAllPubKeysResponseStrict>
    readonly file: (request: DQueryFileTreeFile) => Promise<TQueryFileTreeFileResponseStrict>
    readonly params: (request: DQueryFileTreeParams) => Promise<TQueryFileTreeParamsResponseStrict>
    readonly pubKey: (request: DQueryPubKey) => Promise<TQueryPubKeyResponseStrict>
  }
}
