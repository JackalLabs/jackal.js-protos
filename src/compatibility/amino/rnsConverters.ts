import { forAmino, wasAmino } from '@/utils/converters'
import type { AminoConverters } from '@cosmjs/stargate/build/aminotypes'
import type {
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
} from '@/types'

export function createRnsAminoConverters(): AminoConverters {
  return {
    '/canine_chain.rns.MsgAcceptBid': {
      aminoType: 'rns/AcceptBid',
      toAmino: (value: DMsgAcceptBid): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgAcceptBid => {
        return wasAmino(value)
      },
    },
    '/canine_chain.rns.MsgAddRecord': {
      aminoType: 'rns/AddRecord',
      toAmino: (value: DMsgAddRecord): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgAddRecord => {
        return wasAmino(value)
      },
    },
    '/canine_chain.rns.MsgBid': {
      aminoType: 'rns/Bid',
      toAmino: (value: DMsgBid): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgBid => {
        return wasAmino(value)
      },
    },
    '/canine_chain.rns.MsgBuy': {
      aminoType: 'rns/Buy',
      toAmino: (value: DMsgBuy): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgBuy => {
        return wasAmino(value)
      },
    },
    '/canine_chain.rns.MsgCancelBid': {
      aminoType: 'rns/CancelBid',
      toAmino: (value: DMsgCancelBid): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgCancelBid => {
        return wasAmino(value)
      },
    },
    '/canine_chain.rns.MsgDelist': {
      aminoType: 'rns/Delist',
      toAmino: (value: DMsgDelist): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgDelist => {
        return wasAmino(value)
      },
    },
    '/canine_chain.rns.MsgDelRecord': {
      aminoType: 'rns/DelRecord',
      toAmino: (value: DMsgDelRecord): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgDelRecord => {
        return wasAmino(value)
      },
    },
    '/canine_chain.rns.MsgInit': {
      aminoType: 'rns/Init',
      toAmino: (value: DMsgInit): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgInit => {
        return wasAmino(value)
      },
    },
    '/canine_chain.rns.MsgList': {
      aminoType: 'rns/List',
      toAmino: (value: DMsgList): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgList => {
        return wasAmino(value)
      },
    },
    '/canine_chain.rns.MsgRegister': {
      aminoType: 'rns/Register',
      toAmino: (value: DMsgRegister): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgRegister => {
        return wasAmino(value)
      },
    },
    '/canine_chain.rns.MsgTransfer': {
      aminoType: 'rns/Transfer',
      toAmino: (value: DMsgTransfer): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgTransfer => {
        return wasAmino(value)
      },
    },
    '/canine_chain.rns.MsgUpdate': {
      aminoType: 'rns/Update',
      toAmino: (value: DMsgUpdate): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgUpdate => {
        return wasAmino(value)
      },
    },
  }
}
