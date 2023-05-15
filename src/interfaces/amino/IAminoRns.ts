import { AminoMsg } from '@cosmjs/amino'

export interface AminoMsgRegister extends AminoMsg {
  readonly type: 'rns/Register'
  readonly value: {
    readonly creator: string
    readonly name: string
    readonly years: string
    readonly data: string
  }
}

export interface AminoMsgUpdate extends AminoMsg {
  readonly type: 'rns/Update'
  readonly value: {
    readonly creator: string
    readonly name: string
    readonly data: string
  }
}

export interface AminoMsgBid extends AminoMsg {
  readonly type: 'rns/Bid'
  readonly value: {
    readonly creator: string
    readonly name: string
    readonly bid: string
  }
}

export interface AminoMsgAcceptBid extends AminoMsg {
  readonly type: 'rns/AcceptBid'
  readonly value: {
    readonly creator: string
    readonly name: string
    readonly from: string
  }
}

export interface AminoMsgCancelBid extends AminoMsg {
  readonly type: 'rns/AminoMsgCancelBid'
  readonly value: {
    readonly creator: string
    readonly name: string
  }
}

export interface AminoMsgList extends AminoMsg {
  readonly type: 'rns/List'
  readonly value: {
    readonly creator: string
    readonly name: string
    readonly price: string
  }
}

export interface AminoMsgBuy extends AminoMsg {
  readonly type: 'rns/Buy'
  readonly value: {
    readonly creator: string
    readonly name: string
  }
}

export interface AminoMsgDelist extends AminoMsg {
  readonly type: 'rns/Delist'
  readonly value: {
    readonly creator: string
    readonly name: string
  }
}

export interface AminoMsgTransfer extends AminoMsg {
  readonly type: 'rns/Transfer'
  readonly value: {
    readonly creator: string
    readonly name: string
    readonly receiver: string
  }
}

export interface AminoMsgAddRecord extends AminoMsg {
  readonly type: 'rns/AddRecord'
  readonly value: {
    readonly creator: string
    readonly name: string
    readonly value: string
    readonly data: string
    readonly record: string
  }
}

export interface AminoMsgDelRecord extends AminoMsg {
  readonly type: 'rns/DelRecord'
  readonly value: {
    readonly creator: string
    readonly name: string
  }
}

export interface AminoMsgInit extends AminoMsg {
  readonly type: 'rns/Init'
  readonly value: {
    readonly creator: string
  }
}
