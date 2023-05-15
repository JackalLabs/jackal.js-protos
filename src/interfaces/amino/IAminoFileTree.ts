import { AminoMsg } from '@cosmjs/amino'

export interface AminoMsgPostFile extends AminoMsg {
  readonly type: 'filetree/PostFile'
  readonly value: {
    readonly creator: string
    readonly account: string
    readonly hashParent: string
    readonly hashChild: string
    readonly contents: string
    readonly viewers: string
    readonly editors: string
    readonly trackingNumber: string
  }
}

export interface AminoMsgAddViewers extends AminoMsg {
  readonly type: 'filetree/AddViewers'
  readonly value: {
    readonly creator: string
    readonly viewerIds: string
    readonly viewerKeys: string
    readonly address: string
    readonly fileowner: string
  }
}

export interface AminoMsgPostkey extends AminoMsg {
  readonly type: 'filetree/Postkey'
  readonly value: {
    readonly creator: string
    readonly key: string
  }
}

export interface AminoMsgDeleteFile extends AminoMsg {
  readonly type: 'filetree/DeleteFile'
  readonly value: {
    readonly creator: string
    readonly hashPath: string
    readonly account: string
  }
}

export interface AminoMsgRemoveViewers extends AminoMsg {
  readonly type: 'filetree/RemoveViewers'
  readonly value: {
    readonly creator: string
    readonly viewerIds: string
    readonly address: string
    readonly fileowner: string
  }
}

export interface AminoMsgMakeRoot extends AminoMsg {
  readonly type: 'filetree/MakeRoot'
  readonly value: {
    readonly creator: string
    readonly account: string
    readonly rootHashPath: string
    readonly contents: string
    readonly editors: string
    readonly viewers: string
    readonly trackingNumber: string
  }
}

export interface AminoMsgMakeRootV2 extends AminoMsg {
  readonly type: 'filetree/MakeRootV2'
  readonly value: {
    readonly creator: string
    readonly editors: string
    readonly viewers: string
    readonly trackingNumber: string
  }
}

export interface AminoMsgAddEditors extends AminoMsg {
  readonly type: 'filetree/AddEditors'
  readonly value: {
    readonly creator: string
    readonly editorIds: string
    readonly editorKeys: string
    readonly address: string
    readonly fileowner: string
  }
}

export interface AminoMsgRemoveEditors extends AminoMsg {
  readonly type: 'filetree/RemoveEditors'
  readonly value: {
    readonly creator: string
    readonly editorIds: string
    readonly address: string
    readonly fileowner: string
  }
}

export interface AminoMsgResetEditors extends AminoMsg {
  readonly type: 'filetree/ResetEditors'
  readonly value: {
    readonly creator: string
    readonly address: string
    readonly fileowner: string
  }
}

export interface AminoMsgResetViewers extends AminoMsg {
  readonly type: 'filetree/ResetViewers'
  readonly value: {
    readonly creator: string
    readonly address: string
    readonly fileowner: string
  }
}

export interface AminoMsgChangeOwner extends AminoMsg {
  readonly type: 'filetree/ChangeOwner'
  readonly value: {
    readonly creator: string
    readonly address: string
    readonly fileOwner: string
    readonly newOwner: string
  }
}
