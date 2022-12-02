/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.storage";

export interface FidCid {
  fid: string;
  cids: string;
}

function createBaseFidCid(): FidCid {
  return { fid: "", cids: "" };
}

export const FidCid = {
  encode(message: FidCid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fid !== "") {
      writer.uint32(10).string(message.fid);
    }
    if (message.cids !== "") {
      writer.uint32(18).string(message.cids);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FidCid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFidCid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fid = reader.string();
          break;
        case 2:
          message.cids = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FidCid {
    return { fid: isSet(object.fid) ? String(object.fid) : "", cids: isSet(object.cids) ? String(object.cids) : "" };
  },

  toJSON(message: FidCid): unknown {
    const obj: any = {};
    message.fid !== undefined && (obj.fid = message.fid);
    message.cids !== undefined && (obj.cids = message.cids);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FidCid>, I>>(object: I): FidCid {
    const message = createBaseFidCid();
    message.fid = object.fid ?? "";
    message.cids = object.cids ?? "";
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
