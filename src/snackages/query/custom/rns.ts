import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryAllBidsRequest, QueryAllBidsResponse,
  QueryAllForsaleRequest, QueryAllForsaleResponse,
  QueryAllInitRequest, QueryAllInitResponse,
  QueryAllNamesRequest, QueryAllNamesResponse,
  QueryClientImpl,
  QueryGetBidsRequest, QueryGetBidsResponse,
  QueryGetForsaleRequest, QueryGetForsaleResponse,
  QueryGetInitRequest, QueryGetInitResponse,
  QueryGetNamesRequest, QueryGetNamesResponse,
  QueryListOwnedNamesRequest, QueryListOwnedNamesResponse,
  QueryParamsRequest, QueryParamsResponse
} from '@/postgen/canine-chain/rns/query'
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
  queryNames(request: DeepPartial<QueryGetNamesRequest>, metadata?: grpc.Metadata): Promise<QueryGetNamesResponse> {
    return this.queryClient.Names(request, metadata)
  }
  /** Queries a list of Names. */
  queryNamesAll(request: DeepPartial<QueryAllNamesRequest>, metadata?: grpc.Metadata): Promise<QueryAllNamesResponse> {
    return this.queryClient.NamesAll(request, metadata)
  }
  /** Queries a Bid by index. */
  queryBids(request: DeepPartial<QueryGetBidsRequest>, metadata?: grpc.Metadata): Promise<QueryGetBidsResponse> {
    return this.queryClient.Bids(request, metadata)
  }
  /** Queries a list of Bids. */
  queryBidsAll(request: DeepPartial<QueryAllBidsRequest>, metadata?: grpc.Metadata): Promise<QueryAllBidsResponse> {
    return this.queryClient.BidsAll(request, metadata)
  }
  /** Queries a Listing by index. */
  queryForsale(request: DeepPartial<QueryGetForsaleRequest>, metadata?: grpc.Metadata): Promise<QueryGetForsaleResponse> {
    return this.queryClient.Forsale(request, metadata)
  }
  /** Queries all Listings. */
  queryForsaleAll(request: DeepPartial<QueryAllForsaleRequest>, metadata?: grpc.Metadata): Promise<QueryAllForsaleResponse> {
    return this.queryClient.ForsaleAll(request, metadata)
  }
  /** Queries a Init by index. */
  queryInit(request: DeepPartial<QueryGetInitRequest>, metadata?: grpc.Metadata): Promise<QueryGetInitResponse> {
    return this.queryClient.Init(request, metadata)
  }
  /** Queries a list of Init items. */
  queryInitAll(request: DeepPartial<QueryAllInitRequest>, metadata?: grpc.Metadata): Promise<QueryAllInitResponse> {
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
