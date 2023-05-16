/* eslint-disable */
import { grpc } from '@improbable-eng/grpc-web'
import { BrowserHeaders } from 'browser-headers'
import Long from 'long'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = "canine_chain.notifications";

export interface MsgCreateNotifications {
  creator: string;
  notification: string;
  address: string;
}

export interface MsgCreateNotificationsResponse {
  notiCounter: number;
}

export interface MsgUpdateNotifications {
  creator: string;
  count: number;
  notification: string;
  address: string;
}

export interface MsgUpdateNotificationsResponse {
}

export interface MsgDeleteNotifications {
  creator: string;
}

export interface MsgDeleteNotificationsResponse {
  notiCounter: number;
}

export interface MsgSetCounter {
  creator: string;
}

export interface MsgSetCounterResponse {
  notiCounter: number;
}

export interface MsgBlockSenders {
  creator: string;
  senderIds: string;
}

export interface MsgBlockSendersResponse {
}

function createBaseMsgCreateNotifications(): MsgCreateNotifications {
  return { creator: "", notification: "", address: "" };
}

export const MsgCreateNotifications = {
  encode(message: MsgCreateNotifications, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.notification !== "") {
      writer.uint32(18).string(message.notification);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNotifications {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNotifications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.notification = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNotifications {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      notification: isSet(object.notification) ? String(object.notification) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgCreateNotifications): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.notification !== undefined && (obj.notification = message.notification);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateNotifications>, I>>(object: I): MsgCreateNotifications {
    const message = createBaseMsgCreateNotifications();
    message.creator = object.creator ?? "";
    message.notification = object.notification ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgCreateNotificationsResponse(): MsgCreateNotificationsResponse {
  return { notiCounter: 0 };
}

export const MsgCreateNotificationsResponse = {
  encode(message: MsgCreateNotificationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notiCounter !== 0) {
      writer.uint32(8).uint64(message.notiCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNotificationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNotificationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notiCounter = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNotificationsResponse {
    return { notiCounter: isSet(object.notiCounter) ? Number(object.notiCounter) : 0 };
  },

  toJSON(message: MsgCreateNotificationsResponse): unknown {
    const obj: any = {};
    message.notiCounter !== undefined && (obj.notiCounter = Math.round(message.notiCounter));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateNotificationsResponse>, I>>(
    object: I,
  ): MsgCreateNotificationsResponse {
    const message = createBaseMsgCreateNotificationsResponse();
    message.notiCounter = object.notiCounter ?? 0;
    return message;
  },
};

function createBaseMsgUpdateNotifications(): MsgUpdateNotifications {
  return { creator: "", count: 0, notification: "", address: "" };
}

export const MsgUpdateNotifications = {
  encode(message: MsgUpdateNotifications, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint64(message.count);
    }
    if (message.notification !== "") {
      writer.uint32(26).string(message.notification);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNotifications {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNotifications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.notification = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateNotifications {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
      notification: isSet(object.notification) ? String(object.notification) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgUpdateNotifications): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.notification !== undefined && (obj.notification = message.notification);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateNotifications>, I>>(object: I): MsgUpdateNotifications {
    const message = createBaseMsgUpdateNotifications();
    message.creator = object.creator ?? "";
    message.count = object.count ?? 0;
    message.notification = object.notification ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgUpdateNotificationsResponse(): MsgUpdateNotificationsResponse {
  return {};
}

export const MsgUpdateNotificationsResponse = {
  encode(_: MsgUpdateNotificationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNotificationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNotificationsResponse();
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

  fromJSON(_: any): MsgUpdateNotificationsResponse {
    return {};
  },

  toJSON(_: MsgUpdateNotificationsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateNotificationsResponse>, I>>(_: I): MsgUpdateNotificationsResponse {
    const message = createBaseMsgUpdateNotificationsResponse();
    return message;
  },
};

function createBaseMsgDeleteNotifications(): MsgDeleteNotifications {
  return { creator: "" };
}

export const MsgDeleteNotifications = {
  encode(message: MsgDeleteNotifications, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteNotifications {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNotifications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteNotifications {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgDeleteNotifications): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteNotifications>, I>>(object: I): MsgDeleteNotifications {
    const message = createBaseMsgDeleteNotifications();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgDeleteNotificationsResponse(): MsgDeleteNotificationsResponse {
  return { notiCounter: 0 };
}

export const MsgDeleteNotificationsResponse = {
  encode(message: MsgDeleteNotificationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notiCounter !== 0) {
      writer.uint32(8).uint64(message.notiCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteNotificationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNotificationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notiCounter = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteNotificationsResponse {
    return { notiCounter: isSet(object.notiCounter) ? Number(object.notiCounter) : 0 };
  },

  toJSON(message: MsgDeleteNotificationsResponse): unknown {
    const obj: any = {};
    message.notiCounter !== undefined && (obj.notiCounter = Math.round(message.notiCounter));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteNotificationsResponse>, I>>(
    object: I,
  ): MsgDeleteNotificationsResponse {
    const message = createBaseMsgDeleteNotificationsResponse();
    message.notiCounter = object.notiCounter ?? 0;
    return message;
  },
};

function createBaseMsgSetCounter(): MsgSetCounter {
  return { creator: "" };
}

export const MsgSetCounter = {
  encode(message: MsgSetCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCounter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetCounter {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgSetCounter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetCounter>, I>>(object: I): MsgSetCounter {
    const message = createBaseMsgSetCounter();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgSetCounterResponse(): MsgSetCounterResponse {
  return { notiCounter: 0 };
}

export const MsgSetCounterResponse = {
  encode(message: MsgSetCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notiCounter !== 0) {
      writer.uint32(8).uint64(message.notiCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCounterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notiCounter = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetCounterResponse {
    return { notiCounter: isSet(object.notiCounter) ? Number(object.notiCounter) : 0 };
  },

  toJSON(message: MsgSetCounterResponse): unknown {
    const obj: any = {};
    message.notiCounter !== undefined && (obj.notiCounter = Math.round(message.notiCounter));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetCounterResponse>, I>>(object: I): MsgSetCounterResponse {
    const message = createBaseMsgSetCounterResponse();
    message.notiCounter = object.notiCounter ?? 0;
    return message;
  },
};

function createBaseMsgBlockSenders(): MsgBlockSenders {
  return { creator: "", senderIds: "" };
}

export const MsgBlockSenders = {
  encode(message: MsgBlockSenders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.senderIds !== "") {
      writer.uint32(18).string(message.senderIds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlockSenders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlockSenders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.senderIds = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBlockSenders {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      senderIds: isSet(object.senderIds) ? String(object.senderIds) : "",
    };
  },

  toJSON(message: MsgBlockSenders): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.senderIds !== undefined && (obj.senderIds = message.senderIds);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBlockSenders>, I>>(object: I): MsgBlockSenders {
    const message = createBaseMsgBlockSenders();
    message.creator = object.creator ?? "";
    message.senderIds = object.senderIds ?? "";
    return message;
  },
};

function createBaseMsgBlockSendersResponse(): MsgBlockSendersResponse {
  return {};
}

export const MsgBlockSendersResponse = {
  encode(_: MsgBlockSendersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlockSendersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlockSendersResponse();
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

  fromJSON(_: any): MsgBlockSendersResponse {
    return {};
  },

  toJSON(_: MsgBlockSendersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBlockSendersResponse>, I>>(_: I): MsgBlockSendersResponse {
    const message = createBaseMsgBlockSendersResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateNotifications(
    request: DeepPartial<MsgCreateNotifications>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateNotificationsResponse>;
  UpdateNotifications(
    request: DeepPartial<MsgUpdateNotifications>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateNotificationsResponse>;
  DeleteNotifications(
    request: DeepPartial<MsgDeleteNotifications>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDeleteNotificationsResponse>;
  SetCounter(request: DeepPartial<MsgSetCounter>, metadata?: grpc.Metadata): Promise<MsgSetCounterResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BlockSenders(request: DeepPartial<MsgBlockSenders>, metadata?: grpc.Metadata): Promise<MsgBlockSendersResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateNotifications = this.CreateNotifications.bind(this);
    this.UpdateNotifications = this.UpdateNotifications.bind(this);
    this.DeleteNotifications = this.DeleteNotifications.bind(this);
    this.SetCounter = this.SetCounter.bind(this);
    this.BlockSenders = this.BlockSenders.bind(this);
  }

  CreateNotifications(
    request: DeepPartial<MsgCreateNotifications>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateNotificationsResponse> {
    return this.rpc.unary(MsgCreateNotificationsDesc, MsgCreateNotifications.fromPartial(request), metadata);
  }

  UpdateNotifications(
    request: DeepPartial<MsgUpdateNotifications>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateNotificationsResponse> {
    return this.rpc.unary(MsgUpdateNotificationsDesc, MsgUpdateNotifications.fromPartial(request), metadata);
  }

  DeleteNotifications(
    request: DeepPartial<MsgDeleteNotifications>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDeleteNotificationsResponse> {
    return this.rpc.unary(MsgDeleteNotificationsDesc, MsgDeleteNotifications.fromPartial(request), metadata);
  }

  SetCounter(request: DeepPartial<MsgSetCounter>, metadata?: grpc.Metadata): Promise<MsgSetCounterResponse> {
    return this.rpc.unary(MsgSetCounterDesc, MsgSetCounter.fromPartial(request), metadata);
  }

  BlockSenders(request: DeepPartial<MsgBlockSenders>, metadata?: grpc.Metadata): Promise<MsgBlockSendersResponse> {
    return this.rpc.unary(MsgBlockSendersDesc, MsgBlockSenders.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "canine_chain.notifications.Msg" };

export const MsgCreateNotificationsDesc: UnaryMethodDefinitionish = {
  methodName: "CreateNotifications",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateNotifications.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateNotificationsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpdateNotificationsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateNotifications",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateNotifications.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateNotificationsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgDeleteNotificationsDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteNotifications",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDeleteNotifications.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDeleteNotificationsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSetCounterDesc: UnaryMethodDefinitionish = {
  methodName: "SetCounter",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetCounter.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetCounterResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgBlockSendersDesc: UnaryMethodDefinitionish = {
  methodName: "BlockSenders",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgBlockSenders.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBlockSendersResponse.decode(data),
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
