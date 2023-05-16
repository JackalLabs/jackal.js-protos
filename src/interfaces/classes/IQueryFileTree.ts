import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryAllFilesRequest,
  QueryAllFilesResponse,
  QueryAllPubkeysRequest,
  QueryAllPubkeysResponse,
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
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export interface IQueryFileTree {
  /** Parameters queries the parameters of the module. */
  queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>>

  /** Queries a list of Encrypt items. */
  queryEncrypt(
    request: DeepPartial<QueryEncryptRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryEncryptResponse>>

  /** Queries a list of Decrypt items. */
  queryDecrypt(
    request: DeepPartial<QueryDecryptRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDecryptResponse>>

  /** Queries a Files by index. */
  queryFiles(
    request: DeepPartial<QueryFileRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFileResponse>>

  /** Queries a list of Files items. */
  queryFilesAll(
    request: DeepPartial<QueryAllFilesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllFilesResponse>>

  /** Queries a Pubkey by index. */
  queryPubkey(
    request: DeepPartial<QueryPubkeyRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryPubkeyResponse>>

  /** Queries a list of Pubkey items. */
  queryPubkeyAll(
    request: DeepPartial<QueryAllPubkeysRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllPubkeysResponse>>
}
