import {
  MsgAddEditors,
  MsgAddViewers,
  MsgChangeOwner,
  MsgDeleteFile,
  MsgPostFile,
  MsgPostKey,
  MsgProvisionFileTree,
  MsgRemoveEditors,
  MsgRemoveViewers,
  MsgResetEditors,
  MsgResetViewers,
  protobufPackage
} from '@/postgen/canine_chain/filetree/tx'
import { deprecated } from '@/utils/misc'
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
  DMsgResetViewers
} from '@/types/msgs/fileTree'
import type { IJackalModuleTypeMap } from '@/interfaces/IJackalModuleTypeMap'
import { DEncodeObject } from '@/types/msgs'

export const fileTreeTypes: IJackalModuleTypeMap = {
  addEditors: [`/${protobufPackage}.MsgAddEditors`, MsgAddEditors],
  addViewers: [`/${protobufPackage}.MsgAddViewers`, MsgAddViewers],
  changeOwner: [`/${protobufPackage}.MsgChangeOwner`, MsgChangeOwner],
  deleteFile: [`/${protobufPackage}.MsgDeleteFile`, MsgDeleteFile],
  postFile: [`/${protobufPackage}.MsgPostFile`, MsgPostFile],
  postKey: [`/${protobufPackage}.MsgPostKey`, MsgPostKey],
  provisionFileTree: [`/${protobufPackage}.MsgProvisionFileTree`, MsgProvisionFileTree],
  removeEditors: [`/${protobufPackage}.MsgRemoveEditors`, MsgRemoveEditors],
  removeViewers: [`/${protobufPackage}.MsgRemoveViewers`, MsgRemoveViewers],
  resetEditors: [`/${protobufPackage}.MsgResetEditors`, MsgResetEditors],
  resetViewers: [`/${protobufPackage}.MsgResetViewers`, MsgResetViewers]
}

export type ITxFileTree = {
  msgAddEditors(data: DMsgAddEditors): DEncodeObject
  msgAddViewers(data: DMsgAddViewers): DEncodeObject
  msgChangeOwner(data: DMsgChangeOwner): DEncodeObject
  msgDeleteFile(data: DMsgFileTreeDeleteFile): DEncodeObject
  msgPostFile(data: DMsgFileTreePostFile): DEncodeObject
  msgPostKey(data: DMsgPostKey): DEncodeObject
  msgProvisionFileTree(data: DMsgProvisionFileTree): DEncodeObject
  msgRemoveEditors(data: DMsgRemoveEditors): DEncodeObject
  msgRemoveViewers(data: DMsgRemoveViewers): DEncodeObject
  msgResetEditors(data: DMsgResetEditors): DEncodeObject
  msgResetViewers(data: DMsgResetViewers): DEncodeObject

  /* Deprecated */
  msgPostkey(_?: any): void
  msgMakeRoot(_?: any): void
  msgMakeRootV2(_?: any): void
}

export const TxFileTree: ITxFileTree = {
  msgAddEditors(data: DMsgAddEditors): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.addEditors[0],
      value: fileTreeTypes.addEditors[1].fromPartial(data)
    }
  },
  msgAddViewers(data: MsgAddViewers): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.addViewers[0],
      value: fileTreeTypes.addViewers[1].fromPartial(data)
    }
  },
  msgChangeOwner(data: MsgChangeOwner): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.changeOwner[0],
      value: fileTreeTypes.changeOwner[1].fromPartial(data)
    }
  },
  msgDeleteFile(data: MsgDeleteFile): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.deleteFile[0],
      value: fileTreeTypes.deleteFile[1].fromPartial(data)
    }
  },
  msgPostFile(data: MsgPostFile): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.postFile[0],
      value: fileTreeTypes.postFile[1].fromPartial(data)
    }
  },
  msgPostKey(data: DMsgPostKey): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.postKey[0],
      value: fileTreeTypes.postKey[1].fromPartial(data)
    }
  },
  msgProvisionFileTree(data: DMsgProvisionFileTree): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.provisionFileTree[0],
      value: fileTreeTypes.provisionFileTree[1].fromPartial(data)
    }
  },
  msgRemoveEditors(data: MsgRemoveEditors): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.removeEditors[0],
      value: fileTreeTypes.removeEditors[1].fromPartial(data)
    }
  },
  msgRemoveViewers(data: MsgRemoveViewers): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.removeViewers[0],
      value: fileTreeTypes.removeViewers[1].fromPartial(data)
    }
  },
  msgResetEditors(data: MsgResetEditors): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.resetEditors[0],
      value: fileTreeTypes.resetEditors[1].fromPartial(data)
    }
  },
  msgResetViewers(data: MsgResetViewers): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.resetViewers[0],
      value: fileTreeTypes.resetViewers[1].fromPartial(data)
    }
  },

  /* Deprecated */
  msgPostkey(_?: any): void {
    deprecated('[FileTree] msgPostkey', 'v2.0.0', {
      replacement: 'msgPostKey'
    })
    throw new Error("[FileTree] msgPostkey deprecated, please use msgPostKey")
  },
  msgMakeRoot(_?: any): void {
    deprecated('[FileTree] msgMakeRoot', 'v1.3.0', {
      replacement: 'msgProvisionFileTree'
    })
    throw new Error("[FileTree] msgMakeRoot deprecated, please use msgProvisionFileTree")
  },
  msgMakeRootV2(_?: any): void {
    deprecated('[FileTree] msgMakeRootV2', 'v2.0.0', {
      replacement: 'msgProvisionFileTree'
    })
    throw new Error("[FileTree] msgMakeRootV2 deprecated, please use msgProvisionFileTree")
  }
}
