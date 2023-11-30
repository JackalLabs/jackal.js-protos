import type {
  QueryAllNotificationsByAddressResponse,
  QueryAllNotificationsResponse,
  QueryNotificationResponse,
  QueryParamsResponse
} from '@/postgen/canine_chain/notifications/query'
import type { Params } from '@/postgen/canine_chain/notifications/params'
import type { PageResponse } from '@/postgen/cosmos/base/query/v1beta1/pagination'
import type { DNotification } from '@/types/notifications'

/**
 * This is the response for the [Notifications] Query/AllNotifications RPC method.
 *
 * @prop {DNotification[]} notifications - Array of Notification items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllNotificationsResponseStrict
  = ModifyDeep<QueryAllNotificationsResponse, { pagination: PageResponse }>

/**
 * This is the response for the [Notifications] Query/AllNotificationsByAddress RPC method.
 *
 * @prop {DNotification[]} notifications - Array of Notification items.
 * @prop {PageResponse} pagination - Pagination details.
 */
export type TQueryAllNotificationsByAddressResponseStrict
  = ModifyDeep<QueryAllNotificationsByAddressResponse, { pagination: PageResponse }>

/**
 * This is the response for the [Notifications] Query/Notification RPC method.
 *
 * @prop {DNotification} notification - Single Notification item.
 */
export type TQueryNotificationResponseStrict
  = ModifyDeep<QueryNotificationResponse, { notification: DNotification }>

/**
 * This is the response for the [Notifications] Query/Params RPC method.
 *
 * @prop {Params} params - Currently none.
 */
export type TQueryNotificationsParamsResponseStrict
  = ModifyDeep<QueryParamsResponse, { params: Params }>
