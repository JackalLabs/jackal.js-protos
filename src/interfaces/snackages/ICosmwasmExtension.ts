import {
  DQueryAllContractStateRequest,
  DQueryCodeRequest,
  DQueryCodesRequest,
  DQueryContractHistoryRequest,
  DQueryContractInfoRequest,
  DQueryContractsByCodeRequest,
  DQueryContractsByCreatorRequest,
  DQueryParamsRequest,
  DQueryPinnedCodesRequest,
  DQueryRawContractStateRequest,
  DQuerySmartContractStateRequest
} from '@/types/queries'
import type {
  TQueryAllContractStateResponseStrict,
  TQueryCodeResponse,
  TQueryCodesResponseStrict,
  TQueryContractHistoryResponseStrict,
  TQueryContractInfoResponse,
  TQueryContractsByCodeResponseStrict,
  TQueryContractsByCreatorResponseStrict,
  TQueryPinnedCodesResponseStrict,
  TQueryRawContractStateResponseStrict,
  TQuerySmartContractStateResponseStrict
} from '@/types/queries/responses'

/**
 * @interface ICosmwasmExtension
 * @property {ICosmwasmExtensionMembers} cosmwasm
 */
export interface ICosmwasmExtension
  extends Record<string, ICosmwasmExtensionMembers> {
  readonly cosmwasm: ICosmwasmExtensionMembers
}

/**
 * All functions for the Cosmwasm module.
 * @interface ICosmwasmExtensionMembers
 * @property {allContractState} allContractState()
 * @property {code} code()
 * @property {codes} codes()
 * @property {contractHistory} contractHistory()
 * @property {contractInfo} contractInfo()
 * @property {contractsByCode} contractsByCode()
 * @property {contractsByCreator} contractsByCreator()
 * @property {pinnedCodes} pinnedCodes()
 * @property {rawContractState} rawContractState()
 * @property {smartContractState} smartContractState()
 * @property {params} params()
 *
 */
export interface ICosmwasmExtensionMembers
  extends Record<string, (request?: any) => Promise<any>> {
  /**
   * @function allContractState
   * @param {DQueryAllContractStateRequest} request
   * @returns Promise<TQueryAllContractStateResponseStrict>
   */

  readonly allContractState: (
    request: DQueryAllContractStateRequest
  ) => Promise<TQueryAllContractStateResponseStrict>

  /**
   * @function code
   * @param {DQueryCodeRequest} request
   * @returns Promise<TQueryCodeResponse>
   */
  readonly code: (
    request: DQueryCodeRequest
  ) => Promise<TQueryCodeResponse>

  /**
   * @function codes
   * @param {DQueryCodesRequest} request
   * @returns Promise<TQueryCodesResponseStrict>
   */
  readonly codes: (
    request: DQueryCodesRequest
  ) => Promise<TQueryCodesResponseStrict>

  /**
   * @function contractHistory
   * @param {DQueryContractHistoryRequest} request
   * @returns Promise<TQueryContractHistoryResponseStrict>
   */
  readonly contractHistory: (
    request: DQueryContractHistoryRequest
  ) => Promise<TQueryContractHistoryResponseStrict>

  /**
   * @function contractInfo
   * @param {DQueryContractInfoRequest} request
   * @returns Promise<TQueryContractInfoResponse>
   */
  readonly contractInfo: (
    request: DQueryContractInfoRequest
  ) => Promise<TQueryContractInfoResponse>

  /**
   * @function contractsByCode
   * @param {DQueryContractsByCodeRequest} request
   * @returns Promise<TQueryContractsByCodeResponseStrict>
   */
  readonly contractsByCode: (
    request: DQueryContractsByCodeRequest
  ) => Promise<TQueryContractsByCodeResponseStrict>

  /**
   * @function contractsByCreator
   * @param {DQueryContractsByCreatorRequest} request
   * @returns Promise<TQueryContractsByCreatorResponseStrict>
   */
  readonly contractsByCreator: (
    request: DQueryContractsByCreatorRequest
  ) => Promise<TQueryContractsByCreatorResponseStrict>

  /**
   * @function pinnedCodes
   * @param {DQueryPinnedCodesRequest} request
   * @returns Promise<TQueryPinnedCodesResponseStrict>
   */
  readonly pinnedCodes: (
    request: DQueryPinnedCodesRequest
  ) => Promise<TQueryPinnedCodesResponseStrict>

  /**
   * @function rawContractState
   * @param {DQueryRawContractStateRequest} request
   * @returns Promise<TQueryRawContractStateResponseStrict>
   */
  readonly rawContractState: (
    request: DQueryRawContractStateRequest
  ) => Promise<TQueryRawContractStateResponseStrict>

  /**
   * @function smartContractState
   * @param {DQuerySmartContractStateRequest} request
   * @returns Promise<TQuerySmartContractStateResponseStrict>
   */
  readonly smartContractState: (
    request: DQuerySmartContractStateRequest
  ) => Promise<TQuerySmartContractStateResponseStrict>

  /**
   * @function params
   * @param {DQueryParamsRequest} [request]
   * @returns Promise<DQueryParamsRequest>
   */
  readonly params: (
    request?: DQueryParamsRequest
  ) => Promise<DQueryParamsRequest>
}
