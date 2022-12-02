/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.storage";

export interface Strays {
  cid: string;
  fid: string;
  signee: string;
  filesize: string;
  merkle: string;
}

function createBaseStrays(): Strays {
  return { cid: "", fid: "", signee: "", filesize: "", merkle: "" };
}

export const Strays = {
  encode(message: Strays, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    if (message.fid !== "") {
      writer.uint32(18).string(message.fid);
    }
    if (message.signee !== "") {
      writer.uint32(26).string(message.signee);
    }
    if (message.filesize !== "") {
      writer.uint32(34).string(message.filesize);
    }
    if (message.merkle !== "") {
      writer.uint32(42).string(message.merkle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Strays {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStrays();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cid = reader.string();
          break;
        case 2:
          message.fid = reader.string();
          break;
        case 3:
          message.signee = reader.string();
          break;
        case 4:
          message.filesize = reader.string();
          break;
        case 5:
          message.merkle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Strays {
    return {
      cid: isSet(object.cid) ? String(object.cid) : "",
      fid: isSet(object.fid) ? String(object.fid) : "",
      signee: isSet(object.signee) ? String(object.signee) : "",
      filesize: isSet(object.filesize) ? String(object.filesize) : "",
      merkle: isSet(object.merkle) ? String(object.merkle) : "",
    };
  },

  toJSON(message: Strays): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    message.fid !== undefined && (obj.fid = message.fid);
    message.signee !== undefined && (obj.signee = message.signee);
    message.filesize !== undefined && (obj.filesize = message.filesize);
    message.merkle !== undefined && (obj.merkle = message.merkle);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Strays>, I>>(object: I): Strays {
    const message = createBaseStrays();
    message.cid = object.cid ?? "";
    message.fid = object.fid ?? "";
    message.signee = object.signee ?? "";
    message.filesize = object.filesize ?? "";
    message.merkle = object.merkle ?? "";
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
