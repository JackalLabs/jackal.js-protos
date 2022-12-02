import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryAllBidsRequest, QueryAllBidsResponse,
  QueryAllForsalesRequest, QueryAllForsalesResponse,
  QueryAllInitsRequest, QueryAllInitsResponse,
  QueryAllNamesRequest, QueryAllNamesResponse,
  QueryBidRequest, QueryBidResponse,
  QueryForsaleRequest, QueryForsaleResponse,
  QueryInitRequest, QueryInitResponse,
  QueryNameRequest, QueryNameResponse,
  QueryListOwnedNamesRequest, QueryListOwnedNamesResponse,
  QueryParamsRequest, QueryParamsResponse
} from '@/postgen/canine_chain/rns/query'

export default interface IQueryRns {
  /** Parameters queries the parameters of the module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a Name by index. */
  queryNames(request: DeepPartial<QueryNameRequest>, metadata?: grpc.Metadata): Promise<QueryNameResponse>;
  /** Queries a list of Names. */
  queryNamesAll(request: DeepPartial<QueryAllNamesRequest>, metadata?: grpc.Metadata): Promise<QueryAllNamesResponse>;
  /** Queries a Bid by index. */
  queryBids(request: DeepPartial<QueryBidRequest>, metadata?: grpc.Metadata): Promise<QueryBidResponse>;
  /** Queries a list of Bids. */
  queryBidsAll(request: DeepPartial<QueryAllBidsRequest>, metadata?: grpc.Metadata): Promise<QueryAllBidsResponse>;
  /** Queries a Listing by index. */
  queryForsale(request: DeepPartial<QueryForsaleRequest>, metadata?: grpc.Metadata): Promise<QueryForsaleResponse>;
  /** Queries all Listings. */
  queryForsaleAll(request: DeepPartial<QueryAllForsalesRequest>, metadata?: grpc.Metadata): Promise<QueryAllForsalesResponse>;
  /** Queries a Init by index. */
  queryInit(request: DeepPartial<QueryInitRequest>, metadata?: grpc.Metadata): Promise<QueryInitResponse>;
  /** Queries a list of Init items. */
  queryInitAll(request: DeepPartial<QueryAllInitsRequest>, metadata?: grpc.Metadata): Promise<QueryAllInitsResponse>;
  /** Queries a list of ListOwnedNames items. */
  queryListOwnedNames(
    request: DeepPartial<QueryListOwnedNamesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryListOwnedNamesResponse>;
}
