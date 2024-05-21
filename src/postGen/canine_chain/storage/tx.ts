/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.storage";

export interface MsgPostFile {
  creator: string;
  merkle: Uint8Array;
  fileSize: number;
  /** How many blocks between proofs. */
  proofInterval: number;
  proofType: number;
  /** How many provers this file can have. */
  maxProofs: number;
  expires: number;
  /** Misc string to store extra details. */
  note: string;
}

export interface MsgPostFileResponse {
  /** list of providers that are pre-loaded into the file */
  providerIps: string[];
  startBlock: number;
}

export interface MsgPostProof {
  creator: string;
  item: Uint8Array;
  hashList: Uint8Array;
  merkle: Uint8Array;
  owner: string;
  start: number;
  toProve: number;
}

export interface MsgPostProofResponse {
  success: boolean;
  errorMessage: string;
}

export interface MsgDeleteFile {
  creator: string;
  merkle: Uint8Array;
  start: number;
}

export interface MsgDeleteFileResponse {
}

export interface MsgSetProviderIP {
  creator: string;
  ip: string;
}

export interface MsgSetProviderIPResponse {
}

export interface MsgSetProviderKeybase {
  creator: string;
  keybase: string;
}

export interface MsgSetProviderKeybaseResponse {
}

export interface MsgSetProviderTotalSpace {
  creator: string;
  space: number;
}

export interface MsgSetProviderTotalSpaceResponse {
}

export interface MsgAddClaimer {
  creator: string;
  claimAddress: string;
}

export interface MsgAddClaimerResponse {
}

export interface MsgRemoveClaimer {
  creator: string;
  claimAddress: string;
}

export interface MsgRemoveClaimerResponse {
}

export interface MsgInitProvider {
  creator: string;
  ip: string;
  keybase: string;
  totalSpace: number;
}

export interface MsgInitProviderResponse {
}

export interface MsgShutdownProvider {
  creator: string;
}

export interface MsgShutdownProviderResponse {
}

export interface MsgBuyStorage {
  creator: string;
  forAddress: string;
  durationDays: number;
  bytes: number;
  paymentDenom: string;
}

export interface MsgBuyStorageResponse {
}

export interface MsgRequestAttestationForm {
  creator: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}

export interface MsgRequestAttestationFormResponse {
  providers: string[];
  success: boolean;
  error: string;
}

export interface MsgAttest {
  creator: string;
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}

export interface MsgAttestResponse {
}

export interface MsgRequestReportForm {
  creator: string;
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}

export interface MsgRequestReportFormResponse {
  providers: string[];
  success: boolean;
  error: string;
}

export interface MsgReport {
  creator: string;
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}

export interface MsgReportResponse {
}

function createBaseMsgPostFile(): MsgPostFile {
  return {
    creator: "",
    merkle: new Uint8Array(0),
    fileSize: 0,
    proofInterval: 0,
    proofType: 0,
    maxProofs: 0,
    expires: 0,
    note: "",
  };
}

export const MsgPostFile = {
  encode(message: MsgPostFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.merkle.length !== 0) {
      writer.uint32(18).bytes(message.merkle);
    }
    if (message.fileSize !== 0) {
      writer.uint32(24).int64(message.fileSize);
    }
    if (message.proofInterval !== 0) {
      writer.uint32(32).int64(message.proofInterval);
    }
    if (message.proofType !== 0) {
      writer.uint32(40).int64(message.proofType);
    }
    if (message.maxProofs !== 0) {
      writer.uint32(48).int64(message.maxProofs);
    }
    if (message.expires !== 0) {
      writer.uint32(56).int64(message.expires);
    }
    if (message.note !== "") {
      writer.uint32(66).string(message.note);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.merkle = reader.bytes();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.fileSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.proofInterval = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.proofType = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.maxProofs = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.expires = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.note = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPostFile {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      fileSize: isSet(object.fileSize) ? gt.Number(object.fileSize) : 0,
      proofInterval: isSet(object.proofInterval) ? gt.Number(object.proofInterval) : 0,
      proofType: isSet(object.proofType) ? gt.Number(object.proofType) : 0,
      maxProofs: isSet(object.maxProofs) ? gt.Number(object.maxProofs) : 0,
      expires: isSet(object.expires) ? gt.Number(object.expires) : 0,
      note: isSet(object.note) ? gt.String(object.note) : "",
    };
  },

  toJSON(message: MsgPostFile): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.merkle.length !== 0) {
      obj.merkle = base64FromBytes(message.merkle);
    }
    if (message.fileSize !== 0) {
      obj.fileSize = Math.round(message.fileSize);
    }
    if (message.proofInterval !== 0) {
      obj.proofInterval = Math.round(message.proofInterval);
    }
    if (message.proofType !== 0) {
      obj.proofType = Math.round(message.proofType);
    }
    if (message.maxProofs !== 0) {
      obj.maxProofs = Math.round(message.maxProofs);
    }
    if (message.expires !== 0) {
      obj.expires = Math.round(message.expires);
    }
    if (message.note !== "") {
      obj.note = message.note;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPostFile>, I>>(base?: I): MsgPostFile {
    return MsgPostFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPostFile>, I>>(object: I): MsgPostFile {
    const message = createBaseMsgPostFile();
    message.creator = object.creator ?? "";
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.fileSize = object.fileSize ?? 0;
    message.proofInterval = object.proofInterval ?? 0;
    message.proofType = object.proofType ?? 0;
    message.maxProofs = object.maxProofs ?? 0;
    message.expires = object.expires ?? 0;
    message.note = object.note ?? "";
    return message;
  },
};

function createBaseMsgPostFileResponse(): MsgPostFileResponse {
  return { providerIps: [], startBlock: 0 };
}

export const MsgPostFileResponse = {
  encode(message: MsgPostFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providerIps) {
      writer.uint32(10).string(v!);
    }
    if (message.startBlock !== 0) {
      writer.uint32(16).int64(message.startBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providerIps.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startBlock = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPostFileResponse {
    return {
      providerIps: gt.Array.isArray(object?.providerIps) ? object.providerIps.map((e: any) => gt.String(e)) : [],
      startBlock: isSet(object.startBlock) ? gt.Number(object.startBlock) : 0,
    };
  },

  toJSON(message: MsgPostFileResponse): unknown {
    const obj: any = {};
    if (message.providerIps?.length) {
      obj.providerIps = message.providerIps;
    }
    if (message.startBlock !== 0) {
      obj.startBlock = Math.round(message.startBlock);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPostFileResponse>, I>>(base?: I): MsgPostFileResponse {
    return MsgPostFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPostFileResponse>, I>>(object: I): MsgPostFileResponse {
    const message = createBaseMsgPostFileResponse();
    message.providerIps = object.providerIps?.map((e) => e) || [];
    message.startBlock = object.startBlock ?? 0;
    return message;
  },
};

function createBaseMsgPostProof(): MsgPostProof {
  return {
    creator: "",
    item: new Uint8Array(0),
    hashList: new Uint8Array(0),
    merkle: new Uint8Array(0),
    owner: "",
    start: 0,
    toProve: 0,
  };
}

export const MsgPostProof = {
  encode(message: MsgPostProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.item.length !== 0) {
      writer.uint32(18).bytes(message.item);
    }
    if (message.hashList.length !== 0) {
      writer.uint32(26).bytes(message.hashList);
    }
    if (message.merkle.length !== 0) {
      writer.uint32(34).bytes(message.merkle);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    if (message.start !== 0) {
      writer.uint32(48).int64(message.start);
    }
    if (message.toProve !== 0) {
      writer.uint32(56).int64(message.toProve);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.item = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hashList = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.merkle = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.start = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.toProve = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPostProof {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      item: isSet(object.item) ? bytesFromBase64(object.item) : new Uint8Array(0),
      hashList: isSet(object.hashList) ? bytesFromBase64(object.hashList) : new Uint8Array(0),
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
      toProve: isSet(object.toProve) ? gt.Number(object.toProve) : 0,
    };
  },

  toJSON(message: MsgPostProof): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.item.length !== 0) {
      obj.item = base64FromBytes(message.item);
    }
    if (message.hashList.length !== 0) {
      obj.hashList = base64FromBytes(message.hashList);
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
    if (message.toProve !== 0) {
      obj.toProve = Math.round(message.toProve);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPostProof>, I>>(base?: I): MsgPostProof {
    return MsgPostProof.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPostProof>, I>>(object: I): MsgPostProof {
    const message = createBaseMsgPostProof();
    message.creator = object.creator ?? "";
    message.item = object.item ?? new Uint8Array(0);
    message.hashList = object.hashList ?? new Uint8Array(0);
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    message.toProve = object.toProve ?? 0;
    return message;
  },
};

function createBaseMsgPostProofResponse(): MsgPostProofResponse {
  return { success: false, errorMessage: "" };
}

export const MsgPostProofResponse = {
  encode(message: MsgPostProofResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success !== false) {
      writer.uint32(8).bool(message.success);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostProofResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPostProofResponse {
    return {
      success: isSet(object.success) ? gt.Boolean(object.success) : false,
      errorMessage: isSet(object.errorMessage) ? gt.String(object.errorMessage) : "",
    };
  },

  toJSON(message: MsgPostProofResponse): unknown {
    const obj: any = {};
    if (message.success !== false) {
      obj.success = message.success;
    }
    if (message.errorMessage !== "") {
      obj.errorMessage = message.errorMessage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPostProofResponse>, I>>(base?: I): MsgPostProofResponse {
    return MsgPostProofResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPostProofResponse>, I>>(object: I): MsgPostProofResponse {
    const message = createBaseMsgPostProofResponse();
    message.success = object.success ?? false;
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

function createBaseMsgDeleteFile(): MsgDeleteFile {
  return { creator: "", merkle: new Uint8Array(0), start: 0 };
}

export const MsgDeleteFile = {
  encode(message: MsgDeleteFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.merkle.length !== 0) {
      writer.uint32(18).bytes(message.merkle);
    }
    if (message.start !== 0) {
      writer.uint32(24).int64(message.start);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.merkle = reader.bytes();
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

  fromJSON(object: any): MsgDeleteFile {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      start: isSet(object.start) ? gt.Number(object.start) : 0,
    };
  },

  toJSON(message: MsgDeleteFile): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.merkle.length !== 0) {
      obj.merkle = base64FromBytes(message.merkle);
    }
    if (message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteFile>, I>>(base?: I): MsgDeleteFile {
    return MsgDeleteFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteFile>, I>>(object: I): MsgDeleteFile {
    const message = createBaseMsgDeleteFile();
    message.creator = object.creator ?? "";
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseMsgDeleteFileResponse(): MsgDeleteFileResponse {
  return {};
}

export const MsgDeleteFileResponse = {
  encode(_: MsgDeleteFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteFileResponse();
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

  fromJSON(_: any): MsgDeleteFileResponse {
    return {};
  },

  toJSON(_: MsgDeleteFileResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteFileResponse>, I>>(base?: I): MsgDeleteFileResponse {
    return MsgDeleteFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteFileResponse>, I>>(_: I): MsgDeleteFileResponse {
    const message = createBaseMsgDeleteFileResponse();
    return message;
  },
};

function createBaseMsgSetProviderIP(): MsgSetProviderIP {
  return { creator: "", ip: "" };
}

export const MsgSetProviderIP = {
  encode(message: MsgSetProviderIP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetProviderIP {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProviderIP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ip = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetProviderIP {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      ip: isSet(object.ip) ? gt.String(object.ip) : "",
    };
  },

  toJSON(message: MsgSetProviderIP): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetProviderIP>, I>>(base?: I): MsgSetProviderIP {
    return MsgSetProviderIP.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetProviderIP>, I>>(object: I): MsgSetProviderIP {
    const message = createBaseMsgSetProviderIP();
    message.creator = object.creator ?? "";
    message.ip = object.ip ?? "";
    return message;
  },
};

function createBaseMsgSetProviderIPResponse(): MsgSetProviderIPResponse {
  return {};
}

export const MsgSetProviderIPResponse = {
  encode(_: MsgSetProviderIPResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetProviderIPResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProviderIPResponse();
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

  fromJSON(_: any): MsgSetProviderIPResponse {
    return {};
  },

  toJSON(_: MsgSetProviderIPResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetProviderIPResponse>, I>>(base?: I): MsgSetProviderIPResponse {
    return MsgSetProviderIPResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetProviderIPResponse>, I>>(_: I): MsgSetProviderIPResponse {
    const message = createBaseMsgSetProviderIPResponse();
    return message;
  },
};

function createBaseMsgSetProviderKeybase(): MsgSetProviderKeybase {
  return { creator: "", keybase: "" };
}

export const MsgSetProviderKeybase = {
  encode(message: MsgSetProviderKeybase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.keybase !== "") {
      writer.uint32(18).string(message.keybase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetProviderKeybase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProviderKeybase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keybase = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetProviderKeybase {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      keybase: isSet(object.keybase) ? gt.String(object.keybase) : "",
    };
  },

  toJSON(message: MsgSetProviderKeybase): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.keybase !== "") {
      obj.keybase = message.keybase;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetProviderKeybase>, I>>(base?: I): MsgSetProviderKeybase {
    return MsgSetProviderKeybase.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetProviderKeybase>, I>>(object: I): MsgSetProviderKeybase {
    const message = createBaseMsgSetProviderKeybase();
    message.creator = object.creator ?? "";
    message.keybase = object.keybase ?? "";
    return message;
  },
};

function createBaseMsgSetProviderKeybaseResponse(): MsgSetProviderKeybaseResponse {
  return {};
}

export const MsgSetProviderKeybaseResponse = {
  encode(_: MsgSetProviderKeybaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetProviderKeybaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProviderKeybaseResponse();
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

  fromJSON(_: any): MsgSetProviderKeybaseResponse {
    return {};
  },

  toJSON(_: MsgSetProviderKeybaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetProviderKeybaseResponse>, I>>(base?: I): MsgSetProviderKeybaseResponse {
    return MsgSetProviderKeybaseResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetProviderKeybaseResponse>, I>>(_: I): MsgSetProviderKeybaseResponse {
    const message = createBaseMsgSetProviderKeybaseResponse();
    return message;
  },
};

function createBaseMsgSetProviderTotalSpace(): MsgSetProviderTotalSpace {
  return { creator: "", space: 0 };
}

export const MsgSetProviderTotalSpace = {
  encode(message: MsgSetProviderTotalSpace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.space !== 0) {
      writer.uint32(16).int64(message.space);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetProviderTotalSpace {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProviderTotalSpace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): MsgSetProviderTotalSpace {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      space: isSet(object.space) ? gt.Number(object.space) : 0,
    };
  },

  toJSON(message: MsgSetProviderTotalSpace): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.space !== 0) {
      obj.space = Math.round(message.space);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetProviderTotalSpace>, I>>(base?: I): MsgSetProviderTotalSpace {
    return MsgSetProviderTotalSpace.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetProviderTotalSpace>, I>>(object: I): MsgSetProviderTotalSpace {
    const message = createBaseMsgSetProviderTotalSpace();
    message.creator = object.creator ?? "";
    message.space = object.space ?? 0;
    return message;
  },
};

function createBaseMsgSetProviderTotalSpaceResponse(): MsgSetProviderTotalSpaceResponse {
  return {};
}

export const MsgSetProviderTotalSpaceResponse = {
  encode(_: MsgSetProviderTotalSpaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetProviderTotalSpaceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProviderTotalSpaceResponse();
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

  fromJSON(_: any): MsgSetProviderTotalSpaceResponse {
    return {};
  },

  toJSON(_: MsgSetProviderTotalSpaceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetProviderTotalSpaceResponse>, I>>(
    base?: I,
  ): MsgSetProviderTotalSpaceResponse {
    return MsgSetProviderTotalSpaceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetProviderTotalSpaceResponse>, I>>(
    _: I,
  ): MsgSetProviderTotalSpaceResponse {
    const message = createBaseMsgSetProviderTotalSpaceResponse();
    return message;
  },
};

function createBaseMsgAddClaimer(): MsgAddClaimer {
  return { creator: "", claimAddress: "" };
}

export const MsgAddClaimer = {
  encode(message: MsgAddClaimer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.claimAddress !== "") {
      writer.uint32(18).string(message.claimAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddClaimer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddClaimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.claimAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddClaimer {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      claimAddress: isSet(object.claimAddress) ? gt.String(object.claimAddress) : "",
    };
  },

  toJSON(message: MsgAddClaimer): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.claimAddress !== "") {
      obj.claimAddress = message.claimAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddClaimer>, I>>(base?: I): MsgAddClaimer {
    return MsgAddClaimer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddClaimer>, I>>(object: I): MsgAddClaimer {
    const message = createBaseMsgAddClaimer();
    message.creator = object.creator ?? "";
    message.claimAddress = object.claimAddress ?? "";
    return message;
  },
};

function createBaseMsgAddClaimerResponse(): MsgAddClaimerResponse {
  return {};
}

export const MsgAddClaimerResponse = {
  encode(_: MsgAddClaimerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddClaimerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddClaimerResponse();
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

  fromJSON(_: any): MsgAddClaimerResponse {
    return {};
  },

  toJSON(_: MsgAddClaimerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddClaimerResponse>, I>>(base?: I): MsgAddClaimerResponse {
    return MsgAddClaimerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddClaimerResponse>, I>>(_: I): MsgAddClaimerResponse {
    const message = createBaseMsgAddClaimerResponse();
    return message;
  },
};

function createBaseMsgRemoveClaimer(): MsgRemoveClaimer {
  return { creator: "", claimAddress: "" };
}

export const MsgRemoveClaimer = {
  encode(message: MsgRemoveClaimer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.claimAddress !== "") {
      writer.uint32(18).string(message.claimAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveClaimer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveClaimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.claimAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveClaimer {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      claimAddress: isSet(object.claimAddress) ? gt.String(object.claimAddress) : "",
    };
  },

  toJSON(message: MsgRemoveClaimer): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.claimAddress !== "") {
      obj.claimAddress = message.claimAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRemoveClaimer>, I>>(base?: I): MsgRemoveClaimer {
    return MsgRemoveClaimer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveClaimer>, I>>(object: I): MsgRemoveClaimer {
    const message = createBaseMsgRemoveClaimer();
    message.creator = object.creator ?? "";
    message.claimAddress = object.claimAddress ?? "";
    return message;
  },
};

function createBaseMsgRemoveClaimerResponse(): MsgRemoveClaimerResponse {
  return {};
}

export const MsgRemoveClaimerResponse = {
  encode(_: MsgRemoveClaimerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveClaimerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveClaimerResponse();
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

  fromJSON(_: any): MsgRemoveClaimerResponse {
    return {};
  },

  toJSON(_: MsgRemoveClaimerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRemoveClaimerResponse>, I>>(base?: I): MsgRemoveClaimerResponse {
    return MsgRemoveClaimerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveClaimerResponse>, I>>(_: I): MsgRemoveClaimerResponse {
    const message = createBaseMsgRemoveClaimerResponse();
    return message;
  },
};

function createBaseMsgInitProvider(): MsgInitProvider {
  return { creator: "", ip: "", keybase: "", totalSpace: 0 };
}

export const MsgInitProvider = {
  encode(message: MsgInitProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.keybase !== "") {
      writer.uint32(26).string(message.keybase);
    }
    if (message.totalSpace !== 0) {
      writer.uint32(32).int64(message.totalSpace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitProvider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.keybase = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.totalSpace = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgInitProvider {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      ip: isSet(object.ip) ? gt.String(object.ip) : "",
      keybase: isSet(object.keybase) ? gt.String(object.keybase) : "",
      totalSpace: isSet(object.totalSpace) ? gt.Number(object.totalSpace) : 0,
    };
  },

  toJSON(message: MsgInitProvider): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.keybase !== "") {
      obj.keybase = message.keybase;
    }
    if (message.totalSpace !== 0) {
      obj.totalSpace = Math.round(message.totalSpace);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgInitProvider>, I>>(base?: I): MsgInitProvider {
    return MsgInitProvider.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgInitProvider>, I>>(object: I): MsgInitProvider {
    const message = createBaseMsgInitProvider();
    message.creator = object.creator ?? "";
    message.ip = object.ip ?? "";
    message.keybase = object.keybase ?? "";
    message.totalSpace = object.totalSpace ?? 0;
    return message;
  },
};

function createBaseMsgInitProviderResponse(): MsgInitProviderResponse {
  return {};
}

export const MsgInitProviderResponse = {
  encode(_: MsgInitProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitProviderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitProviderResponse();
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

  fromJSON(_: any): MsgInitProviderResponse {
    return {};
  },

  toJSON(_: MsgInitProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgInitProviderResponse>, I>>(base?: I): MsgInitProviderResponse {
    return MsgInitProviderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgInitProviderResponse>, I>>(_: I): MsgInitProviderResponse {
    const message = createBaseMsgInitProviderResponse();
    return message;
  },
};

function createBaseMsgShutdownProvider(): MsgShutdownProvider {
  return { creator: "" };
}

export const MsgShutdownProvider = {
  encode(message: MsgShutdownProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgShutdownProvider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgShutdownProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgShutdownProvider {
    return { creator: isSet(object.creator) ? gt.String(object.creator) : "" };
  },

  toJSON(message: MsgShutdownProvider): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgShutdownProvider>, I>>(base?: I): MsgShutdownProvider {
    return MsgShutdownProvider.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgShutdownProvider>, I>>(object: I): MsgShutdownProvider {
    const message = createBaseMsgShutdownProvider();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgShutdownProviderResponse(): MsgShutdownProviderResponse {
  return {};
}

export const MsgShutdownProviderResponse = {
  encode(_: MsgShutdownProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgShutdownProviderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgShutdownProviderResponse();
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

  fromJSON(_: any): MsgShutdownProviderResponse {
    return {};
  },

  toJSON(_: MsgShutdownProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgShutdownProviderResponse>, I>>(base?: I): MsgShutdownProviderResponse {
    return MsgShutdownProviderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgShutdownProviderResponse>, I>>(_: I): MsgShutdownProviderResponse {
    const message = createBaseMsgShutdownProviderResponse();
    return message;
  },
};

function createBaseMsgBuyStorage(): MsgBuyStorage {
  return { creator: "", forAddress: "", durationDays: 0, bytes: 0, paymentDenom: "" };
}

export const MsgBuyStorage = {
  encode(message: MsgBuyStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.forAddress !== "") {
      writer.uint32(18).string(message.forAddress);
    }
    if (message.durationDays !== 0) {
      writer.uint32(24).int64(message.durationDays);
    }
    if (message.bytes !== 0) {
      writer.uint32(32).int64(message.bytes);
    }
    if (message.paymentDenom !== "") {
      writer.uint32(42).string(message.paymentDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyStorage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.forAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.durationDays = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.bytes = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.paymentDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBuyStorage {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      forAddress: isSet(object.forAddress) ? gt.String(object.forAddress) : "",
      durationDays: isSet(object.durationDays) ? gt.Number(object.durationDays) : 0,
      bytes: isSet(object.bytes) ? gt.Number(object.bytes) : 0,
      paymentDenom: isSet(object.paymentDenom) ? gt.String(object.paymentDenom) : "",
    };
  },

  toJSON(message: MsgBuyStorage): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.forAddress !== "") {
      obj.forAddress = message.forAddress;
    }
    if (message.durationDays !== 0) {
      obj.durationDays = Math.round(message.durationDays);
    }
    if (message.bytes !== 0) {
      obj.bytes = Math.round(message.bytes);
    }
    if (message.paymentDenom !== "") {
      obj.paymentDenom = message.paymentDenom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBuyStorage>, I>>(base?: I): MsgBuyStorage {
    return MsgBuyStorage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBuyStorage>, I>>(object: I): MsgBuyStorage {
    const message = createBaseMsgBuyStorage();
    message.creator = object.creator ?? "";
    message.forAddress = object.forAddress ?? "";
    message.durationDays = object.durationDays ?? 0;
    message.bytes = object.bytes ?? 0;
    message.paymentDenom = object.paymentDenom ?? "";
    return message;
  },
};

function createBaseMsgBuyStorageResponse(): MsgBuyStorageResponse {
  return {};
}

export const MsgBuyStorageResponse = {
  encode(_: MsgBuyStorageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyStorageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyStorageResponse();
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

  fromJSON(_: any): MsgBuyStorageResponse {
    return {};
  },

  toJSON(_: MsgBuyStorageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBuyStorageResponse>, I>>(base?: I): MsgBuyStorageResponse {
    return MsgBuyStorageResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBuyStorageResponse>, I>>(_: I): MsgBuyStorageResponse {
    const message = createBaseMsgBuyStorageResponse();
    return message;
  },
};

function createBaseMsgRequestAttestationForm(): MsgRequestAttestationForm {
  return { creator: "", merkle: new Uint8Array(0), owner: "", start: 0 };
}

export const MsgRequestAttestationForm = {
  encode(message: MsgRequestAttestationForm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestAttestationForm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestAttestationForm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

  fromJSON(object: any): MsgRequestAttestationForm {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
    };
  },

  toJSON(message: MsgRequestAttestationForm): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
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

  create<I extends Exact<DeepPartial<MsgRequestAttestationForm>, I>>(base?: I): MsgRequestAttestationForm {
    return MsgRequestAttestationForm.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestAttestationForm>, I>>(object: I): MsgRequestAttestationForm {
    const message = createBaseMsgRequestAttestationForm();
    message.creator = object.creator ?? "";
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseMsgRequestAttestationFormResponse(): MsgRequestAttestationFormResponse {
  return { providers: [], success: false, error: "" };
}

export const MsgRequestAttestationFormResponse = {
  encode(message: MsgRequestAttestationFormResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      writer.uint32(10).string(v!);
    }
    if (message.success !== false) {
      writer.uint32(16).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestAttestationFormResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestAttestationFormResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providers.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRequestAttestationFormResponse {
    return {
      providers: gt.Array.isArray(object?.providers) ? object.providers.map((e: any) => gt.String(e)) : [],
      success: isSet(object.success) ? gt.Boolean(object.success) : false,
      error: isSet(object.error) ? gt.String(object.error) : "",
    };
  },

  toJSON(message: MsgRequestAttestationFormResponse): unknown {
    const obj: any = {};
    if (message.providers?.length) {
      obj.providers = message.providers;
    }
    if (message.success !== false) {
      obj.success = message.success;
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestAttestationFormResponse>, I>>(
    base?: I,
  ): MsgRequestAttestationFormResponse {
    return MsgRequestAttestationFormResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestAttestationFormResponse>, I>>(
    object: I,
  ): MsgRequestAttestationFormResponse {
    const message = createBaseMsgRequestAttestationFormResponse();
    message.providers = object.providers?.map((e) => e) || [];
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseMsgAttest(): MsgAttest {
  return { creator: "", prover: "", merkle: new Uint8Array(0), owner: "", start: 0 };
}

export const MsgAttest = {
  encode(message: MsgAttest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.prover !== "") {
      writer.uint32(18).string(message.prover);
    }
    if (message.merkle.length !== 0) {
      writer.uint32(26).bytes(message.merkle);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.start !== 0) {
      writer.uint32(40).int64(message.start);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.prover = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.merkle = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): MsgAttest {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      prover: isSet(object.prover) ? gt.String(object.prover) : "",
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
    };
  },

  toJSON(message: MsgAttest): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
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

  create<I extends Exact<DeepPartial<MsgAttest>, I>>(base?: I): MsgAttest {
    return MsgAttest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAttest>, I>>(object: I): MsgAttest {
    const message = createBaseMsgAttest();
    message.creator = object.creator ?? "";
    message.prover = object.prover ?? "";
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseMsgAttestResponse(): MsgAttestResponse {
  return {};
}

export const MsgAttestResponse = {
  encode(_: MsgAttestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttestResponse();
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

  fromJSON(_: any): MsgAttestResponse {
    return {};
  },

  toJSON(_: MsgAttestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAttestResponse>, I>>(base?: I): MsgAttestResponse {
    return MsgAttestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAttestResponse>, I>>(_: I): MsgAttestResponse {
    const message = createBaseMsgAttestResponse();
    return message;
  },
};

function createBaseMsgRequestReportForm(): MsgRequestReportForm {
  return { creator: "", prover: "", merkle: new Uint8Array(0), owner: "", start: 0 };
}

export const MsgRequestReportForm = {
  encode(message: MsgRequestReportForm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.prover !== "") {
      writer.uint32(18).string(message.prover);
    }
    if (message.merkle.length !== 0) {
      writer.uint32(26).bytes(message.merkle);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.start !== 0) {
      writer.uint32(40).int64(message.start);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestReportForm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestReportForm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.prover = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.merkle = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): MsgRequestReportForm {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      prover: isSet(object.prover) ? gt.String(object.prover) : "",
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
    };
  },

  toJSON(message: MsgRequestReportForm): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
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

  create<I extends Exact<DeepPartial<MsgRequestReportForm>, I>>(base?: I): MsgRequestReportForm {
    return MsgRequestReportForm.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestReportForm>, I>>(object: I): MsgRequestReportForm {
    const message = createBaseMsgRequestReportForm();
    message.creator = object.creator ?? "";
    message.prover = object.prover ?? "";
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseMsgRequestReportFormResponse(): MsgRequestReportFormResponse {
  return { providers: [], success: false, error: "" };
}

export const MsgRequestReportFormResponse = {
  encode(message: MsgRequestReportFormResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      writer.uint32(10).string(v!);
    }
    if (message.success !== false) {
      writer.uint32(16).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestReportFormResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestReportFormResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providers.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRequestReportFormResponse {
    return {
      providers: gt.Array.isArray(object?.providers) ? object.providers.map((e: any) => gt.String(e)) : [],
      success: isSet(object.success) ? gt.Boolean(object.success) : false,
      error: isSet(object.error) ? gt.String(object.error) : "",
    };
  },

  toJSON(message: MsgRequestReportFormResponse): unknown {
    const obj: any = {};
    if (message.providers?.length) {
      obj.providers = message.providers;
    }
    if (message.success !== false) {
      obj.success = message.success;
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestReportFormResponse>, I>>(base?: I): MsgRequestReportFormResponse {
    return MsgRequestReportFormResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestReportFormResponse>, I>>(object: I): MsgRequestReportFormResponse {
    const message = createBaseMsgRequestReportFormResponse();
    message.providers = object.providers?.map((e) => e) || [];
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseMsgReport(): MsgReport {
  return { creator: "", prover: "", merkle: new Uint8Array(0), owner: "", start: 0 };
}

export const MsgReport = {
  encode(message: MsgReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.prover !== "") {
      writer.uint32(18).string(message.prover);
    }
    if (message.merkle.length !== 0) {
      writer.uint32(26).bytes(message.merkle);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.start !== 0) {
      writer.uint32(40).int64(message.start);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.prover = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.merkle = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): MsgReport {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      prover: isSet(object.prover) ? gt.String(object.prover) : "",
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
    };
  },

  toJSON(message: MsgReport): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
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

  create<I extends Exact<DeepPartial<MsgReport>, I>>(base?: I): MsgReport {
    return MsgReport.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgReport>, I>>(object: I): MsgReport {
    const message = createBaseMsgReport();
    message.creator = object.creator ?? "";
    message.prover = object.prover ?? "";
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseMsgReportResponse(): MsgReportResponse {
  return {};
}

export const MsgReportResponse = {
  encode(_: MsgReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReportResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportResponse();
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

  fromJSON(_: any): MsgReportResponse {
    return {};
  },

  toJSON(_: MsgReportResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgReportResponse>, I>>(base?: I): MsgReportResponse {
    return MsgReportResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgReportResponse>, I>>(_: I): MsgReportResponse {
    const message = createBaseMsgReportResponse();
    return message;
  },
};

export interface Msg {
  PostFile(request: MsgPostFile): Promise<MsgPostFileResponse>;
  PostProof(request: MsgPostProof): Promise<MsgPostProofResponse>;
  DeleteFile(request: MsgDeleteFile): Promise<MsgDeleteFileResponse>;
  SetProviderIP(request: MsgSetProviderIP): Promise<MsgSetProviderIPResponse>;
  SetProviderKeybase(request: MsgSetProviderKeybase): Promise<MsgSetProviderKeybaseResponse>;
  SetProviderTotalSpace(request: MsgSetProviderTotalSpace): Promise<MsgSetProviderTotalSpaceResponse>;
  InitProvider(request: MsgInitProvider): Promise<MsgInitProviderResponse>;
  ShutdownProvider(request: MsgShutdownProvider): Promise<MsgShutdownProviderResponse>;
  BuyStorage(request: MsgBuyStorage): Promise<MsgBuyStorageResponse>;
  AddProviderClaimer(request: MsgAddClaimer): Promise<MsgAddClaimerResponse>;
  RemoveProviderClaimer(request: MsgRemoveClaimer): Promise<MsgRemoveClaimerResponse>;
  RequestAttestationForm(request: MsgRequestAttestationForm): Promise<MsgRequestAttestationFormResponse>;
  Attest(request: MsgAttest): Promise<MsgAttestResponse>;
  RequestReportForm(request: MsgRequestReportForm): Promise<MsgRequestReportFormResponse>;
  Report(request: MsgReport): Promise<MsgReportResponse>;
}

export const MsgServiceName = "canine_chain.storage.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.PostFile = this.PostFile.bind(this);
    this.PostProof = this.PostProof.bind(this);
    this.DeleteFile = this.DeleteFile.bind(this);
    this.SetProviderIP = this.SetProviderIP.bind(this);
    this.SetProviderKeybase = this.SetProviderKeybase.bind(this);
    this.SetProviderTotalSpace = this.SetProviderTotalSpace.bind(this);
    this.InitProvider = this.InitProvider.bind(this);
    this.ShutdownProvider = this.ShutdownProvider.bind(this);
    this.BuyStorage = this.BuyStorage.bind(this);
    this.AddProviderClaimer = this.AddProviderClaimer.bind(this);
    this.RemoveProviderClaimer = this.RemoveProviderClaimer.bind(this);
    this.RequestAttestationForm = this.RequestAttestationForm.bind(this);
    this.Attest = this.Attest.bind(this);
    this.RequestReportForm = this.RequestReportForm.bind(this);
    this.Report = this.Report.bind(this);
  }
  PostFile(request: MsgPostFile): Promise<MsgPostFileResponse> {
    const data = MsgPostFile.encode(request).finish();
    const promise = this.rpc.request(this.service, "PostFile", data);
    return promise.then((data) => MsgPostFileResponse.decode(_m0.Reader.create(data)));
  }

  PostProof(request: MsgPostProof): Promise<MsgPostProofResponse> {
    const data = MsgPostProof.encode(request).finish();
    const promise = this.rpc.request(this.service, "PostProof", data);
    return promise.then((data) => MsgPostProofResponse.decode(_m0.Reader.create(data)));
  }

  DeleteFile(request: MsgDeleteFile): Promise<MsgDeleteFileResponse> {
    const data = MsgDeleteFile.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteFile", data);
    return promise.then((data) => MsgDeleteFileResponse.decode(_m0.Reader.create(data)));
  }

  SetProviderIP(request: MsgSetProviderIP): Promise<MsgSetProviderIPResponse> {
    const data = MsgSetProviderIP.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetProviderIP", data);
    return promise.then((data) => MsgSetProviderIPResponse.decode(_m0.Reader.create(data)));
  }

  SetProviderKeybase(request: MsgSetProviderKeybase): Promise<MsgSetProviderKeybaseResponse> {
    const data = MsgSetProviderKeybase.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetProviderKeybase", data);
    return promise.then((data) => MsgSetProviderKeybaseResponse.decode(_m0.Reader.create(data)));
  }

  SetProviderTotalSpace(request: MsgSetProviderTotalSpace): Promise<MsgSetProviderTotalSpaceResponse> {
    const data = MsgSetProviderTotalSpace.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetProviderTotalSpace", data);
    return promise.then((data) => MsgSetProviderTotalSpaceResponse.decode(_m0.Reader.create(data)));
  }

  InitProvider(request: MsgInitProvider): Promise<MsgInitProviderResponse> {
    const data = MsgInitProvider.encode(request).finish();
    const promise = this.rpc.request(this.service, "InitProvider", data);
    return promise.then((data) => MsgInitProviderResponse.decode(_m0.Reader.create(data)));
  }

  ShutdownProvider(request: MsgShutdownProvider): Promise<MsgShutdownProviderResponse> {
    const data = MsgShutdownProvider.encode(request).finish();
    const promise = this.rpc.request(this.service, "ShutdownProvider", data);
    return promise.then((data) => MsgShutdownProviderResponse.decode(_m0.Reader.create(data)));
  }

  BuyStorage(request: MsgBuyStorage): Promise<MsgBuyStorageResponse> {
    const data = MsgBuyStorage.encode(request).finish();
    const promise = this.rpc.request(this.service, "BuyStorage", data);
    return promise.then((data) => MsgBuyStorageResponse.decode(_m0.Reader.create(data)));
  }

  AddProviderClaimer(request: MsgAddClaimer): Promise<MsgAddClaimerResponse> {
    const data = MsgAddClaimer.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddProviderClaimer", data);
    return promise.then((data) => MsgAddClaimerResponse.decode(_m0.Reader.create(data)));
  }

  RemoveProviderClaimer(request: MsgRemoveClaimer): Promise<MsgRemoveClaimerResponse> {
    const data = MsgRemoveClaimer.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveProviderClaimer", data);
    return promise.then((data) => MsgRemoveClaimerResponse.decode(_m0.Reader.create(data)));
  }

  RequestAttestationForm(request: MsgRequestAttestationForm): Promise<MsgRequestAttestationFormResponse> {
    const data = MsgRequestAttestationForm.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestAttestationForm", data);
    return promise.then((data) => MsgRequestAttestationFormResponse.decode(_m0.Reader.create(data)));
  }

  Attest(request: MsgAttest): Promise<MsgAttestResponse> {
    const data = MsgAttest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Attest", data);
    return promise.then((data) => MsgAttestResponse.decode(_m0.Reader.create(data)));
  }

  RequestReportForm(request: MsgRequestReportForm): Promise<MsgRequestReportFormResponse> {
    const data = MsgRequestReportForm.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestReportForm", data);
    return promise.then((data) => MsgRequestReportFormResponse.decode(_m0.Reader.create(data)));
  }

  Report(request: MsgReport): Promise<MsgReportResponse> {
    const data = MsgReport.encode(request).finish();
    const promise = this.rpc.request(this.service, "Report", data);
    return promise.then((data) => MsgReportResponse.decode(_m0.Reader.create(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}