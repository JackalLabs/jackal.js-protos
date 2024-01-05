import { forAmino, wasAmino } from '@/utils/converters'
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
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgAddClaimer => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgAttest': {
      aminoType: 'storage/Init',
      toAmino: (value: DMsgAttest): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgAttest => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgBuyStorage': {
      aminoType: 'storage/BuyStorage',
      toAmino: (value: DMsgBuyStorage): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgBuyStorage => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgDeleteFile': {
      aminoType: 'storage/DeleteFile',
      toAmino: (value: DMsgStorageDeleteFile): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgStorageDeleteFile => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgInitProvider': {
      aminoType: 'storage/InitProvider',
      toAmino: (value: DMsgInitProvider): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgInitProvider => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgPostFile': {
      aminoType: 'storage/PostFile',
      toAmino: (value: DMsgStoragePostFile): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgStoragePostFile => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgPostProof': {
      aminoType: 'storage/PostProof',
      toAmino: (value: DMsgPostProof): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgPostProof => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgRemoveClaimer': {
      aminoType: 'storage/RemoveClaimer',
      toAmino: (value: DMsgRemoveClaimer): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgRemoveClaimer => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgReport': {
      aminoType: 'storage/Init',
      toAmino: (value: DMsgReport): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgReport => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgRequestAttestationForm': {
      aminoType: 'storage/Init',
      toAmino: (value: DMsgRequestAttestationForm): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgRequestAttestationForm => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgRequestReportForm': {
      aminoType: 'storage/Init',
      toAmino: (value: DMsgRequestReportForm): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgRequestReportForm => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgSetProviderIP': {
      aminoType: 'storage/SetProviderIp',
      toAmino: (value: DMsgSetProviderIP): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgSetProviderIP => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgSetProviderKeybase': {
      aminoType: 'storage/SetProviderKeybase',
      toAmino: (value: DMsgSetProviderKeybase): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgSetProviderKeybase => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgSetProviderTotalSpace': {
      aminoType: 'storage/SetProviderTotalSpace',
      toAmino: (value: DMsgSetProviderTotalSpace): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgSetProviderTotalSpace => {
        return wasAmino(value)
      },
    },
    '/canine_chain.storage.MsgShutdownProvider': {
      aminoType: 'storage/Init',
      toAmino: (value: DMsgShutdownProvider): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgShutdownProvider => {
        return wasAmino(value)
      },
    },
  }
}
