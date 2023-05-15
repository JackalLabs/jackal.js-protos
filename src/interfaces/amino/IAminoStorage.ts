import { AminoMsg } from '@cosmjs/amino'

export interface AminoMsgPostContract extends AminoMsg {
  readonly type: 'storage/PostContract'
  readonly value: {
    readonly creator: string
    readonly merkle: string
    readonly signee: string
    readonly filesize: string
    readonly fid: string
  }
}

export interface AminoMsgPostproof extends AminoMsg {
  readonly type: 'storage/Postproof'
  readonly value: {
    readonly creator: string
    readonly item: string
    readonly hashlist: string
    readonly cid: string
  }
}

export interface AminoMsgSignContract extends AminoMsg {
  readonly type: 'storage/SignContract'
  readonly value: {
    readonly creator: string
    readonly cid: string
    readonly pay_once: boolean
  }
}

export interface AminoMsgSetProviderIP extends AminoMsg {
  readonly type: 'storage/SetProviderIp'
  readonly value: {
    readonly creator: string
    readonly ip: string
  }
}

export interface AminoMsgSetProviderKeybase extends AminoMsg {
  readonly type: 'storage/SetProviderKeybase'
  readonly value: {
    readonly creator: string
    readonly keybase: string
  }
}

export interface AminoMsgSetProviderTotalspace extends AminoMsg {
  readonly type: 'storage/SetProviderTotalspace'
  readonly value: {
    readonly creator: string
    readonly space: string
  }
}

export interface AminoMsgAddClaimer extends AminoMsg {
  readonly type: 'storage/AddClaimer'
  readonly value: {
    readonly creator: string
    readonly claim_address: string
  }
}

export interface AminoMsgRemoveClaimer extends AminoMsg {
  readonly type: 'storage/RemoveClaimer'
  readonly value: {
    readonly creator: string
    readonly claim_address: string
  }
}

export interface AminoMsgInitProvider extends AminoMsg {
  readonly type: 'storage/InitProvider'
  readonly value: {
    readonly creator: string
    readonly ip: string
    readonly keybase: string
    readonly totalspace: string
  }
}

export interface AminoMsgCancelContract extends AminoMsg {
  readonly type: 'storage/CancelContract'
  readonly value: {
    readonly creator: string
    readonly cid: string
  }
}

export interface AminoMsgBuyStorage extends AminoMsg {
  readonly type: 'storage/BuyStorage'
  readonly value: {
    readonly creator: string
    readonly for_address: string
    readonly duration: string
    readonly bytes: string
    readonly payment_denom: string
  }
}

export interface AminoMsgClaimStray extends AminoMsg {
  readonly type: 'storage/ClaimStray'
  readonly value: {
    readonly creator: string
    readonly cid: string
    readonly for_address: string
  }
}

export interface AminoMsgUpgradeStorage extends AminoMsg {
  readonly type: 'storage/UpgradeStorage'
  readonly value: {
    readonly creator: string
    readonly for_address: string
    readonly duration: string
    readonly bytes: string
    readonly payment_denom: string
  }
}
