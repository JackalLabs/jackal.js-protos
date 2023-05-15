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

export function createFileTreeAminoConverters(): AminoConverters {
  return {
    '/canine_chain.filetree.MsgPostFile': {
      aminoType: 'filetree/PostFile',
      toAmino: (value: MsgPostFile): AminoMsgPostFile['value'] => ({
        creator: value.creator,
        account: value.account,
        hashParent: value.hashParent,
        hashChild: value.hashChild,
        contents: value.contents,
        viewers: value.viewers,
        editors: value.editors,
        trackingNumber: value.trackingNumber
      }),
      fromAmino: (value: AminoMsgPostFile['value']): MsgPostFile => ({
        creator: value.creator,
        account: value.account,
        hashParent: value.hashParent,
        hashChild: value.hashChild,
        contents: value.contents,
        viewers: value.viewers,
        editors: value.editors,
        trackingNumber: value.trackingNumber
      })
    },
    '/canine_chain.filetree.MsgAddViewers': {
      aminoType: 'filetree/AddViewers',
      toAmino: (value: MsgAddViewers): AminoMsgAddViewers['value'] => ({
        creator: value.creator,
        viewerIds: value.viewerIds,
        viewerKeys: value.viewerKeys,
        address: value.address,
        fileowner: value.fileowner
      }),
      fromAmino: (value: AminoMsgAddViewers['value']): MsgAddViewers => ({
        creator: value.creator,
        viewerIds: value.viewerIds,
        viewerKeys: value.viewerKeys,
        address: value.address,
        fileowner: value.fileowner
      })
    },
    '/canine_chain.filetree.MsgPostkey': {
      aminoType: 'filetree/Postkey',
      toAmino: (value: MsgPostkey): AminoMsgPostkey['value'] => ({
        creator: value.creator,
        key: value.key
      }),
      fromAmino: (value: AminoMsgPostkey['value']): MsgPostkey => ({
        creator: value.creator,
        key: value.key
      })
    },
    '/canine_chain.filetree.MsgDeleteFile': {
      aminoType: 'filetree/DeleteFile',
      toAmino: (value: MsgDeleteFile): AminoMsgDeleteFile['value'] => ({
        creator: value.creator,
        hashPath: value.hashPath,
        account: value.account
      }),
      fromAmino: (value: AminoMsgDeleteFile['value']): MsgDeleteFile => ({
        creator: value.creator,
        hashPath: value.hashPath,
        account: value.account
      })
    },
    '/canine_chain.filetree.MsgRemoveViewers': {
      aminoType: 'filetree/RemoveViewers',
      toAmino: (value: MsgRemoveViewers): AminoMsgRemoveViewers['value'] => ({
        creator: value.creator,
        viewerIds: value.viewerIds,
        address: value.address,
        fileowner: value.fileowner
      }),
      fromAmino: (value: AminoMsgRemoveViewers['value']): MsgRemoveViewers => ({
        creator: value.creator,
        viewerIds: value.viewerIds,
        address: value.address,
        fileowner: value.fileowner
      })
    },
    '/canine_chain.filetree.MsgMakeRoot': {
      aminoType: 'filetree/MakeRoot',
      toAmino: (value: MsgMakeRoot): AminoMsgMakeRoot['value'] => ({
        creator: value.creator,
        account: value.account,
        rootHashPath: value.rootHashPath,
        contents: value.contents,
        editors: value.editors,
        viewers: value.viewers,
        trackingNumber: value.trackingNumber
      }),
      fromAmino: (value: AminoMsgMakeRoot['value']): MsgMakeRoot => ({
        creator: value.creator,
        account: value.account,
        rootHashPath: value.rootHashPath,
        contents: value.contents,
        editors: value.editors,
        viewers: value.viewers,
        trackingNumber: value.trackingNumber
      })
    },
    '/canine_chain.filetree.MsgMakeRootV2': {
      aminoType: 'filetree/MakeRootV2',
      toAmino: (value: MsgMakeRootV2): AminoMsgMakeRootV2['value'] => ({
        creator: value.creator,
        editors: value.editors,
        viewers: value.viewers,
        trackingNumber: value.trackingNumber
      }),
      fromAmino: (value: AminoMsgMakeRootV2['value']): MsgMakeRootV2 => ({
        creator: value.creator,
        editors: value.editors,
        viewers: value.viewers,
        trackingNumber: value.trackingNumber
      })
    },
    '/canine_chain.filetree.MsgAddEditors': {
      aminoType: 'filetree/AddEditors',
      toAmino: (value: MsgAddEditors): AminoMsgAddEditors['value'] => ({
        creator: value.creator,
        editorIds: value.editorIds,
        editorKeys: value.editorKeys,
        address: value.address,
        fileowner: value.fileowner
      }),
      fromAmino: (value: AminoMsgAddEditors['value']): MsgAddEditors => ({
        creator: value.creator,
        editorIds: value.editorIds,
        editorKeys: value.editorKeys,
        address: value.address,
        fileowner: value.fileowner
      })
    },
    '/canine_chain.filetree.MsgRemoveEditors': {
      aminoType: 'filetree/RemoveEditors',
      toAmino: (value: MsgRemoveEditors): AminoMsgRemoveEditors['value'] => ({
        creator: value.creator,
        editorIds: value.editorIds,
        address: value.address,
        fileowner: value.fileowner
      }),
      fromAmino: (value: AminoMsgRemoveEditors['value']): MsgRemoveEditors => ({
        creator: value.creator,
        editorIds: value.editorIds,
        address: value.address,
        fileowner: value.fileowner
      })
    },
    '/canine_chain.filetree.MsgResetEditors': {
      aminoType: 'filetree/ResetEditors',
      toAmino: (value: MsgResetEditors): AminoMsgResetEditors['value'] => ({
        creator: value.creator,
        address: value.address,
        fileowner: value.fileowner
      }),
      fromAmino: (value: AminoMsgResetEditors['value']): MsgResetEditors => ({
        creator: value.creator,
        address: value.address,
        fileowner: value.fileowner
      })
    },
    '/canine_chain.filetree.MsgResetViewers': {
      aminoType: 'filetree/ResetEditors',
      toAmino: (value: MsgResetViewers): AminoMsgResetViewers['value'] => ({
        creator: value.creator,
        address: value.address,
        fileowner: value.fileowner
      }),
      fromAmino: (value: AminoMsgResetViewers['value']): MsgResetViewers => ({
        creator: value.creator,
        address: value.address,
        fileowner: value.fileowner
      })
    },
    '/canine_chain.filetree.MsgChangeOwner': {
      aminoType: 'filetree/ChangeOwner',
      toAmino: (value: MsgChangeOwner): AminoMsgChangeOwner['value'] => ({
        creator: value.creator,
        address: value.address,
        fileOwner: value.fileOwner,
        newOwner: value.newOwner
      }),
      fromAmino: (value: AminoMsgChangeOwner['value']): MsgChangeOwner => ({
        creator: value.creator,
        address: value.address,
        fileOwner: value.fileOwner,
        newOwner: value.newOwner
      })
    }
  }
}
