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
  QueryGetActiveDealsRequest, QueryGetActiveDealsResponse,
  QueryGetClientFreeSpaceRequest, QueryGetClientFreeSpaceResponse,
  QueryGetClientUsageRequest, QueryGetClientUsageResponse,
  QueryGetContractsRequest, QueryGetContractsResponse,
  QueryGetFidCidRequest, QueryGetFidCidResponse,
  QueryGetPayBlocksRequest, QueryGetPayBlocksResponse,
  QueryGetPayDataRequest, QueryGetPayDataResponse,
  QueryGetProvidersRequest, QueryGetProvidersResponse,
  QueryGetStraysRequest, QueryGetStraysResponse
} from '@/postgen/canine_chain/storage/query'

export default interface IQueryStorage {
  /** Parameters queries the parameters of the module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a Contracts by index. */
  queryContracts(
    request: DeepPartial<QueryGetContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetContractsResponse>;
  /** Queries a list of Contracts items. */
  queryContractsAll(
    request: DeepPartial<QueryAllContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllContractsResponse>;
  /** Queries a ActiveDeals by index. */
  queryActiveDeals(
    request: DeepPartial<QueryGetActiveDealsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetActiveDealsResponse>;
  /** Queries a list of ActiveDeals items. */
  queryActiveDealsAll(
    request: DeepPartial<QueryAllActiveDealsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllActiveDealsResponse>;
  /** Queries a Providers by index. */
  queryProviders(
    request: DeepPartial<QueryGetProvidersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetProvidersResponse>;
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
    request: DeepPartial<QueryGetPayBlocksRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetPayBlocksResponse>;
  /** Queries a list of PayBlocks items. */
  queryPayBlocksAll(
    request: DeepPartial<QueryAllPayBlocksRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllPayBlocksResponse>;
  /** Queries a ClientUsage by index. */
  queryClientUsage(
    request: DeepPartial<QueryGetClientUsageRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetClientUsageResponse>;
  /** Queries a list of ClientUsage items. */
  queryClientUsageAll(
    request: DeepPartial<QueryAllClientUsageRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllClientUsageResponse>;
  /** Queries a Strays by index. */
  queryStrays(request: DeepPartial<QueryGetStraysRequest>, metadata?: grpc.Metadata): Promise<QueryGetStraysResponse>;
  /** Queries a list of Strays items. */
  queryStraysAll(request: DeepPartial<QueryAllStraysRequest>, metadata?: grpc.Metadata): Promise<QueryAllStraysResponse>;
  /** Queries a list of GetClientFreeSpace items. */
  queryGetClientFreeSpace(
    request: DeepPartial<QueryGetClientFreeSpaceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetClientFreeSpaceResponse>;
  /** Queries a FidCid by index. */
  queryFidCid(request: DeepPartial<QueryGetFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryGetFidCidResponse>;
  /** Queries a list of FidCid items. */
  queryFidCidAll(request: DeepPartial<QueryAllFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryAllFidCidResponse>;
  /** Queries a list of GetPayData items. */
  queryGetPayData(request: DeepPartial<QueryGetPayDataRequest>, metadata?: grpc.Metadata): Promise<QueryGetPayDataResponse>;
}
