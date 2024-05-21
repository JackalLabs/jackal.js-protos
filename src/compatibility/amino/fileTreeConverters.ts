import { sortAndSnake } from '@/utils/converters'
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
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgAddEditors => {
        return {
          creator: value.creator,
          editorIds: value.editor_ids,
          editorKeys: value.editor_keys,
          address: value.address,
          fileOwner: value.file_owner,
        }
      },
    },
    '/canine_chain.filetree.MsgAddViewers': {
      aminoType: 'filetree/AddViewers',
      toAmino: (value: DMsgAddViewers): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgAddViewers => {
        return {
          creator: value.creator,
          viewerIds: value.viewer_ids,
          viewerKeys: value.accviewer_keysount,
          address: value.address,
          fileOwner: value.file_owner,
        }
      },
    },
    '/canine_chain.filetree.MsgChangeOwner': {
      aminoType: 'filetree/ChangeOwner',
      toAmino: (value: DMsgChangeOwner): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgChangeOwner => {
        return {
          creator: value.creator,
          address: value.address,
          fileOwner: value.file_owner,
          newOwner: value.new_owner,
        }
      },
    },
    '/canine_chain.filetree.MsgDeleteFile': {
      aminoType: 'filetree/DeleteFile',
      toAmino: (value: DMsgFileTreeDeleteFile): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgFileTreeDeleteFile => {
        return {
          creator: value.creator,
          hashPath: value.hash_path,
          account: value.account,
        }
      },
    },
    '/canine_chain.filetree.MsgPostFile': {
      aminoType: 'filetree/PostFile',
      toAmino: (value: DMsgFileTreePostFile): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgFileTreePostFile => {
        return {
          creator: value.creator,
          account: value.account,
          hashParent: value.hash_parent,
          hashChild: value.hash_child,
          contents: value.contents,
          viewers: value.viewers,
          editors: value.editors,
          trackingNumber: value.tracking_number,
        }
      },
    },
    '/canine_chain.filetree.MsgPostKey': {
      aminoType: 'filetree/PostKey',
      toAmino: (value: DMsgPostKey): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgPostKey => {
        return {
          creator: value.creator,
          key: value.key,
        }
      },
    },
    '/canine_chain.filetree.MsgProvisionFileTree': {
      aminoType: 'filetree/ProvisionFileTree',
      toAmino: (value: DMsgProvisionFileTree): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgProvisionFileTree => {
        return {
          creator: value.creator,
          editors: value.editors,
          viewers: value.viewers,
          trackingNumber: value.tracking_number,
        }
      },
    },
    '/canine_chain.filetree.MsgRemoveEditors': {
      aminoType: 'filetree/RemoveEditors',
      toAmino: (value: DMsgRemoveEditors): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgRemoveEditors => {
        return {
          creator: value.creator,
          editorIds: value.editor_ids,
          address: value.address,
          fileOwner: value.file_owner,
        }
      },
    },
    '/canine_chain.filetree.MsgRemoveViewers': {
      aminoType: 'filetree/RemoveViewers',
      toAmino: (value: DMsgRemoveViewers): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgRemoveViewers => {
        return {
          creator: value.creator,
          viewerIds: value.viewer_ids,
          address: value.address,
          fileOwner: value.file_owner,
        }
      },
    },
    '/canine_chain.filetree.MsgResetEditors': {
      aminoType: 'filetree/ResetEditors',
      toAmino: (value: DMsgResetEditors): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgResetEditors => {
        return {
          creator: value.creator,
          address: value.address,
          fileOwner: value.file_owner,
        }
      },
    },
    '/canine_chain.filetree.MsgResetViewers': {
      aminoType: 'filetree/ResetViewers',
      toAmino: (value: DMsgResetViewers): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgResetViewers => {
        return {
          creator: value.creator,
          address: value.address,
          fileOwner: value.file_owner,
        }
      },
    },
  }
}
