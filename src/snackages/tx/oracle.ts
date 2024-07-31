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
import { uintArrayToString } from '@/utils/converters'

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
  writerCreateFeed(data: DMsgCreateFeed): DEncodeObject
  writerUpdateFeed(data: DMsgUpdateFeed): DEncodeObject
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
  writerCreateFeed(data: DMsgCreateFeed): DEncodeObject {
    try {
      const asWriter = oracleTypes.createFeed[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: oracleTypes.createFeed[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerUpdateFeed(data: DMsgUpdateFeed): DEncodeObject {
    try {
      const asWriter = oracleTypes.updateFeed[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: oracleTypes.updateFeed[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
}
