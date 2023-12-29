import type {
  FileProof,
  UnifiedFile,
} from '@/postGen/canine_chain/storage/active_deals'
import type {
  ActiveProviders,
  Attestation,
  AttestationForm,
  Providers,
  ReportForm,
} from '@/postGen/canine_chain/storage/providers'
import type { StoragePaymentInfo } from '@/postGen/canine_chain/storage/payment_info'
import type { DCoin } from '@/types/msgs'

/**
 * ActiveProvider Documentation
 * @prop {string} address - Jackal wallet address of provider.
 */
export type DActiveProvider = Documentation<
  {
    address: string
  },
  ActiveProviders
>

/**
 * Attestation Documentation
 * @prop {string} provider - Jackal wallet address of provider.
 * @prop {boolean} complete - True if complete.
 */
export type DAttestation = Documentation<
  {
    provider: string
    complete: boolean
  },
  Attestation
>

/**
 * AttestationForm Documentation
 * @prop {DAttestation[]} attestations - Array of Attestation items.
 * @prop {string} prover - Jackal wallet address of provider proving storage of the file.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal wallet address of file owner.
 * @prop {number} start - Block height when file was stored.
 */
export type DAttestationForm = Documentation<
  {
    attestations: DAttestation[]
    prover: string
    merkle: Uint8Array
    owner: string
    start: number
  },
  AttestationForm
>

/**
 * FileProof Documentation
 * @prop {string} prover - Jackal wallet address of provider proving storage of the file.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal wallet address of file owner.
 * @prop {number} start - Block height when file was stored.
 * @prop {number} lastProven - Block height of last proof.
 * @prop {number} chunkToProve - Index of file chunk to prove.
 */
export type DFileProof = Documentation<
  {
    prover: string
    merkle: Uint8Array
    owner: string
    start: number
    lastProven: number
    chunkToProve: number
  },
  FileProof
>

/**
 * Provider Documentation
 * @prop {string} address - Jackal wallet address of provider.
 * @prop {string} ip - Publicly accessible url.
 * @prop {string} totalspace - Total space offered by provider in bytes.
 * @prop {number} burnedContracts - Number of contracts burned in provider lifespan.
 * @prop {string} creator - Jackal wallet address of provider.
 * @prop {string} keybaseIdentity - Keybase identifier.
 * @prop {string[]} authClaimers - Little Hands count, default is none.
 */
export type DProvider = Documentation<
  {
    address: string
    ip: string
    totalspace: string
    burnedContracts: number
    creator: string
    keybaseIdentity: string
    authClaimers: string[]
  },
  Providers
>

/**
 * ReportForm Documentation
 * @prop {DAttestation[]} attestations - Array of Attestation items.
 * @prop {string} prover - Jackal wallet address of provider proving storage of the file.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal wallet address of file owner.
 * @prop {number} start - Block height when file was stored.
 */
export type DReportForm = Documentation<
  {
    attestations: DAttestation[]
    prover: string
    merkle: Uint8Array
    owner: string
    start: number
  },
  ReportForm
>

/**
 * StoragePaymentInfo Documentation
 * @prop {Date | undefined} start - Date storage plan was purchased.
 * @prop {Date | undefined} end - Date storage plan expires.
 * @prop {number} spaceAvailable - Total storage purchased in bytes.
 * @prop {number} spaceUsed - Total storage used in bytes.
 * @prop {string} address - Jackal wallet address of storage plan owner.
 * @prop {DCoin[]} coins - Record of all storage purchases made, used for reward distribution.
 */
export type DStoragePaymentInfo = Documentation<
  {
    start: Date | undefined
    end: Date | undefined
    spaceAvailable: number
    spaceUsed: number
    address: string
    coins: DCoin[]
  },
  StoragePaymentInfo
>

/**
 * UnifiedFile Documentation
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal wallet address of file owner.
 * @prop {number} start - Block height when file was stored.
 * @prop {string} expires - Block height when file deal expires, default is 0 as no expiration.
 * @prop {string} fileSize - Size of file in bytes.
 * @prop {string} proofInterval - Interval between proofs in blocks.
 * @prop {string} proofType - Always 0, future proofing.
 * @prop {string[]} proofs - Array of successful proofs.
 * @prop {string} maxProofs - Limit of number of allowed providers.
 * @prop {string} note - Stringified JSON object of arbitrary data.
 */
export type DUnifiedFile = Documentation<
  {
    merkle: Uint8Array
    owner: string
    start: number
    expires: number
    fileSize: number
    proofInterval: number
    proofType: number
    proofs: string[]
    maxProofs: number
    note: string
  },
  UnifiedFile
>
