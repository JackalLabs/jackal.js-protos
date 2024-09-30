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
  MsgMakePrimary,
  MsgMakePrimaryResponse,
  MsgRegisterName,
  MsgRegisterNameResponse,
  MsgTransfer,
  MsgTransferResponse,
  MsgUpdate,
  MsgUpdateResponse,
  protobufPackage,
} from '@/postGen/canine_chain/rns/tx'
import {
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
  DMsgMakePrimary,
  DMsgRegister,
  DMsgRegisterName,
  DMsgTransfer,
  DMsgUpdate,
} from '@/types/msgs'
import type { TJackalModuleTypeMap, TMsgResponseParsers } from '@/types'
import _m0 from 'protobufjs/minimal'
import { uintArrayToString } from '@/utils/converters'
import { deprecated } from '@/utils/misc'

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
  makePrimary: [`/${protobufPackage}.MsgMakePrimary`, MsgMakePrimary],
  registerName: [`/${protobufPackage}.MsgRegisterName`, MsgRegisterName],
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
  [rnsTypes.makePrimary[0]]: (data: Uint8Array) =>
    MsgMakePrimaryResponse.decode(_m0.Reader.create(data)),
  [rnsTypes.registerName[0]]: (data: Uint8Array) =>
    MsgRegisterNameResponse.decode(_m0.Reader.create(data)),
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
 * @property {msgMakePrimary} msgMakePrimary()
 * @property {msgRegister} msgRegister()
 * @property {msgRegisterName} msgRegisterName()
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
  msgMakePrimary(data: DMsgMakePrimary): DEncodeObject
  msgRegister(data: DMsgRegister): DEncodeObject
  msgRegisterName(data: DMsgRegisterName): DEncodeObject
  msgTransfer(data: DMsgTransfer): DEncodeObject
  msgUpdate(data: DMsgUpdate): DEncodeObject

  writerAcceptBid(data: DMsgAcceptBid): DEncodeObject
  writerAddRecord(data: DMsgAddRecord): DEncodeObject
  writerBid(data: DMsgBid): DEncodeObject
  writerBuy(data: DMsgBuy): DEncodeObject
  writerCancelBid(data: DMsgCancelBid): DEncodeObject
  writerDelist(data: DMsgDelist): DEncodeObject
  writerDelRecord(data: DMsgDelRecord): DEncodeObject
  writerInit(data: DMsgInit): DEncodeObject
  writerList(data: DMsgList): DEncodeObject
  writerMakePrimary(data: DMsgMakePrimary): DEncodeObject
  writerRegister(data: DMsgRegister): DEncodeObject
  writerRegisterName(data: DMsgRegister): DEncodeObject
  writerTransfer(data: DMsgTransfer): DEncodeObject
  writerUpdate(data: DMsgUpdate): DEncodeObject
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
  msgMakePrimary(data: DMsgMakePrimary): DEncodeObject {
    return {
      typeUrl: rnsTypes.makePrimary[0],
      value: rnsTypes.makePrimary[1].fromPartial(data),
    }
  },
  msgRegister(data: DMsgRegister): DEncodeObject {
    throw deprecated('[RNS] msgRegister()', 'v2.2.0', {
      replacement: 'msgRegisterName()',
    })
    return {
      typeUrl: rnsTypes.register[0],
      value: rnsTypes.register[1].fromPartial(data),
    }
  },
  msgRegisterName(data: DMsgRegisterName): DEncodeObject {
    return {
      typeUrl: rnsTypes.registerName[0],
      value: rnsTypes.registerName[1].fromPartial(data),
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
  writerAcceptBid(data: DMsgAcceptBid): DEncodeObject {
    try {
      const asWriter = rnsTypes.acceptBid[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.acceptBid[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerAddRecord(data: DMsgAddRecord): DEncodeObject {
    try {
      const asWriter = rnsTypes.addRecord[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.addRecord[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerBid(data: DMsgBid): DEncodeObject {
    try {
      const asWriter = rnsTypes.bid[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.bid[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerBuy(data: DMsgBuy): DEncodeObject {
    try {
      const asWriter = rnsTypes.buy[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.buy[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerCancelBid(data: DMsgCancelBid): DEncodeObject {
    try {
      const asWriter = rnsTypes.cancelBid[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.cancelBid[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerDelist(data: DMsgDelist): DEncodeObject {
    try {
      const asWriter = rnsTypes.delist[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.delist[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerDelRecord(data: DMsgDelRecord): DEncodeObject {
    try {
      const asWriter = rnsTypes.delRecord[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.delRecord[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerInit(data: DMsgInit): DEncodeObject {
    try {
      const asWriter = rnsTypes.init[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.init[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerList(data: DMsgList): DEncodeObject {
    try {
      const asWriter = rnsTypes.list[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.list[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerMakePrimary(data: DMsgMakePrimary): DEncodeObject {
    try {
      const asWriter = rnsTypes.makePrimary[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.makePrimary[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerRegister(data: DMsgRegister): DEncodeObject {
    throw deprecated('[RNS] writerRegister()', 'v2.2.0', {
      replacement: 'writerRegisterName()',
    })
    try {
      const asWriter = rnsTypes.register[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.register[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerRegisterName(data: DMsgRegisterName): DEncodeObject {
    try {
      const asWriter = rnsTypes.registerName[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.registerName[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerTransfer(data: DMsgTransfer): DEncodeObject {
    try {
      const asWriter = rnsTypes.transfer[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.transfer[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerUpdate(data: DMsgUpdate): DEncodeObject {
    try {
      const asWriter = rnsTypes.update[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: rnsTypes.update[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
}
