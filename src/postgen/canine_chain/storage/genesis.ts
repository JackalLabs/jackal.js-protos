/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ActiveDeals } from "./active_deals";
import { ClientUsage } from "./client_usage";
import { Contracts } from "./contracts";
import { FidCid } from "./fid_cid";
import { Params } from "./params";
import { PayBlocks } from "./pay_blocks";
import { Providers } from "./providers";
import { Strays } from "./strays";

export const protobufPackage = "canine_chain.storage";

/** GenesisState defines the storage module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  contractsList: Contracts[];
  activeDealsList: ActiveDeals[];
  providersList: Providers[];
  payBlocksList: PayBlocks[];
  clientUsageList: ClientUsage[];
  straysList: Strays[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  fidCidList: FidCid[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    contractsList: [],
    activeDealsList: [],
    providersList: [],
    payBlocksList: [],
    clientUsageList: [],
    straysList: [],
    fidCidList: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractsList) {
      Contracts.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.activeDealsList) {
      ActiveDeals.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.providersList) {
      Providers.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.payBlocksList) {
      PayBlocks.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.clientUsageList) {
      ClientUsage.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.straysList) {
      Strays.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.fidCidList) {
      FidCid.encode(v!, writer.uint32(66).fork()).ldelim();
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
          message.contractsList.push(Contracts.decode(reader, reader.uint32()));
          break;
        case 3:
          message.activeDealsList.push(ActiveDeals.decode(reader, reader.uint32()));
          break;
        case 4:
          message.providersList.push(Providers.decode(reader, reader.uint32()));
          break;
        case 5:
          message.payBlocksList.push(PayBlocks.decode(reader, reader.uint32()));
          break;
        case 6:
          message.clientUsageList.push(ClientUsage.decode(reader, reader.uint32()));
          break;
        case 7:
          message.straysList.push(Strays.decode(reader, reader.uint32()));
          break;
        case 8:
          message.fidCidList.push(FidCid.decode(reader, reader.uint32()));
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
      contractsList: Array.isArray(object?.contractsList)
        ? object.contractsList.map((e: any) => Contracts.fromJSON(e))
        : [],
      activeDealsList: Array.isArray(object?.activeDealsList)
        ? object.activeDealsList.map((e: any) => ActiveDeals.fromJSON(e))
        : [],
      providersList: Array.isArray(object?.providersList)
        ? object.providersList.map((e: any) => Providers.fromJSON(e))
        : [],
      payBlocksList: Array.isArray(object?.payBlocksList)
        ? object.payBlocksList.map((e: any) => PayBlocks.fromJSON(e))
        : [],
      clientUsageList: Array.isArray(object?.clientUsageList)
        ? object.clientUsageList.map((e: any) => ClientUsage.fromJSON(e))
        : [],
      straysList: Array.isArray(object?.straysList)
        ? object.straysList.map((e: any) => Strays.fromJSON(e))
        : [],
      fidCidList: Array.isArray(object?.fidCidList) ? object.fidCidList.map((e: any) => FidCid.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.contractsList) {
      obj.contractsList = message.contractsList.map((e) => e ? Contracts.toJSON(e) : undefined);
    } else {
      obj.contractsList = [];
    }
    if (message.activeDealsList) {
      obj.activeDealsList = message.activeDealsList.map((e) => e ? ActiveDeals.toJSON(e) : undefined);
    } else {
      obj.activeDealsList = [];
    }
    if (message.providersList) {
      obj.providersList = message.providersList.map((e) => e ? Providers.toJSON(e) : undefined);
    } else {
      obj.providersList = [];
    }
    if (message.payBlocksList) {
      obj.payBlocksList = message.payBlocksList.map((e) => e ? PayBlocks.toJSON(e) : undefined);
    } else {
      obj.payBlocksList = [];
    }
    if (message.clientUsageList) {
      obj.clientUsageList = message.clientUsageList.map((e) => e ? ClientUsage.toJSON(e) : undefined);
    } else {
      obj.clientUsageList = [];
    }
    if (message.straysList) {
      obj.straysList = message.straysList.map((e) => e ? Strays.toJSON(e) : undefined);
    } else {
      obj.straysList = [];
    }
    if (message.fidCidList) {
      obj.fidCidList = message.fidCidList.map((e) => e ? FidCid.toJSON(e) : undefined);
    } else {
      obj.fidCidList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.contractsList = object.contractsList?.map((e) => Contracts.fromPartial(e)) || [];
    message.activeDealsList = object.activeDealsList?.map((e) => ActiveDeals.fromPartial(e)) || [];
    message.providersList = object.providersList?.map((e) => Providers.fromPartial(e)) || [];
    message.payBlocksList = object.payBlocksList?.map((e) => PayBlocks.fromPartial(e)) || [];
    message.clientUsageList = object.clientUsageList?.map((e) => ClientUsage.fromPartial(e)) || [];
    message.straysList = object.straysList?.map((e) => Strays.fromPartial(e)) || [];
    message.fidCidList = object.fidCidList?.map((e) => FidCid.fromPartial(e)) || [];
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
