import type {
  QueryAllNotifications,
  QueryAllNotificationsByAddress,
  QueryNotification,
  QueryParams,
} from '@/postGen/canine_chain/notifications/query'
import type { PageRequest } from '@/postGen/cosmos/base/query/v1beta1/pagination'
import { WithOptional } from '@/types/misc'

/**
 * QueryAllNotifications Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllNotifications = Documentation<
  {
    pagination?: PageRequest
  },
  WithOptional<QueryAllNotifications, 'pagination'>
>

/**
 * QueryAllNotificationsByAddress Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 * @prop {string} to - Jackal wallet address.
 */
export type DQueryAllNotificationsByAddress = Documentation<
  {
    pagination?: PageRequest
    to: string
  },
  WithOptional<QueryAllNotificationsByAddress, 'pagination'>
>

/**
 * QueryNotification Documentation
 * @prop {string} to - Jackal wallet address which received the notification.
 * @prop {string} from - Jackal wallet address which sent the notification.
 * @prop {number} time - Unix timestamp of notification in microseconds.
 */
export type DQueryNotification = Documentation<
  {
    to: string
    from: string
    time: number
  },
  QueryNotification
>

/**
 * QueryNotificationsParams Documentation
 *
 * No parameters.
 */
export type DQueryNotificationsParams = Documentation<{}, QueryParams>
