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
import { forAmino, wasAmino } from '@/utils/converters'

export function createRnsAminoConverters (): AminoConverters {
  return {
    '/canine_chain.rns.MsgRegister': {
      aminoType: 'rns/Register',
      toAmino: (value: MsgRegister): AminoMsgRegister['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgRegister['value']): MsgRegister => {
        return wasAmino(value)
      }
    },
    '/canine_chain.rns.MsgUpdate': {
      aminoType: 'rns/Update',
      toAmino: (value: MsgUpdate): AminoMsgUpdate['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgUpdate['value']): MsgUpdate => {
        return wasAmino(value)
      }
    },
    '/canine_chain.rns.MsgBid': {
      aminoType: 'rns/Bid',
      toAmino: (value: MsgBid): AminoMsgBid['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgBid['value']): MsgBid => {
        return wasAmino(value)
      }
    },
    '/canine_chain.rns.MsgAcceptBid': {
      aminoType: 'rns/AcceptBid',
      toAmino: (value: MsgAcceptBid): AminoMsgAcceptBid['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgAcceptBid['value']): MsgAcceptBid => {
        return wasAmino(value)
      }
    },
    '/canine_chain.rns.MsgCancelBid': {
      aminoType: 'rns/CancelBid',
      toAmino: (value: MsgCancelBid): AminoMsgCancelBid['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgCancelBid['value']): MsgCancelBid => {
        return wasAmino(value)
      }
    },
    '/canine_chain.rns.MsgList': {
      aminoType: 'rns/List',
      toAmino: (value: MsgList): AminoMsgList['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgList['value']): MsgList => {
        return wasAmino(value)
      }
    },
    '/canine_chain.rns.MsgBuy': {
      aminoType: 'rns/Buy',
      toAmino: (value: MsgBuy): AminoMsgBuy['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgBuy['value']): MsgBuy => {
        return wasAmino(value)
      }
    },
    '/canine_chain.rns.MsgDelist': {
      aminoType: 'rns/Delist',
      toAmino: (value: MsgDelist): AminoMsgDelist['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgDelist['value']): MsgDelist => {
        return wasAmino(value)
      }
    },
    '/canine_chain.rns.MsgTransfer': {
      aminoType: 'rns/Transfer',
      toAmino: (value: MsgTransfer): AminoMsgTransfer['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgTransfer['value']): MsgTransfer => {
        return wasAmino(value)
      }
    },
    '/canine_chain.rns.MsgAddRecord': {
      aminoType: 'rns/AddRecord',
      toAmino: (value: MsgAddRecord): AminoMsgAddRecord['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgAddRecord['value']): MsgAddRecord => {
        return wasAmino(value)
      }
    },
    '/canine_chain.rns.MsgDelRecord': {
      aminoType: 'rns/DelRecord',
      toAmino: (value: MsgDelRecord): AminoMsgDelRecord['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgDelRecord['value']): MsgDelRecord => {
        return wasAmino(value)
      }
    },
    '/canine_chain.rns.MsgInit': {
      aminoType: 'rns/Init',
      toAmino: (value: MsgInit): AminoMsgInit['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgInit['value']): MsgInit => {
        return wasAmino(value)
      }
    }
  }
}
