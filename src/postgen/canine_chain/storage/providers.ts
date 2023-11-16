/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "canine_chain.storage";

export interface Providers {
  address: string;
  ip: string;
  /** TODO: fix casing */
  totalspace: string;
  burnedContracts: string;
  creator: string;
  keybaseIdentity: string;
  authClaimers: string[];
}

export interface ActiveProviders {
  address: string;
}

export interface Attestation {
  provider: string;
  complete: boolean;
}

export interface AttestationForm {
  attestations: Attestation[];
  prover: string;
  /** The merkle root is unique to every file based on its contents. */
  merkle: Uint8Array;
  owner: string;
  /** Marks the block height the file started on. */
  start: number;
}

export interface ReportForm {
  attestations: Attestation[];
  prover: string;
  /** The merkle root is unique to every file based on its contents. */
  merkle: Uint8Array;
  owner: string;
  /** Marks the block height the file started on. */
  start: number;
}

export interface Collateral {
  address: string;
  amount: number;
}

function createBaseProviders(): Providers {
  return {
    address: "",
    ip: "",
    totalspace: "",
    burnedContracts: "",
    creator: "",
    keybaseIdentity: "",
    authClaimers: [],
  };
}

export const Providers = {
  encode(message: Providers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.totalspace !== "") {
      writer.uint32(26).string(message.totalspace);
    }
    if (message.burnedContracts !== "") {
      writer.uint32(34).string(message.burnedContracts);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.keybaseIdentity !== "") {
      writer.uint32(50).string(message.keybaseIdentity);
    }
    for (const v of message.authClaimers) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Providers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviders();
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

          message.ip = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.totalspace = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.burnedContracts = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.keybaseIdentity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.authClaimers.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Providers {
    return {
      address: isSet(object.address) ? gt.String(object.address) : "",
      ip: isSet(object.ip) ? gt.String(object.ip) : "",
      totalspace: isSet(object.totalspace) ? gt.String(object.totalspace) : "",
      burnedContracts: isSet(object.burnedContracts) ? gt.String(object.burnedContracts) : "",
      creator: isSet(object.creator) ? gt.String(object.creator) : "",
      keybaseIdentity: isSet(object.keybaseIdentity) ? gt.String(object.keybaseIdentity) : "",
      authClaimers: gt.Array.isArray(object?.authClaimers) ? object.authClaimers.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: Providers): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.totalspace !== "") {
      obj.totalspace = message.totalspace;
    }
    if (message.burnedContracts !== "") {
      obj.burnedContracts = message.burnedContracts;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.keybaseIdentity !== "") {
      obj.keybaseIdentity = message.keybaseIdentity;
    }
    if (message.authClaimers?.length) {
      obj.authClaimers = message.authClaimers;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Providers>, I>>(base?: I): Providers {
    return Providers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Providers>, I>>(object: I): Providers {
    const message = createBaseProviders();
    message.address = object.address ?? "";
    message.ip = object.ip ?? "";
    message.totalspace = object.totalspace ?? "";
    message.burnedContracts = object.burnedContracts ?? "";
    message.creator = object.creator ?? "";
    message.keybaseIdentity = object.keybaseIdentity ?? "";
    message.authClaimers = object.authClaimers?.map((e) => e) || [];
    return message;
  },
};

function createBaseActiveProviders(): ActiveProviders {
  return { address: "" };
}

export const ActiveProviders = {
  encode(message: ActiveProviders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveProviders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveProviders();
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

  fromJSON(object: any): ActiveProviders {
    return { address: isSet(object.address) ? gt.String(object.address) : "" };
  },

  toJSON(message: ActiveProviders): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActiveProviders>, I>>(base?: I): ActiveProviders {
    return ActiveProviders.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActiveProviders>, I>>(object: I): ActiveProviders {
    const message = createBaseActiveProviders();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseAttestation(): Attestation {
  return { provider: "", complete: false };
}

export const Attestation = {
  encode(message: Attestation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.complete === true) {
      writer.uint32(16).bool(message.complete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attestation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.complete = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attestation {
    return {
      provider: isSet(object.provider) ? gt.String(object.provider) : "",
      complete: isSet(object.complete) ? gt.Boolean(object.complete) : false,
    };
  },

  toJSON(message: Attestation): unknown {
    const obj: any = {};
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    if (message.complete === true) {
      obj.complete = message.complete;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Attestation>, I>>(base?: I): Attestation {
    return Attestation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Attestation>, I>>(object: I): Attestation {
    const message = createBaseAttestation();
    message.provider = object.provider ?? "";
    message.complete = object.complete ?? false;
    return message;
  },
};

function createBaseAttestationForm(): AttestationForm {
  return { attestations: [], prover: "", merkle: new Uint8Array(0), owner: "", start: 0 };
}

export const AttestationForm = {
  encode(message: AttestationForm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttestationForm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestationForm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attestations.push(Attestation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AttestationForm {
    return {
      attestations: gt.Array.isArray(object?.attestations)
        ? object.attestations.map((e: any) => Attestation.fromJSON(e))
        : [],
      prover: isSet(object.prover) ? gt.String(object.prover) : "",
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
    };
  },

  toJSON(message: AttestationForm): unknown {
    const obj: any = {};
    if (message.attestations?.length) {
      obj.attestations = message.attestations.map((e) => Attestation.toJSON(e));
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

  create<I extends Exact<DeepPartial<AttestationForm>, I>>(base?: I): AttestationForm {
    return AttestationForm.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttestationForm>, I>>(object: I): AttestationForm {
    const message = createBaseAttestationForm();
    message.attestations = object.attestations?.map((e) => Attestation.fromPartial(e)) || [];
    message.prover = object.prover ?? "";
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseReportForm(): ReportForm {
  return { attestations: [], prover: "", merkle: new Uint8Array(0), owner: "", start: 0 };
}

export const ReportForm = {
  encode(message: ReportForm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportForm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportForm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attestations.push(Attestation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ReportForm {
    return {
      attestations: gt.Array.isArray(object?.attestations)
        ? object.attestations.map((e: any) => Attestation.fromJSON(e))
        : [],
      prover: isSet(object.prover) ? gt.String(object.prover) : "",
      merkle: isSet(object.merkle) ? bytesFromBase64(object.merkle) : new Uint8Array(0),
      owner: isSet(object.owner) ? gt.String(object.owner) : "",
      start: isSet(object.start) ? gt.Number(object.start) : 0,
    };
  },

  toJSON(message: ReportForm): unknown {
    const obj: any = {};
    if (message.attestations?.length) {
      obj.attestations = message.attestations.map((e) => Attestation.toJSON(e));
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

  create<I extends Exact<DeepPartial<ReportForm>, I>>(base?: I): ReportForm {
    return ReportForm.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReportForm>, I>>(object: I): ReportForm {
    const message = createBaseReportForm();
    message.attestations = object.attestations?.map((e) => Attestation.fromPartial(e)) || [];
    message.prover = object.prover ?? "";
    message.merkle = object.merkle ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseCollateral(): Collateral {
  return { address: "", amount: 0 };
}

export const Collateral = {
  encode(message: Collateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collateral {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateral();
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

          message.amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Collateral {
    return {
      address: isSet(object.address) ? gt.String(object.address) : "",
      amount: isSet(object.amount) ? gt.Number(object.amount) : 0,
    };
  },

  toJSON(message: Collateral): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Collateral>, I>>(base?: I): Collateral {
    return Collateral.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Collateral>, I>>(object: I): Collateral {
    const message = createBaseCollateral();
    message.address = object.address ?? "";
    message.amount = object.amount ?? 0;
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
  if (gt.Buffer) {
    return Uint8Array.from(gt.Buffer.from(b64, "base64"));
  } else {
    const bin = gt.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (gt.Buffer) {
    return gt.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(gt.String.fromCharCode(byte));
    });
    return gt.btoa(bin.join(""));
  }
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
