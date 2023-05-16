import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryActiveDealRequest,
  QueryActiveDealResponse,
  QueryAllActiveDealsRequest,
  QueryAllActiveDealsResponse,
  QueryAllContractsRequest,
  QueryAllContractsResponse,
  QueryAllFidCidRequest,
  QueryAllFidCidResponse,
  QueryAllProvidersRequest,
  QueryAllProvidersResponse,
  QueryAllStoragePaymentInfoRequest,
  QueryAllStoragePaymentInfoResponse,
  QueryAllStraysRequest,
  QueryAllStraysResponse,
  QueryClientFreeSpaceRequest,
  QueryClientFreeSpaceResponse,
  QueryContractRequest,
  QueryContractResponse,
  QueryFidCidRequest,
  QueryFidCidResponse,
  QueryFileUploadCheckRequest,
  QueryFileUploadCheckResponse,
  QueryFindFileRequest,
  QueryFindFileResponse,
  QueryFreespaceRequest,
  QueryFreespaceResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryPayDataRequest,
  QueryPayDataResponse,
  QueryPriceCheckRequest,
  QueryPriceCheckResponse,
  QueryProviderRequest,
  QueryProviderResponse,
  QueryStoragePaymentInfoRequest,
  QueryStoragePaymentInfoResponse,
  QueryStrayRequest,
  QueryStrayResponse
} from '@/postgen/canine_chain/storage/query'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export interface IQueryStorage {
  /** Parameters queries the parameters of the module. */
  queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>>

  /** Queries a Contracts by index. */
  queryContracts(
    request: DeepPartial<QueryContractRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryContractResponse>>

  /** Queries a list of Contracts items. */
  queryContractsAll(
    request: DeepPartial<QueryAllContractsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllContractsResponse>>

  /** Queries a ActiveDeals by index. */
  queryActiveDeals(
    request: DeepPartial<QueryActiveDealRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryActiveDealResponse>>

  /** Queries a list of ActiveDeals items. */
  queryActiveDealsAll(
    request: DeepPartial<QueryAllActiveDealsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllActiveDealsResponse>>

  /** Queries a Providers by index. */
  queryProviders(
    request: DeepPartial<QueryProviderRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryProviderResponse>>

  /** Queries a list of Providers items. */
  queryProvidersAll(
    request: DeepPartial<QueryAllProvidersRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllProvidersResponse>>

  /** Queries a list of Freespace items. */
  queryFreespace(
    request: DeepPartial<QueryFreespaceRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFreespaceResponse>>

  /** Queries a list of FindFile items. */
  queryFindFile(
    request: DeepPartial<QueryFindFileRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFindFileResponse>>

  /** Queries a Strays by index. */
  queryStrays(
    request: DeepPartial<QueryStrayRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryStrayResponse>>

  /** Queries a list of Strays items. */
  queryStraysAll(
    request: DeepPartial<QueryAllStraysRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllStraysResponse>>

  /** Queries a list of GetClientFreeSpace items. */
  queryGetClientFreeSpace(
    request: DeepPartial<QueryClientFreeSpaceRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryClientFreeSpaceResponse>>

  /** Queries a FidCid by index. */
  queryFidCid(
    request: DeepPartial<QueryFidCidRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFidCidResponse>>

  /** Queries a list of FidCid items. */
  queryFidCidAll(
    request: DeepPartial<QueryAllFidCidRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllFidCidResponse>>

  /** Queries a list of GetPayData items. */
  queryGetPayData(
    request: DeepPartial<QueryPayDataRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryPayDataResponse>>

  /** Queries a StoragePaymentInfo by address. */
  queryStoragePaymentInfo(
    request: DeepPartial<QueryStoragePaymentInfoRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryStoragePaymentInfoResponse>>

  /** Queries a list of StoragePaymentInfo items. */
  queryStoragePaymentInfoAll(
    request: DeepPartial<QueryAllStoragePaymentInfoRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllStoragePaymentInfoResponse>>

  /** Queries whether user can upload a file based on size */
  queryFileUploadCheck(
    request: DeepPartial<QueryFileUploadCheckRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFileUploadCheckResponse>>

  /** TODO - Update with correct desc */
  queryPriceCheck(
    request: DeepPartial<QueryPriceCheckRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryPriceCheckResponse>>
}
