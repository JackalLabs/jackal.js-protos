/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Files } from "./files";
import { Params } from "./params";
import { Pubkey } from "./pubkey";

export const protobufPackage = "canine_chain.filetree";

export interface QueryParams {
}

export interface QueryParamsResponse {
  params: Params | undefined;
}

export interface QueryFile {
  address: string;
  ownerAddress: string;
}

export interface QueryFileResponse {
  file: Files | undefined;
}

export interface QueryAllFiles {
  pagination: PageRequest | undefined;
}

export interface QueryAllFilesResponse {
  files: Files[];
  pagination: PageResponse | undefined;
}

export interface QueryPubKey {
  address: string;
}

export interface QueryPubKeyResponse {
  pubKey: Pubkey | undefined;
}

export interface QueryAllPubKeys {
  pagination: PageRequest | undefined;
}

export interface QueryAllPubKeysResponse {
  pubKey: Pubkey[];
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

function createBaseQueryFile(): QueryFile {
  return { address: "", ownerAddress: "" };
}

export const QueryFile = {
  encode(message: QueryFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFile();
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

          message.ownerAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFile {
    return {
      address: isSet(object.address) ? gt.String(object.address) : "",
      ownerAddress: isSet(object.ownerAddress) ? gt.String(object.ownerAddress) : "",
    };
  },

  toJSON(message: QueryFile): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.ownerAddress !== "") {
      obj.ownerAddress = message.ownerAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFile>, I>>(base?: I): QueryFile {
    return QueryFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFile>, I>>(object: I): QueryFile {
    const message = createBaseQueryFile();
    message.address = object.address ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
};

function createBaseQueryFileResponse(): QueryFileResponse {
  return { file: undefined };
}

export const QueryFileResponse = {
  encode(message: QueryFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file !== undefined) {
      Files.encode(message.file, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.file = Files.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFileResponse {
    return { file: isSet(object.file) ? Files.fromJSON(object.file) : undefined };
  },

  toJSON(message: QueryFileResponse): unknown {
    const obj: any = {};
    if (message.file !== undefined) {
      obj.file = Files.toJSON(message.file);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFileResponse>, I>>(base?: I): QueryFileResponse {
    return QueryFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFileResponse>, I>>(object: I): QueryFileResponse {
    const message = createBaseQueryFileResponse();
    message.file = (object.file !== undefined && object.file !== null) ? Files.fromPartial(object.file) : undefined;
    return message;
  },
};

function createBaseQueryAllFiles(): QueryAllFiles {
  return { pagination: undefined };
}

export const QueryAllFiles = {
  encode(message: QueryAllFiles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFiles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFiles();
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

  fromJSON(object: any): QueryAllFiles {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllFiles): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllFiles>, I>>(base?: I): QueryAllFiles {
    return QueryAllFiles.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllFiles>, I>>(object: I): QueryAllFiles {
    const message = createBaseQueryAllFiles();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.files.push(Files.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllFilesResponse {
    return {
      files: gt.Array.isArray(object?.files) ? object.files.map((e: any) => Files.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFilesResponse): unknown {
    const obj: any = {};
    if (message.files?.length) {
      obj.files = message.files.map((e) => Files.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllFilesResponse>, I>>(base?: I): QueryAllFilesResponse {
    return QueryAllFilesResponse.fromPartial(base ?? ({} as any));
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

function createBaseQueryPubKey(): QueryPubKey {
  return { address: "" };
}

export const QueryPubKey = {
  encode(message: QueryPubKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPubKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPubKey();
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

  fromJSON(object: any): QueryPubKey {
    return { address: isSet(object.address) ? gt.String(object.address) : "" };
  },

  toJSON(message: QueryPubKey): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPubKey>, I>>(base?: I): QueryPubKey {
    return QueryPubKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPubKey>, I>>(object: I): QueryPubKey {
    const message = createBaseQueryPubKey();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryPubKeyResponse(): QueryPubKeyResponse {
  return { pubKey: undefined };
}

export const QueryPubKeyResponse = {
  encode(message: QueryPubKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      Pubkey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPubKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPubKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pubKey = Pubkey.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPubKeyResponse {
    return { pubKey: isSet(object.pubKey) ? Pubkey.fromJSON(object.pubKey) : undefined };
  },

  toJSON(message: QueryPubKeyResponse): unknown {
    const obj: any = {};
    if (message.pubKey !== undefined) {
      obj.pubKey = Pubkey.toJSON(message.pubKey);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPubKeyResponse>, I>>(base?: I): QueryPubKeyResponse {
    return QueryPubKeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPubKeyResponse>, I>>(object: I): QueryPubKeyResponse {
    const message = createBaseQueryPubKeyResponse();
    message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
      ? Pubkey.fromPartial(object.pubKey)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPubKeys(): QueryAllPubKeys {
  return { pagination: undefined };
}

export const QueryAllPubKeys = {
  encode(message: QueryAllPubKeys, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPubKeys {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPubKeys();
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

  fromJSON(object: any): QueryAllPubKeys {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPubKeys): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPubKeys>, I>>(base?: I): QueryAllPubKeys {
    return QueryAllPubKeys.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPubKeys>, I>>(object: I): QueryAllPubKeys {
    const message = createBaseQueryAllPubKeys();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPubKeysResponse(): QueryAllPubKeysResponse {
  return { pubKey: [], pagination: undefined };
}

export const QueryAllPubKeysResponse = {
  encode(message: QueryAllPubKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pubKey) {
      Pubkey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPubKeysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPubKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pubKey.push(Pubkey.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPubKeysResponse {
    return {
      pubKey: gt.Array.isArray(object?.pubKey) ? object.pubKey.map((e: any) => Pubkey.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPubKeysResponse): unknown {
    const obj: any = {};
    if (message.pubKey?.length) {
      obj.pubKey = message.pubKey.map((e) => Pubkey.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPubKeysResponse>, I>>(base?: I): QueryAllPubKeysResponse {
    return QueryAllPubKeysResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPubKeysResponse>, I>>(object: I): QueryAllPubKeysResponse {
    const message = createBaseQueryAllPubKeysResponse();
    message.pubKey = object.pubKey?.map((e) => Pubkey.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

export interface Query {
  Params(request: QueryParams): Promise<QueryParamsResponse>;
  /** Queries a File by address and owner_address. */
  File(request: QueryFile): Promise<QueryFileResponse>;
  /** Queries a list of File items. */
  AllFiles(request: QueryAllFiles): Promise<QueryAllFilesResponse>;
  /** Queries a PubKey by address. */
  PubKey(request: QueryPubKey): Promise<QueryPubKeyResponse>;
  /** Queries a list of PubKey items. */
  AllPubKeys(request: QueryAllPubKeys): Promise<QueryAllPubKeysResponse>;
}

export const QueryServiceName = "canine_chain.filetree.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.File = this.File.bind(this);
    this.AllFiles = this.AllFiles.bind(this);
    this.PubKey = this.PubKey.bind(this);
    this.AllPubKeys = this.AllPubKeys.bind(this);
  }
  Params(request: QueryParams): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  File(request: QueryFile): Promise<QueryFileResponse> {
    const data = QueryFile.encode(request).finish();
    const promise = this.rpc.request(this.service, "File", data);
    return promise.then((data) => QueryFileResponse.decode(_m0.Reader.create(data)));
  }

  AllFiles(request: QueryAllFiles): Promise<QueryAllFilesResponse> {
    const data = QueryAllFiles.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllFiles", data);
    return promise.then((data) => QueryAllFilesResponse.decode(_m0.Reader.create(data)));
  }

  PubKey(request: QueryPubKey): Promise<QueryPubKeyResponse> {
    const data = QueryPubKey.encode(request).finish();
    const promise = this.rpc.request(this.service, "PubKey", data);
    return promise.then((data) => QueryPubKeyResponse.decode(_m0.Reader.create(data)));
  }

  AllPubKeys(request: QueryAllPubKeys): Promise<QueryAllPubKeysResponse> {
    const data = QueryAllPubKeys.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllPubKeys", data);
    return promise.then((data) => QueryAllPubKeysResponse.decode(_m0.Reader.create(data)));
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