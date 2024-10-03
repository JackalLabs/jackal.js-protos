import _m0 from 'protobufjs/minimal'
import type { DEncodeObject } from '@/types/msgs'
import type { TJackalModuleTypeMap, TMsgResponseParsers } from '@/types'
import {
  MsgTransfer,
  protobufPackage,
} from '@/postGen/ibc/applications/transfer/v1/tx'

export const ibcTypes: TJackalModuleTypeMap = {
  transfer: [`/${protobufPackage}.MsgTransfer`, MsgTransfer],
}

export const ibcResponses: TMsgResponseParsers = {
  [ibcTypes.transfer[0]]: (data: Uint8Array) =>
    MsgTransfer.decode(_m0.Reader.create(data)),
}

/**
 * All functions for creating IBC Tx.
 *
 * @property {msgTransfer} msgTransfer()
 */
export type ITxIbc = {
  msgTransfer(data: MsgTransfer): DEncodeObject
}

export const TxIbc: ITxIbc = {
  msgTransfer(data: MsgTransfer): DEncodeObject {
    return {
      typeUrl: ibcTypes.transfer[0],
      value: ibcTypes.transfer[1].fromPartial(data),
    }
  },
}
