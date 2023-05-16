import { IQueryFileTree } from '@/interfaces/classes/IQueryFileTree'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryAllFilesRequest,
  QueryAllFilesResponse,
  QueryAllPubkeysRequest,
  QueryAllPubkeysResponse,
  QueryClientImpl,
  QueryDecryptRequest,
  QueryDecryptResponse,
  QueryEncryptRequest,
  QueryEncryptResponse,
  QueryFileRequest,
  QueryFileResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryPubkeyRequest,
  QueryPubkeyResponse
} from '@/postgen/canine_chain/filetree/query'
import { grpc } from '@improbable-eng/grpc-web'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryFileTree implements IQueryFileTree {
  private readonly queryClient: Query

  constructor(rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  async queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>> {
    return await this.queryClient
      .Params(request, metadata)
      .then((resp: QueryParamsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [FileTree] queryParams: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            params: {}
          }
        }
      })
  }

  /** Queries a list of Encrypt items. */
  async queryEncrypt(
    request: DeepPartial<QueryEncryptRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryEncryptResponse>> {
    return await this.queryClient
      .Encrypt(request, metadata)
      .then((resp: QueryEncryptResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [FileTree] queryEncrypt: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            encryptionData: ''
          }
        }
      })
  }

  /** Queries a list of Decrypt items. */
  async queryDecrypt(
    request: DeepPartial<QueryDecryptRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDecryptResponse>> {
    return await this.queryClient
      .Decrypt(request, metadata)
      .then((resp: QueryDecryptResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [FileTree] queryDecrypt: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            data: ''
          }
        }
      })
  }

  /** Queries a Files by index. */
  async queryFiles(
    request: DeepPartial<QueryFileRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFileResponse>> {
    return await this.queryClient
      .Files(request, metadata)
      .then((resp: QueryFileResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [FileTree] queryFiles: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            files: {
              address: '',
              contents: '{}',
              owner: '',
              viewingAccess: '{}',
              editAccess: '{}',
              trackingNumber: ''
            }
          }
        }
      })
  }

  /** Queries a list of Files items. */
  async queryFilesAll(
    request: DeepPartial<QueryAllFilesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllFilesResponse>> {
    return await this.queryClient
      .FilesAll(request, metadata)
      .then((resp: QueryAllFilesResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [FileTree] queryFilesAll: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            files: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries a Pubkey by index. */
  async queryPubkey(
    request: DeepPartial<QueryPubkeyRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryPubkeyResponse>> {
    return await this.queryClient
      .Pubkey(request, metadata)
      .then((resp: QueryPubkeyResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [FileTree] queryPubkey: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            pubkey: {
              address: '',
              key: ''
            }
          }
        }
      })
  }

  /** Queries a list of Pubkey items. */
  async queryPubkeyAll(
    request: DeepPartial<QueryAllPubkeysRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllPubkeysResponse>> {
    return await this.queryClient
      .PubkeyAll(request, metadata)
      .then((resp: QueryAllPubkeysResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [FileTree] queryPubkeyAll: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            pubkey: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }
}
