/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.rns";

/** TODO: fix casing */
export interface Forsale {
  name: string;
  price: string;
  owner: string;
}

function createBaseForsale(): Forsale {
  return { name: "", price: "", owner: "" };
}

export const Forsale = {
  encode(message: Forsale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Forsale {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForsale();
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
          if (tag !== 18) {
            break;
          }

          message.price = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Forsale {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      price: isSet(object.price) ? gt.String(object.price) : "",
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
    };
  },

  toJSON(message: Forsale): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.price !== "") {
      obj.price = message.price;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Forsale>, I>>(base?: I): Forsale {
    return Forsale.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Forsale>, I>>(object: I): Forsale {
    const message = createBaseForsale();
    message.name = object.name ?? "";
    message.price = object.price ?? "";
    message.owner = object.owner ?? "";
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
