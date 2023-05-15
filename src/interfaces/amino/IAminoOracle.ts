import { AminoMsg } from '@cosmjs/amino'

export interface AminoMsgCreateFeed extends AminoMsg {
  readonly type: 'filetree/CreateFeed'
  readonly value: {
    readonly creator: string
    readonly name: string
  }
}

export interface AminoMsgUpdateFeed extends AminoMsg {
  readonly type: 'filetree/UpdateFeed'
  readonly value: {
    readonly creator: string
    readonly name: string
    readonly data: string
  }
}
