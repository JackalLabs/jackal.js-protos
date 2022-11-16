import {
  QueryAllBidsRequest,
  QueryAllBidsResponse,
  QueryAllForsaleRequest,
  QueryAllForsaleResponse,
  QueryAllInitRequest,
  QueryAllInitResponse,
  QueryAllNamesRequest,
  QueryAllNamesResponse,
  QueryGetBidsRequest,
  QueryGetBidsResponse,
  QueryGetForsaleRequest,
  QueryGetForsaleResponse,
  QueryGetInitRequest,
  QueryGetInitResponse,
  QueryGetNamesRequest,
  QueryGetNamesResponse,
  QueryListOwnedNamesRequest,
  QueryListOwnedNamesResponse,
  QueryParamsRequest,
  QueryParamsResponse
} from '@/postgen_off/canine-chain/rns/query'

export default interface IQueryRns {
  /** Parameters queries the parameters of the module. */
  queryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Name by index. */
  queryNames(request: QueryGetNamesRequest): Promise<QueryGetNamesResponse>;
  /** Queries a list of Names. */
  queryNamesAll(request: QueryAllNamesRequest): Promise<QueryAllNamesResponse>;
  /** Queries a Bid by index. */
  queryBids(request: QueryGetBidsRequest): Promise<QueryGetBidsResponse>;
  /** Queries a list of Bids. */
  queryBidsAll(request: QueryAllBidsRequest): Promise<QueryAllBidsResponse>;
  /** Queries a Listing by index. */
  queryForsale(request: QueryGetForsaleRequest): Promise<QueryGetForsaleResponse>;
  /** Queries all Listings. */
  queryForsaleAll(request: QueryAllForsaleRequest): Promise<QueryAllForsaleResponse>;
  /** Queries a Init by index. */
  queryInit(request: QueryGetInitRequest): Promise<QueryGetInitResponse>;
  /** Queries a list of Init items. */
  queryInitAll(request: QueryAllInitRequest): Promise<QueryAllInitResponse>;
  /** Queries a list of ListOwnedNames items. */
  queryListOwnedNames(request: QueryListOwnedNamesRequest): Promise<QueryListOwnedNamesResponse>;
}
