/* eslint-disable */
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
  fileOwner: string;
}

export interface MsgAddViewersResponse {
}

export interface MsgPostKey {
  creator: string;
  key: string;
}

export interface MsgPostKeyResponse {
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
  fileOwner: string;
}

export interface MsgRemoveViewersResponse {
}

export interface MsgProvisionFileTree {
  creator: string;
  editors: string;
  viewers: string;
  trackingNumber: string;
}

export interface MsgProvisionFileTreeResponse {
}

export interface MsgAddEditors {
  creator: string;
  editorIds: string;
  editorKeys: string;
  address: string;
  fileOwner: string;
}

export interface MsgAddEditorsResponse {
}

export interface MsgRemoveEditors {
  creator: string;
  editorIds: string;
  address: string;
  fileOwner: string;
}

export interface MsgRemoveEditorsResponse {
}

export interface MsgResetEditors {
  creator: string;
  address: string;
  fileOwner: string;
}

export interface MsgResetEditorsResponse {
}

export interface MsgResetViewers {
  creator: string;
  address: string;
  fileOwner: string;
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

          message.account = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hashParent = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.hashChild = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.contents = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.viewers = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.editors = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.trackingNumber = reader.string();
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
      account: isSet(object.account) ? gt.String(object.account) : "",
      hashParent: isSet(object.hashParent) ? gt.String(object.hashParent) : "",
      hashChild: isSet(object.hashChild) ? gt.String(object.hashChild) : "",
      contents: isSet(object.contents) ? gt.String(object.contents) : "",
      viewers: isSet(object.viewers) ? gt.String(object.viewers) : "",
      editors: isSet(object.editors) ? gt.String(object.editors) : "",
      trackingNumber: isSet(object.trackingNumber) ? gt.String(object.trackingNumber) : "",
    };
  },

  toJSON(message: MsgPostFile): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.account !== "") {
      obj.account = message.account;
    }
    if (message.hashParent !== "") {
      obj.hashParent = message.hashParent;
    }
    if (message.hashChild !== "") {
      obj.hashChild = message.hashChild;
    }
    if (message.contents !== "") {
      obj.contents = message.contents;
    }
    if (message.viewers !== "") {
      obj.viewers = message.viewers;
    }
    if (message.editors !== "") {
      obj.editors = message.editors;
    }
    if (message.trackingNumber !== "") {
      obj.trackingNumber = message.trackingNumber;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPostFile>, I>>(base?: I): MsgPostFile {
    return MsgPostFile.fromPartial(base ?? ({} as any));
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

          message.path = reader.string();
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
    return { path: isSet(object.path) ? gt.String(object.path) : "" };
  },

  toJSON(message: MsgPostFileResponse): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPostFileResponse>, I>>(base?: I): MsgPostFileResponse {
    return MsgPostFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPostFileResponse>, I>>(object: I): MsgPostFileResponse {
    const message = createBaseMsgPostFileResponse();
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseMsgAddViewers(): MsgAddViewers {
  return { creator: "", viewerIds: "", viewerKeys: "", address: "", fileOwner: "" };
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
    if (message.fileOwner !== "") {
      writer.uint32(42).string(message.fileOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddViewers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddViewers();
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

          message.viewerIds = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.viewerKeys = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.address = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.fileOwner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddViewers {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      viewerIds: isSet(object.viewerIds) ? gt.String(object.viewerIds) : "",
      viewerKeys: isSet(object.viewerKeys) ? gt.String(object.viewerKeys) : "",
      address: isSet(object.address) ? gt.String(object.address) : "",
      fileOwner: isSet(object.fileOwner) ? gt.String(object.fileOwner) : "",
    };
  },

  toJSON(message: MsgAddViewers): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.viewerIds !== "") {
      obj.viewerIds = message.viewerIds;
    }
    if (message.viewerKeys !== "") {
      obj.viewerKeys = message.viewerKeys;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.fileOwner !== "") {
      obj.fileOwner = message.fileOwner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddViewers>, I>>(base?: I): MsgAddViewers {
    return MsgAddViewers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddViewers>, I>>(object: I): MsgAddViewers {
    const message = createBaseMsgAddViewers();
    message.creator = object.creator ?? "";
    message.viewerIds = object.viewerIds ?? "";
    message.viewerKeys = object.viewerKeys ?? "";
    message.address = object.address ?? "";
    message.fileOwner = object.fileOwner ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddViewersResponse();
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

  fromJSON(_: any): MsgAddViewersResponse {
    return {};
  },

  toJSON(_: MsgAddViewersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddViewersResponse>, I>>(base?: I): MsgAddViewersResponse {
    return MsgAddViewersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddViewersResponse>, I>>(_: I): MsgAddViewersResponse {
    const message = createBaseMsgAddViewersResponse();
    return message;
  },
};

function createBaseMsgPostKey(): MsgPostKey {
  return { creator: "", key: "" };
}

export const MsgPostKey = {
  encode(message: MsgPostKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostKey();
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

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPostKey {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      key: isSet(object.key) ? gt.String(object.key) : "",
    };
  },

  toJSON(message: MsgPostKey): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPostKey>, I>>(base?: I): MsgPostKey {
    return MsgPostKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPostKey>, I>>(object: I): MsgPostKey {
    const message = createBaseMsgPostKey();
    message.creator = object.creator ?? "";
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseMsgPostKeyResponse(): MsgPostKeyResponse {
  return {};
}

export const MsgPostKeyResponse = {
  encode(_: MsgPostKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostKeyResponse();
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

  fromJSON(_: any): MsgPostKeyResponse {
    return {};
  },

  toJSON(_: MsgPostKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPostKeyResponse>, I>>(base?: I): MsgPostKeyResponse {
    return MsgPostKeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPostKeyResponse>, I>>(_: I): MsgPostKeyResponse {
    const message = createBaseMsgPostKeyResponse();
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

          message.hashPath = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.account = reader.string();
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
      hashPath: isSet(object.hashPath) ? gt.String(object.hashPath) : "",
      account: isSet(object.account) ? gt.String(object.account) : "",
    };
  },

  toJSON(message: MsgDeleteFile): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.hashPath !== "") {
      obj.hashPath = message.hashPath;
    }
    if (message.account !== "") {
      obj.account = message.account;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteFile>, I>>(base?: I): MsgDeleteFile {
    return MsgDeleteFile.fromPartial(base ?? ({} as any));
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

function createBaseMsgRemoveViewers(): MsgRemoveViewers {
  return { creator: "", viewerIds: "", address: "", fileOwner: "" };
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
    if (message.fileOwner !== "") {
      writer.uint32(34).string(message.fileOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveViewers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveViewers();
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

          message.viewerIds = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.address = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fileOwner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveViewers {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      viewerIds: isSet(object.viewerIds) ? gt.String(object.viewerIds) : "",
      address: isSet(object.address) ? gt.String(object.address) : "",
      fileOwner: isSet(object.fileOwner) ? gt.String(object.fileOwner) : "",
    };
  },

  toJSON(message: MsgRemoveViewers): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.viewerIds !== "") {
      obj.viewerIds = message.viewerIds;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.fileOwner !== "") {
      obj.fileOwner = message.fileOwner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRemoveViewers>, I>>(base?: I): MsgRemoveViewers {
    return MsgRemoveViewers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveViewers>, I>>(object: I): MsgRemoveViewers {
    const message = createBaseMsgRemoveViewers();
    message.creator = object.creator ?? "";
    message.viewerIds = object.viewerIds ?? "";
    message.address = object.address ?? "";
    message.fileOwner = object.fileOwner ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveViewersResponse();
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

  fromJSON(_: any): MsgRemoveViewersResponse {
    return {};
  },

  toJSON(_: MsgRemoveViewersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRemoveViewersResponse>, I>>(base?: I): MsgRemoveViewersResponse {
    return MsgRemoveViewersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveViewersResponse>, I>>(_: I): MsgRemoveViewersResponse {
    const message = createBaseMsgRemoveViewersResponse();
    return message;
  },
};

function createBaseMsgProvisionFileTree(): MsgProvisionFileTree {
  return { creator: "", editors: "", viewers: "", trackingNumber: "" };
}

export const MsgProvisionFileTree = {
  encode(message: MsgProvisionFileTree, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.editors !== "") {
      writer.uint32(18).string(message.editors);
    }
    if (message.viewers !== "") {
      writer.uint32(26).string(message.viewers);
    }
    if (message.trackingNumber !== "") {
      writer.uint32(34).string(message.trackingNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProvisionFileTree {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProvisionFileTree();
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

          message.editors = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.viewers = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.trackingNumber = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgProvisionFileTree {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      editors: isSet(object.editors) ? gt.String(object.editors) : "",
      viewers: isSet(object.viewers) ? gt.String(object.viewers) : "",
      trackingNumber: isSet(object.trackingNumber) ? gt.String(object.trackingNumber) : "",
    };
  },

  toJSON(message: MsgProvisionFileTree): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.editors !== "") {
      obj.editors = message.editors;
    }
    if (message.viewers !== "") {
      obj.viewers = message.viewers;
    }
    if (message.trackingNumber !== "") {
      obj.trackingNumber = message.trackingNumber;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgProvisionFileTree>, I>>(base?: I): MsgProvisionFileTree {
    return MsgProvisionFileTree.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgProvisionFileTree>, I>>(object: I): MsgProvisionFileTree {
    const message = createBaseMsgProvisionFileTree();
    message.creator = object.creator ?? "";
    message.editors = object.editors ?? "";
    message.viewers = object.viewers ?? "";
    message.trackingNumber = object.trackingNumber ?? "";
    return message;
  },
};

function createBaseMsgProvisionFileTreeResponse(): MsgProvisionFileTreeResponse {
  return {};
}

export const MsgProvisionFileTreeResponse = {
  encode(_: MsgProvisionFileTreeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProvisionFileTreeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProvisionFileTreeResponse();
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

  fromJSON(_: any): MsgProvisionFileTreeResponse {
    return {};
  },

  toJSON(_: MsgProvisionFileTreeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgProvisionFileTreeResponse>, I>>(base?: I): MsgProvisionFileTreeResponse {
    return MsgProvisionFileTreeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgProvisionFileTreeResponse>, I>>(_: I): MsgProvisionFileTreeResponse {
    const message = createBaseMsgProvisionFileTreeResponse();
    return message;
  },
};

function createBaseMsgAddEditors(): MsgAddEditors {
  return { creator: "", editorIds: "", editorKeys: "", address: "", fileOwner: "" };
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
    if (message.fileOwner !== "") {
      writer.uint32(42).string(message.fileOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddEditors {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddEditors();
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

          message.editorIds = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.editorKeys = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.address = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.fileOwner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddEditors {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      editorIds: isSet(object.editorIds) ? gt.String(object.editorIds) : "",
      editorKeys: isSet(object.editorKeys) ? gt.String(object.editorKeys) : "",
      address: isSet(object.address) ? gt.String(object.address) : "",
      fileOwner: isSet(object.fileOwner) ? gt.String(object.fileOwner) : "",
    };
  },

  toJSON(message: MsgAddEditors): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.editorIds !== "") {
      obj.editorIds = message.editorIds;
    }
    if (message.editorKeys !== "") {
      obj.editorKeys = message.editorKeys;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.fileOwner !== "") {
      obj.fileOwner = message.fileOwner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddEditors>, I>>(base?: I): MsgAddEditors {
    return MsgAddEditors.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddEditors>, I>>(object: I): MsgAddEditors {
    const message = createBaseMsgAddEditors();
    message.creator = object.creator ?? "";
    message.editorIds = object.editorIds ?? "";
    message.editorKeys = object.editorKeys ?? "";
    message.address = object.address ?? "";
    message.fileOwner = object.fileOwner ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddEditorsResponse();
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

  fromJSON(_: any): MsgAddEditorsResponse {
    return {};
  },

  toJSON(_: MsgAddEditorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddEditorsResponse>, I>>(base?: I): MsgAddEditorsResponse {
    return MsgAddEditorsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddEditorsResponse>, I>>(_: I): MsgAddEditorsResponse {
    const message = createBaseMsgAddEditorsResponse();
    return message;
  },
};

function createBaseMsgRemoveEditors(): MsgRemoveEditors {
  return { creator: "", editorIds: "", address: "", fileOwner: "" };
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
    if (message.fileOwner !== "") {
      writer.uint32(34).string(message.fileOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveEditors {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveEditors();
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

          message.editorIds = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.address = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fileOwner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveEditors {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      editorIds: isSet(object.editorIds) ? gt.String(object.editorIds) : "",
      address: isSet(object.address) ? gt.String(object.address) : "",
      fileOwner: isSet(object.fileOwner) ? gt.String(object.fileOwner) : "",
    };
  },

  toJSON(message: MsgRemoveEditors): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.editorIds !== "") {
      obj.editorIds = message.editorIds;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.fileOwner !== "") {
      obj.fileOwner = message.fileOwner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRemoveEditors>, I>>(base?: I): MsgRemoveEditors {
    return MsgRemoveEditors.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveEditors>, I>>(object: I): MsgRemoveEditors {
    const message = createBaseMsgRemoveEditors();
    message.creator = object.creator ?? "";
    message.editorIds = object.editorIds ?? "";
    message.address = object.address ?? "";
    message.fileOwner = object.fileOwner ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveEditorsResponse();
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

  fromJSON(_: any): MsgRemoveEditorsResponse {
    return {};
  },

  toJSON(_: MsgRemoveEditorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRemoveEditorsResponse>, I>>(base?: I): MsgRemoveEditorsResponse {
    return MsgRemoveEditorsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveEditorsResponse>, I>>(_: I): MsgRemoveEditorsResponse {
    const message = createBaseMsgRemoveEditorsResponse();
    return message;
  },
};

function createBaseMsgResetEditors(): MsgResetEditors {
  return { creator: "", address: "", fileOwner: "" };
}

export const MsgResetEditors = {
  encode(message: MsgResetEditors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.fileOwner !== "") {
      writer.uint32(26).string(message.fileOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetEditors {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetEditors();
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

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileOwner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgResetEditors {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      address: isSet(object.address) ? gt.String(object.address) : "",
      fileOwner: isSet(object.fileOwner) ? gt.String(object.fileOwner) : "",
    };
  },

  toJSON(message: MsgResetEditors): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.fileOwner !== "") {
      obj.fileOwner = message.fileOwner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgResetEditors>, I>>(base?: I): MsgResetEditors {
    return MsgResetEditors.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgResetEditors>, I>>(object: I): MsgResetEditors {
    const message = createBaseMsgResetEditors();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.fileOwner = object.fileOwner ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetEditorsResponse();
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

  fromJSON(_: any): MsgResetEditorsResponse {
    return {};
  },

  toJSON(_: MsgResetEditorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgResetEditorsResponse>, I>>(base?: I): MsgResetEditorsResponse {
    return MsgResetEditorsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgResetEditorsResponse>, I>>(_: I): MsgResetEditorsResponse {
    const message = createBaseMsgResetEditorsResponse();
    return message;
  },
};

function createBaseMsgResetViewers(): MsgResetViewers {
  return { creator: "", address: "", fileOwner: "" };
}

export const MsgResetViewers = {
  encode(message: MsgResetViewers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.fileOwner !== "") {
      writer.uint32(26).string(message.fileOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetViewers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetViewers();
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

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileOwner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgResetViewers {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      address: isSet(object.address) ? gt.String(object.address) : "",
      fileOwner: isSet(object.fileOwner) ? gt.String(object.fileOwner) : "",
    };
  },

  toJSON(message: MsgResetViewers): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.fileOwner !== "") {
      obj.fileOwner = message.fileOwner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgResetViewers>, I>>(base?: I): MsgResetViewers {
    return MsgResetViewers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgResetViewers>, I>>(object: I): MsgResetViewers {
    const message = createBaseMsgResetViewers();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.fileOwner = object.fileOwner ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetViewersResponse();
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

  fromJSON(_: any): MsgResetViewersResponse {
    return {};
  },

  toJSON(_: MsgResetViewersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgResetViewersResponse>, I>>(base?: I): MsgResetViewersResponse {
    return MsgResetViewersResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeOwner();
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

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileOwner = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.newOwner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChangeOwner {
    return {
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      address: isSet(object.address) ? gt.String(object.address) : "",
      fileOwner: isSet(object.fileOwner) ? gt.String(object.fileOwner) : "",
      newOwner: isSet(object.newOwner) ? gt.String(object.newOwner) : "",
    };
  },

  toJSON(message: MsgChangeOwner): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.fileOwner !== "") {
      obj.fileOwner = message.fileOwner;
    }
    if (message.newOwner !== "") {
      obj.newOwner = message.newOwner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgChangeOwner>, I>>(base?: I): MsgChangeOwner {
    return MsgChangeOwner.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeOwnerResponse();
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

  fromJSON(_: any): MsgChangeOwnerResponse {
    return {};
  },

  toJSON(_: MsgChangeOwnerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgChangeOwnerResponse>, I>>(base?: I): MsgChangeOwnerResponse {
    return MsgChangeOwnerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgChangeOwnerResponse>, I>>(_: I): MsgChangeOwnerResponse {
    const message = createBaseMsgChangeOwnerResponse();
    return message;
  },
};

export interface Msg {
  PostFile(request: MsgPostFile): Promise<MsgPostFileResponse>;
  AddViewers(request: MsgAddViewers): Promise<MsgAddViewersResponse>;
  PostKey(request: MsgPostKey): Promise<MsgPostKeyResponse>;
  DeleteFile(request: MsgDeleteFile): Promise<MsgDeleteFileResponse>;
  RemoveViewers(request: MsgRemoveViewers): Promise<MsgRemoveViewersResponse>;
  ProvisionFileTree(request: MsgProvisionFileTree): Promise<MsgProvisionFileTreeResponse>;
  AddEditors(request: MsgAddEditors): Promise<MsgAddEditorsResponse>;
  RemoveEditors(request: MsgRemoveEditors): Promise<MsgRemoveEditorsResponse>;
  ResetEditors(request: MsgResetEditors): Promise<MsgResetEditorsResponse>;
  ResetViewers(request: MsgResetViewers): Promise<MsgResetViewersResponse>;
  ChangeOwner(request: MsgChangeOwner): Promise<MsgChangeOwnerResponse>;
}

export const MsgServiceName = "canine_chain.filetree.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.PostFile = this.PostFile.bind(this);
    this.AddViewers = this.AddViewers.bind(this);
    this.PostKey = this.PostKey.bind(this);
    this.DeleteFile = this.DeleteFile.bind(this);
    this.RemoveViewers = this.RemoveViewers.bind(this);
    this.ProvisionFileTree = this.ProvisionFileTree.bind(this);
    this.AddEditors = this.AddEditors.bind(this);
    this.RemoveEditors = this.RemoveEditors.bind(this);
    this.ResetEditors = this.ResetEditors.bind(this);
    this.ResetViewers = this.ResetViewers.bind(this);
    this.ChangeOwner = this.ChangeOwner.bind(this);
  }
  PostFile(request: MsgPostFile): Promise<MsgPostFileResponse> {
    const data = MsgPostFile.encode(request).finish();
    const promise = this.rpc.request(this.service, "PostFile", data);
    return promise.then((data) => MsgPostFileResponse.decode(_m0.Reader.create(data)));
  }

  AddViewers(request: MsgAddViewers): Promise<MsgAddViewersResponse> {
    const data = MsgAddViewers.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddViewers", data);
    return promise.then((data) => MsgAddViewersResponse.decode(_m0.Reader.create(data)));
  }

  PostKey(request: MsgPostKey): Promise<MsgPostKeyResponse> {
    const data = MsgPostKey.encode(request).finish();
    const promise = this.rpc.request(this.service, "PostKey", data);
    return promise.then((data) => MsgPostKeyResponse.decode(_m0.Reader.create(data)));
  }

  DeleteFile(request: MsgDeleteFile): Promise<MsgDeleteFileResponse> {
    const data = MsgDeleteFile.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteFile", data);
    return promise.then((data) => MsgDeleteFileResponse.decode(_m0.Reader.create(data)));
  }

  RemoveViewers(request: MsgRemoveViewers): Promise<MsgRemoveViewersResponse> {
    const data = MsgRemoveViewers.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveViewers", data);
    return promise.then((data) => MsgRemoveViewersResponse.decode(_m0.Reader.create(data)));
  }

  ProvisionFileTree(request: MsgProvisionFileTree): Promise<MsgProvisionFileTreeResponse> {
    const data = MsgProvisionFileTree.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProvisionFileTree", data);
    return promise.then((data) => MsgProvisionFileTreeResponse.decode(_m0.Reader.create(data)));
  }

  AddEditors(request: MsgAddEditors): Promise<MsgAddEditorsResponse> {
    const data = MsgAddEditors.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddEditors", data);
    return promise.then((data) => MsgAddEditorsResponse.decode(_m0.Reader.create(data)));
  }

  RemoveEditors(request: MsgRemoveEditors): Promise<MsgRemoveEditorsResponse> {
    const data = MsgRemoveEditors.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveEditors", data);
    return promise.then((data) => MsgRemoveEditorsResponse.decode(_m0.Reader.create(data)));
  }

  ResetEditors(request: MsgResetEditors): Promise<MsgResetEditorsResponse> {
    const data = MsgResetEditors.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResetEditors", data);
    return promise.then((data) => MsgResetEditorsResponse.decode(_m0.Reader.create(data)));
  }

  ResetViewers(request: MsgResetViewers): Promise<MsgResetViewersResponse> {
    const data = MsgResetViewers.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResetViewers", data);
    return promise.then((data) => MsgResetViewersResponse.decode(_m0.Reader.create(data)));
  }

  ChangeOwner(request: MsgChangeOwner): Promise<MsgChangeOwnerResponse> {
    const data = MsgChangeOwner.encode(request).finish();
    const promise = this.rpc.request(this.service, "ChangeOwner", data);
    return promise.then((data) => MsgChangeOwnerResponse.decode(_m0.Reader.create(data)));
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
