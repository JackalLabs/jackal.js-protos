/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.notifications";

export interface NotiCounter {
  address: string;
  counter: number;
  /** TODO: fix casing */
  blockedSenders: string;
}

function createBaseNotiCounter(): NotiCounter {
  return { address: "", counter: 0, blockedSenders: "" };
}

export const NotiCounter = {
  encode(message: NotiCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.counter !== 0) {
      writer.uint32(16).uint64(message.counter);
    }
    if (message.blockedSenders !== "") {
      writer.uint32(26).string(message.blockedSenders);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotiCounter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotiCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.counter = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.blockedSenders = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotiCounter {
    return {
      address: isSet(object.address) ? gt.String(object.address) : "",
      counter: isSet(object.counter) ? gt.Number(object.counter) : 0,
      blockedSenders: isSet(object.blockedSenders) ? gt.String(object.blockedSenders) : "",
    };
  },

  toJSON(message: NotiCounter): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.counter !== 0) {
      obj.counter = Math.round(message.counter);
    }
    if (message.blockedSenders !== "") {
      obj.blockedSenders = message.blockedSenders;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NotiCounter>, I>>(base?: I): NotiCounter {
    return NotiCounter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NotiCounter>, I>>(object: I): NotiCounter {
    const message = createBaseNotiCounter();
    message.address = object.address ?? "";
    message.counter = object.counter ?? 0;
    message.blockedSenders = object.blockedSenders ?? "";
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

function longToNumber(long: Long): number {
  if (long.gt(gt.Number.MAX_SAFE_INTEGER)) {
    throw new gt.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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
