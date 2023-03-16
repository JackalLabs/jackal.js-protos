/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.storage";

/** Params defines the parameters for the module. */
export interface Params {
  depositAccount: string;
  proofWindow: number;
  /**
   * Chunk size of a file is divided into
   * The value cannot be smaller than 1 to avoid zero division
   */
  chunkSize: number;
  missesToBurn: number;
  priceFeed: string;
  /** Life span of a contract in blocks */
  maxContractAgeInBlocks: number;
  pricePerTbPerMonth: number;
}

function createBaseParams(): Params {
  return {
    depositAccount: "",
    proofWindow: 0,
    chunkSize: 0,
    missesToBurn: 0,
    priceFeed: "",
    maxContractAgeInBlocks: 0,
    pricePerTbPerMonth: 0,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAccount !== "") {
      writer.uint32(10).string(message.depositAccount);
    }
    if (message.proofWindow !== 0) {
      writer.uint32(16).int64(message.proofWindow);
    }
    if (message.chunkSize !== 0) {
      writer.uint32(24).int64(message.chunkSize);
    }
    if (message.missesToBurn !== 0) {
      writer.uint32(32).int64(message.missesToBurn);
    }
    if (message.priceFeed !== "") {
      writer.uint32(42).string(message.priceFeed);
    }
    if (message.maxContractAgeInBlocks !== 0) {
      writer.uint32(48).int64(message.maxContractAgeInBlocks);
    }
    if (message.pricePerTbPerMonth !== 0) {
      writer.uint32(56).int64(message.pricePerTbPerMonth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositAccount = reader.string();
          break;
        case 2:
          message.proofWindow = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.chunkSize = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.missesToBurn = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.priceFeed = reader.string();
          break;
        case 6:
          message.maxContractAgeInBlocks = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.pricePerTbPerMonth = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      depositAccount: isSet(object.depositAccount) ? String(object.depositAccount) : "",
      proofWindow: isSet(object.proofWindow) ? Number(object.proofWindow) : 0,
      chunkSize: isSet(object.chunkSize) ? Number(object.chunkSize) : 0,
      missesToBurn: isSet(object.missesToBurn) ? Number(object.missesToBurn) : 0,
      priceFeed: isSet(object.priceFeed) ? String(object.priceFeed) : "",
      maxContractAgeInBlocks: isSet(object.maxContractAgeInBlocks) ? Number(object.maxContractAgeInBlocks) : 0,
      pricePerTbPerMonth: isSet(object.pricePerTbPerMonth) ? Number(object.pricePerTbPerMonth) : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.depositAccount !== undefined && (obj.depositAccount = message.depositAccount);
    message.proofWindow !== undefined && (obj.proofWindow = Math.round(message.proofWindow));
    message.chunkSize !== undefined && (obj.chunkSize = Math.round(message.chunkSize));
    message.missesToBurn !== undefined && (obj.missesToBurn = Math.round(message.missesToBurn));
    message.priceFeed !== undefined && (obj.priceFeed = message.priceFeed);
    message.maxContractAgeInBlocks !== undefined &&
      (obj.maxContractAgeInBlocks = Math.round(message.maxContractAgeInBlocks));
    message.pricePerTbPerMonth !== undefined && (obj.pricePerTbPerMonth = Math.round(message.pricePerTbPerMonth));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.depositAccount = object.depositAccount ?? "";
    message.proofWindow = object.proofWindow ?? 0;
    message.chunkSize = object.chunkSize ?? 0;
    message.missesToBurn = object.missesToBurn ?? 0;
    message.priceFeed = object.priceFeed ?? "";
    message.maxContractAgeInBlocks = object.maxContractAgeInBlocks ?? 0;
    message.pricePerTbPerMonth = object.pricePerTbPerMonth ?? 0;
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
