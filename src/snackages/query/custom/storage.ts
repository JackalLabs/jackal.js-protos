import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryParamsRequest, QueryParamsResponse,
  QueryAllActiveDealsRequest, QueryAllActiveDealsResponse,
  QueryAllClientUsageRequest, QueryAllClientUsageResponse,
  QueryAllContractsRequest, QueryAllContractsResponse,
  QueryAllFidCidRequest, QueryAllFidCidResponse,
  QueryAllPayBlocksRequest, QueryAllPayBlocksResponse,
  QueryAllProvidersRequest, QueryAllProvidersResponse,
  QueryAllStraysRequest, QueryAllStraysResponse,
  QueryClientImpl,
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
} from '@/postgen/canine-chain/storage/query'
import IQueryStorage from '@/interfaces/classes/IQueryStorage'

export default class QueryStorage implements IQueryStorage {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.queryClient.Params(request, metadata)
  }
  /** Queries a Contracts by index. */
  queryContracts(
    request: DeepPartial<QueryGetContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetContractsResponse> {
    return this.queryClient.Contracts(request, metadata)
  }
  /** Queries a list of Contracts items. */
  queryContractsAll(
    request: DeepPartial<QueryAllContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllContractsResponse> {
    return this.queryClient.ContractsAll(request, metadata)
  }
  /** Queries a ActiveDeals by index. */
  queryActiveDeals(
    request: DeepPartial<QueryGetActiveDealsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetActiveDealsResponse> {
    return this.queryClient.ActiveDeals(request, metadata)
  }
  /** Queries a list of ActiveDeals items. */
  queryActiveDealsAll(
    request: DeepPartial<QueryAllActiveDealsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllActiveDealsResponse> {
    return this.queryClient.ActiveDealsAll(request, metadata)
  }
  /** Queries a Providers by index. */
  queryProviders(
    request: DeepPartial<QueryGetProvidersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetProvidersResponse> {
    return this.queryClient.Providers(request, metadata)
  }
  /** Queries a list of Providers items. */
  queryProvidersAll(
    request: DeepPartial<QueryAllProvidersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllProvidersResponse> {
    return this.queryClient.ProvidersAll(request, metadata)
  }
  /** Queries a list of Freespace items. */
  queryFreespace(request: DeepPartial<QueryFreespaceRequest>, metadata?: grpc.Metadata): Promise<QueryFreespaceResponse> {
    return this.queryClient.Freespace(request, metadata)
  }
  /** Queries a list of FindFile items. */
  queryFindFile(request: DeepPartial<QueryFindFileRequest>, metadata?: grpc.Metadata): Promise<QueryFindFileResponse> {
    return this.queryClient.FindFile(request, metadata)
  }
  /** Queries a PayBlocks by index. */
  queryPayBlocks(
    request: DeepPartial<QueryGetPayBlocksRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetPayBlocksResponse> {
    return this.queryClient.PayBlocks(request, metadata)
  }
  /** Queries a list of PayBlocks items. */
  queryPayBlocksAll(
    request: DeepPartial<QueryAllPayBlocksRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllPayBlocksResponse> {
    return this.queryClient.PayBlocksAll(request, metadata)
  }
  /** Queries a ClientUsage by index. */
  queryClientUsage(
    request: DeepPartial<QueryGetClientUsageRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetClientUsageResponse> {
    return this.queryClient.ClientUsage(request, metadata)
  }
  /** Queries a list of ClientUsage items. */
  queryClientUsageAll(
    request: DeepPartial<QueryAllClientUsageRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllClientUsageResponse> {
    return this.queryClient.ClientUsageAll(request, metadata)
  }
  /** Queries a Strays by index. */
  queryStrays(request: DeepPartial<QueryGetStraysRequest>, metadata?: grpc.Metadata): Promise<QueryGetStraysResponse> {
    return this.queryClient.Strays(request, metadata)
  }
  /** Queries a list of Strays items. */
  queryStraysAll(request: DeepPartial<QueryAllStraysRequest>, metadata?: grpc.Metadata): Promise<QueryAllStraysResponse> {
    return this.queryClient.StraysAll(request, metadata)
  }
  /** Queries a list of GetClientFreeSpace items. */
  queryGetClientFreeSpace(
    request: DeepPartial<QueryGetClientFreeSpaceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetClientFreeSpaceResponse> {
    return this.queryClient.GetClientFreeSpace(request, metadata)
  }
  /** Queries a FidCid by index. */
  queryFidCid(request: DeepPartial<QueryGetFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryGetFidCidResponse> {
    return this.queryClient.FidCid(request, metadata)
  }
  /** Queries a list of FidCid items. */
  queryFidCidAll(request: DeepPartial<QueryAllFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryAllFidCidResponse> {
    return this.queryClient.FidCidAll(request, metadata)
  }
  /** Queries a list of GetPayData items. */
  queryGetPayData(request: DeepPartial<QueryGetPayDataRequest>, metadata?: grpc.Metadata): Promise<QueryGetPayDataResponse> {
    return this.queryClient.GetPayData(request, metadata)
  }

}
