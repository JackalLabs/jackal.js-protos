import { forAmino, wasAmino } from '@/utils/converters'
import type { AminoConverters } from '@cosmjs/stargate/build/aminotypes'
import type {
  DMsgAddEditors,
  DMsgAddViewers,
  DMsgChangeOwner,
  DMsgFileTreeDeleteFile,
  DMsgFileTreePostFile,
  DMsgPostKey,
  DMsgProvisionFileTree,
  DMsgRemoveEditors,
  DMsgRemoveViewers,
  DMsgResetEditors,
  DMsgResetViewers,
} from '@/types'

export function createFileTreeAminoConverters(): AminoConverters {
  return {
    '/canine_chain.filetree.MsgAddEditors': {
      aminoType: 'filetree/AddEditors',
      toAmino: (value: DMsgAddEditors): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgAddEditors => {
        return wasAmino(value)
      },
    },
    '/canine_chain.filetree.MsgAddViewers': {
      aminoType: 'filetree/AddViewers',
      toAmino: (value: DMsgAddViewers): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgAddViewers => {
        return wasAmino(value)
      },
    },
    '/canine_chain.filetree.MsgChangeOwner': {
      aminoType: 'filetree/ChangeOwner',
      toAmino: (value: DMsgChangeOwner): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgChangeOwner => {
        return wasAmino(value)
      },
    },
    '/canine_chain.filetree.MsgDeleteFile': {
      aminoType: 'filetree/DeleteFile',
      toAmino: (value: DMsgFileTreeDeleteFile): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgFileTreeDeleteFile => {
        return wasAmino(value)
      },
    },
    '/canine_chain.filetree.MsgPostFile': {
      aminoType: 'filetree/PostFile',
      toAmino: (value: DMsgFileTreePostFile): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgFileTreePostFile => {
        return wasAmino(value)
      },
    },
    '/canine_chain.filetree.MsgPostKey': {
      aminoType: 'filetree/PostKey',
      toAmino: (value: DMsgPostKey): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgPostKey => {
        return wasAmino(value)
      },
    },
    '/canine_chain.filetree.MsgProvisionFileTree': {
      aminoType: 'filetree/ProvisionFileTree',
      toAmino: (value: DMsgProvisionFileTree): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgProvisionFileTree => {
        return wasAmino(value)
      },
    },
    '/canine_chain.filetree.MsgRemoveEditors': {
      aminoType: 'filetree/RemoveEditors',
      toAmino: (value: DMsgRemoveEditors): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgRemoveEditors => {
        return wasAmino(value)
      },
    },
    '/canine_chain.filetree.MsgRemoveViewers': {
      aminoType: 'filetree/RemoveViewers',
      toAmino: (value: DMsgRemoveViewers): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgRemoveViewers => {
        return wasAmino(value)
      },
    },
    '/canine_chain.filetree.MsgResetEditors': {
      aminoType: 'filetree/ResetEditors',
      toAmino: (value: DMsgResetEditors): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgResetEditors => {
        return wasAmino(value)
      },
    },
    '/canine_chain.filetree.MsgResetViewers': {
      aminoType: 'filetree/ResetViewers',
      toAmino: (value: DMsgResetViewers): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgResetViewers => {
        return wasAmino(value)
      },
    },
  }
}
