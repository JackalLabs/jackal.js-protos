import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate'
import { assertDefined } from '@cosmjs/utils'
import { QueryClientImpl } from '@/postGen/canine_chain/notifications/query'
import { warnError } from '@/utils/misc'
import type { INotificationsExtension } from '@/interfaces/snackages'
import type {
  DQueryAllNotifications,
  DQueryAllNotificationsByAddress,
  DQueryNotification,
  DQueryNotificationsParams
} from '@/types/queries'
import type {
  TQueryAllNotificationsByAddressResponseStrict,
  TQueryAllNotificationsResponseStrict,
  TQueryNotificationResponseStrict,
  TQueryNotificationsParamsResponseStrict
} from '@/types/queries/responses'

export function createNotificationsExtension(base: QueryClient): INotificationsExtension {
  const rpc = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpc)

  return {
    notifications: {
      allNotifications: async (request: DQueryAllNotifications): Promise<TQueryAllNotificationsResponseStrict> => {
        const resp = await queryService
          .AllNotifications(request)
          .catch((err) => {
            warnError('[Notifications] allNotifications', err)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllNotificationsResponseStrict
      },
      allNotificationsByAddress: async (request: DQueryAllNotificationsByAddress): Promise<TQueryAllNotificationsByAddressResponseStrict> => {
        const resp = await queryService
          .AllNotificationsByAddress(request)
          .catch((err) => {
            warnError('[Notifications] allNotificationsByAddress', err)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllNotificationsByAddressResponseStrict
      },
      notification: async (request: DQueryNotification): Promise<TQueryNotificationResponseStrict> => {
        const resp = await queryService
          .Notification(request)
          .catch((err) => {
            warnError('[Notifications] notification', err)
            throw err
          })
        assertDefined(resp.notification)
        return resp as TQueryNotificationResponseStrict
      },
      params: async (request: DQueryNotificationsParams): Promise<TQueryNotificationsParamsResponseStrict> => {
        const resp = await queryService
          .Params(request)
          .catch((err) => {
            warnError('[Notifications] params', err)
            throw err
          })
        assertDefined(resp.params)
        return resp as TQueryNotificationsParamsResponseStrict
      }
    }
  }
}
