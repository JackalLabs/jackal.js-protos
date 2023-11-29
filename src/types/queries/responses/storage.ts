import type { Params } from '@/postgen/canine_chain/storage/params'
import type { PageResponse } from '@/postgen/cosmos/base/query/v1beta1/pagination'
import {
  QueryActiveProvidersResponse,
  QueryAllAttestationsResponse,
  QueryAllFilesResponse,
  QueryAllProofsResponse,
  QueryAllProvidersResponse,
  QueryAllReportsResponse,
  QueryAllStoragePaymentInfoResponse,
  QueryAttestationResponse,
  QueryClientFreeSpaceResponse,
  QueryFileResponse,
  QueryFileUploadCheckResponse,
  QueryFindFileResponse,
  QueryFreeSpaceResponse,
  QueryParamsResponse,
  QueryPayDataResponse,
  QueryPriceCheckResponse,
  QueryProofResponse,
  QueryProofsByAddressResponse,
  QueryProviderResponse,
  QueryReportResponse,
  QueryStoragePaymentInfoResponse,
  QueryStorageStatsResponse,
  QueryStoreCountResponse
} from '@/postgen/canine_chain/storage/query'
import {
  DActiveProvider,
  DAttestationForm,
  DFileProof,
  DProvider,
  DReportForm,
  DStoragePaymentInfo,
  DUnifiedFile
} from '@/types/storage'

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryProofsByAddressResponseStrict
  = ModifyDeep<QueryProofsByAddressResponse, { pagination: PageResponse }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryAllProofsResponseStrict
  = ModifyDeep<QueryAllProofsResponse, { pagination: PageResponse }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryStorageAllFilesResponseStrict
  = ModifyDeep<QueryAllFilesResponse, { pagination: PageResponse }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryAllProvidersResponseStrict
  = ModifyDeep<QueryAllProvidersResponse, { pagination: PageResponse }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryAllAttestationsResponseStrict
  = ModifyDeep<QueryAllAttestationsResponse, { pagination: PageResponse }>
/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryAllReportsResponseStrict
  = ModifyDeep<QueryAllReportsResponse, { pagination: PageResponse }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryAllStoragePaymentInfoResponseStrict
  = ModifyDeep<QueryAllStoragePaymentInfoResponse, { pagination: PageResponse }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryStorageStatsResponseStrict
  = ModifyDeep<QueryStorageStatsResponse, {
    purchased: number
    used: number
    usedRatio: Uint8Array
    activeUsers: number
    usersByPlan: { [key: number]: number }
  }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryActiveProvidersResponseStrict
  = ModifyDeep<QueryActiveProvidersResponse, { providers: DActiveProvider[] }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryPriceCheckResponseStrict
  = ModifyDeep<QueryPriceCheckResponse, { price: number }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryFileUploadCheckResponseStrict
  = ModifyDeep<QueryFileUploadCheckResponse, { valid: boolean }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryStoragePaymentInfoResponseStrict
  = ModifyDeep<QueryStoragePaymentInfoResponse, { storagePaymentInfo: DStoragePaymentInfo }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryPayDataResponseStrict
  = ModifyDeep<QueryPayDataResponse, { bytes: number, timeRemaining: number }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryClientFreeSpaceResponseStrict
  = ModifyDeep<QueryClientFreeSpaceResponse, { bytesFree: number }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryFindFileResponseStrict
  = ModifyDeep<QueryFindFileResponse, { providerIps: string }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryFreeSpaceResponseStrict
  = ModifyDeep<QueryFreeSpaceResponse, { space: number }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryStoreCountResponseStrict
  = ModifyDeep<QueryStoreCountResponse, { count: number }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryReportResponseStrict
  = ModifyDeep<QueryReportResponse, { report: DReportForm }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryAttestationResponseStrict
  = ModifyDeep<QueryAttestationResponse, { attestation: DAttestationForm }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryProviderResponseStrict
  = ModifyDeep<QueryProviderResponse, { provider: DProvider }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryStorageFileResponseStrict
  = ModifyDeep<QueryFileResponse, { file: DUnifiedFile }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params - Currently none
 */
export type TQueryProofResponseStrict
  = ModifyDeep<QueryProofResponse, { proof: DFileProof }>

/**
 * This is the response for the  [Storage] Query/Params RPC method
 *
 * @prop {Params} params
 * - depositAccount: string;
 * - proofWindow: number;
 * - chunkSize: number;
 * - missesToBurn: number;
 * - priceFeed: string;
 * - maxContractAgeInBlocks: number;
 * - pricePerTbPerMonth: number;
 * - attestFormSize: number;
 * - attestMinToPass: number;
 * - collateralPrice: number;
 */
export type TQueryStorageParamsResponseStrict
  = ModifyDeep<QueryParamsResponse, { params: Params }>
