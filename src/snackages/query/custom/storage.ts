import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryAllActiveDealsRequest,
  QueryAllActiveDealsResponse,
  QueryAllContractsRequest,
  QueryAllContractsResponse,
  QueryAllFidCidRequest,
  QueryAllFidCidResponse,
  QueryAllProvidersRequest,
  QueryAllProvidersResponse,
  QueryAllStraysRequest,
  QueryAllStraysResponse,
  QueryClientImpl,
  QueryFindFileRequest,
  QueryFindFileResponse,
  QueryFreespaceRequest,
  QueryFreespaceResponse,
  QueryActiveDealRequest,
  QueryActiveDealResponse,
  QueryClientFreeSpaceRequest,
  QueryClientFreeSpaceResponse,
  QueryContractRequest,
  QueryContractResponse,
  QueryFidCidRequest,
  QueryFidCidResponse,
  QueryPayDataRequest,
  QueryPayDataResponse,
  QueryProviderRequest,
  QueryProviderResponse,
  QueryStrayRequest,
  QueryStrayResponse,
  QueryStoragePaymentInfoRequest,
  QueryStoragePaymentInfoResponse,
  QueryAllStoragePaymentInfoRequest,
  QueryAllStoragePaymentInfoResponse,
  QueryFileUploadCheckRequest,
  QueryFileUploadCheckResponse
} from '@/postgen/canine_chain/storage/query'
import IQueryStorage from '@/interfaces/classes/IQueryStorage'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

/** TODO - Add StoragePaymentInfo in v1.2.5 */

export default class QueryStorage implements IQueryStorage {
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
        console.warn(`jackal.js-protos - [Storage] queryParams: ${err}`)
        const errRet: SuccessNoUndefined<QueryParamsResponse> = {
          success: false,
          params: {
            depositAccount: ''
          }
        }
        return errRet
      })
  }

  /** Queries a Contracts by index. */
  async queryContracts (
    request: DeepPartial<QueryContractRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryContractResponse>> {
    return await this.queryClient.Contracts(request, metadata)
      .then((resp: QueryContractResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryContractResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryContracts: ${err}`)
        const errRet: SuccessNoUndefined<QueryContractResponse> = {
          success: false,
          contracts: {
            cid: '',
            priceamt: '',
            pricedenom: '',
            merkle: '',
            signee: '',
            duration: '',
            filesize: '',
            fid: '',
            creator: ''
          }
        }
        return errRet
      })
  }

  /** Queries a list of Contracts items. */
  async queryContractsAll (
    request: DeepPartial<QueryAllContractsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllContractsResponse>> {
    return await this.queryClient.ContractsAll(request, metadata)
      .then((resp: QueryAllContractsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllContractsResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryContractsAll: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllContractsResponse> = {
          success: false,
          contracts: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Queries a ActiveDeals by index. */
  async queryActiveDeals (
    request: DeepPartial<QueryActiveDealRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryActiveDealResponse>> {
    return await this.queryClient.ActiveDeals(request, metadata)
      .then((resp: QueryActiveDealResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryActiveDealResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryActiveDeals: ${err}`)
        const errRet: SuccessNoUndefined<QueryActiveDealResponse> = {
          success: false,
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
        return errRet
      })
  }

  /** Queries a list of ActiveDeals items. */
  async queryActiveDealsAll (
    request: DeepPartial<QueryAllActiveDealsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllActiveDealsResponse>> {
    return await this.queryClient.ActiveDealsAll(request, metadata)
      .then((resp: QueryAllActiveDealsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllActiveDealsResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryActiveDealsAll: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllActiveDealsResponse> = {
          success: false,
          activeDeals: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Queries a Providers by index. */
  async queryProviders (
    request: DeepPartial<QueryProviderRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryProviderResponse>> {
    return await this.queryClient.Providers(request, metadata)
      .then((resp: QueryProviderResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryProviderResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryProviders: ${err}`)
        const errRet: SuccessNoUndefined<QueryProviderResponse> = {
          success: false,
          providers: {
            address: '',
            ip: '',
            totalspace: '',
            burnedContracts: '',
            creator: '',
            keybaseIdentity: ''
          }
        }
        return errRet
      })
  }

  /** Queries a list of Providers items. */
  async queryProvidersAll (
    request: DeepPartial<QueryAllProvidersRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllProvidersResponse>> {
    return await this.queryClient.ProvidersAll(request, metadata)
      .then((resp: QueryAllProvidersResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllProvidersResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryProvidersAll: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllProvidersResponse> = {
          success: false,
          providers: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Queries a list of Freespace items. */
  async queryFreespace (
    request: DeepPartial<QueryFreespaceRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFreespaceResponse>> {
    return await this.queryClient.Freespace(request, metadata)
      .then((resp: QueryFreespaceResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryFreespaceResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryFreespace: ${err}`)
        const errRet: SuccessNoUndefined<QueryFreespaceResponse> = {
          success: false,
          space: ''
        }
        return errRet
      })
  }

  /** Queries a list of FindFile items. */
  async queryFindFile (
    request: DeepPartial<QueryFindFileRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFindFileResponse>> {
    return await this.queryClient.FindFile(request, metadata)
      .then((resp: QueryFindFileResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryFindFileResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryFindFile: ${err}`)
        const errRet: SuccessNoUndefined<QueryFindFileResponse> = {
          success: false,
          providerIps: ''
        }
        return errRet
      })
  }

  /** Queries a Strays by index. */
  async queryStrays (
    request: DeepPartial<QueryStrayRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryStrayResponse>> {
    return await this.queryClient.Strays(request, metadata)
      .then((resp: QueryStrayResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryStrayResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryStrays: ${err}`)
        const errRet: SuccessNoUndefined<QueryStrayResponse> = {
          success: false,
          strays: {
            cid: '',
            fid: '',
            signee: '',
            filesize: '',
            merkle: ''
          }
        }
        return errRet
      })
  }

  /** Queries a list of Strays items. */
  async queryStraysAll (
    request: DeepPartial<QueryAllStraysRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllStraysResponse>> {
    return await this.queryClient.StraysAll(request, metadata)
      .then((resp: QueryAllStraysResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllStraysResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryStraysAll: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllStraysResponse> = {
          success: false,
          strays: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Queries a list of GetClientFreeSpace items. */
  async queryGetClientFreeSpace (
    request: DeepPartial<QueryClientFreeSpaceRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryClientFreeSpaceResponse>> {
    return await this.queryClient.GetClientFreeSpace(request, metadata)
      .then((resp: QueryClientFreeSpaceResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryClientFreeSpaceResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryGetClientFreeSpace: ${err}`)
        const errRet: SuccessNoUndefined<QueryClientFreeSpaceResponse> = {
          success: false,
          bytesfree: 0
        }
        return errRet
      })
  }

  /** Queries a FidCid by index. */
  async queryFidCid (
    request: DeepPartial<QueryFidCidRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFidCidResponse>> {
    return await this.queryClient.FidCid(request, metadata)
      .then((resp: QueryFidCidResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryFidCidResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryFidCid: ${err}`)
        const errRet: SuccessNoUndefined<QueryFidCidResponse> = {
          success: false,
          fidCid: {
            fid: '',
            cids: ''
          }
        }
        return errRet
      })
  }

  /** Queries a list of FidCid items. */
  async queryFidCidAll (
    request: DeepPartial<QueryAllFidCidRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllFidCidResponse>> {
    return await this.queryClient.FidCidAll(request, metadata)
      .then((resp: QueryAllFidCidResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllFidCidResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryFidCidAll: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllFidCidResponse> = {
          success: false,
          fidCid: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Queries a list of GetPayData items. */
  async queryGetPayData (
    request: DeepPartial<QueryPayDataRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryPayDataResponse>> {
    return await this.queryClient.GetPayData(request, metadata)
      .then((resp: QueryPayDataResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryPayDataResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryGetPayData: ${err}`)
        const errRet: SuccessNoUndefined<QueryPayDataResponse> = {
          success: false,
          timeRemaining: 0,
          bytes: 0
        }
        return errRet
      })
  }

  /** Queries a StoragePaymentInfo by address. */
  async queryStoragePaymentInfo (
    request: DeepPartial<QueryStoragePaymentInfoRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryStoragePaymentInfoResponse>> {
    return await this.queryClient.StoragePaymentInfo(request, metadata)
      .then((resp: QueryStoragePaymentInfoResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryStoragePaymentInfoResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryStoragePaymentInfo: ${err}`)
        const errRet: SuccessNoUndefined<QueryStoragePaymentInfoResponse> = {
          success: false,
          storagePaymentInfo: {
            start: new Date(),
            end: new Date(),
            spaceAvailable: 0,
            spaceUsed: 0,
            address: ''
          }
        }
        return errRet
      })
  }

  /** Queries a list of StoragePaymentInfo items. */
  async queryStoragePaymentInfoAll (
    request: DeepPartial<QueryAllStoragePaymentInfoRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllStoragePaymentInfoResponse>> {
    return await this.queryClient.StoragePaymentInfoAll(request, metadata)
      .then((resp: QueryAllStoragePaymentInfoResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllStoragePaymentInfoResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryStoragePaymentInfoAll: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllStoragePaymentInfoResponse> = {
          success: false,
          storagePaymentInfo: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Queries whether user can upload a file based on size */
  async queryFileUploadCheck (
    request: DeepPartial<QueryFileUploadCheckRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryFileUploadCheckResponse>> {
    return await this.queryClient.FileUploadCheck(request, metadata)
      .then((resp: QueryFileUploadCheckResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryFileUploadCheckResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Storage] queryStoragePaymentInfo: ${err}`)
        const errRet: SuccessNoUndefined<QueryFileUploadCheckResponse> = {
          success: false,
          valid: false
        }
        return errRet
      })
  }
}
