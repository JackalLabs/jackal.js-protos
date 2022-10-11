/* eslint-disable */
import { Grant } from "../../../cosmos/feegrant/v1beta1/feegrant";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.feegrant.v1beta1";

/** Since: cosmos-sdk 0.43 */

/** GenesisState contains a set of fee allowances, persisted from the store */
export interface GenesisState {
  allowances: Grant[];
  free_messages: string[];
}

const baseGenesisState: object = { free_messages: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.free_messages) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.allowances = [];
    message.free_messages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32()));
          break;
        case 2:
          message.free_messages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.allowances = [];
    message.free_messages = [];
    if (object.allowances !== undefined && object.allowances !== null) {
      for (const e of object.allowances) {
        message.allowances.push(Grant.fromJSON(e));
      }
    }
    if (object.free_messages !== undefined && object.free_messages !== null) {
      for (const e of object.free_messages) {
        message.free_messages.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map((e) =>
        e ? Grant.toJSON(e) : undefined
      );
    } else {
      obj.allowances = [];
    }
    if (message.free_messages) {
      obj.free_messages = message.free_messages.map((e) => e);
    } else {
      obj.free_messages = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.allowances = [];
    message.free_messages = [];
    if (object.allowances !== undefined && object.allowances !== null) {
      for (const e of object.allowances) {
        message.allowances.push(Grant.fromPartial(e));
      }
    }
    if (object.free_messages !== undefined && object.free_messages !== null) {
      for (const e of object.free_messages) {
        message.free_messages.push(e);
      }
    }
    return message;
  },
};

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
