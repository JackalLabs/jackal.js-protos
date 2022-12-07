/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Files } from "./files";
import { Params } from "./params";
import { Pubkey } from "./pubkey";

export const protobufPackage = "canine_chain.filetree";

/** GenesisState defines the filetree module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  filesList: Files[];
  pubkeyList: Pubkey[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, filesList: [], pubkeyList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.filesList) {
      Files.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.pubkeyList) {
      Pubkey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.filesList.push(Files.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pubkeyList.push(Pubkey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      filesList: Array.isArray(object?.filesList) ? object.filesList.map((e: any) => Files.fromJSON(e)) : [],
      pubkeyList: Array.isArray(object?.pubkeyList) ? object.pubkeyList.map((e: any) => Pubkey.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.filesList) {
      obj.filesList = message.filesList.map((e) => e ? Files.toJSON(e) : undefined);
    } else {
      obj.filesList = [];
    }
    if (message.pubkeyList) {
      obj.pubkeyList = message.pubkeyList.map((e) => e ? Pubkey.toJSON(e) : undefined);
    } else {
      obj.pubkeyList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.filesList = object.filesList?.map((e) => Files.fromPartial(e)) || [];
    message.pubkeyList = object.pubkeyList?.map((e) => Pubkey.fromPartial(e)) || [];
    return message;
  },
};

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