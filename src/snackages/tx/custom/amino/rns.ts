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
import {
  AminoMsgAcceptBid,
  AminoMsgAddRecord,
  AminoMsgBid,
  AminoMsgBuy,
  AminoMsgCancelBid,
  AminoMsgDelist,
  AminoMsgDelRecord,
  AminoMsgInit,
  AminoMsgList,
  AminoMsgRegister,
  AminoMsgTransfer,
  AminoMsgUpdate
} from '@/interfaces/amino/IAminoRns'
import { AminoConverters } from '@cosmjs/stargate'

export function createRnsAminoConverters(): AminoConverters {
  return {
    '/canine_chain.rns.MsgRegister': {
      aminoType: 'rns/Register',
      toAmino: (value: MsgRegister): AminoMsgRegister['value'] => ({
        creator: value.creator,
        name: value.name,
        years: value.years,
        data: value.data
      }),
      fromAmino: (value: AminoMsgRegister['value']): MsgRegister => ({
        creator: value.creator,
        name: value.name,
        years: value.years,
        data: value.data
      })
    },
    '/canine_chain.rns.MsgUpdate': {
      aminoType: 'rns/Update',
      toAmino: (value: MsgUpdate): AminoMsgUpdate['value'] => ({
        creator: value.creator,
        name: value.name,
        data: value.data
      }),
      fromAmino: (value: AminoMsgUpdate['value']): MsgUpdate => ({
        creator: value.creator,
        name: value.name,
        data: value.data
      })
    },
    '/canine_chain.rns.MsgBid': {
      aminoType: 'rns/Bid',
      toAmino: (value: MsgBid): AminoMsgBid['value'] => ({
        creator: value.creator,
        name: value.name,
        bid: value.bid
      }),
      fromAmino: (value: AminoMsgBid['value']): MsgBid => ({
        creator: value.creator,
        name: value.name,
        bid: value.bid
      })
    },
    '/canine_chain.rns.MsgAcceptBid': {
      aminoType: 'rns/AcceptBid',
      toAmino: (value: MsgAcceptBid): AminoMsgAcceptBid['value'] => ({
        creator: value.creator,
        name: value.name,
        from: value.from
      }),
      fromAmino: (value: AminoMsgAcceptBid['value']): MsgAcceptBid => ({
        creator: value.creator,
        name: value.name,
        from: value.from
      })
    },
    '/canine_chain.rns.MsgCancelBid': {
      aminoType: 'rns/AminoMsgCancelBid',
      toAmino: (value: MsgCancelBid): AminoMsgCancelBid['value'] => ({
        creator: value.creator,
        name: value.name
      }),
      fromAmino: (value: AminoMsgCancelBid['value']): MsgCancelBid => ({
        creator: value.creator,
        name: value.name
      })
    },
    '/canine_chain.rns.MsgList': {
      aminoType: 'rns/List',
      toAmino: (value: MsgList): AminoMsgList['value'] => ({
        creator: value.creator,
        name: value.name,
        price: value.price
      }),
      fromAmino: (value: AminoMsgList['value']): MsgList => ({
        creator: value.creator,
        name: value.name,
        price: value.price
      })
    },
    '/canine_chain.rns.MsgBuy': {
      aminoType: 'rns/Buy',
      toAmino: (value: MsgBuy): AminoMsgBuy['value'] => ({
        creator: value.creator,
        name: value.name
      }),
      fromAmino: (value: AminoMsgBuy['value']): MsgBuy => ({
        creator: value.creator,
        name: value.name
      })
    },
    '/canine_chain.rns.MsgDelist': {
      aminoType: 'rns/Delist',
      toAmino: (value: MsgDelist): AminoMsgDelist['value'] => ({
        creator: value.creator,
        name: value.name
      }),
      fromAmino: (value: AminoMsgDelist['value']): MsgDelist => ({
        creator: value.creator,
        name: value.name
      })
    },
    '/canine_chain.rns.MsgTransfer': {
      aminoType: 'rns/Transfer',
      toAmino: (value: MsgTransfer): AminoMsgTransfer['value'] => ({
        creator: value.creator,
        name: value.name,
        receiver: value.receiver
      }),
      fromAmino: (value: AminoMsgTransfer['value']): MsgTransfer => ({
        creator: value.creator,
        name: value.name,
        receiver: value.receiver
      })
    },
    '/canine_chain.rns.MsgAddRecord': {
      aminoType: 'rns/AddRecord',
      toAmino: (value: MsgAddRecord): AminoMsgAddRecord['value'] => ({
        creator: value.creator,
        name: value.name,
        value: value.value,
        data: value.data,
        record: value.record
      }),
      fromAmino: (value: AminoMsgAddRecord['value']): MsgAddRecord => ({
        creator: value.creator,
        name: value.name,
        value: value.value,
        data: value.data,
        record: value.record
      })
    },
    '/canine_chain.rns.MsgDelRecord': {
      aminoType: 'rns/DelRecord',
      toAmino: (value: MsgDelRecord): AminoMsgDelRecord['value'] => ({
        creator: value.creator,
        name: value.name
      }),
      fromAmino: (value: AminoMsgDelRecord['value']): MsgDelRecord => ({
        creator: value.creator,
        name: value.name
      })
    },
    '/canine_chain.rns.MsgInit': {
      aminoType: 'rns/Init',
      toAmino: (value: MsgInit): AminoMsgInit['value'] => ({
        creator: value.creator
      }),
      fromAmino: (value: AminoMsgInit['value']): MsgInit => ({
        creator: value.creator
      })
    }
  }
}
