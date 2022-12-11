/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { ActiveDeals } from "./active_deals";
import { Contracts } from "./contracts";
import { FidCid } from "./fid_cid";
import { Params } from "./params";
import { StoragePaymentInfo } from "./payment_info";
import { Providers } from "./providers";
import { Strays } from "./strays";

export const protobufPackage = "canine_chain.storage";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryContractRequest {
  cid: string;
}

export interface QueryContractResponse {
  contracts: Contracts | undefined;
}

export interface QueryAllContractsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllContractsResponse {
  contracts: Contracts[];
  pagination: PageResponse | undefined;
}

export interface QueryActiveDealRequest {
  cid: string;
}

export interface QueryActiveDealResponse {
  activeDeals: ActiveDeals | undefined;
}

export interface QueryAllActiveDealsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllActiveDealsResponse {
  activeDeals: ActiveDeals[];
  pagination: PageResponse | undefined;
}

export interface QueryProviderRequest {
  address: string;
}

export interface QueryProviderResponse {
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

export interface QueryStrayRequest {
  cid: string;
}

export interface QueryStrayResponse {
  strays: Strays | undefined;
}

export interface QueryAllStraysRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStraysResponse {
  strays: Strays[];
  pagination: PageResponse | undefined;
}

export interface QueryClientFreeSpaceRequest {
  address: string;
}

export interface QueryClientFreeSpaceResponse {
  bytesfree: number;
}

export interface QueryFidCidRequest {
  fid: string;
}

export interface QueryFidCidResponse {
  fidCid: FidCid | undefined;
}

export interface QueryAllFidCidRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFidCidResponse {
  fidCid: FidCid[];
  pagination: PageResponse | undefined;
}

export interface QueryPayDataRequest {
  address: string;
}

export interface QueryPayDataResponse {
  timeRemaining: number;
  bytes: number;
}

export interface QueryStoragePaymentInfoRequest {
  address: string;
}

export interface QueryStoragePaymentInfoResponse {
  storagePaymentInfo: StoragePaymentInfo | undefined;
}

export interface QueryAllStoragePaymentInfoRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoragePaymentInfoResponse {
  storagePaymentInfo: StoragePaymentInfo[];
  pagination: PageResponse | undefined;
}

export interface QueryFileUploadCheck {
  address: string;
  bytes: number;
}

export interface QueryFileUploadCheckResponse {
  valid: boolean;
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

function createBaseQueryContractRequest(): QueryContractRequest {
  return { cid: "" };
}

export const QueryContractRequest = {
  encode(message: QueryContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractRequest();
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

  fromJSON(object: any): QueryContractRequest {
    return { cid: isSet(object.cid) ? String(object.cid) : "" };
  },

  toJSON(message: QueryContractRequest): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractRequest>, I>>(object: I): QueryContractRequest {
    const message = createBaseQueryContractRequest();
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseQueryContractResponse(): QueryContractResponse {
  return { contracts: undefined };
}

export const QueryContractResponse = {
  encode(message: QueryContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contracts !== undefined) {
      Contracts.encode(message.contracts, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractResponse();
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

  fromJSON(object: any): QueryContractResponse {
    return { contracts: isSet(object.contracts) ? Contracts.fromJSON(object.contracts) : undefined };
  },

  toJSON(message: QueryContractResponse): unknown {
    const obj: any = {};
    message.contracts !== undefined &&
      (obj.contracts = message.contracts ? Contracts.toJSON(message.contracts) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractResponse>, I>>(object: I): QueryContractResponse {
    const message = createBaseQueryContractResponse();
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

function createBaseQueryActiveDealRequest(): QueryActiveDealRequest {
  return { cid: "" };
}

export const QueryActiveDealRequest = {
  encode(message: QueryActiveDealRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveDealRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveDealRequest();
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

  fromJSON(object: any): QueryActiveDealRequest {
    return { cid: isSet(object.cid) ? String(object.cid) : "" };
  },

  toJSON(message: QueryActiveDealRequest): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActiveDealRequest>, I>>(object: I): QueryActiveDealRequest {
    const message = createBaseQueryActiveDealRequest();
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseQueryActiveDealResponse(): QueryActiveDealResponse {
  return { activeDeals: undefined };
}

export const QueryActiveDealResponse = {
  encode(message: QueryActiveDealResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activeDeals !== undefined) {
      ActiveDeals.encode(message.activeDeals, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveDealResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveDealResponse();
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

  fromJSON(object: any): QueryActiveDealResponse {
    return { activeDeals: isSet(object.activeDeals) ? ActiveDeals.fromJSON(object.activeDeals) : undefined };
  },

  toJSON(message: QueryActiveDealResponse): unknown {
    const obj: any = {};
    message.activeDeals !== undefined &&
      (obj.activeDeals = message.activeDeals ? ActiveDeals.toJSON(message.activeDeals) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActiveDealResponse>, I>>(object: I): QueryActiveDealResponse {
    const message = createBaseQueryActiveDealResponse();
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

function createBaseQueryProviderRequest(): QueryProviderRequest {
  return { address: "" };
}

export const QueryProviderRequest = {
  encode(message: QueryProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderRequest();
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

  fromJSON(object: any): QueryProviderRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryProviderRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProviderRequest>, I>>(object: I): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryProviderResponse(): QueryProviderResponse {
  return { providers: undefined };
}

export const QueryProviderResponse = {
  encode(message: QueryProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.providers !== undefined) {
      Providers.encode(message.providers, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderResponse();
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

  fromJSON(object: any): QueryProviderResponse {
    return { providers: isSet(object.providers) ? Providers.fromJSON(object.providers) : undefined };
  },

  toJSON(message: QueryProviderResponse): unknown {
    const obj: any = {};
    message.providers !== undefined &&
      (obj.providers = message.providers ? Providers.toJSON(message.providers) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProviderResponse>, I>>(object: I): QueryProviderResponse {
    const message = createBaseQueryProviderResponse();
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

function createBaseQueryStrayRequest(): QueryStrayRequest {
  return { cid: "" };
}

export const QueryStrayRequest = {
  encode(message: QueryStrayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStrayRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStrayRequest();
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

  fromJSON(object: any): QueryStrayRequest {
    return { cid: isSet(object.cid) ? String(object.cid) : "" };
  },

  toJSON(message: QueryStrayRequest): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStrayRequest>, I>>(object: I): QueryStrayRequest {
    const message = createBaseQueryStrayRequest();
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseQueryStrayResponse(): QueryStrayResponse {
  return { strays: undefined };
}

export const QueryStrayResponse = {
  encode(message: QueryStrayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.strays !== undefined) {
      Strays.encode(message.strays, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStrayResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStrayResponse();
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

  fromJSON(object: any): QueryStrayResponse {
    return { strays: isSet(object.strays) ? Strays.fromJSON(object.strays) : undefined };
  },

  toJSON(message: QueryStrayResponse): unknown {
    const obj: any = {};
    message.strays !== undefined && (obj.strays = message.strays ? Strays.toJSON(message.strays) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStrayResponse>, I>>(object: I): QueryStrayResponse {
    const message = createBaseQueryStrayResponse();
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

function createBaseQueryClientFreeSpaceRequest(): QueryClientFreeSpaceRequest {
  return { address: "" };
}

export const QueryClientFreeSpaceRequest = {
  encode(message: QueryClientFreeSpaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientFreeSpaceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientFreeSpaceRequest();
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

  fromJSON(object: any): QueryClientFreeSpaceRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryClientFreeSpaceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClientFreeSpaceRequest>, I>>(object: I): QueryClientFreeSpaceRequest {
    const message = createBaseQueryClientFreeSpaceRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryClientFreeSpaceResponse(): QueryClientFreeSpaceResponse {
  return { bytesfree: 0 };
}

export const QueryClientFreeSpaceResponse = {
  encode(message: QueryClientFreeSpaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bytesfree !== 0) {
      writer.uint32(8).int64(message.bytesfree);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientFreeSpaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientFreeSpaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bytesfree = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientFreeSpaceResponse {
    return { bytesfree: isSet(object.bytesfree) ? Number(object.bytesfree) : 0 };
  },

  toJSON(message: QueryClientFreeSpaceResponse): unknown {
    const obj: any = {};
    message.bytesfree !== undefined && (obj.bytesfree = Math.round(message.bytesfree));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClientFreeSpaceResponse>, I>>(object: I): QueryClientFreeSpaceResponse {
    const message = createBaseQueryClientFreeSpaceResponse();
    message.bytesfree = object.bytesfree ?? 0;
    return message;
  },
};

function createBaseQueryFidCidRequest(): QueryFidCidRequest {
  return { fid: "" };
}

export const QueryFidCidRequest = {
  encode(message: QueryFidCidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fid !== "") {
      writer.uint32(10).string(message.fid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFidCidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFidCidRequest();
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

  fromJSON(object: any): QueryFidCidRequest {
    return { fid: isSet(object.fid) ? String(object.fid) : "" };
  },

  toJSON(message: QueryFidCidRequest): unknown {
    const obj: any = {};
    message.fid !== undefined && (obj.fid = message.fid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFidCidRequest>, I>>(object: I): QueryFidCidRequest {
    const message = createBaseQueryFidCidRequest();
    message.fid = object.fid ?? "";
    return message;
  },
};

function createBaseQueryFidCidResponse(): QueryFidCidResponse {
  return { fidCid: undefined };
}

export const QueryFidCidResponse = {
  encode(message: QueryFidCidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fidCid !== undefined) {
      FidCid.encode(message.fidCid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFidCidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFidCidResponse();
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

  fromJSON(object: any): QueryFidCidResponse {
    return { fidCid: isSet(object.fidCid) ? FidCid.fromJSON(object.fidCid) : undefined };
  },

  toJSON(message: QueryFidCidResponse): unknown {
    const obj: any = {};
    message.fidCid !== undefined && (obj.fidCid = message.fidCid ? FidCid.toJSON(message.fidCid) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFidCidResponse>, I>>(object: I): QueryFidCidResponse {
    const message = createBaseQueryFidCidResponse();
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

function createBaseQueryPayDataRequest(): QueryPayDataRequest {
  return { address: "" };
}

export const QueryPayDataRequest = {
  encode(message: QueryPayDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayDataRequest();
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

  fromJSON(object: any): QueryPayDataRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryPayDataRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPayDataRequest>, I>>(object: I): QueryPayDataRequest {
    const message = createBaseQueryPayDataRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryPayDataResponse(): QueryPayDataResponse {
  return { timeRemaining: 0, bytes: 0 };
}

export const QueryPayDataResponse = {
  encode(message: QueryPayDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeRemaining !== 0) {
      writer.uint32(8).int64(message.timeRemaining);
    }
    if (message.bytes !== 0) {
      writer.uint32(16).int64(message.bytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeRemaining = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): QueryPayDataResponse {
    return {
      timeRemaining: isSet(object.timeRemaining) ? Number(object.timeRemaining) : 0,
      bytes: isSet(object.bytes) ? Number(object.bytes) : 0,
    };
  },

  toJSON(message: QueryPayDataResponse): unknown {
    const obj: any = {};
    message.timeRemaining !== undefined && (obj.timeRemaining = Math.round(message.timeRemaining));
    message.bytes !== undefined && (obj.bytes = Math.round(message.bytes));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPayDataResponse>, I>>(object: I): QueryPayDataResponse {
    const message = createBaseQueryPayDataResponse();
    message.timeRemaining = object.timeRemaining ?? 0;
    message.bytes = object.bytes ?? 0;
    return message;
  },
};

function createBaseQueryStoragePaymentInfoRequest(): QueryStoragePaymentInfoRequest {
  return { address: "" };
}

export const QueryStoragePaymentInfoRequest = {
  encode(message: QueryStoragePaymentInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStoragePaymentInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStoragePaymentInfoRequest();
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

  fromJSON(object: any): QueryStoragePaymentInfoRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryStoragePaymentInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStoragePaymentInfoRequest>, I>>(
    object: I,
  ): QueryStoragePaymentInfoRequest {
    const message = createBaseQueryStoragePaymentInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryStoragePaymentInfoResponse(): QueryStoragePaymentInfoResponse {
  return { storagePaymentInfo: undefined };
}

export const QueryStoragePaymentInfoResponse = {
  encode(message: QueryStoragePaymentInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storagePaymentInfo !== undefined) {
      StoragePaymentInfo.encode(message.storagePaymentInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStoragePaymentInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStoragePaymentInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storagePaymentInfo = StoragePaymentInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStoragePaymentInfoResponse {
    return {
      storagePaymentInfo: isSet(object.storagePaymentInfo)
        ? StoragePaymentInfo.fromJSON(object.storagePaymentInfo)
        : undefined,
    };
  },

  toJSON(message: QueryStoragePaymentInfoResponse): unknown {
    const obj: any = {};
    message.storagePaymentInfo !== undefined && (obj.storagePaymentInfo = message.storagePaymentInfo
      ? StoragePaymentInfo.toJSON(message.storagePaymentInfo)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStoragePaymentInfoResponse>, I>>(
    object: I,
  ): QueryStoragePaymentInfoResponse {
    const message = createBaseQueryStoragePaymentInfoResponse();
    message.storagePaymentInfo = (object.storagePaymentInfo !== undefined && object.storagePaymentInfo !== null)
      ? StoragePaymentInfo.fromPartial(object.storagePaymentInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoragePaymentInfoRequest(): QueryAllStoragePaymentInfoRequest {
  return { pagination: undefined };
}

export const QueryAllStoragePaymentInfoRequest = {
  encode(message: QueryAllStoragePaymentInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoragePaymentInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoragePaymentInfoRequest();
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

  fromJSON(object: any): QueryAllStoragePaymentInfoRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStoragePaymentInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoragePaymentInfoRequest>, I>>(
    object: I,
  ): QueryAllStoragePaymentInfoRequest {
    const message = createBaseQueryAllStoragePaymentInfoRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoragePaymentInfoResponse(): QueryAllStoragePaymentInfoResponse {
  return { storagePaymentInfo: [], pagination: undefined };
}

export const QueryAllStoragePaymentInfoResponse = {
  encode(message: QueryAllStoragePaymentInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storagePaymentInfo) {
      StoragePaymentInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoragePaymentInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoragePaymentInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storagePaymentInfo.push(StoragePaymentInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllStoragePaymentInfoResponse {
    return {
      storagePaymentInfo: Array.isArray(object?.storagePaymentInfo)
        ? object.storagePaymentInfo.map((e: any) => StoragePaymentInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStoragePaymentInfoResponse): unknown {
    const obj: any = {};
    if (message.storagePaymentInfo) {
      obj.storagePaymentInfo = message.storagePaymentInfo.map((e) => e ? StoragePaymentInfo.toJSON(e) : undefined);
    } else {
      obj.storagePaymentInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoragePaymentInfoResponse>, I>>(
    object: I,
  ): QueryAllStoragePaymentInfoResponse {
    const message = createBaseQueryAllStoragePaymentInfoResponse();
    message.storagePaymentInfo = object.storagePaymentInfo?.map((e) => StoragePaymentInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFileUploadCheck(): QueryFileUploadCheck {
  return { address: "", bytes: 0 };
}

export const QueryFileUploadCheck = {
  encode(message: QueryFileUploadCheck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.bytes !== 0) {
      writer.uint32(16).int64(message.bytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFileUploadCheck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileUploadCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QueryFileUploadCheck {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      bytes: isSet(object.bytes) ? Number(object.bytes) : 0,
    };
  },

  toJSON(message: QueryFileUploadCheck): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.bytes !== undefined && (obj.bytes = Math.round(message.bytes));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFileUploadCheck>, I>>(object: I): QueryFileUploadCheck {
    const message = createBaseQueryFileUploadCheck();
    message.address = object.address ?? "";
    message.bytes = object.bytes ?? 0;
    return message;
  },
};

function createBaseQueryFileUploadCheckResponse(): QueryFileUploadCheckResponse {
  return { valid: false };
}

export const QueryFileUploadCheckResponse = {
  encode(message: QueryFileUploadCheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFileUploadCheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileUploadCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFileUploadCheckResponse {
    return { valid: isSet(object.valid) ? Boolean(object.valid) : false };
  },

  toJSON(message: QueryFileUploadCheckResponse): unknown {
    const obj: any = {};
    message.valid !== undefined && (obj.valid = message.valid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFileUploadCheckResponse>, I>>(object: I): QueryFileUploadCheckResponse {
    const message = createBaseQueryFileUploadCheckResponse();
    message.valid = object.valid ?? false;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a Contracts by index. */
  Contracts(request: DeepPartial<QueryContractRequest>, metadata?: grpc.Metadata): Promise<QueryContractResponse>;
  /** Queries a list of Contracts items. */
  ContractsAll(
    request: DeepPartial<QueryAllContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllContractsResponse>;
  /** Queries a ActiveDeals by index. */
  ActiveDeals(request: DeepPartial<QueryActiveDealRequest>, metadata?: grpc.Metadata): Promise<QueryActiveDealResponse>;
  /** Queries a list of ActiveDeals items. */
  ActiveDealsAll(
    request: DeepPartial<QueryAllActiveDealsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllActiveDealsResponse>;
  /** Queries a Providers by index. */
  Providers(request: DeepPartial<QueryProviderRequest>, metadata?: grpc.Metadata): Promise<QueryProviderResponse>;
  /** Queries a list of Providers items. */
  ProvidersAll(
    request: DeepPartial<QueryAllProvidersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllProvidersResponse>;
  /** Queries a list of Freespace items. */
  Freespace(request: DeepPartial<QueryFreespaceRequest>, metadata?: grpc.Metadata): Promise<QueryFreespaceResponse>;
  /** Queries a list of FindFile items. */
  FindFile(request: DeepPartial<QueryFindFileRequest>, metadata?: grpc.Metadata): Promise<QueryFindFileResponse>;
  /** Queries a Strays by index. */
  Strays(request: DeepPartial<QueryStrayRequest>, metadata?: grpc.Metadata): Promise<QueryStrayResponse>;
  /** Queries a list of Strays items. */
  StraysAll(request: DeepPartial<QueryAllStraysRequest>, metadata?: grpc.Metadata): Promise<QueryAllStraysResponse>;
  /** Queries a list of GetClientFreeSpace items. */
  GetClientFreeSpace(
    request: DeepPartial<QueryClientFreeSpaceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClientFreeSpaceResponse>;
  /** Queries a FidCid by index. */
  FidCid(request: DeepPartial<QueryFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryFidCidResponse>;
  /** Queries a list of FidCid items. */
  FidCidAll(request: DeepPartial<QueryAllFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryAllFidCidResponse>;
  /** Queries a list of GetPayData items. */
  GetPayData(request: DeepPartial<QueryPayDataRequest>, metadata?: grpc.Metadata): Promise<QueryPayDataResponse>;
  /** Queries a StoragePaymentInfo by address. */
  StoragePaymentInfo(
    request: DeepPartial<QueryStoragePaymentInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryStoragePaymentInfoResponse>;
  /** Queries a list of StoragePaymentInfo items. */
  StoragePaymentInfoAll(
    request: DeepPartial<QueryAllStoragePaymentInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllStoragePaymentInfoResponse>;
  /** Queries whether user can upload a file based on size */
  FileUploadCheck(
    request: DeepPartial<QueryFileUploadCheck>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFileUploadCheckResponse>;
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
    this.Strays = this.Strays.bind(this);
    this.StraysAll = this.StraysAll.bind(this);
    this.GetClientFreeSpace = this.GetClientFreeSpace.bind(this);
    this.FidCid = this.FidCid.bind(this);
    this.FidCidAll = this.FidCidAll.bind(this);
    this.GetPayData = this.GetPayData.bind(this);
    this.StoragePaymentInfo = this.StoragePaymentInfo.bind(this);
    this.StoragePaymentInfoAll = this.StoragePaymentInfoAll.bind(this);
    this.FileUploadCheck = this.FileUploadCheck.bind(this);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  Contracts(request: DeepPartial<QueryContractRequest>, metadata?: grpc.Metadata): Promise<QueryContractResponse> {
    return this.rpc.unary(QueryContractsDesc, QueryContractRequest.fromPartial(request), metadata);
  }

  ContractsAll(
    request: DeepPartial<QueryAllContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllContractsResponse> {
    return this.rpc.unary(QueryContractsAllDesc, QueryAllContractsRequest.fromPartial(request), metadata);
  }

  ActiveDeals(
    request: DeepPartial<QueryActiveDealRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryActiveDealResponse> {
    return this.rpc.unary(QueryActiveDealsDesc, QueryActiveDealRequest.fromPartial(request), metadata);
  }

  ActiveDealsAll(
    request: DeepPartial<QueryAllActiveDealsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllActiveDealsResponse> {
    return this.rpc.unary(QueryActiveDealsAllDesc, QueryAllActiveDealsRequest.fromPartial(request), metadata);
  }

  Providers(request: DeepPartial<QueryProviderRequest>, metadata?: grpc.Metadata): Promise<QueryProviderResponse> {
    return this.rpc.unary(QueryProvidersDesc, QueryProviderRequest.fromPartial(request), metadata);
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

  Strays(request: DeepPartial<QueryStrayRequest>, metadata?: grpc.Metadata): Promise<QueryStrayResponse> {
    return this.rpc.unary(QueryStraysDesc, QueryStrayRequest.fromPartial(request), metadata);
  }

  StraysAll(request: DeepPartial<QueryAllStraysRequest>, metadata?: grpc.Metadata): Promise<QueryAllStraysResponse> {
    return this.rpc.unary(QueryStraysAllDesc, QueryAllStraysRequest.fromPartial(request), metadata);
  }

  GetClientFreeSpace(
    request: DeepPartial<QueryClientFreeSpaceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClientFreeSpaceResponse> {
    return this.rpc.unary(QueryGetClientFreeSpaceDesc, QueryClientFreeSpaceRequest.fromPartial(request), metadata);
  }

  FidCid(request: DeepPartial<QueryFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryFidCidResponse> {
    return this.rpc.unary(QueryFidCidDesc, QueryFidCidRequest.fromPartial(request), metadata);
  }

  FidCidAll(request: DeepPartial<QueryAllFidCidRequest>, metadata?: grpc.Metadata): Promise<QueryAllFidCidResponse> {
    return this.rpc.unary(QueryFidCidAllDesc, QueryAllFidCidRequest.fromPartial(request), metadata);
  }

  GetPayData(request: DeepPartial<QueryPayDataRequest>, metadata?: grpc.Metadata): Promise<QueryPayDataResponse> {
    return this.rpc.unary(QueryGetPayDataDesc, QueryPayDataRequest.fromPartial(request), metadata);
  }

  StoragePaymentInfo(
    request: DeepPartial<QueryStoragePaymentInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryStoragePaymentInfoResponse> {
    return this.rpc.unary(QueryStoragePaymentInfoDesc, QueryStoragePaymentInfoRequest.fromPartial(request), metadata);
  }

  StoragePaymentInfoAll(
    request: DeepPartial<QueryAllStoragePaymentInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllStoragePaymentInfoResponse> {
    return this.rpc.unary(
      QueryStoragePaymentInfoAllDesc,
      QueryAllStoragePaymentInfoRequest.fromPartial(request),
      metadata,
    );
  }

  FileUploadCheck(
    request: DeepPartial<QueryFileUploadCheck>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFileUploadCheckResponse> {
    return this.rpc.unary(QueryFileUploadCheckDesc, QueryFileUploadCheck.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "canine_chain.storage.Query" };

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
      return QueryContractRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryContractResponse.decode(data),
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
      return QueryActiveDealRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryActiveDealResponse.decode(data),
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
      return QueryProviderRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryProviderResponse.decode(data),
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

export const QueryStraysDesc: UnaryMethodDefinitionish = {
  methodName: "Strays",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryStrayRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryStrayResponse.decode(data),
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
      return QueryClientFreeSpaceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClientFreeSpaceResponse.decode(data),
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
      return QueryFidCidRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFidCidResponse.decode(data),
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
      return QueryPayDataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPayDataResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryStoragePaymentInfoDesc: UnaryMethodDefinitionish = {
  methodName: "StoragePaymentInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryStoragePaymentInfoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryStoragePaymentInfoResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryStoragePaymentInfoAllDesc: UnaryMethodDefinitionish = {
  methodName: "StoragePaymentInfoAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllStoragePaymentInfoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllStoragePaymentInfoResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryFileUploadCheckDesc: UnaryMethodDefinitionish = {
  methodName: "FileUploadCheck",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFileUploadCheck.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFileUploadCheckResponse.decode(data),
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
