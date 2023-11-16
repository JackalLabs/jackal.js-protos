/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.notifications";

export interface MsgCreateNotifications {
  creator: string;
  notification: string;
  address: string;
}

export interface MsgCreateNotificationsResponse {
  /** TODO: fix casing */
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
  /** TODO: fix casing */
  notiCounter: number;
}

export interface MsgSetCounter {
  creator: string;
}

export interface MsgSetCounterResponse {
  /** TODO: fix casing */
  notiCounter: number;
}

export interface MsgBlockSenders {
  creator: string;
  /** TODO: fix casing */
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNotifications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.notification = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgCreateNotifications {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      notification: isSet(object.notification) ? gt.String(object.notification) : "",
      address: isSet(object.address) ? gt.String(object.address) : "",
    };
  },

  toJSON(message: MsgCreateNotifications): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.notification !== "") {
      obj.notification = message.notification;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateNotifications>, I>>(base?: I): MsgCreateNotifications {
    return MsgCreateNotifications.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNotificationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.notiCounter = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNotificationsResponse {
    return { notiCounter: isSet(object.notiCounter) ? gt.Number(object.notiCounter) : 0 };
  },

  toJSON(message: MsgCreateNotificationsResponse): unknown {
    const obj: any = {};
    if (message.notiCounter !== 0) {
      obj.notiCounter = Math.round(message.notiCounter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateNotificationsResponse>, I>>(base?: I): MsgCreateNotificationsResponse {
    return MsgCreateNotificationsResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNotifications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.notification = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): MsgUpdateNotifications {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      count: isSet(object.count) ? gt.Number(object.count) : 0,
      notification: isSet(object.notification) ? gt.String(object.notification) : "",
      address: isSet(object.address) ? gt.String(object.address) : "",
    };
  },

  toJSON(message: MsgUpdateNotifications): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.notification !== "") {
      obj.notification = message.notification;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateNotifications>, I>>(base?: I): MsgUpdateNotifications {
    return MsgUpdateNotifications.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNotificationsResponse();
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

  fromJSON(_: any): MsgUpdateNotificationsResponse {
    return {};
  },

  toJSON(_: MsgUpdateNotificationsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateNotificationsResponse>, I>>(base?: I): MsgUpdateNotificationsResponse {
    return MsgUpdateNotificationsResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNotifications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteNotifications {
    return { creator: isSet(object.creator) ? gt.String(object.creator) : "" };
  },

  toJSON(message: MsgDeleteNotifications): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteNotifications>, I>>(base?: I): MsgDeleteNotifications {
    return MsgDeleteNotifications.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNotificationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.notiCounter = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteNotificationsResponse {
    return { notiCounter: isSet(object.notiCounter) ? gt.Number(object.notiCounter) : 0 };
  },

  toJSON(message: MsgDeleteNotificationsResponse): unknown {
    const obj: any = {};
    if (message.notiCounter !== 0) {
      obj.notiCounter = Math.round(message.notiCounter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteNotificationsResponse>, I>>(base?: I): MsgDeleteNotificationsResponse {
    return MsgDeleteNotificationsResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetCounter {
    return { creator: isSet(object.creator) ? gt.String(object.creator) : "" };
  },

  toJSON(message: MsgSetCounter): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetCounter>, I>>(base?: I): MsgSetCounter {
    return MsgSetCounter.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.notiCounter = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetCounterResponse {
    return { notiCounter: isSet(object.notiCounter) ? gt.Number(object.notiCounter) : 0 };
  },

  toJSON(message: MsgSetCounterResponse): unknown {
    const obj: any = {};
    if (message.notiCounter !== 0) {
      obj.notiCounter = Math.round(message.notiCounter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetCounterResponse>, I>>(base?: I): MsgSetCounterResponse {
    return MsgSetCounterResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlockSenders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.senderIds = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBlockSenders {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      senderIds: isSet(object.senderIds) ? gt.String(object.senderIds) : "",
    };
  },

  toJSON(message: MsgBlockSenders): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.senderIds !== "") {
      obj.senderIds = message.senderIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBlockSenders>, I>>(base?: I): MsgBlockSenders {
    return MsgBlockSenders.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlockSendersResponse();
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

  fromJSON(_: any): MsgBlockSendersResponse {
    return {};
  },

  toJSON(_: MsgBlockSendersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBlockSendersResponse>, I>>(base?: I): MsgBlockSendersResponse {
    return MsgBlockSendersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBlockSendersResponse>, I>>(_: I): MsgBlockSendersResponse {
    const message = createBaseMsgBlockSendersResponse();
    return message;
  },
};

export interface Msg {
  CreateNotifications(request: MsgCreateNotifications): Promise<MsgCreateNotificationsResponse>;
  UpdateNotifications(request: MsgUpdateNotifications): Promise<MsgUpdateNotificationsResponse>;
  DeleteNotifications(request: MsgDeleteNotifications): Promise<MsgDeleteNotificationsResponse>;
  SetCounter(request: MsgSetCounter): Promise<MsgSetCounterResponse>;
  BlockSenders(request: MsgBlockSenders): Promise<MsgBlockSendersResponse>;
}

export const MsgServiceName = "canine_chain.notifications.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.CreateNotifications = this.CreateNotifications.bind(this);
    this.UpdateNotifications = this.UpdateNotifications.bind(this);
    this.DeleteNotifications = this.DeleteNotifications.bind(this);
    this.SetCounter = this.SetCounter.bind(this);
    this.BlockSenders = this.BlockSenders.bind(this);
  }
  CreateNotifications(request: MsgCreateNotifications): Promise<MsgCreateNotificationsResponse> {
    const data = MsgCreateNotifications.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateNotifications", data);
    return promise.then((data) => MsgCreateNotificationsResponse.decode(_m0.Reader.create(data)));
  }

  UpdateNotifications(request: MsgUpdateNotifications): Promise<MsgUpdateNotificationsResponse> {
    const data = MsgUpdateNotifications.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateNotifications", data);
    return promise.then((data) => MsgUpdateNotificationsResponse.decode(_m0.Reader.create(data)));
  }

  DeleteNotifications(request: MsgDeleteNotifications): Promise<MsgDeleteNotificationsResponse> {
    const data = MsgDeleteNotifications.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteNotifications", data);
    return promise.then((data) => MsgDeleteNotificationsResponse.decode(_m0.Reader.create(data)));
  }

  SetCounter(request: MsgSetCounter): Promise<MsgSetCounterResponse> {
    const data = MsgSetCounter.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetCounter", data);
    return promise.then((data) => MsgSetCounterResponse.decode(_m0.Reader.create(data)));
  }

  BlockSenders(request: MsgBlockSenders): Promise<MsgBlockSendersResponse> {
    const data = MsgBlockSenders.encode(request).finish();
    const promise = this.rpc.request(this.service, "BlockSenders", data);
    return promise.then((data) => MsgBlockSendersResponse.decode(_m0.Reader.create(data)));
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
