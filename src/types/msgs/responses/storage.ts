import {
  MsgAddClaimerResponse,
  MsgAttestResponse,
  MsgBuyStorageResponse,
  MsgDeleteFileResponse,
  MsgInitProviderResponse,
  MsgPostFileResponse,
  MsgPostProofResponse,
  MsgRemoveClaimerResponse,
  MsgReportResponse,
  MsgRequestAttestationFormResponse,
  MsgRequestReportFormResponse,
  MsgSetProviderIPResponse,
  MsgSetProviderKeybaseResponse,
  MsgSetProviderTotalSpaceResponse,
  MsgShutdownProviderResponse
} from '@/postGen/canine_chain/storage/tx'

/**
 * MsgStoragePostFileResponse Documentation
 * @prop {string[]} providerIps - List of providers that are assigned to initially store the file.
 * @prop {number} startBlock - Block storage deal was created.
 */
export type DMsgStoragePostFileResponse = Documentation<
  {
    providerIps: string[]
    startBlock: number
  },
  MsgPostFileResponse
>

/**
 * MsgPostProofResponse Documentation
 * @prop {boolean} success - True if proof was accepted.
 * @prop {string} errorMessage - Blank if proof was accepted.
 */
export type DMsgPostProofResponse = Documentation<
  {
    success: boolean
    errorMessage: string
  },
  MsgPostProofResponse
>

/**
 * MsgStorageDeleteFileResponse Documentation
 */
export type DMsgStorageDeleteFileResponse = Documentation<
  {},
  MsgDeleteFileResponse
>

/**
 * MsgSetProviderIPResponse Documentation
 */
export type DMsgSetProviderIPResponse = Documentation<
  {},
  MsgSetProviderIPResponse
>

/**
 * MsgSetProviderKeybaseResponse Documentation
 */
export type DMsgSetProviderKeybaseResponse = Documentation<
  {},
  MsgSetProviderKeybaseResponse
>

/**
 * MsgSetProviderTotalSpaceResponse Documentation
 */
export type DMsgSetProviderTotalSpaceResponse = Documentation<
  {},
  MsgSetProviderTotalSpaceResponse
>

/**
 * MsgAddClaimerResponse Documentation
 */
export type DMsgAddClaimerResponse = Documentation<{}, MsgAddClaimerResponse>

/**
 * MsgRemoveClaimerResponse Documentation
 */
export type DMsgRemoveClaimerResponse = Documentation<
  {},
  MsgRemoveClaimerResponse
>

/**
 * MsgInitProviderResponse Documentation
 */
export type DMsgInitProviderResponse = Documentation<
  {},
  MsgInitProviderResponse
>

/**
 * MsgShutdownProviderResponse Documentation
 */
export type DMsgShutdownProviderResponse = Documentation<
  {},
  MsgShutdownProviderResponse
>

/**
 * MsgBuyStorageResponse Documentation
 */
export type DMsgBuyStorageResponse = Documentation<{}, MsgBuyStorageResponse>

/**
 * MsgRequestAttestationFormResponse Documentation
 * @prop {string[]} providers - List of providers that are assigned to verify proof.
 * @prop {boolean} success - True if proof was accepted.
 * @prop {string} error - Blank if proof was accepted.
 */
export type DMsgRequestAttestationFormResponse = Documentation<
  {
    providers: string[]
    success: boolean
    error: string
  },
  MsgRequestAttestationFormResponse
>

/**
 * MsgAttestResponse Documentation
 */
export type DMsgAttestResponse = Documentation<{}, MsgAttestResponse>

/**
 * MsgRequestReportFormResponse Documentation
 * @prop {string[]} providers - List of providers that are assigned to verify proof.
 * @prop {boolean} success - True if proof was accepted.
 * @prop {string} error - Blank if proof was accepted.
 */
export type DMsgRequestReportFormResponse = Documentation<
  {
    providers: string[]
    success: boolean
    error: string
  },
  MsgRequestReportFormResponse
>

/**
 * MsgReportResponse Documentation
 */
export type DMsgReportResponse = Documentation<{}, MsgReportResponse>
