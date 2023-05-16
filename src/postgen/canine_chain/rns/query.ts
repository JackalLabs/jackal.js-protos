/* eslint-disable */
import { grpc } from '@improbable-eng/grpc-web'
import { BrowserHeaders } from 'browser-headers'
import _m0 from 'protobufjs/minimal'
import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination'
import { Bids } from './bids'
import { Forsale } from './forsale'
import { Init } from './init'
import { Names } from './names'
import { Params } from './params'
import { Whois } from './whois'

export const protobufPackage = "canine_chain.rns";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryWhoisRequest {
  index: string;
}

export interface QueryWhoisResponse {
  whois: Whois | undefined;
}

export interface QueryAllWhoisRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWhoisResponse {
  whois: Whois[];
  pagination: PageResponse | undefined;
}

export interface QueryNameRequest {
  index: string;
}

export interface QueryNameResponse {
  names: Names | undefined;
}

export interface QueryAllNamesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllNamesResponse {
  names: Names[];
  pagination: PageResponse | undefined;
}

export interface QueryBidRequest {
  index: string;
}

export interface QueryBidResponse {
  bids: Bids | undefined;
}

export interface QueryAllBidsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBidsResponse {
  bids: Bids[];
  pagination: PageResponse | undefined;
}

export interface QueryForsaleRequest {
  name: string;
}

export interface QueryForsaleResponse {
  forsale: Forsale | undefined;
}

export interface QueryAllForsalesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllForsalesResponse {
  forsale: Forsale[];
  pagination: PageResponse | undefined;
}

export interface QueryInitRequest {
  address: string;
}

export interface QueryInitResponse {
  init: boolean;
}

export interface QueryAllInitsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllInitsResponse {
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

function createBaseQueryWhoisRequest(): QueryWhoisRequest {
  return { index: "" };
}

export const QueryWhoisRequest = {
  encode(message: QueryWhoisRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhoisRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhoisRequest();
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

  fromJSON(object: any): QueryWhoisRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryWhoisRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWhoisRequest>, I>>(object: I): QueryWhoisRequest {
    const message = createBaseQueryWhoisRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryWhoisResponse(): QueryWhoisResponse {
  return { whois: undefined };
}

export const QueryWhoisResponse = {
  encode(message: QueryWhoisResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whois !== undefined) {
      Whois.encode(message.whois, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhoisResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhoisResponse();
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

  fromJSON(object: any): QueryWhoisResponse {
    return { whois: isSet(object.whois) ? Whois.fromJSON(object.whois) : undefined };
  },

  toJSON(message: QueryWhoisResponse): unknown {
    const obj: any = {};
    message.whois !== undefined && (obj.whois = message.whois ? Whois.toJSON(message.whois) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWhoisResponse>, I>>(object: I): QueryWhoisResponse {
    const message = createBaseQueryWhoisResponse();
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

function createBaseQueryNameRequest(): QueryNameRequest {
  return { index: "" };
}

export const QueryNameRequest = {
  encode(message: QueryNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNameRequest();
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

  fromJSON(object: any): QueryNameRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryNameRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNameRequest>, I>>(object: I): QueryNameRequest {
    const message = createBaseQueryNameRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryNameResponse(): QueryNameResponse {
  return { names: undefined };
}

export const QueryNameResponse = {
  encode(message: QueryNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.names !== undefined) {
      Names.encode(message.names, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNameResponse();
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

  fromJSON(object: any): QueryNameResponse {
    return { names: isSet(object.names) ? Names.fromJSON(object.names) : undefined };
  },

  toJSON(message: QueryNameResponse): unknown {
    const obj: any = {};
    message.names !== undefined && (obj.names = message.names ? Names.toJSON(message.names) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNameResponse>, I>>(object: I): QueryNameResponse {
    const message = createBaseQueryNameResponse();
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

function createBaseQueryBidRequest(): QueryBidRequest {
  return { index: "" };
}

export const QueryBidRequest = {
  encode(message: QueryBidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidRequest();
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

  fromJSON(object: any): QueryBidRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryBidRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBidRequest>, I>>(object: I): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryBidResponse(): QueryBidResponse {
  return { bids: undefined };
}

export const QueryBidResponse = {
  encode(message: QueryBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bids !== undefined) {
      Bids.encode(message.bids, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidResponse();
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

  fromJSON(object: any): QueryBidResponse {
    return { bids: isSet(object.bids) ? Bids.fromJSON(object.bids) : undefined };
  },

  toJSON(message: QueryBidResponse): unknown {
    const obj: any = {};
    message.bids !== undefined && (obj.bids = message.bids ? Bids.toJSON(message.bids) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBidResponse>, I>>(object: I): QueryBidResponse {
    const message = createBaseQueryBidResponse();
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

function createBaseQueryForsaleRequest(): QueryForsaleRequest {
  return { name: "" };
}

export const QueryForsaleRequest = {
  encode(message: QueryForsaleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryForsaleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryForsaleRequest();
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

  fromJSON(object: any): QueryForsaleRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryForsaleRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryForsaleRequest>, I>>(object: I): QueryForsaleRequest {
    const message = createBaseQueryForsaleRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryForsaleResponse(): QueryForsaleResponse {
  return { forsale: undefined };
}

export const QueryForsaleResponse = {
  encode(message: QueryForsaleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.forsale !== undefined) {
      Forsale.encode(message.forsale, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryForsaleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryForsaleResponse();
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

  fromJSON(object: any): QueryForsaleResponse {
    return { forsale: isSet(object.forsale) ? Forsale.fromJSON(object.forsale) : undefined };
  },

  toJSON(message: QueryForsaleResponse): unknown {
    const obj: any = {};
    message.forsale !== undefined && (obj.forsale = message.forsale ? Forsale.toJSON(message.forsale) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryForsaleResponse>, I>>(object: I): QueryForsaleResponse {
    const message = createBaseQueryForsaleResponse();
    message.forsale = (object.forsale !== undefined && object.forsale !== null)
      ? Forsale.fromPartial(object.forsale)
      : undefined;
    return message;
  },
};

function createBaseQueryAllForsalesRequest(): QueryAllForsalesRequest {
  return { pagination: undefined };
}

export const QueryAllForsalesRequest = {
  encode(message: QueryAllForsalesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllForsalesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllForsalesRequest();
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

  fromJSON(object: any): QueryAllForsalesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllForsalesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllForsalesRequest>, I>>(object: I): QueryAllForsalesRequest {
    const message = createBaseQueryAllForsalesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllForsalesResponse(): QueryAllForsalesResponse {
  return { forsale: [], pagination: undefined };
}

export const QueryAllForsalesResponse = {
  encode(message: QueryAllForsalesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.forsale) {
      Forsale.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllForsalesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllForsalesResponse();
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

  fromJSON(object: any): QueryAllForsalesResponse {
    return {
      forsale: Array.isArray(object?.forsale) ? object.forsale.map((e: any) => Forsale.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllForsalesResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryAllForsalesResponse>, I>>(object: I): QueryAllForsalesResponse {
    const message = createBaseQueryAllForsalesResponse();
    message.forsale = object.forsale?.map((e) => Forsale.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryInitRequest(): QueryInitRequest {
  return { address: "" };
}

export const QueryInitRequest = {
  encode(message: QueryInitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitRequest();
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

  fromJSON(object: any): QueryInitRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryInitRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInitRequest>, I>>(object: I): QueryInitRequest {
    const message = createBaseQueryInitRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryInitResponse(): QueryInitResponse {
  return { init: false };
}

export const QueryInitResponse = {
  encode(message: QueryInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.init === true) {
      writer.uint32(8).bool(message.init);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitResponse();
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

  fromJSON(object: any): QueryInitResponse {
    return { init: isSet(object.init) ? Boolean(object.init) : false };
  },

  toJSON(message: QueryInitResponse): unknown {
    const obj: any = {};
    message.init !== undefined && (obj.init = message.init);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInitResponse>, I>>(object: I): QueryInitResponse {
    const message = createBaseQueryInitResponse();
    message.init = object.init ?? false;
    return message;
  },
};

function createBaseQueryAllInitsRequest(): QueryAllInitsRequest {
  return { pagination: undefined };
}

export const QueryAllInitsRequest = {
  encode(message: QueryAllInitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInitsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInitsRequest();
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

  fromJSON(object: any): QueryAllInitsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllInitsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllInitsRequest>, I>>(object: I): QueryAllInitsRequest {
    const message = createBaseQueryAllInitsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllInitsResponse(): QueryAllInitsResponse {
  return { init: [], pagination: undefined };
}

export const QueryAllInitsResponse = {
  encode(message: QueryAllInitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.init) {
      Init.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInitsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInitsResponse();
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

  fromJSON(object: any): QueryAllInitsResponse {
    return {
      init: Array.isArray(object?.init) ? object.init.map((e: any) => Init.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllInitsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryAllInitsResponse>, I>>(object: I): QueryAllInitsResponse {
    const message = createBaseQueryAllInitsResponse();
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
  Names(request: DeepPartial<QueryNameRequest>, metadata?: grpc.Metadata): Promise<QueryNameResponse>;
  /** Queries a list of Names. */
  NamesAll(request: DeepPartial<QueryAllNamesRequest>, metadata?: grpc.Metadata): Promise<QueryAllNamesResponse>;
  /** Queries a Bid by index. */
  Bids(request: DeepPartial<QueryBidRequest>, metadata?: grpc.Metadata): Promise<QueryBidResponse>;
  /** Queries a list of Bids. */
  BidsAll(request: DeepPartial<QueryAllBidsRequest>, metadata?: grpc.Metadata): Promise<QueryAllBidsResponse>;
  /** Queries a Listing by index. */
  Forsale(request: DeepPartial<QueryForsaleRequest>, metadata?: grpc.Metadata): Promise<QueryForsaleResponse>;
  /** Queries all Listings. */
  ForsaleAll(
    request: DeepPartial<QueryAllForsalesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllForsalesResponse>;
  /** Queries a Init by index. */
  Init(request: DeepPartial<QueryInitRequest>, metadata?: grpc.Metadata): Promise<QueryInitResponse>;
  /** Queries a list of Init items. */
  InitAll(request: DeepPartial<QueryAllInitsRequest>, metadata?: grpc.Metadata): Promise<QueryAllInitsResponse>;
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

  Names(request: DeepPartial<QueryNameRequest>, metadata?: grpc.Metadata): Promise<QueryNameResponse> {
    return this.rpc.unary(QueryNamesDesc, QueryNameRequest.fromPartial(request), metadata);
  }

  NamesAll(request: DeepPartial<QueryAllNamesRequest>, metadata?: grpc.Metadata): Promise<QueryAllNamesResponse> {
    return this.rpc.unary(QueryNamesAllDesc, QueryAllNamesRequest.fromPartial(request), metadata);
  }

  Bids(request: DeepPartial<QueryBidRequest>, metadata?: grpc.Metadata): Promise<QueryBidResponse> {
    return this.rpc.unary(QueryBidsDesc, QueryBidRequest.fromPartial(request), metadata);
  }

  BidsAll(request: DeepPartial<QueryAllBidsRequest>, metadata?: grpc.Metadata): Promise<QueryAllBidsResponse> {
    return this.rpc.unary(QueryBidsAllDesc, QueryAllBidsRequest.fromPartial(request), metadata);
  }

  Forsale(request: DeepPartial<QueryForsaleRequest>, metadata?: grpc.Metadata): Promise<QueryForsaleResponse> {
    return this.rpc.unary(QueryForsaleDesc, QueryForsaleRequest.fromPartial(request), metadata);
  }

  ForsaleAll(
    request: DeepPartial<QueryAllForsalesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllForsalesResponse> {
    return this.rpc.unary(QueryForsaleAllDesc, QueryAllForsalesRequest.fromPartial(request), metadata);
  }

  Init(request: DeepPartial<QueryInitRequest>, metadata?: grpc.Metadata): Promise<QueryInitResponse> {
    return this.rpc.unary(QueryInitDesc, QueryInitRequest.fromPartial(request), metadata);
  }

  InitAll(request: DeepPartial<QueryAllInitsRequest>, metadata?: grpc.Metadata): Promise<QueryAllInitsResponse> {
    return this.rpc.unary(QueryInitAllDesc, QueryAllInitsRequest.fromPartial(request), metadata);
  }

  ListOwnedNames(
    request: DeepPartial<QueryListOwnedNamesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryListOwnedNamesResponse> {
    return this.rpc.unary(QueryListOwnedNamesDesc, QueryListOwnedNamesRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "canine_chain.rns.Query" };

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
      return QueryNameRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryNameResponse.decode(data),
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
      return QueryBidRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryBidResponse.decode(data),
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
      return QueryForsaleRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryForsaleResponse.decode(data),
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
      return QueryAllForsalesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllForsalesResponse.decode(data),
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
      return QueryInitRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryInitResponse.decode(data),
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
      return QueryAllInitsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllInitsResponse.decode(data),
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
