import type { Params } from '@/postGen/canine_chain/storage/params'
import type { PageResponse } from '@/postGen/cosmos/base/query/v1beta1/pagination'
import type {
  QueryActiveProvidersResponse,
  QueryAllAttestationsResponse,
  QueryAllFilesByMerkleResponse,
  QueryAllFilesByOwnerResponse,
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
  QueryStoreCountResponse,
} from '@/postGen/canine_chain/storage/query'
import type {
  DActiveProvider,
  DAttestationForm,
  DFileProof,
  DProvider,
  DReportForm,
  DStoragePaymentInfo,
  DUnifiedFile,
} from '@/types/storage'

/**
 * This is the response for the [Storage] Query/ProofsByAddress RPC method.
 *
 * @prop {DFileProof[]} proofs - Array of FileProof items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryProofsByAddressResponseStrict = ModifyDeep<
  QueryProofsByAddressResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] Query/AllProofs RPC method.
 *
 * @prop {DFileProof[]} proofs - Array of FileProof items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllProofsResponseStrict = ModifyDeep<
  QueryAllProofsResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] Query/AllFiles RPC method.
 *
 * @prop {DUnifiedFile[]} files - Array of UnifiedFile items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryStorageAllFilesResponseStrict = ModifyDeep<
  QueryAllFilesResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] Query/AllFilesByMerkle RPC method.
 *
 * @prop {DUnifiedFile[]} files - Array of UnifiedFile items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryStorageAllFilesByMerkleResponseStrict = ModifyDeep<
  QueryAllFilesByMerkleResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] Query/AllFilesByOwner RPC method.
 *
 * @prop {DUnifiedFile[]} files - Array of UnifiedFile items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryStorageAllFilesByOwnerResponseStrict = ModifyDeep<
  QueryAllFilesByOwnerResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] Query/AllProviders RPC method.
 *
 * @prop {DProvider[]} providers - Array of Provider items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllProvidersResponseStrict = ModifyDeep<
  QueryAllProvidersResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] Query/AllAttestations RPC method.
 *
 * @prop {DAttestationForm[]} attestations - Array of AttestationForm items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllAttestationsResponseStrict = ModifyDeep<
  QueryAllAttestationsResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] Query/AllReports RPC method.
 *
 * @prop {DReportForm[]} reports - Array of ReportForm items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllReportsResponseStrict = ModifyDeep<
  QueryAllReportsResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] Query/AllStoragePaymentInfo RPC method.
 *
 * @prop {DStoragePaymentInfo[]} storagePaymentInfo - Array of StoragePaymentInfo items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllStoragePaymentInfoResponseStrict = ModifyDeep<
  QueryAllStoragePaymentInfoResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] Query/StorageStats RPC method.
 *
 * @prop {number} purchased - Total storage purchased in bytes.
 * @prop {number} used - Total storage used in bytes.
 * @prop {Uint8Array} usedRatio - Ratio of used<>purchased.
 * @prop {number} activeUsers - Total number of active storage plans.
 * @prop {number} uniqueUsers - Total number of unique accounts with storage plans.
 * @prop {DUsersByPlanMap} usersByPlan - Map of number of users indexed by total plan storage.
 */
export type TQueryStorageStatsResponseStrict = ModifyDeep<
  QueryStorageStatsResponse,
  {
    purchased: number
    used: number
    usedRatio: Uint8Array
    activeUsers: number
    uniqueUsers: number
    usersByPlan: DUsersByPlanMap
  }
>

/**
 * UsersByPlanMap Documentation
 *
 * UsersByPlanMap defines a map of users and plans returned from the chain.
 * @prop {number} [key: number] - Number of users indexed by storage plan size.
 */
export type DUsersByPlanMap = {
  [key: number]: number
}

/**
 * This is the response for the [Storage] Query/ActiveProviders RPC method.
 *
 * @prop {DActiveProvider} providers - Array of active providers.
 */
export type TQueryActiveProvidersResponseStrict = ModifyDeep<
  QueryActiveProvidersResponse,
  { providers: DActiveProvider[] }
>

/**
 * This is the response for the [Storage] Query/PriceCheck RPC method.
 *
 * @prop {number} price - Price of requested plan size and duration in ujkl.
 */
export type TQueryPriceCheckResponseStrict = ModifyDeep<
  QueryPriceCheckResponse,
  { price: number }
>

/**
 * This is the response for the [Storage] Query/FileUploadCheck RPC method.
 *
 * @prop {boolean} valid - Result of upload attempt.
 */
export type TQueryFileUploadCheckResponseStrict = ModifyDeep<
  QueryFileUploadCheckResponse,
  { valid: boolean }
>

/**
 * This is the response for the [Storage] Query/StoragePaymentInfo RPC method.
 *
 * @prop {DStoragePaymentInfo} storagePaymentInfo - Single StoragePaymentInfo item.
 */
export type TQueryStoragePaymentInfoResponseStrict = ModifyDeep<
  QueryStoragePaymentInfoResponse,
  { storagePaymentInfo: DStoragePaymentInfo }
>

/**
 * This is the response for the [Storage] Query/PayData RPC method.
 *
 * @prop {number} bytes - Current total storage purchased in bytes.
 * @prop {number} timeRemaining - Current time remaining on plan in blocks.
 */
export type TQueryPayDataResponseStrict = ModifyDeep<
  QueryPayDataResponse,
  { bytes: number; timeRemaining: number }
>

/**
 * This is the response for the [Storage] Query/ClientFreeSpace RPC method.
 *
 * @prop {number} bytesFree - Current available storage plan space available in bytes.
 */
export type TQueryClientFreeSpaceResponseStrict = ModifyDeep<
  QueryClientFreeSpaceResponse,
  { bytesFree: number }
>

/**
 * This is the response for the [Storage] Query/FindFile RPC method.
 *
 * @prop {string[]} providerIps - Array of public endpoints of providers hosting requested file.
 */
export type TQueryFindFileResponseStrict = ModifyDeep<
  QueryFindFileResponse,
  { providerIps: string[] }
>

/**
 * This is the response for the [Storage] Query/FreeSpace RPC method.
 *
 * @prop {number} space - Current available space on requested provider in bytes.
 */
export type TQueryFreeSpaceResponseStrict = ModifyDeep<
  QueryFreeSpaceResponse,
  { space: number }
>

/**
 * This is the response for the [Storage] Query/StoreCount RPC method.
 *
 * @prop {number} count - Total number of files currently stored on provider.
 */
export type TQueryStoreCountResponseStrict = ModifyDeep<
  QueryStoreCountResponse,
  { count: number }
>

/**
 * This is the response for the [Storage] Query/Report RPC method.
 *
 * @prop {DReportForm} report - Single ReportForm item.
 */
export type TQueryReportResponseStrict = ModifyDeep<
  QueryReportResponse,
  { report: DReportForm }
>

/**
 * This is the response for the [Storage] Query/Attestation RPC method.
 *
 * @prop {DAttestationForm} attestation - Single AttestationForm item.
 */
export type TQueryAttestationResponseStrict = ModifyDeep<
  QueryAttestationResponse,
  { attestation: DAttestationForm }
>

/**
 * This is the response for the [Storage] Query/Provider RPC method.
 *
 * @prop {DProvider} provider - Single Provider item.
 */
export type TQueryProviderResponseStrict = ModifyDeep<
  QueryProviderResponse,
  { provider: DProvider }
>

/**
 * This is the response for the [Storage] Query/StorageFile RPC method.
 *
 * @prop {DUnifiedFile} file - Single UnifiedFile item.
 */
export type TQueryStorageFileResponseStrict = ModifyDeep<
  QueryFileResponse,
  { file: DUnifiedFile }
>

/**
 * This is the response for the [Storage] Query/Proof RPC method.
 *
 * @prop {DFileProof} proof - Single FileProof item.
 */
export type TQueryProofResponseStrict = ModifyDeep<
  QueryProofResponse,
  { proof: DFileProof }
>

/**
 * This is the response for the [Storage] Query/Params RPC method.
 *
 * @prop {DStorageParams} params - Current parameters of the Storage module.
 */
export type TQueryStorageParamsResponseStrict = ModifyDeep<
  QueryParamsResponse,
  { params: Params }
>

/**
 * StorageParams Documentation
 *
 * StorageParams defines current parameters of the Storage module.
 * @prop {string} depositAccount - Jackal Wallet address to receive funds from storage plan purchases.
 * @prop {number} proofWindow - Interval between proofs in blocks.
 * @prop {number} chunkSize - Maximum size of merkle chunks in bytes.
 * @prop {number} missesToBurn - Number of allowed proof failures before burn.
 * @prop {string} priceFeed - Source of USD price of $JKL.
 * @prop {number} maxContractAgeInBlocks - Maximum future date of file expiration in blocks.
 * @prop {number} pricePerTbPerMonth - Price per 30 days per TB of storage in USD.
 * @prop {number} attestFormSize - Size of consensus sphere per proof.
 * @prop {number} attestMinToPass - Minimum number of successful participants in consensus sphere for proof to succeed.
 * @prop {number} collateralPrice - Collateral amount required of new providers in ujkl.
 * @prop {number} checkWindow - Interval between checks for failed/successful proofs in blocks.
 */
export type DStorageParams = {
  depositAccount: string
  proofWindow: number
  chunkSize: number
  missesToBurn: number
  priceFeed: string
  maxContractAgeInBlocks: number
  pricePerTbPerMonth: number
  attestFormSize: number
  attestMinToPass: number
  collateralPrice: number
  checkWindow: number
}
