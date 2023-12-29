import type { PageRequest } from '@/postGen/cosmos/base/query/v1beta1/pagination'
import type {
  QueryActiveProviders,
  QueryAllAttestations,
  QueryAllFiles,
  QueryAllFilesByMerkle,
  QueryAllFilesByOwner,
  QueryAllProofs,
  QueryAllProviders,
  QueryAllReports,
  QueryAllStoragePaymentInfo,
  QueryAttestation,
  QueryClientFreeSpace,
  QueryFile,
  QueryFileUploadCheck,
  QueryFindFile,
  QueryFreeSpace,
  QueryOpenFiles,
  QueryParams,
  QueryPayData,
  QueryPriceCheck,
  QueryProof,
  QueryProofsByAddress,
  QueryProvider,
  QueryReport,
  QueryStoragePaymentInfo,
  QueryStorageStats,
  QueryStoreCount,
} from '@/postGen/canine_chain/storage/query'

/**
 * QueryAllProofs Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllProofs = Documentation<
  {
    pagination: PageRequest | undefined
  },
  QueryAllProofs
>

/**
 * QueryStorageAllFiles Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryStorageAllFiles = Documentation<
  {
    pagination: PageRequest | undefined
  },
  QueryAllFiles
>

/**
 * QueryStorageAllFiles Documentation
 * @prop {Uint8Array} merkle - Merkle root of target file.
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryStorageAllFilesByMerkle = Documentation<
  {
    merkle: Uint8Array
    pagination: PageRequest | undefined
  },
  QueryAllFilesByMerkle
>

/**
 * QueryStorageAllFiles Documentation
 * @prop {string} owner - Jackal wallet address of file owner.
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryStorageAllFilesByOwner = Documentation<
  {
    owner: string
    pagination: PageRequest | undefined
  },
  QueryAllFilesByOwner
>

/**
 * QueryAllAttestations Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllAttestations = Documentation<
  {
    pagination: PageRequest | undefined
  },
  QueryAllAttestations
>

/**
 * QueryAllProviders Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllProviders = Documentation<
  {
    pagination: PageRequest | undefined
  },
  QueryAllProviders
>

/**
 * QueryAllReports Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllReports = Documentation<
  {
    pagination: PageRequest | undefined
  },
  QueryAllReports
>

/**
 * QueryAllStoragePaymentInfo Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllStoragePaymentInfo = Documentation<
  {
    pagination: PageRequest | undefined
  },
  QueryAllStoragePaymentInfo
>

/**
 * QueryOpenFiles Documentation
 * @prop {string} providerAddress - Jackal wallet address of provider.
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryOpenFiles = Documentation<
  {
    providerAddress: string
    pagination: PageRequest | undefined
  },
  QueryOpenFiles
>

/**
 * QueryProofsByAddress Documentation
 * @prop {string} providerAddress - Jackal wallet address of provider.
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryProofsByAddress = Documentation<
  {
    providerAddress: string
    pagination: PageRequest | undefined
  },
  QueryProofsByAddress
>

/**
 * QueryStorageFile Documentation
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal wallet address of file owner.
 * @prop {number} start - Block height when file was stored.
 */
export type DQueryStorageFile = Documentation<
  {
    merkle: Uint8Array
    owner: string
    start: number
  },
  QueryFile
>

/**
 * QueryProvider Documentation
 * @prop {string} address - Jackal wallet address of provider.
 */
export type DQueryProvider = Documentation<
  {
    address: string
  },
  QueryProvider
>

/**
 * QueryProof Documentation
 * @prop {string} providerAddress - Jackal wallet address of provider.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal wallet address of file owner.
 * @prop {number} start - Block height when file was stored.
 */
export type DQueryProof = Documentation<
  {
    providerAddress: string
    merkle: Uint8Array
    owner: string
    start: number
  },
  QueryProof
>

/**
 * QueryAttestation Documentation
 * @prop {string} prover - Jackal wallet address of provider proving file.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal wallet address of file owner.
 * @prop {number} start - Block height when file was stored.
 */
export type DQueryAttestation = Documentation<
  {
    prover: string
    merkle: Uint8Array
    owner: string
    start: number
  },
  QueryAttestation
>

/**
 * QueryReport Documentation
 * @prop {string} prover - Jackal wallet address of provider proving file.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal wallet address of file owner.
 * @prop {number} start - Block height when file was stored.
 */
export type DQueryReport = Documentation<
  {
    prover: string
    merkle: Uint8Array
    owner: string
    start: number
  },
  QueryReport
>

/**
 * QueryFreeSpace Documentation
 * @prop {string} address - Jackal wallet address of provider.
 */
export type DQueryFreeSpace = Documentation<
  {
    address: string
  },
  QueryFreeSpace
>

/**
 * QueryStoreCount Documentation
 * @prop {string} address - Jackal wallet address of provider.
 */
export type DQueryStoreCount = Documentation<
  {
    address: string
  },
  QueryStoreCount
>

/**
 * QueryFindFile Documentation
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 */
export type DQueryFindFile = Documentation<
  {
    merkle: Uint8Array
  },
  QueryFindFile
>

/**
 * QueryClientFreeSpace Documentation
 * @prop {string} address - Jackal wallet address of plan owner.
 */
export type DQueryClientFreeSpace = Documentation<
  {
    address: string
  },
  QueryClientFreeSpace
>

/**
 * QueryPayData Documentation
 * @prop {string} address - Jackal wallet address of plan owner.
 */
export type DQueryPayData = Documentation<
  {
    address: string
  },
  QueryPayData
>

/**
 * QueryStoragePaymentInfo Documentation
 * @prop {string} address - Jackal wallet address of plan owner.
 */
export type DQueryStoragePaymentInfo = Documentation<
  {
    address: string
  },
  QueryStoragePaymentInfo
>

/**
 * QueryFileUploadCheck Documentation
 * @prop {string} address - Jackal wallet address of provider.
 * @prop {number} bytes - Size to check for in bytes.
 */
export type DQueryFileUploadCheck = Documentation<
  {
    address: string
    bytes: number
  },
  QueryFileUploadCheck
>

/**
 * QueryPriceCheck Documentation
 * @prop {number} duration - Duration of plan to check in days.
 * @prop {number} bytes - Size of plan to check for in bytes.
 */
export type DQueryPriceCheck = Documentation<
  {
    duration: string
    bytes: number
  },
  QueryPriceCheck
>

/**
 * QueryActiveProviders Documentation
 *
 * No parameters.
 */
export type DQueryActiveProviders = Documentation<{}, QueryActiveProviders>

/**
 * QueryStorageStats Documentation
 *
 * No parameters.
 */
export type DQueryStorageStats = Documentation<{}, QueryStorageStats>

/**
 * QueryStorageParams Documentation
 *
 * No parameters.
 */
export type DQueryStorageParams = Documentation<{}, QueryParams>
