import {
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
import IRpc from '@/interfaces/IRpc'

export default class QueryRns implements IQueryRns {
  private readonly queryClient: Query

  constructor (rpc: IRpc) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  queryParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    return this.queryClient.Params(request)
  }
  /** Queries a Name by index. */
  queryNames(request: QueryGetNamesRequest): Promise<QueryGetNamesResponse> {
    return this.queryClient.Names(request)
  }
  /** Queries a list of Names. */
  queryNamesAll(request: QueryAllNamesRequest): Promise<QueryAllNamesResponse> {
    return this.queryClient.NamesAll(request)
  }
  /** Queries a Bid by index. */
  queryBids(request: QueryGetBidsRequest): Promise<QueryGetBidsResponse> {
    return this.queryClient.Bids(request)
  }
  /** Queries a list of Bids. */
  queryBidsAll(request: QueryAllBidsRequest): Promise<QueryAllBidsResponse> {
    return this.queryClient.BidsAll(request)
  }
  /** Queries a Listing by index. */
  queryForsale(request: QueryGetForsaleRequest): Promise<QueryGetForsaleResponse> {
    return this.queryClient.Forsale(request)
  }
  /** Queries all Listings. */
  queryForsaleAll(request: QueryAllForsaleRequest): Promise<QueryAllForsaleResponse> {
    return this.queryClient.ForsaleAll(request)
  }
  /** Queries a Init by index. */
  queryInit(request: QueryGetInitRequest): Promise<QueryGetInitResponse> {
    return this.queryClient.Init(request)
  }
  /** Queries a list of Init items. */
  queryInitAll(request: QueryAllInitRequest): Promise<QueryAllInitResponse> {
    return this.queryClient.InitAll(request)
  }
  /** Queries a list of ListOwnedNames items. */
  queryListOwnedNames(request: QueryListOwnedNamesRequest): Promise<QueryListOwnedNamesResponse> {
    return this.queryClient.ListOwnedNames(request)
  }
}
