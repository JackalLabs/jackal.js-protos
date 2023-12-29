import {
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
  DQueryStorageAllFilesByMerkle,
  DQueryStorageAllFilesByOwner,
  DQueryStorageFile,
  DQueryStorageParams,
  DQueryStoragePaymentInfo,
  DQueryStorageStats,
  DQueryStoreCount,
  TQueryStorageAllFilesByMerkleResponseStrict,
  TQueryStorageAllFilesByOwnerResponseStrict,
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
  TQueryStoreCountResponseStrict,
} from '@/types/queries/responses'

/**
 * @interface IStorageExtension
 * @property {IStorageExtensionMembers} storage
 */
export interface IStorageExtension {
  readonly storage: IStorageExtensionMembers
}

/**
 * All functions for querying data from the FileTree module.
 *
 * @interface IStorageExtensionMembers
 * @property {activeProviders} activeProviders()
 * @property {allAttestations} allAttestations()
 * @property {allFiles} allFiles()
 * @property {allFilesByMerkle} allFilesByMerkle()
 * @property {allFilesByOwner} allFilesByOwner()
 * @property {allProofs} allProofs()
 * @property {allProviders} allProviders()
 * @property {allReports} allReports()
 * @property {allStoragePaymentInfo} allStoragePaymentInfo()
 * @property {attestation} attestation()
 * @property {clientFreeSpace} clientFreeSpace()
 * @property {file} file()
 * @property {fileUploadCheck} fileUploadCheck()
 * @property {findFile} findFile()
 * @property {freeSpace} freeSpace()
 * @property {openFiles} openFiles()
 * @property {params} params()
 * @property {payData} payData()
 * @property {priceCheck} priceCheck()
 * @property {proof} proof()
 * @property {proofsByAddress} proofsByAddress()
 * @property {provider} provider()
 * @property {report} report()
 * @property {storagePaymentInfo} storagePaymentInfo()
 * @property {storageStats} storageStats()
 * @property {storeCount} storeCount()
 */
export interface IStorageExtensionMembers {
  /**
   * @function activeProviders
   * @param {DQueryActiveProviders} request
   * @returns Promise<TQueryActiveProvidersResponseStrict>
   */
  readonly activeProviders: (
    request: DQueryActiveProviders,
  ) => Promise<TQueryActiveProvidersResponseStrict>

  /**
   * @function allAttestations
   * @param {DQueryAllAttestations} request
   * @returns Promise<TQueryAllAttestationsResponseStrict>
   */
  readonly allAttestations: (
    request: DQueryAllAttestations,
  ) => Promise<TQueryAllAttestationsResponseStrict>

  /**
   * @function allFiles
   * @param {DQueryStorageAllFiles} request
   * @returns Promise<TQueryStorageAllFilesResponseStrict>
   */
  readonly allFiles: (
    request: DQueryStorageAllFiles,
  ) => Promise<TQueryStorageAllFilesResponseStrict>

  /**
   * @function allFilesByMerkle
   * @param {DQueryStorageAllFilesByMerkle} request
   * @returns Promise<TQueryStorageAllFilesByMerkleResponseStrict>
   */
  readonly allFilesByMerkle: (
    request: DQueryStorageAllFilesByMerkle,
  ) => Promise<TQueryStorageAllFilesByMerkleResponseStrict>

  /**
   * @function allFilesByOwner
   * @param {DQueryStorageAllFilesByOwner} request
   * @returns Promise<TQueryStorageAllFilesByOwnerResponseStrict>
   */
  readonly allFilesByOwner: (
    request: DQueryStorageAllFilesByOwner,
  ) => Promise<TQueryStorageAllFilesByOwnerResponseStrict>

  /**
   * @function allProofs
   * @param {DQueryAllProofs} request
   * @returns Promise<TQueryAllProofsResponseStrict>
   */
  readonly allProofs: (
    request: DQueryAllProofs,
  ) => Promise<TQueryAllProofsResponseStrict>

  /**
   * @function allProviders
   * @param {DQueryAllProviders} request
   * @returns Promise<TQueryAllProvidersResponseStrict>
   */
  readonly allProviders: (
    request: DQueryAllProviders,
  ) => Promise<TQueryAllProvidersResponseStrict>

  /**
   * @function allReports
   * @param {DQueryAllReports} request
   * @returns Promise<TQueryAllReportsResponseStrict>
   */
  readonly allReports: (
    request: DQueryAllReports,
  ) => Promise<TQueryAllReportsResponseStrict>

  /**
   * @function allStoragePaymentInfo
   * @param {DQueryAllStoragePaymentInfo} request
   * @returns Promise<TQueryAllStoragePaymentInfoResponseStrict>
   */
  readonly allStoragePaymentInfo: (
    request: DQueryAllStoragePaymentInfo,
  ) => Promise<TQueryAllStoragePaymentInfoResponseStrict>

  /**
   * @function attestation
   * @param {DQueryAttestation} request
   * @returns Promise<TQueryAttestationResponseStrict>
   */
  readonly attestation: (
    request: DQueryAttestation,
  ) => Promise<TQueryAttestationResponseStrict>

  /**
   * @function clientFreeSpace
   * @param {DQueryClientFreeSpace} request
   * @returns Promise<TQueryClientFreeSpaceResponseStrict>
   */
  readonly clientFreeSpace: (
    request: DQueryClientFreeSpace,
  ) => Promise<TQueryClientFreeSpaceResponseStrict>

  /**
   * @function file
   * @param {DQueryStorageFile} request
   * @returns Promise<TQueryStorageFileResponseStrict>
   */
  readonly file: (
    request: DQueryStorageFile,
  ) => Promise<TQueryStorageFileResponseStrict>

  /**
   * @function fileUploadCheck
   * @param {DQueryFileUploadCheck} request
   * @returns Promise<TQueryFileUploadCheckResponseStrict>
   */
  readonly fileUploadCheck: (
    request: DQueryFileUploadCheck,
  ) => Promise<TQueryFileUploadCheckResponseStrict>

  /**
   * @function findFile
   * @param {DQueryFindFile} request
   * @returns Promise<TQueryFindFileResponseStrict>
   */
  readonly findFile: (
    request: DQueryFindFile,
  ) => Promise<TQueryFindFileResponseStrict>

  /**
   * @function freeSpace
   * @param {DQueryFreeSpace} request
   * @returns Promise<TQueryFreeSpaceResponseStrict>
   */
  readonly freeSpace: (
    request: DQueryFreeSpace,
  ) => Promise<TQueryFreeSpaceResponseStrict>

  /**
   * @function openFiles
   * @param {DQueryOpenFiles} request
   * @returns Promise<TQueryStorageAllFilesResponseStrict>
   */
  readonly openFiles: (
    request: DQueryOpenFiles,
  ) => Promise<TQueryStorageAllFilesResponseStrict>

  /**
   * @function params
   * @param {DQueryStorageParams} request
   * @returns Promise<TQueryStorageParamsResponseStrict>
   */
  readonly params: (
    request: DQueryStorageParams,
  ) => Promise<TQueryStorageParamsResponseStrict>

  /**
   * @function payData
   * @param {DQueryPayData} request
   * @returns Promise<TQueryPayDataResponseStrict>
   */
  readonly payData: (
    request: DQueryPayData,
  ) => Promise<TQueryPayDataResponseStrict>

  /**
   * @function priceCheck
   * @param {DQueryPriceCheck} request
   * @returns Promise<TQueryPriceCheckResponseStrict>
   */
  readonly priceCheck: (
    request: DQueryPriceCheck,
  ) => Promise<TQueryPriceCheckResponseStrict>

  /**
   * @function proof
   * @param {DQueryProof} request
   * @returns Promise<TQueryProofResponseStrict>
   */
  readonly proof: (request: DQueryProof) => Promise<TQueryProofResponseStrict>

  /**
   * @function proofsByAddress
   * @param {DQueryProofsByAddress} request
   * @returns Promise<TQueryProofsByAddressResponseStrict>
   */
  readonly proofsByAddress: (
    request: DQueryProofsByAddress,
  ) => Promise<TQueryProofsByAddressResponseStrict>

  /**
   * @function provider
   * @param {DQueryProvider} request
   * @returns Promise<TQueryProviderResponseStrict>
   */
  readonly provider: (
    request: DQueryProvider,
  ) => Promise<TQueryProviderResponseStrict>

  /**
   * @function report
   * @param {DQueryReport} request
   * @returns Promise<TQueryReportResponseStrict>
   */
  readonly report: (
    request: DQueryReport,
  ) => Promise<TQueryReportResponseStrict>

  /**
   * @function storagePaymentInfo
   * @param {DQueryStoragePaymentInfo} request
   * @returns Promise<TQueryStoragePaymentInfoResponseStrict>
   */
  readonly storagePaymentInfo: (
    request: DQueryStoragePaymentInfo,
  ) => Promise<TQueryStoragePaymentInfoResponseStrict>

  /**
   * @function storageStats
   * @param {DQueryStorageStats} request
   * @returns Promise<TQueryStorageStatsResponseStrict>
   */
  readonly storageStats: (
    request: DQueryStorageStats,
  ) => Promise<TQueryStorageStatsResponseStrict>

  /**
   * @function storeCount
   * @param {DQueryStoreCount} request
   * @returns Promise<TQueryStoreCountResponseStrict>
   */
  readonly storeCount: (
    request: DQueryStoreCount,
  ) => Promise<TQueryStoreCountResponseStrict>
}
