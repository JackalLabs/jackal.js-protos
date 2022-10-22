/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "jackaldao.canine.storage";

export interface FidCid {
  fid: string;
  cids: string;
}

const baseFidCid: object = { fid: "", cids: "" };

export const FidCid = {
  encode(message: FidCid, writer: Writer = Writer.create()): Writer {
    if (message.fid !== "") {
      writer.uint32(10).string(message.fid);
    }
    if (message.cids !== "") {
      writer.uint32(18).string(message.cids);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FidCid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFidCid } as FidCid;
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
    const message = { ...baseFidCid } as FidCid;
    if (object.fid !== undefined && object.fid !== null) {
      message.fid = String(object.fid);
    } else {
      message.fid = "";
    }
    if (object.cids !== undefined && object.cids !== null) {
      message.cids = String(object.cids);
    } else {
      message.cids = "";
    }
    return message;
  },

  toJSON(message: FidCid): unknown {
    const obj: any = {};
    message.fid !== undefined && (obj.fid = message.fid);
    message.cids !== undefined && (obj.cids = message.cids);
    return obj;
  },

  fromPartial(object: DeepPartial<FidCid>): FidCid {
    const message = { ...baseFidCid } as FidCid;
    if (object.fid !== undefined && object.fid !== null) {
      message.fid = object.fid;
    } else {
      message.fid = "";
    }
    if (object.cids !== undefined && object.cids !== null) {
      message.cids = object.cids;
    } else {
      message.cids = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
