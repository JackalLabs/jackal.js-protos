import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate'
import { assertDefined } from '@cosmjs/utils'
import { QueryClientImpl } from '@/postgen/canine_chain/filetree/query'
import type { IFileTreeExtension } from '@/interfaces/snackages'
import type { DQueryFileTreeAllFiles, DQueryAllPubKeys, DQueryFileTreeFile, DQueryFileTreeParams, DQueryPubKey } from '@/types/queries'
import type {
  TQueryFileTreeAllFilesResponseStrict,
  TQueryAllPubKeysResponseStrict,
  TQueryFileTreeFileResponseStrict,
  TQueryFileTreeParamsResponseStrict,
  TQueryPubKeyResponseStrict
} from '@/types/queries/responses'

export function createFileTreeExtension(base: QueryClient): IFileTreeExtension {
  const rpc = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpc)

  return {
    fileTree: {
      allFiles: async (request: DQueryFileTreeAllFiles): Promise<TQueryFileTreeAllFilesResponseStrict> => {
        const resp = await queryService
          .AllFiles(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [FileTree] allFiles: ${err}`)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryFileTreeAllFilesResponseStrict
      },
      allPubKeys: async (request: DQueryAllPubKeys): Promise<TQueryAllPubKeysResponseStrict> => {
        const resp = await queryService
          .AllPubKeys(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [FileTree] allPubKeys: ${err}`)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllPubKeysResponseStrict
      },
      file: async (request: DQueryFileTreeFile): Promise<TQueryFileTreeFileResponseStrict> => {
        const resp = await queryService
          .File(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [FileTree] file: ${err}`)
            throw err
          })
        assertDefined(resp.file)
        return resp as TQueryFileTreeFileResponseStrict
      },
      params: async (request: DQueryFileTreeParams): Promise<TQueryFileTreeParamsResponseStrict> => {
        const resp = await queryService
          .Params(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [FileTree] params: ${err}`)
            throw err
          })
        assertDefined(resp.params)
        return resp as TQueryFileTreeParamsResponseStrict
      },
      pubKey: async (request: DQueryPubKey): Promise<TQueryPubKeyResponseStrict> => {
        const resp = await queryService
          .PubKey(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [FileTree] pubKey: ${err}`)
            throw err
          })
        assertDefined(resp.pubKey)
        return resp as TQueryPubKeyResponseStrict
      }
    }
  }
}