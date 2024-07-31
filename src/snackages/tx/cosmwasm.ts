import {
  MsgExecuteContract,
  MsgExecuteContractResponse,
  MsgInstantiateContract,
  MsgInstantiateContractResponse,
  protobufPackage,
} from '@/postGen/cosmwasm/wasm/v1/tx'
import type {
  DEncodeObject,
  DMsgExecuteContract,
  DMsgInstantiateContract,
} from '@/types/msgs'
import type { TJackalModuleTypeMap, TMsgResponseParsers } from '@/types'
import _m0 from 'protobufjs/minimal'
import { uintArrayToString } from '@/utils/converters'

export const cosmwasmTypes: TJackalModuleTypeMap = {
  executeContract: [
    `/${protobufPackage}.MsgExecuteContract`,
    MsgExecuteContract,
  ],
  instantiateContract: [
    `/${protobufPackage}.MsgInstantiateContract`,
    MsgInstantiateContract,
  ],
}

export const cosmwasmResponses: TMsgResponseParsers = {
  [cosmwasmTypes.executeContract[0]]: (data: Uint8Array) =>
    MsgExecuteContractResponse.decode(_m0.Reader.create(data)),
  [cosmwasmTypes.instantiateContract[0]]: (data: Uint8Array) =>
    MsgInstantiateContractResponse.decode(_m0.Reader.create(data)),
}

/**
 * All functions for creating Notifications Tx.
 *
 * @property {msgCreateNotification} msgCreateNotification()
 * @property {msgDeleteNotification} msgDeleteNotification()
 */
export type ITxCosmwasm = {
  msgExecuteContract(data: DMsgExecuteContract): DEncodeObject
  msgInstantiateContract(data: DMsgInstantiateContract): DEncodeObject
  writerExecuteContract(data: DMsgExecuteContract): DEncodeObject
  writerInstantiateContract(data: DMsgInstantiateContract): DEncodeObject
}

export const TxCosmwasm: ITxCosmwasm = {
  msgExecuteContract(data: DMsgExecuteContract): DEncodeObject {
    return {
      typeUrl: cosmwasmTypes.executeContract[0],
      value: cosmwasmTypes.executeContract[1].fromPartial(data),
    }
  },
  msgInstantiateContract(data: DMsgInstantiateContract): DEncodeObject {
    return {
      typeUrl: cosmwasmTypes.instantiateContract[0],
      value: cosmwasmTypes.instantiateContract[1].fromPartial(data),
    }
  },
  writerExecuteContract(data: DMsgExecuteContract): DEncodeObject {
    try {
      const asWriter = cosmwasmTypes.executeContract[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: cosmwasmTypes.executeContract[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerInstantiateContract(data: DMsgInstantiateContract): DEncodeObject {
    try {
      const asWriter = cosmwasmTypes.instantiateContract[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: cosmwasmTypes.instantiateContract[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
}
