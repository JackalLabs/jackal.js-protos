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

export default class QueryFileTree implements IQueryFileTree {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.queryClient.Params(request, metadata)
  }
  /** Queries a list of Encrypt items. */
  queryEncrypt(request: DeepPartial<QueryEncryptRequest>, metadata?: grpc.Metadata): Promise<QueryEncryptResponse> {
    return this.queryClient.Encrypt(request, metadata)
  }
  /** Queries a list of Decrypt items. */
  queryDecrypt(request: DeepPartial<QueryDecryptRequest>, metadata?: grpc.Metadata): Promise<QueryDecryptResponse> {
    return this.queryClient.Decrypt(request, metadata)
  }
  /** Queries a Files by index. */
  queryFiles(request: DeepPartial<QueryFileRequest>, metadata?: grpc.Metadata): Promise<QueryFileResponse> {
    return this.queryClient.Files(request, metadata)
  }
  /** Queries a list of Files items. */
  queryFilesAll(request: DeepPartial<QueryAllFilesRequest>, metadata?: grpc.Metadata): Promise<QueryAllFilesResponse> {
    return this.queryClient.FilesAll(request, metadata)
  }
  /** Queries a Pubkey by index. */
  queryPubkey(request: DeepPartial<QueryPubkeyRequest>, metadata?: grpc.Metadata): Promise<QueryPubkeyResponse> {
    return this.queryClient.Pubkey(request, metadata)
  }
  /** Queries a list of Pubkey items. */
  queryPubkeyAll(request: DeepPartial<QueryAllPubkeysRequest>, metadata?: grpc.Metadata): Promise<QueryAllPubkeysResponse> {
    return this.queryClient.PubkeyAll(request, metadata)
  }
}
