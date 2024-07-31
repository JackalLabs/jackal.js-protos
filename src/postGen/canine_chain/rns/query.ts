/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Bids } from "./bids";
import { Forsale } from "./forsale";
import { Init } from "./init";
import { Names } from "./names";
import { Params } from "./params";

export const protobufPackage = "canine_chain.rns";

export interface QueryParams {
}

export interface QueryParamsResponse {
  params: Params | undefined;
}

export interface QueryName {
  name: string;
}

export interface QueryNameResponse {
  name: Names | undefined;
}

export interface QueryListOwnedNames {
  address: string;
  pagination: PageRequest | undefined;
}

export interface QueryListOwnedNamesResponse {
  names: Names[];
  pagination: PageResponse | undefined;
}

export interface QueryAllNames {
  pagination: PageRequest | undefined;
}

export interface QueryAllNamesResponse {
  name: Names[];
  pagination: PageResponse | undefined;
}

export interface QueryBid {
  name: string;
}

export interface QueryBidResponse {
  bids: Bids | undefined;
}

export interface QueryAllBids {
  pagination: PageRequest | undefined;
}

export interface QueryAllBidsResponse {
  bids: Bids[];
  pagination: PageResponse | undefined;
}

export interface QueryForSale {
  name: string;
}

export interface QueryForSaleResponse {
  /** TODO: fix casing */
  forSale: Forsale | undefined;
}

export interface QueryAllForSale {
  pagination: PageRequest | undefined;
}

export interface QueryAllForSaleResponse {
  /** TODO: fix casing */
  forSale: Forsale[];
  pagination: PageResponse | undefined;
}

export interface QueryInit {
  address: string;
}

export interface QueryInitResponse {
  init: boolean;
}

export interface QueryAllInits {
  pagination: PageRequest | undefined;
}

export interface QueryAllInitsResponse {
  init: Init[];
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

function createBaseQueryName(): QueryName {
  return { name: "" };
}

export const QueryName = {
  encode(message: QueryName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryName();
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

  fromJSON(object: any): QueryName {
    return { name: isSet(object.name) ? gt.String(object.name) : "" };
  },

  toJSON(message: QueryName): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryName>, I>>(base?: I): QueryName {
    return QueryName.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryName>, I>>(object: I): QueryName {
    const message = createBaseQueryName();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryNameResponse(): QueryNameResponse {
  return { name: undefined };
}

export const QueryNameResponse = {
  encode(message: QueryNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      Names.encode(message.name, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = Names.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNameResponse {
    return { name: isSet(object.name) ? Names.fromJSON(object.name) : undefined };
  },

  toJSON(message: QueryNameResponse): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = Names.toJSON(message.name);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryNameResponse>, I>>(base?: I): QueryNameResponse {
    return QueryNameResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryNameResponse>, I>>(object: I): QueryNameResponse {
    const message = createBaseQueryNameResponse();
    message.name = (object.name !== undefined && object.name !== null) ? Names.fromPartial(object.name) : undefined;
    return message;
  },
};

function createBaseQueryListOwnedNames(): QueryListOwnedNames {
  return { address: "", pagination: undefined };
}

export const QueryListOwnedNames = {
  encode(message: QueryListOwnedNames, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListOwnedNames {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListOwnedNames();
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
          if (tag !== 18) {
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

  fromJSON(object: any): QueryListOwnedNames {
    return {
      address: isSet(object.address) ? gt.String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryListOwnedNames): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryListOwnedNames>, I>>(base?: I): QueryListOwnedNames {
    return QueryListOwnedNames.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryListOwnedNames>, I>>(object: I): QueryListOwnedNames {
    const message = createBaseQueryListOwnedNames();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListOwnedNamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.names.push(Names.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryListOwnedNamesResponse {
    return {
      names: gt.Array.isArray(object?.names) ? object.names.map((e: any) => Names.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryListOwnedNamesResponse): unknown {
    const obj: any = {};
    if (message.names?.length) {
      obj.names = message.names.map((e) => Names.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryListOwnedNamesResponse>, I>>(base?: I): QueryListOwnedNamesResponse {
    return QueryListOwnedNamesResponse.fromPartial(base ?? ({} as any));
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

function createBaseQueryAllNames(): QueryAllNames {
  return { pagination: undefined };
}

export const QueryAllNames = {
  encode(message: QueryAllNames, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNames {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNames();
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

  fromJSON(object: any): QueryAllNames {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllNames): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllNames>, I>>(base?: I): QueryAllNames {
    return QueryAllNames.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllNames>, I>>(object: I): QueryAllNames {
    const message = createBaseQueryAllNames();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNamesResponse(): QueryAllNamesResponse {
  return { name: [], pagination: undefined };
}

export const QueryAllNamesResponse = {
  encode(message: QueryAllNamesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.name) {
      Names.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNamesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name.push(Names.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllNamesResponse {
    return {
      name: gt.Array.isArray(object?.name) ? object.name.map((e: any) => Names.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllNamesResponse): unknown {
    const obj: any = {};
    if (message.name?.length) {
      obj.name = message.name.map((e) => Names.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllNamesResponse>, I>>(base?: I): QueryAllNamesResponse {
    return QueryAllNamesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllNamesResponse>, I>>(object: I): QueryAllNamesResponse {
    const message = createBaseQueryAllNamesResponse();
    message.name = object.name?.map((e) => Names.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryBid(): QueryBid {
  return { name: "" };
}

export const QueryBid = {
  encode(message: QueryBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBid {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBid();
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

  fromJSON(object: any): QueryBid {
    return { name: isSet(object.name) ? gt.String(object.name) : "" };
  },

  toJSON(message: QueryBid): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBid>, I>>(base?: I): QueryBid {
    return QueryBid.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBid>, I>>(object: I): QueryBid {
    const message = createBaseQueryBid();
    message.name = object.name ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bids = Bids.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBidResponse {
    return { bids: isSet(object.bids) ? Bids.fromJSON(object.bids) : undefined };
  },

  toJSON(message: QueryBidResponse): unknown {
    const obj: any = {};
    if (message.bids !== undefined) {
      obj.bids = Bids.toJSON(message.bids);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBidResponse>, I>>(base?: I): QueryBidResponse {
    return QueryBidResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidResponse>, I>>(object: I): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    message.bids = (object.bids !== undefined && object.bids !== null) ? Bids.fromPartial(object.bids) : undefined;
    return message;
  },
};

function createBaseQueryAllBids(): QueryAllBids {
  return { pagination: undefined };
}

export const QueryAllBids = {
  encode(message: QueryAllBids, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBids {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBids();
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

  fromJSON(object: any): QueryAllBids {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllBids): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllBids>, I>>(base?: I): QueryAllBids {
    return QueryAllBids.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllBids>, I>>(object: I): QueryAllBids {
    const message = createBaseQueryAllBids();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bids.push(Bids.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBidsResponse {
    return {
      bids: gt.Array.isArray(object?.bids) ? object.bids.map((e: any) => Bids.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllBidsResponse): unknown {
    const obj: any = {};
    if (message.bids?.length) {
      obj.bids = message.bids.map((e) => Bids.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllBidsResponse>, I>>(base?: I): QueryAllBidsResponse {
    return QueryAllBidsResponse.fromPartial(base ?? ({} as any));
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

function createBaseQueryForSale(): QueryForSale {
  return { name: "" };
}

export const QueryForSale = {
  encode(message: QueryForSale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryForSale {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryForSale();
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

  fromJSON(object: any): QueryForSale {
    return { name: isSet(object.name) ? gt.String(object.name) : "" };
  },

  toJSON(message: QueryForSale): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryForSale>, I>>(base?: I): QueryForSale {
    return QueryForSale.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryForSale>, I>>(object: I): QueryForSale {
    const message = createBaseQueryForSale();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryForSaleResponse(): QueryForSaleResponse {
  return { forSale: undefined };
}

export const QueryForSaleResponse = {
  encode(message: QueryForSaleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.forSale !== undefined) {
      Forsale.encode(message.forSale, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryForSaleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryForSaleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.forSale = Forsale.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryForSaleResponse {
    return { forSale: isSet(object.forSale) ? Forsale.fromJSON(object.forSale) : undefined };
  },

  toJSON(message: QueryForSaleResponse): unknown {
    const obj: any = {};
    if (message.forSale !== undefined) {
      obj.forSale = Forsale.toJSON(message.forSale);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryForSaleResponse>, I>>(base?: I): QueryForSaleResponse {
    return QueryForSaleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryForSaleResponse>, I>>(object: I): QueryForSaleResponse {
    const message = createBaseQueryForSaleResponse();
    message.forSale = (object.forSale !== undefined && object.forSale !== null)
      ? Forsale.fromPartial(object.forSale)
      : undefined;
    return message;
  },
};

function createBaseQueryAllForSale(): QueryAllForSale {
  return { pagination: undefined };
}

export const QueryAllForSale = {
  encode(message: QueryAllForSale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllForSale {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllForSale();
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

  fromJSON(object: any): QueryAllForSale {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllForSale): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllForSale>, I>>(base?: I): QueryAllForSale {
    return QueryAllForSale.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllForSale>, I>>(object: I): QueryAllForSale {
    const message = createBaseQueryAllForSale();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllForSaleResponse(): QueryAllForSaleResponse {
  return { forSale: [], pagination: undefined };
}

export const QueryAllForSaleResponse = {
  encode(message: QueryAllForSaleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.forSale) {
      Forsale.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllForSaleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllForSaleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.forSale.push(Forsale.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllForSaleResponse {
    return {
      forSale: gt.Array.isArray(object?.forSale) ? object.forSale.map((e: any) => Forsale.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllForSaleResponse): unknown {
    const obj: any = {};
    if (message.forSale?.length) {
      obj.forSale = message.forSale.map((e) => Forsale.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllForSaleResponse>, I>>(base?: I): QueryAllForSaleResponse {
    return QueryAllForSaleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllForSaleResponse>, I>>(object: I): QueryAllForSaleResponse {
    const message = createBaseQueryAllForSaleResponse();
    message.forSale = object.forSale?.map((e) => Forsale.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryInit(): QueryInit {
  return { address: "" };
}

export const QueryInit = {
  encode(message: QueryInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryInit {
    return { address: isSet(object.address) ? gt.String(object.address) : "" };
  },

  toJSON(message: QueryInit): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryInit>, I>>(base?: I): QueryInit {
    return QueryInit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryInit>, I>>(object: I): QueryInit {
    const message = createBaseQueryInit();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryInitResponse(): QueryInitResponse {
  return { init: false };
}

export const QueryInitResponse = {
  encode(message: QueryInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.init !== false) {
      writer.uint32(8).bool(message.init);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInitResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.init = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryInitResponse {
    return { init: isSet(object.init) ? gt.Boolean(object.init) : false };
  },

  toJSON(message: QueryInitResponse): unknown {
    const obj: any = {};
    if (message.init !== false) {
      obj.init = message.init;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryInitResponse>, I>>(base?: I): QueryInitResponse {
    return QueryInitResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryInitResponse>, I>>(object: I): QueryInitResponse {
    const message = createBaseQueryInitResponse();
    message.init = object.init ?? false;
    return message;
  },
};

function createBaseQueryAllInits(): QueryAllInits {
  return { pagination: undefined };
}

export const QueryAllInits = {
  encode(message: QueryAllInits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInits {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInits();
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

  fromJSON(object: any): QueryAllInits {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllInits): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllInits>, I>>(base?: I): QueryAllInits {
    return QueryAllInits.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllInits>, I>>(object: I): QueryAllInits {
    const message = createBaseQueryAllInits();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.init.push(Init.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllInitsResponse {
    return {
      init: gt.Array.isArray(object?.init) ? object.init.map((e: any) => Init.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllInitsResponse): unknown {
    const obj: any = {};
    if (message.init?.length) {
      obj.init = message.init.map((e) => Init.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllInitsResponse>, I>>(base?: I): QueryAllInitsResponse {
    return QueryAllInitsResponse.fromPartial(base ?? ({} as any));
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

export interface Query {
  Params(request: QueryParams): Promise<QueryParamsResponse>;
  /** Queries a Name by name. */
  Name(request: QueryName): Promise<QueryNameResponse>;
  /** Queries a list of Name items by address. */
  ListOwnedNames(request: QueryListOwnedNames): Promise<QueryListOwnedNamesResponse>;
  /** Queries a list of Name items. */
  AllNames(request: QueryAllNames): Promise<QueryAllNamesResponse>;
  /** Queries a Bid by name. */
  Bid(request: QueryBid): Promise<QueryBidResponse>;
  /** Queries a list of Bid items. */
  AllBids(request: QueryAllBids): Promise<QueryAllBidsResponse>;
  /** Queries a ForSale by name. */
  ForSale(request: QueryForSale): Promise<QueryForSaleResponse>;
  /** Queries a list of ForSale items. */
  AllForSale(request: QueryAllForSale): Promise<QueryAllForSaleResponse>;
  /** Queries an Init by address. */
  Init(request: QueryInit): Promise<QueryInitResponse>;
  /** Queries a list of Init items. */
  AllInits(request: QueryAllInits): Promise<QueryAllInitsResponse>;
}

export const QueryServiceName = "canine_chain.rns.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Name = this.Name.bind(this);
    this.ListOwnedNames = this.ListOwnedNames.bind(this);
    this.AllNames = this.AllNames.bind(this);
    this.Bid = this.Bid.bind(this);
    this.AllBids = this.AllBids.bind(this);
    this.ForSale = this.ForSale.bind(this);
    this.AllForSale = this.AllForSale.bind(this);
    this.Init = this.Init.bind(this);
    this.AllInits = this.AllInits.bind(this);
  }
  Params(request: QueryParams): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Name(request: QueryName): Promise<QueryNameResponse> {
    const data = QueryName.encode(request).finish();
    const promise = this.rpc.request(this.service, "Name", data);
    return promise.then((data) => QueryNameResponse.decode(_m0.Reader.create(data)));
  }

  ListOwnedNames(request: QueryListOwnedNames): Promise<QueryListOwnedNamesResponse> {
    const data = QueryListOwnedNames.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListOwnedNames", data);
    return promise.then((data) => QueryListOwnedNamesResponse.decode(_m0.Reader.create(data)));
  }

  AllNames(request: QueryAllNames): Promise<QueryAllNamesResponse> {
    const data = QueryAllNames.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllNames", data);
    return promise.then((data) => QueryAllNamesResponse.decode(_m0.Reader.create(data)));
  }

  Bid(request: QueryBid): Promise<QueryBidResponse> {
    const data = QueryBid.encode(request).finish();
    const promise = this.rpc.request(this.service, "Bid", data);
    return promise.then((data) => QueryBidResponse.decode(_m0.Reader.create(data)));
  }

  AllBids(request: QueryAllBids): Promise<QueryAllBidsResponse> {
    const data = QueryAllBids.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllBids", data);
    return promise.then((data) => QueryAllBidsResponse.decode(_m0.Reader.create(data)));
  }

  ForSale(request: QueryForSale): Promise<QueryForSaleResponse> {
    const data = QueryForSale.encode(request).finish();
    const promise = this.rpc.request(this.service, "ForSale", data);
    return promise.then((data) => QueryForSaleResponse.decode(_m0.Reader.create(data)));
  }

  AllForSale(request: QueryAllForSale): Promise<QueryAllForSaleResponse> {
    const data = QueryAllForSale.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllForSale", data);
    return promise.then((data) => QueryAllForSaleResponse.decode(_m0.Reader.create(data)));
  }

  Init(request: QueryInit): Promise<QueryInitResponse> {
    const data = QueryInit.encode(request).finish();
    const promise = this.rpc.request(this.service, "Init", data);
    return promise.then((data) => QueryInitResponse.decode(_m0.Reader.create(data)));
  }

  AllInits(request: QueryAllInits): Promise<QueryAllInitsResponse> {
    const data = QueryAllInits.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllInits", data);
    return promise.then((data) => QueryAllInitsResponse.decode(_m0.Reader.create(data)));
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
