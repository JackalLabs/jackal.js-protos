/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.jklmint";

export interface Params {
  mintDenom: string;
  /** TODO: fix casing */
  providerRatio: number;
  /** TODO: fix casing */
  tokensPerBlock: number;
}

function createBaseParams(): Params {
  return { mintDenom: "", providerRatio: 0, tokensPerBlock: 0 };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.providerRatio !== 0) {
      writer.uint32(16).int64(message.providerRatio);
    }
    if (message.tokensPerBlock !== 0) {
      writer.uint32(24).int64(message.tokensPerBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mintDenom = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.providerRatio = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.tokensPerBlock = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? gt.String(object.mintDenom) : "",
      providerRatio: isSet(object.providerRatio) ? gt.Number(object.providerRatio) : 0,
      tokensPerBlock: isSet(object.tokensPerBlock) ? gt.Number(object.tokensPerBlock) : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.mintDenom !== "") {
      obj.mintDenom = message.mintDenom;
    }
    if (message.providerRatio !== 0) {
      obj.providerRatio = Math.round(message.providerRatio);
    }
    if (message.tokensPerBlock !== 0) {
      obj.tokensPerBlock = Math.round(message.tokensPerBlock);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.providerRatio = object.providerRatio ?? 0;
    message.tokensPerBlock = object.tokensPerBlock ?? 0;
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
