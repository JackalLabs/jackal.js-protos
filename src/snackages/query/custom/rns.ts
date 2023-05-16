import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
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
  QueryClientImpl,
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
import { IQueryRns } from '@/interfaces/classes/IQueryRns'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryRns implements IQueryRns {
  private readonly queryClient: Query

  constructor(rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  async queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>> {
    return await this.queryClient
      .Params(request, metadata)
      .then((resp: QueryParamsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [RNS] queryParams: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            params: {
              depositAccount: ''
            }
          }
        }
      })
  }

  /** Queries a Name by index. */
  async queryNames(
    request: DeepPartial<QueryNameRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryNameResponse>> {
    return await this.queryClient
      .Names(request, metadata)
      .then((resp: QueryNameResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [RNS] queryNames: ${err}`)
        return {
          message: '',
          success: false,
          value: {
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
        }
      })
  }

  /** Queries a list of Names. */
  async queryNamesAll(
    request: DeepPartial<QueryAllNamesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllNamesResponse>> {
    return await this.queryClient
      .NamesAll(request, metadata)
      .then((resp: QueryAllNamesResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [RNS] queryNamesAll: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            names: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries a Bid by index. */
  async queryBids(
    request: DeepPartial<QueryBidRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryBidResponse>> {
    return await this.queryClient
      .Bids(request, metadata)
      .then((resp: QueryBidResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [RNS] queryBids: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            bids: {
              index: '',
              name: '',
              bidder: '',
              price: ''
            }
          }
        }
      })
  }

  /** Queries a list of Bids. */
  async queryBidsAll(
    request: DeepPartial<QueryAllBidsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllBidsResponse>> {
    return await this.queryClient
      .BidsAll(request, metadata)
      .then((resp: QueryAllBidsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [RNS] queryBidsAll: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            bids: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries a Listing by index. */
  async queryForsale(
    request: DeepPartial<QueryForsaleRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryForsaleResponse>> {
    return await this.queryClient
      .Forsale(request, metadata)
      .then((resp: QueryForsaleResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [RNS] queryForsale: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            forsale: {
              name: '',
              price: '',
              owner: ''
            }
          }
        }
      })
  }

  /** Queries all Listings. */
  async queryForsaleAll(
    request: DeepPartial<QueryAllForsalesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllForsalesResponse>> {
    return await this.queryClient
      .ForsaleAll(request, metadata)
      .then((resp: QueryAllForsalesResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [RNS] queryForsaleAll: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            forsale: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries a Init by index. */
  async queryInit(
    request: DeepPartial<QueryInitRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryInitResponse>> {
    return await this.queryClient
      .Init(request, metadata)
      .then((resp: QueryInitResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [RNS] queryInit: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            init: false
          }
        }
      })
  }

  /** Queries a list of Init items. */
  async queryInitAll(
    request: DeepPartial<QueryAllInitsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllInitsResponse>> {
    return await this.queryClient
      .InitAll(request, metadata)
      .then((resp: QueryAllInitsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [RNS] queryInitAll: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            init: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries a list of ListOwnedNames items. */
  async queryListOwnedNames(
    request: DeepPartial<QueryListOwnedNamesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryListOwnedNamesResponse>> {
    return await this.queryClient
      .ListOwnedNames(request, metadata)
      .then((resp: QueryListOwnedNamesResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [RNS] queryListOwnedNames: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            names: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }
}
