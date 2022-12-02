/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "jackaldao.canine.storage";

export interface PayBlocks {
  blockid: string;
  bytes: string;
  blocktype: string;
  blocknum: string;
}

function createBasePayBlocks(): PayBlocks {
  return { blockid: "", bytes: "", blocktype: "", blocknum: "" };
}

export const PayBlocks = {
  encode(message: PayBlocks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockid !== "") {
      writer.uint32(10).string(message.blockid);
    }
    if (message.bytes !== "") {
      writer.uint32(18).string(message.bytes);
    }
    if (message.blocktype !== "") {
      writer.uint32(26).string(message.blocktype);
    }
    if (message.blocknum !== "") {
      writer.uint32(34).string(message.blocknum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PayBlocks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayBlocks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockid = reader.string();
          break;
        case 2:
          message.bytes = reader.string();
          break;
        case 3:
          message.blocktype = reader.string();
          break;
        case 4:
          message.blocknum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PayBlocks {
    return {
      blockid: isSet(object.blockid) ? String(object.blockid) : "",
      bytes: isSet(object.bytes) ? String(object.bytes) : "",
      blocktype: isSet(object.blocktype) ? String(object.blocktype) : "",
      blocknum: isSet(object.blocknum) ? String(object.blocknum) : "",
    };
  },

  toJSON(message: PayBlocks): unknown {
    const obj: any = {};
    message.blockid !== undefined && (obj.blockid = message.blockid);
    message.bytes !== undefined && (obj.bytes = message.bytes);
    message.blocktype !== undefined && (obj.blocktype = message.blocktype);
    message.blocknum !== undefined && (obj.blocknum = message.blocknum);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PayBlocks>, I>>(object: I): PayBlocks {
    const message = createBasePayBlocks();
    message.blockid = object.blockid ?? "";
    message.bytes = object.bytes ?? "";
    message.blocktype = object.blocktype ?? "";
    message.blocknum = object.blocknum ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
