/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "canine_chain.storage";

export interface StoragePaymentInfo {
  start: Date | undefined;
  end: Date | undefined;
  spaceAvailable: number;
  spaceUsed: number;
  address: string;
}

function createBaseStoragePaymentInfo(): StoragePaymentInfo {
  return { start: undefined, end: undefined, spaceAvailable: 0, spaceUsed: 0, address: "" };
}

export const StoragePaymentInfo = {
  encode(message: StoragePaymentInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined) {
      Timestamp.encode(toTimestamp(message.start), writer.uint32(10).fork()).ldelim();
    }
    if (message.end !== undefined) {
      Timestamp.encode(toTimestamp(message.end), writer.uint32(18).fork()).ldelim();
    }
    if (message.spaceAvailable !== 0) {
      writer.uint32(24).int64(message.spaceAvailable);
    }
    if (message.spaceUsed !== 0) {
      writer.uint32(32).int64(message.spaceUsed);
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoragePaymentInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoragePaymentInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.end = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.spaceAvailable = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.spaceUsed = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoragePaymentInfo {
    return {
      start: isSet(object.start) ? fromJsonTimestamp(object.start) : undefined,
      end: isSet(object.end) ? fromJsonTimestamp(object.end) : undefined,
      spaceAvailable: isSet(object.spaceAvailable) ? Number(object.spaceAvailable) : 0,
      spaceUsed: isSet(object.spaceUsed) ? Number(object.spaceUsed) : 0,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: StoragePaymentInfo): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start.toISOString());
    message.end !== undefined && (obj.end = message.end.toISOString());
    message.spaceAvailable !== undefined && (obj.spaceAvailable = Math.round(message.spaceAvailable));
    message.spaceUsed !== undefined && (obj.spaceUsed = Math.round(message.spaceUsed));
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoragePaymentInfo>, I>>(object: I): StoragePaymentInfo {
    const message = createBaseStoragePaymentInfo();
    message.start = object.start ?? undefined;
    message.end = object.end ?? undefined;
    message.spaceAvailable = object.spaceAvailable ?? 0;
    message.spaceUsed = object.spaceUsed ?? 0;
    message.address = object.address ?? "";
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
