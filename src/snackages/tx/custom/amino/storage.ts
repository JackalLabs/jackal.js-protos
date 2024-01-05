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
import { forAmino, wasAmino } from '@/utils/converters'

export function createStorageAminoConverters(): AminoConverters {
  return {
    '/canine_chain.storage.MsgPostContract': {
      aminoType: 'storage/PostContract',
      toAmino: (value: MsgPostContract): AminoMsgPostContract['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgPostContract['value']): MsgPostContract => {
        return wasAmino(value)
      }
    },
    '/canine_chain.storage.MsgPostproof': {
      aminoType: 'storage/Postproof',
      toAmino: (value: MsgPostproof): AminoMsgPostproof['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgPostproof['value']): MsgPostproof => {
        return wasAmino(value)
      }
    },
    '/canine_chain.storage.MsgSignContract': {
      aminoType: 'storage/SignContract',
      toAmino: (value: MsgSignContract): AminoMsgSignContract['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgSignContract['value']): MsgSignContract => {
        return wasAmino(value)
      }
    },
    '/canine_chain.storage.MsgSetProviderIP': {
      aminoType: 'storage/SetProviderIp',
      toAmino: (value: MsgSetProviderIP): AminoMsgSetProviderIP['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgSetProviderIP['value']): MsgSetProviderIP => {
        return wasAmino(value)
      }
    },
    '/canine_chain.storage.MsgSetProviderKeybase': {
      aminoType: 'storage/SetProviderKeybase',
      toAmino: (
        value: MsgSetProviderKeybase
      ): AminoMsgSetProviderKeybase['value'] => {
        return forAmino(value)
      },
      fromAmino: (
        value: AminoMsgSetProviderKeybase['value']
      ): MsgSetProviderKeybase => {
        return wasAmino(value)
      }
    },
    '/canine_chain.storage.MsgSetProviderTotalspace': {
      aminoType: 'storage/SetProviderTotalspace',
      toAmino: (
        value: MsgSetProviderTotalspace
      ): AminoMsgSetProviderTotalspace['value'] => {
        return forAmino(value)
      },
      fromAmino: (
        value: AminoMsgSetProviderTotalspace['value']
      ): MsgSetProviderTotalspace => {
        return wasAmino(value)
      }
    },
    '/canine_chain.storage.MsgAddClaimer': {
      aminoType: 'storage/AddClaimer',
      toAmino: (value: MsgAddClaimer): AminoMsgAddClaimer['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgAddClaimer['value']): MsgAddClaimer => {
        return wasAmino(value)
      }
    },
    '/canine_chain.storage.MsgRemoveClaimer': {
      aminoType: 'storage/RemoveClaimer',
      toAmino: (value: MsgRemoveClaimer): AminoMsgRemoveClaimer['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgRemoveClaimer['value']): MsgRemoveClaimer => {
        return wasAmino(value)
      }
    },
    '/canine_chain.storage.MsgInitProvider': {
      aminoType: 'storage/InitProvider',
      toAmino: (value: MsgInitProvider): AminoMsgInitProvider['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgInitProvider['value']): MsgInitProvider => {
        return wasAmino(value)
      }
    },
    '/canine_chain.storage.MsgCancelContract': {
      aminoType: 'storage/CancelContract',
      toAmino: (value: MsgCancelContract): AminoMsgCancelContract['value'] => {
        return forAmino(value)
      },
      fromAmino: (
        value: AminoMsgCancelContract['value']
      ): MsgCancelContract => {
        return wasAmino(value)
      }
    },
    '/canine_chain.storage.MsgBuyStorage': {
      aminoType: 'storage/BuyStorage',
      toAmino: (value: MsgBuyStorage): AminoMsgBuyStorage['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgBuyStorage['value']): MsgBuyStorage => {
        return wasAmino(value)
      }
    },
    '/canine_chain.storage.MsgClaimStray': {
      aminoType: 'storage/ClaimStray',
      toAmino: (value: MsgClaimStray): AminoMsgClaimStray['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgClaimStray['value']): MsgClaimStray => {
        return wasAmino(value)
      }
    },
    '/canine_chain.storage.MsgUpgradeStorage': {
      aminoType: 'storage/UpgradeStorage',
      toAmino: (value: MsgUpgradeStorage): AminoMsgUpgradeStorage['value'] => {
        return forAmino(value)
      },
      fromAmino: (
        value: AminoMsgUpgradeStorage['value']
      ): MsgUpgradeStorage => {
        return wasAmino(value)
      }
    }
  }
}
