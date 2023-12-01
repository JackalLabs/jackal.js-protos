import type {
  MsgAddClaimer,
  MsgAttest,
  MsgBuyStorage,
  MsgDeleteFile,
  MsgInitProvider,
  MsgPostFile,
  MsgPostProof,
  MsgRemoveClaimer,
  MsgReport,
  MsgRequestAttestationForm,
  MsgRequestReportForm,
  MsgSetProviderIP,
  MsgSetProviderKeybase,
  MsgSetProviderTotalSpace,
  MsgShutdownProvider
} from '@/postGen/canine_chain/storage/tx'

/**
 * MsgStoragePostFile Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {number} fileSize - Size of file in bytes.
 * @prop {number} proofInterval - Length of Proof interval in blocks.
 * @prop {number} proofType - Always 0, future proofing.
 * @prop {number} maxProofs - Limit of number of allowed providers.
 * @prop {number} expires - Set custom block height when deals expires, use 0 for standard deals.
 * @prop {string} note - Stringified JSON object of arbitrary data.
 */
export type DMsgStoragePostFile = Documentation<{
  creator: string;
  merkle: Uint8Array;
  fileSize: number;
  proofInterval: number;
  proofType: number;
  maxProofs: number;
  expires: number;
  note: string;
}, MsgPostFile>

/**
 * MsgPostProof Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {Uint8Array} item - Byte data of proving chunk.
 * @prop {Uint8Array} hashList - Byte array of merkle hashes.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal address of file owner.
 * @prop {number} start - Block height when file was stored.
 * @prop {number} toProve - Index of file chunk to prove.
 */
export type DMsgPostProof = Documentation<{
  creator: string;
  item: Uint8Array;
  hashList: Uint8Array;
  merkle: Uint8Array;
  owner: string;
  start: number;
  toProve: number;
}, MsgPostProof>

/**
 * MsgStorageDeleteFile Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {number} start - Block height when file was stored.
 */
export type DMsgStorageDeleteFile = Documentation<{
  creator: string;
  merkle: Uint8Array;
  start: number;
}, MsgDeleteFile>

/**
 * MsgSetProviderIP Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} ip - Publicly accessible url.
 */
export type DMsgSetProviderIP = Documentation<{
  creator: string;
  ip: string;
}, MsgSetProviderIP>

/**
 * MsgAddEditors Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} keybase - Keybase identifier.
 */
export type DMsgSetProviderKeybase = Documentation<{
  creator: string;
  keybase: string;
}, MsgSetProviderKeybase>

/**
 * MsgSetProviderTotalSpace Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {number} space - Total space offered by provider in bytes.
 */
export type DMsgSetProviderTotalSpace = Documentation<{
  creator: string;
  space: number;
}, MsgSetProviderTotalSpace>

/**
 * MsgAddClaimer Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} claimAddress - Jackal address of claimer.
 */
export type DMsgAddClaimer = Documentation<{
  creator: string;
  claimAddress: string;
}, MsgAddClaimer>

/**
 * MsgRemoveClaimer Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} claimAddress - Jackal address of claimer.
 */
export type DMsgRemoveClaimer = Documentation<{
  creator: string;
  claimAddress: string;
}, MsgRemoveClaimer>

/**
 * MsgInitProvider Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} ip - Publicly accessible url.
 * @prop {string} keybase - Keybase identifier.
 * @prop {number} totalSpace - Total space offered by provider in bytes.
 */
export type DMsgInitProvider = Documentation<{
  creator: string;
  ip: string;
  keybase: string;
  totalSpace: number;
}, MsgInitProvider>

/**
 * MsgShutdownProvider Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 */
export type DMsgShutdownProvider = Documentation<{
  creator: string;
}, MsgShutdownProvider>

/**
 * MsgBuyStorage Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} forAddress - Jackal address to receive storage plan purchase.
 * @prop {number} durationDays - Total number of days for plan.
 * @prop {number} bytes - Total storage space to purchase in bytes.
 * @prop {string} paymentDenom - desc.
 */
export type DMsgBuyStorage = Documentation<{
  creator: string;
  forAddress: string;
  durationDays: number;
  bytes: number;
  paymentDenom: string;
}, MsgBuyStorage>

/**
 * MsgRequestAttestationForm Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal address of file owner.
 * @prop {number} start - Block height when file was stored.
 */
export type DMsgRequestAttestationForm = Documentation<{
  creator: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, MsgRequestAttestationForm>

/**
 * MsgAttest Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} prover - Jackal address of proving provider.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal address of file owner.
 * @prop {number} start - Block height when file was stored.
 */
export type DMsgAttest = Documentation<{
  creator: string;
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, MsgAttest>

/**
 * MsgRequestReportForm Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} prover - Jackal address of reporting provider.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal address of file owner.
 * @prop {number} start - Block height when file was stored.
 */
export type DMsgRequestReportForm = Documentation<{
  creator: string;
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, MsgRequestReportForm>

/**
 * MsgReport Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} prover - Jackal address of reporting provider.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal address of file owner.
 * @prop {number} start - Block height when file was stored.
 */
export type DMsgReport = Documentation<{
  creator: string;
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, MsgReport>
