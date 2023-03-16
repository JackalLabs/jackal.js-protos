/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { NotiCounter } from "./noti_counter";
import { Notifications } from "./notifications";
import { Params } from "./params";

export const protobufPackage = "canine_chain.notifications";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNotificationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNotificationsRequest {
    return {
      count: isSet(object.count) ? Number(object.count) : 0,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryGetNotificationsRequest): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.address !== undefined && (obj.address = message.address);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNotificationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notifications = Notifications.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNotificationsResponse {
    return { notifications: isSet(object.notifications) ? Notifications.fromJSON(object.notifications) : undefined };
  },

  toJSON(message: QueryGetNotificationsResponse): unknown {
    const obj: any = {};
    message.notifications !== undefined &&
      (obj.notifications = message.notifications ? Notifications.toJSON(message.notifications) : undefined);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotificationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotificationsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllNotificationsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotificationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notifications.push(Notifications.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotificationsResponse {
    return {
      notifications: Array.isArray(object?.notifications)
        ? object.notifications.map((e: any) => Notifications.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllNotificationsResponse): unknown {
    const obj: any = {};
    if (message.notifications) {
      obj.notifications = message.notifications.map((e) => e ? Notifications.toJSON(e) : undefined);
    } else {
      obj.notifications = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotificationsByAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotificationsByAddressRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryAllNotificationsByAddressRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.address !== undefined && (obj.address = message.address);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotificationsByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notifications.push(Notifications.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotificationsByAddressResponse {
    return {
      notifications: Array.isArray(object?.notifications)
        ? object.notifications.map((e: any) => Notifications.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllNotificationsByAddressResponse): unknown {
    const obj: any = {};
    if (message.notifications) {
      obj.notifications = message.notifications.map((e) => e ? Notifications.toJSON(e) : undefined);
    } else {
      obj.notifications = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNotiCounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNotiCounterRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetNotiCounterRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNotiCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notiCounter = NotiCounter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNotiCounterResponse {
    return { notiCounter: isSet(object.notiCounter) ? NotiCounter.fromJSON(object.notiCounter) : undefined };
  },

  toJSON(message: QueryGetNotiCounterResponse): unknown {
    const obj: any = {};
    message.notiCounter !== undefined &&
      (obj.notiCounter = message.notiCounter ? NotiCounter.toJSON(message.notiCounter) : undefined);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotiCounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotiCounterRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllNotiCounterRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotiCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notiCounter.push(NotiCounter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotiCounterResponse {
    return {
      notiCounter: Array.isArray(object?.notiCounter)
        ? object.notiCounter.map((e: any) => NotiCounter.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllNotiCounterResponse): unknown {
    const obj: any = {};
    if (message.notiCounter) {
      obj.notiCounter = message.notiCounter.map((e) => e ? NotiCounter.toJSON(e) : undefined);
    } else {
      obj.notiCounter = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a Notifications by index. */
  Notifications(
    request: DeepPartial<QueryGetNotificationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetNotificationsResponse>;
  /** Queries a list of Notifications items. */
  NotificationsAll(
    request: DeepPartial<QueryAllNotificationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllNotificationsResponse>;
  /** Queries a list of Notifications items by address. */
  NotificationsByAddress(
    request: DeepPartial<QueryAllNotificationsByAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllNotificationsByAddressResponse>;
  /** Queries a NotiCounter by index. */
  NotiCounter(
    request: DeepPartial<QueryGetNotiCounterRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetNotiCounterResponse>;
  /** Queries a list of NotiCounter items. */
  NotiCounterAll(
    request: DeepPartial<QueryAllNotiCounterRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllNotiCounterResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Notifications = this.Notifications.bind(this);
    this.NotificationsAll = this.NotificationsAll.bind(this);
    this.NotificationsByAddress = this.NotificationsByAddress.bind(this);
    this.NotiCounter = this.NotiCounter.bind(this);
    this.NotiCounterAll = this.NotiCounterAll.bind(this);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  Notifications(
    request: DeepPartial<QueryGetNotificationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetNotificationsResponse> {
    return this.rpc.unary(QueryNotificationsDesc, QueryGetNotificationsRequest.fromPartial(request), metadata);
  }

  NotificationsAll(
    request: DeepPartial<QueryAllNotificationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllNotificationsResponse> {
    return this.rpc.unary(QueryNotificationsAllDesc, QueryAllNotificationsRequest.fromPartial(request), metadata);
  }

  NotificationsByAddress(
    request: DeepPartial<QueryAllNotificationsByAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllNotificationsByAddressResponse> {
    return this.rpc.unary(
      QueryNotificationsByAddressDesc,
      QueryAllNotificationsByAddressRequest.fromPartial(request),
      metadata,
    );
  }

  NotiCounter(
    request: DeepPartial<QueryGetNotiCounterRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetNotiCounterResponse> {
    return this.rpc.unary(QueryNotiCounterDesc, QueryGetNotiCounterRequest.fromPartial(request), metadata);
  }

  NotiCounterAll(
    request: DeepPartial<QueryAllNotiCounterRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllNotiCounterResponse> {
    return this.rpc.unary(QueryNotiCounterAllDesc, QueryAllNotiCounterRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "canine_chain.notifications.Query" };

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryNotificationsDesc: UnaryMethodDefinitionish = {
  methodName: "Notifications",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetNotificationsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetNotificationsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryNotificationsAllDesc: UnaryMethodDefinitionish = {
  methodName: "NotificationsAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllNotificationsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllNotificationsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryNotificationsByAddressDesc: UnaryMethodDefinitionish = {
  methodName: "NotificationsByAddress",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllNotificationsByAddressRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllNotificationsByAddressResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryNotiCounterDesc: UnaryMethodDefinitionish = {
  methodName: "NotiCounter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetNotiCounterRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetNotiCounterResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryNotiCounterAllDesc: UnaryMethodDefinitionish = {
  methodName: "NotiCounterAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllNotiCounterRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllNotiCounterResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
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
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
