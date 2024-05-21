/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { FileProof, UnifiedFile } from "./active_deals";
import { Params } from "./params";
import { StoragePaymentInfo } from "./payment_info";
import { ActiveProviders, AttestationForm, Providers, ReportForm } from "./providers";

export const protobufPackage = "canine_chain.storage";

export interface QueryParams {
}

export interface QueryParamsResponse {
  params: Params | undefined;
}

export interface QueryProof {
  providerAddress: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}

export interface QueryProofResponse {
  proof: FileProof | undefined;
}

export interface QueryProofsByAddress {
  providerAddress: string;
  pagination: PageRequest | undefined;
}

export interface QueryProofsByAddressResponse {
  proofs: FileProof[];
  pagination: PageResponse | undefined;
}

export interface QueryAllProofs {
  pagination: PageRequest | undefined;
}

export interface QueryAllProofsResponse {
  proofs: FileProof[];
  pagination: PageResponse | undefined;
}

export interface QueryFile {
  merkle: Uint8Array;
  owner: string;
  start: number;
}

export interface QueryFileResponse {
  file: UnifiedFile | undefined;
}

export interface QueryOpenFiles {
  providerAddress: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllFiles {
  pagination: PageRequest | undefined;
}

export interface QueryAllFilesResponse {
  files: UnifiedFile[];
  pagination: PageResponse | undefined;
}

export interface QueryAllFilesByMerkle {
  pagination: PageRequest | undefined;
  merkle: Uint8Array;
}

export interface QueryAllFilesByMerkleResponse {
  files: UnifiedFile[];
  pagination: PageResponse | undefined;
}

export interface QueryAllFilesByOwner {
  pagination: PageRequest | undefined;
  owner: string;
}

export interface QueryAllFilesByOwnerResponse {
  files: UnifiedFile[];
  pagination: PageResponse | undefined;
}

export interface QueryProvider {
  address: string;
}

export interface QueryProviderResponse {
  provider: Providers | undefined;
}

export interface QueryAllProviders {
  pagination: PageRequest | undefined;
}

export interface QueryAllProvidersResponse {
  providers: Providers[];
  pagination: PageResponse | undefined;
}

export interface QueryAttestation {
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}

export interface QueryAttestationResponse {
  attestation: AttestationForm | undefined;
}

export interface QueryAllAttestations {
  pagination: PageRequest | undefined;
}

export interface QueryAllAttestationsResponse {
  attestations: AttestationForm[];
  pagination: PageResponse | undefined;
}

export interface QueryReport {
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}

export interface QueryReportResponse {
  report: ReportForm | undefined;
}

export interface QueryAllReports {
  pagination: PageRequest | undefined;
}

export interface QueryAllReportsResponse {
  reports: ReportForm[];
  pagination: PageResponse | undefined;
}

export interface QueryFreeSpace {
  address: string;
}

export interface QueryFreeSpaceResponse {
  space: number;
}

export interface QueryStoreCount {
  address: string;
}

export interface QueryStoreCountResponse {
  count: number;
}

export interface QueryFindFile {
  merkle: Uint8Array;
}

export interface QueryFindFileResponse {
  providerIps: string[];
}

export interface QueryClientFreeSpace {
  address: string;
}

export interface QueryClientFreeSpaceResponse {
  bytesFree: number;
}

export interface QueryPayData {
  address: string;
}

export interface QueryPayDataResponse {
  timeRemaining: number;
  bytes: number;
}

export interface QueryStoragePaymentInfo {
  address: string;
}

export interface QueryStoragePaymentInfoResponse {
  storagePaymentInfo: StoragePaymentInfo | undefined;
}

export interface QueryAllStoragePaymentInfo {
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

export interface QueryPriceCheck {
  /** days to check for */
  duration: number;
  bytes: number;
}

export interface QueryPriceCheckResponse {
  price: number;
}

export interface QueryActiveProviders {
}

export interface QueryActiveProvidersResponse {
  providers: ActiveProviders[];
}

export interface QueryStorageStats {
}

export interface QueryStorageStatsResponse {
  purchased: number;
  used: number;
  usedRatio: Uint8Array;
  activeUsers: number;
  usersByPlan: { [key: number]: number };
}

export interface QueryStorageStatsResponse_UsersByPlanEntry {
  key: number;
  value: number;
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

function createBaseQueryProof(): QueryProof {
  return { providerAddress: "", merkle: new Uint8Array(0), owner: "", start: 0 };
}

export const QueryProof = {
  encode(message: QueryProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.providerAddress !== "") {
      writer.uint32(10).string(message.providerAddress);
    }
    if (message.merkle.length !== 0) {
      writer.uint32(18).bytes(message.merkle);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.start !== 0) {
      writer.uint32(32).int64(message.start);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providerAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.merkle = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.start = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryProof {
    return {
      providerAddress: isSet(object.providerAddress) ? gt.String(object.providerAddress) : "",
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
    };
  },

  toJSON(message: QueryProof): unknown {
    const obj: any = {};
    if (message.providerAddress !== "") {
      obj.providerAddress = message.providerAddress;
    }
    if (message.merkle.length !== 0) {
      obj.merkle = base64FromBytes(message.merkle);
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProof>, I>>(base?: I): QueryProof {
    return QueryProof.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryProof>, I>>(object: I): QueryProof {
    const message = createBaseQueryProof();
    message.providerAddress = object.providerAddress ?? "";
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseQueryProofResponse(): QueryProofResponse {
  return { proof: undefined };
}

export const QueryProofResponse = {
  encode(message: QueryProofResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proof !== undefined) {
      FileProof.encode(message.proof, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProofResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proof = FileProof.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryProofResponse {
    return { proof: isSet(object.proof) ? FileProof.fromJSON(object.proof) : undefined };
  },

  toJSON(message: QueryProofResponse): unknown {
    const obj: any = {};
    if (message.proof !== undefined) {
      obj.proof = FileProof.toJSON(message.proof);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProofResponse>, I>>(base?: I): QueryProofResponse {
    return QueryProofResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryProofResponse>, I>>(object: I): QueryProofResponse {
    const message = createBaseQueryProofResponse();
    message.proof = (object.proof !== undefined && object.proof !== null)
      ? FileProof.fromPartial(object.proof)
      : undefined;
    return message;
  },
};

function createBaseQueryProofsByAddress(): QueryProofsByAddress {
  return { providerAddress: "", pagination: undefined };
}

export const QueryProofsByAddress = {
  encode(message: QueryProofsByAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.providerAddress !== "") {
      writer.uint32(10).string(message.providerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProofsByAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProofsByAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providerAddress = reader.string();
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

  fromJSON(object: any): QueryProofsByAddress {
    return {
      providerAddress: isSet(object.providerAddress) ? gt.String(object.providerAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryProofsByAddress): unknown {
    const obj: any = {};
    if (message.providerAddress !== "") {
      obj.providerAddress = message.providerAddress;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProofsByAddress>, I>>(base?: I): QueryProofsByAddress {
    return QueryProofsByAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryProofsByAddress>, I>>(object: I): QueryProofsByAddress {
    const message = createBaseQueryProofsByAddress();
    message.providerAddress = object.providerAddress ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryProofsByAddressResponse(): QueryProofsByAddressResponse {
  return { proofs: [], pagination: undefined };
}

export const QueryProofsByAddressResponse = {
  encode(message: QueryProofsByAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proofs) {
      FileProof.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProofsByAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProofsByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proofs.push(FileProof.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryProofsByAddressResponse {
    return {
      proofs: gt.Array.isArray(object?.proofs) ? object.proofs.map((e: any) => FileProof.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryProofsByAddressResponse): unknown {
    const obj: any = {};
    if (message.proofs?.length) {
      obj.proofs = message.proofs.map((e) => FileProof.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProofsByAddressResponse>, I>>(base?: I): QueryProofsByAddressResponse {
    return QueryProofsByAddressResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryProofsByAddressResponse>, I>>(object: I): QueryProofsByAddressResponse {
    const message = createBaseQueryProofsByAddressResponse();
    message.proofs = object.proofs?.map((e) => FileProof.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProofs(): QueryAllProofs {
  return { pagination: undefined };
}

export const QueryAllProofs = {
  encode(message: QueryAllProofs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProofs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProofs();
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

  fromJSON(object: any): QueryAllProofs {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllProofs): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllProofs>, I>>(base?: I): QueryAllProofs {
    return QueryAllProofs.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllProofs>, I>>(object: I): QueryAllProofs {
    const message = createBaseQueryAllProofs();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProofsResponse(): QueryAllProofsResponse {
  return { proofs: [], pagination: undefined };
}

export const QueryAllProofsResponse = {
  encode(message: QueryAllProofsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proofs) {
      FileProof.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProofsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProofsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proofs.push(FileProof.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllProofsResponse {
    return {
      proofs: gt.Array.isArray(object?.proofs) ? object.proofs.map((e: any) => FileProof.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllProofsResponse): unknown {
    const obj: any = {};
    if (message.proofs?.length) {
      obj.proofs = message.proofs.map((e) => FileProof.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllProofsResponse>, I>>(base?: I): QueryAllProofsResponse {
    return QueryAllProofsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllProofsResponse>, I>>(object: I): QueryAllProofsResponse {
    const message = createBaseQueryAllProofsResponse();
    message.proofs = object.proofs?.map((e) => FileProof.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFile(): QueryFile {
  return { merkle: new Uint8Array(0), owner: "", start: 0 };
}

export const QueryFile = {
  encode(message: QueryFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merkle.length !== 0) {
      writer.uint32(10).bytes(message.merkle);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.start !== 0) {
      writer.uint32(24).int64(message.start);
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

          message.merkle = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.start = longToNumber(reader.int64() as Long);
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
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
    };
  },

  toJSON(message: QueryFile): unknown {
    const obj: any = {};
    if (message.merkle.length !== 0) {
      obj.merkle = base64FromBytes(message.merkle);
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFile>, I>>(base?: I): QueryFile {
    return QueryFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFile>, I>>(object: I): QueryFile {
    const message = createBaseQueryFile();
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseQueryFileResponse(): QueryFileResponse {
  return { file: undefined };
}

export const QueryFileResponse = {
  encode(message: QueryFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file !== undefined) {
      UnifiedFile.encode(message.file, writer.uint32(10).fork()).ldelim();
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

          message.file = UnifiedFile.decode(reader, reader.uint32());
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
    return { file: isSet(object.file) ? UnifiedFile.fromJSON(object.file) : undefined };
  },

  toJSON(message: QueryFileResponse): unknown {
    const obj: any = {};
    if (message.file !== undefined) {
      obj.file = UnifiedFile.toJSON(message.file);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFileResponse>, I>>(base?: I): QueryFileResponse {
    return QueryFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFileResponse>, I>>(object: I): QueryFileResponse {
    const message = createBaseQueryFileResponse();
    message.file = (object.file !== undefined && object.file !== null)
      ? UnifiedFile.fromPartial(object.file)
      : undefined;
    return message;
  },
};

function createBaseQueryOpenFiles(): QueryOpenFiles {
  return { providerAddress: "", pagination: undefined };
}

export const QueryOpenFiles = {
  encode(message: QueryOpenFiles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.providerAddress !== "") {
      writer.uint32(10).string(message.providerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOpenFiles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOpenFiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providerAddress = reader.string();
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

  fromJSON(object: any): QueryOpenFiles {
    return {
      providerAddress: isSet(object.providerAddress) ? gt.String(object.providerAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryOpenFiles): unknown {
    const obj: any = {};
    if (message.providerAddress !== "") {
      obj.providerAddress = message.providerAddress;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOpenFiles>, I>>(base?: I): QueryOpenFiles {
    return QueryOpenFiles.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryOpenFiles>, I>>(object: I): QueryOpenFiles {
    const message = createBaseQueryOpenFiles();
    message.providerAddress = object.providerAddress ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
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
      UnifiedFile.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.files.push(UnifiedFile.decode(reader, reader.uint32()));
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
      files: gt.Array.isArray(object?.files) ? object.files.map((e: any) => UnifiedFile.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFilesResponse): unknown {
    const obj: any = {};
    if (message.files?.length) {
      obj.files = message.files.map((e) => UnifiedFile.toJSON(e));
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
    message.files = object.files?.map((e) => UnifiedFile.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFilesByMerkle(): QueryAllFilesByMerkle {
  return { pagination: undefined, merkle: new Uint8Array(0) };
}

export const QueryAllFilesByMerkle = {
  encode(message: QueryAllFilesByMerkle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.merkle.length !== 0) {
      writer.uint32(18).bytes(message.merkle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFilesByMerkle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFilesByMerkle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.merkle = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllFilesByMerkle {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
    };
  },

  toJSON(message: QueryAllFilesByMerkle): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.merkle.length !== 0) {
      obj.merkle = base64FromBytes(message.merkle);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllFilesByMerkle>, I>>(base?: I): QueryAllFilesByMerkle {
    return QueryAllFilesByMerkle.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllFilesByMerkle>, I>>(object: I): QueryAllFilesByMerkle {
    const message = createBaseQueryAllFilesByMerkle();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.merkle = object.merkle ?? new Uint8Array(0);
    return message;
  },
};

function createBaseQueryAllFilesByMerkleResponse(): QueryAllFilesByMerkleResponse {
  return { files: [], pagination: undefined };
}

export const QueryAllFilesByMerkleResponse = {
  encode(message: QueryAllFilesByMerkleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      UnifiedFile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFilesByMerkleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFilesByMerkleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.files.push(UnifiedFile.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllFilesByMerkleResponse {
    return {
      files: gt.Array.isArray(object?.files) ? object.files.map((e: any) => UnifiedFile.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFilesByMerkleResponse): unknown {
    const obj: any = {};
    if (message.files?.length) {
      obj.files = message.files.map((e) => UnifiedFile.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllFilesByMerkleResponse>, I>>(base?: I): QueryAllFilesByMerkleResponse {
    return QueryAllFilesByMerkleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllFilesByMerkleResponse>, I>>(
    object: I,
  ): QueryAllFilesByMerkleResponse {
    const message = createBaseQueryAllFilesByMerkleResponse();
    message.files = object.files?.map((e) => UnifiedFile.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFilesByOwner(): QueryAllFilesByOwner {
  return { pagination: undefined, owner: "" };
}

export const QueryAllFilesByOwner = {
  encode(message: QueryAllFilesByOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFilesByOwner {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFilesByOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.owner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllFilesByOwner {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
    };
  },

  toJSON(message: QueryAllFilesByOwner): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllFilesByOwner>, I>>(base?: I): QueryAllFilesByOwner {
    return QueryAllFilesByOwner.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllFilesByOwner>, I>>(object: I): QueryAllFilesByOwner {
    const message = createBaseQueryAllFilesByOwner();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryAllFilesByOwnerResponse(): QueryAllFilesByOwnerResponse {
  return { files: [], pagination: undefined };
}

export const QueryAllFilesByOwnerResponse = {
  encode(message: QueryAllFilesByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      UnifiedFile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFilesByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFilesByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.files.push(UnifiedFile.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllFilesByOwnerResponse {
    return {
      files: gt.Array.isArray(object?.files) ? object.files.map((e: any) => UnifiedFile.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFilesByOwnerResponse): unknown {
    const obj: any = {};
    if (message.files?.length) {
      obj.files = message.files.map((e) => UnifiedFile.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllFilesByOwnerResponse>, I>>(base?: I): QueryAllFilesByOwnerResponse {
    return QueryAllFilesByOwnerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllFilesByOwnerResponse>, I>>(object: I): QueryAllFilesByOwnerResponse {
    const message = createBaseQueryAllFilesByOwnerResponse();
    message.files = object.files?.map((e) => UnifiedFile.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryProvider(): QueryProvider {
  return { address: "" };
}

export const QueryProvider = {
  encode(message: QueryProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvider();
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

  fromJSON(object: any): QueryProvider {
    return { address: isSet(object.address) ? gt.String(object.address) : "" };
  },

  toJSON(message: QueryProvider): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProvider>, I>>(base?: I): QueryProvider {
    return QueryProvider.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryProvider>, I>>(object: I): QueryProvider {
    const message = createBaseQueryProvider();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryProviderResponse(): QueryProviderResponse {
  return { provider: undefined };
}

export const QueryProviderResponse = {
  encode(message: QueryProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== undefined) {
      Providers.encode(message.provider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.provider = Providers.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryProviderResponse {
    return { provider: isSet(object.provider) ? Providers.fromJSON(object.provider) : undefined };
  },

  toJSON(message: QueryProviderResponse): unknown {
    const obj: any = {};
    if (message.provider !== undefined) {
      obj.provider = Providers.toJSON(message.provider);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProviderResponse>, I>>(base?: I): QueryProviderResponse {
    return QueryProviderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderResponse>, I>>(object: I): QueryProviderResponse {
    const message = createBaseQueryProviderResponse();
    message.provider = (object.provider !== undefined && object.provider !== null)
      ? Providers.fromPartial(object.provider)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProviders(): QueryAllProviders {
  return { pagination: undefined };
}

export const QueryAllProviders = {
  encode(message: QueryAllProviders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProviders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProviders();
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

  fromJSON(object: any): QueryAllProviders {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllProviders): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllProviders>, I>>(base?: I): QueryAllProviders {
    return QueryAllProviders.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllProviders>, I>>(object: I): QueryAllProviders {
    const message = createBaseQueryAllProviders();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providers.push(Providers.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllProvidersResponse {
    return {
      providers: gt.Array.isArray(object?.providers) ? object.providers.map((e: any) => Providers.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllProvidersResponse): unknown {
    const obj: any = {};
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => Providers.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllProvidersResponse>, I>>(base?: I): QueryAllProvidersResponse {
    return QueryAllProvidersResponse.fromPartial(base ?? ({} as any));
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

function createBaseQueryAttestation(): QueryAttestation {
  return { prover: "", merkle: new Uint8Array(0), owner: "", start: 0 };
}

export const QueryAttestation = {
  encode(message: QueryAttestation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prover !== "") {
      writer.uint32(10).string(message.prover);
    }
    if (message.merkle.length !== 0) {
      writer.uint32(18).bytes(message.merkle);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.start !== 0) {
      writer.uint32(32).int64(message.start);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prover = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.merkle = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.start = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAttestation {
    return {
      prover: isSet(object.prover) ? gt.String(object.prover) : "",
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
    };
  },

  toJSON(message: QueryAttestation): unknown {
    const obj: any = {};
    if (message.prover !== "") {
      obj.prover = message.prover;
    }
    if (message.merkle.length !== 0) {
      obj.merkle = base64FromBytes(message.merkle);
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAttestation>, I>>(base?: I): QueryAttestation {
    return QueryAttestation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAttestation>, I>>(object: I): QueryAttestation {
    const message = createBaseQueryAttestation();
    message.prover = object.prover ?? "";
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseQueryAttestationResponse(): QueryAttestationResponse {
  return { attestation: undefined };
}

export const QueryAttestationResponse = {
  encode(message: QueryAttestationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attestation !== undefined) {
      AttestationForm.encode(message.attestation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attestation = AttestationForm.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAttestationResponse {
    return { attestation: isSet(object.attestation) ? AttestationForm.fromJSON(object.attestation) : undefined };
  },

  toJSON(message: QueryAttestationResponse): unknown {
    const obj: any = {};
    if (message.attestation !== undefined) {
      obj.attestation = AttestationForm.toJSON(message.attestation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAttestationResponse>, I>>(base?: I): QueryAttestationResponse {
    return QueryAttestationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAttestationResponse>, I>>(object: I): QueryAttestationResponse {
    const message = createBaseQueryAttestationResponse();
    message.attestation = (object.attestation !== undefined && object.attestation !== null)
      ? AttestationForm.fromPartial(object.attestation)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAttestations(): QueryAllAttestations {
  return { pagination: undefined };
}

export const QueryAllAttestations = {
  encode(message: QueryAllAttestations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAttestations {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAttestations();
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

  fromJSON(object: any): QueryAllAttestations {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAttestations): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAttestations>, I>>(base?: I): QueryAllAttestations {
    return QueryAllAttestations.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAttestations>, I>>(object: I): QueryAllAttestations {
    const message = createBaseQueryAllAttestations();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAttestationsResponse(): QueryAllAttestationsResponse {
  return { attestations: [], pagination: undefined };
}

export const QueryAllAttestationsResponse = {
  encode(message: QueryAllAttestationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attestations) {
      AttestationForm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAttestationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAttestationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attestations.push(AttestationForm.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllAttestationsResponse {
    return {
      attestations: gt.Array.isArray(object?.attestations)
        ? object.attestations.map((e: any) => AttestationForm.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAttestationsResponse): unknown {
    const obj: any = {};
    if (message.attestations?.length) {
      obj.attestations = message.attestations.map((e) => AttestationForm.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAttestationsResponse>, I>>(base?: I): QueryAllAttestationsResponse {
    return QueryAllAttestationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAttestationsResponse>, I>>(object: I): QueryAllAttestationsResponse {
    const message = createBaseQueryAllAttestationsResponse();
    message.attestations = object.attestations?.map((e) => AttestationForm.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryReport(): QueryReport {
  return { prover: "", merkle: new Uint8Array(0), owner: "", start: 0 };
}

export const QueryReport = {
  encode(message: QueryReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prover !== "") {
      writer.uint32(10).string(message.prover);
    }
    if (message.merkle.length !== 0) {
      writer.uint32(18).bytes(message.merkle);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.start !== 0) {
      writer.uint32(32).int64(message.start);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prover = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.merkle = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.start = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryReport {
    return {
      prover: isSet(object.prover) ? gt.String(object.prover) : "",
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
    };
  },

  toJSON(message: QueryReport): unknown {
    const obj: any = {};
    if (message.prover !== "") {
      obj.prover = message.prover;
    }
    if (message.merkle.length !== 0) {
      obj.merkle = base64FromBytes(message.merkle);
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryReport>, I>>(base?: I): QueryReport {
    return QueryReport.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryReport>, I>>(object: I): QueryReport {
    const message = createBaseQueryReport();
    message.prover = object.prover ?? "";
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseQueryReportResponse(): QueryReportResponse {
  return { report: undefined };
}

export const QueryReportResponse = {
  encode(message: QueryReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.report !== undefined) {
      ReportForm.encode(message.report, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReportResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.report = ReportForm.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryReportResponse {
    return { report: isSet(object.report) ? ReportForm.fromJSON(object.report) : undefined };
  },

  toJSON(message: QueryReportResponse): unknown {
    const obj: any = {};
    if (message.report !== undefined) {
      obj.report = ReportForm.toJSON(message.report);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryReportResponse>, I>>(base?: I): QueryReportResponse {
    return QueryReportResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryReportResponse>, I>>(object: I): QueryReportResponse {
    const message = createBaseQueryReportResponse();
    message.report = (object.report !== undefined && object.report !== null)
      ? ReportForm.fromPartial(object.report)
      : undefined;
    return message;
  },
};

function createBaseQueryAllReports(): QueryAllReports {
  return { pagination: undefined };
}

export const QueryAllReports = {
  encode(message: QueryAllReports, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllReports {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllReports();
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

  fromJSON(object: any): QueryAllReports {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllReports): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllReports>, I>>(base?: I): QueryAllReports {
    return QueryAllReports.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllReports>, I>>(object: I): QueryAllReports {
    const message = createBaseQueryAllReports();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllReportsResponse(): QueryAllReportsResponse {
  return { reports: [], pagination: undefined };
}

export const QueryAllReportsResponse = {
  encode(message: QueryAllReportsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reports) {
      ReportForm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllReportsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllReportsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reports.push(ReportForm.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllReportsResponse {
    return {
      reports: gt.Array.isArray(object?.reports) ? object.reports.map((e: any) => ReportForm.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllReportsResponse): unknown {
    const obj: any = {};
    if (message.reports?.length) {
      obj.reports = message.reports.map((e) => ReportForm.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllReportsResponse>, I>>(base?: I): QueryAllReportsResponse {
    return QueryAllReportsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllReportsResponse>, I>>(object: I): QueryAllReportsResponse {
    const message = createBaseQueryAllReportsResponse();
    message.reports = object.reports?.map((e) => ReportForm.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFreeSpace(): QueryFreeSpace {
  return { address: "" };
}

export const QueryFreeSpace = {
  encode(message: QueryFreeSpace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFreeSpace {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFreeSpace();
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

  fromJSON(object: any): QueryFreeSpace {
    return { address: isSet(object.address) ? gt.String(object.address) : "" };
  },

  toJSON(message: QueryFreeSpace): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFreeSpace>, I>>(base?: I): QueryFreeSpace {
    return QueryFreeSpace.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFreeSpace>, I>>(object: I): QueryFreeSpace {
    const message = createBaseQueryFreeSpace();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryFreeSpaceResponse(): QueryFreeSpaceResponse {
  return { space: 0 };
}

export const QueryFreeSpaceResponse = {
  encode(message: QueryFreeSpaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.space !== 0) {
      writer.uint32(8).int64(message.space);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFreeSpaceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFreeSpaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.space = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFreeSpaceResponse {
    return { space: isSet(object.space) ? gt.Number(object.space) : 0 };
  },

  toJSON(message: QueryFreeSpaceResponse): unknown {
    const obj: any = {};
    if (message.space !== 0) {
      obj.space = Math.round(message.space);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFreeSpaceResponse>, I>>(base?: I): QueryFreeSpaceResponse {
    return QueryFreeSpaceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFreeSpaceResponse>, I>>(object: I): QueryFreeSpaceResponse {
    const message = createBaseQueryFreeSpaceResponse();
    message.space = object.space ?? 0;
    return message;
  },
};

function createBaseQueryStoreCount(): QueryStoreCount {
  return { address: "" };
}

export const QueryStoreCount = {
  encode(message: QueryStoreCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStoreCount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStoreCount();
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

  fromJSON(object: any): QueryStoreCount {
    return { address: isSet(object.address) ? gt.String(object.address) : "" };
  },

  toJSON(message: QueryStoreCount): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStoreCount>, I>>(base?: I): QueryStoreCount {
    return QueryStoreCount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStoreCount>, I>>(object: I): QueryStoreCount {
    const message = createBaseQueryStoreCount();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryStoreCountResponse(): QueryStoreCountResponse {
  return { count: 0 };
}

export const QueryStoreCountResponse = {
  encode(message: QueryStoreCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).int64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStoreCountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStoreCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.count = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStoreCountResponse {
    return { count: isSet(object.count) ? gt.Number(object.count) : 0 };
  },

  toJSON(message: QueryStoreCountResponse): unknown {
    const obj: any = {};
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStoreCountResponse>, I>>(base?: I): QueryStoreCountResponse {
    return QueryStoreCountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStoreCountResponse>, I>>(object: I): QueryStoreCountResponse {
    const message = createBaseQueryStoreCountResponse();
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseQueryFindFile(): QueryFindFile {
  return { merkle: new Uint8Array(0) };
}

export const QueryFindFile = {
  encode(message: QueryFindFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merkle.length !== 0) {
      writer.uint32(10).bytes(message.merkle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFindFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFindFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merkle = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFindFile {
    return { merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0) };
  },

  toJSON(message: QueryFindFile): unknown {
    const obj: any = {};
    if (message.merkle.length !== 0) {
      obj.merkle = base64FromBytes(message.merkle);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFindFile>, I>>(base?: I): QueryFindFile {
    return QueryFindFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFindFile>, I>>(object: I): QueryFindFile {
    const message = createBaseQueryFindFile();
    message.merkle = object.merkle ?? new Uint8Array(0);
    return message;
  },
};

function createBaseQueryFindFileResponse(): QueryFindFileResponse {
  return { providerIps: [] };
}

export const QueryFindFileResponse = {
  encode(message: QueryFindFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providerIps) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFindFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFindFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providerIps.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFindFileResponse {
    return {
      providerIps: gt.Array.isArray(object?.providerIps) ? object.providerIps.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: QueryFindFileResponse): unknown {
    const obj: any = {};
    if (message.providerIps?.length) {
      obj.providerIps = message.providerIps;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFindFileResponse>, I>>(base?: I): QueryFindFileResponse {
    return QueryFindFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFindFileResponse>, I>>(object: I): QueryFindFileResponse {
    const message = createBaseQueryFindFileResponse();
    message.providerIps = object.providerIps?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryClientFreeSpace(): QueryClientFreeSpace {
  return { address: "" };
}

export const QueryClientFreeSpace = {
  encode(message: QueryClientFreeSpace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientFreeSpace {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientFreeSpace();
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

  fromJSON(object: any): QueryClientFreeSpace {
    return { address: isSet(object.address) ? gt.String(object.address) : "" };
  },

  toJSON(message: QueryClientFreeSpace): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryClientFreeSpace>, I>>(base?: I): QueryClientFreeSpace {
    return QueryClientFreeSpace.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryClientFreeSpace>, I>>(object: I): QueryClientFreeSpace {
    const message = createBaseQueryClientFreeSpace();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryClientFreeSpaceResponse(): QueryClientFreeSpaceResponse {
  return { bytesFree: 0 };
}

export const QueryClientFreeSpaceResponse = {
  encode(message: QueryClientFreeSpaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bytesFree !== 0) {
      writer.uint32(8).int64(message.bytesFree);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientFreeSpaceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientFreeSpaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bytesFree = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryClientFreeSpaceResponse {
    return { bytesFree: isSet(object.bytesFree) ? gt.Number(object.bytesFree) : 0 };
  },

  toJSON(message: QueryClientFreeSpaceResponse): unknown {
    const obj: any = {};
    if (message.bytesFree !== 0) {
      obj.bytesFree = Math.round(message.bytesFree);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryClientFreeSpaceResponse>, I>>(base?: I): QueryClientFreeSpaceResponse {
    return QueryClientFreeSpaceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryClientFreeSpaceResponse>, I>>(object: I): QueryClientFreeSpaceResponse {
    const message = createBaseQueryClientFreeSpaceResponse();
    message.bytesFree = object.bytesFree ?? 0;
    return message;
  },
};

function createBaseQueryPayData(): QueryPayData {
  return { address: "" };
}

export const QueryPayData = {
  encode(message: QueryPayData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayData();
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

  fromJSON(object: any): QueryPayData {
    return { address: isSet(object.address) ? gt.String(object.address) : "" };
  },

  toJSON(message: QueryPayData): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPayData>, I>>(base?: I): QueryPayData {
    return QueryPayData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPayData>, I>>(object: I): QueryPayData {
    const message = createBaseQueryPayData();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timeRemaining = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bytes = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPayDataResponse {
    return {
      timeRemaining: isSet(object.timeRemaining) ? gt.Number(object.timeRemaining) : 0,
      bytes: isSet(object.bytes) ? gt.Number(object.bytes) : 0,
    };
  },

  toJSON(message: QueryPayDataResponse): unknown {
    const obj: any = {};
    if (message.timeRemaining !== 0) {
      obj.timeRemaining = Math.round(message.timeRemaining);
    }
    if (message.bytes !== 0) {
      obj.bytes = Math.round(message.bytes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPayDataResponse>, I>>(base?: I): QueryPayDataResponse {
    return QueryPayDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPayDataResponse>, I>>(object: I): QueryPayDataResponse {
    const message = createBaseQueryPayDataResponse();
    message.timeRemaining = object.timeRemaining ?? 0;
    message.bytes = object.bytes ?? 0;
    return message;
  },
};

function createBaseQueryStoragePaymentInfo(): QueryStoragePaymentInfo {
  return { address: "" };
}

export const QueryStoragePaymentInfo = {
  encode(message: QueryStoragePaymentInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStoragePaymentInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStoragePaymentInfo();
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

  fromJSON(object: any): QueryStoragePaymentInfo {
    return { address: isSet(object.address) ? gt.String(object.address) : "" };
  },

  toJSON(message: QueryStoragePaymentInfo): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStoragePaymentInfo>, I>>(base?: I): QueryStoragePaymentInfo {
    return QueryStoragePaymentInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStoragePaymentInfo>, I>>(object: I): QueryStoragePaymentInfo {
    const message = createBaseQueryStoragePaymentInfo();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStoragePaymentInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storagePaymentInfo = StoragePaymentInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.storagePaymentInfo !== undefined) {
      obj.storagePaymentInfo = StoragePaymentInfo.toJSON(message.storagePaymentInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStoragePaymentInfoResponse>, I>>(base?: I): QueryStoragePaymentInfoResponse {
    return QueryStoragePaymentInfoResponse.fromPartial(base ?? ({} as any));
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

function createBaseQueryAllStoragePaymentInfo(): QueryAllStoragePaymentInfo {
  return { pagination: undefined };
}

export const QueryAllStoragePaymentInfo = {
  encode(message: QueryAllStoragePaymentInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoragePaymentInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoragePaymentInfo();
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

  fromJSON(object: any): QueryAllStoragePaymentInfo {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStoragePaymentInfo): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllStoragePaymentInfo>, I>>(base?: I): QueryAllStoragePaymentInfo {
    return QueryAllStoragePaymentInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStoragePaymentInfo>, I>>(object: I): QueryAllStoragePaymentInfo {
    const message = createBaseQueryAllStoragePaymentInfo();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoragePaymentInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storagePaymentInfo.push(StoragePaymentInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllStoragePaymentInfoResponse {
    return {
      storagePaymentInfo: gt.Array.isArray(object?.storagePaymentInfo)
        ? object.storagePaymentInfo.map((e: any) => StoragePaymentInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStoragePaymentInfoResponse): unknown {
    const obj: any = {};
    if (message.storagePaymentInfo?.length) {
      obj.storagePaymentInfo = message.storagePaymentInfo.map((e) => StoragePaymentInfo.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllStoragePaymentInfoResponse>, I>>(
    base?: I,
  ): QueryAllStoragePaymentInfoResponse {
    return QueryAllStoragePaymentInfoResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileUploadCheck();
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
          if (tag !== 16) {
            break;
          }

          message.bytes = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFileUploadCheck {
    return {
      address: isSet(object.address) ? gt.String(object.address) : "",
      bytes: isSet(object.bytes) ? gt.Number(object.bytes) : 0,
    };
  },

  toJSON(message: QueryFileUploadCheck): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.bytes !== 0) {
      obj.bytes = Math.round(message.bytes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFileUploadCheck>, I>>(base?: I): QueryFileUploadCheck {
    return QueryFileUploadCheck.fromPartial(base ?? ({} as any));
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
    if (message.valid !== false) {
      writer.uint32(8).bool(message.valid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFileUploadCheckResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileUploadCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.valid = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFileUploadCheckResponse {
    return { valid: isSet(object.valid) ? gt.Boolean(object.valid) : false };
  },

  toJSON(message: QueryFileUploadCheckResponse): unknown {
    const obj: any = {};
    if (message.valid !== false) {
      obj.valid = message.valid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFileUploadCheckResponse>, I>>(base?: I): QueryFileUploadCheckResponse {
    return QueryFileUploadCheckResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFileUploadCheckResponse>, I>>(object: I): QueryFileUploadCheckResponse {
    const message = createBaseQueryFileUploadCheckResponse();
    message.valid = object.valid ?? false;
    return message;
  },
};

function createBaseQueryPriceCheck(): QueryPriceCheck {
  return { duration: 0, bytes: 0 };
}

export const QueryPriceCheck = {
  encode(message: QueryPriceCheck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(8).int64(message.duration);
    }
    if (message.bytes !== 0) {
      writer.uint32(16).int64(message.bytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceCheck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.duration = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bytes = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPriceCheck {
    return {
      duration: isSet(object.duration) ? gt.Number(object.duration) : 0,
      bytes: isSet(object.bytes) ? gt.Number(object.bytes) : 0,
    };
  },

  toJSON(message: QueryPriceCheck): unknown {
    const obj: any = {};
    if (message.duration !== 0) {
      obj.duration = Math.round(message.duration);
    }
    if (message.bytes !== 0) {
      obj.bytes = Math.round(message.bytes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPriceCheck>, I>>(base?: I): QueryPriceCheck {
    return QueryPriceCheck.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPriceCheck>, I>>(object: I): QueryPriceCheck {
    const message = createBaseQueryPriceCheck();
    message.duration = object.duration ?? 0;
    message.bytes = object.bytes ?? 0;
    return message;
  },
};

function createBaseQueryPriceCheckResponse(): QueryPriceCheckResponse {
  return { price: 0 };
}

export const QueryPriceCheckResponse = {
  encode(message: QueryPriceCheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== 0) {
      writer.uint32(8).int64(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceCheckResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.price = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPriceCheckResponse {
    return { price: isSet(object.price) ? gt.Number(object.price) : 0 };
  },

  toJSON(message: QueryPriceCheckResponse): unknown {
    const obj: any = {};
    if (message.price !== 0) {
      obj.price = Math.round(message.price);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPriceCheckResponse>, I>>(base?: I): QueryPriceCheckResponse {
    return QueryPriceCheckResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPriceCheckResponse>, I>>(object: I): QueryPriceCheckResponse {
    const message = createBaseQueryPriceCheckResponse();
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseQueryActiveProviders(): QueryActiveProviders {
  return {};
}

export const QueryActiveProviders = {
  encode(_: QueryActiveProviders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveProviders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveProviders();
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

  fromJSON(_: any): QueryActiveProviders {
    return {};
  },

  toJSON(_: QueryActiveProviders): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryActiveProviders>, I>>(base?: I): QueryActiveProviders {
    return QueryActiveProviders.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryActiveProviders>, I>>(_: I): QueryActiveProviders {
    const message = createBaseQueryActiveProviders();
    return message;
  },
};

function createBaseQueryActiveProvidersResponse(): QueryActiveProvidersResponse {
  return { providers: [] };
}

export const QueryActiveProvidersResponse = {
  encode(message: QueryActiveProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      ActiveProviders.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providers.push(ActiveProviders.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryActiveProvidersResponse {
    return {
      providers: gt.Array.isArray(object?.providers)
        ? object.providers.map((e: any) => ActiveProviders.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryActiveProvidersResponse): unknown {
    const obj: any = {};
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => ActiveProviders.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryActiveProvidersResponse>, I>>(base?: I): QueryActiveProvidersResponse {
    return QueryActiveProvidersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryActiveProvidersResponse>, I>>(object: I): QueryActiveProvidersResponse {
    const message = createBaseQueryActiveProvidersResponse();
    message.providers = object.providers?.map((e) => ActiveProviders.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryStorageStats(): QueryStorageStats {
  return {};
}

export const QueryStorageStats = {
  encode(_: QueryStorageStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageStats();
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

  fromJSON(_: any): QueryStorageStats {
    return {};
  },

  toJSON(_: QueryStorageStats): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStorageStats>, I>>(base?: I): QueryStorageStats {
    return QueryStorageStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStorageStats>, I>>(_: I): QueryStorageStats {
    const message = createBaseQueryStorageStats();
    return message;
  },
};

function createBaseQueryStorageStatsResponse(): QueryStorageStatsResponse {
  return { purchased: 0, used: 0, usedRatio: new Uint8Array(0), activeUsers: 0, usersByPlan: {} };
}

export const QueryStorageStatsResponse = {
  encode(message: QueryStorageStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purchased !== 0) {
      writer.uint32(8).uint64(message.purchased);
    }
    if (message.used !== 0) {
      writer.uint32(16).uint64(message.used);
    }
    if (message.usedRatio.length !== 0) {
      writer.uint32(26).bytes(message.usedRatio);
    }
    if (message.activeUsers !== 0) {
      writer.uint32(32).uint64(message.activeUsers);
    }
    Object.entries(message.usersByPlan).forEach(([key, value]) => {
      QueryStorageStatsResponse_UsersByPlanEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.purchased = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.used = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.usedRatio = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.activeUsers = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = QueryStorageStatsResponse_UsersByPlanEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.usersByPlan[entry5.key] = entry5.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStorageStatsResponse {
    return {
      purchased: isSet(object.purchased) ? gt.Number(object.purchased) : 0,
      used: isSet(object.used) ? gt.Number(object.used) : 0,
      usedRatio: isSet(object.usedRatio) ? bytesFromBase64(object.usedRatio) : new Uint8Array(0),
      activeUsers: isSet(object.activeUsers) ? gt.Number(object.activeUsers) : 0,
      usersByPlan: isObject(object.usersByPlan)
        ? Object.entries(object.usersByPlan).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[gt.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: QueryStorageStatsResponse): unknown {
    const obj: any = {};
    if (message.purchased !== 0) {
      obj.purchased = Math.round(message.purchased);
    }
    if (message.used !== 0) {
      obj.used = Math.round(message.used);
    }
    if (message.usedRatio.length !== 0) {
      obj.usedRatio = base64FromBytes(message.usedRatio);
    }
    if (message.activeUsers !== 0) {
      obj.activeUsers = Math.round(message.activeUsers);
    }
    if (message.usersByPlan) {
      const entries = Object.entries(message.usersByPlan);
      if (entries.length > 0) {
        obj.usersByPlan = {};
        entries.forEach(([k, v]) => {
          obj.usersByPlan[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStorageStatsResponse>, I>>(base?: I): QueryStorageStatsResponse {
    return QueryStorageStatsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStorageStatsResponse>, I>>(object: I): QueryStorageStatsResponse {
    const message = createBaseQueryStorageStatsResponse();
    message.purchased = object.purchased ?? 0;
    message.used = object.used ?? 0;
    message.usedRatio = object.usedRatio ?? new Uint8Array(0);
    message.activeUsers = object.activeUsers ?? 0;
    message.usersByPlan = Object.entries(object.usersByPlan ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[gt.Number(key)] = gt.Number(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseQueryStorageStatsResponse_UsersByPlanEntry(): QueryStorageStatsResponse_UsersByPlanEntry {
  return { key: 0, value: 0 };
}

export const QueryStorageStatsResponse_UsersByPlanEntry = {
  encode(message: QueryStorageStatsResponse_UsersByPlanEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageStatsResponse_UsersByPlanEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageStatsResponse_UsersByPlanEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStorageStatsResponse_UsersByPlanEntry {
    return {
      key: isSet(object.key) ? gt.Number(object.key) : 0,
      value: isSet(object.value) ? gt.Number(object.value) : 0,
    };
  },

  toJSON(message: QueryStorageStatsResponse_UsersByPlanEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStorageStatsResponse_UsersByPlanEntry>, I>>(
    base?: I,
  ): QueryStorageStatsResponse_UsersByPlanEntry {
    return QueryStorageStatsResponse_UsersByPlanEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStorageStatsResponse_UsersByPlanEntry>, I>>(
    object: I,
  ): QueryStorageStatsResponse_UsersByPlanEntry {
    const message = createBaseQueryStorageStatsResponse_UsersByPlanEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

export interface Query {
  Params(request: QueryParams): Promise<QueryParamsResponse>;
  /** Queries a File by merkle, owner, and start. */
  File(request: QueryFile): Promise<QueryFileResponse>;
  /** Queries a list of open files by provider_address. */
  OpenFiles(request: QueryOpenFiles): Promise<QueryAllFilesResponse>;
  /** Queries a list of File items. */
  AllFiles(request: QueryAllFiles): Promise<QueryAllFilesResponse>;
  /** Queries a list of File items matching the merkle. */
  AllFilesByMerkle(request: QueryAllFilesByMerkle): Promise<QueryAllFilesByMerkleResponse>;
  /** Queries a list of File items matching the owner. */
  AllFilesByOwner(request: QueryAllFilesByOwner): Promise<QueryAllFilesByOwnerResponse>;
  /** Queries a Proof by provider_address, merkle, owner, and start. */
  Proof(request: QueryProof): Promise<QueryProofResponse>;
  /** Queries a list of Proof items. */
  AllProofs(request: QueryAllProofs): Promise<QueryAllProofsResponse>;
  /** Queries a list of Proof items by provider_address. */
  ProofsByAddress(request: QueryProofsByAddress): Promise<QueryProofsByAddressResponse>;
  /** Queries a Provider by address. */
  Provider(request: QueryProvider): Promise<QueryProviderResponse>;
  /** Queries a list of Provider items. */
  AllProviders(request: QueryAllProviders): Promise<QueryAllProvidersResponse>;
  /** Queries an Attestation by prover, merkle, owner, and start. */
  Attestation(request: QueryAttestation): Promise<QueryAttestationResponse>;
  /** Queries a list of Attestation items. */
  AllAttestations(request: QueryAllAttestations): Promise<QueryAllAttestationsResponse>;
  /** Queries a Report by prover, merkle, owner, and start. */
  Report(request: QueryReport): Promise<QueryReportResponse>;
  /** Queries a list of Report items. */
  AllReports(request: QueryAllReports): Promise<QueryAllReportsResponse>;
  /** Queries free space by address. */
  FreeSpace(request: QueryFreeSpace): Promise<QueryFreeSpaceResponse>;
  /** Queries how many files a provider has stored by address. */
  StoreCount(request: QueryStoreCount): Promise<QueryStoreCountResponse>;
  /** Queries where a file is located by merkle. */
  FindFile(request: QueryFindFile): Promise<QueryFindFileResponse>;
  /** Queries free space by address. */
  GetClientFreeSpace(request: QueryClientFreeSpace): Promise<QueryClientFreeSpaceResponse>;
  /** Queries a PayData by address. */
  GetPayData(request: QueryPayData): Promise<QueryPayDataResponse>;
  /** Queries a StoragePaymentInfo by address. */
  StoragePaymentInfo(request: QueryStoragePaymentInfo): Promise<QueryStoragePaymentInfoResponse>;
  /** Queries a list of StoragePaymentInfo items. */
  AllStoragePaymentInfo(request: QueryAllStoragePaymentInfo): Promise<QueryAllStoragePaymentInfoResponse>;
  /** Queries whether user can upload a file based on size. */
  FileUploadCheck(request: QueryFileUploadCheck): Promise<QueryFileUploadCheckResponse>;
  /** Queries current price of storage. */
  PriceCheck(request: QueryPriceCheck): Promise<QueryPriceCheckResponse>;
  /** Queries a list of ActiveProviders items. */
  ActiveProviders(request: QueryActiveProviders): Promise<QueryActiveProvidersResponse>;
  /** Queries protocol storage space used and purchased. */
  StorageStats(request: QueryStorageStats): Promise<QueryStorageStatsResponse>;
}

export const QueryServiceName = "canine_chain.storage.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.File = this.File.bind(this);
    this.OpenFiles = this.OpenFiles.bind(this);
    this.AllFiles = this.AllFiles.bind(this);
    this.AllFilesByMerkle = this.AllFilesByMerkle.bind(this);
    this.AllFilesByOwner = this.AllFilesByOwner.bind(this);
    this.Proof = this.Proof.bind(this);
    this.AllProofs = this.AllProofs.bind(this);
    this.ProofsByAddress = this.ProofsByAddress.bind(this);
    this.Provider = this.Provider.bind(this);
    this.AllProviders = this.AllProviders.bind(this);
    this.Attestation = this.Attestation.bind(this);
    this.AllAttestations = this.AllAttestations.bind(this);
    this.Report = this.Report.bind(this);
    this.AllReports = this.AllReports.bind(this);
    this.FreeSpace = this.FreeSpace.bind(this);
    this.StoreCount = this.StoreCount.bind(this);
    this.FindFile = this.FindFile.bind(this);
    this.GetClientFreeSpace = this.GetClientFreeSpace.bind(this);
    this.GetPayData = this.GetPayData.bind(this);
    this.StoragePaymentInfo = this.StoragePaymentInfo.bind(this);
    this.AllStoragePaymentInfo = this.AllStoragePaymentInfo.bind(this);
    this.FileUploadCheck = this.FileUploadCheck.bind(this);
    this.PriceCheck = this.PriceCheck.bind(this);
    this.ActiveProviders = this.ActiveProviders.bind(this);
    this.StorageStats = this.StorageStats.bind(this);
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

  OpenFiles(request: QueryOpenFiles): Promise<QueryAllFilesResponse> {
    const data = QueryOpenFiles.encode(request).finish();
    const promise = this.rpc.request(this.service, "OpenFiles", data);
    return promise.then((data) => QueryAllFilesResponse.decode(_m0.Reader.create(data)));
  }

  AllFiles(request: QueryAllFiles): Promise<QueryAllFilesResponse> {
    const data = QueryAllFiles.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllFiles", data);
    return promise.then((data) => QueryAllFilesResponse.decode(_m0.Reader.create(data)));
  }

  AllFilesByMerkle(request: QueryAllFilesByMerkle): Promise<QueryAllFilesByMerkleResponse> {
    const data = QueryAllFilesByMerkle.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllFilesByMerkle", data);
    return promise.then((data) => QueryAllFilesByMerkleResponse.decode(_m0.Reader.create(data)));
  }

  AllFilesByOwner(request: QueryAllFilesByOwner): Promise<QueryAllFilesByOwnerResponse> {
    const data = QueryAllFilesByOwner.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllFilesByOwner", data);
    return promise.then((data) => QueryAllFilesByOwnerResponse.decode(_m0.Reader.create(data)));
  }

  Proof(request: QueryProof): Promise<QueryProofResponse> {
    const data = QueryProof.encode(request).finish();
    const promise = this.rpc.request(this.service, "Proof", data);
    return promise.then((data) => QueryProofResponse.decode(_m0.Reader.create(data)));
  }

  AllProofs(request: QueryAllProofs): Promise<QueryAllProofsResponse> {
    const data = QueryAllProofs.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllProofs", data);
    return promise.then((data) => QueryAllProofsResponse.decode(_m0.Reader.create(data)));
  }

  ProofsByAddress(request: QueryProofsByAddress): Promise<QueryProofsByAddressResponse> {
    const data = QueryProofsByAddress.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProofsByAddress", data);
    return promise.then((data) => QueryProofsByAddressResponse.decode(_m0.Reader.create(data)));
  }

  Provider(request: QueryProvider): Promise<QueryProviderResponse> {
    const data = QueryProvider.encode(request).finish();
    const promise = this.rpc.request(this.service, "Provider", data);
    return promise.then((data) => QueryProviderResponse.decode(_m0.Reader.create(data)));
  }

  AllProviders(request: QueryAllProviders): Promise<QueryAllProvidersResponse> {
    const data = QueryAllProviders.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllProviders", data);
    return promise.then((data) => QueryAllProvidersResponse.decode(_m0.Reader.create(data)));
  }

  Attestation(request: QueryAttestation): Promise<QueryAttestationResponse> {
    const data = QueryAttestation.encode(request).finish();
    const promise = this.rpc.request(this.service, "Attestation", data);
    return promise.then((data) => QueryAttestationResponse.decode(_m0.Reader.create(data)));
  }

  AllAttestations(request: QueryAllAttestations): Promise<QueryAllAttestationsResponse> {
    const data = QueryAllAttestations.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllAttestations", data);
    return promise.then((data) => QueryAllAttestationsResponse.decode(_m0.Reader.create(data)));
  }

  Report(request: QueryReport): Promise<QueryReportResponse> {
    const data = QueryReport.encode(request).finish();
    const promise = this.rpc.request(this.service, "Report", data);
    return promise.then((data) => QueryReportResponse.decode(_m0.Reader.create(data)));
  }

  AllReports(request: QueryAllReports): Promise<QueryAllReportsResponse> {
    const data = QueryAllReports.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllReports", data);
    return promise.then((data) => QueryAllReportsResponse.decode(_m0.Reader.create(data)));
  }

  FreeSpace(request: QueryFreeSpace): Promise<QueryFreeSpaceResponse> {
    const data = QueryFreeSpace.encode(request).finish();
    const promise = this.rpc.request(this.service, "FreeSpace", data);
    return promise.then((data) => QueryFreeSpaceResponse.decode(_m0.Reader.create(data)));
  }

  StoreCount(request: QueryStoreCount): Promise<QueryStoreCountResponse> {
    const data = QueryStoreCount.encode(request).finish();
    const promise = this.rpc.request(this.service, "StoreCount", data);
    return promise.then((data) => QueryStoreCountResponse.decode(_m0.Reader.create(data)));
  }

  FindFile(request: QueryFindFile): Promise<QueryFindFileResponse> {
    const data = QueryFindFile.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindFile", data);
    return promise.then((data) => QueryFindFileResponse.decode(_m0.Reader.create(data)));
  }

  GetClientFreeSpace(request: QueryClientFreeSpace): Promise<QueryClientFreeSpaceResponse> {
    const data = QueryClientFreeSpace.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetClientFreeSpace", data);
    return promise.then((data) => QueryClientFreeSpaceResponse.decode(_m0.Reader.create(data)));
  }

  GetPayData(request: QueryPayData): Promise<QueryPayDataResponse> {
    const data = QueryPayData.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPayData", data);
    return promise.then((data) => QueryPayDataResponse.decode(_m0.Reader.create(data)));
  }

  StoragePaymentInfo(request: QueryStoragePaymentInfo): Promise<QueryStoragePaymentInfoResponse> {
    const data = QueryStoragePaymentInfo.encode(request).finish();
    const promise = this.rpc.request(this.service, "StoragePaymentInfo", data);
    return promise.then((data) => QueryStoragePaymentInfoResponse.decode(_m0.Reader.create(data)));
  }

  AllStoragePaymentInfo(request: QueryAllStoragePaymentInfo): Promise<QueryAllStoragePaymentInfoResponse> {
    const data = QueryAllStoragePaymentInfo.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllStoragePaymentInfo", data);
    return promise.then((data) => QueryAllStoragePaymentInfoResponse.decode(_m0.Reader.create(data)));
  }

  FileUploadCheck(request: QueryFileUploadCheck): Promise<QueryFileUploadCheckResponse> {
    const data = QueryFileUploadCheck.encode(request).finish();
    const promise = this.rpc.request(this.service, "FileUploadCheck", data);
    return promise.then((data) => QueryFileUploadCheckResponse.decode(_m0.Reader.create(data)));
  }

  PriceCheck(request: QueryPriceCheck): Promise<QueryPriceCheckResponse> {
    const data = QueryPriceCheck.encode(request).finish();
    const promise = this.rpc.request(this.service, "PriceCheck", data);
    return promise.then((data) => QueryPriceCheckResponse.decode(_m0.Reader.create(data)));
  }

  ActiveProviders(request: QueryActiveProviders): Promise<QueryActiveProvidersResponse> {
    const data = QueryActiveProviders.encode(request).finish();
    const promise = this.rpc.request(this.service, "ActiveProviders", data);
    return promise.then((data) => QueryActiveProvidersResponse.decode(_m0.Reader.create(data)));
  }

  StorageStats(request: QueryStorageStats): Promise<QueryStorageStatsResponse> {
    const data = QueryStorageStats.encode(request).finish();
    const promise = this.rpc.request(this.service, "StorageStats", data);
    return promise.then((data) => QueryStorageStatsResponse.decode(_m0.Reader.create(data)));
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

function bytesFromBase64(b64: string): Uint8Array {
  const bin = gt.atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(gt.String.fromCharCode(byte));
  });
  return gt.btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(gt.Number.MAX_SAFE_INTEGER)) {
    throw new gt.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}