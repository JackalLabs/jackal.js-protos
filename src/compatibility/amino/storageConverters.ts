import { sortAndSnake, sortFilterAndSnake } from '@/utils/converters'
import type { AminoConverters } from '@cosmjs/stargate/build/aminotypes'
import type {
  DMsgAddClaimer,
  DMsgAttest,
  DMsgBuyStorage,
  DMsgInitProvider,
  DMsgPostProof,
  DMsgRemoveClaimer,
  DMsgReport,
  DMsgRequestAttestationForm,
  DMsgRequestReportForm,
  DMsgSetProviderIP,
  DMsgSetProviderKeybase,
  DMsgSetProviderTotalSpace,
  DMsgShutdownProvider,
  DMsgStorageDeleteFile,
  DMsgStoragePostFile,
} from '@/types'

export function createStorageAminoConverters(): AminoConverters {
  return {
    '/canine_chain.storage.MsgAddClaimer': {
      aminoType: 'storage/AddClaimer',
      toAmino: (value: DMsgAddClaimer): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgAddClaimer => {
        return {
          creator: value.creator,
          claimAddress: value.claim_address,
        }
      },
    },
    '/canine_chain.storage.MsgAttest': {
      aminoType: 'storage/Init' /* TODO - update with real path */,
      toAmino: (value: DMsgAttest): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgAttest => {
        return {
          creator: value.creator,
          prover: value.prover,
          merkle: value.merkle,
          owner: value.owner,
          start: value.start,
        }
      },
    },
    '/canine_chain.storage.MsgBuyStorage': {
      aminoType: 'storage/BuyStorage',
      toAmino: (value: DMsgBuyStorage): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgBuyStorage => {
        return {
          creator: value.creator,
          forAddress: value.for_address,
          durationDays: value.duration_days,
          bytes: value.bytes,
          paymentDenom: value.payment_denom,
        }
      },
    },
    '/canine_chain.storage.MsgDeleteFile': {
      aminoType: 'storage/DeleteFile',
      toAmino: (value: DMsgStorageDeleteFile): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgStorageDeleteFile => {
        return {
          creator: value.creator,
          merkle: value.merkle,
          start: value.start,
        }
      },
    },
    '/canine_chain.storage.MsgInitProvider': {
      aminoType: 'storage/InitProvider',
      toAmino: (value: DMsgInitProvider): any => {
        return sortFilterAndSnake(value)
      },
      fromAmino: (value: any): DMsgInitProvider => {
        return {
          creator: value.creator,
          ip: value.ip,
          keybase: value.keybase || '',
          totalSpace: value.total_space,
        }
      },
    },
    '/canine_chain.storage.MsgPostFile': {
      aminoType: 'storage/PostFile',
      toAmino: (value: DMsgStoragePostFile): any => {
        return sortFilterAndSnake(value)
      },
      fromAmino: (value: any): DMsgStoragePostFile => {
        return {
          creator: value.creator,
          merkle: value.merkle,
          fileSize: value.file_size || 0,
          proofInterval: value.proof_interval,
          proofType: value.proof_type || 0,
          maxProofs: value.max_proofs,
          expires: value.expires || 0,
          note: value.note,
        }
      },
    },
    '/canine_chain.storage.MsgPostProof': {
      aminoType: 'storage/PostProof',
      toAmino: (value: DMsgPostProof): any => {
        return sortFilterAndSnake(value)
      },
      fromAmino: (value: any): DMsgPostProof => {
        return {
          creator: value.creator,
          item: value.item,
          hashList: value.hash_list,
          merkle: value.merkle,
          owner: value.owner,
          start: value.start,
          toProve: value.to_prove || 0,
        }
      },
    },
    '/canine_chain.storage.MsgRemoveClaimer': {
      aminoType: 'storage/RemoveClaimer',
      toAmino: (value: DMsgRemoveClaimer): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgRemoveClaimer => {
        return {
          creator: value.creator,
          claimAddress: value.claim_address,
        }
      },
    },
    '/canine_chain.storage.MsgReport': {
      aminoType: 'storage/Init' /* TODO - update with real path */,
      toAmino: (value: DMsgReport): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgReport => {
        return {
          creator: value.creator,
          prover: value.prover,
          merkle: value.merkle,
          owner: value.owner,
          start: value.start,
        }
      },
    },
    '/canine_chain.storage.MsgRequestAttestationForm': {
      aminoType: 'storage/Init' /* TODO - update with real path */,
      toAmino: (value: DMsgRequestAttestationForm): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgRequestAttestationForm => {
        return {
          creator: value.creator,
          merkle: value.merkle,
          owner: value.owner,
          start: value.start,
        }
      },
    },
    '/canine_chain.storage.MsgRequestReportForm': {
      aminoType: 'storage/Init' /* TODO - update with real path */,
      toAmino: (value: DMsgRequestReportForm): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgRequestReportForm => {
        return {
          creator: value.creator,
          prover: value.prover,
          merkle: value.merkle,
          owner: value.owner,
          start: value.start,
        }
      },
    },
    '/canine_chain.storage.MsgSetProviderIP': {
      aminoType: 'storage/SetProviderIp',
      toAmino: (value: DMsgSetProviderIP): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgSetProviderIP => {
        return {
          creator: value.creator,
          ip: value.ip,
        }
      },
    },
    '/canine_chain.storage.MsgSetProviderKeybase': {
      aminoType: 'storage/SetProviderKeybase',
      toAmino: (value: DMsgSetProviderKeybase): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgSetProviderKeybase => {
        return {
          creator: value.creator,
          keybase: value.keybase,
        }
      },
    },
    '/canine_chain.storage.MsgSetProviderTotalSpace': {
      aminoType: 'storage/SetProviderTotalSpace',
      toAmino: (value: DMsgSetProviderTotalSpace): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgSetProviderTotalSpace => {
        return {
          creator: value.creator,
          space: value.space,
        }
      },
    },
    '/canine_chain.storage.MsgShutdownProvider': {
      aminoType: 'storage/Init' /* TODO - update with real path */,
      toAmino: (value: DMsgShutdownProvider): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgShutdownProvider => {
        return value
      },
    },
  }
}
