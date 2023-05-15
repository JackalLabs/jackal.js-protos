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
  MsgUpdate
} from '@/postgen/canine_chain/rns/tx'
import { EncodeObject } from '@cosmjs/proto-signing'
import ITypeTuple from '@/interfaces/ITypeTuple'

const rnsTypes: ITypeTuple = {
  acceptBid: ['/canine_chain.rns.MsgAcceptBid', MsgAcceptBid],
  addRecord: ['/canine_chain.rns.MsgAddRecord', MsgAddRecord],
  bid: ['/canine_chain.rns.MsgBid', MsgBid],
  buy: ['/canine_chain.rns.MsgBuy', MsgBuy],
  cancelBid: ['/canine_chain.rns.MsgCancelBid', MsgCancelBid],
  delist: ['/canine_chain.rns.MsgDelist', MsgDelist],
  delRecord: ['/canine_chain.rns.MsgDelRecord', MsgDelRecord],
  init: ['/canine_chain.rns.MsgInit', MsgInit],
  list: ['/canine_chain.rns.MsgList', MsgList],
  register: ['/canine_chain.rns.MsgRegister', MsgRegister],
  transfer: ['/canine_chain.rns.MsgTransfer', MsgTransfer],
  update: ['/canine_chain.rns.MsgUpdate', MsgUpdate]
}

export default rnsTypes

export interface ITxRns {
  msgAcceptBid(data: MsgAcceptBid): EncodeObject
  msgAddRecord(data: MsgAddRecord): EncodeObject
  msgBid(data: MsgBid): EncodeObject
  msgBuy(data: MsgBuy): EncodeObject
  msgCancelBid(data: MsgCancelBid): EncodeObject
  msgDelist(data: MsgDelist): EncodeObject
  msgDelRecord(data: MsgDelRecord): EncodeObject
  msgInit(data: MsgInit): EncodeObject
  msgList(data: MsgList): EncodeObject
  msgRegister(data: MsgRegister): EncodeObject
  msgTransfer(data: MsgTransfer): EncodeObject
  msgUpdate(data: MsgUpdate): EncodeObject
}

export class TxRns implements ITxRns {
  msgAcceptBid(data: MsgAcceptBid): EncodeObject {
    return {
      typeUrl: rnsTypes.acceptBid[0],
      value: rnsTypes.acceptBid[1].fromPartial(data)
    }
  }
  msgAddRecord(data: MsgAddRecord): EncodeObject {
    return {
      typeUrl: rnsTypes.addRecord[0],
      value: rnsTypes.addRecord[1].fromPartial(data)
    }
  }
  msgBid(data: MsgBid): EncodeObject {
    return {
      typeUrl: rnsTypes.bid[0],
      value: rnsTypes.bid[1].fromPartial(data)
    }
  }
  msgBuy(data: MsgBuy): EncodeObject {
    return {
      typeUrl: rnsTypes.buy[0],
      value: rnsTypes.buy[1].fromPartial(data)
    }
  }
  msgCancelBid(data: MsgCancelBid): EncodeObject {
    return {
      typeUrl: rnsTypes.cancelBid[0],
      value: rnsTypes.cancelBid[1].fromPartial(data)
    }
  }
  msgDelist(data: MsgDelist): EncodeObject {
    return {
      typeUrl: rnsTypes.delist[0],
      value: rnsTypes.delist[1].fromPartial(data)
    }
  }
  msgDelRecord(data: MsgDelRecord): EncodeObject {
    return {
      typeUrl: rnsTypes.delRecord[0],
      value: rnsTypes.delRecord[1].fromPartial(data)
    }
  }
  msgInit(data: MsgInit): EncodeObject {
    return {
      typeUrl: rnsTypes.init[0],
      value: rnsTypes.init[1].fromPartial(data)
    }
  }
  msgList(data: MsgList): EncodeObject {
    return {
      typeUrl: rnsTypes.list[0],
      value: rnsTypes.list[1].fromPartial(data)
    }
  }
  msgRegister(data: MsgRegister): EncodeObject {
    return {
      typeUrl: rnsTypes.register[0],
      value: rnsTypes.register[1].fromPartial(data)
    }
  }
  msgTransfer(data: MsgTransfer): EncodeObject {
    return {
      typeUrl: rnsTypes.transfer[0],
      value: rnsTypes.transfer[1].fromPartial(data)
    }
  }
  msgUpdate(data: MsgUpdate): EncodeObject {
    return {
      typeUrl: rnsTypes.update[0],
      value: rnsTypes.update[1].fromPartial(data)
    }
  }
}
