import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryActiveDealRequest,
  QueryActiveDealResponse,
  QueryAllActiveDealsRequest,
  QueryAllActiveDealsResponse,
  QueryAllContractsRequest,
  QueryAllContractsResponse,
  QueryAllFidCidRequest,
  QueryAllFidCidResponse,
  QueryAllProvidersRequest,
  QueryAllProvidersResponse,
  QueryAllStoragePaymentInfoRequest,
  QueryAllStoragePaymentInfoResponse,
  QueryAllStraysRequest,
  QueryAllStraysResponse,
  QueryClientFreeSpaceRequest,
  QueryClientFreeSpaceResponse,
  QueryClientImpl,
  QueryContractRequest,
  QueryContractResponse,
  QueryFidCidRequest,
  QueryFidCidResponse,
  QueryFileUploadCheckRequest,
  QueryFileUploadCheckResponse,
  QueryFindFileRequest,
  QueryFindFileResponse,
  QueryFreespaceRequest,
  QueryFreespaceResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryPayDataRequest,
  QueryPayDataResponse,
  QueryPriceCheckRequest,
  QueryPriceCheckResponse,
  QueryProviderRequest,
  QueryProviderResponse,
  QueryStoragePaymentInfoRequest,
  QueryStoragePaymentInfoResponse,
  QueryStrayRequest,
  QueryStrayResponse
} from '@/postgen/canine_chain/storage/query'
import { IQueryStorage } from '@/interfaces/classes/IQueryStorage'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

/** TODO - Add StoragePaymentInfo in v1.2.5 */

export default class QueryStorage implements IQueryStorage {
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
        console.warn(`jackal.js-protos - [Storage] queryParams: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            params: {
              depositAccount: '',
              proofWindow: 0,
              chunkSize: 0,
              missesToBurn: 0,
              priceFeed: '',
              maxContractAgeInBlocks: 0,
              pricePerTbPerMonth: 0
            }
          }
        }
      })
  }

  /** Queries a Contracts by index. */
  async queryContracts(
    request: DeepPartial<QueryContractRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryContractResponse>> {
    return await this.queryClient
      .Contracts(request, metadata)
      .then((resp: QueryContractResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryContracts: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            contracts: {
              cid: '',
              priceamt: '',
              pricedenom: '',
              creator: '',
              merkle: '',
              signee: '',
              duration: '',
              filesize: '',
              fid: '',
              age: 0
            }
          }
        }
      })
  }

  /** Queries a list of Contracts items. */
  async queryContractsAll(
    request: DeepPartial<QueryAllContractsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllContractsResponse>> {
    return await this.queryClient
      .ContractsAll(request, metadata)
      .then((resp: QueryAllContractsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryContractsAll: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            contracts: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries a ActiveDeals by index. */
  async queryActiveDeals(
    request: DeepPartial<QueryActiveDealRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryActiveDealResponse>> {
    return await this.queryClient
      .ActiveDeals(request, metadata)
      .then((resp: QueryActiveDealResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryActiveDeals: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            activeDeals: {
              cid: '',
              signee: '',
              provider: '',
              startblock: '',
              endblock: '',
              filesize: '',
              proofverified: '',
              proofsmissed: '',
              blocktoprove: '',
              creator: '',
              merkle: '',
              fid: ''
            }
          }
        }
      })
  }

  /** Queries a list of ActiveDeals items. */
  async queryActiveDealsAll(
    request: DeepPartial<QueryAllActiveDealsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllActiveDealsResponse>> {
    return await this.queryClient
      .ActiveDealsAll(request, metadata)
      .then((resp: QueryAllActiveDealsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryActiveDealsAll: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            activeDeals: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries a Providers by index. */
  async queryProviders(
    request: DeepPartial<QueryProviderRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryProviderResponse>> {
    return await this.queryClient
      .Providers(request, metadata)
      .then((resp: QueryProviderResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryProviders: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            providers: {
              address: '',
              ip: '',
              totalspace: '',
              burnedContracts: '',
              creator: '',
              keybaseIdentity: '',
              authClaimers: []
            }
          }
        }
      })
  }

  /** Queries a list of Providers items. */
  async queryProvidersAll(
    request: DeepPartial<QueryAllProvidersRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllProvidersResponse>> {
    return await this.queryClient
      .ProvidersAll(request, metadata)
      .then((resp: QueryAllProvidersResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryProvidersAll: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            providers: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries a list of Freespace items. */
  async queryFreespace(
    request: DeepPartial<QueryFreespaceRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFreespaceResponse>> {
    return await this.queryClient
      .Freespace(request, metadata)
      .then((resp: QueryFreespaceResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryFreespace: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            space: ''
          }
        }
      })
  }

  /** Queries a list of FindFile items. */
  async queryFindFile(
    request: DeepPartial<QueryFindFileRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFindFileResponse>> {
    return await this.queryClient
      .FindFile(request, metadata)
      .then((resp: QueryFindFileResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryFindFile: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            providerIps: ''
          }
        }
      })
  }

  /** Queries a Strays by index. */
  async queryStrays(
    request: DeepPartial<QueryStrayRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryStrayResponse>> {
    return await this.queryClient
      .Strays(request, metadata)
      .then((resp: QueryStrayResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryStrays: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            strays: {
              cid: '',
              fid: '',
              signee: '',
              filesize: '',
              merkle: '',
              end: 0
            }
          }
        }
      })
  }

  /** Queries a list of Strays items. */
  async queryStraysAll(
    request: DeepPartial<QueryAllStraysRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllStraysResponse>> {
    return await this.queryClient
      .StraysAll(request, metadata)
      .then((resp: QueryAllStraysResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryStraysAll: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            strays: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries a list of GetClientFreeSpace items. */
  async queryGetClientFreeSpace(
    request: DeepPartial<QueryClientFreeSpaceRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryClientFreeSpaceResponse>> {
    return await this.queryClient
      .GetClientFreeSpace(request, metadata)
      .then((resp: QueryClientFreeSpaceResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Storage] queryGetClientFreeSpace: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            bytesfree: 0
          }
        }
      })
  }

  /** Queries a FidCid by index. */
  async queryFidCid(
    request: DeepPartial<QueryFidCidRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFidCidResponse>> {
    return await this.queryClient
      .FidCid(request, metadata)
      .then((resp: QueryFidCidResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryFidCid: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            fidCid: {
              fid: '',
              cids: '[]'
            }
          }
        }
      })
  }

  /** Queries a list of FidCid items. */
  async queryFidCidAll(
    request: DeepPartial<QueryAllFidCidRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllFidCidResponse>> {
    return await this.queryClient
      .FidCidAll(request, metadata)
      .then((resp: QueryAllFidCidResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryFidCidAll: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            fidCid: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries a list of GetPayData items. */
  async queryGetPayData(
    request: DeepPartial<QueryPayDataRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryPayDataResponse>> {
    return await this.queryClient
      .GetPayData(request, metadata)
      .then((resp: QueryPayDataResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryGetPayData: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            timeRemaining: 0,
            bytes: 0
          }
        }
      })
  }

  /** Queries a StoragePaymentInfo by address. */
  async queryStoragePaymentInfo(
    request: DeepPartial<QueryStoragePaymentInfoRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryStoragePaymentInfoResponse>> {
    return await this.queryClient
      .StoragePaymentInfo(request, metadata)
      .then((resp: QueryStoragePaymentInfoResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Storage] queryStoragePaymentInfo: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            storagePaymentInfo: {
              start: new Date(),
              end: new Date(),
              spaceAvailable: 0,
              spaceUsed: 0,
              address: ''
            }
          }
        }
      })
  }

  /** Queries a list of StoragePaymentInfo items. */
  async queryStoragePaymentInfoAll(
    request: DeepPartial<QueryAllStoragePaymentInfoRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllStoragePaymentInfoResponse>> {
    return await this.queryClient
      .StoragePaymentInfoAll(request, metadata)
      .then((resp: QueryAllStoragePaymentInfoResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Storage] queryStoragePaymentInfoAll: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            storagePaymentInfo: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries whether user can upload a file based on size */
  async queryFileUploadCheck(
    request: DeepPartial<QueryFileUploadCheckRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFileUploadCheckResponse>> {
    return await this.queryClient
      .FileUploadCheck(request, metadata)
      .then((resp: QueryFileUploadCheckResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Storage] queryStoragePaymentInfo: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            valid: false
          }
        }
      })
  }

  /** TODO - Update with correct desc */
  async queryPriceCheck(
    request: DeepPartial<QueryPriceCheckRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryPriceCheckResponse>> {
    return await this.queryClient
      .PriceCheck(request, metadata)
      .then((resp: QueryPriceCheckResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Storage] queryPriceCheck: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            price: 0
          }
        }
      })
  }
}
