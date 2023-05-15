import {
  MsgAddClaimer,
  MsgBuyStorage,
  MsgCancelContract,
  MsgClaimStray,
  MsgInitProvider,
  MsgPostContract,
  MsgPostproof,
  MsgRemoveClaimer,
  MsgSetProviderIP,
  MsgSetProviderKeybase,
  MsgSetProviderTotalspace,
  MsgSignContract,
  MsgUpgradeStorage
} from '@/postgen/canine_chain/storage/tx'
import {
  AminoMsgAddClaimer,
  AminoMsgBuyStorage,
  AminoMsgCancelContract,
  AminoMsgClaimStray,
  AminoMsgInitProvider,
  AminoMsgPostContract,
  AminoMsgPostproof,
  AminoMsgRemoveClaimer,
  AminoMsgSetProviderIP,
  AminoMsgSetProviderKeybase,
  AminoMsgSetProviderTotalspace,
  AminoMsgSignContract,
  AminoMsgUpgradeStorage
} from '@/interfaces/amino/IAminoStorage'
import { AminoConverters } from '@cosmjs/stargate'

export function createStorageAminoConverters(): AminoConverters {
  return {
    '/canine_chain.storage.MsgPostContract': {
      aminoType: 'storage/PostContract',
      toAmino: (value: MsgPostContract): AminoMsgPostContract['value'] => ({
        creator: value.creator,
        merkle: value.merkle,
        signee: value.signee,
        filesize: value.filesize,
        fid: value.fid
      }),
      fromAmino: (value: AminoMsgPostContract['value']): MsgPostContract => ({
        creator: value.creator,
        merkle: value.merkle,
        signee: value.signee,
        filesize: value.filesize,
        fid: value.fid
      })
    },
    '/canine_chain.storage.MsgPostproof': {
      aminoType: 'storage/Postproof',
      toAmino: (value: MsgPostproof): AminoMsgPostproof['value'] => ({
        creator: value.creator,
        item: value.item,
        hashlist: value.hashlist,
        cid: value.cid
      }),
      fromAmino: (value: AminoMsgPostproof['value']): MsgPostproof => ({
        creator: value.creator,
        item: value.item,
        hashlist: value.hashlist,
        cid: value.cid
      })
    },
    '/canine_chain.storage.MsgSignContract': {
      aminoType: 'storage/SignContract',
      toAmino: (value: MsgSignContract): AminoMsgSignContract['value'] => ({
        creator: value.creator,
        cid: value.cid,
        pay_once: value.payOnce
      }),
      fromAmino: (value: AminoMsgSignContract['value']): MsgSignContract => ({
        creator: value.creator,
        cid: value.cid,
        payOnce: value.pay_once
      })
    },
    '/canine_chain.storage.MsgSetProviderIP': {
      aminoType: 'storage/SetProviderIp',
      toAmino: (value: MsgSetProviderIP): AminoMsgSetProviderIP['value'] => ({
        creator: value.creator,
        ip: value.ip
      }),
      fromAmino: (value: AminoMsgSetProviderIP['value']): MsgSetProviderIP => ({
        creator: value.creator,
        ip: value.ip
      })
    },
    '/canine_chain.storage.MsgSetProviderKeybase': {
      aminoType: 'storage/SetProviderKeybase',
      toAmino: (
        value: MsgSetProviderKeybase
      ): AminoMsgSetProviderKeybase['value'] => ({
        creator: value.creator,
        keybase: value.keybase
      }),
      fromAmino: (
        value: AminoMsgSetProviderKeybase['value']
      ): MsgSetProviderKeybase => ({
        creator: value.creator,
        keybase: value.keybase
      })
    },
    '/canine_chain.storage.MsgSetProviderTotalspace': {
      aminoType: 'storage/SetProviderTotalspace',
      toAmino: (
        value: MsgSetProviderTotalspace
      ): AminoMsgSetProviderTotalspace['value'] => ({
        creator: value.creator,
        space: value.space
      }),
      fromAmino: (
        value: AminoMsgSetProviderTotalspace['value']
      ): MsgSetProviderTotalspace => ({
        creator: value.creator,
        space: value.space
      })
    },
    '/canine_chain.storage.MsgAddClaimer': {
      aminoType: 'storage/AddClaimer',
      toAmino: (value: MsgAddClaimer): AminoMsgAddClaimer['value'] => ({
        creator: value.creator,
        claim_address: value.claimAddress
      }),
      fromAmino: (value: AminoMsgAddClaimer['value']): MsgAddClaimer => ({
        creator: value.creator,
        claimAddress: value.claim_address
      })
    },
    '/canine_chain.storage.MsgRemoveClaimer': {
      aminoType: 'storage/RemoveClaimer',
      toAmino: (value: MsgRemoveClaimer): AminoMsgRemoveClaimer['value'] => ({
        creator: value.creator,
        claim_address: value.claimAddress
      }),
      fromAmino: (value: AminoMsgRemoveClaimer['value']): MsgRemoveClaimer => ({
        creator: value.creator,
        claimAddress: value.claim_address
      })
    },
    '/canine_chain.storage.MsgInitProvider': {
      aminoType: 'storage/InitProvider',
      toAmino: (value: MsgInitProvider): AminoMsgInitProvider['value'] => ({
        creator: value.creator,
        ip: value.ip,
        keybase: value.keybase,
        totalspace: value.totalspace
      }),
      fromAmino: (value: AminoMsgInitProvider['value']): MsgInitProvider => ({
        creator: value.creator,
        ip: value.ip,
        keybase: value.keybase,
        totalspace: value.totalspace
      })
    },
    '/canine_chain.storage.MsgCancelContract': {
      aminoType: 'storage/CancelContract',
      toAmino: (value: MsgCancelContract): AminoMsgCancelContract['value'] => ({
        creator: value.creator,
        cid: value.cid
      }),
      fromAmino: (
        value: AminoMsgCancelContract['value']
      ): MsgCancelContract => ({
        creator: value.creator,
        cid: value.cid
      })
    },
    '/canine_chain.storage.MsgBuyStorage': {
      aminoType: 'storage/BuyStorage',
      toAmino: (value: MsgBuyStorage): AminoMsgBuyStorage['value'] => ({
        creator: value.creator,
        for_address: value.forAddress,
        duration: value.duration,
        bytes: value.bytes,
        payment_denom: value.paymentDenom
      }),
      fromAmino: (value: AminoMsgBuyStorage['value']): MsgBuyStorage => ({
        creator: value.creator,
        forAddress: value.for_address,
        duration: value.duration,
        bytes: value.bytes,
        paymentDenom: value.payment_denom
      })
    },
    '/canine_chain.storage.MsgClaimStray': {
      aminoType: 'storage/ClaimStray',
      toAmino: (value: MsgClaimStray): AminoMsgClaimStray['value'] => ({
        creator: value.creator,
        cid: value.cid,
        for_address: value.forAddress
      }),
      fromAmino: (value: AminoMsgClaimStray['value']): MsgClaimStray => ({
        creator: value.creator,
        cid: value.cid,
        forAddress: value.for_address
      })
    },
    '/canine_chain.storage.MsgUpgradeStorage': {
      aminoType: 'storage/UpgradeStorage',
      toAmino: (value: MsgUpgradeStorage): AminoMsgUpgradeStorage['value'] => ({
        creator: value.creator,
        for_address: value.forAddress,
        duration: value.duration,
        bytes: value.bytes,
        payment_denom: value.paymentDenom
      }),
      fromAmino: (
        value: AminoMsgUpgradeStorage['value']
      ): MsgUpgradeStorage => ({
        creator: value.creator,
        forAddress: value.for_address,
        duration: value.duration,
        bytes: value.bytes,
        paymentDenom: value.payment_denom
      })
    }
  }
}
