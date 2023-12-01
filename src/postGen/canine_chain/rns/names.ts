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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.expires = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subdomains.push(Names.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tld = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.locked = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Names {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      expires: isSet(object.expires) ? gt.Number(object.expires) : 0,
      value: isSet(object.value) ? gt.String(object.value) : "",
      data: isSet(object.data) ? gt.String(object.data) : "",
      subdomains: gt.Array.isArray(object?.subdomains) ? object.subdomains.map((e: any) => Names.fromJSON(e)) : [],
      tld: isSet(object.tld) ? gt.String(object.tld) : "",
      locked: isSet(object.locked) ? gt.Number(object.locked) : 0,
    };
  },

  toJSON(message: Names): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.expires !== 0) {
      obj.expires = Math.round(message.expires);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    if (message.subdomains?.length) {
      obj.subdomains = message.subdomains.map((e) => Names.toJSON(e));
    }
    if (message.tld !== "") {
      obj.tld = message.tld;
    }
    if (message.locked !== 0) {
      obj.locked = Math.round(message.locked);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Names>, I>>(base?: I): Names {
    return Names.fromPartial(base ?? ({} as any));
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
