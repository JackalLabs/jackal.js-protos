import { AminoMsg } from '@cosmjs/amino'

export interface AminoMsgCreateNotifications extends AminoMsg {
  readonly type: 'notifications/CreateNotifications'
  readonly value: {
    readonly creator: string
    readonly notification: string
    readonly address: string
  }
}

export interface AminoMsgUpdateNotifications extends AminoMsg {
  readonly type: 'notifications/UpdateNotifications'
  readonly value: {
    readonly creator: string
    readonly count: number
    readonly notification: string
    readonly address: string
  }
}

export interface AminoMsgDeleteNotifications extends AminoMsg {
  readonly type: 'notifications/DeleteNotifications'
  readonly value: {
    readonly creator: string
  }
}

export interface AminoMsgSetCounter extends AminoMsg {
  readonly type: 'notifications/SetCounter'
  readonly value: {
    readonly creator: string
  }
}

export interface AminoMsgBlockSenders extends AminoMsg {
  readonly type: 'notifications/BlockSenders'
  readonly value: {
    readonly creator: string
    readonly senderIds: string
  }
}
