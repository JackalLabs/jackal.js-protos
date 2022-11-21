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
  MsgTransfer
} from '@/postgen/canine-chain/rns/tx'
import { EncodeObject } from '@cosmjs/proto-signing'
import ITypeTuple from '@/interfaces/ITypeTuple'

const rnsTypes: ITypeTuple = {
  acceptBid: ['jackaldao.canine.rns.MsgAcceptBid', MsgAcceptBid],
  addRecord: ['jackaldao.canine.rns.MsgAddRecord', MsgAddRecord],
  bid: ['jackaldao.canine.rns.MsgBid', MsgBid],
  buy: ['jackaldao.canine.rns.MsgBuy', MsgBuy],
  cancelBid: ['jackaldao.canine.rns.MsgCancelBid', MsgCancelBid],
  delist: ['jackaldao.canine.rns.MsgDelist', MsgDelist],
  delRecord: ['jackaldao.canine.rns.MsgDelRecord', MsgDelRecord],
  init: ['jackaldao.canine.rns.MsgInit', MsgInit],
  list: ['jackaldao.canine.rns.MsgList', MsgList],
  register: ['jackaldao.canine.rns.MsgRegister', MsgRegister],
  transfer: ['jackaldao.canine.rns.MsgTransfer', MsgTransfer]
}

export default rnsTypes

export interface ITxRns {
  msgAcceptBid (data: MsgAcceptBid): EncodeObject
  msgAddRecord (data: MsgAddRecord): EncodeObject
  msgBid (data: MsgBid): EncodeObject
  msgBuy (data: MsgBuy): EncodeObject
  msgCancelBid (data: MsgCancelBid): EncodeObject
  msgDelist (data: MsgDelist): EncodeObject
  msgDelRecord (data: MsgDelRecord): EncodeObject
  msgInit (data: MsgInit): EncodeObject
  msgList (data: MsgList): EncodeObject
  msgRegister (data: MsgRegister): EncodeObject
  msgTransfer (data: MsgTransfer): EncodeObject
}

export class TxRns implements ITxRns {
  msgAcceptBid (data: MsgAcceptBid): EncodeObject {
    return { typeUrl: rnsTypes.acceptBid[0], value: rnsTypes.acceptBid[1].fromPartial( data ) }
  }
  msgAddRecord (data: MsgAddRecord): EncodeObject {
    return { typeUrl: rnsTypes.addRecord[0], value: rnsTypes.addRecord[1].fromPartial( data ) }
  }
  msgBid (data: MsgBid): EncodeObject {
    return { typeUrl: rnsTypes.bid[0], value: rnsTypes.bid[1].fromPartial( data ) }
  }
  msgBuy (data: MsgBuy): EncodeObject {
    return { typeUrl: rnsTypes.buy[0], value: rnsTypes.buy[1].fromPartial( data ) }
  }
  msgCancelBid (data: MsgCancelBid): EncodeObject {
    return { typeUrl: rnsTypes.cancelBid[0], value: rnsTypes.cancelBid[1].fromPartial( data ) }
  }
  msgDelist (data: MsgDelist): EncodeObject {
    return { typeUrl: rnsTypes.delist[0], value: rnsTypes.delist[1].fromPartial( data ) }
  }
  msgDelRecord (data: MsgDelRecord): EncodeObject {
    return { typeUrl: rnsTypes.delRecord[0], value: rnsTypes.delRecord[1].fromPartial( data ) }
  }
  msgInit (data: MsgInit): EncodeObject {
    return { typeUrl: rnsTypes.init[0], value: rnsTypes.init[1].fromPartial( data ) }
  }
  msgList (data: MsgList): EncodeObject {
    return { typeUrl: rnsTypes.list[0], value: rnsTypes.list[1].fromPartial( data ) }
  }
  msgRegister (data: MsgRegister): EncodeObject {
    return { typeUrl: rnsTypes.register[0], value: rnsTypes.register[1].fromPartial( data ) }
  }
  msgTransfer (data: MsgTransfer): EncodeObject {
    return { typeUrl: rnsTypes.transfer[0], value: rnsTypes.transfer[1].fromPartial( data ) }
  }
}
