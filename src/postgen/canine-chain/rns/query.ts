/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Bids } from "./bids";
import { Forsale } from "./forsale";
import { Init } from "./init";
import { Names } from "./names";
import { Params } from "./params";
import { Whois } from "./whois";

export const protobufPackage = "jackaldao.canine.rns";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetWhoisRequest {
  index: string;
}

export interface QueryGetWhoisResponse {
  whois: Whois | undefined;
}

export interface QueryAllWhoisRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWhoisResponse {
  whois: Whois[];
  pagination: PageResponse | undefined;
}

export interface QueryGetNamesRequest {
  index: string;
}

export interface QueryGetNamesResponse {
  names: Names | undefined;
}

export interface QueryAllNamesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllNamesResponse {
  names: Names[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBidsRequest {
  index: string;
}

export interface QueryGetBidsResponse {
  bids: Bids | undefined;
}

export interface QueryAllBidsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBidsResponse {
  bids: Bids[];
  pagination: PageResponse | undefined;
}

export interface QueryGetForsaleRequest {
  name: string;
}

export interface QueryGetForsaleResponse {
  forsale: Forsale | undefined;
}

export interface QueryAllForsaleRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllForsaleResponse {
  forsale: Forsale[];
  pagination: PageResponse | undefined;
}

export interface QueryGetInitRequest {
  address: string;
}

export interface QueryGetInitResponse {
  init: boolean;
}

export interface QueryAllInitRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllInitResponse {
  init: Init[];
  pagination: PageResponse | undefined;
}

export interface QueryListOwnedNamesRequest {
  address: string;
  pagination: PageRequest | undefined;
}

export interface QueryListOwnedNamesResponse {
  names: Names[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetWhoisRequest(): QueryGetWhoisRequest {
  return { index: "" };
}

export const QueryGetWhoisRequest = {
  encode(message: QueryGetWhoisRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhoisRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhoisRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhoisRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetWhoisRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWhoisRequest>, I>>(object: I): QueryGetWhoisRequest {
    const message = createBaseQueryGetWhoisRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetWhoisResponse(): QueryGetWhoisResponse {
  return { whois: undefined };
}

export const QueryGetWhoisResponse = {
  encode(message: QueryGetWhoisResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whois !== undefined) {
      Whois.encode(message.whois, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhoisResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhoisResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whois = Whois.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhoisResponse {
    return { whois: isSet(object.whois) ? Whois.fromJSON(object.whois) : undefined };
  },

  toJSON(message: QueryGetWhoisResponse): unknown {
    const obj: any = {};
    message.whois !== undefined && (obj.whois = message.whois ? Whois.toJSON(message.whois) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWhoisResponse>, I>>(object: I): QueryGetWhoisResponse {
    const message = createBaseQueryGetWhoisResponse();
    message.whois = (object.whois !== undefined && object.whois !== null) ? Whois.fromPartial(object.whois) : undefined;
    return message;
  },
};

function createBaseQueryAllWhoisRequest(): QueryAllWhoisRequest {
  return { pagination: undefined };
}

export const QueryAllWhoisRequest = {
  encode(message: QueryAllWhoisRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhoisRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhoisRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhoisRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllWhoisRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWhoisRequest>, I>>(object: I): QueryAllWhoisRequest {
    const message = createBaseQueryAllWhoisRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWhoisResponse(): QueryAllWhoisResponse {
  return { whois: [], pagination: undefined };
}

export const QueryAllWhoisResponse = {
  encode(message: QueryAllWhoisResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.whois) {
      Whois.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhoisResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhoisResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whois.push(Whois.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhoisResponse {
    return {
      whois: Array.isArray(object?.whois) ? object.whois.map((e: any) => Whois.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllWhoisResponse): unknown {
    const obj: any = {};
    if (message.whois) {
      obj.whois = message.whois.map((e) => e ? Whois.toJSON(e) : undefined);
    } else {
      obj.whois = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWhoisResponse>, I>>(object: I): QueryAllWhoisResponse {
    const message = createBaseQueryAllWhoisResponse();
    message.whois = object.whois?.map((e) => Whois.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetNamesRequest(): QueryGetNamesRequest {
  return { index: "" };
}

export const QueryGetNamesRequest = {
  encode(message: QueryGetNamesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNamesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNamesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNamesRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetNamesRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetNamesRequest>, I>>(object: I): QueryGetNamesRequest {
    const message = createBaseQueryGetNamesRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetNamesResponse(): QueryGetNamesResponse {
  return { names: undefined };
}

export const QueryGetNamesResponse = {
  encode(message: QueryGetNamesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.names !== undefined) {
      Names.encode(message.names, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNamesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.names = Names.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNamesResponse {
    return { names: isSet(object.names) ? Names.fromJSON(object.names) : undefined };
  },

  toJSON(message: QueryGetNamesResponse): unknown {
    const obj: any = {};
    message.names !== undefined && (obj.names = message.names ? Names.toJSON(message.names) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetNamesResponse>, I>>(object: I): QueryGetNamesResponse {
    const message = createBaseQueryGetNamesResponse();
    message.names = (object.names !== undefined && object.names !== null) ? Names.fromPartial(object.names) : undefined;
    return message;
  },
};

function createBaseQueryAllNamesRequest(): QueryAllNamesRequest {
  return { pagination: undefined };
}

export const QueryAllNamesRequest = {
  encode(message: QueryAllNamesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNamesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNamesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNamesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllNamesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllNamesRequest>, I>>(object: I): QueryAllNamesRequest {
    const message = createBaseQueryAllNamesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNamesResponse(): QueryAllNamesResponse {
  return { names: [], pagination: undefined };
}

export const QueryAllNamesResponse = {
  encode(message: QueryAllNamesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.names) {
      Names.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNamesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.names.push(Names.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNamesResponse {
    return {
      names: Array.isArray(object?.names) ? object.names.map((e: any) => Names.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllNamesResponse): unknown {
    const obj: any = {};
    if (message.names) {
      obj.names = message.names.map((e) => e ? Names.toJSON(e) : undefined);
    } else {
      obj.names = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllNamesResponse>, I>>(object: I): QueryAllNamesResponse {
    const message = createBaseQueryAllNamesResponse();
    message.names = object.names?.map((e) => Names.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetBidsRequest(): QueryGetBidsRequest {
  return { index: "" };
}

export const QueryGetBidsRequest = {
  encode(message: QueryGetBidsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBidsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBidsRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetBidsRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBidsRequest>, I>>(object: I): QueryGetBidsRequest {
    const message = createBaseQueryGetBidsRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetBidsResponse(): QueryGetBidsResponse {
  return { bids: undefined };
}

export const QueryGetBidsResponse = {
  encode(message: QueryGetBidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bids !== undefined) {
      Bids.encode(message.bids, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids = Bids.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBidsResponse {
    return { bids: isSet(object.bids) ? Bids.fromJSON(object.bids) : undefined };
  },

  toJSON(message: QueryGetBidsResponse): unknown {
    const obj: any = {};
    message.bids !== undefined && (obj.bids = message.bids ? Bids.toJSON(message.bids) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBidsResponse>, I>>(object: I): QueryGetBidsResponse {
    const message = createBaseQueryGetBidsResponse();
    message.bids = (object.bids !== undefined && object.bids !== null) ? Bids.fromPartial(object.bids) : undefined;
    return message;
  },
};

function createBaseQueryAllBidsRequest(): QueryAllBidsRequest {
  return { pagination: undefined };
}

export const QueryAllBidsRequest = {
  encode(message: QueryAllBidsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBidsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBidsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllBidsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBidsRequest>, I>>(object: I): QueryAllBidsRequest {
    const message = createBaseQueryAllBidsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBidsResponse(): QueryAllBidsResponse {
  return { bids: [], pagination: undefined };
}

export const QueryAllBidsResponse = {
  encode(message: QueryAllBidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bids) {
      Bids.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids.push(Bids.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBidsResponse {
    return {
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => Bids.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllBidsResponse): unknown {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map((e) => e ? Bids.toJSON(e) : undefined);
    } else {
      obj.bids = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBidsResponse>, I>>(object: I): QueryAllBidsResponse {
    const message = createBaseQueryAllBidsResponse();
    message.bids = object.bids?.map((e) => Bids.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetForsaleRequest(): QueryGetForsaleRequest {
  return { name: "" };
}

export const QueryGetForsaleRequest = {
  encode(message: QueryGetForsaleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetForsaleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetForsaleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetForsaleRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryGetForsaleRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetForsaleRequest>, I>>(object: I): QueryGetForsaleRequest {
    const message = createBaseQueryGetForsaleRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryGetForsaleResponse(): QueryGetForsaleResponse {
  return { forsale: undefined };
}

export const QueryGetForsaleResponse = {
  encode(message: QueryGetForsaleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.forsale !== undefined) {
      Forsale.encode(message.forsale, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetForsaleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetForsaleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forsale = Forsale.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetForsaleResponse {
    return { forsale: isSet(object.forsale) ? Forsale.fromJSON(object.forsale) : undefined };
  },

  toJSON(message: QueryGetForsaleResponse): unknown {
    const obj: any = {};
    message.forsale !== undefined && (obj.forsale = message.forsale ? Forsale.toJSON(message.forsale) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetForsaleResponse>, I>>(object: I): QueryGetForsaleResponse {
    const message = createBaseQueryGetForsaleResponse();
    message.forsale = (object.forsale !== undefined && object.forsale !== null)
      ? Forsale.fromPartial(object.forsale)
      : undefined;
    return message;
  },
};

function createBaseQueryAllForsaleRequest(): QueryAllForsaleRequest {
  return { pagination: undefined };
}

export const QueryAllForsaleRequest = {
  encode(message: QueryAllForsaleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllForsaleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllForsaleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllForsaleRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllForsaleRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllForsaleRequest>, I>>(object: I): QueryAllForsaleRequest {
    const message = createBaseQueryAllForsaleRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllForsaleResponse(): QueryAllForsaleResponse {
  return { forsale: [], pagination: undefined };
}

export const QueryAllForsaleResponse = {
  encode(message: QueryAllForsaleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.forsale) {
      Forsale.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllForsaleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllForsaleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forsale.push(Forsale.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllForsaleResponse {
    return {
      forsale: Array.isArray(object?.forsale) ? object.forsale.map((e: any) => Forsale.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllForsaleResponse): unknown {
    const obj: any = {};
    if (message.forsale) {
      obj.forsale = message.forsale.map((e) => e ? Forsale.toJSON(e) : undefined);
    } else {
      obj.forsale = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllForsaleResponse>, I>>(object: I): QueryAllForsaleResponse {
    const message = createBaseQueryAllForsaleResponse();
    message.forsale = object.forsale?.map((e) => Forsale.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetInitRequest(): QueryGetInitRequest {
  return { address: "" };
}

export const QueryGetInitRequest = {
  encode(message: QueryGetInitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInitRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetInitRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetInitRequest>, I>>(object: I): QueryGetInitRequest {
    const message = createBaseQueryGetInitRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetInitResponse(): QueryGetInitResponse {
  return { init: false };
}

export const QueryGetInitResponse = {
  encode(message: QueryGetInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.init === true) {
      writer.uint32(8).bool(message.init);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.init = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInitResponse {
    return { init: isSet(object.init) ? Boolean(object.init) : false };
  },

  toJSON(message: QueryGetInitResponse): unknown {
    const obj: any = {};
    message.init !== undefined && (obj.init = message.init);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetInitResponse>, I>>(object: I): QueryGetInitResponse {
    const message = createBaseQueryGetInitResponse();
    message.init = object.init ?? false;
    return message;
  },
};

function createBaseQueryAllInitRequest(): QueryAllInitRequest {
  return { pagination: undefined };
}

export const QueryAllInitRequest = {
  encode(message: QueryAllInitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllInitRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllInitRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllInitRequest>, I>>(object: I): QueryAllInitRequest {
    const message = createBaseQueryAllInitRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllInitResponse(): QueryAllInitResponse {
  return { init: [], pagination: undefined };
}

export const QueryAllInitResponse = {
  encode(message: QueryAllInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.init) {
      Init.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.init.push(Init.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllInitResponse {
    return {
      init: Array.isArray(object?.init) ? object.init.map((e: any) => Init.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllInitResponse): unknown {
    const obj: any = {};
    if (message.init) {
      obj.init = message.init.map((e) => e ? Init.toJSON(e) : undefined);
    } else {
      obj.init = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllInitResponse>, I>>(object: I): QueryAllInitResponse {
    const message = createBaseQueryAllInitResponse();
    message.init = object.init?.map((e) => Init.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryListOwnedNamesRequest(): QueryListOwnedNamesRequest {
  return { address: "", pagination: undefined };
}

export const QueryListOwnedNamesRequest = {
  encode(message: QueryListOwnedNamesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListOwnedNamesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListOwnedNamesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListOwnedNamesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryListOwnedNamesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListOwnedNamesRequest>, I>>(object: I): QueryListOwnedNamesRequest {
    const message = createBaseQueryListOwnedNamesRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryListOwnedNamesResponse(): QueryListOwnedNamesResponse {
  return { names: [], pagination: undefined };
}

export const QueryListOwnedNamesResponse = {
  encode(message: QueryListOwnedNamesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.names) {
      Names.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListOwnedNamesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListOwnedNamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.names.push(Names.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListOwnedNamesResponse {
    return {
      names: Array.isArray(object?.names) ? object.names.map((e: any) => Names.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryListOwnedNamesResponse): unknown {
    const obj: any = {};
    if (message.names) {
      obj.names = message.names.map((e) => e ? Names.toJSON(e) : undefined);
    } else {
      obj.names = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListOwnedNamesResponse>, I>>(object: I): QueryListOwnedNamesResponse {
    const message = createBaseQueryListOwnedNamesResponse();
    message.names = object.names?.map((e) => Names.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a Name by index. */
  Names(request: DeepPartial<QueryGetNamesRequest>, metadata?: grpc.Metadata): Promise<QueryGetNamesResponse>;
  /** Queries a list of Names. */
  NamesAll(request: DeepPartial<QueryAllNamesRequest>, metadata?: grpc.Metadata): Promise<QueryAllNamesResponse>;
  /** Queries a Bid by index. */
  Bids(request: DeepPartial<QueryGetBidsRequest>, metadata?: grpc.Metadata): Promise<QueryGetBidsResponse>;
  /** Queries a list of Bids. */
  BidsAll(request: DeepPartial<QueryAllBidsRequest>, metadata?: grpc.Metadata): Promise<QueryAllBidsResponse>;
  /** Queries a Listing by index. */
  Forsale(request: DeepPartial<QueryGetForsaleRequest>, metadata?: grpc.Metadata): Promise<QueryGetForsaleResponse>;
  /** Queries all Listings. */
  ForsaleAll(request: DeepPartial<QueryAllForsaleRequest>, metadata?: grpc.Metadata): Promise<QueryAllForsaleResponse>;
  /** Queries a Init by index. */
  Init(request: DeepPartial<QueryGetInitRequest>, metadata?: grpc.Metadata): Promise<QueryGetInitResponse>;
  /** Queries a list of Init items. */
  InitAll(request: DeepPartial<QueryAllInitRequest>, metadata?: grpc.Metadata): Promise<QueryAllInitResponse>;
  /** Queries a list of ListOwnedNames items. */
  ListOwnedNames(
    request: DeepPartial<QueryListOwnedNamesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryListOwnedNamesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Names = this.Names.bind(this);
    this.NamesAll = this.NamesAll.bind(this);
    this.Bids = this.Bids.bind(this);
    this.BidsAll = this.BidsAll.bind(this);
    this.Forsale = this.Forsale.bind(this);
    this.ForsaleAll = this.ForsaleAll.bind(this);
    this.Init = this.Init.bind(this);
    this.InitAll = this.InitAll.bind(this);
    this.ListOwnedNames = this.ListOwnedNames.bind(this);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  Names(request: DeepPartial<QueryGetNamesRequest>, metadata?: grpc.Metadata): Promise<QueryGetNamesResponse> {
    return this.rpc.unary(QueryNamesDesc, QueryGetNamesRequest.fromPartial(request), metadata);
  }

  NamesAll(request: DeepPartial<QueryAllNamesRequest>, metadata?: grpc.Metadata): Promise<QueryAllNamesResponse> {
    return this.rpc.unary(QueryNamesAllDesc, QueryAllNamesRequest.fromPartial(request), metadata);
  }

  Bids(request: DeepPartial<QueryGetBidsRequest>, metadata?: grpc.Metadata): Promise<QueryGetBidsResponse> {
    return this.rpc.unary(QueryBidsDesc, QueryGetBidsRequest.fromPartial(request), metadata);
  }

  BidsAll(request: DeepPartial<QueryAllBidsRequest>, metadata?: grpc.Metadata): Promise<QueryAllBidsResponse> {
    return this.rpc.unary(QueryBidsAllDesc, QueryAllBidsRequest.fromPartial(request), metadata);
  }

  Forsale(request: DeepPartial<QueryGetForsaleRequest>, metadata?: grpc.Metadata): Promise<QueryGetForsaleResponse> {
    return this.rpc.unary(QueryForsaleDesc, QueryGetForsaleRequest.fromPartial(request), metadata);
  }

  ForsaleAll(request: DeepPartial<QueryAllForsaleRequest>, metadata?: grpc.Metadata): Promise<QueryAllForsaleResponse> {
    return this.rpc.unary(QueryForsaleAllDesc, QueryAllForsaleRequest.fromPartial(request), metadata);
  }

  Init(request: DeepPartial<QueryGetInitRequest>, metadata?: grpc.Metadata): Promise<QueryGetInitResponse> {
    return this.rpc.unary(QueryInitDesc, QueryGetInitRequest.fromPartial(request), metadata);
  }

  InitAll(request: DeepPartial<QueryAllInitRequest>, metadata?: grpc.Metadata): Promise<QueryAllInitResponse> {
    return this.rpc.unary(QueryInitAllDesc, QueryAllInitRequest.fromPartial(request), metadata);
  }

  ListOwnedNames(
    request: DeepPartial<QueryListOwnedNamesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryListOwnedNamesResponse> {
    return this.rpc.unary(QueryListOwnedNamesDesc, QueryListOwnedNamesRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "jackaldao.canine.rns.Query" };

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryNamesDesc: UnaryMethodDefinitionish = {
  methodName: "Names",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetNamesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetNamesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryNamesAllDesc: UnaryMethodDefinitionish = {
  methodName: "NamesAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllNamesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllNamesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryBidsDesc: UnaryMethodDefinitionish = {
  methodName: "Bids",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetBidsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetBidsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryBidsAllDesc: UnaryMethodDefinitionish = {
  methodName: "BidsAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllBidsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllBidsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryForsaleDesc: UnaryMethodDefinitionish = {
  methodName: "Forsale",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetForsaleRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetForsaleResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryForsaleAllDesc: UnaryMethodDefinitionish = {
  methodName: "ForsaleAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllForsaleRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllForsaleResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryInitDesc: UnaryMethodDefinitionish = {
  methodName: "Init",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetInitRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetInitResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryInitAllDesc: UnaryMethodDefinitionish = {
  methodName: "InitAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllInitRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllInitResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryListOwnedNamesDesc: UnaryMethodDefinitionish = {
  methodName: "ListOwnedNames",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryListOwnedNamesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryListOwnedNamesResponse.decode(data),
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
