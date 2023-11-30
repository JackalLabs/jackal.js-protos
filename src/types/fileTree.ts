import type { Files } from '@/postgen/canine_chain/filetree/files'
import type { Pubkey } from '@/postgen/canine_chain/filetree/pubkey'

/**
 * File Documentation
 * @prop {string} address - Merkle path of file.
 * @prop {string} contents - JSON stringify of arbitrary data.
 * @prop {string} owner - Hashed Jackal address of file owner.
 * @prop {string} viewingAccess - Stringified JSON object of hashed viewers and their decryption keys.
 * @prop {string} editAccess - Stringified JSON object of hashed editors and their decryption keys.
 * @prop {string} trackingNumber - UUID v4.
 */
export type DFile = Documentation<{
  address: string;
  contents: string;
  owner: string;
  viewingAccess: string;
  editAccess: string;
  trackingNumber: string;
}, Files>

/**
 * Pubkey Documentation
 * @prop {string} address - Jackal address of wallet for public key.
 * @prop {string} key - Hex string of public key.
 */
export type DPubkey = Documentation<{
  address: string;
  key: string;
}, Pubkey>
