/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Notification } from "./notification";
import { Params } from "./params";

export const protobufPackage = "canine_chain.notifications";

export interface QueryParams {
}

export interface QueryParamsResponse {
  params: Params | undefined;
}

export interface QueryNotification {
  to: string;
  from: string;
  /** unix timestamp in microseconds */
  time: number;
}

export interface QueryNotificationResponse {
  notification: Notification | undefined;
}

export interface QueryAllNotifications {
  pagination: PageRequest | undefined;
}

export interface QueryAllNotificationsResponse {
  notifications: Notification[];
  pagination: PageResponse | undefined;
}

export interface QueryAllNotificationsByAddress {
  pagination: PageRequest | undefined;
  to: string;
}

export interface QueryAllNotificationsByAddressResponse {
  notifications: Notification[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParams(): QueryParams {
  return {};
}

export const QueryParams = {
  encode(_: QueryParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParams {
    return {};
  },

  toJSON(_: QueryParams): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParams>, I>>(base?: I): QueryParams {
    return QueryParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParams>, I>>(_: I): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryNotification(): QueryNotification {
  return { to: "", from: "", time: 0 };
}

export const QueryNotification = {
  encode(message: QueryNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.to !== "") {
      writer.uint32(10).string(message.to);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.time !== 0) {
      writer.uint32(24).int64(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNotification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.to = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.from = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.time = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNotification {
    return {
      to: isSet(object.to) ? gt.String(object.to) : "",
      from: isSet(object.from) ? gt.String(object.from) : "",
      time: isSet(object.time) ? gt.Number(object.time) : 0,
    };
  },

  toJSON(message: QueryNotification): unknown {
    const obj: any = {};
    if (message.to !== "") {
      obj.to = message.to;
    }
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.time !== 0) {
      obj.time = Math.round(message.time);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryNotification>, I>>(base?: I): QueryNotification {
    return QueryNotification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryNotification>, I>>(object: I): QueryNotification {
    const message = createBaseQueryNotification();
    message.to = object.to ?? "";
    message.from = object.from ?? "";
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseQueryNotificationResponse(): QueryNotificationResponse {
  return { notification: undefined };
}

export const QueryNotificationResponse = {
  encode(message: QueryNotificationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notification !== undefined) {
      Notification.encode(message.notification, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNotificationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNotificationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notification = Notification.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNotificationResponse {
    return { notification: isSet(object.notification) ? Notification.fromJSON(object.notification) : undefined };
  },

  toJSON(message: QueryNotificationResponse): unknown {
    const obj: any = {};
    if (message.notification !== undefined) {
      obj.notification = Notification.toJSON(message.notification);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryNotificationResponse>, I>>(base?: I): QueryNotificationResponse {
    return QueryNotificationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryNotificationResponse>, I>>(object: I): QueryNotificationResponse {
    const message = createBaseQueryNotificationResponse();
    message.notification = (object.notification !== undefined && object.notification !== null)
      ? Notification.fromPartial(object.notification)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNotifications(): QueryAllNotifications {
  return { pagination: undefined };
}

export const QueryAllNotifications = {
  encode(message: QueryAllNotifications, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNotifications {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotifications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotifications {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllNotifications): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllNotifications>, I>>(base?: I): QueryAllNotifications {
    return QueryAllNotifications.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllNotifications>, I>>(object: I): QueryAllNotifications {
    const message = createBaseQueryAllNotifications();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNotificationsResponse(): QueryAllNotificationsResponse {
  return { notifications: [], pagination: undefined };
}

export const QueryAllNotificationsResponse = {
  encode(message: QueryAllNotificationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.notifications) {
      Notification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNotificationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotificationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notifications.push(Notification.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotificationsResponse {
    return {
      notifications: gt.Array.isArray(object?.notifications)
        ? object.notifications.map((e: any) => Notification.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllNotificationsResponse): unknown {
    const obj: any = {};
    if (message.notifications?.length) {
      obj.notifications = message.notifications.map((e) => Notification.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllNotificationsResponse>, I>>(base?: I): QueryAllNotificationsResponse {
    return QueryAllNotificationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllNotificationsResponse>, I>>(
    object: I,
  ): QueryAllNotificationsResponse {
    const message = createBaseQueryAllNotificationsResponse();
    message.notifications = object.notifications?.map((e) => Notification.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNotificationsByAddress(): QueryAllNotificationsByAddress {
  return { pagination: undefined, to: "" };
}

export const QueryAllNotificationsByAddress = {
  encode(message: QueryAllNotificationsByAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNotificationsByAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotificationsByAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.to = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotificationsByAddress {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      to: isSet(object.to) ? gt.String(object.to) : "",
    };
  },

  toJSON(message: QueryAllNotificationsByAddress): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.to !== "") {
      obj.to = message.to;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllNotificationsByAddress>, I>>(base?: I): QueryAllNotificationsByAddress {
    return QueryAllNotificationsByAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllNotificationsByAddress>, I>>(
    object: I,
  ): QueryAllNotificationsByAddress {
    const message = createBaseQueryAllNotificationsByAddress();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.to = object.to ?? "";
    return message;
  },
};

function createBaseQueryAllNotificationsByAddressResponse(): QueryAllNotificationsByAddressResponse {
  return { notifications: [], pagination: undefined };
}

export const QueryAllNotificationsByAddressResponse = {
  encode(message: QueryAllNotificationsByAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.notifications) {
      Notification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNotificationsByAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotificationsByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notifications.push(Notification.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotificationsByAddressResponse {
    return {
      notifications: gt.Array.isArray(object?.notifications)
        ? object.notifications.map((e: any) => Notification.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllNotificationsByAddressResponse): unknown {
    const obj: any = {};
    if (message.notifications?.length) {
      obj.notifications = message.notifications.map((e) => Notification.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllNotificationsByAddressResponse>, I>>(
    base?: I,
  ): QueryAllNotificationsByAddressResponse {
    return QueryAllNotificationsByAddressResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllNotificationsByAddressResponse>, I>>(
    object: I,
  ): QueryAllNotificationsByAddressResponse {
    const message = createBaseQueryAllNotificationsByAddressResponse();
    message.notifications = object.notifications?.map((e) => Notification.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

export interface Query {
  Params(request: QueryParams): Promise<QueryParamsResponse>;
  /** Queries a Notification object */
  Notification(request: QueryNotification): Promise<QueryNotificationResponse>;
  /** Queries a list of Notification items. */
  AllNotifications(request: QueryAllNotifications): Promise<QueryAllNotificationsResponse>;
  /** Queries a list of Notification items by address. */
  AllNotificationsByAddress(request: QueryAllNotificationsByAddress): Promise<QueryAllNotificationsByAddressResponse>;
}

export const QueryServiceName = "canine_chain.notifications.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Notification = this.Notification.bind(this);
    this.AllNotifications = this.AllNotifications.bind(this);
    this.AllNotificationsByAddress = this.AllNotificationsByAddress.bind(this);
  }
  Params(request: QueryParams): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Notification(request: QueryNotification): Promise<QueryNotificationResponse> {
    const data = QueryNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "Notification", data);
    return promise.then((data) => QueryNotificationResponse.decode(_m0.Reader.create(data)));
  }

  AllNotifications(request: QueryAllNotifications): Promise<QueryAllNotificationsResponse> {
    const data = QueryAllNotifications.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllNotifications", data);
    return promise.then((data) => QueryAllNotificationsResponse.decode(_m0.Reader.create(data)));
  }

  AllNotificationsByAddress(request: QueryAllNotificationsByAddress): Promise<QueryAllNotificationsByAddressResponse> {
    const data = QueryAllNotificationsByAddress.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllNotificationsByAddress", data);
    return promise.then((data) => QueryAllNotificationsByAddressResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const gt: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(gt.Number.MAX_SAFE_INTEGER)) {
    throw new gt.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
