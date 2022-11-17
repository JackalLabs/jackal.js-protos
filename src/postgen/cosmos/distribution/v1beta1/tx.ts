/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
import { Params } from "./distribution";

export const protobufPackage = "cosmos.distribution.v1beta1";

/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
  delegatorAddress: string;
  withdrawAddress: string;
}

/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponse {
}

/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
  delegatorAddress: string;
  validatorAddress: string;
}

/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponse {
  /** Since: cosmos-sdk 0.46 */
  amount: Coin[];
}

/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
  validatorAddress: string;
}

/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 */
export interface MsgWithdrawValidatorCommissionResponse {
  /** Since: cosmos-sdk 0.46 */
  amount: Coin[];
}

/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
  amount: Coin[];
  depositor: string;
}

/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {
}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/distribution parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}

/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpend {
  /** authority is the address of the governance account. */
  authority: string;
  recipient: string;
  amount: Coin[];
}

/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendResponse {
}

function createBaseMsgSetWithdrawAddress(): MsgSetWithdrawAddress {
  return { delegatorAddress: "", withdrawAddress: "" };
}

export const MsgSetWithdrawAddress = {
  encode(message: MsgSetWithdrawAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetWithdrawAddress {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
    };
  },

  toJSON(message: MsgSetWithdrawAddress): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddress>, I>>(object: I): MsgSetWithdrawAddress {
    const message = createBaseMsgSetWithdrawAddress();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
};

function createBaseMsgSetWithdrawAddressResponse(): MsgSetWithdrawAddressResponse {
  return {};
}

export const MsgSetWithdrawAddressResponse = {
  encode(_: MsgSetWithdrawAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddressResponse();
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

  fromJSON(_: any): MsgSetWithdrawAddressResponse {
    return {};
  },

  toJSON(_: MsgSetWithdrawAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddressResponse>, I>>(_: I): MsgSetWithdrawAddressResponse {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  },
};

function createBaseMsgWithdrawDelegatorReward(): MsgWithdrawDelegatorReward {
  return { delegatorAddress: "", validatorAddress: "" };
}

export const MsgWithdrawDelegatorReward = {
  encode(message: MsgWithdrawDelegatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawDelegatorReward {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
    };
  },

  toJSON(message: MsgWithdrawDelegatorReward): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegatorReward>, I>>(object: I): MsgWithdrawDelegatorReward {
    const message = createBaseMsgWithdrawDelegatorReward();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseMsgWithdrawDelegatorRewardResponse(): MsgWithdrawDelegatorRewardResponse {
  return { amount: [] };
}

export const MsgWithdrawDelegatorRewardResponse = {
  encode(message: MsgWithdrawDelegatorRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawDelegatorRewardResponse {
    return { amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: MsgWithdrawDelegatorRewardResponse): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegatorRewardResponse>, I>>(
    object: I,
  ): MsgWithdrawDelegatorRewardResponse {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgWithdrawValidatorCommission(): MsgWithdrawValidatorCommission {
  return { validatorAddress: "" };
}

export const MsgWithdrawValidatorCommission = {
  encode(message: MsgWithdrawValidatorCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawValidatorCommission {
    return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
  },

  toJSON(message: MsgWithdrawValidatorCommission): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawValidatorCommission>, I>>(
    object: I,
  ): MsgWithdrawValidatorCommission {
    const message = createBaseMsgWithdrawValidatorCommission();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseMsgWithdrawValidatorCommissionResponse(): MsgWithdrawValidatorCommissionResponse {
  return { amount: [] };
}

export const MsgWithdrawValidatorCommissionResponse = {
  encode(message: MsgWithdrawValidatorCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawValidatorCommissionResponse {
    return { amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: MsgWithdrawValidatorCommissionResponse): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawValidatorCommissionResponse>, I>>(
    object: I,
  ): MsgWithdrawValidatorCommissionResponse {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgFundCommunityPool(): MsgFundCommunityPool {
  return { amount: [], depositor: "" };
}

export const MsgFundCommunityPool = {
  encode(message: MsgFundCommunityPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCommunityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFundCommunityPool {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
    };
  },

  toJSON(message: MsgFundCommunityPool): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPool>, I>>(object: I): MsgFundCommunityPool {
    const message = createBaseMsgFundCommunityPool();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.depositor = object.depositor ?? "";
    return message;
  },
};

function createBaseMsgFundCommunityPoolResponse(): MsgFundCommunityPoolResponse {
  return {};
}

export const MsgFundCommunityPoolResponse = {
  encode(_: MsgFundCommunityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPoolResponse();
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

  fromJSON(_: any): MsgFundCommunityPoolResponse {
    return {};
  },

  toJSON(_: MsgFundCommunityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPoolResponse>, I>>(_: I): MsgFundCommunityPoolResponse {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgCommunityPoolSpend(): MsgCommunityPoolSpend {
  return { authority: "", recipient: "", amount: [] };
}

export const MsgCommunityPoolSpend = {
  encode(message: MsgCommunityPoolSpend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommunityPoolSpend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommunityPoolSpend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCommunityPoolSpend {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgCommunityPoolSpend): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCommunityPoolSpend>, I>>(object: I): MsgCommunityPoolSpend {
    const message = createBaseMsgCommunityPoolSpend();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCommunityPoolSpendResponse(): MsgCommunityPoolSpendResponse {
  return {};
}

export const MsgCommunityPoolSpendResponse = {
  encode(_: MsgCommunityPoolSpendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommunityPoolSpendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommunityPoolSpendResponse();
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

  fromJSON(_: any): MsgCommunityPoolSpendResponse {
    return {};
  },

  toJSON(_: MsgCommunityPoolSpendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCommunityPoolSpendResponse>, I>>(_: I): MsgCommunityPoolSpendResponse {
    const message = createBaseMsgCommunityPoolSpendResponse();
    return message;
  },
};

/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  SetWithdrawAddress(
    request: DeepPartial<MsgSetWithdrawAddress>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSetWithdrawAddressResponse>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  WithdrawDelegatorReward(
    request: DeepPartial<MsgWithdrawDelegatorReward>,
    metadata?: grpc.Metadata,
  ): Promise<MsgWithdrawDelegatorRewardResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  WithdrawValidatorCommission(
    request: DeepPartial<MsgWithdrawValidatorCommission>,
    metadata?: grpc.Metadata,
  ): Promise<MsgWithdrawValidatorCommissionResponse>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  FundCommunityPool(
    request: DeepPartial<MsgFundCommunityPool>,
    metadata?: grpc.Metadata,
  ): Promise<MsgFundCommunityPoolResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/distribution
   * module parameters. The authority is defined in the keeper.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  /**
   * CommunityPoolSpend defines a governance operation for sending tokens from
   * the community pool in the x/distribution module to another account, which
   * could be the governance module itself. The authority is defined in the
   * keeper.
   *
   * Since: cosmos-sdk 0.47
   */
  CommunityPoolSpend(
    request: DeepPartial<MsgCommunityPoolSpend>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCommunityPoolSpendResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this);
    this.WithdrawDelegatorReward = this.WithdrawDelegatorReward.bind(this);
    this.WithdrawValidatorCommission = this.WithdrawValidatorCommission.bind(this);
    this.FundCommunityPool = this.FundCommunityPool.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CommunityPoolSpend = this.CommunityPoolSpend.bind(this);
  }

  SetWithdrawAddress(
    request: DeepPartial<MsgSetWithdrawAddress>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSetWithdrawAddressResponse> {
    return this.rpc.unary(MsgSetWithdrawAddressDesc, MsgSetWithdrawAddress.fromPartial(request), metadata);
  }

  WithdrawDelegatorReward(
    request: DeepPartial<MsgWithdrawDelegatorReward>,
    metadata?: grpc.Metadata,
  ): Promise<MsgWithdrawDelegatorRewardResponse> {
    return this.rpc.unary(MsgWithdrawDelegatorRewardDesc, MsgWithdrawDelegatorReward.fromPartial(request), metadata);
  }

  WithdrawValidatorCommission(
    request: DeepPartial<MsgWithdrawValidatorCommission>,
    metadata?: grpc.Metadata,
  ): Promise<MsgWithdrawValidatorCommissionResponse> {
    return this.rpc.unary(
      MsgWithdrawValidatorCommissionDesc,
      MsgWithdrawValidatorCommission.fromPartial(request),
      metadata,
    );
  }

  FundCommunityPool(
    request: DeepPartial<MsgFundCommunityPool>,
    metadata?: grpc.Metadata,
  ): Promise<MsgFundCommunityPoolResponse> {
    return this.rpc.unary(MsgFundCommunityPoolDesc, MsgFundCommunityPool.fromPartial(request), metadata);
  }

  UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
  }

  CommunityPoolSpend(
    request: DeepPartial<MsgCommunityPoolSpend>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCommunityPoolSpendResponse> {
    return this.rpc.unary(MsgCommunityPoolSpendDesc, MsgCommunityPoolSpend.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "cosmos.distribution.v1beta1.Msg" };

export const MsgSetWithdrawAddressDesc: UnaryMethodDefinitionish = {
  methodName: "SetWithdrawAddress",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetWithdrawAddress.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetWithdrawAddressResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgWithdrawDelegatorRewardDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawDelegatorReward",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgWithdrawDelegatorReward.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgWithdrawDelegatorRewardResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgWithdrawValidatorCommissionDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawValidatorCommission",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgWithdrawValidatorCommission.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgWithdrawValidatorCommissionResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgFundCommunityPoolDesc: UnaryMethodDefinitionish = {
  methodName: "FundCommunityPool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgFundCommunityPool.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgFundCommunityPoolResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpdateParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateParams",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateParams.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgCommunityPoolSpendDesc: UnaryMethodDefinitionish = {
  methodName: "CommunityPoolSpend",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCommunityPoolSpend.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCommunityPoolSpendResponse.decode(data),
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
