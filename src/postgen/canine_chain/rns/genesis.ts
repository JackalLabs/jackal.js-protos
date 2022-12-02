/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Bids } from "./bids";
import { Forsale } from "./forsale";
import { Init } from "./init";
import { Names } from "./names";
import { Params } from "./params";
import { Whois } from "./whois";

export const protobufPackage = "jackaldao.canine.rns";

/** GenesisState defines the rns module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  whoisList: Whois[];
  namesList: Names[];
  bidsList: Bids[];
  forsaleList: Forsale[];
  initList: Init[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, whoisList: [], namesList: [], bidsList: [], forsaleList: [], initList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.whoisList) {
      Whois.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.namesList) {
      Names.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.bidsList) {
      Bids.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forsaleList) {
      Forsale.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.initList) {
      Init.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.whoisList.push(Whois.decode(reader, reader.uint32()));
          break;
        case 3:
          message.namesList.push(Names.decode(reader, reader.uint32()));
          break;
        case 4:
          message.bidsList.push(Bids.decode(reader, reader.uint32()));
          break;
        case 5:
          message.forsaleList.push(Forsale.decode(reader, reader.uint32()));
          break;
        case 6:
          message.initList.push(Init.decode(reader, reader.uint32()));
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
      whoisList: Array.isArray(object?.whoisList) ? object.whoisList.map((e: any) => Whois.fromJSON(e)) : [],
      namesList: Array.isArray(object?.namesList) ? object.namesList.map((e: any) => Names.fromJSON(e)) : [],
      bidsList: Array.isArray(object?.bidsList) ? object.bidsList.map((e: any) => Bids.fromJSON(e)) : [],
      forsaleList: Array.isArray(object?.forsaleList) ? object.forsaleList.map((e: any) => Forsale.fromJSON(e)) : [],
      initList: Array.isArray(object?.initList) ? object.initList.map((e: any) => Init.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.whoisList) {
      obj.whoisList = message.whoisList.map((e) => e ? Whois.toJSON(e) : undefined);
    } else {
      obj.whoisList = [];
    }
    if (message.namesList) {
      obj.namesList = message.namesList.map((e) => e ? Names.toJSON(e) : undefined);
    } else {
      obj.namesList = [];
    }
    if (message.bidsList) {
      obj.bidsList = message.bidsList.map((e) => e ? Bids.toJSON(e) : undefined);
    } else {
      obj.bidsList = [];
    }
    if (message.forsaleList) {
      obj.forsaleList = message.forsaleList.map((e) => e ? Forsale.toJSON(e) : undefined);
    } else {
      obj.forsaleList = [];
    }
    if (message.initList) {
      obj.initList = message.initList.map((e) => e ? Init.toJSON(e) : undefined);
    } else {
      obj.initList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.whoisList = object.whoisList?.map((e) => Whois.fromPartial(e)) || [];
    message.namesList = object.namesList?.map((e) => Names.fromPartial(e)) || [];
    message.bidsList = object.bidsList?.map((e) => Bids.fromPartial(e)) || [];
    message.forsaleList = object.forsaleList?.map((e) => Forsale.fromPartial(e)) || [];
    message.initList = object.initList?.map((e) => Init.fromPartial(e)) || [];
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
