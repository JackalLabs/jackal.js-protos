import type { MsgBlockSenders, MsgCreateNotification, MsgDeleteNotification } from '@/postGen/canine_chain/notifications/tx'

/**
 * MsgCreateNotification Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} to - Jackal wallet address to receive the notification.
 * @prop {string} contents - Stringified JSON object of arbitrary data.
 * @prop {string} privateContents - Arbitrary byte array, intended to be encrypted compressed JSON stringified data.
 */
export type DMsgCreateNotification = Documentation<{
  /** who the notification is from */
  creator: string;
  /** address receiving the notification */
  to: string;
  /** must be valid json */
  contents: string;
  /** private contents can be any byte array (meant to be encrypted data) */
  privateContents: Uint8Array;
}, MsgCreateNotification>

/**
 * MsgDeleteNotification Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} from - Jackal wallet address which received the notification.
 * @prop {number} time - Unix timestamp of notification in microseconds.
 */
export type DMsgDeleteNotification = Documentation<{
  creator: string;
  from: string;
  time: number;
}, MsgDeleteNotification>

/**
 * MsgBlockSenders Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string[]} toBlock - Array of Jackal wallet addresses to block from sending notifications to creator.
 */
export type DMsgBlockSenders = Documentation<{
  creator: string;
  toBlock: string[];
}, MsgBlockSenders>
