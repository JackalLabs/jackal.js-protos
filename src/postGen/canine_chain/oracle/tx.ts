/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.oracle";

export interface MsgCreateFeed {
  creator: string;
  name: string;
}

export interface MsgCreateFeedResponse {
}

export interface MsgUpdateFeed {
  creator: string;
  name: string;
  data: string;
}

export interface MsgUpdateFeedResponse {
}

function createBaseMsgCreateFeed(): MsgCreateFeed {
  return { creator: "", name: "" };
}

export const MsgCreateFeed = {
  encode(message: MsgCreateFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFeed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MsgCreateFeed {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      name: isSet(object.name) ? gt.String(object.name) : "",
    };
  },

  toJSON(message: MsgCreateFeed): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateFeed>, I>>(base?: I): MsgCreateFeed {
    return MsgCreateFeed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateFeed>, I>>(object: I): MsgCreateFeed {
    const message = createBaseMsgCreateFeed();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgCreateFeedResponse(): MsgCreateFeedResponse {
  return {};
}

export const MsgCreateFeedResponse = {
  encode(_: MsgCreateFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFeedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCreateFeedResponse {
    return {};
  },

  toJSON(_: MsgCreateFeedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateFeedResponse>, I>>(base?: I): MsgCreateFeedResponse {
    return MsgCreateFeedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateFeedResponse>, I>>(_: I): MsgCreateFeedResponse {
    const message = createBaseMsgCreateFeedResponse();
    return message;
  },
};

function createBaseMsgUpdateFeed(): MsgUpdateFeed {
  return { creator: "", name: "", data: "" };
}

export const MsgUpdateFeed = {
  encode(message: MsgUpdateFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFeed {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      name: isSet(object.name) ? gt.String(object.name) : "",
      data: isSet(object.data) ? gt.String(object.data) : "",
    };
  },

  toJSON(message: MsgUpdateFeed): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateFeed>, I>>(base?: I): MsgUpdateFeed {
    return MsgUpdateFeed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateFeed>, I>>(object: I): MsgUpdateFeed {
    const message = createBaseMsgUpdateFeed();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseMsgUpdateFeedResponse(): MsgUpdateFeedResponse {
  return {};
}

export const MsgUpdateFeedResponse = {
  encode(_: MsgUpdateFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateFeedResponse {
    return {};
  },

  toJSON(_: MsgUpdateFeedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateFeedResponse>, I>>(base?: I): MsgUpdateFeedResponse {
    return MsgUpdateFeedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateFeedResponse>, I>>(_: I): MsgUpdateFeedResponse {
    const message = createBaseMsgUpdateFeedResponse();
    return message;
  },
};

export interface Msg {
  CreateFeed(request: MsgCreateFeed): Promise<MsgCreateFeedResponse>;
  UpdateFeed(request: MsgUpdateFeed): Promise<MsgUpdateFeedResponse>;
}

export const MsgServiceName = "canine_chain.oracle.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.CreateFeed = this.CreateFeed.bind(this);
    this.UpdateFeed = this.UpdateFeed.bind(this);
  }
  CreateFeed(request: MsgCreateFeed): Promise<MsgCreateFeedResponse> {
    const data = MsgCreateFeed.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateFeed", data);
    return promise.then((data) => MsgCreateFeedResponse.decode(_m0.Reader.create(data)));
  }

  UpdateFeed(request: MsgUpdateFeed): Promise<MsgUpdateFeedResponse> {
    const data = MsgUpdateFeed.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateFeed", data);
    return promise.then((data) => MsgUpdateFeedResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}