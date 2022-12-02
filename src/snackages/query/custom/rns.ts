import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryAllBidsRequest, QueryAllBidsResponse,
  QueryAllForsalesRequest, QueryAllForsalesResponse,
  QueryAllInitsRequest, QueryAllInitsResponse,
  QueryAllNamesRequest, QueryAllNamesResponse,
  QueryClientImpl,
  QueryBidRequest, QueryBidResponse,
  QueryForsaleRequest, QueryForsaleResponse,
  QueryInitRequest, QueryInitResponse,
  QueryNameRequest, QueryNameResponse,
  QueryListOwnedNamesRequest, QueryListOwnedNamesResponse,
  QueryParamsRequest, QueryParamsResponse
} from '@/postgen/canine_chain/rns/query'
import IQueryRns from '@/interfaces/classes/IQueryRns'

export default class QueryRns implements IQueryRns {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.queryClient.Params(request, metadata)
  }
  /** Queries a Name by index. */
  queryNames(request: DeepPartial<QueryNameRequest>, metadata?: grpc.Metadata): Promise<QueryNameResponse> {
    return this.queryClient.Names(request, metadata)
  }
  /** Queries a list of Names. */
  queryNamesAll(request: DeepPartial<QueryAllNamesRequest>, metadata?: grpc.Metadata): Promise<QueryAllNamesResponse> {
    return this.queryClient.NamesAll(request, metadata)
  }
  /** Queries a Bid by index. */
  queryBids(request: DeepPartial<QueryBidRequest>, metadata?: grpc.Metadata): Promise<QueryBidResponse> {
    return this.queryClient.Bids(request, metadata)
  }
  /** Queries a list of Bids. */
  queryBidsAll(request: DeepPartial<QueryAllBidsRequest>, metadata?: grpc.Metadata): Promise<QueryAllBidsResponse> {
    return this.queryClient.BidsAll(request, metadata)
  }
  /** Queries a Listing by index. */
  queryForsale(request: DeepPartial<QueryForsaleRequest>, metadata?: grpc.Metadata): Promise<QueryForsaleResponse> {
    return this.queryClient.Forsale(request, metadata)
  }
  /** Queries all Listings. */
  queryForsaleAll(request: DeepPartial<QueryAllForsalesRequest>, metadata?: grpc.Metadata): Promise<QueryAllForsalesResponse> {
    return this.queryClient.ForsaleAll(request, metadata)
  }
  /** Queries a Init by index. */
  queryInit(request: DeepPartial<QueryInitRequest>, metadata?: grpc.Metadata): Promise<QueryInitResponse> {
    return this.queryClient.Init(request, metadata)
  }
  /** Queries a list of Init items. */
  queryInitAll(request: DeepPartial<QueryAllInitsRequest>, metadata?: grpc.Metadata): Promise<QueryAllInitsResponse> {
    return this.queryClient.InitAll(request, metadata)
  }
  /** Queries a list of ListOwnedNames items. */
  queryListOwnedNames(
    request: DeepPartial<QueryListOwnedNamesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryListOwnedNamesResponse>  {
    return this.queryClient.ListOwnedNames(request, metadata)
  }
}
