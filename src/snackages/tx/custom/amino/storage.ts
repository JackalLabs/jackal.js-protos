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
import { AminoConverters } from '@cosmjs/stargate'
import { forAmino, sortAmino } from '@/utils/converters'

export function createStorageAminoConverters(): AminoConverters {
  return {
    '/canine_chain.storage.MsgPostContract': {
      aminoType: 'storage/PostContract',
      toAmino: (value: MsgPostContract): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgPostContract => {
        return {
          creator: value.creator,
          merkle: value.merkle,
          signee: value.signee,
          filesize: value.filesize,
          fid: value.fid
        }
      }
    },
    '/canine_chain.storage.MsgPostproof': {
      aminoType: 'storage/Postproof',
      toAmino: (value: MsgPostproof): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgPostproof => {
        return {
          creator: value.creator,
          item: value.item,
          hashlist: value.hashlist,
          cid: value.cid
        }
      }
    },
    '/canine_chain.storage.MsgSignContract': {
      aminoType: 'storage/SignContract',
      toAmino: (value: MsgSignContract): any => {
        const msg: any = {
          cid: value.cid,
          creator: value.creator,
          ...(value.payOnce && { pay_once: value.payOnce })
        }

        console.log(msg)
        return msg
      },
      fromAmino: (value: any): MsgSignContract => {
        return {
          creator: value.creator,
          cid: value.cid,
          payOnce: value.pay_once || false
        }
      }
    },
    '/canine_chain.storage.MsgSetProviderIP': {
      aminoType: 'storage/SetProviderIp',
      toAmino: (value: MsgSetProviderIP): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgSetProviderIP => {
        return {
          creator: value.creator,
          ip: value.ip
        }
      }
    },
    '/canine_chain.storage.MsgSetProviderKeybase': {
      aminoType: 'storage/SetProviderKeybase',
      toAmino: (value: MsgSetProviderKeybase): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgSetProviderKeybase => {
        return {
          creator: value.creator,
          keybase: value.keybase
        }
      }
    },
    '/canine_chain.storage.MsgSetProviderTotalspace': {
      aminoType: 'storage/SetProviderTotalspace',
      toAmino: (value: MsgSetProviderTotalspace): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgSetProviderTotalspace => {
        return {
          creator: value.creator,
          space: value.space
        }
      }
    },
    '/canine_chain.storage.MsgAddClaimer': {
      aminoType: 'storage/AddClaimer',
      toAmino: (value: MsgAddClaimer): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): MsgAddClaimer => {
        return {
          creator: value.creator,
          claimAddress: value.claim_address
        }
      }
    },
    '/canine_chain.storage.MsgRemoveClaimer': {
      aminoType: 'storage/RemoveClaimer',
      toAmino: (value: MsgRemoveClaimer): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): MsgRemoveClaimer => {
        return {
          creator: value.creator,
          claimAddress: value.claim_address
        }
      }
    },
    '/canine_chain.storage.MsgInitProvider': {
      aminoType: 'storage/InitProvider',
      toAmino: (value: MsgInitProvider): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgInitProvider => {
        return {
          creator: value.creator,
          ip: value.ip,
          keybase: value.keybase,
          totalspace: value.totalspace
        }
      }
    },
    '/canine_chain.storage.MsgCancelContract': {
      aminoType: 'storage/CancelContract',
      toAmino: (value: MsgCancelContract): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgCancelContract => {
        return {
          creator: value.creator,
          cid: value.cid
        }
      }
    },
    '/canine_chain.storage.MsgBuyStorage': {
      aminoType: 'storage/BuyStorage',
      toAmino: (value: MsgBuyStorage): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): MsgBuyStorage => {
        return {
          creator: value.creator,
          forAddress: value.for_address,
          duration: value.duration,
          bytes: value.bytes,
          paymentDenom: value.payment_denom
        }
      }
    },
    '/canine_chain.storage.MsgClaimStray': {
      aminoType: 'storage/ClaimStray',
      toAmino: (value: MsgClaimStray): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): MsgClaimStray => {
        return {
          creator: value.creator,
          cid: value.cid,
          forAddress: value.for_address
        }
      }
    },
    '/canine_chain.storage.MsgUpgradeStorage': {
      aminoType: 'storage/UpgradeStorage',
      toAmino: (value: MsgUpgradeStorage): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): MsgUpgradeStorage => {
        return {
          creator: value.creator,
          forAddress: value.for_address,
          duration: value.duration,
          bytes: value.bytes,
          paymentDenom: value.payment_denom
        }
      }
    }
  }
}
