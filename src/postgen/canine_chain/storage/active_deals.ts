/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.storage";

export interface ActiveDeals {
  cid: string;
  signee: string;
  provider: string;
  startblock: string;
  endblock: number;
  filesize: string;
  proofverified: string;
  proofsmissed: string;
  blocktoprove: string;
  creator: string;
  merkle: string;
  fid: string;
}

function createBaseActiveDeals(): ActiveDeals {
  return {
    cid: "",
    signee: "",
    provider: "",
    startblock: "",
    endblock: 0,
    filesize: "",
    proofverified: "",
    proofsmissed: "",
    blocktoprove: "",
    creator: "",
    merkle: "",
    fid: "",
  };
}

export const ActiveDeals = {
  encode(message: ActiveDeals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    if (message.signee !== "") {
      writer.uint32(18).string(message.signee);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.startblock !== "") {
      writer.uint32(34).string(message.startblock);
    }
    if (message.endblock !== 0) {
      writer.uint32(40).int64(message.endblock);
    }
    if (message.filesize !== "") {
      writer.uint32(50).string(message.filesize);
    }
    if (message.proofverified !== "") {
      writer.uint32(58).string(message.proofverified);
    }
    if (message.proofsmissed !== "") {
      writer.uint32(66).string(message.proofsmissed);
    }
    if (message.blocktoprove !== "") {
      writer.uint32(74).string(message.blocktoprove);
    }
    if (message.creator !== "") {
      writer.uint32(82).string(message.creator);
    }
    if (message.merkle !== "") {
      writer.uint32(90).string(message.merkle);
    }
    if (message.fid !== "") {
      writer.uint32(98).string(message.fid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveDeals {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveDeals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cid = reader.string();
          break;
        case 2:
          message.signee = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 4:
          message.startblock = reader.string();
          break;
        case 5:
          message.endblock = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.filesize = reader.string();
          break;
        case 7:
          message.proofverified = reader.string();
          break;
        case 8:
          message.proofsmissed = reader.string();
          break;
        case 9:
          message.blocktoprove = reader.string();
          break;
        case 10:
          message.creator = reader.string();
          break;
        case 11:
          message.merkle = reader.string();
          break;
        case 12:
          message.fid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActiveDeals {
    return {
      cid: isSet(object.cid) ? String(object.cid) : "",
      signee: isSet(object.signee) ? String(object.signee) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      startblock: isSet(object.startblock) ? String(object.startblock) : "",
      endblock: isSet(object.endblock) ? Number(object.endblock) : 0,
      filesize: isSet(object.filesize) ? String(object.filesize) : "",
      proofverified: isSet(object.proofverified) ? String(object.proofverified) : "",
      proofsmissed: isSet(object.proofsmissed) ? String(object.proofsmissed) : "",
      blocktoprove: isSet(object.blocktoprove) ? String(object.blocktoprove) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      merkle: isSet(object.merkle) ? String(object.merkle) : "",
      fid: isSet(object.fid) ? String(object.fid) : "",
    };
  },

  toJSON(message: ActiveDeals): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    message.signee !== undefined && (obj.signee = message.signee);
    message.provider !== undefined && (obj.provider = message.provider);
    message.startblock !== undefined && (obj.startblock = message.startblock);
    message.endblock !== undefined && (obj.endblock = Math.round(message.endblock));
    message.filesize !== undefined && (obj.filesize = message.filesize);
    message.proofverified !== undefined && (obj.proofverified = message.proofverified);
    message.proofsmissed !== undefined && (obj.proofsmissed = message.proofsmissed);
    message.blocktoprove !== undefined && (obj.blocktoprove = message.blocktoprove);
    message.creator !== undefined && (obj.creator = message.creator);
    message.merkle !== undefined && (obj.merkle = message.merkle);
    message.fid !== undefined && (obj.fid = message.fid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActiveDeals>, I>>(object: I): ActiveDeals {
    const message = createBaseActiveDeals();
    message.cid = object.cid ?? "";
    message.signee = object.signee ?? "";
    message.provider = object.provider ?? "";
    message.startblock = object.startblock ?? "";
    message.endblock = object.endblock ?? 0;
    message.filesize = object.filesize ?? "";
    message.proofverified = object.proofverified ?? "";
    message.proofsmissed = object.proofsmissed ?? "";
    message.blocktoprove = object.blocktoprove ?? "";
    message.creator = object.creator ?? "";
    message.merkle = object.merkle ?? "";
    message.fid = object.fid ?? "";
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
