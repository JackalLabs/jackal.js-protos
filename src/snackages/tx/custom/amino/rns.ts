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
import { AminoConverters } from '@cosmjs/stargate'
import { sortAmino, wasAmino } from '@/utils/converters'

export function createRnsAminoConverters(): AminoConverters {
  return {
    '/canine_chain.rns.MsgRegister': {
      aminoType: 'rns/Register',
      toAmino: (value: MsgRegister): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgRegister => {
        return {
          creator: value.creator,
          name: value.name,
          years: value.years,
          data: value.data
        }
      }
    },
    '/canine_chain.rns.MsgUpdate': {
      aminoType: 'rns/Update',
      toAmino: (value: MsgUpdate): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgUpdate => {
        return {
          creator: value.creator,
          name: value.name,
          data: value.data
        }
      }
    },
    '/canine_chain.rns.MsgBid': {
      aminoType: 'rns/Bid',
      toAmino: (value: MsgBid): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgBid => {
        return {
          creator: value.creator,
          name: value.name,
          bid: value.bid
        }
      }
    },
    '/canine_chain.rns.MsgAcceptBid': {
      aminoType: 'rns/AcceptBid',
      toAmino: (value: MsgAcceptBid): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgAcceptBid => {
        return {
          creator: value.creator,
          name: value.name,
          from: value.from
        }
      }
    },
    '/canine_chain.rns.MsgCancelBid': {
      aminoType: 'rns/CancelBid',
      toAmino: (value: MsgCancelBid): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgCancelBid => {
        return {
          creator: value.creator,
          name: value.name
        }
      }
    },
    '/canine_chain.rns.MsgList': {
      aminoType: 'rns/List',
      toAmino: (value: MsgList): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgList => {
        return {
          creator: value.creator,
          name: value.name,
          price: value.price
        }
      }
    },
    '/canine_chain.rns.MsgBuy': {
      aminoType: 'rns/Buy',
      toAmino: (value: MsgBuy): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgBuy => {
        return {
          creator: value.creator,
          name: value.name
        }
      }
    },
    '/canine_chain.rns.MsgDelist': {
      aminoType: 'rns/Delist',
      toAmino: (value: MsgDelist): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgDelist => {
        return {
          creator: value.creator,
          name: value.name
        }
      }
    },
    '/canine_chain.rns.MsgTransfer': {
      aminoType: 'rns/Transfer',
      toAmino: (value: MsgTransfer): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgTransfer => {
        return {
          creator: value.creator,
          name: value.name,
          receiver: value.receiver
        }
      }
    },
    '/canine_chain.rns.MsgAddRecord': {
      aminoType: 'rns/AddRecord',
      toAmino: (value: MsgAddRecord): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgAddRecord => {
        return {
          creator: value.creator,
          name: value.name,
          value: value.value,
          data: value.data,
          record: value.record
        }
      }
    },
    '/canine_chain.rns.MsgDelRecord': {
      aminoType: 'rns/DelRecord',
      toAmino: (value: MsgDelRecord): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgDelRecord => {
        return {
          creator: value.creator,
          name: value.name
        }
      }
    },
    '/canine_chain.rns.MsgInit': {
      aminoType: 'rns/Init',
      toAmino: (value: MsgInit): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgInit => {
        return wasAmino(value)
      }
    }
  }
}
