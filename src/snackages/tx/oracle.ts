import { MsgCreateFeed, MsgUpdateFeed, protobufPackage } from '@/postGen/canine_chain/oracle/tx'
import type { DEncodeObject, DMsgCreateFeed, DMsgUpdateFeed } from '@/types/msgs'
import type { TJackalModuleTypeMap } from '@/types'

export const oracleTypes: TJackalModuleTypeMap = {
  createFeed: [`/${protobufPackage}.MsgCreateFeed`, MsgCreateFeed],
  updateFeed: [`/${protobufPackage}.MsgUpdateFeed`, MsgUpdateFeed]
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
      value: oracleTypes.createFeed[1].fromPartial(data)
    }
  },
  msgUpdateFeed(data: DMsgUpdateFeed): DEncodeObject {
    return {
      typeUrl: oracleTypes.updateFeed[0],
      value: oracleTypes.updateFeed[1].fromPartial(data)
    }
  }
}
