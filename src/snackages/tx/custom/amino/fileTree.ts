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
import { AminoConverters } from '@cosmjs/stargate'
import { sortAmino, wasAmino } from '@/utils/converters'

export function createFileTreeAminoConverters(): AminoConverters {
  return {
    '/canine_chain.filetree.MsgPostFile': {
      aminoType: 'filetree/PostFile',
      toAmino: (value: MsgPostFile): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgPostFile => {
        return {
          creator: value.creator,
          account: value.account,
          hashParent: value.hashParent,
          hashChild: value.hashChild,
          contents: value.contents,
          viewers: value.viewers,
          editors: value.editors,
          trackingNumber: value.trackingNumber
        }
      }
    },
    '/canine_chain.filetree.MsgAddViewers': {
      aminoType: 'filetree/AddViewers',
      toAmino: (value: MsgAddViewers): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgAddViewers => {
        return {
          creator: value.creator,
          viewerIds: value.viewerIds,
          viewerKeys: value.viewerKeys,
          address: value.address,
          fileowner: value.fileowner
        }
      }
    },
    '/canine_chain.filetree.MsgPostkey': {
      aminoType: 'filetree/Postkey',
      toAmino: (value: MsgPostkey): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgPostkey => {
        return {
          creator: value.creator,
          key: value.key
        }
      }
    },
    '/canine_chain.filetree.MsgDeleteFile': {
      aminoType: 'filetree/DeleteFile',
      toAmino: (value: MsgDeleteFile): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgDeleteFile => {
        return {
          creator: value.creator,
          hashPath: value.hashPath,
          account: value.account
        }
      }
    },
    '/canine_chain.filetree.MsgRemoveViewers': {
      aminoType: 'filetree/RemoveViewers',
      toAmino: (value: MsgRemoveViewers): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgRemoveViewers => {
        return {
          creator: value.creator,
          viewerIds: value.viewerIds,
          address: value.address,
          fileowner: value.fileowner
        }
      }
    },
    '/canine_chain.filetree.MsgMakeRoot': {
      aminoType: 'filetree/MakeRoot',
      toAmino: (value: MsgMakeRoot): any => {
        // deprecated
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgMakeRoot => {
        // deprecated
        return wasAmino(value)
      }
    },
    '/canine_chain.filetree.MsgMakeRootV2': {
      aminoType: 'filetree/MakeRootV2',
      toAmino: (value: MsgMakeRootV2): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgMakeRootV2 => {
        return {
          creator: value.creator,
          editors: value.editors,
          viewers: value.viewers,
          trackingNumber: value.trackingNumber
        }
      }
    },
    '/canine_chain.filetree.MsgAddEditors': {
      aminoType: 'filetree/AddEditors',
      toAmino: (value: MsgAddEditors): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgAddEditors => {
        return {
          creator: value.creator,
          editorIds: value.editorIds,
          editorKeys: value.editorKeys,
          address: value.address,
          fileowner: value.fileowner
        }
      }
    },
    '/canine_chain.filetree.MsgRemoveEditors': {
      aminoType: 'filetree/RemoveEditors',
      toAmino: (value: MsgRemoveEditors): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgRemoveEditors => {
        return {
          creator: value.creator,
          editorIds: value.editorIds,
          address: value.address,
          fileowner: value.fileowner
        }
      }
    },
    '/canine_chain.filetree.MsgResetEditors': {
      aminoType: 'filetree/ResetEditors',
      toAmino: (value: MsgResetEditors): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgResetEditors => {
        return {
          creator: value.creator,
          address: value.address,
          fileowner: value.fileowner
        }
      }
    },
    '/canine_chain.filetree.MsgResetViewers': {
      aminoType: 'filetree/ResetViewers',
      toAmino: (value: MsgResetViewers): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgResetViewers => {
        return {
          creator: value.creator,
          address: value.address,
          fileowner: value.fileowner
        }
      }
    },
    '/canine_chain.filetree.MsgChangeOwner': {
      aminoType: 'filetree/ChangeOwner',
      toAmino: (value: MsgChangeOwner): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgChangeOwner => {
        return {
          creator: value.creator,
          address: value.address,
          fileOwner: value.fileOwner,
          newOwner: value.newOwner
        }
      }
    }
  }
}
