import type {
  DQueryActiveProviders,
  DQueryAllAttestations,
  DQueryAllProofs,
  DQueryAllProviders,
  DQueryAllReports,
  DQueryAllStoragePaymentInfo,
  DQueryAttestation,
  DQueryClientFreeSpace,
  DQueryFileUploadCheck,
  DQueryFindFile,
  DQueryFreeSpace,
  DQueryOpenFiles,
  DQueryPayData,
  DQueryPriceCheck,
  DQueryProof,
  DQueryProofsByAddress,
  DQueryProvider,
  DQueryReport,
  DQueryStorageAllFiles,
  DQueryStorageFile,
  DQueryStorageParams,
  DQueryStoragePaymentInfo,
  DQueryStorageStats,
  DQueryStoreCount
} from '@/types/queries'
import type {
  TQueryActiveProvidersResponseStrict,
  TQueryAllAttestationsResponseStrict,
  TQueryAllProofsResponseStrict,
  TQueryAllProvidersResponseStrict,
  TQueryAllReportsResponseStrict,
  TQueryAllStoragePaymentInfoResponseStrict,
  TQueryAttestationResponseStrict,
  TQueryClientFreeSpaceResponseStrict,
  TQueryFileUploadCheckResponseStrict,
  TQueryFindFileResponseStrict,
  TQueryFreeSpaceResponseStrict,
  TQueryPayDataResponseStrict,
  TQueryPriceCheckResponseStrict,
  TQueryProofResponseStrict,
  TQueryProofsByAddressResponseStrict,
  TQueryProviderResponseStrict,
  TQueryReportResponseStrict,
  TQueryStorageAllFilesResponseStrict,
  TQueryStorageFileResponseStrict,
  TQueryStorageParamsResponseStrict,
  TQueryStoragePaymentInfoResponseStrict,
  TQueryStorageStatsResponseStrict,
  TQueryStoreCountResponseStrict
} from '@/types/queries/responses'

export interface IStorageExtension {
  readonly storage: {
    readonly activeProviders: (request: DQueryActiveProviders) => Promise<TQueryActiveProvidersResponseStrict>
    readonly allAttestations: (request: DQueryAllAttestations) => Promise<TQueryAllAttestationsResponseStrict>
    readonly allFiles: (request: DQueryStorageAllFiles) => Promise<TQueryStorageAllFilesResponseStrict>
    readonly allProofs: (request: DQueryAllProofs) => Promise<TQueryAllProofsResponseStrict>
    readonly allProviders: (request: DQueryAllProviders) => Promise<TQueryAllProvidersResponseStrict>
    readonly allReports: (request: DQueryAllReports) => Promise<TQueryAllReportsResponseStrict>
    readonly allStoragePaymentInfo: (request: DQueryAllStoragePaymentInfo) => Promise<TQueryAllStoragePaymentInfoResponseStrict>
    readonly attestation: (request: DQueryAttestation) => Promise<TQueryAttestationResponseStrict>
    readonly clientFreeSpace: (request: DQueryClientFreeSpace) => Promise<TQueryClientFreeSpaceResponseStrict>
    readonly file: (request: DQueryStorageFile) => Promise<TQueryStorageFileResponseStrict>
    readonly fileUploadCheck: (request: DQueryFileUploadCheck) => Promise<TQueryFileUploadCheckResponseStrict>
    readonly findFile: (request: DQueryFindFile) => Promise<TQueryFindFileResponseStrict>
    readonly freeSpace: (request: DQueryFreeSpace) => Promise<TQueryFreeSpaceResponseStrict>
    readonly openFiles: (request: DQueryOpenFiles) => Promise<TQueryStorageAllFilesResponseStrict>
    readonly params: (request: DQueryStorageParams) => Promise<TQueryStorageParamsResponseStrict>
    readonly payData: (request: DQueryPayData) => Promise<TQueryPayDataResponseStrict>
    readonly priceCheck: (request: DQueryPriceCheck) => Promise<TQueryPriceCheckResponseStrict>
    readonly proof: (request: DQueryProof) => Promise<TQueryProofResponseStrict>
    readonly proofsByAddress: (request: DQueryProofsByAddress) => Promise<TQueryProofsByAddressResponseStrict>
    readonly provider: (request: DQueryProvider) => Promise<TQueryProviderResponseStrict>
    readonly report: (request: DQueryReport) => Promise<TQueryReportResponseStrict>
    readonly storagePaymentInfo: (request: DQueryStoragePaymentInfo) => Promise<TQueryStoragePaymentInfoResponseStrict>
    readonly storageStats: (request: DQueryStorageStats) => Promise<TQueryStorageStatsResponseStrict>
    readonly storeCount: (request: DQueryStoreCount) => Promise<TQueryStoreCountResponseStrict>
  }
}
