/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Feed } from "./feed";
import { Params } from "./params";

export const protobufPackage = "canine_chain.oracle";

export interface QueryParams {
}

export interface QueryParamsResponse {
  params: Params | undefined;
}

export interface QueryFeed {
  name: string;
}

export interface QueryFeedResponse {
  feed: Feed | undefined;
}

export interface QueryAllFeeds {
  pagination: PageRequest | undefined;
}

export interface QueryAllFeedsResponse {
  feed: Feed[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParams(): QueryParams {
  return {};
}

export const QueryParams = {
  encode(_: QueryParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParams();
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

  fromJSON(_: any): QueryParams {
    return {};
  },

  toJSON(_: QueryParams): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParams>, I>>(base?: I): QueryParams {
    return QueryParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParams>, I>>(_: I): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryFeed(): QueryFeed {
  return { name: "" };
}

export const QueryFeed = {
  encode(message: QueryFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryFeed {
    return { name: isSet(object.name) ? gt.String(object.name) : "" };
  },

  toJSON(message: QueryFeed): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFeed>, I>>(base?: I): QueryFeed {
    return QueryFeed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFeed>, I>>(object: I): QueryFeed {
    const message = createBaseQueryFeed();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryFeedResponse(): QueryFeedResponse {
  return { feed: undefined };
}

export const QueryFeedResponse = {
  encode(message: QueryFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feed !== undefined) {
      Feed.encode(message.feed, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feed = Feed.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFeedResponse {
    return { feed: isSet(object.feed) ? Feed.fromJSON(object.feed) : undefined };
  },

  toJSON(message: QueryFeedResponse): unknown {
    const obj: any = {};
    if (message.feed !== undefined) {
      obj.feed = Feed.toJSON(message.feed);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFeedResponse>, I>>(base?: I): QueryFeedResponse {
    return QueryFeedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFeedResponse>, I>>(object: I): QueryFeedResponse {
    const message = createBaseQueryFeedResponse();
    message.feed = (object.feed !== undefined && object.feed !== null) ? Feed.fromPartial(object.feed) : undefined;
    return message;
  },
};

function createBaseQueryAllFeeds(): QueryAllFeeds {
  return { pagination: undefined };
}

export const QueryAllFeeds = {
  encode(message: QueryAllFeeds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFeeds {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFeeds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllFeeds {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllFeeds): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllFeeds>, I>>(base?: I): QueryAllFeeds {
    return QueryAllFeeds.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllFeeds>, I>>(object: I): QueryAllFeeds {
    const message = createBaseQueryAllFeeds();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFeedsResponse(): QueryAllFeedsResponse {
  return { feed: [], pagination: undefined };
}

export const QueryAllFeedsResponse = {
  encode(message: QueryAllFeedsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feed) {
      Feed.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFeedsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFeedsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feed.push(Feed.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllFeedsResponse {
    return {
      feed: gt.Array.isArray(object?.feed) ? object.feed.map((e: any) => Feed.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFeedsResponse): unknown {
    const obj: any = {};
    if (message.feed?.length) {
      obj.feed = message.feed.map((e) => Feed.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllFeedsResponse>, I>>(base?: I): QueryAllFeedsResponse {
    return QueryAllFeedsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllFeedsResponse>, I>>(object: I): QueryAllFeedsResponse {
    const message = createBaseQueryAllFeedsResponse();
    message.feed = object.feed?.map((e) => Feed.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

export interface Query {
  Params(request: QueryParams): Promise<QueryParamsResponse>;
  /** Queries a Feed by name. */
  Feed(request: QueryFeed): Promise<QueryFeedResponse>;
  /** Queries a list of Feed items. */
  AllFeeds(request: QueryAllFeeds): Promise<QueryAllFeedsResponse>;
}

export const QueryServiceName = "canine_chain.oracle.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Feed = this.Feed.bind(this);
    this.AllFeeds = this.AllFeeds.bind(this);
  }
  Params(request: QueryParams): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Feed(request: QueryFeed): Promise<QueryFeedResponse> {
    const data = QueryFeed.encode(request).finish();
    const promise = this.rpc.request(this.service, "Feed", data);
    return promise.then((data) => QueryFeedResponse.decode(_m0.Reader.create(data)));
  }

  AllFeeds(request: QueryAllFeeds): Promise<QueryAllFeedsResponse> {
    const data = QueryAllFeeds.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllFeeds", data);
    return promise.then((data) => QueryAllFeedsResponse.decode(_m0.Reader.create(data)));
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
