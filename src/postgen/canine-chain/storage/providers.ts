/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "jackaldao.canine.storage";

export interface Providers {
  address: string;
  ip: string;
  totalspace: string;
  burnedContracts: string;
  creator: string;
  keybaseIdentity: string;
}

function createBaseProviders(): Providers {
  return { address: "", ip: "", totalspace: "", burnedContracts: "", creator: "", keybaseIdentity: "" };
}

export const Providers = {
  encode(message: Providers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.totalspace !== "") {
      writer.uint32(26).string(message.totalspace);
    }
    if (message.burnedContracts !== "") {
      writer.uint32(34).string(message.burnedContracts);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.keybaseIdentity !== "") {
      writer.uint32(50).string(message.keybaseIdentity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Providers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        case 3:
          message.totalspace = reader.string();
          break;
        case 4:
          message.burnedContracts = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        case 6:
          message.keybaseIdentity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Providers {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
      totalspace: isSet(object.totalspace) ? String(object.totalspace) : "",
      burnedContracts: isSet(object.burnedContracts) ? String(object.burnedContracts) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      keybaseIdentity: isSet(object.keybaseIdentity) ? String(object.keybaseIdentity) : "",
    };
  },

  toJSON(message: Providers): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.ip !== undefined && (obj.ip = message.ip);
    message.totalspace !== undefined && (obj.totalspace = message.totalspace);
    message.burnedContracts !== undefined && (obj.burnedContracts = message.burnedContracts);
    message.creator !== undefined && (obj.creator = message.creator);
    message.keybaseIdentity !== undefined && (obj.keybaseIdentity = message.keybaseIdentity);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Providers>, I>>(object: I): Providers {
    const message = createBaseProviders();
    message.address = object.address ?? "";
    message.ip = object.ip ?? "";
    message.totalspace = object.totalspace ?? "";
    message.burnedContracts = object.burnedContracts ?? "";
    message.creator = object.creator ?? "";
    message.keybaseIdentity = object.keybaseIdentity ?? "";
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
