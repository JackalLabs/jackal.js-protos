import _m0 from 'protobufjs/minimal'
import {
  MsgMultiSend,
  MsgMultiSendResponse,
  MsgSend,
  MsgSendResponse,
  protobufPackage,
} from '@/postGen/cosmos/bank/v1beta1/tx'
import type { DEncodeObject } from '@/types/msgs'
import type { TJackalModuleTypeMap, TMsgResponseParsers } from '@/types'

export const bankTypes: TJackalModuleTypeMap = {
  send: [`/${protobufPackage}.MsgSend`, MsgSend],
  multiSend: [`/${protobufPackage}.MsgMultiSend`, MsgMultiSend],
}

export const bankResponses: TMsgResponseParsers = {
  [bankTypes.send[0]]: (data: Uint8Array) =>
    MsgSendResponse.decode(_m0.Reader.create(data)),
  [bankTypes.multiSend[0]]: (data: Uint8Array) =>
    MsgMultiSendResponse.decode(_m0.Reader.create(data)),
}

/**
 * All functions for creating Bank Tx.
 *
 * @property {msgSend} msgSend()
 * @property {msgMultiSend} msgMultiSend()
 */
export type ITxBank = {
  msgSend(data: MsgSend): DEncodeObject
  msgMultiSend(data: MsgMultiSend): DEncodeObject
}

export const TxBank: ITxBank = {
  msgSend(data: MsgSend): DEncodeObject {
    return {
      typeUrl: bankTypes.send[0],
      value: bankTypes.send[1].fromPartial(data),
    }
  },
  msgMultiSend(data: MsgMultiSend): DEncodeObject {
    return {
      typeUrl: bankTypes.multiSend[0],
      value: bankTypes.multiSend[1].fromPartial(data),
    }
  },
}
