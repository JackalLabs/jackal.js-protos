import {
  DQueryAllContractStateRequest,
  DQueryCodeRequest,
  DQueryCodesRequest,
  DQueryContractHistoryRequest,
  DQueryContractInfoRequest,
  DQueryContractsByCodeRequest,
  DQueryContractsByCreatorRequest, DQueryParamsRequest,
  DQueryPinnedCodesRequest,
  DQueryRawContractStateRequest, DQuerySmartContractStateRequest,
} from '@/types/queries'
import type {
  TQueryAllContractStateResponseStrict,
  TQueryCodeResponse,
  TQueryCodesResponseStrict, TQueryContractHistoryResponseStrict,
  TQueryContractInfoResponse,
  TQueryContractsByCodeResponseStrict,
  TQueryContractsByCreatorResponseStrict,
  TQueryPinnedCodesResponseStrict, TQueryRawContractStateResponseStrict, TQuerySmartContractStateResponseStrict,
} from '@/types/queries/responses'

/**
 * @interface IStorageExtension
 * @property {IStorageExtensionMembers} storage
 */
export interface ICosmwasmExtension
  extends Record<string, ICosmwasmExtensionMembers> {
  readonly cosmwasm: ICosmwasmExtensionMembers
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
export interface ICosmwasmExtensionMembers
  extends Record<string, (request?: any) => Promise<any>> {
  /**
   * @function activeProviders
   * @param {DQueryActiveProviders} request
   * @returns Promise<TQueryActiveProvidersResponseStrict>
   */
  readonly allContractState: (
    request: DQueryAllContractStateRequest,
  ) => Promise<TQueryAllContractStateResponseStrict>

  /**
   * @function allAttestations
   * @param {DQueryAllAttestations} [request]
   * @returns Promise<TQueryAllAttestationsResponseStrict>
   */
  readonly code: (
    request: DQueryCodeRequest,
  ) => Promise<TQueryCodeResponse>

  /**
   * @function allFiles
   * @param {DQueryStorageAllFiles} [request]
   * @returns Promise<TQueryStorageAllFilesResponseStrict>
   */
  readonly codes: (
    request: DQueryCodesRequest,
  ) => Promise<TQueryCodesResponseStrict>

  /**
   * @function allFilesByMerkle
   * @param {DQueryStorageAllFilesByMerkle} request
   * @returns Promise<TQueryStorageAllFilesByMerkleResponseStrict>
   */
  readonly contractHistory: (
    request: DQueryContractHistoryRequest,
  ) => Promise<TQueryContractHistoryResponseStrict>

  /**
   * @function allFilesByOwner
   * @param {DQueryStorageAllFilesByOwner} request
   * @returns Promise<TQueryStorageAllFilesByOwnerResponseStrict>
   */
  readonly contractInfo: (
    request: DQueryContractInfoRequest,
  ) => Promise<TQueryContractInfoResponse>

  /**
   * @function allProofs
   * @param {DQueryAllProofs} [request]
   * @returns Promise<TQueryAllProofsResponseStrict>
   */
  readonly contractsByCode: (
    request: DQueryContractsByCodeRequest,
  ) => Promise<TQueryContractsByCodeResponseStrict>

  /**
   * @function allProviders
   * @param {DQueryAllProviders} [request]
   * @returns Promise<TQueryAllProvidersResponseStrict>
   */
  readonly contractsByCreator: (
    request: DQueryContractsByCreatorRequest,
  ) => Promise<TQueryContractsByCreatorResponseStrict>

  /**
   * @function allReports
   * @param {DQueryAllReports} [request]
   * @returns Promise<TQueryAllReportsResponseStrict>
   */
  readonly pinnedCodes: (
    request: DQueryPinnedCodesRequest,
  ) => Promise<TQueryPinnedCodesResponseStrict>

  /**
   * @function allStoragePaymentInfo
   * @param {DQueryAllStoragePaymentInfo} [request]
   * @returns Promise<TQueryAllStoragePaymentInfoResponseStrict>
   */
  readonly rawContractState: (
    request: DQueryRawContractStateRequest,
  ) => Promise<TQueryRawContractStateResponseStrict>

  /**
   * @function attestation
   * @param {DQueryAttestation} request
   * @returns Promise<TQueryAttestationResponseStrict>
   */
  readonly smartContractState: (
    request: DQuerySmartContractStateRequest,
  ) => Promise<TQuerySmartContractStateResponseStrict>

  /**
   * @function clientFreeSpace
   * @param {DQueryClientFreeSpace} request
   * @returns Promise<TQueryClientFreeSpaceResponseStrict>
   */
  readonly params: (
    request?: DQueryParamsRequest,
  ) => Promise<DQueryParamsRequest>
}
