/* eslint-disable */
import { grpc } from '@improbable-eng/grpc-web'
import { BrowserHeaders } from 'browser-headers'
import _m0 from 'protobufjs/minimal'
import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination'
import { Files } from './files'
import { Params } from './params'
import { Pubkey } from './pubkey'

export const protobufPackage = "canine_chain.filetree";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryEncryptRequest {
  address: string;
  message: string;
}

export interface QueryEncryptResponse {
  encryptionData: string;
}

export interface QueryDecryptRequest {
  message: string;
}

export interface QueryDecryptResponse {
  data: string;
}

export interface QueryFileRequest {
  address: string;
  ownerAddress: string;
}

export interface QueryFileResponse {
  files: Files | undefined;
}

export interface QueryAllFilesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFilesResponse {
  files: Files[];
  pagination: PageResponse | undefined;
}

export interface QueryPubkeyRequest {
  address: string;
}

export interface QueryPubkeyResponse {
  pubkey: Pubkey | undefined;
}

export interface QueryAllPubkeysRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPubkeysResponse {
  pubkey: Pubkey[];
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

function createBaseQueryEncryptRequest(): QueryEncryptRequest {
  return { address: "", message: "" };
}

export const QueryEncryptRequest = {
  encode(message: QueryEncryptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEncryptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEncryptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEncryptRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: QueryEncryptRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEncryptRequest>, I>>(object: I): QueryEncryptRequest {
    const message = createBaseQueryEncryptRequest();
    message.address = object.address ?? "";
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseQueryEncryptResponse(): QueryEncryptResponse {
  return { encryptionData: "" };
}

export const QueryEncryptResponse = {
  encode(message: QueryEncryptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encryptionData !== "") {
      writer.uint32(10).string(message.encryptionData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEncryptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEncryptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encryptionData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEncryptResponse {
    return { encryptionData: isSet(object.encryptionData) ? String(object.encryptionData) : "" };
  },

  toJSON(message: QueryEncryptResponse): unknown {
    const obj: any = {};
    message.encryptionData !== undefined && (obj.encryptionData = message.encryptionData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEncryptResponse>, I>>(object: I): QueryEncryptResponse {
    const message = createBaseQueryEncryptResponse();
    message.encryptionData = object.encryptionData ?? "";
    return message;
  },
};

function createBaseQueryDecryptRequest(): QueryDecryptRequest {
  return { message: "" };
}

export const QueryDecryptRequest = {
  encode(message: QueryDecryptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDecryptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDecryptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDecryptRequest {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: QueryDecryptRequest): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDecryptRequest>, I>>(object: I): QueryDecryptRequest {
    const message = createBaseQueryDecryptRequest();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseQueryDecryptResponse(): QueryDecryptResponse {
  return { data: "" };
}

export const QueryDecryptResponse = {
  encode(message: QueryDecryptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDecryptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDecryptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDecryptResponse {
    return { data: isSet(object.data) ? String(object.data) : "" };
  },

  toJSON(message: QueryDecryptResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDecryptResponse>, I>>(object: I): QueryDecryptResponse {
    const message = createBaseQueryDecryptResponse();
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseQueryFileRequest(): QueryFileRequest {
  return { address: "", ownerAddress: "" };
}

export const QueryFileRequest = {
  encode(message: QueryFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFileRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
    };
  },

  toJSON(message: QueryFileRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFileRequest>, I>>(object: I): QueryFileRequest {
    const message = createBaseQueryFileRequest();
    message.address = object.address ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
};

function createBaseQueryFileResponse(): QueryFileResponse {
  return { files: undefined };
}

export const QueryFileResponse = {
  encode(message: QueryFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.files !== undefined) {
      Files.encode(message.files, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files = Files.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFileResponse {
    return { files: isSet(object.files) ? Files.fromJSON(object.files) : undefined };
  },

  toJSON(message: QueryFileResponse): unknown {
    const obj: any = {};
    message.files !== undefined && (obj.files = message.files ? Files.toJSON(message.files) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFileResponse>, I>>(object: I): QueryFileResponse {
    const message = createBaseQueryFileResponse();
    message.files = (object.files !== undefined && object.files !== null) ? Files.fromPartial(object.files) : undefined;
    return message;
  },
};

function createBaseQueryAllFilesRequest(): QueryAllFilesRequest {
  return { pagination: undefined };
}

export const QueryAllFilesRequest = {
  encode(message: QueryAllFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFilesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFilesRequest();
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

  fromJSON(object: any): QueryAllFilesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllFilesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFilesRequest>, I>>(object: I): QueryAllFilesRequest {
    const message = createBaseQueryAllFilesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFilesResponse(): QueryAllFilesResponse {
  return { files: [], pagination: undefined };
}

export const QueryAllFilesResponse = {
  encode(message: QueryAllFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      Files.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFilesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(Files.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllFilesResponse {
    return {
      files: Array.isArray(object?.files) ? object.files.map((e: any) => Files.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFilesResponse): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) => e ? Files.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFilesResponse>, I>>(object: I): QueryAllFilesResponse {
    const message = createBaseQueryAllFilesResponse();
    message.files = object.files?.map((e) => Files.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPubkeyRequest(): QueryPubkeyRequest {
  return { address: "" };
}

export const QueryPubkeyRequest = {
  encode(message: QueryPubkeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPubkeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPubkeyRequest();
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

  fromJSON(object: any): QueryPubkeyRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryPubkeyRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPubkeyRequest>, I>>(object: I): QueryPubkeyRequest {
    const message = createBaseQueryPubkeyRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryPubkeyResponse(): QueryPubkeyResponse {
  return { pubkey: undefined };
}

export const QueryPubkeyResponse = {
  encode(message: QueryPubkeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubkey !== undefined) {
      Pubkey.encode(message.pubkey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPubkeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPubkeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubkey = Pubkey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPubkeyResponse {
    return { pubkey: isSet(object.pubkey) ? Pubkey.fromJSON(object.pubkey) : undefined };
  },

  toJSON(message: QueryPubkeyResponse): unknown {
    const obj: any = {};
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Pubkey.toJSON(message.pubkey) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPubkeyResponse>, I>>(object: I): QueryPubkeyResponse {
    const message = createBaseQueryPubkeyResponse();
    message.pubkey = (object.pubkey !== undefined && object.pubkey !== null)
      ? Pubkey.fromPartial(object.pubkey)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPubkeysRequest(): QueryAllPubkeysRequest {
  return { pagination: undefined };
}

export const QueryAllPubkeysRequest = {
  encode(message: QueryAllPubkeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPubkeysRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPubkeysRequest();
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

  fromJSON(object: any): QueryAllPubkeysRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPubkeysRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPubkeysRequest>, I>>(object: I): QueryAllPubkeysRequest {
    const message = createBaseQueryAllPubkeysRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPubkeysResponse(): QueryAllPubkeysResponse {
  return { pubkey: [], pagination: undefined };
}

export const QueryAllPubkeysResponse = {
  encode(message: QueryAllPubkeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pubkey) {
      Pubkey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPubkeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPubkeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubkey.push(Pubkey.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPubkeysResponse {
    return {
      pubkey: Array.isArray(object?.pubkey) ? object.pubkey.map((e: any) => Pubkey.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPubkeysResponse): unknown {
    const obj: any = {};
    if (message.pubkey) {
      obj.pubkey = message.pubkey.map((e) => e ? Pubkey.toJSON(e) : undefined);
    } else {
      obj.pubkey = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPubkeysResponse>, I>>(object: I): QueryAllPubkeysResponse {
    const message = createBaseQueryAllPubkeysResponse();
    message.pubkey = object.pubkey?.map((e) => Pubkey.fromPartial(e)) || [];
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
  /** Queries a list of Encrypt items. */
  Encrypt(request: DeepPartial<QueryEncryptRequest>, metadata?: grpc.Metadata): Promise<QueryEncryptResponse>;
  /** Queries a list of Decrypt items. */
  Decrypt(request: DeepPartial<QueryDecryptRequest>, metadata?: grpc.Metadata): Promise<QueryDecryptResponse>;
  /** Queries a Files by index. */
  Files(request: DeepPartial<QueryFileRequest>, metadata?: grpc.Metadata): Promise<QueryFileResponse>;
  /** Queries a list of Files items. */
  FilesAll(request: DeepPartial<QueryAllFilesRequest>, metadata?: grpc.Metadata): Promise<QueryAllFilesResponse>;
  /** Queries a Pubkey by index. */
  Pubkey(request: DeepPartial<QueryPubkeyRequest>, metadata?: grpc.Metadata): Promise<QueryPubkeyResponse>;
  /** Queries a list of Pubkey items. */
  PubkeyAll(request: DeepPartial<QueryAllPubkeysRequest>, metadata?: grpc.Metadata): Promise<QueryAllPubkeysResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Encrypt = this.Encrypt.bind(this);
    this.Decrypt = this.Decrypt.bind(this);
    this.Files = this.Files.bind(this);
    this.FilesAll = this.FilesAll.bind(this);
    this.Pubkey = this.Pubkey.bind(this);
    this.PubkeyAll = this.PubkeyAll.bind(this);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  Encrypt(request: DeepPartial<QueryEncryptRequest>, metadata?: grpc.Metadata): Promise<QueryEncryptResponse> {
    return this.rpc.unary(QueryEncryptDesc, QueryEncryptRequest.fromPartial(request), metadata);
  }

  Decrypt(request: DeepPartial<QueryDecryptRequest>, metadata?: grpc.Metadata): Promise<QueryDecryptResponse> {
    return this.rpc.unary(QueryDecryptDesc, QueryDecryptRequest.fromPartial(request), metadata);
  }

  Files(request: DeepPartial<QueryFileRequest>, metadata?: grpc.Metadata): Promise<QueryFileResponse> {
    return this.rpc.unary(QueryFilesDesc, QueryFileRequest.fromPartial(request), metadata);
  }

  FilesAll(request: DeepPartial<QueryAllFilesRequest>, metadata?: grpc.Metadata): Promise<QueryAllFilesResponse> {
    return this.rpc.unary(QueryFilesAllDesc, QueryAllFilesRequest.fromPartial(request), metadata);
  }

  Pubkey(request: DeepPartial<QueryPubkeyRequest>, metadata?: grpc.Metadata): Promise<QueryPubkeyResponse> {
    return this.rpc.unary(QueryPubkeyDesc, QueryPubkeyRequest.fromPartial(request), metadata);
  }

  PubkeyAll(request: DeepPartial<QueryAllPubkeysRequest>, metadata?: grpc.Metadata): Promise<QueryAllPubkeysResponse> {
    return this.rpc.unary(QueryPubkeyAllDesc, QueryAllPubkeysRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "canine_chain.filetree.Query" };

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

export const QueryEncryptDesc: UnaryMethodDefinitionish = {
  methodName: "Encrypt",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryEncryptRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryEncryptResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryDecryptDesc: UnaryMethodDefinitionish = {
  methodName: "Decrypt",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDecryptRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDecryptResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryFilesDesc: UnaryMethodDefinitionish = {
  methodName: "Files",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFileRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFileResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryFilesAllDesc: UnaryMethodDefinitionish = {
  methodName: "FilesAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllFilesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllFilesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPubkeyDesc: UnaryMethodDefinitionish = {
  methodName: "Pubkey",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPubkeyRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPubkeyResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPubkeyAllDesc: UnaryMethodDefinitionish = {
  methodName: "PubkeyAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPubkeysRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPubkeysResponse.decode(data),
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
