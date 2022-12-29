/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.storage";

export interface MsgPostContract {
  creator: string;
  merkle: string;
  signee: string;
  filesize: string;
  fid: string;
}

export interface MsgPostContractResponse {
}

export interface MsgPostproof {
  creator: string;
  item: string;
  hashlist: string;
  cid: string;
}

export interface MsgPostproofResponse {
  merkle: string;
}

export interface MsgSignContract {
  creator: string;
  cid: string;
}

export interface MsgSignContractResponse {
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

export interface MsgSetProviderTotalspace {
  creator: string;
  space: string;
}

export interface MsgSetProviderTotalspaceResponse {
}

export interface MsgInitProvider {
  creator: string;
  ip: string;
  keybase: string;
  totalspace: string;
}

export interface MsgInitProviderResponse {
}

export interface MsgCancelContract {
  creator: string;
  cid: string;
}

export interface MsgCancelContractResponse {
}

export interface MsgBuyStorage {
  creator: string;
  forAddress: string;
  duration: string;
  bytes: string;
  paymentDenom: string;
}

export interface MsgBuyStorageResponse {
}

export interface MsgClaimStray {
  creator: string;
  cid: string;
}

export interface MsgClaimStrayResponse {
}

export interface MsgUpgradeStorage {
  creator: string;
  forAddress: string;
  duration: string;
  bytes: string;
  paymentDenom: string;
}

export interface MsgUpgradeStorageResponse {
}

function createBaseMsgPostContract(): MsgPostContract {
  return { creator: "", merkle: "", signee: "", filesize: "", fid: "" };
}

export const MsgPostContract = {
  encode(message: MsgPostContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.merkle !== "") {
      writer.uint32(18).string(message.merkle);
    }
    if (message.signee !== "") {
      writer.uint32(26).string(message.signee);
    }
    if (message.filesize !== "") {
      writer.uint32(34).string(message.filesize);
    }
    if (message.fid !== "") {
      writer.uint32(42).string(message.fid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.merkle = reader.string();
          break;
        case 3:
          message.signee = reader.string();
          break;
        case 4:
          message.filesize = reader.string();
          break;
        case 5:
          message.fid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPostContract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      merkle: isSet(object.merkle) ? String(object.merkle) : "",
      signee: isSet(object.signee) ? String(object.signee) : "",
      filesize: isSet(object.filesize) ? String(object.filesize) : "",
      fid: isSet(object.fid) ? String(object.fid) : "",
    };
  },

  toJSON(message: MsgPostContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.merkle !== undefined && (obj.merkle = message.merkle);
    message.signee !== undefined && (obj.signee = message.signee);
    message.filesize !== undefined && (obj.filesize = message.filesize);
    message.fid !== undefined && (obj.fid = message.fid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostContract>, I>>(object: I): MsgPostContract {
    const message = createBaseMsgPostContract();
    message.creator = object.creator ?? "";
    message.merkle = object.merkle ?? "";
    message.signee = object.signee ?? "";
    message.filesize = object.filesize ?? "";
    message.fid = object.fid ?? "";
    return message;
  },
};

function createBaseMsgPostContractResponse(): MsgPostContractResponse {
  return {};
}

export const MsgPostContractResponse = {
  encode(_: MsgPostContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostContractResponse();
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

  fromJSON(_: any): MsgPostContractResponse {
    return {};
  },

  toJSON(_: MsgPostContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostContractResponse>, I>>(_: I): MsgPostContractResponse {
    const message = createBaseMsgPostContractResponse();
    return message;
  },
};

function createBaseMsgPostproof(): MsgPostproof {
  return { creator: "", item: "", hashlist: "", cid: "" };
}

export const MsgPostproof = {
  encode(message: MsgPostproof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.item !== "") {
      writer.uint32(18).string(message.item);
    }
    if (message.hashlist !== "") {
      writer.uint32(26).string(message.hashlist);
    }
    if (message.cid !== "") {
      writer.uint32(34).string(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostproof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostproof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.item = reader.string();
          break;
        case 3:
          message.hashlist = reader.string();
          break;
        case 4:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPostproof {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      item: isSet(object.item) ? String(object.item) : "",
      hashlist: isSet(object.hashlist) ? String(object.hashlist) : "",
      cid: isSet(object.cid) ? String(object.cid) : "",
    };
  },

  toJSON(message: MsgPostproof): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.item !== undefined && (obj.item = message.item);
    message.hashlist !== undefined && (obj.hashlist = message.hashlist);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostproof>, I>>(object: I): MsgPostproof {
    const message = createBaseMsgPostproof();
    message.creator = object.creator ?? "";
    message.item = object.item ?? "";
    message.hashlist = object.hashlist ?? "";
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseMsgPostproofResponse(): MsgPostproofResponse {
  return { merkle: "" };
}

export const MsgPostproofResponse = {
  encode(message: MsgPostproofResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merkle !== "") {
      writer.uint32(10).string(message.merkle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostproofResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostproofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merkle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPostproofResponse {
    return { merkle: isSet(object.merkle) ? String(object.merkle) : "" };
  },

  toJSON(message: MsgPostproofResponse): unknown {
    const obj: any = {};
    message.merkle !== undefined && (obj.merkle = message.merkle);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostproofResponse>, I>>(object: I): MsgPostproofResponse {
    const message = createBaseMsgPostproofResponse();
    message.merkle = object.merkle ?? "";
    return message;
  },
};

function createBaseMsgSignContract(): MsgSignContract {
  return { creator: "", cid: "" };
}

export const MsgSignContract = {
  encode(message: MsgSignContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignContract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cid: isSet(object.cid) ? String(object.cid) : "",
    };
  },

  toJSON(message: MsgSignContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignContract>, I>>(object: I): MsgSignContract {
    const message = createBaseMsgSignContract();
    message.creator = object.creator ?? "";
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseMsgSignContractResponse(): MsgSignContractResponse {
  return {};
}

export const MsgSignContractResponse = {
  encode(_: MsgSignContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignContractResponse();
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

  fromJSON(_: any): MsgSignContractResponse {
    return {};
  },

  toJSON(_: MsgSignContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignContractResponse>, I>>(_: I): MsgSignContractResponse {
    const message = createBaseMsgSignContractResponse();
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProviderIP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetProviderIP {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
    };
  },

  toJSON(message: MsgSetProviderIP): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ip !== undefined && (obj.ip = message.ip);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProviderIPResponse();
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

  fromJSON(_: any): MsgSetProviderIPResponse {
    return {};
  },

  toJSON(_: MsgSetProviderIPResponse): unknown {
    const obj: any = {};
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProviderKeybase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.keybase = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetProviderKeybase {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      keybase: isSet(object.keybase) ? String(object.keybase) : "",
    };
  },

  toJSON(message: MsgSetProviderKeybase): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.keybase !== undefined && (obj.keybase = message.keybase);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProviderKeybaseResponse();
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

  fromJSON(_: any): MsgSetProviderKeybaseResponse {
    return {};
  },

  toJSON(_: MsgSetProviderKeybaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetProviderKeybaseResponse>, I>>(_: I): MsgSetProviderKeybaseResponse {
    const message = createBaseMsgSetProviderKeybaseResponse();
    return message;
  },
};

function createBaseMsgSetProviderTotalspace(): MsgSetProviderTotalspace {
  return { creator: "", space: "" };
}

export const MsgSetProviderTotalspace = {
  encode(message: MsgSetProviderTotalspace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.space !== "") {
      writer.uint32(18).string(message.space);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetProviderTotalspace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProviderTotalspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.space = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetProviderTotalspace {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      space: isSet(object.space) ? String(object.space) : "",
    };
  },

  toJSON(message: MsgSetProviderTotalspace): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.space !== undefined && (obj.space = message.space);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetProviderTotalspace>, I>>(object: I): MsgSetProviderTotalspace {
    const message = createBaseMsgSetProviderTotalspace();
    message.creator = object.creator ?? "";
    message.space = object.space ?? "";
    return message;
  },
};

function createBaseMsgSetProviderTotalspaceResponse(): MsgSetProviderTotalspaceResponse {
  return {};
}

export const MsgSetProviderTotalspaceResponse = {
  encode(_: MsgSetProviderTotalspaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetProviderTotalspaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProviderTotalspaceResponse();
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

  fromJSON(_: any): MsgSetProviderTotalspaceResponse {
    return {};
  },

  toJSON(_: MsgSetProviderTotalspaceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetProviderTotalspaceResponse>, I>>(
    _: I,
  ): MsgSetProviderTotalspaceResponse {
    const message = createBaseMsgSetProviderTotalspaceResponse();
    return message;
  },
};

function createBaseMsgInitProvider(): MsgInitProvider {
  return { creator: "", ip: "", keybase: "", totalspace: "" };
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
    if (message.totalspace !== "") {
      writer.uint32(34).string(message.totalspace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        case 3:
          message.keybase = reader.string();
          break;
        case 4:
          message.totalspace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitProvider {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
      keybase: isSet(object.keybase) ? String(object.keybase) : "",
      totalspace: isSet(object.totalspace) ? String(object.totalspace) : "",
    };
  },

  toJSON(message: MsgInitProvider): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ip !== undefined && (obj.ip = message.ip);
    message.keybase !== undefined && (obj.keybase = message.keybase);
    message.totalspace !== undefined && (obj.totalspace = message.totalspace);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInitProvider>, I>>(object: I): MsgInitProvider {
    const message = createBaseMsgInitProvider();
    message.creator = object.creator ?? "";
    message.ip = object.ip ?? "";
    message.keybase = object.keybase ?? "";
    message.totalspace = object.totalspace ?? "";
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitProviderResponse();
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

  fromJSON(_: any): MsgInitProviderResponse {
    return {};
  },

  toJSON(_: MsgInitProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInitProviderResponse>, I>>(_: I): MsgInitProviderResponse {
    const message = createBaseMsgInitProviderResponse();
    return message;
  },
};

function createBaseMsgCancelContract(): MsgCancelContract {
  return { creator: "", cid: "" };
}

export const MsgCancelContract = {
  encode(message: MsgCancelContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelContract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cid: isSet(object.cid) ? String(object.cid) : "",
    };
  },

  toJSON(message: MsgCancelContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelContract>, I>>(object: I): MsgCancelContract {
    const message = createBaseMsgCancelContract();
    message.creator = object.creator ?? "";
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseMsgCancelContractResponse(): MsgCancelContractResponse {
  return {};
}

export const MsgCancelContractResponse = {
  encode(_: MsgCancelContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelContractResponse();
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

  fromJSON(_: any): MsgCancelContractResponse {
    return {};
  },

  toJSON(_: MsgCancelContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelContractResponse>, I>>(_: I): MsgCancelContractResponse {
    const message = createBaseMsgCancelContractResponse();
    return message;
  },
};

function createBaseMsgBuyStorage(): MsgBuyStorage {
  return { creator: "", forAddress: "", duration: "", bytes: "", paymentDenom: "" };
}

export const MsgBuyStorage = {
  encode(message: MsgBuyStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.forAddress !== "") {
      writer.uint32(18).string(message.forAddress);
    }
    if (message.duration !== "") {
      writer.uint32(26).string(message.duration);
    }
    if (message.bytes !== "") {
      writer.uint32(34).string(message.bytes);
    }
    if (message.paymentDenom !== "") {
      writer.uint32(42).string(message.paymentDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.forAddress = reader.string();
          break;
        case 3:
          message.duration = reader.string();
          break;
        case 4:
          message.bytes = reader.string();
          break;
        case 5:
          message.paymentDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyStorage {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      forAddress: isSet(object.forAddress) ? String(object.forAddress) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      bytes: isSet(object.bytes) ? String(object.bytes) : "",
      paymentDenom: isSet(object.paymentDenom) ? String(object.paymentDenom) : "",
    };
  },

  toJSON(message: MsgBuyStorage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.forAddress !== undefined && (obj.forAddress = message.forAddress);
    message.duration !== undefined && (obj.duration = message.duration);
    message.bytes !== undefined && (obj.bytes = message.bytes);
    message.paymentDenom !== undefined && (obj.paymentDenom = message.paymentDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyStorage>, I>>(object: I): MsgBuyStorage {
    const message = createBaseMsgBuyStorage();
    message.creator = object.creator ?? "";
    message.forAddress = object.forAddress ?? "";
    message.duration = object.duration ?? "";
    message.bytes = object.bytes ?? "";
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyStorageResponse();
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

  fromJSON(_: any): MsgBuyStorageResponse {
    return {};
  },

  toJSON(_: MsgBuyStorageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyStorageResponse>, I>>(_: I): MsgBuyStorageResponse {
    const message = createBaseMsgBuyStorageResponse();
    return message;
  },
};

function createBaseMsgClaimStray(): MsgClaimStray {
  return { creator: "", cid: "" };
}

export const MsgClaimStray = {
  encode(message: MsgClaimStray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimStray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimStray {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cid: isSet(object.cid) ? String(object.cid) : "",
    };
  },

  toJSON(message: MsgClaimStray): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimStray>, I>>(object: I): MsgClaimStray {
    const message = createBaseMsgClaimStray();
    message.creator = object.creator ?? "";
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseMsgClaimStrayResponse(): MsgClaimStrayResponse {
  return {};
}

export const MsgClaimStrayResponse = {
  encode(_: MsgClaimStrayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimStrayResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStrayResponse();
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

  fromJSON(_: any): MsgClaimStrayResponse {
    return {};
  },

  toJSON(_: MsgClaimStrayResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimStrayResponse>, I>>(_: I): MsgClaimStrayResponse {
    const message = createBaseMsgClaimStrayResponse();
    return message;
  },
};

function createBaseMsgUpgradeStorage(): MsgUpgradeStorage {
  return { creator: "", forAddress: "", duration: "", bytes: "", paymentDenom: "" };
}

export const MsgUpgradeStorage = {
  encode(message: MsgUpgradeStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.forAddress !== "") {
      writer.uint32(18).string(message.forAddress);
    }
    if (message.duration !== "") {
      writer.uint32(26).string(message.duration);
    }
    if (message.bytes !== "") {
      writer.uint32(34).string(message.bytes);
    }
    if (message.paymentDenom !== "") {
      writer.uint32(42).string(message.paymentDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.forAddress = reader.string();
          break;
        case 3:
          message.duration = reader.string();
          break;
        case 4:
          message.bytes = reader.string();
          break;
        case 5:
          message.paymentDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpgradeStorage {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      forAddress: isSet(object.forAddress) ? String(object.forAddress) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      bytes: isSet(object.bytes) ? String(object.bytes) : "",
      paymentDenom: isSet(object.paymentDenom) ? String(object.paymentDenom) : "",
    };
  },

  toJSON(message: MsgUpgradeStorage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.forAddress !== undefined && (obj.forAddress = message.forAddress);
    message.duration !== undefined && (obj.duration = message.duration);
    message.bytes !== undefined && (obj.bytes = message.bytes);
    message.paymentDenom !== undefined && (obj.paymentDenom = message.paymentDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpgradeStorage>, I>>(object: I): MsgUpgradeStorage {
    const message = createBaseMsgUpgradeStorage();
    message.creator = object.creator ?? "";
    message.forAddress = object.forAddress ?? "";
    message.duration = object.duration ?? "";
    message.bytes = object.bytes ?? "";
    message.paymentDenom = object.paymentDenom ?? "";
    return message;
  },
};

function createBaseMsgUpgradeStorageResponse(): MsgUpgradeStorageResponse {
  return {};
}

export const MsgUpgradeStorageResponse = {
  encode(_: MsgUpgradeStorageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeStorageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeStorageResponse();
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

  fromJSON(_: any): MsgUpgradeStorageResponse {
    return {};
  },

  toJSON(_: MsgUpgradeStorageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpgradeStorageResponse>, I>>(_: I): MsgUpgradeStorageResponse {
    const message = createBaseMsgUpgradeStorageResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  PostContract(request: DeepPartial<MsgPostContract>, metadata?: grpc.Metadata): Promise<MsgPostContractResponse>;
  Postproof(request: DeepPartial<MsgPostproof>, metadata?: grpc.Metadata): Promise<MsgPostproofResponse>;
  SignContract(request: DeepPartial<MsgSignContract>, metadata?: grpc.Metadata): Promise<MsgSignContractResponse>;
  SetProviderIP(request: DeepPartial<MsgSetProviderIP>, metadata?: grpc.Metadata): Promise<MsgSetProviderIPResponse>;
  SetProviderKeybase(
    request: DeepPartial<MsgSetProviderKeybase>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSetProviderKeybaseResponse>;
  SetProviderTotalspace(
    request: DeepPartial<MsgSetProviderTotalspace>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSetProviderTotalspaceResponse>;
  InitProvider(request: DeepPartial<MsgInitProvider>, metadata?: grpc.Metadata): Promise<MsgInitProviderResponse>;
  CancelContract(request: DeepPartial<MsgCancelContract>, metadata?: grpc.Metadata): Promise<MsgCancelContractResponse>;
  BuyStorage(request: DeepPartial<MsgBuyStorage>, metadata?: grpc.Metadata): Promise<MsgBuyStorageResponse>;
  ClaimStray(request: DeepPartial<MsgClaimStray>, metadata?: grpc.Metadata): Promise<MsgClaimStrayResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpgradeStorage(request: DeepPartial<MsgUpgradeStorage>, metadata?: grpc.Metadata): Promise<MsgUpgradeStorageResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PostContract = this.PostContract.bind(this);
    this.Postproof = this.Postproof.bind(this);
    this.SignContract = this.SignContract.bind(this);
    this.SetProviderIP = this.SetProviderIP.bind(this);
    this.SetProviderKeybase = this.SetProviderKeybase.bind(this);
    this.SetProviderTotalspace = this.SetProviderTotalspace.bind(this);
    this.InitProvider = this.InitProvider.bind(this);
    this.CancelContract = this.CancelContract.bind(this);
    this.BuyStorage = this.BuyStorage.bind(this);
    this.ClaimStray = this.ClaimStray.bind(this);
    this.UpgradeStorage = this.UpgradeStorage.bind(this);
  }

  PostContract(request: DeepPartial<MsgPostContract>, metadata?: grpc.Metadata): Promise<MsgPostContractResponse> {
    return this.rpc.unary(MsgPostContractDesc, MsgPostContract.fromPartial(request), metadata);
  }

  Postproof(request: DeepPartial<MsgPostproof>, metadata?: grpc.Metadata): Promise<MsgPostproofResponse> {
    return this.rpc.unary(MsgPostproofDesc, MsgPostproof.fromPartial(request), metadata);
  }

  SignContract(request: DeepPartial<MsgSignContract>, metadata?: grpc.Metadata): Promise<MsgSignContractResponse> {
    return this.rpc.unary(MsgSignContractDesc, MsgSignContract.fromPartial(request), metadata);
  }

  SetProviderIP(request: DeepPartial<MsgSetProviderIP>, metadata?: grpc.Metadata): Promise<MsgSetProviderIPResponse> {
    return this.rpc.unary(MsgSetProviderIPDesc, MsgSetProviderIP.fromPartial(request), metadata);
  }

  SetProviderKeybase(
    request: DeepPartial<MsgSetProviderKeybase>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSetProviderKeybaseResponse> {
    return this.rpc.unary(MsgSetProviderKeybaseDesc, MsgSetProviderKeybase.fromPartial(request), metadata);
  }

  SetProviderTotalspace(
    request: DeepPartial<MsgSetProviderTotalspace>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSetProviderTotalspaceResponse> {
    return this.rpc.unary(MsgSetProviderTotalspaceDesc, MsgSetProviderTotalspace.fromPartial(request), metadata);
  }

  InitProvider(request: DeepPartial<MsgInitProvider>, metadata?: grpc.Metadata): Promise<MsgInitProviderResponse> {
    return this.rpc.unary(MsgInitProviderDesc, MsgInitProvider.fromPartial(request), metadata);
  }

  CancelContract(
    request: DeepPartial<MsgCancelContract>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCancelContractResponse> {
    return this.rpc.unary(MsgCancelContractDesc, MsgCancelContract.fromPartial(request), metadata);
  }

  BuyStorage(request: DeepPartial<MsgBuyStorage>, metadata?: grpc.Metadata): Promise<MsgBuyStorageResponse> {
    return this.rpc.unary(MsgBuyStorageDesc, MsgBuyStorage.fromPartial(request), metadata);
  }

  ClaimStray(request: DeepPartial<MsgClaimStray>, metadata?: grpc.Metadata): Promise<MsgClaimStrayResponse> {
    return this.rpc.unary(MsgClaimStrayDesc, MsgClaimStray.fromPartial(request), metadata);
  }

  UpgradeStorage(
    request: DeepPartial<MsgUpgradeStorage>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpgradeStorageResponse> {
    return this.rpc.unary(MsgUpgradeStorageDesc, MsgUpgradeStorage.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "canine_chain.storage.Msg" };

export const MsgPostContractDesc: UnaryMethodDefinitionish = {
  methodName: "PostContract",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgPostContract.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgPostContractResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgPostproofDesc: UnaryMethodDefinitionish = {
  methodName: "Postproof",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgPostproof.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgPostproofResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSignContractDesc: UnaryMethodDefinitionish = {
  methodName: "SignContract",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSignContract.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSignContractResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSetProviderIPDesc: UnaryMethodDefinitionish = {
  methodName: "SetProviderIP",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetProviderIP.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetProviderIPResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSetProviderKeybaseDesc: UnaryMethodDefinitionish = {
  methodName: "SetProviderKeybase",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetProviderKeybase.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetProviderKeybaseResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSetProviderTotalspaceDesc: UnaryMethodDefinitionish = {
  methodName: "SetProviderTotalspace",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetProviderTotalspace.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetProviderTotalspaceResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgInitProviderDesc: UnaryMethodDefinitionish = {
  methodName: "InitProvider",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgInitProvider.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgInitProviderResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgCancelContractDesc: UnaryMethodDefinitionish = {
  methodName: "CancelContract",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCancelContract.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCancelContractResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgBuyStorageDesc: UnaryMethodDefinitionish = {
  methodName: "BuyStorage",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgBuyStorage.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBuyStorageResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgClaimStrayDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimStray",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgClaimStray.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgClaimStrayResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpgradeStorageDesc: UnaryMethodDefinitionish = {
  methodName: "UpgradeStorage",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpgradeStorage.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpgradeStorageResponse.decode(data),
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
