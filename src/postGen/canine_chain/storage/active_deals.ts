/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.storage";

export interface LegacyActiveDeals {
  cid: string;
  signee: string;
  provider: string;
  /** TODO: fix casing */
  startblock: string;
  /** TODO: fix casing */
  endblock: string;
  /** TODO: fix casing */
  filesize: string;
  /** TODO: fix casing */
  proofverified: string;
  /** TODO: fix casing */
  proofsmissed: string;
  /** TODO: fix casing */
  blocktoprove: string;
  creator: string;
  merkle: string;
  fid: string;
}

export interface UnifiedFile {
  /** The merkle root is unique to every file based on its contents. */
  merkle: Uint8Array;
  owner: string;
  /** Marks the block height the file started on. */
  start: number;
  /** If not zero, the end block determines when a file should be deleted. */
  expires: number;
  fileSize: number;
  /** How many blocks between proofs. */
  proofInterval: number;
  proofType: number;
  /** A list of every file proof. */
  proofs: string[];
  /** How many provers this file can have. */
  maxProofs: number;
  /** Misc string to store extra details. */
  note: string;
}

export interface FileProof {
  prover: string;
  /** Used to identify which deal this proof belongs to */
  merkle: Uint8Array;
  /** '' */
  owner: string;
  /** '' */
  start: number;
  lastProven: number;
  chunkToProve: number;
}

function createBaseLegacyActiveDeals(): LegacyActiveDeals {
  return {
    cid: "",
    signee: "",
    provider: "",
    startblock: "",
    endblock: "",
    filesize: "",
    proofverified: "",
    proofsmissed: "",
    blocktoprove: "",
    creator: "",
    merkle: "",
    fid: "",
  };
}

export const LegacyActiveDeals = {
  encode(message: LegacyActiveDeals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    if (message.signee !== "") {
      writer.uint32(18).string(message.signee);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.startblock !== "") {
      writer.uint32(34).string(message.startblock);
    }
    if (message.endblock !== "") {
      writer.uint32(42).string(message.endblock);
    }
    if (message.filesize !== "") {
      writer.uint32(50).string(message.filesize);
    }
    if (message.proofverified !== "") {
      writer.uint32(58).string(message.proofverified);
    }
    if (message.proofsmissed !== "") {
      writer.uint32(66).string(message.proofsmissed);
    }
    if (message.blocktoprove !== "") {
      writer.uint32(74).string(message.blocktoprove);
    }
    if (message.creator !== "") {
      writer.uint32(82).string(message.creator);
    }
    if (message.merkle !== "") {
      writer.uint32(90).string(message.merkle);
    }
    if (message.fid !== "") {
      writer.uint32(98).string(message.fid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyActiveDeals {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyActiveDeals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signee = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startblock = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.endblock = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.filesize = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.proofverified = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.proofsmissed = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.blocktoprove = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.merkle = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.fid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LegacyActiveDeals {
    return {
      cid: isSet(object.cid) ? gt.String(object.cid) : "",
      signee: isSet(object.signee) ? gt.String(object.signee) : "",
      provider: isSet(object.provider) ? gt.String(object.provider) : "",
      startblock: isSet(object.startblock) ? gt.String(object.startblock) : "",
      endblock: isSet(object.endblock) ? gt.String(object.endblock) : "",
      filesize: isSet(object.filesize) ? gt.String(object.filesize) : "",
      proofverified: isSet(object.proofverified) ? gt.String(object.proofverified) : "",
      proofsmissed: isSet(object.proofsmissed) ? gt.String(object.proofsmissed) : "",
      blocktoprove: isSet(object.blocktoprove) ? gt.String(object.blocktoprove) : "",
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      merkle: isSet(object.merkle) ? gt.String(object.merkle) : "",
      fid: isSet(object.fid) ? gt.String(object.fid) : "",
    };
  },

  toJSON(message: LegacyActiveDeals): unknown {
    const obj: any = {};
    if (message.cid !== "") {
      obj.cid = message.cid;
    }
    if (message.signee !== "") {
      obj.signee = message.signee;
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    if (message.startblock !== "") {
      obj.startblock = message.startblock;
    }
    if (message.endblock !== "") {
      obj.endblock = message.endblock;
    }
    if (message.filesize !== "") {
      obj.filesize = message.filesize;
    }
    if (message.proofverified !== "") {
      obj.proofverified = message.proofverified;
    }
    if (message.proofsmissed !== "") {
      obj.proofsmissed = message.proofsmissed;
    }
    if (message.blocktoprove !== "") {
      obj.blocktoprove = message.blocktoprove;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.merkle !== "") {
      obj.merkle = message.merkle;
    }
    if (message.fid !== "") {
      obj.fid = message.fid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyActiveDeals>, I>>(base?: I): LegacyActiveDeals {
    return LegacyActiveDeals.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LegacyActiveDeals>, I>>(object: I): LegacyActiveDeals {
    const message = createBaseLegacyActiveDeals();
    message.cid = object.cid ?? "";
    message.signee = object.signee ?? "";
    message.provider = object.provider ?? "";
    message.startblock = object.startblock ?? "";
    message.endblock = object.endblock ?? "";
    message.filesize = object.filesize ?? "";
    message.proofverified = object.proofverified ?? "";
    message.proofsmissed = object.proofsmissed ?? "";
    message.blocktoprove = object.blocktoprove ?? "";
    message.creator = object.creator ?? "";
    message.merkle = object.merkle ?? "";
    message.fid = object.fid ?? "";
    return message;
  },
};

function createBaseUnifiedFile(): UnifiedFile {
  return {
    merkle: new Uint8Array(0),
    owner: "",
    start: 0,
    expires: 0,
    fileSize: 0,
    proofInterval: 0,
    proofType: 0,
    proofs: [],
    maxProofs: 0,
    note: "",
  };
}

export const UnifiedFile = {
  encode(message: UnifiedFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merkle.length !== 0) {
      writer.uint32(10).bytes(message.merkle);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.start !== 0) {
      writer.uint32(24).int64(message.start);
    }
    if (message.expires !== 0) {
      writer.uint32(32).int64(message.expires);
    }
    if (message.fileSize !== 0) {
      writer.uint32(40).int64(message.fileSize);
    }
    if (message.proofInterval !== 0) {
      writer.uint32(48).int64(message.proofInterval);
    }
    if (message.proofType !== 0) {
      writer.uint32(56).int64(message.proofType);
    }
    for (const v of message.proofs) {
      writer.uint32(66).string(v!);
    }
    if (message.maxProofs !== 0) {
      writer.uint32(72).int64(message.maxProofs);
    }
    if (message.note !== "") {
      writer.uint32(82).string(message.note);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnifiedFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnifiedFile();
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
        case 4:
          if (tag !== 32) {
            break;
          }

          message.expires = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.fileSize = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.proofInterval = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.proofType = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.proofs.push(reader.string());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.maxProofs = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
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

  fromJSON(object: any): UnifiedFile {
    return {
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
      expires: isSet(object.expires) ? gt.Number(object.expires) : 0,
      fileSize: isSet(object.fileSize) ? gt.Number(object.fileSize) : 0,
      proofInterval: isSet(object.proofInterval) ? gt.Number(object.proofInterval) : 0,
      proofType: isSet(object.proofType) ? gt.Number(object.proofType) : 0,
      proofs: gt.Array.isArray(object?.proofs) ? object.proofs.map((e: any) => gt.String(e)) : [],
      maxProofs: isSet(object.maxProofs) ? gt.Number(object.maxProofs) : 0,
      note: isSet(object.note) ? gt.String(object.note) : "",
    };
  },

  toJSON(message: UnifiedFile): unknown {
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
    if (message.expires !== 0) {
      obj.expires = Math.round(message.expires);
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
    if (message.proofs?.length) {
      obj.proofs = message.proofs;
    }
    if (message.maxProofs !== 0) {
      obj.maxProofs = Math.round(message.maxProofs);
    }
    if (message.note !== "") {
      obj.note = message.note;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnifiedFile>, I>>(base?: I): UnifiedFile {
    return UnifiedFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnifiedFile>, I>>(object: I): UnifiedFile {
    const message = createBaseUnifiedFile();
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    message.expires = object.expires ?? 0;
    message.fileSize = object.fileSize ?? 0;
    message.proofInterval = object.proofInterval ?? 0;
    message.proofType = object.proofType ?? 0;
    message.proofs = object.proofs?.map((e) => e) || [];
    message.maxProofs = object.maxProofs ?? 0;
    message.note = object.note ?? "";
    return message;
  },
};

function createBaseFileProof(): FileProof {
  return { prover: "", merkle: new Uint8Array(0), owner: "", start: 0, lastProven: 0, chunkToProve: 0 };
}

export const FileProof = {
  encode(message: FileProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.lastProven !== 0) {
      writer.uint32(40).int64(message.lastProven);
    }
    if (message.chunkToProve !== 0) {
      writer.uint32(48).int64(message.chunkToProve);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileProof();
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
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lastProven = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.chunkToProve = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileProof {
    return {
      prover: isSet(object.prover) ? gt.String(object.prover) : "",
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
      lastProven: isSet(object.lastProven) ? gt.Number(object.lastProven) : 0,
      chunkToProve: isSet(object.chunkToProve) ? gt.Number(object.chunkToProve) : 0,
    };
  },

  toJSON(message: FileProof): unknown {
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
    if (message.lastProven !== 0) {
      obj.lastProven = Math.round(message.lastProven);
    }
    if (message.chunkToProve !== 0) {
      obj.chunkToProve = Math.round(message.chunkToProve);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileProof>, I>>(base?: I): FileProof {
    return FileProof.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileProof>, I>>(object: I): FileProof {
    const message = createBaseFileProof();
    message.prover = object.prover ?? "";
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    message.lastProven = object.lastProven ?? 0;
    message.chunkToProve = object.chunkToProve ?? 0;
    return message;
  },
};

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