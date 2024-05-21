/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.rns";

export interface Whois {
  index: string;
  name: string;
  value: string;
  data: string;
}

function createBaseWhois(): Whois {
  return { index: "", name: "", value: "", data: "" };
}

export const Whois = {
  encode(message: Whois, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Whois {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhois();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.index = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Whois {
    return {
      index: isSet(object.index) ? gt.String(object.index) : "",
      name: isSet(object.name) ? gt.String(object.name) : "",
      value: isSet(object.value) ? gt.String(object.value) : "",
      data: isSet(object.data) ? gt.String(object.data) : "",
    };
  },

  toJSON(message: Whois): unknown {
    const obj: any = {};
    if (message.index !== "") {
      obj.index = message.index;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Whois>, I>>(base?: I): Whois {
    return Whois.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Whois>, I>>(object: I): Whois {
    const message = createBaseWhois();
    message.index = object.index ?? "";
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? "";
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}