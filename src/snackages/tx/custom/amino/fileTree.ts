import {
  MsgAddEditors,
  MsgAddViewers,
  MsgChangeOwner,
  MsgDeleteFile,
  MsgMakeRoot,
  MsgMakeRootV2,
  MsgPostFile,
  MsgPostkey,
  MsgRemoveEditors,
  MsgRemoveViewers,
  MsgResetEditors,
  MsgResetViewers
} from '@/postgen/canine_chain/filetree/tx'
import {
  AminoMsgAddEditors,
  AminoMsgAddViewers,
  AminoMsgChangeOwner,
  AminoMsgDeleteFile,
  AminoMsgMakeRoot,
  AminoMsgMakeRootV2,
  AminoMsgPostFile,
  AminoMsgPostkey,
  AminoMsgRemoveEditors,
  AminoMsgRemoveViewers,
  AminoMsgResetEditors,
  AminoMsgResetViewers
} from '@/interfaces/amino/IAminoFileTree'
import { AminoConverters } from '@cosmjs/stargate'
import { forAmino, wasAmino } from '@/utils/converters'

export function createFileTreeAminoConverters(): AminoConverters {
  return {
    '/canine_chain.filetree.MsgPostFile': {
      aminoType: 'filetree/PostFile',
      toAmino: (value: MsgPostFile): AminoMsgPostFile['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgPostFile['value']): MsgPostFile => {
        return wasAmino(value)
      }
    },
    '/canine_chain.filetree.MsgAddViewers': {
      aminoType: 'filetree/AddViewers',
      toAmino: (value: MsgAddViewers): AminoMsgAddViewers['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgAddViewers['value']): MsgAddViewers => {
        return wasAmino(value)
      }
    },
    '/canine_chain.filetree.MsgPostkey': {
      aminoType: 'filetree/Postkey',
      toAmino: (value: MsgPostkey): AminoMsgPostkey['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgPostkey['value']): MsgPostkey => {
        return wasAmino(value)
      }
    },
    '/canine_chain.filetree.MsgDeleteFile': {
      aminoType: 'filetree/DeleteFile',
      toAmino: (value: MsgDeleteFile): AminoMsgDeleteFile['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgDeleteFile['value']): MsgDeleteFile => {
        return wasAmino(value)
      }
    },
    '/canine_chain.filetree.MsgRemoveViewers': {
      aminoType: 'filetree/RemoveViewers',
      toAmino: (value: MsgRemoveViewers): AminoMsgRemoveViewers['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgRemoveViewers['value']): MsgRemoveViewers => {
        return wasAmino(value)
      }
    },
    '/canine_chain.filetree.MsgMakeRoot': {
      aminoType: 'filetree/MakeRoot',
      toAmino: (value: MsgMakeRoot): AminoMsgMakeRoot['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgMakeRoot['value']): MsgMakeRoot => {
        return wasAmino(value)
      }
    },
    '/canine_chain.filetree.MsgMakeRootV2': {
      aminoType: 'filetree/MakeRootV2',
      toAmino: (value: MsgMakeRootV2): AminoMsgMakeRootV2['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgMakeRootV2['value']): MsgMakeRootV2 => {
        return wasAmino(value)
      }
    },
    '/canine_chain.filetree.MsgAddEditors': {
      aminoType: 'filetree/AddEditors',
      toAmino: (value: MsgAddEditors): AminoMsgAddEditors['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgAddEditors['value']): MsgAddEditors => {
        return wasAmino(value)
      }
    },
    '/canine_chain.filetree.MsgRemoveEditors': {
      aminoType: 'filetree/RemoveEditors',
      toAmino: (value: MsgRemoveEditors): AminoMsgRemoveEditors['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgRemoveEditors['value']): MsgRemoveEditors => {
        return wasAmino(value)
      }
    },
    '/canine_chain.filetree.MsgResetEditors': {
      aminoType: 'filetree/ResetEditors',
      toAmino: (value: MsgResetEditors): AminoMsgResetEditors['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgResetEditors['value']): MsgResetEditors => {
        return wasAmino(value)
      }
    },
    '/canine_chain.filetree.MsgResetViewers': {
      aminoType: 'filetree/ResetViewers',
      toAmino: (value: MsgResetViewers): AminoMsgResetViewers['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgResetViewers['value']): MsgResetViewers => {
        return wasAmino(value)
      }
    },
    '/canine_chain.filetree.MsgChangeOwner': {
      aminoType: 'filetree/ChangeOwner',
      toAmino: (value: MsgChangeOwner): AminoMsgChangeOwner['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgChangeOwner['value']): MsgChangeOwner => {
        return wasAmino(value)
      }
    }
  }
}
