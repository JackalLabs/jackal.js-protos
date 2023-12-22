import {
  MsgAcceptBid,
  MsgAcceptBidResponse,
  MsgAddRecord,
  MsgAddRecordResponse,
  MsgBid,
  MsgBidResponse,
  MsgBuy,
  MsgBuyResponse,
  MsgCancelBid,
  MsgCancelBidResponse,
  MsgDelist,
  MsgDelistResponse,
  MsgDelRecord,
  MsgDelRecordResponse,
  MsgInit,
  MsgInitResponse,
  MsgList,
  MsgListResponse,
  MsgRegister,
  MsgRegisterResponse,
  MsgTransfer,
  MsgTransferResponse,
  MsgUpdate,
  MsgUpdateResponse,
  protobufPackage,
} from '@/postGen/canine_chain/rns/tx'
import type {
  DEncodeObject,
  DMsgAcceptBid,
  DMsgAddRecord,
  DMsgBid,
  DMsgBuy,
  DMsgCancelBid,
  DMsgDelist,
  DMsgDelRecord,
  DMsgInit,
  DMsgList,
  DMsgRegister,
  DMsgTransfer,
  DMsgUpdate,
} from '@/types/msgs'
import type { TJackalModuleTypeMap, TMsgResponseParsers } from '@/types'
import _m0 from 'protobufjs/minimal'

export const rnsTypes: TJackalModuleTypeMap = {
  acceptBid: [`/${protobufPackage}.MsgAcceptBid`, MsgAcceptBid],
  addRecord: [`/${protobufPackage}.MsgAddRecord`, MsgAddRecord],
  bid: [`/${protobufPackage}.MsgBid`, MsgBid],
  buy: [`/${protobufPackage}.MsgBuy`, MsgBuy],
  cancelBid: [`/${protobufPackage}.MsgCancelBid`, MsgCancelBid],
  delist: [`/${protobufPackage}.MsgDelist`, MsgDelist],
  delRecord: [`/${protobufPackage}.MsgDelRecord`, MsgDelRecord],
  init: [`/${protobufPackage}.MsgInit`, MsgInit],
  list: [`/${protobufPackage}.MsgList`, MsgList],
  register: [`/${protobufPackage}.MsgRegister`, MsgRegister],
  transfer: [`/${protobufPackage}.MsgTransfer`, MsgTransfer],
  update: [`/${protobufPackage}.MsgUpdate`, MsgUpdate],
}

export const rnsResponses: TMsgResponseParsers = {
  [rnsTypes.acceptBid[0]]: (data: Uint8Array) =>
    MsgAcceptBidResponse.decode(_m0.Reader.create(data)),
  [rnsTypes.addRecord[0]]: (data: Uint8Array) =>
    MsgAddRecordResponse.decode(_m0.Reader.create(data)),
  [rnsTypes.bid[0]]: (data: Uint8Array) =>
    MsgBidResponse.decode(_m0.Reader.create(data)),
  [rnsTypes.buy[0]]: (data: Uint8Array) =>
    MsgBuyResponse.decode(_m0.Reader.create(data)),
  [rnsTypes.cancelBid[0]]: (data: Uint8Array) =>
    MsgCancelBidResponse.decode(_m0.Reader.create(data)),
  [rnsTypes.delist[0]]: (data: Uint8Array) =>
    MsgDelistResponse.decode(_m0.Reader.create(data)),
  [rnsTypes.delRecord[0]]: (data: Uint8Array) =>
    MsgDelRecordResponse.decode(_m0.Reader.create(data)),
  [rnsTypes.init[0]]: (data: Uint8Array) =>
    MsgInitResponse.decode(_m0.Reader.create(data)),
  [rnsTypes.list[0]]: (data: Uint8Array) =>
    MsgListResponse.decode(_m0.Reader.create(data)),
  [rnsTypes.register[0]]: (data: Uint8Array) =>
    MsgRegisterResponse.decode(_m0.Reader.create(data)),
  [rnsTypes.transfer[0]]: (data: Uint8Array) =>
    MsgTransferResponse.decode(_m0.Reader.create(data)),
  [rnsTypes.update[0]]: (data: Uint8Array) =>
    MsgUpdateResponse.decode(_m0.Reader.create(data)),
}

/**
 * All functions for creating RNS Tx.
 *
 * @property {msgAcceptBid} msgAcceptBid()
 * @property {msgAddRecord} msgAddRecord()
 * @property {msgBid} msgBid()
 * @property {msgBuy} msgBuy()
 * @property {msgCancelBid} msgCancelBid()
 * @property {msgDelist} msgDelist()
 * @property {msgDelRecord} msgDelRecord()
 * @property {msgInit} msgInit()
 * @property {msgList} msgList()
 * @property {msgRegister} msgRegister()
 * @property {msgTransfer} msgTransfer()
 * @property {msgUpdate} msgUpdate()
 */
export type ITxRns = {
  msgAcceptBid(data: DMsgAcceptBid): DEncodeObject
  msgAddRecord(data: DMsgAddRecord): DEncodeObject
  msgBid(data: DMsgBid): DEncodeObject
  msgBuy(data: DMsgBuy): DEncodeObject
  msgCancelBid(data: DMsgCancelBid): DEncodeObject
  msgDelist(data: DMsgDelist): DEncodeObject
  msgDelRecord(data: DMsgDelRecord): DEncodeObject
  msgInit(data: DMsgInit): DEncodeObject
  msgList(data: DMsgList): DEncodeObject
  msgRegister(data: DMsgRegister): DEncodeObject
  msgTransfer(data: DMsgTransfer): DEncodeObject
  msgUpdate(data: DMsgUpdate): DEncodeObject
}

export const TxRns: ITxRns = {
  msgAcceptBid(data: DMsgAcceptBid): DEncodeObject {
    return {
      typeUrl: rnsTypes.acceptBid[0],
      value: rnsTypes.acceptBid[1].fromPartial(data),
    }
  },
  msgAddRecord(data: DMsgAddRecord): DEncodeObject {
    return {
      typeUrl: rnsTypes.addRecord[0],
      value: rnsTypes.addRecord[1].fromPartial(data),
    }
  },
  msgBid(data: DMsgBid): DEncodeObject {
    return {
      typeUrl: rnsTypes.bid[0],
      value: rnsTypes.bid[1].fromPartial(data),
    }
  },
  msgBuy(data: DMsgBuy): DEncodeObject {
    return {
      typeUrl: rnsTypes.buy[0],
      value: rnsTypes.buy[1].fromPartial(data),
    }
  },
  msgCancelBid(data: DMsgCancelBid): DEncodeObject {
    return {
      typeUrl: rnsTypes.cancelBid[0],
      value: rnsTypes.cancelBid[1].fromPartial(data),
    }
  },
  msgDelist(data: DMsgDelist): DEncodeObject {
    return {
      typeUrl: rnsTypes.delist[0],
      value: rnsTypes.delist[1].fromPartial(data),
    }
  },
  msgDelRecord(data: DMsgDelRecord): DEncodeObject {
    return {
      typeUrl: rnsTypes.delRecord[0],
      value: rnsTypes.delRecord[1].fromPartial(data),
    }
  },
  msgInit(data: DMsgInit): DEncodeObject {
    return {
      typeUrl: rnsTypes.init[0],
      value: rnsTypes.init[1].fromPartial(data),
    }
  },
  msgList(data: DMsgList): DEncodeObject {
    return {
      typeUrl: rnsTypes.list[0],
      value: rnsTypes.list[1].fromPartial(data),
    }
  },
  msgRegister(data: DMsgRegister): DEncodeObject {
    return {
      typeUrl: rnsTypes.register[0],
      value: rnsTypes.register[1].fromPartial(data),
    }
  },
  msgTransfer(data: DMsgTransfer): DEncodeObject {
    return {
      typeUrl: rnsTypes.transfer[0],
      value: rnsTypes.transfer[1].fromPartial(data),
    }
  },
  msgUpdate(data: DMsgUpdate): DEncodeObject {
    return {
      typeUrl: rnsTypes.update[0],
      value: rnsTypes.update[1].fromPartial(data),
    }
  },
}
