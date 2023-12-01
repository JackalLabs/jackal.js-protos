import type {
  MsgAddEditors,
  MsgAddViewers,
  MsgChangeOwner,
  MsgDeleteFile,
  MsgPostFile,
  MsgPostKey,
  MsgProvisionFileTree,
  MsgRemoveEditors,
  MsgRemoveViewers,
  MsgResetEditors,
  MsgResetViewers
} from '@/postGen/canine_chain/filetree/tx'

/**
 * MsgAddEditors Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} editorIds - Stringified JSON object of hashed editor ids.
 * @prop {string} editorKeys - Stringified JSON object of hashed editor decryption keys.
 * @prop {string} address - Merkle path of file.
 * @prop {string} fileOwner - Hashed Jackal address of file owner.
 */
export type DMsgAddEditors = Documentation<{
  creator: string;
  editorIds: string;
  editorKeys: string;
  address: string;
  fileOwner: string;
}, MsgAddEditors>

/**
 * MsgAddViewers Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} viewerIds - Stringified JSON object of hashed viewer ids.
 * @prop {string} viewerKeys - Stringified JSON object of hashed viewer decryption keys.
 * @prop {string} address - Merkle path of file.
 * @prop {string} fileOwner - Hashed Jackal address of file owner.
 */
export type DMsgAddViewers = Documentation<{
  creator: string;
  viewerIds: string;
  viewerKeys: string;
  address: string;
  fileOwner: string;
}, MsgAddViewers>

/**
 * MsgChangeOwner Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} address - Merkle path of file.
 * @prop {string} fileOwner - Hashed Jackal address of current file owner.
 * @prop {string} newOwner - Hashed Jackal address of new file owner.
 */
export type DMsgChangeOwner = Documentation<{
  creator: string;
  address: string;
  fileOwner: string;
  newOwner: string;
}, MsgChangeOwner>

/**
 * MsgFileTreeDeleteFile Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} hashPath - Merkle path of file.
 * @prop {string} account - Hashed Jackal address of file owner.
 */
export type DMsgFileTreeDeleteFile = Documentation<{
  creator: string;
  hashPath: string;
  account: string;
}, MsgDeleteFile>

/**
 * MsgFileTreePostFile Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} account - Hashed Jackal address of file owner.
 * @prop {string} hashParent - Merkle path of file parent.
 * @prop {string} hashChild - Hashed file name.
 * @prop {string} contents - Stringified JSON object of arbitrary data.
 * @prop {string} viewers - Stringified JSON object of hashed editors and their decryption keys.
 * @prop {string} editors - Stringified JSON object of hashed viewers and their decryption keys.
 * @prop {string} trackingNumber - UUID v4.
 */
export type DMsgFileTreePostFile = Documentation<{
  creator: string;
  account: string;
  hashParent: string;
  hashChild: string;
  contents: string;
  viewers: string;
  editors: string;
  trackingNumber: string;
}, MsgPostFile>

/**
 * MsgPostKey Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} key - User's public key.
 */
export type DMsgPostKey = Documentation<{
  creator: string;
  key: string;
}, MsgPostKey>

/**
 * MsgProvisionFileTree Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} editors - Stringified JSON object of hashed editors and their decryption keys.
 * @prop {string} viewers - Stringified JSON object of hashed viewers and their decryption keys.
 * @prop {string} trackingNumber - UUID v4.
 */
export type DMsgProvisionFileTree = Documentation<{
  creator: string;
  editors: string;
  viewers: string;
  trackingNumber: string;
}, MsgProvisionFileTree>

/**
 * MsgRemoveEditors Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} editorIds - Stringified JSON object of hashed editors.
 * @prop {string} address - Merkle path of file.
 * @prop {string} fileOwner - Hashed Jackal address of file owner.
 */
export type DMsgRemoveEditors = Documentation<{
  creator: string;
  editorIds: string;
  address: string;
  fileOwner: string;
}, MsgRemoveEditors>

/**
 * MsgRemoveViewers Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} viewerIds - Stringified JSON object of hashed viewers.
 * @prop {string} address - Merkle path of file.
 * @prop {string} fileOwner - Hashed Jackal address of file owner.
 */
export type DMsgRemoveViewers = Documentation<{
  creator: string;
  viewerIds: string;
  address: string;
  fileOwner: string;
}, MsgRemoveViewers>

/**
 * MsgResetEditors Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} address - Merkle path of file.
 * @prop {string} fileOwner - Hashed Jackal address of file owner.
 */
export type DMsgResetEditors = Documentation<{
  creator: string;
  address: string;
  fileOwner: string;
}, MsgResetEditors>

/**
 * MsgResetViewers Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} address - Merkle path of file.
 * @prop {string} fileOwner - Hashed Jackal address of file owner.
 */
export type DMsgResetViewers = Documentation<{
  creator: string;
  address: string;
  fileOwner: string;
}, MsgResetViewers>
