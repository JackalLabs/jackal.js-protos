/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { NotiCounter } from "./noti_counter";
import { Notifications } from "./notifications";
import { Params } from "./params";

export const protobufPackage = "canine_chain.notifications";

export interface QueryParamsRequest {
}

export interface QueryParamsResponse {
  params: Params | undefined;
}

export interface QueryGetNotificationsRequest {
  count: number;
  address: string;
}

export interface QueryGetNotificationsResponse {
  notifications: Notifications | undefined;
}

export interface QueryAllNotificationsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllNotificationsResponse {
  notifications: Notifications[];
  pagination: PageResponse | undefined;
}

export interface QueryAllNotificationsByAddressRequest {
  pagination: PageRequest | undefined;
  address: string;
}

export interface QueryAllNotificationsByAddressResponse {
  notifications: Notifications[];
  pagination: PageResponse | undefined;
}

export interface QueryGetNotiCounterRequest {
  address: string;
}

export interface QueryGetNotiCounterResponse {
  notiCounter: NotiCounter | undefined;
}

export interface QueryAllNotiCounterRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllNotiCounterResponse {
  notiCounter: NotiCounter[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
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

function createBaseQueryGetNotificationsRequest(): QueryGetNotificationsRequest {
  return { count: 0, address: "" };
}

export const QueryGetNotificationsRequest = {
  encode(message: QueryGetNotificationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint64(message.count);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNotificationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNotificationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.count = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetNotificationsRequest {
    return {
      count: isSet(object.count) ? gt.Number(object.count) : 0,
      address: isSet(object.address) ? gt.String(object.address) : "",
    };
  },

  toJSON(message: QueryGetNotificationsRequest): unknown {
    const obj: any = {};
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetNotificationsRequest>, I>>(base?: I): QueryGetNotificationsRequest {
    return QueryGetNotificationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetNotificationsRequest>, I>>(object: I): QueryGetNotificationsRequest {
    const message = createBaseQueryGetNotificationsRequest();
    message.count = object.count ?? 0;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetNotificationsResponse(): QueryGetNotificationsResponse {
  return { notifications: undefined };
}

export const QueryGetNotificationsResponse = {
  encode(message: QueryGetNotificationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notifications !== undefined) {
      Notifications.encode(message.notifications, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNotificationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNotificationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notifications = Notifications.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetNotificationsResponse {
    return { notifications: isSet(object.notifications) ? Notifications.fromJSON(object.notifications) : undefined };
  },

  toJSON(message: QueryGetNotificationsResponse): unknown {
    const obj: any = {};
    if (message.notifications !== undefined) {
      obj.notifications = Notifications.toJSON(message.notifications);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetNotificationsResponse>, I>>(base?: I): QueryGetNotificationsResponse {
    return QueryGetNotificationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetNotificationsResponse>, I>>(
    object: I,
  ): QueryGetNotificationsResponse {
    const message = createBaseQueryGetNotificationsResponse();
    message.notifications = (object.notifications !== undefined && object.notifications !== null)
      ? Notifications.fromPartial(object.notifications)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNotificationsRequest(): QueryAllNotificationsRequest {
  return { pagination: undefined };
}

export const QueryAllNotificationsRequest = {
  encode(message: QueryAllNotificationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNotificationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotificationsRequest();
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

  fromJSON(object: any): QueryAllNotificationsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllNotificationsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllNotificationsRequest>, I>>(base?: I): QueryAllNotificationsRequest {
    return QueryAllNotificationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllNotificationsRequest>, I>>(object: I): QueryAllNotificationsRequest {
    const message = createBaseQueryAllNotificationsRequest();
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
      Notifications.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.notifications.push(Notifications.decode(reader, reader.uint32()));
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
        ? object.notifications.map((e: any) => Notifications.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllNotificationsResponse): unknown {
    const obj: any = {};
    if (message.notifications?.length) {
      obj.notifications = message.notifications.map((e) => Notifications.toJSON(e));
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
    message.notifications = object.notifications?.map((e) => Notifications.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNotificationsByAddressRequest(): QueryAllNotificationsByAddressRequest {
  return { pagination: undefined, address: "" };
}

export const QueryAllNotificationsByAddressRequest = {
  encode(message: QueryAllNotificationsByAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNotificationsByAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotificationsByAddressRequest();
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

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotificationsByAddressRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      address: isSet(object.address) ? gt.String(object.address) : "",
    };
  },

  toJSON(message: QueryAllNotificationsByAddressRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllNotificationsByAddressRequest>, I>>(
    base?: I,
  ): QueryAllNotificationsByAddressRequest {
    return QueryAllNotificationsByAddressRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllNotificationsByAddressRequest>, I>>(
    object: I,
  ): QueryAllNotificationsByAddressRequest {
    const message = createBaseQueryAllNotificationsByAddressRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAllNotificationsByAddressResponse(): QueryAllNotificationsByAddressResponse {
  return { notifications: [], pagination: undefined };
}

export const QueryAllNotificationsByAddressResponse = {
  encode(message: QueryAllNotificationsByAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.notifications) {
      Notifications.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.notifications.push(Notifications.decode(reader, reader.uint32()));
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
        ? object.notifications.map((e: any) => Notifications.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllNotificationsByAddressResponse): unknown {
    const obj: any = {};
    if (message.notifications?.length) {
      obj.notifications = message.notifications.map((e) => Notifications.toJSON(e));
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
    message.notifications = object.notifications?.map((e) => Notifications.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetNotiCounterRequest(): QueryGetNotiCounterRequest {
  return { address: "" };
}

export const QueryGetNotiCounterRequest = {
  encode(message: QueryGetNotiCounterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNotiCounterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNotiCounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetNotiCounterRequest {
    return { address: isSet(object.address) ? gt.String(object.address) : "" };
  },

  toJSON(message: QueryGetNotiCounterRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetNotiCounterRequest>, I>>(base?: I): QueryGetNotiCounterRequest {
    return QueryGetNotiCounterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetNotiCounterRequest>, I>>(object: I): QueryGetNotiCounterRequest {
    const message = createBaseQueryGetNotiCounterRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetNotiCounterResponse(): QueryGetNotiCounterResponse {
  return { notiCounter: undefined };
}

export const QueryGetNotiCounterResponse = {
  encode(message: QueryGetNotiCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notiCounter !== undefined) {
      NotiCounter.encode(message.notiCounter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNotiCounterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNotiCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notiCounter = NotiCounter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetNotiCounterResponse {
    return { notiCounter: isSet(object.notiCounter) ? NotiCounter.fromJSON(object.notiCounter) : undefined };
  },

  toJSON(message: QueryGetNotiCounterResponse): unknown {
    const obj: any = {};
    if (message.notiCounter !== undefined) {
      obj.notiCounter = NotiCounter.toJSON(message.notiCounter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetNotiCounterResponse>, I>>(base?: I): QueryGetNotiCounterResponse {
    return QueryGetNotiCounterResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetNotiCounterResponse>, I>>(object: I): QueryGetNotiCounterResponse {
    const message = createBaseQueryGetNotiCounterResponse();
    message.notiCounter = (object.notiCounter !== undefined && object.notiCounter !== null)
      ? NotiCounter.fromPartial(object.notiCounter)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNotiCounterRequest(): QueryAllNotiCounterRequest {
  return { pagination: undefined };
}

export const QueryAllNotiCounterRequest = {
  encode(message: QueryAllNotiCounterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNotiCounterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotiCounterRequest();
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

  fromJSON(object: any): QueryAllNotiCounterRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllNotiCounterRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllNotiCounterRequest>, I>>(base?: I): QueryAllNotiCounterRequest {
    return QueryAllNotiCounterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllNotiCounterRequest>, I>>(object: I): QueryAllNotiCounterRequest {
    const message = createBaseQueryAllNotiCounterRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNotiCounterResponse(): QueryAllNotiCounterResponse {
  return { notiCounter: [], pagination: undefined };
}

export const QueryAllNotiCounterResponse = {
  encode(message: QueryAllNotiCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.notiCounter) {
      NotiCounter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNotiCounterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotiCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notiCounter.push(NotiCounter.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllNotiCounterResponse {
    return {
      notiCounter: gt.Array.isArray(object?.notiCounter)
        ? object.notiCounter.map((e: any) => NotiCounter.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllNotiCounterResponse): unknown {
    const obj: any = {};
    if (message.notiCounter?.length) {
      obj.notiCounter = message.notiCounter.map((e) => NotiCounter.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllNotiCounterResponse>, I>>(base?: I): QueryAllNotiCounterResponse {
    return QueryAllNotiCounterResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllNotiCounterResponse>, I>>(object: I): QueryAllNotiCounterResponse {
    const message = createBaseQueryAllNotiCounterResponse();
    message.notiCounter = object.notiCounter?.map((e) => NotiCounter.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Notification by count and address. */
  Notifications(request: QueryGetNotificationsRequest): Promise<QueryGetNotificationsResponse>;
  /** Queries a list of Notification items. */
  NotificationsAll(request: QueryAllNotificationsRequest): Promise<QueryAllNotificationsResponse>;
  /** Queries a list of Notification items by address. */
  NotificationsByAddress(
    request: QueryAllNotificationsByAddressRequest,
  ): Promise<QueryAllNotificationsByAddressResponse>;
  /** Queries a NotiCounter by address. */
  NotiCounter(request: QueryGetNotiCounterRequest): Promise<QueryGetNotiCounterResponse>;
  /** Queries a list of NotiCounter items. */
  NotiCounterAll(request: QueryAllNotiCounterRequest): Promise<QueryAllNotiCounterResponse>;
}

export const QueryServiceName = "canine_chain.notifications.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Notifications = this.Notifications.bind(this);
    this.NotificationsAll = this.NotificationsAll.bind(this);
    this.NotificationsByAddress = this.NotificationsByAddress.bind(this);
    this.NotiCounter = this.NotiCounter.bind(this);
    this.NotiCounterAll = this.NotiCounterAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Notifications(request: QueryGetNotificationsRequest): Promise<QueryGetNotificationsResponse> {
    const data = QueryGetNotificationsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Notifications", data);
    return promise.then((data) => QueryGetNotificationsResponse.decode(_m0.Reader.create(data)));
  }

  NotificationsAll(request: QueryAllNotificationsRequest): Promise<QueryAllNotificationsResponse> {
    const data = QueryAllNotificationsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotificationsAll", data);
    return promise.then((data) => QueryAllNotificationsResponse.decode(_m0.Reader.create(data)));
  }

  NotificationsByAddress(
    request: QueryAllNotificationsByAddressRequest,
  ): Promise<QueryAllNotificationsByAddressResponse> {
    const data = QueryAllNotificationsByAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotificationsByAddress", data);
    return promise.then((data) => QueryAllNotificationsByAddressResponse.decode(_m0.Reader.create(data)));
  }

  NotiCounter(request: QueryGetNotiCounterRequest): Promise<QueryGetNotiCounterResponse> {
    const data = QueryGetNotiCounterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotiCounter", data);
    return promise.then((data) => QueryGetNotiCounterResponse.decode(_m0.Reader.create(data)));
  }

  NotiCounterAll(request: QueryAllNotiCounterRequest): Promise<QueryAllNotiCounterResponse> {
    const data = QueryAllNotiCounterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotiCounterAll", data);
    return promise.then((data) => QueryAllNotiCounterResponse.decode(_m0.Reader.create(data)));
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
