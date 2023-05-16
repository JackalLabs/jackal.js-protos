import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryAllNotiCounterRequest,
  QueryAllNotiCounterResponse,
  QueryAllNotificationsByAddressRequest,
  QueryAllNotificationsByAddressResponse,
  QueryAllNotificationsRequest,
  QueryAllNotificationsResponse,
  QueryGetNotiCounterRequest,
  QueryGetNotiCounterResponse,
  QueryGetNotificationsRequest,
  QueryGetNotificationsResponse,
  QueryParamsRequest,
  QueryParamsResponse
} from '@/postgen/canine_chain/notifications/query'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export interface IQueryNotifications {
  /** Parameters queries the parameters of the module. */
  queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>>
  /** Queries a Notifications by index. */
  queryNotifications(
    request: DeepPartial<QueryGetNotificationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryGetNotificationsResponse>>
  /** Queries a list of Notifications items. */
  queryNotificationsAll(
    request: DeepPartial<QueryAllNotificationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllNotificationsResponse>>
  /** Queries a list of Notifications items by address. */
  queryNotificationsByAddress(
    request: DeepPartial<QueryAllNotificationsByAddressRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllNotificationsByAddressResponse>>
  /** Queries a NotiCounter by index. */
  queryNotiCounter(
    request: DeepPartial<QueryGetNotiCounterRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryGetNotiCounterResponse>>
  /** Queries a list of NotiCounter items. */
  queryNotiCounterAll(
    request: DeepPartial<QueryAllNotiCounterRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllNotiCounterResponse>>
}
