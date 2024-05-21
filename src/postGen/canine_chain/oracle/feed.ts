/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "canine_chain.oracle";

export interface Feed {
  owner: string;
  data: string;
  lastUpdate: Date | undefined;
  name: string;
}

function createBaseFeed(): Feed {
  return { owner: "", data: "", lastUpdate: undefined, name: "" };
}

export const Feed = {
  encode(message: Feed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    if (message.lastUpdate !== undefined) {
      Timestamp.encode(toTimestamp(message.lastUpdate), writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Feed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lastUpdate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Feed {
    return {
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      data: isSet(object.data) ? gt.String(object.data) : "",
      lastUpdate: isSet(object.lastUpdate) ? fromJsonTimestamp(object.lastUpdate) : undefined,
      name: isSet(object.name) ? gt.String(object.name) : "",
    };
  },

  toJSON(message: Feed): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    if (message.lastUpdate !== undefined) {
      obj.lastUpdate = message.lastUpdate.toISOString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Feed>, I>>(base?: I): Feed {
    return Feed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Feed>, I>>(object: I): Feed {
    const message = createBaseFeed();
    message.owner = object.owner ?? "";
    message.data = object.data ?? "";
    message.lastUpdate = object.lastUpdate ?? undefined;
    message.name = object.name ?? "";
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new gt.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof gt.Date) {
    return o;
  } else if (typeof o === "string") {
    return new gt.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
