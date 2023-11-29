import type {
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
import type { DCoin } from '@/types'

export type DMsgAcceptBid = Documentation<{
  creator: string;
  name: string;
  from: string;
}, MsgAcceptBid>

export type DMsgAddRecord = Documentation<{
  creator: string;
  name: string;
  value: string;
  data: string;
  record: string;
}, MsgAddRecord>

export type DMsgBid = Documentation<{
  creator: string;
  name: string;
  bid: DCoin | undefined;
}, MsgBid>

export type DMsgBuy = Documentation<{
  creator: string;
  name: string;
}, MsgBuy>

export type DMsgCancelBid = Documentation<{
  creator: string;
  name: string;
}, MsgCancelBid>

export type DMsgDelist = Documentation<{
  creator: string;
  name: string;
}, MsgDelist>

export type DMsgDelRecord = Documentation<{
  creator: string;
  name: string;
}, MsgDelRecord>

export type DMsgInit = Documentation<{
  creator: string;
}, MsgInit>

export type DMsgList = Documentation<{
  creator: string;
  name: string;
  price: DCoin | undefined;
}, MsgList>

export type DMsgRegister = Documentation<{
  creator: string;
  name: string;
  years: number;
  data: string;
}, MsgRegister>

export type DMsgTransfer = Documentation<{
  creator: string;
  name: string;
  receiver: string;
}, MsgTransfer>

export type DMsgUpdate = Documentation<{
  creator: string;
  name: string;
  data: string;
}, MsgUpdate>
