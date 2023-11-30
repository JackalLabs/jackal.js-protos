/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.notifications";

export interface Notification {
  /** the address sending the notification */
  to: string;
  /** the address receiving the notification */
  from: string;
  /** time of creation in microseconds */
  time: number;
  /** must be valid json string */
  contents: string;
  /** allowing for arbitrary data that is supposed to be decrypted using a private key */
  privateContents: Uint8Array;
}

export interface Block {
  /** the address controlling the profile */
  address: string;
  /** the address being blocked */
  blockedAddress: string;
}

function createBaseNotification(): Notification {
  return { to: "", from: "", time: 0, contents: "", privateContents: new Uint8Array(0) };
}

export const Notification = {
  encode(message: Notification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.to !== "") {
      writer.uint32(10).string(message.to);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.time !== 0) {
      writer.uint32(24).int64(message.time);
    }
    if (message.contents !== "") {
      writer.uint32(34).string(message.contents);
    }
    if (message.privateContents.length !== 0) {
      writer.uint32(42).bytes(message.privateContents);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotification();
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
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contents = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): Notification {
    return {
      to: isSet(object.to) ? gt.String(object.to) : "",
      from: isSet(object.from) ? gt.String(object.from) : "",
      time: isSet(object.time) ? gt.Number(object.time) : 0,
      contents: isSet(object.contents) ? gt.String(object.contents) : "",
      privateContents: isSet(object.privateContents) ? bytesFromBase64(object.privateContents) : new Uint8Array(0),
    };
  },

  toJSON(message: Notification): unknown {
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
    if (message.contents !== "") {
      obj.contents = message.contents;
    }
    if (message.privateContents.length !== 0) {
      obj.privateContents = base64FromBytes(message.privateContents);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Notification>, I>>(base?: I): Notification {
    return Notification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Notification>, I>>(object: I): Notification {
    const message = createBaseNotification();
    message.to = object.to ?? "";
    message.from = object.from ?? "";
    message.time = object.time ?? 0;
    message.contents = object.contents ?? "";
    message.privateContents = object.privateContents ?? new Uint8Array(0);
    return message;
  },
};

function createBaseBlock(): Block {
  return { address: "", blockedAddress: "" };
}

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.blockedAddress !== "") {
      writer.uint32(18).string(message.blockedAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.blockedAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Block {
    return {
      address: isSet(object.address) ? gt.String(object.address) : "",
      blockedAddress: isSet(object.blockedAddress) ? gt.String(object.blockedAddress) : "",
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.blockedAddress !== "") {
      obj.blockedAddress = message.blockedAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Block>, I>>(base?: I): Block {
    return Block.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    message.address = object.address ?? "";
    message.blockedAddress = object.blockedAddress ?? "";
    return message;
  },
};

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
  if (gt.Buffer) {
    return Uint8Array.from(gt.Buffer.from(b64, "base64"));
  } else {
    const bin = gt.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (gt.Buffer) {
    return gt.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(gt.String.fromCharCode(byte));
    });
    return gt.btoa(bin.join(""));
  }
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
