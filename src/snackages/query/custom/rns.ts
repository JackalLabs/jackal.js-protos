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
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryRns implements IQueryRns {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  async queryParams (
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>> {
    return await this.queryClient.Params(request, metadata)
      .then((resp: QueryParamsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryParamsResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [RNS] queryParams: ${err}`)
        const errRet: SuccessNoUndefined<QueryParamsResponse> = {
          success: false,
          params: {}
        }
        return errRet
      })
  }

  /** Queries a Name by index. */
  async queryNames (
    request: DeepPartial<QueryNameRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryNameResponse>> {
    return await this.queryClient.Names(request, metadata)
      .then((resp: QueryNameResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryNameResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [RNS] queryNames: ${err}`)
        const errRet: SuccessNoUndefined<QueryNameResponse> = {
          success: false,
          names: {
            name: '',
            expires: 0,
            value: '',
            data: '',
            subdomains: [],
            tld: '',
            locked: 0
          }
        }
        return errRet
      })
  }

  /** Queries a list of Names. */
  async queryNamesAll (
    request: DeepPartial<QueryAllNamesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllNamesResponse>> {
    return await this.queryClient.NamesAll(request, metadata)
      .then((resp: QueryAllNamesResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllNamesResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [RNS] queryNamesAll: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllNamesResponse> = {
          success: false,
          names: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Queries a Bid by index. */
  async queryBids (
    request: DeepPartial<QueryBidRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryBidResponse>> {
    return await this.queryClient.Bids(request, metadata)
      .then((resp: QueryBidResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryBidResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [RNS] queryBids: ${err}`)
        const errRet: SuccessNoUndefined<QueryBidResponse> = {
          success: false,
          bids: {
            index: '',
            name: '',
            bidder: '',
            price: ''
          }
        }
        return errRet
      })
  }

  /** Queries a list of Bids. */
  async queryBidsAll (
    request: DeepPartial<QueryAllBidsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllBidsResponse>> {
    return await this.queryClient.BidsAll(request, metadata)
      .then((resp: QueryAllBidsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllBidsResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [RNS] queryBidsAll: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllBidsResponse> = {
          success: false,
          bids: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Queries a Listing by index. */
  async queryForsale (
    request: DeepPartial<QueryForsaleRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryForsaleResponse>> {
    return await this.queryClient.Forsale(request, metadata)
      .then((resp: QueryForsaleResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryForsaleResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [RNS] queryForsale: ${err}`)
        const errRet: SuccessNoUndefined<QueryForsaleResponse> = {
          success: false,
          forsale: {
            name: '',
            price: '',
            owner: ''
          }
        }
        return errRet
      })
  }

  /** Queries all Listings. */
  async queryForsaleAll (
    request: DeepPartial<QueryAllForsalesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllForsalesResponse>> {
    return await this.queryClient.ForsaleAll(request, metadata)
      .then((resp: QueryAllForsalesResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllForsalesResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [RNS] queryForsaleAll: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllForsalesResponse> = {
          success: false,
          forsale: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Queries a Init by index. */
  async queryInit (
    request: DeepPartial<QueryInitRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryInitResponse>> {
    return await this.queryClient.Init(request, metadata)
      .then((resp: QueryInitResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryInitResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [RNS] queryInit: ${err}`)
        const errRet: SuccessNoUndefined<QueryInitResponse> = {
          success: false,
          init: false
        }
        return errRet
      })
  }

  /** Queries a list of Init items. */
  async queryInitAll (
    request: DeepPartial<QueryAllInitsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllInitsResponse>> {
    return await this.queryClient.InitAll(request, metadata)
      .then((resp: QueryAllInitsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllInitsResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [RNS] queryInitAll: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllInitsResponse> = {
          success: false,
          init: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Queries a list of ListOwnedNames items. */
  async queryListOwnedNames (
    request: DeepPartial<QueryListOwnedNamesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryListOwnedNamesResponse>> {
    return await this.queryClient.ListOwnedNames(request, metadata)
      .then((resp: QueryListOwnedNamesResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryListOwnedNamesResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [RNS] queryListOwnedNames: ${err}`)
        const errRet: SuccessNoUndefined<QueryListOwnedNamesResponse> = {
          success: false,
          names: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }
}
