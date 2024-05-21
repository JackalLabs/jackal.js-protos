/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.storage";

export interface Params {
  depositAccount: string;
  proofWindow: number;
  /** Chunk size of a file is divided into, min 1 */
  chunkSize: number;
  missesToBurn: number;
  priceFeed: string;
  /** Life span of a contract in blocks */
  maxContractAgeInBlocks: number;
  pricePerTbPerMonth: number;
  /** TODO: fix casing */
  attestFormSize: number;
  /** TODO: fix casing */
  attestMinToPass: number;
  /** TODO: fix casing */
  collateralPrice: number;
  checkWindow: number;
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
    attestFormSize: 0,
    attestMinToPass: 0,
    collateralPrice: 0,
    checkWindow: 0,
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
    if (message.attestFormSize !== 0) {
      writer.uint32(64).int64(message.attestFormSize);
    }
    if (message.attestMinToPass !== 0) {
      writer.uint32(72).int64(message.attestMinToPass);
    }
    if (message.collateralPrice !== 0) {
      writer.uint32(80).int64(message.collateralPrice);
    }
    if (message.checkWindow !== 0) {
      writer.uint32(88).int64(message.checkWindow);
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

          message.depositAccount = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.proofWindow = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chunkSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.missesToBurn = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.priceFeed = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.maxContractAgeInBlocks = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.pricePerTbPerMonth = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.attestFormSize = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.attestMinToPass = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.collateralPrice = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.checkWindow = longToNumber(reader.int64() as Long);
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
      depositAccount: isSet(object.depositAccount) ? gt.String(object.depositAccount) : "",
      proofWindow: isSet(object.proofWindow) ? gt.Number(object.proofWindow) : 0,
      chunkSize: isSet(object.chunkSize) ? gt.Number(object.chunkSize) : 0,
      missesToBurn: isSet(object.missesToBurn) ? gt.Number(object.missesToBurn) : 0,
      priceFeed: isSet(object.priceFeed) ? gt.String(object.priceFeed) : "",
      maxContractAgeInBlocks: isSet(object.maxContractAgeInBlocks) ? gt.Number(object.maxContractAgeInBlocks) : 0,
      pricePerTbPerMonth: isSet(object.pricePerTbPerMonth) ? gt.Number(object.pricePerTbPerMonth) : 0,
      attestFormSize: isSet(object.attestFormSize) ? gt.Number(object.attestFormSize) : 0,
      attestMinToPass: isSet(object.attestMinToPass) ? gt.Number(object.attestMinToPass) : 0,
      collateralPrice: isSet(object.collateralPrice) ? gt.Number(object.collateralPrice) : 0,
      checkWindow: isSet(object.checkWindow) ? gt.Number(object.checkWindow) : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.depositAccount !== "") {
      obj.depositAccount = message.depositAccount;
    }
    if (message.proofWindow !== 0) {
      obj.proofWindow = Math.round(message.proofWindow);
    }
    if (message.chunkSize !== 0) {
      obj.chunkSize = Math.round(message.chunkSize);
    }
    if (message.missesToBurn !== 0) {
      obj.missesToBurn = Math.round(message.missesToBurn);
    }
    if (message.priceFeed !== "") {
      obj.priceFeed = message.priceFeed;
    }
    if (message.maxContractAgeInBlocks !== 0) {
      obj.maxContractAgeInBlocks = Math.round(message.maxContractAgeInBlocks);
    }
    if (message.pricePerTbPerMonth !== 0) {
      obj.pricePerTbPerMonth = Math.round(message.pricePerTbPerMonth);
    }
    if (message.attestFormSize !== 0) {
      obj.attestFormSize = Math.round(message.attestFormSize);
    }
    if (message.attestMinToPass !== 0) {
      obj.attestMinToPass = Math.round(message.attestMinToPass);
    }
    if (message.collateralPrice !== 0) {
      obj.collateralPrice = Math.round(message.collateralPrice);
    }
    if (message.checkWindow !== 0) {
      obj.checkWindow = Math.round(message.checkWindow);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
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
    message.attestFormSize = object.attestFormSize ?? 0;
    message.attestMinToPass = object.attestMinToPass ?? 0;
    message.collateralPrice = object.collateralPrice ?? 0;
    message.checkWindow = object.checkWindow ?? 0;
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