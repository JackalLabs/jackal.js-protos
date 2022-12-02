import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryParamsRequest, QueryParamsResponse,
  QueryAllActiveDealsRequest, QueryAllActiveDealsResponse,
  QueryAllClientUsageRequest, QueryAllClientUsageResponse,
  QueryAllContractsRequest, QueryAllContractsResponse,
  QueryAllFidCidRequest, QueryAllFidCidResponse,
  QueryAllPayBlocksRequest, QueryAllPayBlocksResponse,
  QueryAllProvidersRequest, QueryAllProvidersResponse,
  QueryAllStraysRequest, QueryAllStraysResponse,
  QueryFindFileRequest, QueryFindFileResponse,
  QueryFreespaceRequest, QueryFreespaceResponse,
  QueryActiveDealRequest, QueryActiveDealResponse,
  QueryClientFreeSpaceRequest, QueryClientFreeSpaceResponse,
  QueryClientUsageRequest, QueryClientUsageResponse,
  QueryContractRequest, QueryContractResponse,
  QueryFidCidRequest, QueryFidCidResponse,
  QueryPayBlockRequest, QueryPayBlockResponse,
  QueryPayDataRequest, QueryPayDataResponse,
  QueryProviderRequest, QueryProviderResponse,
  QueryStrayRequest, QueryStrayResponse
} from '@/postgen/canine_chain/storage/query'

export default interface IQueryStorage {
  /** Parameters queries the parameters of the module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a Contracts by index. */
  queryContracts(
    request: DeepPartial<QueryContractRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractResponse>;
  /** Queries a list of Contracts items. */
  queryContractsAll(
    request: DeepPartial<QueryAllContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllContractsResponse>;
  /** Queries a ActiveDeals by index. */
  queryActiveDeals(
    request: DeepPartial<QueryActiveDealRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryActiveDealResponse>;
  /** Queries a list of ActiveDeals items. */
  queryActiveDealsAll(
    request: DeepPartial<QueryAllActiveDealsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllActiveDealsResponse>;
  /** Queries a Providers by index. */
  queryProviders(
    request: DeepPartial<QueryProviderRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryProviderResponse>;
  /** Queries a list of Providers items. */
  queryProvidersAll(
    request: DeepPartial<QueryAllProvidersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllProvidersResponse>;
  /** Queries a list of Freespace items. */
  queryFreespace(request: DeepPartial<QueryFreespaceRequest>, metadata?: grpc.Metadata): Promise<QueryFreespaceResponse>;
  /** Queries a list of FindFile items. */
  queryFindFile(request: DeepPartial<QueryFindFileRequest>, metadata?: grpc.Metadata): Promise<QueryFindFileResponse>;
  /** Queries a PayBlocks by index. */
  queryPayBlocks(
    request: DeepPartial<QueryPayBlockRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPayBlockResponse>;
  /** Queries a list of PayBlocks items. */
  queryPayBlocksAll(
    request: DeepPartial<QueryAllPayBlocksRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllPayBlocksResponse>;
  /** Queries a ClientUsage by index. */
  queryClientUsage(
    request: DeepPartial<QueryClientUsageRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClientUsageResponse>;
  /** Queries a list of ClientUsage items. */
  queryClientUsageAll(
    request: DeepPartial<QueryAllClientUsageRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllClientUsageResponse>;
  /** Queries a Strays by index. */
  queryStrays(request: DeepPartial<QueryStrayRequest>, metadata?: grpc.Metadata): Promise<QueryStrayResponse>;
  /** Queries a list of Strays items. */
  queryStraysAll(request: DeepPartial<QueryAllStraysRequest>, metadata?: grpc.Metadata): Promise<QueryAllStraysResponse>;
  /** Queries a list of GetClientFreeSpace items. */
  queryGetClientFreeSpace(
    request: DeepPartial<QueryClientFreeSpaceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClientFreeSpaceResponse>;
  /** Queries a FidCid by index. */
  queryFidCid(request: DeepPartial<QueryFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryFidCidResponse>;
  /** Queries a list of FidCid items. */
  queryFidCidAll(request: DeepPartial<QueryAllFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryAllFidCidResponse>;
  /** Queries a list of GetPayData items. */
  queryGetPayData(request: DeepPartial<QueryPayDataRequest>, metadata?: grpc.Metadata): Promise<QueryPayDataResponse>;
}
