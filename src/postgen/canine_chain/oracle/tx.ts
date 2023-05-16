/* eslint-disable */
import { grpc } from '@improbable-eng/grpc-web'
import { BrowserHeaders } from 'browser-headers'
import _m0 from 'protobufjs/minimal'

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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFeed {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: MsgCreateFeed): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFeed {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: MsgUpdateFeed): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.data !== undefined && (obj.data = message.data);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateFeedResponse>, I>>(_: I): MsgUpdateFeedResponse {
    const message = createBaseMsgUpdateFeedResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateFeed(request: DeepPartial<MsgCreateFeed>, metadata?: grpc.Metadata): Promise<MsgCreateFeedResponse>;
  UpdateFeed(request: DeepPartial<MsgUpdateFeed>, metadata?: grpc.Metadata): Promise<MsgUpdateFeedResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateFeed = this.CreateFeed.bind(this);
    this.UpdateFeed = this.UpdateFeed.bind(this);
  }

  CreateFeed(request: DeepPartial<MsgCreateFeed>, metadata?: grpc.Metadata): Promise<MsgCreateFeedResponse> {
    return this.rpc.unary(MsgCreateFeedDesc, MsgCreateFeed.fromPartial(request), metadata);
  }

  UpdateFeed(request: DeepPartial<MsgUpdateFeed>, metadata?: grpc.Metadata): Promise<MsgUpdateFeedResponse> {
    return this.rpc.unary(MsgUpdateFeedDesc, MsgUpdateFeed.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "canine_chain.oracle.Msg" };

export const MsgCreateFeedDesc: UnaryMethodDefinitionish = {
  methodName: "CreateFeed",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateFeed.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateFeedResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpdateFeedDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateFeed",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateFeed.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateFeedResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

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

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
