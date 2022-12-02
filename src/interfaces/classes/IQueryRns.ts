import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryAllBidsRequest, QueryAllBidsResponse,
  QueryAllForsaleRequest, QueryAllForsaleResponse,
  QueryAllInitRequest, QueryAllInitResponse,
  QueryAllNamesRequest, QueryAllNamesResponse,
  QueryGetBidsRequest, QueryGetBidsResponse,
  QueryGetForsaleRequest, QueryGetForsaleResponse,
  QueryGetInitRequest, QueryGetInitResponse,
  QueryGetNamesRequest, QueryGetNamesResponse,
  QueryListOwnedNamesRequest, QueryListOwnedNamesResponse,
  QueryParamsRequest, QueryParamsResponse
} from '@/postgen/canine_chain/rns/query'

export default interface IQueryRns {
  /** Parameters queries the parameters of the module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a Name by index. */
  queryNames(request: DeepPartial<QueryGetNamesRequest>, metadata?: grpc.Metadata): Promise<QueryGetNamesResponse>;
  /** Queries a list of Names. */
  queryNamesAll(request: DeepPartial<QueryAllNamesRequest>, metadata?: grpc.Metadata): Promise<QueryAllNamesResponse>;
  /** Queries a Bid by index. */
  queryBids(request: DeepPartial<QueryGetBidsRequest>, metadata?: grpc.Metadata): Promise<QueryGetBidsResponse>;
  /** Queries a list of Bids. */
  queryBidsAll(request: DeepPartial<QueryAllBidsRequest>, metadata?: grpc.Metadata): Promise<QueryAllBidsResponse>;
  /** Queries a Listing by index. */
  queryForsale(request: DeepPartial<QueryGetForsaleRequest>, metadata?: grpc.Metadata): Promise<QueryGetForsaleResponse>;
  /** Queries all Listings. */
  queryForsaleAll(request: DeepPartial<QueryAllForsaleRequest>, metadata?: grpc.Metadata): Promise<QueryAllForsaleResponse>;
  /** Queries a Init by index. */
  queryInit(request: DeepPartial<QueryGetInitRequest>, metadata?: grpc.Metadata): Promise<QueryGetInitResponse>;
  /** Queries a list of Init items. */
  queryInitAll(request: DeepPartial<QueryAllInitRequest>, metadata?: grpc.Metadata): Promise<QueryAllInitResponse>;
  /** Queries a list of ListOwnedNames items. */
  queryListOwnedNames(
    request: DeepPartial<QueryListOwnedNamesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryListOwnedNamesResponse>;
}
