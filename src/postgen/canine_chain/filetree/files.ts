/* eslint-disable */
import _m0 from 'protobufjs/minimal'

export const protobufPackage = "canine_chain.filetree";

export interface Files {
  address: string;
  contents: string;
  owner: string;
  viewingAccess: string;
  editAccess: string;
  trackingNumber: string;
}

function createBaseFiles(): Files {
  return { address: "", contents: "", owner: "", viewingAccess: "", editAccess: "", trackingNumber: "" };
}

export const Files = {
  encode(message: Files, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.contents !== "") {
      writer.uint32(18).string(message.contents);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.viewingAccess !== "") {
      writer.uint32(34).string(message.viewingAccess);
    }
    if (message.editAccess !== "") {
      writer.uint32(42).string(message.editAccess);
    }
    if (message.trackingNumber !== "") {
      writer.uint32(50).string(message.trackingNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Files {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.contents = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.viewingAccess = reader.string();
          break;
        case 5:
          message.editAccess = reader.string();
          break;
        case 6:
          message.trackingNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Files {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      contents: isSet(object.contents) ? String(object.contents) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      viewingAccess: isSet(object.viewingAccess) ? String(object.viewingAccess) : "",
      editAccess: isSet(object.editAccess) ? String(object.editAccess) : "",
      trackingNumber: isSet(object.trackingNumber) ? String(object.trackingNumber) : "",
    };
  },

  toJSON(message: Files): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.contents !== undefined && (obj.contents = message.contents);
    message.owner !== undefined && (obj.owner = message.owner);
    message.viewingAccess !== undefined && (obj.viewingAccess = message.viewingAccess);
    message.editAccess !== undefined && (obj.editAccess = message.editAccess);
    message.trackingNumber !== undefined && (obj.trackingNumber = message.trackingNumber);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Files>, I>>(object: I): Files {
    const message = createBaseFiles();
    message.address = object.address ?? "";
    message.contents = object.contents ?? "";
    message.owner = object.owner ?? "";
    message.viewingAccess = object.viewingAccess ?? "";
    message.editAccess = object.editAccess ?? "";
    message.trackingNumber = object.trackingNumber ?? "";
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
