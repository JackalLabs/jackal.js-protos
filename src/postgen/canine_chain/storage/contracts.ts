/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = "canine_chain.storage";

export interface Contracts {
  cid: string;
  priceamt: string;
  pricedenom: string;
  creator: string;
  merkle: string;
  signee: string;
  duration: string;
  filesize: string;
  fid: string;
  age: number;
}

function createBaseContracts(): Contracts {
  return {
    cid: "",
    priceamt: "",
    pricedenom: "",
    creator: "",
    merkle: "",
    signee: "",
    duration: "",
    filesize: "",
    fid: "",
    age: 0,
  };
}

export const Contracts = {
  encode(message: Contracts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    if (message.priceamt !== "") {
      writer.uint32(18).string(message.priceamt);
    }
    if (message.pricedenom !== "") {
      writer.uint32(26).string(message.pricedenom);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.merkle !== "") {
      writer.uint32(42).string(message.merkle);
    }
    if (message.signee !== "") {
      writer.uint32(50).string(message.signee);
    }
    if (message.duration !== "") {
      writer.uint32(58).string(message.duration);
    }
    if (message.filesize !== "") {
      writer.uint32(66).string(message.filesize);
    }
    if (message.fid !== "") {
      writer.uint32(74).string(message.fid);
    }
    if (message.age !== 0) {
      writer.uint32(80).int64(message.age);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contracts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContracts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cid = reader.string();
          break;
        case 2:
          message.priceamt = reader.string();
          break;
        case 3:
          message.pricedenom = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        case 5:
          message.merkle = reader.string();
          break;
        case 6:
          message.signee = reader.string();
          break;
        case 7:
          message.duration = reader.string();
          break;
        case 8:
          message.filesize = reader.string();
          break;
        case 9:
          message.fid = reader.string();
          break;
        case 10:
          message.age = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Contracts {
    return {
      cid: isSet(object.cid) ? String(object.cid) : "",
      priceamt: isSet(object.priceamt) ? String(object.priceamt) : "",
      pricedenom: isSet(object.pricedenom) ? String(object.pricedenom) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      merkle: isSet(object.merkle) ? String(object.merkle) : "",
      signee: isSet(object.signee) ? String(object.signee) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      filesize: isSet(object.filesize) ? String(object.filesize) : "",
      fid: isSet(object.fid) ? String(object.fid) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
    };
  },

  toJSON(message: Contracts): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    message.priceamt !== undefined && (obj.priceamt = message.priceamt);
    message.pricedenom !== undefined && (obj.pricedenom = message.pricedenom);
    message.creator !== undefined && (obj.creator = message.creator);
    message.merkle !== undefined && (obj.merkle = message.merkle);
    message.signee !== undefined && (obj.signee = message.signee);
    message.duration !== undefined && (obj.duration = message.duration);
    message.filesize !== undefined && (obj.filesize = message.filesize);
    message.fid !== undefined && (obj.fid = message.fid);
    message.age !== undefined && (obj.age = Math.round(message.age));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Contracts>, I>>(object: I): Contracts {
    const message = createBaseContracts();
    message.cid = object.cid ?? "";
    message.priceamt = object.priceamt ?? "";
    message.pricedenom = object.pricedenom ?? "";
    message.creator = object.creator ?? "";
    message.merkle = object.merkle ?? "";
    message.signee = object.signee ?? "";
    message.duration = object.duration ?? "";
    message.filesize = object.filesize ?? "";
    message.fid = object.fid ?? "";
    message.age = object.age ?? 0;
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
