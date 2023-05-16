import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryAllBidsRequest,
  QueryAllBidsResponse,
  QueryAllForsalesRequest,
  QueryAllForsalesResponse,
  QueryAllInitsRequest,
  QueryAllInitsResponse,
  QueryAllNamesRequest,
  QueryAllNamesResponse,
  QueryBidRequest,
  QueryBidResponse,
  QueryForsaleRequest,
  QueryForsaleResponse,
  QueryInitRequest,
  QueryInitResponse,
  QueryListOwnedNamesRequest,
  QueryListOwnedNamesResponse,
  QueryNameRequest,
  QueryNameResponse,
  QueryParamsRequest,
  QueryParamsResponse
} from '@/postgen/canine_chain/rns/query'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export interface IQueryRns {
  /** Parameters queries the parameters of the module. */
  queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>>

  /** Queries a Name by index. */
  queryNames(
    request: DeepPartial<QueryNameRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryNameResponse>>

  /** Queries a list of Names. */
  queryNamesAll(
    request: DeepPartial<QueryAllNamesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllNamesResponse>>

  /** Queries a Bid by index. */
  queryBids(
    request: DeepPartial<QueryBidRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryBidResponse>>

  /** Queries a list of Bids. */
  queryBidsAll(
    request: DeepPartial<QueryAllBidsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllBidsResponse>>

  /** Queries a Listing by index. */
  queryForsale(
    request: DeepPartial<QueryForsaleRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryForsaleResponse>>

  /** Queries all Listings. */
  queryForsaleAll(
    request: DeepPartial<QueryAllForsalesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllForsalesResponse>>

  /** Queries a Init by index. */
  queryInit(
    request: DeepPartial<QueryInitRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryInitResponse>>

  /** Queries a list of Init items. */
  queryInitAll(
    request: DeepPartial<QueryAllInitsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllInitsResponse>>

  /** Queries a list of ListOwnedNames items. */
  queryListOwnedNames(
    request: DeepPartial<QueryListOwnedNamesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryListOwnedNamesResponse>>
}
