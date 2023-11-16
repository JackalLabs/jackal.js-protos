/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { UnifiedFile } from "./active_deals";
import { Params } from "./params";
import { StoragePaymentInfo } from "./payment_info";
import { ActiveProviders, AttestationForm, Collateral, Providers, ReportForm } from "./providers";

export const protobufPackage = "canine_chain.storage";

export interface GenesisState {
  params: Params | undefined;
  fileList: UnifiedFile[];
  providersList: Providers[];
  paymentInfoList: StoragePaymentInfo[];
  collateralList: Collateral[];
  activeProvidersList: ActiveProviders[];
  reportForms: ReportForm[];
  attestForms: AttestationForm[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    fileList: [],
    providersList: [],
    paymentInfoList: [],
    collateralList: [],
    activeProvidersList: [],
    reportForms: [],
    attestForms: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.fileList) {
      UnifiedFile.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.providersList) {
      Providers.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.paymentInfoList) {
      StoragePaymentInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.collateralList) {
      Collateral.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.activeProvidersList) {
      ActiveProviders.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.reportForms) {
      ReportForm.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.attestForms) {
      AttestationForm.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fileList.push(UnifiedFile.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.providersList.push(Providers.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.paymentInfoList.push(StoragePaymentInfo.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.collateralList.push(Collateral.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.activeProvidersList.push(ActiveProviders.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.reportForms.push(ReportForm.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.attestForms.push(AttestationForm.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      fileList: gt.Array.isArray(object?.fileList) ? object.fileList.map((e: any) => UnifiedFile.fromJSON(e)) : [],
      providersList: gt.Array.isArray(object?.providersList)
        ? object.providersList.map((e: any) => Providers.fromJSON(e))
        : [],
      paymentInfoList: gt.Array.isArray(object?.paymentInfoList)
        ? object.paymentInfoList.map((e: any) => StoragePaymentInfo.fromJSON(e))
        : [],
      collateralList: gt.Array.isArray(object?.collateralList)
        ? object.collateralList.map((e: any) => Collateral.fromJSON(e))
        : [],
      activeProvidersList: gt.Array.isArray(object?.activeProvidersList)
        ? object.activeProvidersList.map((e: any) => ActiveProviders.fromJSON(e))
        : [],
      reportForms: gt.Array.isArray(object?.reportForms)
        ? object.reportForms.map((e: any) => ReportForm.fromJSON(e))
        : [],
      attestForms: gt.Array.isArray(object?.attestForms)
        ? object.attestForms.map((e: any) => AttestationForm.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.fileList?.length) {
      obj.fileList = message.fileList.map((e) => UnifiedFile.toJSON(e));
    }
    if (message.providersList?.length) {
      obj.providersList = message.providersList.map((e) => Providers.toJSON(e));
    }
    if (message.paymentInfoList?.length) {
      obj.paymentInfoList = message.paymentInfoList.map((e) => StoragePaymentInfo.toJSON(e));
    }
    if (message.collateralList?.length) {
      obj.collateralList = message.collateralList.map((e) => Collateral.toJSON(e));
    }
    if (message.activeProvidersList?.length) {
      obj.activeProvidersList = message.activeProvidersList.map((e) => ActiveProviders.toJSON(e));
    }
    if (message.reportForms?.length) {
      obj.reportForms = message.reportForms.map((e) => ReportForm.toJSON(e));
    }
    if (message.attestForms?.length) {
      obj.attestForms = message.attestForms.map((e) => AttestationForm.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.fileList = object.fileList?.map((e) => UnifiedFile.fromPartial(e)) || [];
    message.providersList = object.providersList?.map((e) => Providers.fromPartial(e)) || [];
    message.paymentInfoList = object.paymentInfoList?.map((e) => StoragePaymentInfo.fromPartial(e)) || [];
    message.collateralList = object.collateralList?.map((e) => Collateral.fromPartial(e)) || [];
    message.activeProvidersList = object.activeProvidersList?.map((e) => ActiveProviders.fromPartial(e)) || [];
    message.reportForms = object.reportForms?.map((e) => ReportForm.fromPartial(e)) || [];
    message.attestForms = object.attestForms?.map((e) => AttestationForm.fromPartial(e)) || [];
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
