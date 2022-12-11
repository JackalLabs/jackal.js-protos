import IQueryFileTree from '@/interfaces/classes/IQueryFileTree'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryAllFilesRequest, QueryAllFilesResponse,
  QueryAllPubkeysRequest, QueryAllPubkeysResponse,
  QueryClientImpl,
  QueryDecryptRequest, QueryDecryptResponse,
  QueryEncryptRequest, QueryEncryptResponse,
  QueryFileRequest, QueryFileResponse,
  QueryParamsRequest, QueryParamsResponse,
  QueryPubkeyRequest, QueryPubkeyResponse
} from '@/postgen/canine_chain/filetree/query'
import { grpc } from '@improbable-eng/grpc-web'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryFileTree implements IQueryFileTree {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  async queryParams (
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>> {
    return await this.queryClient.Params(request, metadata)
      .then((resp: QueryParamsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryParamsResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [FileTree] queryParams: ${err}`)
        const errRet: SuccessNoUndefined<QueryParamsResponse> = {
          success: false,
          params: {}
        }
        return errRet
      })
  }

  /** Queries a list of Encrypt items. */
  async queryEncrypt (
    request: DeepPartial<QueryEncryptRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryEncryptResponse>> {
    return await this.queryClient.Encrypt(request, metadata)
      .then((resp: QueryEncryptResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryEncryptResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [FileTree] queryEncrypt: ${err}`)
        const errRet: SuccessNoUndefined<QueryEncryptResponse> = {
          success: false,
          encryptionData: ''
        }
        return errRet
      })
  }

  /** Queries a list of Decrypt items. */
  async queryDecrypt (
    request: DeepPartial<QueryDecryptRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDecryptResponse>> {
    return await this.queryClient.Decrypt(request, metadata)
      .then((resp: QueryDecryptResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDecryptResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [FileTree] queryDecrypt: ${err}`)
        const errRet: SuccessNoUndefined<QueryDecryptResponse> = {
          success: false,
          data: ''
        }
        return errRet
      })
  }

  /** Queries a Files by index. */
  async queryFiles (
    request: DeepPartial<QueryFileRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFileResponse>> {
    return await this.queryClient.Files(request, metadata)
      .then((resp: QueryFileResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryFileResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [FileTree] queryFiles: ${err}`)
        const errRet: SuccessNoUndefined<QueryFileResponse> = {
          success: false,
          files: {
            address: '',
            contents: '',
            owner: '',
            viewingAccess: '',
            editAccess: '',
            trackingNumber: ''
          }
        }
        return errRet
      })
  }

  /** Queries a list of Files items. */
  async queryFilesAll (
    request: DeepPartial<QueryAllFilesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllFilesResponse>> {
    return await this.queryClient.FilesAll(request, metadata)
      .then((resp: QueryAllFilesResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllFilesResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [FileTree] queryFilesAll: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllFilesResponse> = {
          success: false,
          files: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Queries a Pubkey by index. */
  async queryPubkey (
    request: DeepPartial<QueryPubkeyRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryPubkeyResponse>> {
    return await this.queryClient.Pubkey(request, metadata)
      .then((resp: QueryPubkeyResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryPubkeyResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [FileTree] queryPubkey: ${err}`)
        const errRet: SuccessNoUndefined<QueryPubkeyResponse> = {
          success: false,
          pubkey: {
            address: '',
            key: ''
          }
        }
        return errRet
      })
  }

  /** Queries a list of Pubkey items. */
  async queryPubkeyAll (
    request: DeepPartial<QueryAllPubkeysRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllPubkeysResponse>> {
    return await this.queryClient.PubkeyAll(request, metadata)
      .then((resp: QueryAllPubkeysResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllPubkeysResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [FileTree] queryPubkeyAll: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllPubkeysResponse> = {
          success: false,
          pubkey: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }
}
