/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { ActiveDeals } from "./active_deals";
import { ClientUsage } from "./client_usage";
import { Contracts } from "./contracts";
import { FidCid } from "./fid_cid";
import { Params } from "./params";
import { PayBlocks } from "./pay_blocks";
import { Providers } from "./providers";
import { Strays } from "./strays";

export const protobufPackage = "jackaldao.canine.storage";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetContractsRequest {
  cid: string;
}

export interface QueryGetContractsResponse {
  contracts: Contracts | undefined;
}

export interface QueryAllContractsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllContractsResponse {
  contracts: Contracts[];
  pagination: PageResponse | undefined;
}

export interface QueryGetActiveDealsRequest {
  cid: string;
}

export interface QueryGetActiveDealsResponse {
  activeDeals: ActiveDeals | undefined;
}

export interface QueryAllActiveDealsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllActiveDealsResponse {
  activeDeals: ActiveDeals[];
  pagination: PageResponse | undefined;
}

export interface QueryGetProvidersRequest {
  address: string;
}

export interface QueryGetProvidersResponse {
  providers: Providers | undefined;
}

export interface QueryAllProvidersRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllProvidersResponse {
  providers: Providers[];
  pagination: PageResponse | undefined;
}

export interface QueryFreespaceRequest {
  address: string;
}

export interface QueryFreespaceResponse {
  space: string;
}

export interface QueryFindFileRequest {
  fid: string;
}

export interface QueryFindFileResponse {
  providerIps: string;
}

export interface QueryGetPayBlocksRequest {
  blockid: string;
}

export interface QueryGetPayBlocksResponse {
  payBlocks: PayBlocks | undefined;
}

export interface QueryAllPayBlocksRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPayBlocksResponse {
  payBlocks: PayBlocks[];
  pagination: PageResponse | undefined;
}

export interface QueryGetClientUsageRequest {
  address: string;
}

export interface QueryGetClientUsageResponse {
  clientUsage: ClientUsage | undefined;
}

export interface QueryAllClientUsageRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllClientUsageResponse {
  clientUsage: ClientUsage[];
  pagination: PageResponse | undefined;
}

export interface QueryGetStraysRequest {
  cid: string;
}

export interface QueryGetStraysResponse {
  strays: Strays | undefined;
}

export interface QueryAllStraysRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStraysResponse {
  strays: Strays[];
  pagination: PageResponse | undefined;
}

export interface QueryGetClientFreeSpaceRequest {
  address: string;
}

export interface QueryGetClientFreeSpaceResponse {
  bytesfree: string;
}

export interface QueryGetFidCidRequest {
  fid: string;
}

export interface QueryGetFidCidResponse {
  fidCid: FidCid | undefined;
}

export interface QueryAllFidCidRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFidCidResponse {
  fidCid: FidCid[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPayDataRequest {
  address: string;
}

export interface QueryGetPayDataResponse {
  blocksRemaining: number;
  bytes: number;
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

function createBaseQueryGetContractsRequest(): QueryGetContractsRequest {
  return { cid: "" };
}

export const QueryGetContractsRequest = {
  encode(message: QueryGetContractsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetContractsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetContractsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetContractsRequest {
    return { cid: isSet(object.cid) ? String(object.cid) : "" };
  },

  toJSON(message: QueryGetContractsRequest): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetContractsRequest>, I>>(object: I): QueryGetContractsRequest {
    const message = createBaseQueryGetContractsRequest();
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseQueryGetContractsResponse(): QueryGetContractsResponse {
  return { contracts: undefined };
}

export const QueryGetContractsResponse = {
  encode(message: QueryGetContractsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contracts !== undefined) {
      Contracts.encode(message.contracts, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetContractsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts = Contracts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetContractsResponse {
    return { contracts: isSet(object.contracts) ? Contracts.fromJSON(object.contracts) : undefined };
  },

  toJSON(message: QueryGetContractsResponse): unknown {
    const obj: any = {};
    message.contracts !== undefined &&
      (obj.contracts = message.contracts ? Contracts.toJSON(message.contracts) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetContractsResponse>, I>>(object: I): QueryGetContractsResponse {
    const message = createBaseQueryGetContractsResponse();
    message.contracts = (object.contracts !== undefined && object.contracts !== null)
      ? Contracts.fromPartial(object.contracts)
      : undefined;
    return message;
  },
};

function createBaseQueryAllContractsRequest(): QueryAllContractsRequest {
  return { pagination: undefined };
}

export const QueryAllContractsRequest = {
  encode(message: QueryAllContractsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractsRequest();
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

  fromJSON(object: any): QueryAllContractsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllContractsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllContractsRequest>, I>>(object: I): QueryAllContractsRequest {
    const message = createBaseQueryAllContractsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllContractsResponse(): QueryAllContractsResponse {
  return { contracts: [], pagination: undefined };
}

export const QueryAllContractsResponse = {
  encode(message: QueryAllContractsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      Contracts.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(Contracts.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllContractsResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contracts.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllContractsResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e ? Contracts.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllContractsResponse>, I>>(object: I): QueryAllContractsResponse {
    const message = createBaseQueryAllContractsResponse();
    message.contracts = object.contracts?.map((e) => Contracts.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetActiveDealsRequest(): QueryGetActiveDealsRequest {
  return { cid: "" };
}

export const QueryGetActiveDealsRequest = {
  encode(message: QueryGetActiveDealsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActiveDealsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActiveDealsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActiveDealsRequest {
    return { cid: isSet(object.cid) ? String(object.cid) : "" };
  },

  toJSON(message: QueryGetActiveDealsRequest): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetActiveDealsRequest>, I>>(object: I): QueryGetActiveDealsRequest {
    const message = createBaseQueryGetActiveDealsRequest();
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseQueryGetActiveDealsResponse(): QueryGetActiveDealsResponse {
  return { activeDeals: undefined };
}

export const QueryGetActiveDealsResponse = {
  encode(message: QueryGetActiveDealsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activeDeals !== undefined) {
      ActiveDeals.encode(message.activeDeals, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActiveDealsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActiveDealsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeDeals = ActiveDeals.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActiveDealsResponse {
    return { activeDeals: isSet(object.activeDeals) ? ActiveDeals.fromJSON(object.activeDeals) : undefined };
  },

  toJSON(message: QueryGetActiveDealsResponse): unknown {
    const obj: any = {};
    message.activeDeals !== undefined &&
      (obj.activeDeals = message.activeDeals ? ActiveDeals.toJSON(message.activeDeals) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetActiveDealsResponse>, I>>(object: I): QueryGetActiveDealsResponse {
    const message = createBaseQueryGetActiveDealsResponse();
    message.activeDeals = (object.activeDeals !== undefined && object.activeDeals !== null)
      ? ActiveDeals.fromPartial(object.activeDeals)
      : undefined;
    return message;
  },
};

function createBaseQueryAllActiveDealsRequest(): QueryAllActiveDealsRequest {
  return { pagination: undefined };
}

export const QueryAllActiveDealsRequest = {
  encode(message: QueryAllActiveDealsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActiveDealsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActiveDealsRequest();
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

  fromJSON(object: any): QueryAllActiveDealsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllActiveDealsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllActiveDealsRequest>, I>>(object: I): QueryAllActiveDealsRequest {
    const message = createBaseQueryAllActiveDealsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllActiveDealsResponse(): QueryAllActiveDealsResponse {
  return { activeDeals: [], pagination: undefined };
}

export const QueryAllActiveDealsResponse = {
  encode(message: QueryAllActiveDealsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activeDeals) {
      ActiveDeals.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActiveDealsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActiveDealsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeDeals.push(ActiveDeals.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllActiveDealsResponse {
    return {
      activeDeals: Array.isArray(object?.activeDeals)
        ? object.activeDeals.map((e: any) => ActiveDeals.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllActiveDealsResponse): unknown {
    const obj: any = {};
    if (message.activeDeals) {
      obj.activeDeals = message.activeDeals.map((e) => e ? ActiveDeals.toJSON(e) : undefined);
    } else {
      obj.activeDeals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllActiveDealsResponse>, I>>(object: I): QueryAllActiveDealsResponse {
    const message = createBaseQueryAllActiveDealsResponse();
    message.activeDeals = object.activeDeals?.map((e) => ActiveDeals.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetProvidersRequest(): QueryGetProvidersRequest {
  return { address: "" };
}

export const QueryGetProvidersRequest = {
  encode(message: QueryGetProvidersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProvidersRequest();
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

  fromJSON(object: any): QueryGetProvidersRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetProvidersRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetProvidersRequest>, I>>(object: I): QueryGetProvidersRequest {
    const message = createBaseQueryGetProvidersRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetProvidersResponse(): QueryGetProvidersResponse {
  return { providers: undefined };
}

export const QueryGetProvidersResponse = {
  encode(message: QueryGetProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.providers !== undefined) {
      Providers.encode(message.providers, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers = Providers.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProvidersResponse {
    return { providers: isSet(object.providers) ? Providers.fromJSON(object.providers) : undefined };
  },

  toJSON(message: QueryGetProvidersResponse): unknown {
    const obj: any = {};
    message.providers !== undefined &&
      (obj.providers = message.providers ? Providers.toJSON(message.providers) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetProvidersResponse>, I>>(object: I): QueryGetProvidersResponse {
    const message = createBaseQueryGetProvidersResponse();
    message.providers = (object.providers !== undefined && object.providers !== null)
      ? Providers.fromPartial(object.providers)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProvidersRequest(): QueryAllProvidersRequest {
  return { pagination: undefined };
}

export const QueryAllProvidersRequest = {
  encode(message: QueryAllProvidersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProvidersRequest();
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

  fromJSON(object: any): QueryAllProvidersRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllProvidersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllProvidersRequest>, I>>(object: I): QueryAllProvidersRequest {
    const message = createBaseQueryAllProvidersRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProvidersResponse(): QueryAllProvidersResponse {
  return { providers: [], pagination: undefined };
}

export const QueryAllProvidersResponse = {
  encode(message: QueryAllProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      Providers.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(Providers.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllProvidersResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Providers.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllProvidersResponse): unknown {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map((e) => e ? Providers.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllProvidersResponse>, I>>(object: I): QueryAllProvidersResponse {
    const message = createBaseQueryAllProvidersResponse();
    message.providers = object.providers?.map((e) => Providers.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFreespaceRequest(): QueryFreespaceRequest {
  return { address: "" };
}

export const QueryFreespaceRequest = {
  encode(message: QueryFreespaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFreespaceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFreespaceRequest();
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

  fromJSON(object: any): QueryFreespaceRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryFreespaceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFreespaceRequest>, I>>(object: I): QueryFreespaceRequest {
    const message = createBaseQueryFreespaceRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryFreespaceResponse(): QueryFreespaceResponse {
  return { space: "" };
}

export const QueryFreespaceResponse = {
  encode(message: QueryFreespaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.space !== "") {
      writer.uint32(10).string(message.space);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFreespaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFreespaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.space = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFreespaceResponse {
    return { space: isSet(object.space) ? String(object.space) : "" };
  },

  toJSON(message: QueryFreespaceResponse): unknown {
    const obj: any = {};
    message.space !== undefined && (obj.space = message.space);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFreespaceResponse>, I>>(object: I): QueryFreespaceResponse {
    const message = createBaseQueryFreespaceResponse();
    message.space = object.space ?? "";
    return message;
  },
};

function createBaseQueryFindFileRequest(): QueryFindFileRequest {
  return { fid: "" };
}

export const QueryFindFileRequest = {
  encode(message: QueryFindFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fid !== "") {
      writer.uint32(10).string(message.fid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFindFileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFindFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFindFileRequest {
    return { fid: isSet(object.fid) ? String(object.fid) : "" };
  },

  toJSON(message: QueryFindFileRequest): unknown {
    const obj: any = {};
    message.fid !== undefined && (obj.fid = message.fid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFindFileRequest>, I>>(object: I): QueryFindFileRequest {
    const message = createBaseQueryFindFileRequest();
    message.fid = object.fid ?? "";
    return message;
  },
};

function createBaseQueryFindFileResponse(): QueryFindFileResponse {
  return { providerIps: "" };
}

export const QueryFindFileResponse = {
  encode(message: QueryFindFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.providerIps !== "") {
      writer.uint32(10).string(message.providerIps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFindFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFindFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerIps = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFindFileResponse {
    return { providerIps: isSet(object.providerIps) ? String(object.providerIps) : "" };
  },

  toJSON(message: QueryFindFileResponse): unknown {
    const obj: any = {};
    message.providerIps !== undefined && (obj.providerIps = message.providerIps);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFindFileResponse>, I>>(object: I): QueryFindFileResponse {
    const message = createBaseQueryFindFileResponse();
    message.providerIps = object.providerIps ?? "";
    return message;
  },
};

function createBaseQueryGetPayBlocksRequest(): QueryGetPayBlocksRequest {
  return { blockid: "" };
}

export const QueryGetPayBlocksRequest = {
  encode(message: QueryGetPayBlocksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockid !== "") {
      writer.uint32(10).string(message.blockid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPayBlocksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPayBlocksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPayBlocksRequest {
    return { blockid: isSet(object.blockid) ? String(object.blockid) : "" };
  },

  toJSON(message: QueryGetPayBlocksRequest): unknown {
    const obj: any = {};
    message.blockid !== undefined && (obj.blockid = message.blockid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPayBlocksRequest>, I>>(object: I): QueryGetPayBlocksRequest {
    const message = createBaseQueryGetPayBlocksRequest();
    message.blockid = object.blockid ?? "";
    return message;
  },
};

function createBaseQueryGetPayBlocksResponse(): QueryGetPayBlocksResponse {
  return { payBlocks: undefined };
}

export const QueryGetPayBlocksResponse = {
  encode(message: QueryGetPayBlocksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payBlocks !== undefined) {
      PayBlocks.encode(message.payBlocks, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPayBlocksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPayBlocksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payBlocks = PayBlocks.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPayBlocksResponse {
    return { payBlocks: isSet(object.payBlocks) ? PayBlocks.fromJSON(object.payBlocks) : undefined };
  },

  toJSON(message: QueryGetPayBlocksResponse): unknown {
    const obj: any = {};
    message.payBlocks !== undefined &&
      (obj.payBlocks = message.payBlocks ? PayBlocks.toJSON(message.payBlocks) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPayBlocksResponse>, I>>(object: I): QueryGetPayBlocksResponse {
    const message = createBaseQueryGetPayBlocksResponse();
    message.payBlocks = (object.payBlocks !== undefined && object.payBlocks !== null)
      ? PayBlocks.fromPartial(object.payBlocks)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPayBlocksRequest(): QueryAllPayBlocksRequest {
  return { pagination: undefined };
}

export const QueryAllPayBlocksRequest = {
  encode(message: QueryAllPayBlocksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPayBlocksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPayBlocksRequest();
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

  fromJSON(object: any): QueryAllPayBlocksRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPayBlocksRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPayBlocksRequest>, I>>(object: I): QueryAllPayBlocksRequest {
    const message = createBaseQueryAllPayBlocksRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPayBlocksResponse(): QueryAllPayBlocksResponse {
  return { payBlocks: [], pagination: undefined };
}

export const QueryAllPayBlocksResponse = {
  encode(message: QueryAllPayBlocksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payBlocks) {
      PayBlocks.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPayBlocksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPayBlocksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payBlocks.push(PayBlocks.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPayBlocksResponse {
    return {
      payBlocks: Array.isArray(object?.payBlocks) ? object.payBlocks.map((e: any) => PayBlocks.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPayBlocksResponse): unknown {
    const obj: any = {};
    if (message.payBlocks) {
      obj.payBlocks = message.payBlocks.map((e) => e ? PayBlocks.toJSON(e) : undefined);
    } else {
      obj.payBlocks = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPayBlocksResponse>, I>>(object: I): QueryAllPayBlocksResponse {
    const message = createBaseQueryAllPayBlocksResponse();
    message.payBlocks = object.payBlocks?.map((e) => PayBlocks.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetClientUsageRequest(): QueryGetClientUsageRequest {
  return { address: "" };
}

export const QueryGetClientUsageRequest = {
  encode(message: QueryGetClientUsageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetClientUsageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetClientUsageRequest();
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

  fromJSON(object: any): QueryGetClientUsageRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetClientUsageRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetClientUsageRequest>, I>>(object: I): QueryGetClientUsageRequest {
    const message = createBaseQueryGetClientUsageRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetClientUsageResponse(): QueryGetClientUsageResponse {
  return { clientUsage: undefined };
}

export const QueryGetClientUsageResponse = {
  encode(message: QueryGetClientUsageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientUsage !== undefined) {
      ClientUsage.encode(message.clientUsage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetClientUsageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetClientUsageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientUsage = ClientUsage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetClientUsageResponse {
    return { clientUsage: isSet(object.clientUsage) ? ClientUsage.fromJSON(object.clientUsage) : undefined };
  },

  toJSON(message: QueryGetClientUsageResponse): unknown {
    const obj: any = {};
    message.clientUsage !== undefined &&
      (obj.clientUsage = message.clientUsage ? ClientUsage.toJSON(message.clientUsage) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetClientUsageResponse>, I>>(object: I): QueryGetClientUsageResponse {
    const message = createBaseQueryGetClientUsageResponse();
    message.clientUsage = (object.clientUsage !== undefined && object.clientUsage !== null)
      ? ClientUsage.fromPartial(object.clientUsage)
      : undefined;
    return message;
  },
};

function createBaseQueryAllClientUsageRequest(): QueryAllClientUsageRequest {
  return { pagination: undefined };
}

export const QueryAllClientUsageRequest = {
  encode(message: QueryAllClientUsageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllClientUsageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllClientUsageRequest();
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

  fromJSON(object: any): QueryAllClientUsageRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllClientUsageRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllClientUsageRequest>, I>>(object: I): QueryAllClientUsageRequest {
    const message = createBaseQueryAllClientUsageRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllClientUsageResponse(): QueryAllClientUsageResponse {
  return { clientUsage: [], pagination: undefined };
}

export const QueryAllClientUsageResponse = {
  encode(message: QueryAllClientUsageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clientUsage) {
      ClientUsage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllClientUsageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllClientUsageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientUsage.push(ClientUsage.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllClientUsageResponse {
    return {
      clientUsage: Array.isArray(object?.clientUsage)
        ? object.clientUsage.map((e: any) => ClientUsage.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllClientUsageResponse): unknown {
    const obj: any = {};
    if (message.clientUsage) {
      obj.clientUsage = message.clientUsage.map((e) => e ? ClientUsage.toJSON(e) : undefined);
    } else {
      obj.clientUsage = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllClientUsageResponse>, I>>(object: I): QueryAllClientUsageResponse {
    const message = createBaseQueryAllClientUsageResponse();
    message.clientUsage = object.clientUsage?.map((e) => ClientUsage.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStraysRequest(): QueryGetStraysRequest {
  return { cid: "" };
}

export const QueryGetStraysRequest = {
  encode(message: QueryGetStraysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStraysRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStraysRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStraysRequest {
    return { cid: isSet(object.cid) ? String(object.cid) : "" };
  },

  toJSON(message: QueryGetStraysRequest): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStraysRequest>, I>>(object: I): QueryGetStraysRequest {
    const message = createBaseQueryGetStraysRequest();
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseQueryGetStraysResponse(): QueryGetStraysResponse {
  return { strays: undefined };
}

export const QueryGetStraysResponse = {
  encode(message: QueryGetStraysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.strays !== undefined) {
      Strays.encode(message.strays, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStraysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStraysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.strays = Strays.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStraysResponse {
    return { strays: isSet(object.strays) ? Strays.fromJSON(object.strays) : undefined };
  },

  toJSON(message: QueryGetStraysResponse): unknown {
    const obj: any = {};
    message.strays !== undefined && (obj.strays = message.strays ? Strays.toJSON(message.strays) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStraysResponse>, I>>(object: I): QueryGetStraysResponse {
    const message = createBaseQueryGetStraysResponse();
    message.strays = (object.strays !== undefined && object.strays !== null)
      ? Strays.fromPartial(object.strays)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStraysRequest(): QueryAllStraysRequest {
  return { pagination: undefined };
}

export const QueryAllStraysRequest = {
  encode(message: QueryAllStraysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStraysRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStraysRequest();
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

  fromJSON(object: any): QueryAllStraysRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStraysRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStraysRequest>, I>>(object: I): QueryAllStraysRequest {
    const message = createBaseQueryAllStraysRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStraysResponse(): QueryAllStraysResponse {
  return { strays: [], pagination: undefined };
}

export const QueryAllStraysResponse = {
  encode(message: QueryAllStraysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.strays) {
      Strays.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStraysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStraysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.strays.push(Strays.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllStraysResponse {
    return {
      strays: Array.isArray(object?.strays) ? object.strays.map((e: any) => Strays.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStraysResponse): unknown {
    const obj: any = {};
    if (message.strays) {
      obj.strays = message.strays.map((e) => e ? Strays.toJSON(e) : undefined);
    } else {
      obj.strays = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStraysResponse>, I>>(object: I): QueryAllStraysResponse {
    const message = createBaseQueryAllStraysResponse();
    message.strays = object.strays?.map((e) => Strays.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetClientFreeSpaceRequest(): QueryGetClientFreeSpaceRequest {
  return { address: "" };
}

export const QueryGetClientFreeSpaceRequest = {
  encode(message: QueryGetClientFreeSpaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetClientFreeSpaceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetClientFreeSpaceRequest();
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

  fromJSON(object: any): QueryGetClientFreeSpaceRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetClientFreeSpaceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetClientFreeSpaceRequest>, I>>(
    object: I,
  ): QueryGetClientFreeSpaceRequest {
    const message = createBaseQueryGetClientFreeSpaceRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetClientFreeSpaceResponse(): QueryGetClientFreeSpaceResponse {
  return { bytesfree: "" };
}

export const QueryGetClientFreeSpaceResponse = {
  encode(message: QueryGetClientFreeSpaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bytesfree !== "") {
      writer.uint32(10).string(message.bytesfree);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetClientFreeSpaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetClientFreeSpaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bytesfree = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetClientFreeSpaceResponse {
    return { bytesfree: isSet(object.bytesfree) ? String(object.bytesfree) : "" };
  },

  toJSON(message: QueryGetClientFreeSpaceResponse): unknown {
    const obj: any = {};
    message.bytesfree !== undefined && (obj.bytesfree = message.bytesfree);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetClientFreeSpaceResponse>, I>>(
    object: I,
  ): QueryGetClientFreeSpaceResponse {
    const message = createBaseQueryGetClientFreeSpaceResponse();
    message.bytesfree = object.bytesfree ?? "";
    return message;
  },
};

function createBaseQueryGetFidCidRequest(): QueryGetFidCidRequest {
  return { fid: "" };
}

export const QueryGetFidCidRequest = {
  encode(message: QueryGetFidCidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fid !== "") {
      writer.uint32(10).string(message.fid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFidCidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFidCidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFidCidRequest {
    return { fid: isSet(object.fid) ? String(object.fid) : "" };
  },

  toJSON(message: QueryGetFidCidRequest): unknown {
    const obj: any = {};
    message.fid !== undefined && (obj.fid = message.fid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetFidCidRequest>, I>>(object: I): QueryGetFidCidRequest {
    const message = createBaseQueryGetFidCidRequest();
    message.fid = object.fid ?? "";
    return message;
  },
};

function createBaseQueryGetFidCidResponse(): QueryGetFidCidResponse {
  return { fidCid: undefined };
}

export const QueryGetFidCidResponse = {
  encode(message: QueryGetFidCidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fidCid !== undefined) {
      FidCid.encode(message.fidCid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFidCidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFidCidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fidCid = FidCid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFidCidResponse {
    return { fidCid: isSet(object.fidCid) ? FidCid.fromJSON(object.fidCid) : undefined };
  },

  toJSON(message: QueryGetFidCidResponse): unknown {
    const obj: any = {};
    message.fidCid !== undefined && (obj.fidCid = message.fidCid ? FidCid.toJSON(message.fidCid) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetFidCidResponse>, I>>(object: I): QueryGetFidCidResponse {
    const message = createBaseQueryGetFidCidResponse();
    message.fidCid = (object.fidCid !== undefined && object.fidCid !== null)
      ? FidCid.fromPartial(object.fidCid)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFidCidRequest(): QueryAllFidCidRequest {
  return { pagination: undefined };
}

export const QueryAllFidCidRequest = {
  encode(message: QueryAllFidCidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFidCidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFidCidRequest();
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

  fromJSON(object: any): QueryAllFidCidRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllFidCidRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFidCidRequest>, I>>(object: I): QueryAllFidCidRequest {
    const message = createBaseQueryAllFidCidRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFidCidResponse(): QueryAllFidCidResponse {
  return { fidCid: [], pagination: undefined };
}

export const QueryAllFidCidResponse = {
  encode(message: QueryAllFidCidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fidCid) {
      FidCid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFidCidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFidCidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fidCid.push(FidCid.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllFidCidResponse {
    return {
      fidCid: Array.isArray(object?.fidCid) ? object.fidCid.map((e: any) => FidCid.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFidCidResponse): unknown {
    const obj: any = {};
    if (message.fidCid) {
      obj.fidCid = message.fidCid.map((e) => e ? FidCid.toJSON(e) : undefined);
    } else {
      obj.fidCid = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFidCidResponse>, I>>(object: I): QueryAllFidCidResponse {
    const message = createBaseQueryAllFidCidResponse();
    message.fidCid = object.fidCid?.map((e) => FidCid.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPayDataRequest(): QueryGetPayDataRequest {
  return { address: "" };
}

export const QueryGetPayDataRequest = {
  encode(message: QueryGetPayDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPayDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPayDataRequest();
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

  fromJSON(object: any): QueryGetPayDataRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetPayDataRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPayDataRequest>, I>>(object: I): QueryGetPayDataRequest {
    const message = createBaseQueryGetPayDataRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetPayDataResponse(): QueryGetPayDataResponse {
  return { blocksRemaining: 0, bytes: 0 };
}

export const QueryGetPayDataResponse = {
  encode(message: QueryGetPayDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blocksRemaining !== 0) {
      writer.uint32(8).int64(message.blocksRemaining);
    }
    if (message.bytes !== 0) {
      writer.uint32(16).int64(message.bytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPayDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPayDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blocksRemaining = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.bytes = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPayDataResponse {
    return {
      blocksRemaining: isSet(object.blocksRemaining) ? Number(object.blocksRemaining) : 0,
      bytes: isSet(object.bytes) ? Number(object.bytes) : 0,
    };
  },

  toJSON(message: QueryGetPayDataResponse): unknown {
    const obj: any = {};
    message.blocksRemaining !== undefined && (obj.blocksRemaining = Math.round(message.blocksRemaining));
    message.bytes !== undefined && (obj.bytes = Math.round(message.bytes));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPayDataResponse>, I>>(object: I): QueryGetPayDataResponse {
    const message = createBaseQueryGetPayDataResponse();
    message.blocksRemaining = object.blocksRemaining ?? 0;
    message.bytes = object.bytes ?? 0;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a Contracts by index. */
  Contracts(
    request: DeepPartial<QueryGetContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetContractsResponse>;
  /** Queries a list of Contracts items. */
  ContractsAll(
    request: DeepPartial<QueryAllContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllContractsResponse>;
  /** Queries a ActiveDeals by index. */
  ActiveDeals(
    request: DeepPartial<QueryGetActiveDealsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetActiveDealsResponse>;
  /** Queries a list of ActiveDeals items. */
  ActiveDealsAll(
    request: DeepPartial<QueryAllActiveDealsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllActiveDealsResponse>;
  /** Queries a Providers by index. */
  Providers(
    request: DeepPartial<QueryGetProvidersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetProvidersResponse>;
  /** Queries a list of Providers items. */
  ProvidersAll(
    request: DeepPartial<QueryAllProvidersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllProvidersResponse>;
  /** Queries a list of Freespace items. */
  Freespace(request: DeepPartial<QueryFreespaceRequest>, metadata?: grpc.Metadata): Promise<QueryFreespaceResponse>;
  /** Queries a list of FindFile items. */
  FindFile(request: DeepPartial<QueryFindFileRequest>, metadata?: grpc.Metadata): Promise<QueryFindFileResponse>;
  /** Queries a PayBlocks by index. */
  PayBlocks(
    request: DeepPartial<QueryGetPayBlocksRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetPayBlocksResponse>;
  /** Queries a list of PayBlocks items. */
  PayBlocksAll(
    request: DeepPartial<QueryAllPayBlocksRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllPayBlocksResponse>;
  /** Queries a ClientUsage by index. */
  ClientUsage(
    request: DeepPartial<QueryGetClientUsageRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetClientUsageResponse>;
  /** Queries a list of ClientUsage items. */
  ClientUsageAll(
    request: DeepPartial<QueryAllClientUsageRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllClientUsageResponse>;
  /** Queries a Strays by index. */
  Strays(request: DeepPartial<QueryGetStraysRequest>, metadata?: grpc.Metadata): Promise<QueryGetStraysResponse>;
  /** Queries a list of Strays items. */
  StraysAll(request: DeepPartial<QueryAllStraysRequest>, metadata?: grpc.Metadata): Promise<QueryAllStraysResponse>;
  /** Queries a list of GetClientFreeSpace items. */
  GetClientFreeSpace(
    request: DeepPartial<QueryGetClientFreeSpaceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetClientFreeSpaceResponse>;
  /** Queries a FidCid by index. */
  FidCid(request: DeepPartial<QueryGetFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryGetFidCidResponse>;
  /** Queries a list of FidCid items. */
  FidCidAll(request: DeepPartial<QueryAllFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryAllFidCidResponse>;
  /** Queries a list of GetPayData items. */
  GetPayData(request: DeepPartial<QueryGetPayDataRequest>, metadata?: grpc.Metadata): Promise<QueryGetPayDataResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Contracts = this.Contracts.bind(this);
    this.ContractsAll = this.ContractsAll.bind(this);
    this.ActiveDeals = this.ActiveDeals.bind(this);
    this.ActiveDealsAll = this.ActiveDealsAll.bind(this);
    this.Providers = this.Providers.bind(this);
    this.ProvidersAll = this.ProvidersAll.bind(this);
    this.Freespace = this.Freespace.bind(this);
    this.FindFile = this.FindFile.bind(this);
    this.PayBlocks = this.PayBlocks.bind(this);
    this.PayBlocksAll = this.PayBlocksAll.bind(this);
    this.ClientUsage = this.ClientUsage.bind(this);
    this.ClientUsageAll = this.ClientUsageAll.bind(this);
    this.Strays = this.Strays.bind(this);
    this.StraysAll = this.StraysAll.bind(this);
    this.GetClientFreeSpace = this.GetClientFreeSpace.bind(this);
    this.FidCid = this.FidCid.bind(this);
    this.FidCidAll = this.FidCidAll.bind(this);
    this.GetPayData = this.GetPayData.bind(this);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  Contracts(
    request: DeepPartial<QueryGetContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetContractsResponse> {
    return this.rpc.unary(QueryContractsDesc, QueryGetContractsRequest.fromPartial(request), metadata);
  }

  ContractsAll(
    request: DeepPartial<QueryAllContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllContractsResponse> {
    return this.rpc.unary(QueryContractsAllDesc, QueryAllContractsRequest.fromPartial(request), metadata);
  }

  ActiveDeals(
    request: DeepPartial<QueryGetActiveDealsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetActiveDealsResponse> {
    return this.rpc.unary(QueryActiveDealsDesc, QueryGetActiveDealsRequest.fromPartial(request), metadata);
  }

  ActiveDealsAll(
    request: DeepPartial<QueryAllActiveDealsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllActiveDealsResponse> {
    return this.rpc.unary(QueryActiveDealsAllDesc, QueryAllActiveDealsRequest.fromPartial(request), metadata);
  }

  Providers(
    request: DeepPartial<QueryGetProvidersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetProvidersResponse> {
    return this.rpc.unary(QueryProvidersDesc, QueryGetProvidersRequest.fromPartial(request), metadata);
  }

  ProvidersAll(
    request: DeepPartial<QueryAllProvidersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllProvidersResponse> {
    return this.rpc.unary(QueryProvidersAllDesc, QueryAllProvidersRequest.fromPartial(request), metadata);
  }

  Freespace(request: DeepPartial<QueryFreespaceRequest>, metadata?: grpc.Metadata): Promise<QueryFreespaceResponse> {
    return this.rpc.unary(QueryFreespaceDesc, QueryFreespaceRequest.fromPartial(request), metadata);
  }

  FindFile(request: DeepPartial<QueryFindFileRequest>, metadata?: grpc.Metadata): Promise<QueryFindFileResponse> {
    return this.rpc.unary(QueryFindFileDesc, QueryFindFileRequest.fromPartial(request), metadata);
  }

  PayBlocks(
    request: DeepPartial<QueryGetPayBlocksRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetPayBlocksResponse> {
    return this.rpc.unary(QueryPayBlocksDesc, QueryGetPayBlocksRequest.fromPartial(request), metadata);
  }

  PayBlocksAll(
    request: DeepPartial<QueryAllPayBlocksRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllPayBlocksResponse> {
    return this.rpc.unary(QueryPayBlocksAllDesc, QueryAllPayBlocksRequest.fromPartial(request), metadata);
  }

  ClientUsage(
    request: DeepPartial<QueryGetClientUsageRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetClientUsageResponse> {
    return this.rpc.unary(QueryClientUsageDesc, QueryGetClientUsageRequest.fromPartial(request), metadata);
  }

  ClientUsageAll(
    request: DeepPartial<QueryAllClientUsageRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllClientUsageResponse> {
    return this.rpc.unary(QueryClientUsageAllDesc, QueryAllClientUsageRequest.fromPartial(request), metadata);
  }

  Strays(request: DeepPartial<QueryGetStraysRequest>, metadata?: grpc.Metadata): Promise<QueryGetStraysResponse> {
    return this.rpc.unary(QueryStraysDesc, QueryGetStraysRequest.fromPartial(request), metadata);
  }

  StraysAll(request: DeepPartial<QueryAllStraysRequest>, metadata?: grpc.Metadata): Promise<QueryAllStraysResponse> {
    return this.rpc.unary(QueryStraysAllDesc, QueryAllStraysRequest.fromPartial(request), metadata);
  }

  GetClientFreeSpace(
    request: DeepPartial<QueryGetClientFreeSpaceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetClientFreeSpaceResponse> {
    return this.rpc.unary(QueryGetClientFreeSpaceDesc, QueryGetClientFreeSpaceRequest.fromPartial(request), metadata);
  }

  FidCid(request: DeepPartial<QueryGetFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryGetFidCidResponse> {
    return this.rpc.unary(QueryFidCidDesc, QueryGetFidCidRequest.fromPartial(request), metadata);
  }

  FidCidAll(request: DeepPartial<QueryAllFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryAllFidCidResponse> {
    return this.rpc.unary(QueryFidCidAllDesc, QueryAllFidCidRequest.fromPartial(request), metadata);
  }

  GetPayData(request: DeepPartial<QueryGetPayDataRequest>, metadata?: grpc.Metadata): Promise<QueryGetPayDataResponse> {
    return this.rpc.unary(QueryGetPayDataDesc, QueryGetPayDataRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "jackaldao.canine.storage.Query" };

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

export const QueryContractsDesc: UnaryMethodDefinitionish = {
  methodName: "Contracts",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetContractsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetContractsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryContractsAllDesc: UnaryMethodDefinitionish = {
  methodName: "ContractsAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllContractsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllContractsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryActiveDealsDesc: UnaryMethodDefinitionish = {
  methodName: "ActiveDeals",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetActiveDealsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetActiveDealsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryActiveDealsAllDesc: UnaryMethodDefinitionish = {
  methodName: "ActiveDealsAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllActiveDealsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllActiveDealsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryProvidersDesc: UnaryMethodDefinitionish = {
  methodName: "Providers",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetProvidersRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetProvidersResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryProvidersAllDesc: UnaryMethodDefinitionish = {
  methodName: "ProvidersAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllProvidersRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllProvidersResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryFreespaceDesc: UnaryMethodDefinitionish = {
  methodName: "Freespace",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFreespaceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFreespaceResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryFindFileDesc: UnaryMethodDefinitionish = {
  methodName: "FindFile",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFindFileRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFindFileResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPayBlocksDesc: UnaryMethodDefinitionish = {
  methodName: "PayBlocks",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPayBlocksRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPayBlocksResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPayBlocksAllDesc: UnaryMethodDefinitionish = {
  methodName: "PayBlocksAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPayBlocksRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPayBlocksResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryClientUsageDesc: UnaryMethodDefinitionish = {
  methodName: "ClientUsage",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetClientUsageRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetClientUsageResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryClientUsageAllDesc: UnaryMethodDefinitionish = {
  methodName: "ClientUsageAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllClientUsageRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllClientUsageResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryStraysDesc: UnaryMethodDefinitionish = {
  methodName: "Strays",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetStraysRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetStraysResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryStraysAllDesc: UnaryMethodDefinitionish = {
  methodName: "StraysAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllStraysRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllStraysResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryGetClientFreeSpaceDesc: UnaryMethodDefinitionish = {
  methodName: "GetClientFreeSpace",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetClientFreeSpaceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetClientFreeSpaceResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryFidCidDesc: UnaryMethodDefinitionish = {
  methodName: "FidCid",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetFidCidRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetFidCidResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryFidCidAllDesc: UnaryMethodDefinitionish = {
  methodName: "FidCidAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllFidCidRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllFidCidResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryGetPayDataDesc: UnaryMethodDefinitionish = {
  methodName: "GetPayData",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPayDataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPayDataResponse.decode(data),
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

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
