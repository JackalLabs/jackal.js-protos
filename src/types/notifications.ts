import type { Block, Notification } from '@/postGen/canine_chain/notifications/notification'

/**
 * Notification Documentation
 *
 * @prop {string} to - Jackal wallet address which received the notification.
 * @prop {string} from - Jackal wallet address which sent the notification.
 * @prop {number} time - Unix timestamp of notification in microseconds.
 * @prop {string} contents - Stringified JSON object of arbitrary data.
 * @prop {string} privateContents - Arbitrary byte array, intended to be encrypted compressed JSON stringified data.
 */
export type DNotification = Documentation<
  {
    to: string
    from: string
    time: number
    contents: string
    privateContents: Uint8Array
  },
  Notification
>

/**
 * Block Documentation
 *
 * @prop {string} address - Jackal wallet address which created the block.
 * @prop {string} blockedAddress - Jackal wallet address which was blocked.
 */
export type DBlock = Documentation<
  {
    address: string
    blockedAddress: string
  },
  Block
>

export { Notification, Block }
