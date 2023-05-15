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
import { EncodeObject } from '@cosmjs/proto-signing'
import ITypeTuple from '@/interfaces/ITypeTuple'
import { deprecated } from '@/utils/misc'

const fileTreeTypes: ITypeTuple = {
  postFile: ['/canine_chain.filetree.MsgPostFile', MsgPostFile],
  addViewers: ['/canine_chain.filetree.MsgAddViewers', MsgAddViewers],
  postkey: ['/canine_chain.filetree.MsgPostkey', MsgPostkey],
  deleteFile: ['/canine_chain.filetree.MsgDeleteFile', MsgDeleteFile],
  removeViewers: ['/canine_chain.filetree.MsgRemoveViewers', MsgRemoveViewers],
  makeRoot: ['/canine_chain.filetree.MsgMakeRoot', MsgMakeRoot],
  makeRootV2: ['/canine_chain.filetree.MsgMakeRootV2', MsgMakeRootV2],
  addEditors: ['/canine_chain.filetree.MsgAddEditors', MsgAddEditors],
  removeEditors: ['/canine_chain.filetree.MsgRemoveEditors', MsgRemoveEditors],
  resetEditors: ['/canine_chain.filetree.MsgResetEditors', MsgResetEditors],
  resetViewers: ['/canine_chain.filetree.MsgResetViewers', MsgResetViewers],
  changeOwner: ['/canine_chain.filetree.MsgChangeOwner', MsgChangeOwner]
}

export default fileTreeTypes

export interface ITxFileTree {
  msgPostFile(data: MsgPostFile): EncodeObject
  msgAddViewers(data: MsgAddViewers): EncodeObject
  msgPostkey(data: MsgPostkey): EncodeObject
  msgDeleteFile(data: MsgDeleteFile): EncodeObject
  msgRemoveViewers(data: MsgRemoveViewers): EncodeObject
  msgMakeRoot(data: MsgMakeRoot): EncodeObject
  msgMakeRootV2(data: MsgMakeRootV2): EncodeObject
  msgAddEditors(data: MsgAddEditors): EncodeObject
  msgRemoveEditors(data: MsgRemoveEditors): EncodeObject
  msgResetEditors(data: MsgResetEditors): EncodeObject
  msgResetViewers(data: MsgResetViewers): EncodeObject
  msgChangeOwner(data: MsgChangeOwner): EncodeObject
}

export class TxFileTree implements ITxFileTree {
  msgPostFile(data: MsgPostFile): EncodeObject {
    return {
      typeUrl: fileTreeTypes.postFile[0],
      value: fileTreeTypes.postFile[1].fromPartial(data)
    }
  }
  msgAddViewers(data: MsgAddViewers): EncodeObject {
    return {
      typeUrl: fileTreeTypes.addViewers[0],
      value: fileTreeTypes.addViewers[1].fromPartial(data)
    }
  }
  msgPostkey(data: MsgPostkey): EncodeObject {
    return {
      typeUrl: fileTreeTypes.postkey[0],
      value: fileTreeTypes.postkey[1].fromPartial(data)
    }
  }
  msgDeleteFile(data: MsgDeleteFile): EncodeObject {
    return {
      typeUrl: fileTreeTypes.deleteFile[0],
      value: fileTreeTypes.deleteFile[1].fromPartial(data)
    }
  }
  msgRemoveViewers(data: MsgRemoveViewers): EncodeObject {
    return {
      typeUrl: fileTreeTypes.removeViewers[0],
      value: fileTreeTypes.removeViewers[1].fromPartial(data)
    }
  }
  msgMakeRoot(data: MsgMakeRoot): EncodeObject {
    deprecated('[FileTree] msgMakeRoot', 'v1.3.0', {
      replacement: 'msgMakeRootV2'
    })
    return {
      typeUrl: fileTreeTypes.makeRoot[0],
      value: fileTreeTypes.makeRoot[1].fromPartial(data)
    }
  }
  msgMakeRootV2(data: MsgMakeRootV2): EncodeObject {
    return {
      typeUrl: fileTreeTypes.makeRootV2[0],
      value: fileTreeTypes.makeRootV2[1].fromPartial(data)
    }
  }
  msgAddEditors(data: MsgAddEditors): EncodeObject {
    return {
      typeUrl: fileTreeTypes.addEditors[0],
      value: fileTreeTypes.addEditors[1].fromPartial(data)
    }
  }
  msgRemoveEditors(data: MsgRemoveEditors): EncodeObject {
    return {
      typeUrl: fileTreeTypes.removeEditors[0],
      value: fileTreeTypes.removeEditors[1].fromPartial(data)
    }
  }
  msgResetEditors(data: MsgResetEditors): EncodeObject {
    return {
      typeUrl: fileTreeTypes.resetEditors[0],
      value: fileTreeTypes.resetEditors[1].fromPartial(data)
    }
  }
  msgResetViewers(data: MsgResetViewers): EncodeObject {
    return {
      typeUrl: fileTreeTypes.resetViewers[0],
      value: fileTreeTypes.resetViewers[1].fromPartial(data)
    }
  }
  msgChangeOwner(data: MsgChangeOwner): EncodeObject {
    return {
      typeUrl: fileTreeTypes.changeOwner[0],
      value: fileTreeTypes.changeOwner[1].fromPartial(data)
    }
  }
}
