/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.notifications";

export interface MsgCreateNotification {
  /** who the notification is from */
  creator: string;
  /** address receiving the notification */
  to: string;
  /** must be valid json */
  contents: string;
  /** private contents can be any byte array (meant to be encrypted data) */
  privateContents: Uint8Array;
}

export interface MsgCreateNotificationResponse {
}

export interface MsgDeleteNotification {
  /** the address deleting the notification */
  creator: string;
  /** the address receiving the notification */
  from: string;
  /** time of notification creation in microseconds */
  time: number;
}

export interface MsgDeleteNotificationResponse {
}

export interface MsgBlockSenders {
  creator: string;
  toBlock: string[];
}

export interface MsgBlockSendersResponse {
}

function createBaseMsgCreateNotification(): MsgCreateNotification {
  return { creator: "", to: "", contents: "", privateContents: new Uint8Array(0) };
}

export const MsgCreateNotification = {
  encode(message: MsgCreateNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.contents !== "") {
      writer.uint32(26).string(message.contents);
    }
    if (message.privateContents.length !== 0) {
      writer.uint32(34).bytes(message.privateContents);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNotification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNotification();
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

          message.to = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contents = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.privateContents = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNotification {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      to: isSet(object.to) ? gt.String(object.to) : "",
      contents: isSet(object.contents) ? gt.String(object.contents) : "",
      privateContents: isSet(object.privateContents) ? bytesFromBase64(object.privateContents) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgCreateNotification): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.to !== "") {
      obj.to = message.to;
    }
    if (message.contents !== "") {
      obj.contents = message.contents;
    }
    if (message.privateContents.length !== 0) {
      obj.privateContents = base64FromBytes(message.privateContents);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateNotification>, I>>(base?: I): MsgCreateNotification {
    return MsgCreateNotification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateNotification>, I>>(object: I): MsgCreateNotification {
    const message = createBaseMsgCreateNotification();
    message.creator = object.creator ?? "";
    message.to = object.to ?? "";
    message.contents = object.contents ?? "";
    message.privateContents = object.privateContents ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgCreateNotificationResponse(): MsgCreateNotificationResponse {
  return {};
}

export const MsgCreateNotificationResponse = {
  encode(_: MsgCreateNotificationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNotificationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNotificationResponse();
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

  fromJSON(_: any): MsgCreateNotificationResponse {
    return {};
  },

  toJSON(_: MsgCreateNotificationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateNotificationResponse>, I>>(base?: I): MsgCreateNotificationResponse {
    return MsgCreateNotificationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateNotificationResponse>, I>>(_: I): MsgCreateNotificationResponse {
    const message = createBaseMsgCreateNotificationResponse();
    return message;
  },
};

function createBaseMsgDeleteNotification(): MsgDeleteNotification {
  return { creator: "", from: "", time: 0 };
}

export const MsgDeleteNotification = {
  encode(message: MsgDeleteNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.time !== 0) {
      writer.uint32(24).int64(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteNotification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNotification();
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

  fromJSON(object: any): MsgDeleteNotification {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      from: isSet(object.from) ? gt.String(object.from) : "",
      time: isSet(object.time) ? gt.Number(object.time) : 0,
    };
  },

  toJSON(message: MsgDeleteNotification): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.time !== 0) {
      obj.time = Math.round(message.time);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteNotification>, I>>(base?: I): MsgDeleteNotification {
    return MsgDeleteNotification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteNotification>, I>>(object: I): MsgDeleteNotification {
    const message = createBaseMsgDeleteNotification();
    message.creator = object.creator ?? "";
    message.from = object.from ?? "";
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseMsgDeleteNotificationResponse(): MsgDeleteNotificationResponse {
  return {};
}

export const MsgDeleteNotificationResponse = {
  encode(_: MsgDeleteNotificationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteNotificationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNotificationResponse();
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

  fromJSON(_: any): MsgDeleteNotificationResponse {
    return {};
  },

  toJSON(_: MsgDeleteNotificationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteNotificationResponse>, I>>(base?: I): MsgDeleteNotificationResponse {
    return MsgDeleteNotificationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteNotificationResponse>, I>>(_: I): MsgDeleteNotificationResponse {
    const message = createBaseMsgDeleteNotificationResponse();
    return message;
  },
};

function createBaseMsgBlockSenders(): MsgBlockSenders {
  return { creator: "", toBlock: [] };
}

export const MsgBlockSenders = {
  encode(message: MsgBlockSenders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.toBlock) {
      writer.uint32(18).string(v!);
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

          message.toBlock.push(reader.string());
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
      toBlock: gt.Array.isArray(object?.toBlock) ? object.toBlock.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: MsgBlockSenders): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.toBlock?.length) {
      obj.toBlock = message.toBlock;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBlockSenders>, I>>(base?: I): MsgBlockSenders {
    return MsgBlockSenders.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBlockSenders>, I>>(object: I): MsgBlockSenders {
    const message = createBaseMsgBlockSenders();
    message.creator = object.creator ?? "";
    message.toBlock = object.toBlock?.map((e) => e) || [];
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
  CreateNotification(request: MsgCreateNotification): Promise<MsgCreateNotificationResponse>;
  DeleteNotification(request: MsgDeleteNotification): Promise<MsgDeleteNotificationResponse>;
  BlockSenders(request: MsgBlockSenders): Promise<MsgBlockSendersResponse>;
}

export const MsgServiceName = "canine_chain.notifications.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.CreateNotification = this.CreateNotification.bind(this);
    this.DeleteNotification = this.DeleteNotification.bind(this);
    this.BlockSenders = this.BlockSenders.bind(this);
  }
  CreateNotification(request: MsgCreateNotification): Promise<MsgCreateNotificationResponse> {
    const data = MsgCreateNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateNotification", data);
    return promise.then((data) => MsgCreateNotificationResponse.decode(_m0.Reader.create(data)));
  }

  DeleteNotification(request: MsgDeleteNotification): Promise<MsgDeleteNotificationResponse> {
    const data = MsgDeleteNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteNotification", data);
    return promise.then((data) => MsgDeleteNotificationResponse.decode(_m0.Reader.create(data)));
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

function bytesFromBase64(b64: string): Uint8Array {
  const bin = gt.atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(gt.String.fromCharCode(byte));
  });
  return gt.btoa(bin.join(""));
}

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
