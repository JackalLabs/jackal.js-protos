/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "jackaldao.canine.storage";

export interface ClientUsage {
  address: string;
  usage: string;
}

function createBaseClientUsage(): ClientUsage {
  return { address: "", usage: "" };
}

export const ClientUsage = {
  encode(message: ClientUsage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.usage !== "") {
      writer.uint32(18).string(message.usage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientUsage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.usage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClientUsage {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      usage: isSet(object.usage) ? String(object.usage) : "",
    };
  },

  toJSON(message: ClientUsage): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.usage !== undefined && (obj.usage = message.usage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClientUsage>, I>>(object: I): ClientUsage {
    const message = createBaseClientUsage();
    message.address = object.address ?? "";
    message.usage = object.usage ?? "";
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
