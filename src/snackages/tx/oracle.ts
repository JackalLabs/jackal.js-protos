import {
  MsgCreateFeed,
  MsgCreateFeedResponse,
  MsgUpdateFeed,
  MsgUpdateFeedResponse,
  protobufPackage,
} from '@/postGen/canine_chain/oracle/tx'
import type {
  DEncodeObject,
  DMsgCreateFeed,
  DMsgUpdateFeed,
} from '@/types/msgs'
import type { TJackalModuleTypeMap, TMsgResponseParsers } from '@/types'
import _m0 from 'protobufjs/minimal'

export const oracleTypes: TJackalModuleTypeMap = {
  createFeed: [`/${protobufPackage}.MsgCreateFeed`, MsgCreateFeed],
  updateFeed: [`/${protobufPackage}.MsgUpdateFeed`, MsgUpdateFeed],
}

export const oracleResponses: TMsgResponseParsers = {
  [oracleTypes.createFeed[0]]: (data: Uint8Array) =>
    MsgCreateFeedResponse.decode(_m0.Reader.create(data)),
  [oracleTypes.updateFeed[0]]: (data: Uint8Array) =>
    MsgUpdateFeedResponse.decode(_m0.Reader.create(data)),
}

/**
 * All functions for creating Oracle Tx.
 *
 * @property {msgCreateFeed} msgCreateFeed()
 * @property {msgUpdateFeed} msgUpdateFeed()
 */
export type ITxOracle = {
  msgCreateFeed(data: DMsgCreateFeed): DEncodeObject
  msgUpdateFeed(data: DMsgUpdateFeed): DEncodeObject
}

export const TxOracle: ITxOracle = {
  msgCreateFeed(data: DMsgCreateFeed): DEncodeObject {
    return {
      typeUrl: oracleTypes.createFeed[0],
      value: oracleTypes.createFeed[1].fromPartial(data),
    }
  },
  msgUpdateFeed(data: DMsgUpdateFeed): DEncodeObject {
    return {
      typeUrl: oracleTypes.updateFeed[0],
      value: oracleTypes.updateFeed[1].fromPartial(data),
    }
  },
}
