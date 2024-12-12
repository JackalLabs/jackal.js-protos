import { sortAndSnake } from '@/utils/converters'
import type { AminoConverters } from '@cosmjs/stargate/build/aminotypes'
import {
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
  DMsgRegisterName,
  DMsgTransfer,
  DMsgUpdate,
} from '@/types'

export function createRnsAminoConverters(): AminoConverters {
  return {
    '/canine_chain.rns.MsgAcceptBid': {
      aminoType: 'rns/AcceptBid',
      toAmino: (value: DMsgAcceptBid): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgAcceptBid => {
        return {
          creator: value.creator,
          name: value.name,
          from: value.from,
        }
      },
    },
    '/canine_chain.rns.MsgAddRecord': {
      aminoType: 'rns/AddRecord',
      toAmino: (value: DMsgAddRecord): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgAddRecord => {
        return {
          creator: value.creator,
          name: value.name,
          value: value.value,
          data: value.data,
          record: value.record,
        }
      },
    },
    '/canine_chain.rns.MsgBid': {
      aminoType: 'rns/Bid',
      toAmino: (value: DMsgBid): any => {
        const base = sortAndSnake(value)
        if (!value.bid) {
          delete base.bid
        }
        return base
      },
      fromAmino: (value: any): DMsgBid => {
        return {
          creator: value.creator,
          name: value.name,
          bid: value.bid,
        }
      },
    },
    '/canine_chain.rns.MsgBuy': {
      aminoType: 'rns/Buy',
      toAmino: (value: DMsgBuy): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgBuy => {
        return {
          creator: value.creator,
          name: value.name,
        }
      },
    },
    '/canine_chain.rns.MsgCancelBid': {
      aminoType: 'rns/CancelBid',
      toAmino: (value: DMsgCancelBid): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgCancelBid => {
        return {
          creator: value.creator,
          name: value.name,
        }
      },
    },
    '/canine_chain.rns.MsgDelist': {
      aminoType: 'rns/Delist',
      toAmino: (value: DMsgDelist): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgDelist => {
        return {
          creator: value.creator,
          name: value.name,
        }
      },
    },
    '/canine_chain.rns.MsgDelRecord': {
      aminoType: 'rns/DelRecord',
      toAmino: (value: DMsgDelRecord): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgDelRecord => {
        return {
          creator: value.creator,
          name: value.name,
        }
      },
    },
    '/canine_chain.rns.MsgInit': {
      aminoType: 'rns/Init',
      toAmino: (value: DMsgInit): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgInit => {
        return value
      },
    },
    '/canine_chain.rns.MsgList': {
      aminoType: 'rns/List',
      toAmino: (value: DMsgList): any => {
        const base = sortAndSnake(value)
        if (!value.price) {
          delete base.price
        }
        return base
      },
      fromAmino: (value: any): DMsgList => {
        return {
          creator: value.creator,
          name: value.name,
          price: value.price,
        }
      },
    },
    '/canine_chain.rns.MsgMakePrimary': {
      aminoType: 'rns/MakePrimary',
      toAmino: (value: DMsgMakePrimary): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgMakePrimary => {
        return {
          creator: value.creator,
          name: value.name,
        }
      },
    },
    '/canine_chain.rns.MsgRegisterName': {
      aminoType: 'rns/RegisterName',
      toAmino: (value: DMsgRegisterName): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgRegisterName => {
        return {
          creator: value.creator,
          name: value.name,
          years: value.years,
          data: value.data,
          setPrimary: value.setPrimary,
        }
      },
    },
    '/canine_chain.rns.MsgTransfer': {
      aminoType: 'rns/Transfer',
      toAmino: (value: DMsgTransfer): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgTransfer => {
        return {
          creator: value.creator,
          name: value.name,
          receiver: value.receiver,
        }
      },
    },
    '/canine_chain.rns.MsgUpdate': {
      aminoType: 'rns/Update',
      toAmino: (value: DMsgUpdate): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgUpdate => {
        return {
          creator: value.creator,
          name: value.name,
          data: value.data,
        }
      },
    },
  }
}
