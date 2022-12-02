/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.rns";

export interface Names {
  name: string;
  expires: number;
  value: string;
  data: string;
  subdomains: Names[];
  tld: string;
  locked: number;
}

function createBaseNames(): Names {
  return { name: "", expires: 0, value: "", data: "", subdomains: [], tld: "", locked: 0 };
}

export const Names = {
  encode(message: Names, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.expires !== 0) {
      writer.uint32(16).int64(message.expires);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    for (const v of message.subdomains) {
      Names.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.tld !== "") {
      writer.uint32(50).string(message.tld);
    }
    if (message.locked !== 0) {
      writer.uint32(56).int64(message.locked);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Names {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.expires = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.data = reader.string();
          break;
        case 5:
          message.subdomains.push(Names.decode(reader, reader.uint32()));
          break;
        case 6:
          message.tld = reader.string();
          break;
        case 7:
          message.locked = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Names {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      expires: isSet(object.expires) ? Number(object.expires) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      data: isSet(object.data) ? String(object.data) : "",
      subdomains: Array.isArray(object?.subdomains) ? object.subdomains.map((e: any) => Names.fromJSON(e)) : [],
      tld: isSet(object.tld) ? String(object.tld) : "",
      locked: isSet(object.locked) ? Number(object.locked) : 0,
    };
  },

  toJSON(message: Names): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.expires !== undefined && (obj.expires = Math.round(message.expires));
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined && (obj.data = message.data);
    if (message.subdomains) {
      obj.subdomains = message.subdomains.map((e) => e ? Names.toJSON(e) : undefined);
    } else {
      obj.subdomains = [];
    }
    message.tld !== undefined && (obj.tld = message.tld);
    message.locked !== undefined && (obj.locked = Math.round(message.locked));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Names>, I>>(object: I): Names {
    const message = createBaseNames();
    message.name = object.name ?? "";
    message.expires = object.expires ?? 0;
    message.value = object.value ?? "";
    message.data = object.data ?? "";
    message.subdomains = object.subdomains?.map((e) => Names.fromPartial(e)) || [];
    message.tld = object.tld ?? "";
    message.locked = object.locked ?? 0;
    return message;
  },
};

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
