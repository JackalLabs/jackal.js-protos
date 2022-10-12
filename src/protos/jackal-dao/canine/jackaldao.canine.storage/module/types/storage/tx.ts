/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "jackaldao.canine.storage";

export interface MsgPostContract {
  creator: string;
  priceamt: string;
  pricedenom: string;
  merkle: string;
  signee: string;
  duration: string;
  filesize: string;
  fid: string;
}

export interface MsgPostContractResponse {}

export interface MsgCreateContracts {
  creator: string;
  cid: string;
  priceamt: string;
  pricedenom: string;
  chunks: string;
  merkle: string;
  signee: string;
  duration: string;
  filesize: string;
  fid: string;
}

export interface MsgCreateContractsResponse {}

export interface MsgUpdateContracts {
  creator: string;
  cid: string;
  chunks: string;
  merkle: string;
  signee: string;
  duration: string;
  filesize: string;
  fid: string;
}

export interface MsgUpdateContractsResponse {}

export interface MsgDeleteContracts {
  creator: string;
  cid: string;
}

export interface MsgDeleteContractsResponse {}

export interface MsgCreateProofs {
  creator: string;
  cid: string;
  item: string;
  hashes: string;
}

export interface MsgCreateProofsResponse {}

export interface MsgUpdateProofs {
  creator: string;
  cid: string;
  item: string;
  hashes: string;
}

export interface MsgUpdateProofsResponse {}

export interface MsgDeleteProofs {
  creator: string;
  cid: string;
}

export interface MsgDeleteProofsResponse {}

export interface MsgItem {
  creator: string;
  hashlist: string;
}

export interface MsgItemResponse {}

export interface MsgPostproof {
  creator: string;
  item: string;
  hashlist: string;
  cid: string;
}

export interface MsgPostproofResponse {
  merkle: string;
}

export interface MsgCreateActiveDeals {
  creator: string;
  cid: string;
  signee: string;
  provider: string;
  startblock: string;
  endblock: string;
  filesize: string;
  proofverified: string;
  proofsmissed: string;
  blocktoprove: string;
}

export interface MsgCreateActiveDealsResponse {}

export interface MsgUpdateActiveDeals {
  creator: string;
  cid: string;
  signee: string;
  provider: string;
  startblock: string;
  endblock: string;
  filesize: string;
  proofverified: string;
  proofsmissed: string;
  blocktoprove: string;
}

export interface MsgUpdateActiveDealsResponse {}

export interface MsgDeleteActiveDeals {
  creator: string;
  cid: string;
}

export interface MsgDeleteActiveDealsResponse {}

export interface MsgSignContract {
  creator: string;
  cid: string;
}

export interface MsgSignContractResponse {}

export interface MsgCreateProviders {
  creator: string;
  address: string;
  ip: string;
  totalspace: string;
}

export interface MsgCreateProvidersResponse {}

export interface MsgUpdateProviders {
  creator: string;
  address: string;
  ip: string;
  totalspace: string;
}

export interface MsgUpdateProvidersResponse {}

export interface MsgDeleteProviders {
  creator: string;
  address: string;
}

export interface MsgDeleteProvidersResponse {}

export interface MsgSetProviderIp {
  creator: string;
  ip: string;
}

export interface MsgSetProviderIpResponse {}

export interface MsgSetProviderTotalspace {
  creator: string;
  space: string;
}

export interface MsgSetProviderTotalspaceResponse {}

export interface MsgInitProvider {
  creator: string;
  ip: string;
  totalspace: string;
}

export interface MsgInitProviderResponse {}

export interface MsgCancelContract {
  creator: string;
  cid: string;
}

export interface MsgCancelContractResponse {}

export interface MsgBuyStorage {
  creator: string;
  forAddress: string;
  duration: string;
  bytes: string;
  paymentDenom: string;
}

export interface MsgBuyStorageResponse {}

const baseMsgPostContract: object = {
  creator: "",
  priceamt: "",
  pricedenom: "",
  merkle: "",
  signee: "",
  duration: "",
  filesize: "",
  fid: "",
};

export const MsgPostContract = {
  encode(message: MsgPostContract, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.priceamt !== "") {
      writer.uint32(18).string(message.priceamt);
    }
    if (message.pricedenom !== "") {
      writer.uint32(26).string(message.pricedenom);
    }
    if (message.merkle !== "") {
      writer.uint32(34).string(message.merkle);
    }
    if (message.signee !== "") {
      writer.uint32(42).string(message.signee);
    }
    if (message.duration !== "") {
      writer.uint32(50).string(message.duration);
    }
    if (message.filesize !== "") {
      writer.uint32(58).string(message.filesize);
    }
    if (message.fid !== "") {
      writer.uint32(66).string(message.fid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPostContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPostContract } as MsgPostContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.priceamt = reader.string();
          break;
        case 3:
          message.pricedenom = reader.string();
          break;
        case 4:
          message.merkle = reader.string();
          break;
        case 5:
          message.signee = reader.string();
          break;
        case 6:
          message.duration = reader.string();
          break;
        case 7:
          message.filesize = reader.string();
          break;
        case 8:
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
    const message = { ...baseMsgPostContract } as MsgPostContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.priceamt !== undefined && object.priceamt !== null) {
      message.priceamt = String(object.priceamt);
    } else {
      message.priceamt = "";
    }
    if (object.pricedenom !== undefined && object.pricedenom !== null) {
      message.pricedenom = String(object.pricedenom);
    } else {
      message.pricedenom = "";
    }
    if (object.merkle !== undefined && object.merkle !== null) {
      message.merkle = String(object.merkle);
    } else {
      message.merkle = "";
    }
    if (object.signee !== undefined && object.signee !== null) {
      message.signee = String(object.signee);
    } else {
      message.signee = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = String(object.duration);
    } else {
      message.duration = "";
    }
    if (object.filesize !== undefined && object.filesize !== null) {
      message.filesize = String(object.filesize);
    } else {
      message.filesize = "";
    }
    if (object.fid !== undefined && object.fid !== null) {
      message.fid = String(object.fid);
    } else {
      message.fid = "";
    }
    return message;
  },

  toJSON(message: MsgPostContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.priceamt !== undefined && (obj.priceamt = message.priceamt);
    message.pricedenom !== undefined && (obj.pricedenom = message.pricedenom);
    message.merkle !== undefined && (obj.merkle = message.merkle);
    message.signee !== undefined && (obj.signee = message.signee);
    message.duration !== undefined && (obj.duration = message.duration);
    message.filesize !== undefined && (obj.filesize = message.filesize);
    message.fid !== undefined && (obj.fid = message.fid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPostContract>): MsgPostContract {
    const message = { ...baseMsgPostContract } as MsgPostContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.priceamt !== undefined && object.priceamt !== null) {
      message.priceamt = object.priceamt;
    } else {
      message.priceamt = "";
    }
    if (object.pricedenom !== undefined && object.pricedenom !== null) {
      message.pricedenom = object.pricedenom;
    } else {
      message.pricedenom = "";
    }
    if (object.merkle !== undefined && object.merkle !== null) {
      message.merkle = object.merkle;
    } else {
      message.merkle = "";
    }
    if (object.signee !== undefined && object.signee !== null) {
      message.signee = object.signee;
    } else {
      message.signee = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = "";
    }
    if (object.filesize !== undefined && object.filesize !== null) {
      message.filesize = object.filesize;
    } else {
      message.filesize = "";
    }
    if (object.fid !== undefined && object.fid !== null) {
      message.fid = object.fid;
    } else {
      message.fid = "";
    }
    return message;
  },
};

const baseMsgPostContractResponse: object = {};

export const MsgPostContractResponse = {
  encode(_: MsgPostContractResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPostContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPostContractResponse,
    } as MsgPostContractResponse;
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
    const message = {
      ...baseMsgPostContractResponse,
    } as MsgPostContractResponse;
    return message;
  },

  toJSON(_: MsgPostContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgPostContractResponse>
  ): MsgPostContractResponse {
    const message = {
      ...baseMsgPostContractResponse,
    } as MsgPostContractResponse;
    return message;
  },
};

const baseMsgCreateContracts: object = {
  creator: "",
  cid: "",
  priceamt: "",
  pricedenom: "",
  chunks: "",
  merkle: "",
  signee: "",
  duration: "",
  filesize: "",
  fid: "",
};

export const MsgCreateContracts = {
  encode(
    message: MsgCreateContracts,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    if (message.priceamt !== "") {
      writer.uint32(26).string(message.priceamt);
    }
    if (message.pricedenom !== "") {
      writer.uint32(34).string(message.pricedenom);
    }
    if (message.chunks !== "") {
      writer.uint32(42).string(message.chunks);
    }
    if (message.merkle !== "") {
      writer.uint32(50).string(message.merkle);
    }
    if (message.signee !== "") {
      writer.uint32(58).string(message.signee);
    }
    if (message.duration !== "") {
      writer.uint32(66).string(message.duration);
    }
    if (message.filesize !== "") {
      writer.uint32(74).string(message.filesize);
    }
    if (message.fid !== "") {
      writer.uint32(82).string(message.fid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateContracts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateContracts } as MsgCreateContracts;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cid = reader.string();
          break;
        case 3:
          message.priceamt = reader.string();
          break;
        case 4:
          message.pricedenom = reader.string();
          break;
        case 5:
          message.chunks = reader.string();
          break;
        case 6:
          message.merkle = reader.string();
          break;
        case 7:
          message.signee = reader.string();
          break;
        case 8:
          message.duration = reader.string();
          break;
        case 9:
          message.filesize = reader.string();
          break;
        case 10:
          message.fid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateContracts {
    const message = { ...baseMsgCreateContracts } as MsgCreateContracts;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    if (object.priceamt !== undefined && object.priceamt !== null) {
      message.priceamt = String(object.priceamt);
    } else {
      message.priceamt = "";
    }
    if (object.pricedenom !== undefined && object.pricedenom !== null) {
      message.pricedenom = String(object.pricedenom);
    } else {
      message.pricedenom = "";
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = String(object.chunks);
    } else {
      message.chunks = "";
    }
    if (object.merkle !== undefined && object.merkle !== null) {
      message.merkle = String(object.merkle);
    } else {
      message.merkle = "";
    }
    if (object.signee !== undefined && object.signee !== null) {
      message.signee = String(object.signee);
    } else {
      message.signee = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = String(object.duration);
    } else {
      message.duration = "";
    }
    if (object.filesize !== undefined && object.filesize !== null) {
      message.filesize = String(object.filesize);
    } else {
      message.filesize = "";
    }
    if (object.fid !== undefined && object.fid !== null) {
      message.fid = String(object.fid);
    } else {
      message.fid = "";
    }
    return message;
  },

  toJSON(message: MsgCreateContracts): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    message.priceamt !== undefined && (obj.priceamt = message.priceamt);
    message.pricedenom !== undefined && (obj.pricedenom = message.pricedenom);
    message.chunks !== undefined && (obj.chunks = message.chunks);
    message.merkle !== undefined && (obj.merkle = message.merkle);
    message.signee !== undefined && (obj.signee = message.signee);
    message.duration !== undefined && (obj.duration = message.duration);
    message.filesize !== undefined && (obj.filesize = message.filesize);
    message.fid !== undefined && (obj.fid = message.fid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateContracts>): MsgCreateContracts {
    const message = { ...baseMsgCreateContracts } as MsgCreateContracts;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    if (object.priceamt !== undefined && object.priceamt !== null) {
      message.priceamt = object.priceamt;
    } else {
      message.priceamt = "";
    }
    if (object.pricedenom !== undefined && object.pricedenom !== null) {
      message.pricedenom = object.pricedenom;
    } else {
      message.pricedenom = "";
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = object.chunks;
    } else {
      message.chunks = "";
    }
    if (object.merkle !== undefined && object.merkle !== null) {
      message.merkle = object.merkle;
    } else {
      message.merkle = "";
    }
    if (object.signee !== undefined && object.signee !== null) {
      message.signee = object.signee;
    } else {
      message.signee = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = "";
    }
    if (object.filesize !== undefined && object.filesize !== null) {
      message.filesize = object.filesize;
    } else {
      message.filesize = "";
    }
    if (object.fid !== undefined && object.fid !== null) {
      message.fid = object.fid;
    } else {
      message.fid = "";
    }
    return message;
  },
};

const baseMsgCreateContractsResponse: object = {};

export const MsgCreateContractsResponse = {
  encode(
    _: MsgCreateContractsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateContractsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateContractsResponse,
    } as MsgCreateContractsResponse;
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

  fromJSON(_: any): MsgCreateContractsResponse {
    const message = {
      ...baseMsgCreateContractsResponse,
    } as MsgCreateContractsResponse;
    return message;
  },

  toJSON(_: MsgCreateContractsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateContractsResponse>
  ): MsgCreateContractsResponse {
    const message = {
      ...baseMsgCreateContractsResponse,
    } as MsgCreateContractsResponse;
    return message;
  },
};

const baseMsgUpdateContracts: object = {
  creator: "",
  cid: "",
  chunks: "",
  merkle: "",
  signee: "",
  duration: "",
  filesize: "",
  fid: "",
};

export const MsgUpdateContracts = {
  encode(
    message: MsgUpdateContracts,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    if (message.chunks !== "") {
      writer.uint32(42).string(message.chunks);
    }
    if (message.merkle !== "") {
      writer.uint32(50).string(message.merkle);
    }
    if (message.signee !== "") {
      writer.uint32(58).string(message.signee);
    }
    if (message.duration !== "") {
      writer.uint32(66).string(message.duration);
    }
    if (message.filesize !== "") {
      writer.uint32(34).string(message.filesize);
    }
    if (message.fid !== "") {
      writer.uint32(26).string(message.fid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateContracts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateContracts } as MsgUpdateContracts;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cid = reader.string();
          break;
        case 5:
          message.chunks = reader.string();
          break;
        case 6:
          message.merkle = reader.string();
          break;
        case 7:
          message.signee = reader.string();
          break;
        case 8:
          message.duration = reader.string();
          break;
        case 4:
          message.filesize = reader.string();
          break;
        case 3:
          message.fid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateContracts {
    const message = { ...baseMsgUpdateContracts } as MsgUpdateContracts;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = String(object.chunks);
    } else {
      message.chunks = "";
    }
    if (object.merkle !== undefined && object.merkle !== null) {
      message.merkle = String(object.merkle);
    } else {
      message.merkle = "";
    }
    if (object.signee !== undefined && object.signee !== null) {
      message.signee = String(object.signee);
    } else {
      message.signee = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = String(object.duration);
    } else {
      message.duration = "";
    }
    if (object.filesize !== undefined && object.filesize !== null) {
      message.filesize = String(object.filesize);
    } else {
      message.filesize = "";
    }
    if (object.fid !== undefined && object.fid !== null) {
      message.fid = String(object.fid);
    } else {
      message.fid = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateContracts): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    message.chunks !== undefined && (obj.chunks = message.chunks);
    message.merkle !== undefined && (obj.merkle = message.merkle);
    message.signee !== undefined && (obj.signee = message.signee);
    message.duration !== undefined && (obj.duration = message.duration);
    message.filesize !== undefined && (obj.filesize = message.filesize);
    message.fid !== undefined && (obj.fid = message.fid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateContracts>): MsgUpdateContracts {
    const message = { ...baseMsgUpdateContracts } as MsgUpdateContracts;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = object.chunks;
    } else {
      message.chunks = "";
    }
    if (object.merkle !== undefined && object.merkle !== null) {
      message.merkle = object.merkle;
    } else {
      message.merkle = "";
    }
    if (object.signee !== undefined && object.signee !== null) {
      message.signee = object.signee;
    } else {
      message.signee = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = "";
    }
    if (object.filesize !== undefined && object.filesize !== null) {
      message.filesize = object.filesize;
    } else {
      message.filesize = "";
    }
    if (object.fid !== undefined && object.fid !== null) {
      message.fid = object.fid;
    } else {
      message.fid = "";
    }
    return message;
  },
};

const baseMsgUpdateContractsResponse: object = {};

export const MsgUpdateContractsResponse = {
  encode(
    _: MsgUpdateContractsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateContractsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateContractsResponse,
    } as MsgUpdateContractsResponse;
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

  fromJSON(_: any): MsgUpdateContractsResponse {
    const message = {
      ...baseMsgUpdateContractsResponse,
    } as MsgUpdateContractsResponse;
    return message;
  },

  toJSON(_: MsgUpdateContractsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateContractsResponse>
  ): MsgUpdateContractsResponse {
    const message = {
      ...baseMsgUpdateContractsResponse,
    } as MsgUpdateContractsResponse;
    return message;
  },
};

const baseMsgDeleteContracts: object = { creator: "", cid: "" };

export const MsgDeleteContracts = {
  encode(
    message: MsgDeleteContracts,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteContracts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteContracts } as MsgDeleteContracts;
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

  fromJSON(object: any): MsgDeleteContracts {
    const message = { ...baseMsgDeleteContracts } as MsgDeleteContracts;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteContracts): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteContracts>): MsgDeleteContracts {
    const message = { ...baseMsgDeleteContracts } as MsgDeleteContracts;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    return message;
  },
};

const baseMsgDeleteContractsResponse: object = {};

export const MsgDeleteContractsResponse = {
  encode(
    _: MsgDeleteContractsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteContractsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteContractsResponse,
    } as MsgDeleteContractsResponse;
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

  fromJSON(_: any): MsgDeleteContractsResponse {
    const message = {
      ...baseMsgDeleteContractsResponse,
    } as MsgDeleteContractsResponse;
    return message;
  },

  toJSON(_: MsgDeleteContractsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteContractsResponse>
  ): MsgDeleteContractsResponse {
    const message = {
      ...baseMsgDeleteContractsResponse,
    } as MsgDeleteContractsResponse;
    return message;
  },
};

const baseMsgCreateProofs: object = {
  creator: "",
  cid: "",
  item: "",
  hashes: "",
};

export const MsgCreateProofs = {
  encode(message: MsgCreateProofs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    if (message.item !== "") {
      writer.uint32(26).string(message.item);
    }
    if (message.hashes !== "") {
      writer.uint32(34).string(message.hashes);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProofs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateProofs } as MsgCreateProofs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cid = reader.string();
          break;
        case 3:
          message.item = reader.string();
          break;
        case 4:
          message.hashes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProofs {
    const message = { ...baseMsgCreateProofs } as MsgCreateProofs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    if (object.item !== undefined && object.item !== null) {
      message.item = String(object.item);
    } else {
      message.item = "";
    }
    if (object.hashes !== undefined && object.hashes !== null) {
      message.hashes = String(object.hashes);
    } else {
      message.hashes = "";
    }
    return message;
  },

  toJSON(message: MsgCreateProofs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    message.item !== undefined && (obj.item = message.item);
    message.hashes !== undefined && (obj.hashes = message.hashes);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProofs>): MsgCreateProofs {
    const message = { ...baseMsgCreateProofs } as MsgCreateProofs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    if (object.item !== undefined && object.item !== null) {
      message.item = object.item;
    } else {
      message.item = "";
    }
    if (object.hashes !== undefined && object.hashes !== null) {
      message.hashes = object.hashes;
    } else {
      message.hashes = "";
    }
    return message;
  },
};

const baseMsgCreateProofsResponse: object = {};

export const MsgCreateProofsResponse = {
  encode(_: MsgCreateProofsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProofsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateProofsResponse,
    } as MsgCreateProofsResponse;
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

  fromJSON(_: any): MsgCreateProofsResponse {
    const message = {
      ...baseMsgCreateProofsResponse,
    } as MsgCreateProofsResponse;
    return message;
  },

  toJSON(_: MsgCreateProofsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateProofsResponse>
  ): MsgCreateProofsResponse {
    const message = {
      ...baseMsgCreateProofsResponse,
    } as MsgCreateProofsResponse;
    return message;
  },
};

const baseMsgUpdateProofs: object = {
  creator: "",
  cid: "",
  item: "",
  hashes: "",
};

export const MsgUpdateProofs = {
  encode(message: MsgUpdateProofs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    if (message.item !== "") {
      writer.uint32(26).string(message.item);
    }
    if (message.hashes !== "") {
      writer.uint32(34).string(message.hashes);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateProofs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateProofs } as MsgUpdateProofs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cid = reader.string();
          break;
        case 3:
          message.item = reader.string();
          break;
        case 4:
          message.hashes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateProofs {
    const message = { ...baseMsgUpdateProofs } as MsgUpdateProofs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    if (object.item !== undefined && object.item !== null) {
      message.item = String(object.item);
    } else {
      message.item = "";
    }
    if (object.hashes !== undefined && object.hashes !== null) {
      message.hashes = String(object.hashes);
    } else {
      message.hashes = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateProofs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    message.item !== undefined && (obj.item = message.item);
    message.hashes !== undefined && (obj.hashes = message.hashes);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateProofs>): MsgUpdateProofs {
    const message = { ...baseMsgUpdateProofs } as MsgUpdateProofs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    if (object.item !== undefined && object.item !== null) {
      message.item = object.item;
    } else {
      message.item = "";
    }
    if (object.hashes !== undefined && object.hashes !== null) {
      message.hashes = object.hashes;
    } else {
      message.hashes = "";
    }
    return message;
  },
};

const baseMsgUpdateProofsResponse: object = {};

export const MsgUpdateProofsResponse = {
  encode(_: MsgUpdateProofsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateProofsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateProofsResponse,
    } as MsgUpdateProofsResponse;
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

  fromJSON(_: any): MsgUpdateProofsResponse {
    const message = {
      ...baseMsgUpdateProofsResponse,
    } as MsgUpdateProofsResponse;
    return message;
  },

  toJSON(_: MsgUpdateProofsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateProofsResponse>
  ): MsgUpdateProofsResponse {
    const message = {
      ...baseMsgUpdateProofsResponse,
    } as MsgUpdateProofsResponse;
    return message;
  },
};

const baseMsgDeleteProofs: object = { creator: "", cid: "" };

export const MsgDeleteProofs = {
  encode(message: MsgDeleteProofs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteProofs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteProofs } as MsgDeleteProofs;
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

  fromJSON(object: any): MsgDeleteProofs {
    const message = { ...baseMsgDeleteProofs } as MsgDeleteProofs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteProofs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteProofs>): MsgDeleteProofs {
    const message = { ...baseMsgDeleteProofs } as MsgDeleteProofs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    return message;
  },
};

const baseMsgDeleteProofsResponse: object = {};

export const MsgDeleteProofsResponse = {
  encode(_: MsgDeleteProofsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteProofsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteProofsResponse,
    } as MsgDeleteProofsResponse;
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

  fromJSON(_: any): MsgDeleteProofsResponse {
    const message = {
      ...baseMsgDeleteProofsResponse,
    } as MsgDeleteProofsResponse;
    return message;
  },

  toJSON(_: MsgDeleteProofsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteProofsResponse>
  ): MsgDeleteProofsResponse {
    const message = {
      ...baseMsgDeleteProofsResponse,
    } as MsgDeleteProofsResponse;
    return message;
  },
};

const baseMsgItem: object = { creator: "", hashlist: "" };

export const MsgItem = {
  encode(message: MsgItem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hashlist !== "") {
      writer.uint32(18).string(message.hashlist);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgItem } as MsgItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hashlist = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgItem {
    const message = { ...baseMsgItem } as MsgItem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.hashlist !== undefined && object.hashlist !== null) {
      message.hashlist = String(object.hashlist);
    } else {
      message.hashlist = "";
    }
    return message;
  },

  toJSON(message: MsgItem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hashlist !== undefined && (obj.hashlist = message.hashlist);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgItem>): MsgItem {
    const message = { ...baseMsgItem } as MsgItem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.hashlist !== undefined && object.hashlist !== null) {
      message.hashlist = object.hashlist;
    } else {
      message.hashlist = "";
    }
    return message;
  },
};

const baseMsgItemResponse: object = {};

export const MsgItemResponse = {
  encode(_: MsgItemResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgItemResponse } as MsgItemResponse;
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

  fromJSON(_: any): MsgItemResponse {
    const message = { ...baseMsgItemResponse } as MsgItemResponse;
    return message;
  },

  toJSON(_: MsgItemResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgItemResponse>): MsgItemResponse {
    const message = { ...baseMsgItemResponse } as MsgItemResponse;
    return message;
  },
};

const baseMsgPostproof: object = {
  creator: "",
  item: "",
  hashlist: "",
  cid: "",
};

export const MsgPostproof = {
  encode(message: MsgPostproof, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgPostproof {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPostproof } as MsgPostproof;
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
    const message = { ...baseMsgPostproof } as MsgPostproof;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.item !== undefined && object.item !== null) {
      message.item = String(object.item);
    } else {
      message.item = "";
    }
    if (object.hashlist !== undefined && object.hashlist !== null) {
      message.hashlist = String(object.hashlist);
    } else {
      message.hashlist = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    return message;
  },

  toJSON(message: MsgPostproof): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.item !== undefined && (obj.item = message.item);
    message.hashlist !== undefined && (obj.hashlist = message.hashlist);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPostproof>): MsgPostproof {
    const message = { ...baseMsgPostproof } as MsgPostproof;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.item !== undefined && object.item !== null) {
      message.item = object.item;
    } else {
      message.item = "";
    }
    if (object.hashlist !== undefined && object.hashlist !== null) {
      message.hashlist = object.hashlist;
    } else {
      message.hashlist = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    return message;
  },
};

const baseMsgPostproofResponse: object = { merkle: "" };

export const MsgPostproofResponse = {
  encode(
    message: MsgPostproofResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.merkle !== "") {
      writer.uint32(10).string(message.merkle);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPostproofResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPostproofResponse } as MsgPostproofResponse;
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
    const message = { ...baseMsgPostproofResponse } as MsgPostproofResponse;
    if (object.merkle !== undefined && object.merkle !== null) {
      message.merkle = String(object.merkle);
    } else {
      message.merkle = "";
    }
    return message;
  },

  toJSON(message: MsgPostproofResponse): unknown {
    const obj: any = {};
    message.merkle !== undefined && (obj.merkle = message.merkle);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPostproofResponse>): MsgPostproofResponse {
    const message = { ...baseMsgPostproofResponse } as MsgPostproofResponse;
    if (object.merkle !== undefined && object.merkle !== null) {
      message.merkle = object.merkle;
    } else {
      message.merkle = "";
    }
    return message;
  },
};

const baseMsgCreateActiveDeals: object = {
  creator: "",
  cid: "",
  signee: "",
  provider: "",
  startblock: "",
  endblock: "",
  filesize: "",
  proofverified: "",
  proofsmissed: "",
  blocktoprove: "",
};

export const MsgCreateActiveDeals = {
  encode(
    message: MsgCreateActiveDeals,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    if (message.signee !== "") {
      writer.uint32(26).string(message.signee);
    }
    if (message.provider !== "") {
      writer.uint32(34).string(message.provider);
    }
    if (message.startblock !== "") {
      writer.uint32(42).string(message.startblock);
    }
    if (message.endblock !== "") {
      writer.uint32(50).string(message.endblock);
    }
    if (message.filesize !== "") {
      writer.uint32(58).string(message.filesize);
    }
    if (message.proofverified !== "") {
      writer.uint32(66).string(message.proofverified);
    }
    if (message.proofsmissed !== "") {
      writer.uint32(74).string(message.proofsmissed);
    }
    if (message.blocktoprove !== "") {
      writer.uint32(82).string(message.blocktoprove);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateActiveDeals {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateActiveDeals } as MsgCreateActiveDeals;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cid = reader.string();
          break;
        case 3:
          message.signee = reader.string();
          break;
        case 4:
          message.provider = reader.string();
          break;
        case 5:
          message.startblock = reader.string();
          break;
        case 6:
          message.endblock = reader.string();
          break;
        case 7:
          message.filesize = reader.string();
          break;
        case 8:
          message.proofverified = reader.string();
          break;
        case 9:
          message.proofsmissed = reader.string();
          break;
        case 10:
          message.blocktoprove = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateActiveDeals {
    const message = { ...baseMsgCreateActiveDeals } as MsgCreateActiveDeals;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    if (object.signee !== undefined && object.signee !== null) {
      message.signee = String(object.signee);
    } else {
      message.signee = "";
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    if (object.startblock !== undefined && object.startblock !== null) {
      message.startblock = String(object.startblock);
    } else {
      message.startblock = "";
    }
    if (object.endblock !== undefined && object.endblock !== null) {
      message.endblock = String(object.endblock);
    } else {
      message.endblock = "";
    }
    if (object.filesize !== undefined && object.filesize !== null) {
      message.filesize = String(object.filesize);
    } else {
      message.filesize = "";
    }
    if (object.proofverified !== undefined && object.proofverified !== null) {
      message.proofverified = String(object.proofverified);
    } else {
      message.proofverified = "";
    }
    if (object.proofsmissed !== undefined && object.proofsmissed !== null) {
      message.proofsmissed = String(object.proofsmissed);
    } else {
      message.proofsmissed = "";
    }
    if (object.blocktoprove !== undefined && object.blocktoprove !== null) {
      message.blocktoprove = String(object.blocktoprove);
    } else {
      message.blocktoprove = "";
    }
    return message;
  },

  toJSON(message: MsgCreateActiveDeals): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    message.signee !== undefined && (obj.signee = message.signee);
    message.provider !== undefined && (obj.provider = message.provider);
    message.startblock !== undefined && (obj.startblock = message.startblock);
    message.endblock !== undefined && (obj.endblock = message.endblock);
    message.filesize !== undefined && (obj.filesize = message.filesize);
    message.proofverified !== undefined &&
      (obj.proofverified = message.proofverified);
    message.proofsmissed !== undefined &&
      (obj.proofsmissed = message.proofsmissed);
    message.blocktoprove !== undefined &&
      (obj.blocktoprove = message.blocktoprove);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateActiveDeals>): MsgCreateActiveDeals {
    const message = { ...baseMsgCreateActiveDeals } as MsgCreateActiveDeals;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    if (object.signee !== undefined && object.signee !== null) {
      message.signee = object.signee;
    } else {
      message.signee = "";
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.startblock !== undefined && object.startblock !== null) {
      message.startblock = object.startblock;
    } else {
      message.startblock = "";
    }
    if (object.endblock !== undefined && object.endblock !== null) {
      message.endblock = object.endblock;
    } else {
      message.endblock = "";
    }
    if (object.filesize !== undefined && object.filesize !== null) {
      message.filesize = object.filesize;
    } else {
      message.filesize = "";
    }
    if (object.proofverified !== undefined && object.proofverified !== null) {
      message.proofverified = object.proofverified;
    } else {
      message.proofverified = "";
    }
    if (object.proofsmissed !== undefined && object.proofsmissed !== null) {
      message.proofsmissed = object.proofsmissed;
    } else {
      message.proofsmissed = "";
    }
    if (object.blocktoprove !== undefined && object.blocktoprove !== null) {
      message.blocktoprove = object.blocktoprove;
    } else {
      message.blocktoprove = "";
    }
    return message;
  },
};

const baseMsgCreateActiveDealsResponse: object = {};

export const MsgCreateActiveDealsResponse = {
  encode(
    _: MsgCreateActiveDealsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateActiveDealsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateActiveDealsResponse,
    } as MsgCreateActiveDealsResponse;
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

  fromJSON(_: any): MsgCreateActiveDealsResponse {
    const message = {
      ...baseMsgCreateActiveDealsResponse,
    } as MsgCreateActiveDealsResponse;
    return message;
  },

  toJSON(_: MsgCreateActiveDealsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateActiveDealsResponse>
  ): MsgCreateActiveDealsResponse {
    const message = {
      ...baseMsgCreateActiveDealsResponse,
    } as MsgCreateActiveDealsResponse;
    return message;
  },
};

const baseMsgUpdateActiveDeals: object = {
  creator: "",
  cid: "",
  signee: "",
  provider: "",
  startblock: "",
  endblock: "",
  filesize: "",
  proofverified: "",
  proofsmissed: "",
  blocktoprove: "",
};

export const MsgUpdateActiveDeals = {
  encode(
    message: MsgUpdateActiveDeals,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    if (message.signee !== "") {
      writer.uint32(26).string(message.signee);
    }
    if (message.provider !== "") {
      writer.uint32(34).string(message.provider);
    }
    if (message.startblock !== "") {
      writer.uint32(42).string(message.startblock);
    }
    if (message.endblock !== "") {
      writer.uint32(50).string(message.endblock);
    }
    if (message.filesize !== "") {
      writer.uint32(58).string(message.filesize);
    }
    if (message.proofverified !== "") {
      writer.uint32(66).string(message.proofverified);
    }
    if (message.proofsmissed !== "") {
      writer.uint32(74).string(message.proofsmissed);
    }
    if (message.blocktoprove !== "") {
      writer.uint32(82).string(message.blocktoprove);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateActiveDeals {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateActiveDeals } as MsgUpdateActiveDeals;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cid = reader.string();
          break;
        case 3:
          message.signee = reader.string();
          break;
        case 4:
          message.provider = reader.string();
          break;
        case 5:
          message.startblock = reader.string();
          break;
        case 6:
          message.endblock = reader.string();
          break;
        case 7:
          message.filesize = reader.string();
          break;
        case 8:
          message.proofverified = reader.string();
          break;
        case 9:
          message.proofsmissed = reader.string();
          break;
        case 10:
          message.blocktoprove = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateActiveDeals {
    const message = { ...baseMsgUpdateActiveDeals } as MsgUpdateActiveDeals;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    if (object.signee !== undefined && object.signee !== null) {
      message.signee = String(object.signee);
    } else {
      message.signee = "";
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    if (object.startblock !== undefined && object.startblock !== null) {
      message.startblock = String(object.startblock);
    } else {
      message.startblock = "";
    }
    if (object.endblock !== undefined && object.endblock !== null) {
      message.endblock = String(object.endblock);
    } else {
      message.endblock = "";
    }
    if (object.filesize !== undefined && object.filesize !== null) {
      message.filesize = String(object.filesize);
    } else {
      message.filesize = "";
    }
    if (object.proofverified !== undefined && object.proofverified !== null) {
      message.proofverified = String(object.proofverified);
    } else {
      message.proofverified = "";
    }
    if (object.proofsmissed !== undefined && object.proofsmissed !== null) {
      message.proofsmissed = String(object.proofsmissed);
    } else {
      message.proofsmissed = "";
    }
    if (object.blocktoprove !== undefined && object.blocktoprove !== null) {
      message.blocktoprove = String(object.blocktoprove);
    } else {
      message.blocktoprove = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateActiveDeals): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    message.signee !== undefined && (obj.signee = message.signee);
    message.provider !== undefined && (obj.provider = message.provider);
    message.startblock !== undefined && (obj.startblock = message.startblock);
    message.endblock !== undefined && (obj.endblock = message.endblock);
    message.filesize !== undefined && (obj.filesize = message.filesize);
    message.proofverified !== undefined &&
      (obj.proofverified = message.proofverified);
    message.proofsmissed !== undefined &&
      (obj.proofsmissed = message.proofsmissed);
    message.blocktoprove !== undefined &&
      (obj.blocktoprove = message.blocktoprove);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateActiveDeals>): MsgUpdateActiveDeals {
    const message = { ...baseMsgUpdateActiveDeals } as MsgUpdateActiveDeals;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    if (object.signee !== undefined && object.signee !== null) {
      message.signee = object.signee;
    } else {
      message.signee = "";
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.startblock !== undefined && object.startblock !== null) {
      message.startblock = object.startblock;
    } else {
      message.startblock = "";
    }
    if (object.endblock !== undefined && object.endblock !== null) {
      message.endblock = object.endblock;
    } else {
      message.endblock = "";
    }
    if (object.filesize !== undefined && object.filesize !== null) {
      message.filesize = object.filesize;
    } else {
      message.filesize = "";
    }
    if (object.proofverified !== undefined && object.proofverified !== null) {
      message.proofverified = object.proofverified;
    } else {
      message.proofverified = "";
    }
    if (object.proofsmissed !== undefined && object.proofsmissed !== null) {
      message.proofsmissed = object.proofsmissed;
    } else {
      message.proofsmissed = "";
    }
    if (object.blocktoprove !== undefined && object.blocktoprove !== null) {
      message.blocktoprove = object.blocktoprove;
    } else {
      message.blocktoprove = "";
    }
    return message;
  },
};

const baseMsgUpdateActiveDealsResponse: object = {};

export const MsgUpdateActiveDealsResponse = {
  encode(
    _: MsgUpdateActiveDealsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateActiveDealsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateActiveDealsResponse,
    } as MsgUpdateActiveDealsResponse;
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

  fromJSON(_: any): MsgUpdateActiveDealsResponse {
    const message = {
      ...baseMsgUpdateActiveDealsResponse,
    } as MsgUpdateActiveDealsResponse;
    return message;
  },

  toJSON(_: MsgUpdateActiveDealsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateActiveDealsResponse>
  ): MsgUpdateActiveDealsResponse {
    const message = {
      ...baseMsgUpdateActiveDealsResponse,
    } as MsgUpdateActiveDealsResponse;
    return message;
  },
};

const baseMsgDeleteActiveDeals: object = { creator: "", cid: "" };

export const MsgDeleteActiveDeals = {
  encode(
    message: MsgDeleteActiveDeals,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteActiveDeals {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteActiveDeals } as MsgDeleteActiveDeals;
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

  fromJSON(object: any): MsgDeleteActiveDeals {
    const message = { ...baseMsgDeleteActiveDeals } as MsgDeleteActiveDeals;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteActiveDeals): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteActiveDeals>): MsgDeleteActiveDeals {
    const message = { ...baseMsgDeleteActiveDeals } as MsgDeleteActiveDeals;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    return message;
  },
};

const baseMsgDeleteActiveDealsResponse: object = {};

export const MsgDeleteActiveDealsResponse = {
  encode(
    _: MsgDeleteActiveDealsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteActiveDealsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteActiveDealsResponse,
    } as MsgDeleteActiveDealsResponse;
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

  fromJSON(_: any): MsgDeleteActiveDealsResponse {
    const message = {
      ...baseMsgDeleteActiveDealsResponse,
    } as MsgDeleteActiveDealsResponse;
    return message;
  },

  toJSON(_: MsgDeleteActiveDealsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteActiveDealsResponse>
  ): MsgDeleteActiveDealsResponse {
    const message = {
      ...baseMsgDeleteActiveDealsResponse,
    } as MsgDeleteActiveDealsResponse;
    return message;
  },
};

const baseMsgSignContract: object = { creator: "", cid: "" };

export const MsgSignContract = {
  encode(message: MsgSignContract, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSignContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSignContract } as MsgSignContract;
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
    const message = { ...baseMsgSignContract } as MsgSignContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    return message;
  },

  toJSON(message: MsgSignContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSignContract>): MsgSignContract {
    const message = { ...baseMsgSignContract } as MsgSignContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    return message;
  },
};

const baseMsgSignContractResponse: object = {};

export const MsgSignContractResponse = {
  encode(_: MsgSignContractResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSignContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSignContractResponse,
    } as MsgSignContractResponse;
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
    const message = {
      ...baseMsgSignContractResponse,
    } as MsgSignContractResponse;
    return message;
  },

  toJSON(_: MsgSignContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSignContractResponse>
  ): MsgSignContractResponse {
    const message = {
      ...baseMsgSignContractResponse,
    } as MsgSignContractResponse;
    return message;
  },
};

const baseMsgCreateProviders: object = {
  creator: "",
  address: "",
  ip: "",
  totalspace: "",
};

export const MsgCreateProviders = {
  encode(
    message: MsgCreateProviders,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.totalspace !== "") {
      writer.uint32(34).string(message.totalspace);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProviders {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateProviders } as MsgCreateProviders;
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
          message.ip = reader.string();
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

  fromJSON(object: any): MsgCreateProviders {
    const message = { ...baseMsgCreateProviders } as MsgCreateProviders;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = String(object.ip);
    } else {
      message.ip = "";
    }
    if (object.totalspace !== undefined && object.totalspace !== null) {
      message.totalspace = String(object.totalspace);
    } else {
      message.totalspace = "";
    }
    return message;
  },

  toJSON(message: MsgCreateProviders): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.ip !== undefined && (obj.ip = message.ip);
    message.totalspace !== undefined && (obj.totalspace = message.totalspace);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProviders>): MsgCreateProviders {
    const message = { ...baseMsgCreateProviders } as MsgCreateProviders;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    } else {
      message.ip = "";
    }
    if (object.totalspace !== undefined && object.totalspace !== null) {
      message.totalspace = object.totalspace;
    } else {
      message.totalspace = "";
    }
    return message;
  },
};

const baseMsgCreateProvidersResponse: object = {};

export const MsgCreateProvidersResponse = {
  encode(
    _: MsgCreateProvidersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateProvidersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateProvidersResponse,
    } as MsgCreateProvidersResponse;
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

  fromJSON(_: any): MsgCreateProvidersResponse {
    const message = {
      ...baseMsgCreateProvidersResponse,
    } as MsgCreateProvidersResponse;
    return message;
  },

  toJSON(_: MsgCreateProvidersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateProvidersResponse>
  ): MsgCreateProvidersResponse {
    const message = {
      ...baseMsgCreateProvidersResponse,
    } as MsgCreateProvidersResponse;
    return message;
  },
};

const baseMsgUpdateProviders: object = {
  creator: "",
  address: "",
  ip: "",
  totalspace: "",
};

export const MsgUpdateProviders = {
  encode(
    message: MsgUpdateProviders,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.totalspace !== "") {
      writer.uint32(34).string(message.totalspace);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateProviders {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateProviders } as MsgUpdateProviders;
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
          message.ip = reader.string();
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

  fromJSON(object: any): MsgUpdateProviders {
    const message = { ...baseMsgUpdateProviders } as MsgUpdateProviders;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = String(object.ip);
    } else {
      message.ip = "";
    }
    if (object.totalspace !== undefined && object.totalspace !== null) {
      message.totalspace = String(object.totalspace);
    } else {
      message.totalspace = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateProviders): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.ip !== undefined && (obj.ip = message.ip);
    message.totalspace !== undefined && (obj.totalspace = message.totalspace);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateProviders>): MsgUpdateProviders {
    const message = { ...baseMsgUpdateProviders } as MsgUpdateProviders;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    } else {
      message.ip = "";
    }
    if (object.totalspace !== undefined && object.totalspace !== null) {
      message.totalspace = object.totalspace;
    } else {
      message.totalspace = "";
    }
    return message;
  },
};

const baseMsgUpdateProvidersResponse: object = {};

export const MsgUpdateProvidersResponse = {
  encode(
    _: MsgUpdateProvidersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateProvidersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateProvidersResponse,
    } as MsgUpdateProvidersResponse;
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

  fromJSON(_: any): MsgUpdateProvidersResponse {
    const message = {
      ...baseMsgUpdateProvidersResponse,
    } as MsgUpdateProvidersResponse;
    return message;
  },

  toJSON(_: MsgUpdateProvidersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateProvidersResponse>
  ): MsgUpdateProvidersResponse {
    const message = {
      ...baseMsgUpdateProvidersResponse,
    } as MsgUpdateProvidersResponse;
    return message;
  },
};

const baseMsgDeleteProviders: object = { creator: "", address: "" };

export const MsgDeleteProviders = {
  encode(
    message: MsgDeleteProviders,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteProviders {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteProviders } as MsgDeleteProviders;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteProviders {
    const message = { ...baseMsgDeleteProviders } as MsgDeleteProviders;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteProviders): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteProviders>): MsgDeleteProviders {
    const message = { ...baseMsgDeleteProviders } as MsgDeleteProviders;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgDeleteProvidersResponse: object = {};

export const MsgDeleteProvidersResponse = {
  encode(
    _: MsgDeleteProvidersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteProvidersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteProvidersResponse,
    } as MsgDeleteProvidersResponse;
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

  fromJSON(_: any): MsgDeleteProvidersResponse {
    const message = {
      ...baseMsgDeleteProvidersResponse,
    } as MsgDeleteProvidersResponse;
    return message;
  },

  toJSON(_: MsgDeleteProvidersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteProvidersResponse>
  ): MsgDeleteProvidersResponse {
    const message = {
      ...baseMsgDeleteProvidersResponse,
    } as MsgDeleteProvidersResponse;
    return message;
  },
};

const baseMsgSetProviderIp: object = { creator: "", ip: "" };

export const MsgSetProviderIp = {
  encode(message: MsgSetProviderIp, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetProviderIp {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetProviderIp } as MsgSetProviderIp;
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

  fromJSON(object: any): MsgSetProviderIp {
    const message = { ...baseMsgSetProviderIp } as MsgSetProviderIp;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = String(object.ip);
    } else {
      message.ip = "";
    }
    return message;
  },

  toJSON(message: MsgSetProviderIp): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ip !== undefined && (obj.ip = message.ip);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetProviderIp>): MsgSetProviderIp {
    const message = { ...baseMsgSetProviderIp } as MsgSetProviderIp;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    } else {
      message.ip = "";
    }
    return message;
  },
};

const baseMsgSetProviderIpResponse: object = {};

export const MsgSetProviderIpResponse = {
  encode(
    _: MsgSetProviderIpResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetProviderIpResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetProviderIpResponse,
    } as MsgSetProviderIpResponse;
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

  fromJSON(_: any): MsgSetProviderIpResponse {
    const message = {
      ...baseMsgSetProviderIpResponse,
    } as MsgSetProviderIpResponse;
    return message;
  },

  toJSON(_: MsgSetProviderIpResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetProviderIpResponse>
  ): MsgSetProviderIpResponse {
    const message = {
      ...baseMsgSetProviderIpResponse,
    } as MsgSetProviderIpResponse;
    return message;
  },
};

const baseMsgSetProviderTotalspace: object = { creator: "", space: "" };

export const MsgSetProviderTotalspace = {
  encode(
    message: MsgSetProviderTotalspace,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.space !== "") {
      writer.uint32(18).string(message.space);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetProviderTotalspace {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetProviderTotalspace,
    } as MsgSetProviderTotalspace;
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
    const message = {
      ...baseMsgSetProviderTotalspace,
    } as MsgSetProviderTotalspace;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.space !== undefined && object.space !== null) {
      message.space = String(object.space);
    } else {
      message.space = "";
    }
    return message;
  },

  toJSON(message: MsgSetProviderTotalspace): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.space !== undefined && (obj.space = message.space);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetProviderTotalspace>
  ): MsgSetProviderTotalspace {
    const message = {
      ...baseMsgSetProviderTotalspace,
    } as MsgSetProviderTotalspace;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.space !== undefined && object.space !== null) {
      message.space = object.space;
    } else {
      message.space = "";
    }
    return message;
  },
};

const baseMsgSetProviderTotalspaceResponse: object = {};

export const MsgSetProviderTotalspaceResponse = {
  encode(
    _: MsgSetProviderTotalspaceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetProviderTotalspaceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetProviderTotalspaceResponse,
    } as MsgSetProviderTotalspaceResponse;
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
    const message = {
      ...baseMsgSetProviderTotalspaceResponse,
    } as MsgSetProviderTotalspaceResponse;
    return message;
  },

  toJSON(_: MsgSetProviderTotalspaceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetProviderTotalspaceResponse>
  ): MsgSetProviderTotalspaceResponse {
    const message = {
      ...baseMsgSetProviderTotalspaceResponse,
    } as MsgSetProviderTotalspaceResponse;
    return message;
  },
};

const baseMsgInitProvider: object = { creator: "", ip: "", totalspace: "" };

export const MsgInitProvider = {
  encode(message: MsgInitProvider, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.totalspace !== "") {
      writer.uint32(26).string(message.totalspace);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgInitProvider {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgInitProvider } as MsgInitProvider;
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
    const message = { ...baseMsgInitProvider } as MsgInitProvider;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = String(object.ip);
    } else {
      message.ip = "";
    }
    if (object.totalspace !== undefined && object.totalspace !== null) {
      message.totalspace = String(object.totalspace);
    } else {
      message.totalspace = "";
    }
    return message;
  },

  toJSON(message: MsgInitProvider): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ip !== undefined && (obj.ip = message.ip);
    message.totalspace !== undefined && (obj.totalspace = message.totalspace);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgInitProvider>): MsgInitProvider {
    const message = { ...baseMsgInitProvider } as MsgInitProvider;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    } else {
      message.ip = "";
    }
    if (object.totalspace !== undefined && object.totalspace !== null) {
      message.totalspace = object.totalspace;
    } else {
      message.totalspace = "";
    }
    return message;
  },
};

const baseMsgInitProviderResponse: object = {};

export const MsgInitProviderResponse = {
  encode(_: MsgInitProviderResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgInitProviderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitProviderResponse,
    } as MsgInitProviderResponse;
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
    const message = {
      ...baseMsgInitProviderResponse,
    } as MsgInitProviderResponse;
    return message;
  },

  toJSON(_: MsgInitProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgInitProviderResponse>
  ): MsgInitProviderResponse {
    const message = {
      ...baseMsgInitProviderResponse,
    } as MsgInitProviderResponse;
    return message;
  },
};

const baseMsgCancelContract: object = { creator: "", cid: "" };

export const MsgCancelContract = {
  encode(message: MsgCancelContract, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelContract } as MsgCancelContract;
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
    const message = { ...baseMsgCancelContract } as MsgCancelContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    return message;
  },

  toJSON(message: MsgCancelContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelContract>): MsgCancelContract {
    const message = { ...baseMsgCancelContract } as MsgCancelContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    return message;
  },
};

const baseMsgCancelContractResponse: object = {};

export const MsgCancelContractResponse = {
  encode(
    _: MsgCancelContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelContractResponse,
    } as MsgCancelContractResponse;
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
    const message = {
      ...baseMsgCancelContractResponse,
    } as MsgCancelContractResponse;
    return message;
  },

  toJSON(_: MsgCancelContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCancelContractResponse>
  ): MsgCancelContractResponse {
    const message = {
      ...baseMsgCancelContractResponse,
    } as MsgCancelContractResponse;
    return message;
  },
};

const baseMsgBuyStorage: object = {
  creator: "",
  forAddress: "",
  duration: "",
  bytes: "",
  paymentDenom: "",
};

export const MsgBuyStorage = {
  encode(message: MsgBuyStorage, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgBuyStorage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyStorage } as MsgBuyStorage;
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
    const message = { ...baseMsgBuyStorage } as MsgBuyStorage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.forAddress !== undefined && object.forAddress !== null) {
      message.forAddress = String(object.forAddress);
    } else {
      message.forAddress = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = String(object.duration);
    } else {
      message.duration = "";
    }
    if (object.bytes !== undefined && object.bytes !== null) {
      message.bytes = String(object.bytes);
    } else {
      message.bytes = "";
    }
    if (object.paymentDenom !== undefined && object.paymentDenom !== null) {
      message.paymentDenom = String(object.paymentDenom);
    } else {
      message.paymentDenom = "";
    }
    return message;
  },

  toJSON(message: MsgBuyStorage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.forAddress !== undefined && (obj.forAddress = message.forAddress);
    message.duration !== undefined && (obj.duration = message.duration);
    message.bytes !== undefined && (obj.bytes = message.bytes);
    message.paymentDenom !== undefined &&
      (obj.paymentDenom = message.paymentDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyStorage>): MsgBuyStorage {
    const message = { ...baseMsgBuyStorage } as MsgBuyStorage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.forAddress !== undefined && object.forAddress !== null) {
      message.forAddress = object.forAddress;
    } else {
      message.forAddress = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = "";
    }
    if (object.bytes !== undefined && object.bytes !== null) {
      message.bytes = object.bytes;
    } else {
      message.bytes = "";
    }
    if (object.paymentDenom !== undefined && object.paymentDenom !== null) {
      message.paymentDenom = object.paymentDenom;
    } else {
      message.paymentDenom = "";
    }
    return message;
  },
};

const baseMsgBuyStorageResponse: object = {};

export const MsgBuyStorageResponse = {
  encode(_: MsgBuyStorageResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyStorageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyStorageResponse } as MsgBuyStorageResponse;
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
    const message = { ...baseMsgBuyStorageResponse } as MsgBuyStorageResponse;
    return message;
  },

  toJSON(_: MsgBuyStorageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBuyStorageResponse>): MsgBuyStorageResponse {
    const message = { ...baseMsgBuyStorageResponse } as MsgBuyStorageResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  PostContract(request: MsgPostContract): Promise<MsgPostContractResponse>;
  Postproof(request: MsgPostproof): Promise<MsgPostproofResponse>;
  SignContract(request: MsgSignContract): Promise<MsgSignContractResponse>;
  SetProviderIp(request: MsgSetProviderIp): Promise<MsgSetProviderIpResponse>;
  SetProviderTotalspace(
    request: MsgSetProviderTotalspace
  ): Promise<MsgSetProviderTotalspaceResponse>;
  InitProvider(request: MsgInitProvider): Promise<MsgInitProviderResponse>;
  CancelContract(
    request: MsgCancelContract
  ): Promise<MsgCancelContractResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BuyStorage(request: MsgBuyStorage): Promise<MsgBuyStorageResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  PostContract(request: MsgPostContract): Promise<MsgPostContractResponse> {
    const data = MsgPostContract.encode(request).finish();
    const promise = this.rpc.request(
      "jackaldao.canine.storage.Msg",
      "PostContract",
      data
    );
    return promise.then((data) =>
      MsgPostContractResponse.decode(new Reader(data))
    );
  }

  Postproof(request: MsgPostproof): Promise<MsgPostproofResponse> {
    const data = MsgPostproof.encode(request).finish();
    const promise = this.rpc.request(
      "jackaldao.canine.storage.Msg",
      "Postproof",
      data
    );
    return promise.then((data) =>
      MsgPostproofResponse.decode(new Reader(data))
    );
  }

  SignContract(request: MsgSignContract): Promise<MsgSignContractResponse> {
    const data = MsgSignContract.encode(request).finish();
    const promise = this.rpc.request(
      "jackaldao.canine.storage.Msg",
      "SignContract",
      data
    );
    return promise.then((data) =>
      MsgSignContractResponse.decode(new Reader(data))
    );
  }

  SetProviderIp(request: MsgSetProviderIp): Promise<MsgSetProviderIpResponse> {
    const data = MsgSetProviderIp.encode(request).finish();
    const promise = this.rpc.request(
      "jackaldao.canine.storage.Msg",
      "SetProviderIp",
      data
    );
    return promise.then((data) =>
      MsgSetProviderIpResponse.decode(new Reader(data))
    );
  }

  SetProviderTotalspace(
    request: MsgSetProviderTotalspace
  ): Promise<MsgSetProviderTotalspaceResponse> {
    const data = MsgSetProviderTotalspace.encode(request).finish();
    const promise = this.rpc.request(
      "jackaldao.canine.storage.Msg",
      "SetProviderTotalspace",
      data
    );
    return promise.then((data) =>
      MsgSetProviderTotalspaceResponse.decode(new Reader(data))
    );
  }

  InitProvider(request: MsgInitProvider): Promise<MsgInitProviderResponse> {
    const data = MsgInitProvider.encode(request).finish();
    const promise = this.rpc.request(
      "jackaldao.canine.storage.Msg",
      "InitProvider",
      data
    );
    return promise.then((data) =>
      MsgInitProviderResponse.decode(new Reader(data))
    );
  }

  CancelContract(
    request: MsgCancelContract
  ): Promise<MsgCancelContractResponse> {
    const data = MsgCancelContract.encode(request).finish();
    const promise = this.rpc.request(
      "jackaldao.canine.storage.Msg",
      "CancelContract",
      data
    );
    return promise.then((data) =>
      MsgCancelContractResponse.decode(new Reader(data))
    );
  }

  BuyStorage(request: MsgBuyStorage): Promise<MsgBuyStorageResponse> {
    const data = MsgBuyStorage.encode(request).finish();
    const promise = this.rpc.request(
      "jackaldao.canine.storage.Msg",
      "BuyStorage",
      data
    );
    return promise.then((data) =>
      MsgBuyStorageResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
