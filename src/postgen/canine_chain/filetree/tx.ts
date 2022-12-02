/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.filetree";

export interface MsgPostFile {
  creator: string;
  account: string;
  hashParent: string;
  hashChild: string;
  contents: string;
  viewers: string;
  editors: string;
  trackingNumber: string;
}

export interface MsgPostFileResponse {
  path: string;
}

export interface MsgAddViewers {
  creator: string;
  viewerIds: string;
  viewerKeys: string;
  address: string;
  fileowner: string;
}

export interface MsgAddViewersResponse {
}

export interface MsgPostkey {
  creator: string;
  key: string;
}

export interface MsgPostkeyResponse {
}

export interface MsgDeleteFile {
  creator: string;
  hashPath: string;
  account: string;
}

export interface MsgDeleteFileResponse {
}

export interface MsgRemoveViewers {
  creator: string;
  viewerIds: string;
  address: string;
  fileowner: string;
}

export interface MsgRemoveViewersResponse {
}

export interface MsgMakeRoot {
  creator: string;
  account: string;
  rootHashPath: string;
  contents: string;
  editors: string;
  viewers: string;
  trackingNumber: string;
}

export interface MsgMakeRootResponse {
}

export interface MsgAddEditors {
  creator: string;
  editorIds: string;
  editorKeys: string;
  address: string;
  fileowner: string;
}

export interface MsgAddEditorsResponse {
}

export interface MsgRemoveEditors {
  creator: string;
  editorIds: string;
  address: string;
  fileowner: string;
}

export interface MsgRemoveEditorsResponse {
}

export interface MsgResetEditors {
  creator: string;
  address: string;
  fileowner: string;
}

export interface MsgResetEditorsResponse {
}

export interface MsgResetViewers {
  creator: string;
  address: string;
  fileowner: string;
}

export interface MsgResetViewersResponse {
}

export interface MsgChangeOwner {
  creator: string;
  address: string;
  fileOwner: string;
  newOwner: string;
}

export interface MsgChangeOwnerResponse {
}

function createBaseMsgPostFile(): MsgPostFile {
  return {
    creator: "",
    account: "",
    hashParent: "",
    hashChild: "",
    contents: "",
    viewers: "",
    editors: "",
    trackingNumber: "",
  };
}

export const MsgPostFile = {
  encode(message: MsgPostFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.hashParent !== "") {
      writer.uint32(26).string(message.hashParent);
    }
    if (message.hashChild !== "") {
      writer.uint32(34).string(message.hashChild);
    }
    if (message.contents !== "") {
      writer.uint32(42).string(message.contents);
    }
    if (message.viewers !== "") {
      writer.uint32(50).string(message.viewers);
    }
    if (message.editors !== "") {
      writer.uint32(58).string(message.editors);
    }
    if (message.trackingNumber !== "") {
      writer.uint32(66).string(message.trackingNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.hashParent = reader.string();
          break;
        case 4:
          message.hashChild = reader.string();
          break;
        case 5:
          message.contents = reader.string();
          break;
        case 6:
          message.viewers = reader.string();
          break;
        case 7:
          message.editors = reader.string();
          break;
        case 8:
          message.trackingNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPostFile {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      account: isSet(object.account) ? String(object.account) : "",
      hashParent: isSet(object.hashParent) ? String(object.hashParent) : "",
      hashChild: isSet(object.hashChild) ? String(object.hashChild) : "",
      contents: isSet(object.contents) ? String(object.contents) : "",
      viewers: isSet(object.viewers) ? String(object.viewers) : "",
      editors: isSet(object.editors) ? String(object.editors) : "",
      trackingNumber: isSet(object.trackingNumber) ? String(object.trackingNumber) : "",
    };
  },

  toJSON(message: MsgPostFile): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    message.hashParent !== undefined && (obj.hashParent = message.hashParent);
    message.hashChild !== undefined && (obj.hashChild = message.hashChild);
    message.contents !== undefined && (obj.contents = message.contents);
    message.viewers !== undefined && (obj.viewers = message.viewers);
    message.editors !== undefined && (obj.editors = message.editors);
    message.trackingNumber !== undefined && (obj.trackingNumber = message.trackingNumber);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostFile>, I>>(object: I): MsgPostFile {
    const message = createBaseMsgPostFile();
    message.creator = object.creator ?? "";
    message.account = object.account ?? "";
    message.hashParent = object.hashParent ?? "";
    message.hashChild = object.hashChild ?? "";
    message.contents = object.contents ?? "";
    message.viewers = object.viewers ?? "";
    message.editors = object.editors ?? "";
    message.trackingNumber = object.trackingNumber ?? "";
    return message;
  },
};

function createBaseMsgPostFileResponse(): MsgPostFileResponse {
  return { path: "" };
}

export const MsgPostFileResponse = {
  encode(message: MsgPostFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPostFileResponse {
    return { path: isSet(object.path) ? String(object.path) : "" };
  },

  toJSON(message: MsgPostFileResponse): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostFileResponse>, I>>(object: I): MsgPostFileResponse {
    const message = createBaseMsgPostFileResponse();
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseMsgAddViewers(): MsgAddViewers {
  return { creator: "", viewerIds: "", viewerKeys: "", address: "", fileowner: "" };
}

export const MsgAddViewers = {
  encode(message: MsgAddViewers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.viewerIds !== "") {
      writer.uint32(18).string(message.viewerIds);
    }
    if (message.viewerKeys !== "") {
      writer.uint32(26).string(message.viewerKeys);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.fileowner !== "") {
      writer.uint32(42).string(message.fileowner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddViewers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddViewers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.viewerIds = reader.string();
          break;
        case 3:
          message.viewerKeys = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.fileowner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddViewers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      viewerIds: isSet(object.viewerIds) ? String(object.viewerIds) : "",
      viewerKeys: isSet(object.viewerKeys) ? String(object.viewerKeys) : "",
      address: isSet(object.address) ? String(object.address) : "",
      fileowner: isSet(object.fileowner) ? String(object.fileowner) : "",
    };
  },

  toJSON(message: MsgAddViewers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.viewerIds !== undefined && (obj.viewerIds = message.viewerIds);
    message.viewerKeys !== undefined && (obj.viewerKeys = message.viewerKeys);
    message.address !== undefined && (obj.address = message.address);
    message.fileowner !== undefined && (obj.fileowner = message.fileowner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddViewers>, I>>(object: I): MsgAddViewers {
    const message = createBaseMsgAddViewers();
    message.creator = object.creator ?? "";
    message.viewerIds = object.viewerIds ?? "";
    message.viewerKeys = object.viewerKeys ?? "";
    message.address = object.address ?? "";
    message.fileowner = object.fileowner ?? "";
    return message;
  },
};

function createBaseMsgAddViewersResponse(): MsgAddViewersResponse {
  return {};
}

export const MsgAddViewersResponse = {
  encode(_: MsgAddViewersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddViewersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddViewersResponse();
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

  fromJSON(_: any): MsgAddViewersResponse {
    return {};
  },

  toJSON(_: MsgAddViewersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddViewersResponse>, I>>(_: I): MsgAddViewersResponse {
    const message = createBaseMsgAddViewersResponse();
    return message;
  },
};

function createBaseMsgPostkey(): MsgPostkey {
  return { creator: "", key: "" };
}

export const MsgPostkey = {
  encode(message: MsgPostkey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostkey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostkey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPostkey {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      key: isSet(object.key) ? String(object.key) : "",
    };
  },

  toJSON(message: MsgPostkey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostkey>, I>>(object: I): MsgPostkey {
    const message = createBaseMsgPostkey();
    message.creator = object.creator ?? "";
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseMsgPostkeyResponse(): MsgPostkeyResponse {
  return {};
}

export const MsgPostkeyResponse = {
  encode(_: MsgPostkeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostkeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostkeyResponse();
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

  fromJSON(_: any): MsgPostkeyResponse {
    return {};
  },

  toJSON(_: MsgPostkeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostkeyResponse>, I>>(_: I): MsgPostkeyResponse {
    const message = createBaseMsgPostkeyResponse();
    return message;
  },
};

function createBaseMsgDeleteFile(): MsgDeleteFile {
  return { creator: "", hashPath: "", account: "" };
}

export const MsgDeleteFile = {
  encode(message: MsgDeleteFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hashPath !== "") {
      writer.uint32(18).string(message.hashPath);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hashPath = reader.string();
          break;
        case 3:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteFile {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hashPath: isSet(object.hashPath) ? String(object.hashPath) : "",
      account: isSet(object.account) ? String(object.account) : "",
    };
  },

  toJSON(message: MsgDeleteFile): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hashPath !== undefined && (obj.hashPath = message.hashPath);
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteFile>, I>>(object: I): MsgDeleteFile {
    const message = createBaseMsgDeleteFile();
    message.creator = object.creator ?? "";
    message.hashPath = object.hashPath ?? "";
    message.account = object.account ?? "";
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteFileResponse();
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

  fromJSON(_: any): MsgDeleteFileResponse {
    return {};
  },

  toJSON(_: MsgDeleteFileResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteFileResponse>, I>>(_: I): MsgDeleteFileResponse {
    const message = createBaseMsgDeleteFileResponse();
    return message;
  },
};

function createBaseMsgRemoveViewers(): MsgRemoveViewers {
  return { creator: "", viewerIds: "", address: "", fileowner: "" };
}

export const MsgRemoveViewers = {
  encode(message: MsgRemoveViewers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.viewerIds !== "") {
      writer.uint32(18).string(message.viewerIds);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.fileowner !== "") {
      writer.uint32(34).string(message.fileowner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveViewers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveViewers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.viewerIds = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.fileowner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveViewers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      viewerIds: isSet(object.viewerIds) ? String(object.viewerIds) : "",
      address: isSet(object.address) ? String(object.address) : "",
      fileowner: isSet(object.fileowner) ? String(object.fileowner) : "",
    };
  },

  toJSON(message: MsgRemoveViewers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.viewerIds !== undefined && (obj.viewerIds = message.viewerIds);
    message.address !== undefined && (obj.address = message.address);
    message.fileowner !== undefined && (obj.fileowner = message.fileowner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveViewers>, I>>(object: I): MsgRemoveViewers {
    const message = createBaseMsgRemoveViewers();
    message.creator = object.creator ?? "";
    message.viewerIds = object.viewerIds ?? "";
    message.address = object.address ?? "";
    message.fileowner = object.fileowner ?? "";
    return message;
  },
};

function createBaseMsgRemoveViewersResponse(): MsgRemoveViewersResponse {
  return {};
}

export const MsgRemoveViewersResponse = {
  encode(_: MsgRemoveViewersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveViewersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveViewersResponse();
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

  fromJSON(_: any): MsgRemoveViewersResponse {
    return {};
  },

  toJSON(_: MsgRemoveViewersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveViewersResponse>, I>>(_: I): MsgRemoveViewersResponse {
    const message = createBaseMsgRemoveViewersResponse();
    return message;
  },
};

function createBaseMsgMakeRoot(): MsgMakeRoot {
  return { creator: "", account: "", rootHashPath: "", contents: "", editors: "", viewers: "", trackingNumber: "" };
}

export const MsgMakeRoot = {
  encode(message: MsgMakeRoot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.rootHashPath !== "") {
      writer.uint32(26).string(message.rootHashPath);
    }
    if (message.contents !== "") {
      writer.uint32(34).string(message.contents);
    }
    if (message.editors !== "") {
      writer.uint32(42).string(message.editors);
    }
    if (message.viewers !== "") {
      writer.uint32(50).string(message.viewers);
    }
    if (message.trackingNumber !== "") {
      writer.uint32(58).string(message.trackingNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMakeRoot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakeRoot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.rootHashPath = reader.string();
          break;
        case 4:
          message.contents = reader.string();
          break;
        case 5:
          message.editors = reader.string();
          break;
        case 6:
          message.viewers = reader.string();
          break;
        case 7:
          message.trackingNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMakeRoot {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      account: isSet(object.account) ? String(object.account) : "",
      rootHashPath: isSet(object.rootHashPath) ? String(object.rootHashPath) : "",
      contents: isSet(object.contents) ? String(object.contents) : "",
      editors: isSet(object.editors) ? String(object.editors) : "",
      viewers: isSet(object.viewers) ? String(object.viewers) : "",
      trackingNumber: isSet(object.trackingNumber) ? String(object.trackingNumber) : "",
    };
  },

  toJSON(message: MsgMakeRoot): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    message.rootHashPath !== undefined && (obj.rootHashPath = message.rootHashPath);
    message.contents !== undefined && (obj.contents = message.contents);
    message.editors !== undefined && (obj.editors = message.editors);
    message.viewers !== undefined && (obj.viewers = message.viewers);
    message.trackingNumber !== undefined && (obj.trackingNumber = message.trackingNumber);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMakeRoot>, I>>(object: I): MsgMakeRoot {
    const message = createBaseMsgMakeRoot();
    message.creator = object.creator ?? "";
    message.account = object.account ?? "";
    message.rootHashPath = object.rootHashPath ?? "";
    message.contents = object.contents ?? "";
    message.editors = object.editors ?? "";
    message.viewers = object.viewers ?? "";
    message.trackingNumber = object.trackingNumber ?? "";
    return message;
  },
};

function createBaseMsgMakeRootResponse(): MsgMakeRootResponse {
  return {};
}

export const MsgMakeRootResponse = {
  encode(_: MsgMakeRootResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMakeRootResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakeRootResponse();
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

  fromJSON(_: any): MsgMakeRootResponse {
    return {};
  },

  toJSON(_: MsgMakeRootResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMakeRootResponse>, I>>(_: I): MsgMakeRootResponse {
    const message = createBaseMsgMakeRootResponse();
    return message;
  },
};

function createBaseMsgAddEditors(): MsgAddEditors {
  return { creator: "", editorIds: "", editorKeys: "", address: "", fileowner: "" };
}

export const MsgAddEditors = {
  encode(message: MsgAddEditors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.editorIds !== "") {
      writer.uint32(18).string(message.editorIds);
    }
    if (message.editorKeys !== "") {
      writer.uint32(26).string(message.editorKeys);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.fileowner !== "") {
      writer.uint32(42).string(message.fileowner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddEditors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddEditors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.editorIds = reader.string();
          break;
        case 3:
          message.editorKeys = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.fileowner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddEditors {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      editorIds: isSet(object.editorIds) ? String(object.editorIds) : "",
      editorKeys: isSet(object.editorKeys) ? String(object.editorKeys) : "",
      address: isSet(object.address) ? String(object.address) : "",
      fileowner: isSet(object.fileowner) ? String(object.fileowner) : "",
    };
  },

  toJSON(message: MsgAddEditors): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.editorIds !== undefined && (obj.editorIds = message.editorIds);
    message.editorKeys !== undefined && (obj.editorKeys = message.editorKeys);
    message.address !== undefined && (obj.address = message.address);
    message.fileowner !== undefined && (obj.fileowner = message.fileowner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddEditors>, I>>(object: I): MsgAddEditors {
    const message = createBaseMsgAddEditors();
    message.creator = object.creator ?? "";
    message.editorIds = object.editorIds ?? "";
    message.editorKeys = object.editorKeys ?? "";
    message.address = object.address ?? "";
    message.fileowner = object.fileowner ?? "";
    return message;
  },
};

function createBaseMsgAddEditorsResponse(): MsgAddEditorsResponse {
  return {};
}

export const MsgAddEditorsResponse = {
  encode(_: MsgAddEditorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddEditorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddEditorsResponse();
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

  fromJSON(_: any): MsgAddEditorsResponse {
    return {};
  },

  toJSON(_: MsgAddEditorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddEditorsResponse>, I>>(_: I): MsgAddEditorsResponse {
    const message = createBaseMsgAddEditorsResponse();
    return message;
  },
};

function createBaseMsgRemoveEditors(): MsgRemoveEditors {
  return { creator: "", editorIds: "", address: "", fileowner: "" };
}

export const MsgRemoveEditors = {
  encode(message: MsgRemoveEditors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.editorIds !== "") {
      writer.uint32(18).string(message.editorIds);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.fileowner !== "") {
      writer.uint32(34).string(message.fileowner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveEditors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveEditors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.editorIds = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.fileowner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveEditors {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      editorIds: isSet(object.editorIds) ? String(object.editorIds) : "",
      address: isSet(object.address) ? String(object.address) : "",
      fileowner: isSet(object.fileowner) ? String(object.fileowner) : "",
    };
  },

  toJSON(message: MsgRemoveEditors): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.editorIds !== undefined && (obj.editorIds = message.editorIds);
    message.address !== undefined && (obj.address = message.address);
    message.fileowner !== undefined && (obj.fileowner = message.fileowner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveEditors>, I>>(object: I): MsgRemoveEditors {
    const message = createBaseMsgRemoveEditors();
    message.creator = object.creator ?? "";
    message.editorIds = object.editorIds ?? "";
    message.address = object.address ?? "";
    message.fileowner = object.fileowner ?? "";
    return message;
  },
};

function createBaseMsgRemoveEditorsResponse(): MsgRemoveEditorsResponse {
  return {};
}

export const MsgRemoveEditorsResponse = {
  encode(_: MsgRemoveEditorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveEditorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveEditorsResponse();
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

  fromJSON(_: any): MsgRemoveEditorsResponse {
    return {};
  },

  toJSON(_: MsgRemoveEditorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveEditorsResponse>, I>>(_: I): MsgRemoveEditorsResponse {
    const message = createBaseMsgRemoveEditorsResponse();
    return message;
  },
};

function createBaseMsgResetEditors(): MsgResetEditors {
  return { creator: "", address: "", fileowner: "" };
}

export const MsgResetEditors = {
  encode(message: MsgResetEditors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.fileowner !== "") {
      writer.uint32(26).string(message.fileowner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetEditors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetEditors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.fileowner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgResetEditors {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      fileowner: isSet(object.fileowner) ? String(object.fileowner) : "",
    };
  },

  toJSON(message: MsgResetEditors): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.fileowner !== undefined && (obj.fileowner = message.fileowner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgResetEditors>, I>>(object: I): MsgResetEditors {
    const message = createBaseMsgResetEditors();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.fileowner = object.fileowner ?? "";
    return message;
  },
};

function createBaseMsgResetEditorsResponse(): MsgResetEditorsResponse {
  return {};
}

export const MsgResetEditorsResponse = {
  encode(_: MsgResetEditorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetEditorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetEditorsResponse();
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

  fromJSON(_: any): MsgResetEditorsResponse {
    return {};
  },

  toJSON(_: MsgResetEditorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgResetEditorsResponse>, I>>(_: I): MsgResetEditorsResponse {
    const message = createBaseMsgResetEditorsResponse();
    return message;
  },
};

function createBaseMsgResetViewers(): MsgResetViewers {
  return { creator: "", address: "", fileowner: "" };
}

export const MsgResetViewers = {
  encode(message: MsgResetViewers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.fileowner !== "") {
      writer.uint32(26).string(message.fileowner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetViewers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetViewers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.fileowner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgResetViewers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      fileowner: isSet(object.fileowner) ? String(object.fileowner) : "",
    };
  },

  toJSON(message: MsgResetViewers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.fileowner !== undefined && (obj.fileowner = message.fileowner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgResetViewers>, I>>(object: I): MsgResetViewers {
    const message = createBaseMsgResetViewers();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.fileowner = object.fileowner ?? "";
    return message;
  },
};

function createBaseMsgResetViewersResponse(): MsgResetViewersResponse {
  return {};
}

export const MsgResetViewersResponse = {
  encode(_: MsgResetViewersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetViewersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetViewersResponse();
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

  fromJSON(_: any): MsgResetViewersResponse {
    return {};
  },

  toJSON(_: MsgResetViewersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgResetViewersResponse>, I>>(_: I): MsgResetViewersResponse {
    const message = createBaseMsgResetViewersResponse();
    return message;
  },
};

function createBaseMsgChangeOwner(): MsgChangeOwner {
  return { creator: "", address: "", fileOwner: "", newOwner: "" };
}

export const MsgChangeOwner = {
  encode(message: MsgChangeOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.fileOwner !== "") {
      writer.uint32(26).string(message.fileOwner);
    }
    if (message.newOwner !== "") {
      writer.uint32(34).string(message.newOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.fileOwner = reader.string();
          break;
        case 4:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChangeOwner {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      fileOwner: isSet(object.fileOwner) ? String(object.fileOwner) : "",
      newOwner: isSet(object.newOwner) ? String(object.newOwner) : "",
    };
  },

  toJSON(message: MsgChangeOwner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.fileOwner !== undefined && (obj.fileOwner = message.fileOwner);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeOwner>, I>>(object: I): MsgChangeOwner {
    const message = createBaseMsgChangeOwner();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.fileOwner = object.fileOwner ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
};

function createBaseMsgChangeOwnerResponse(): MsgChangeOwnerResponse {
  return {};
}

export const MsgChangeOwnerResponse = {
  encode(_: MsgChangeOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeOwnerResponse();
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

  fromJSON(_: any): MsgChangeOwnerResponse {
    return {};
  },

  toJSON(_: MsgChangeOwnerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeOwnerResponse>, I>>(_: I): MsgChangeOwnerResponse {
    const message = createBaseMsgChangeOwnerResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  PostFile(request: DeepPartial<MsgPostFile>, metadata?: grpc.Metadata): Promise<MsgPostFileResponse>;
  AddViewers(request: DeepPartial<MsgAddViewers>, metadata?: grpc.Metadata): Promise<MsgAddViewersResponse>;
  Postkey(request: DeepPartial<MsgPostkey>, metadata?: grpc.Metadata): Promise<MsgPostkeyResponse>;
  DeleteFile(request: DeepPartial<MsgDeleteFile>, metadata?: grpc.Metadata): Promise<MsgDeleteFileResponse>;
  RemoveViewers(request: DeepPartial<MsgRemoveViewers>, metadata?: grpc.Metadata): Promise<MsgRemoveViewersResponse>;
  MakeRoot(request: DeepPartial<MsgMakeRoot>, metadata?: grpc.Metadata): Promise<MsgMakeRootResponse>;
  AddEditors(request: DeepPartial<MsgAddEditors>, metadata?: grpc.Metadata): Promise<MsgAddEditorsResponse>;
  RemoveEditors(request: DeepPartial<MsgRemoveEditors>, metadata?: grpc.Metadata): Promise<MsgRemoveEditorsResponse>;
  ResetEditors(request: DeepPartial<MsgResetEditors>, metadata?: grpc.Metadata): Promise<MsgResetEditorsResponse>;
  ResetViewers(request: DeepPartial<MsgResetViewers>, metadata?: grpc.Metadata): Promise<MsgResetViewersResponse>;
  ChangeOwner(request: DeepPartial<MsgChangeOwner>, metadata?: grpc.Metadata): Promise<MsgChangeOwnerResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PostFile = this.PostFile.bind(this);
    this.AddViewers = this.AddViewers.bind(this);
    this.Postkey = this.Postkey.bind(this);
    this.DeleteFile = this.DeleteFile.bind(this);
    this.RemoveViewers = this.RemoveViewers.bind(this);
    this.MakeRoot = this.MakeRoot.bind(this);
    this.AddEditors = this.AddEditors.bind(this);
    this.RemoveEditors = this.RemoveEditors.bind(this);
    this.ResetEditors = this.ResetEditors.bind(this);
    this.ResetViewers = this.ResetViewers.bind(this);
    this.ChangeOwner = this.ChangeOwner.bind(this);
  }

  PostFile(request: DeepPartial<MsgPostFile>, metadata?: grpc.Metadata): Promise<MsgPostFileResponse> {
    return this.rpc.unary(MsgPostFileDesc, MsgPostFile.fromPartial(request), metadata);
  }

  AddViewers(request: DeepPartial<MsgAddViewers>, metadata?: grpc.Metadata): Promise<MsgAddViewersResponse> {
    return this.rpc.unary(MsgAddViewersDesc, MsgAddViewers.fromPartial(request), metadata);
  }

  Postkey(request: DeepPartial<MsgPostkey>, metadata?: grpc.Metadata): Promise<MsgPostkeyResponse> {
    return this.rpc.unary(MsgPostkeyDesc, MsgPostkey.fromPartial(request), metadata);
  }

  DeleteFile(request: DeepPartial<MsgDeleteFile>, metadata?: grpc.Metadata): Promise<MsgDeleteFileResponse> {
    return this.rpc.unary(MsgDeleteFileDesc, MsgDeleteFile.fromPartial(request), metadata);
  }

  RemoveViewers(request: DeepPartial<MsgRemoveViewers>, metadata?: grpc.Metadata): Promise<MsgRemoveViewersResponse> {
    return this.rpc.unary(MsgRemoveViewersDesc, MsgRemoveViewers.fromPartial(request), metadata);
  }

  MakeRoot(request: DeepPartial<MsgMakeRoot>, metadata?: grpc.Metadata): Promise<MsgMakeRootResponse> {
    return this.rpc.unary(MsgMakeRootDesc, MsgMakeRoot.fromPartial(request), metadata);
  }

  AddEditors(request: DeepPartial<MsgAddEditors>, metadata?: grpc.Metadata): Promise<MsgAddEditorsResponse> {
    return this.rpc.unary(MsgAddEditorsDesc, MsgAddEditors.fromPartial(request), metadata);
  }

  RemoveEditors(request: DeepPartial<MsgRemoveEditors>, metadata?: grpc.Metadata): Promise<MsgRemoveEditorsResponse> {
    return this.rpc.unary(MsgRemoveEditorsDesc, MsgRemoveEditors.fromPartial(request), metadata);
  }

  ResetEditors(request: DeepPartial<MsgResetEditors>, metadata?: grpc.Metadata): Promise<MsgResetEditorsResponse> {
    return this.rpc.unary(MsgResetEditorsDesc, MsgResetEditors.fromPartial(request), metadata);
  }

  ResetViewers(request: DeepPartial<MsgResetViewers>, metadata?: grpc.Metadata): Promise<MsgResetViewersResponse> {
    return this.rpc.unary(MsgResetViewersDesc, MsgResetViewers.fromPartial(request), metadata);
  }

  ChangeOwner(request: DeepPartial<MsgChangeOwner>, metadata?: grpc.Metadata): Promise<MsgChangeOwnerResponse> {
    return this.rpc.unary(MsgChangeOwnerDesc, MsgChangeOwner.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "canine_chain.filetree.Msg" };

export const MsgPostFileDesc: UnaryMethodDefinitionish = {
  methodName: "PostFile",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgPostFile.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgPostFileResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgAddViewersDesc: UnaryMethodDefinitionish = {
  methodName: "AddViewers",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAddViewers.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgAddViewersResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgPostkeyDesc: UnaryMethodDefinitionish = {
  methodName: "Postkey",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgPostkey.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgPostkeyResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgDeleteFileDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteFile",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDeleteFile.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDeleteFileResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgRemoveViewersDesc: UnaryMethodDefinitionish = {
  methodName: "RemoveViewers",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRemoveViewers.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRemoveViewersResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgMakeRootDesc: UnaryMethodDefinitionish = {
  methodName: "MakeRoot",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgMakeRoot.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgMakeRootResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgAddEditorsDesc: UnaryMethodDefinitionish = {
  methodName: "AddEditors",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAddEditors.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgAddEditorsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgRemoveEditorsDesc: UnaryMethodDefinitionish = {
  methodName: "RemoveEditors",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRemoveEditors.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRemoveEditorsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgResetEditorsDesc: UnaryMethodDefinitionish = {
  methodName: "ResetEditors",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgResetEditors.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgResetEditorsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgResetViewersDesc: UnaryMethodDefinitionish = {
  methodName: "ResetViewers",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgResetViewers.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgResetViewersResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgChangeOwnerDesc: UnaryMethodDefinitionish = {
  methodName: "ChangeOwner",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChangeOwner.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChangeOwnerResponse.decode(data),
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
