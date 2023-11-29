import type { IJackalModuleTypeMap } from '@/interfaces/IJackalModuleTypeMap'
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
  DMsgUpdate
} from '@/types/msgs'
import {
  MsgAcceptBid,
  MsgAddRecord,
  MsgBid,
  MsgBuy,
  MsgCancelBid,
  MsgDelist,
  MsgDelRecord,
  MsgInit,
  MsgList,
  MsgRegister,
  MsgTransfer,
  MsgUpdate,
  protobufPackage
} from '@/postgen/canine_chain/rns/tx'

export const rnsTypes: IJackalModuleTypeMap = {
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
  update: [`/${protobufPackage}.MsgUpdate`, MsgUpdate]
}

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
      value: rnsTypes.acceptBid[1].fromPartial(data)
    }
  },
  msgAddRecord(data: DMsgAddRecord): DEncodeObject {
    return {
      typeUrl: rnsTypes.addRecord[0],
      value: rnsTypes.addRecord[1].fromPartial(data)
    }
  },
  msgBid(data: DMsgBid): DEncodeObject {
    return {
      typeUrl: rnsTypes.bid[0],
      value: rnsTypes.bid[1].fromPartial(data)
    }
  },
  msgBuy(data: DMsgBuy): DEncodeObject {
    return {
      typeUrl: rnsTypes.buy[0],
      value: rnsTypes.buy[1].fromPartial(data)
    }
  },
  msgCancelBid(data: DMsgCancelBid): DEncodeObject {
    return {
      typeUrl: rnsTypes.cancelBid[0],
      value: rnsTypes.cancelBid[1].fromPartial(data)
    }
  },
  msgDelist(data: DMsgDelist): DEncodeObject {
    return {
      typeUrl: rnsTypes.delist[0],
      value: rnsTypes.delist[1].fromPartial(data)
    }
  },
  msgDelRecord(data: DMsgDelRecord): DEncodeObject {
    return {
      typeUrl: rnsTypes.delRecord[0],
      value: rnsTypes.delRecord[1].fromPartial(data)
    }
  },
  msgInit(data: DMsgInit): DEncodeObject {
    return {
      typeUrl: rnsTypes.init[0],
      value: rnsTypes.init[1].fromPartial(data)
    }
  },
  msgList(data: DMsgList): DEncodeObject {
    return {
      typeUrl: rnsTypes.list[0],
      value: rnsTypes.list[1].fromPartial(data)
    }
  },
  msgRegister(data: DMsgRegister): DEncodeObject {
    return {
      typeUrl: rnsTypes.register[0],
      value: rnsTypes.register[1].fromPartial(data)
    }
  },
  msgTransfer(data: DMsgTransfer): DEncodeObject {
    return {
      typeUrl: rnsTypes.transfer[0],
      value: rnsTypes.transfer[1].fromPartial(data)
    }
  },
  msgUpdate(data: DMsgUpdate): DEncodeObject {
    return {
      typeUrl: rnsTypes.update[0],
      value: rnsTypes.update[1].fromPartial(data)
    }
  }
}
