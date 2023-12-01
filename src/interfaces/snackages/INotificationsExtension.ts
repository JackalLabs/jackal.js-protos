import type {
  DQueryAllNotifications,
  DQueryAllNotificationsByAddress,
  DQueryNotification,
  DQueryNotificationsParams,
  TQueryAllNotificationsByAddressResponseStrict,
  TQueryAllNotificationsResponseStrict,
  TQueryNotificationResponseStrict,
  TQueryNotificationsParamsResponseStrict
} from '@/types/queries'

/**
 * @interface INotificationsExtension
 * @property {INotificationsExtensionMembers} notifications
 */
export interface INotificationsExtension {
  readonly notifications: INotificationsExtensionMembers
}

/**
 * All functions for querying data from the Oracle module.
 *
 * @interface INotificationsExtensionMembers
 * @property {allNotifications} allNotifications()
 * @property {allNotificationsByAddress} allNotificationsByAddress()
 * @property {notification} notification()
 * @property {params} params()
 */
export interface INotificationsExtensionMembers {

  /**
   * @function allNotifications
   * @param {DQueryAllNotifications} request
   * @returns Promise<TQueryAllNotificationsResponseStrict>
   */
  readonly allNotifications: (request: DQueryAllNotifications) => Promise<TQueryAllNotificationsResponseStrict>

  /**
   * @function allNotificationsByAddress
   * @param {DQueryAllNotificationsByAddress} request
   * @returns Promise<TQueryAllNotificationsByAddressResponseStrict>
   */
  readonly allNotificationsByAddress: (request: DQueryAllNotificationsByAddress) => Promise<TQueryAllNotificationsByAddressResponseStrict>

  /**
   * @function notification
   * @param {DQueryNotification} request
   * @returns Promise<TQueryNotificationResponseStrict>
   */
  readonly notification: (request: DQueryNotification) => Promise<TQueryNotificationResponseStrict>

  /**
   * @function params
   * @param {DQueryNotificationsParams} request
   * @returns Promise<TQueryNotificationsParamsResponseStrict>
   */
  readonly params: (request: DQueryNotificationsParams) => Promise<TQueryNotificationsParamsResponseStrict>
}
