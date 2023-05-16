import { IQueryNotifications } from '@/interfaces/classes/IQueryNotifications'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryAllNotiCounterRequest,
  QueryAllNotiCounterResponse,
  QueryAllNotificationsByAddressRequest,
  QueryAllNotificationsByAddressResponse,
  QueryAllNotificationsRequest,
  QueryAllNotificationsResponse,
  QueryClientImpl,
  QueryGetNotiCounterRequest,
  QueryGetNotiCounterResponse,
  QueryGetNotificationsRequest,
  QueryGetNotificationsResponse,
  QueryParamsRequest,
  QueryParamsResponse
} from '@/postgen/canine_chain/notifications/query'
import { grpc } from '@improbable-eng/grpc-web'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryNotifications implements IQueryNotifications {
  private readonly queryClient: Query

  constructor(rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
  async queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>> {
    return await this.queryClient
      .Params(request, metadata)
      .then((resp: QueryParamsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Notifications] queryParams: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            params: {}
          }
        }
      })
  }

  async queryNotifications(
    request: DeepPartial<QueryGetNotificationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryGetNotificationsResponse>> {
    return await this.queryClient
      .Notifications(request, metadata)
      .then((resp: QueryGetNotificationsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Notifications] queryNotifications: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            notifications: {
              count: 0,
              notification: '',
              address: '',
              sender: ''
            }
          }
        }
      })
  }

  /** Queries a list of Notifications items. */
  async queryNotificationsAll(
    request: DeepPartial<QueryAllNotificationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllNotificationsResponse>> {
    return await this.queryClient
      .NotificationsAll(request, metadata)
      .then((resp: QueryAllNotificationsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Notifications] queryNotificationsAll: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            notifications: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries a list of Notifications items by address. */
  async queryNotificationsByAddress(
    request: DeepPartial<QueryAllNotificationsByAddressRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllNotificationsByAddressResponse>> {
    return await this.queryClient
      .NotificationsByAddress(request, metadata)
      .then((resp: QueryAllNotificationsByAddressResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Notifications] queryNotificationsByAddress: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            notifications: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Queries a NotiCounter by index. */
  async queryNotiCounter(
    request: DeepPartial<QueryGetNotiCounterRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryGetNotiCounterResponse>> {
    return await this.queryClient
      .NotiCounter(request, metadata)
      .then((resp: QueryGetNotiCounterResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Notifications] queryNotiCounter: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            notiCounter: {
              address: '',
              counter: 0,
              blockedSenders: ''
            }
          }
        }
      })
  }

  /** Queries a list of NotiCounter items. */
  async queryNotiCounterAll(
    request: DeepPartial<QueryAllNotiCounterRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllNotiCounterResponse>> {
    return await this.queryClient
      .NotiCounterAll(request, metadata)
      .then((resp: QueryAllNotiCounterResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Notifications] queryEncrypt: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            notiCounter: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }
}
