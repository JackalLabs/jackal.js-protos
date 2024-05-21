import type { PageResponse } from '@/postGen/cosmos/base/query/v1beta1/pagination'
import {
  CodeInfoResponse,
  QueryAllContractStateResponse, QueryCodeResponse,
  QueryCodesResponse,
  QueryContractHistoryResponse,
  QueryContractInfoResponse,
  QueryContractsByCodeResponse,
  QueryContractsByCreatorResponse,
  QueryPinnedCodesResponse,
  QueryRawContractStateResponse, QuerySmartContractStateResponse,
} from '@/postGen/cosmwasm/wasm/v1/query'
import { AccessConfig, AccessType, ContractInfo } from '@/postGen/cosmwasm/wasm/v1/types'

/**
 * This is the response for the [Storage] QueryContractHistoryResponse RPC method.
 *
 * @prop {DFileProof[]} proofs - Array of FileProof items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryContractHistoryResponseStrict = ModifyDeep<
  QueryContractHistoryResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] QueryContractsByCodeResponse RPC method.
 *
 * @prop {DFileProof[]} proofs - Array of FileProof items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryContractsByCodeResponseStrict = ModifyDeep<
  QueryContractsByCodeResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] QueryAllContractStateResponse RPC method.
 *
 * @prop {DUnifiedFile[]} files - Array of UnifiedFile items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllContractStateResponseStrict = ModifyDeep<
  QueryAllContractStateResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] QueryCodesResponse RPC method.
 *
 * @prop {DUnifiedFile[]} files - Array of UnifiedFile items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryCodesResponseStrict = ModifyDeep<
  QueryCodesResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] QueryPinnedCodesResponse RPC method.
 *
 * @prop {DUnifiedFile[]} files - Array of UnifiedFile items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryPinnedCodesResponseStrict = ModifyDeep<
  QueryPinnedCodesResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] QueryContractsByCreatorResponse RPC method.
 *
 * @prop {DProvider[]} providers - Array of Provider items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryContractsByCreatorResponseStrict = ModifyDeep<
  QueryContractsByCreatorResponse,
  { pagination: PageResponse }
>

/**
 * This is the response for the [Storage] Query/StorageStats RPC method.
 *
 * @prop {number} purchased - Total storage purchased in bytes.
 * @prop {number} used - Total storage used in bytes.
 * @prop {Uint8Array} usedRatio - Ratio of used<>purchased.
 * @prop {number} activeUsers - Total number of active storage plans.
 * @prop {DUsersByPlanMap} usersByPlan - Map of number of users indexed by total plan storage.
 */
export type TQueryContractInfoResponse = ModifyDeep<
  QueryContractInfoResponse,
  {
    address: string
    contractInfo: ContractInfo | undefined
  }
>

/**
 * This is the response for the [Storage] QueryRawContractStateResponse RPC method.
 *
 * @prop {DActiveProvider} providers - Array of active providers.
 */
export type TQueryRawContractStateResponseStrict = ModifyDeep<
  QueryRawContractStateResponse,
  { data: Uint8Array }
>

/**
 * This is the response for the [Storage] QuerySmartContractStateResponse RPC method.
 *
 * @prop {number} price - Price of requested plan size and duration in ujkl.
 */
export type TQuerySmartContractStateResponseStrict = ModifyDeep<
  QuerySmartContractStateResponse,
  { data: Uint8Array }
>

/**
 * This is the response for the [Storage] CodeInfoResponse RPC method.
 *
 * @prop {boolean} valid - Result of upload attempt.
 */
export type TQueryCodeResponse = ModifyDeep<
  QueryCodeResponse,
  {
    codeInfo: CodeInfoResponse | undefined
    data: Uint8Array
  }
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
export type DCosmwasmParams = {
  codeUploadAccess: AccessConfig | undefined
  instantiateDefaultPermission: AccessType
}
