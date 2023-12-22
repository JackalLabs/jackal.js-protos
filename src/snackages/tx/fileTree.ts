import {
  MsgAddEditors,
  MsgAddEditorsResponse,
  MsgAddViewers,
  MsgAddViewersResponse,
  MsgChangeOwner,
  MsgChangeOwnerResponse,
  MsgDeleteFile,
  MsgDeleteFileResponse,
  MsgPostFile,
  MsgPostFileResponse,
  MsgPostKey,
  MsgPostKeyResponse,
  MsgProvisionFileTree,
  MsgProvisionFileTreeResponse,
  MsgRemoveEditors,
  MsgRemoveEditorsResponse,
  MsgRemoveViewers,
  MsgRemoveViewersResponse,
  MsgResetEditors,
  MsgResetEditorsResponse,
  MsgResetViewers,
  MsgResetViewersResponse,
  protobufPackage,
} from '@/postGen/canine_chain/filetree/tx'
import { deprecated } from '@/utils/misc'
import type {
  DEncodeObject,
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
} from '@/types/msgs'
import type { TJackalModuleTypeMap, TMsgResponseParsers } from '@/types'
import _m0 from 'protobufjs/minimal'

export const fileTreeTypes: TJackalModuleTypeMap = {
  addEditors: [`/${protobufPackage}.MsgAddEditors`, MsgAddEditors],
  addViewers: [`/${protobufPackage}.MsgAddViewers`, MsgAddViewers],
  changeOwner: [`/${protobufPackage}.MsgChangeOwner`, MsgChangeOwner],
  deleteFile: [`/${protobufPackage}.MsgDeleteFile`, MsgDeleteFile],
  postFile: [`/${protobufPackage}.MsgPostFile`, MsgPostFile],
  postKey: [`/${protobufPackage}.MsgPostKey`, MsgPostKey],
  provisionFileTree: [
    `/${protobufPackage}.MsgProvisionFileTree`,
    MsgProvisionFileTree,
  ],
  removeEditors: [`/${protobufPackage}.MsgRemoveEditors`, MsgRemoveEditors],
  removeViewers: [`/${protobufPackage}.MsgRemoveViewers`, MsgRemoveViewers],
  resetEditors: [`/${protobufPackage}.MsgResetEditors`, MsgResetEditors],
  resetViewers: [`/${protobufPackage}.MsgResetViewers`, MsgResetViewers],
}

export const fileTreeResponses: TMsgResponseParsers = {
  [fileTreeTypes.addEditors[0]]: (data: Uint8Array) =>
    MsgAddEditorsResponse.decode(_m0.Reader.create(data)),
  [fileTreeTypes.addViewers[0]]: (data: Uint8Array) =>
    MsgAddViewersResponse.decode(_m0.Reader.create(data)),
  [fileTreeTypes.changeOwner[0]]: (data: Uint8Array) =>
    MsgChangeOwnerResponse.decode(_m0.Reader.create(data)),
  [fileTreeTypes.deleteFile[0]]: (data: Uint8Array) =>
    MsgDeleteFileResponse.decode(_m0.Reader.create(data)),
  [fileTreeTypes.postFile[0]]: (data: Uint8Array) =>
    MsgPostFileResponse.decode(_m0.Reader.create(data)),
  [fileTreeTypes.postKey[0]]: (data: Uint8Array) =>
    MsgPostKeyResponse.decode(_m0.Reader.create(data)),
  [fileTreeTypes.provisionFileTree[0]]: (data: Uint8Array) =>
    MsgProvisionFileTreeResponse.decode(_m0.Reader.create(data)),
  [fileTreeTypes.removeEditors[0]]: (data: Uint8Array) =>
    MsgRemoveEditorsResponse.decode(_m0.Reader.create(data)),
  [fileTreeTypes.removeViewers[0]]: (data: Uint8Array) =>
    MsgRemoveViewersResponse.decode(_m0.Reader.create(data)),
  [fileTreeTypes.resetEditors[0]]: (data: Uint8Array) =>
    MsgResetEditorsResponse.decode(_m0.Reader.create(data)),
  [fileTreeTypes.resetViewers[0]]: (data: Uint8Array) =>
    MsgResetViewersResponse.decode(_m0.Reader.create(data)),
}

/**
 * All functions for creating FileTree Tx.
 *
 * @property {msgAddEditors} msgAddEditors()
 * @property {msgAddViewers} msgAddViewers()
 * @property {msgChangeOwner} msgChangeOwner()
 * @property {msgDeleteFile} msgDeleteFile()
 * @property {msgPostKey} msgPostKey()
 * @property {msgProvisionFileTree} msgProvisionFileTree()
 * @property {msgRemoveEditors} msgRemoveEditors()
 * @property {msgRemoveViewers} msgRemoveViewers()
 * @property {msgResetEditors} msgResetEditors()
 * @property {msgResetViewers} msgResetViewers()
 * @property {msgPostkey} msgPostkey() deprecated
 * @property {msgMakeRoot} msgMakeRoot() deprecated
 * @property {msgMakeRootV2} msgMakeRootV2() deprecated
 */
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

  /**
   * @deprecated since v2.0.0
   */
  msgPostkey(_?: any): void

  /**
   * @deprecated since v1.3.0
   */
  msgMakeRoot(_?: any): void

  /**
   * @deprecated since v2.0.0
   */
  msgMakeRootV2(_?: any): void
}

export const TxFileTree: ITxFileTree = {
  msgAddEditors(data: DMsgAddEditors): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.addEditors[0],
      value: fileTreeTypes.addEditors[1].fromPartial(data),
    }
  },
  msgAddViewers(data: MsgAddViewers): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.addViewers[0],
      value: fileTreeTypes.addViewers[1].fromPartial(data),
    }
  },
  msgChangeOwner(data: MsgChangeOwner): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.changeOwner[0],
      value: fileTreeTypes.changeOwner[1].fromPartial(data),
    }
  },
  msgDeleteFile(data: MsgDeleteFile): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.deleteFile[0],
      value: fileTreeTypes.deleteFile[1].fromPartial(data),
    }
  },
  msgPostFile(data: MsgPostFile): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.postFile[0],
      value: fileTreeTypes.postFile[1].fromPartial(data),
    }
  },
  msgPostKey(data: DMsgPostKey): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.postKey[0],
      value: fileTreeTypes.postKey[1].fromPartial(data),
    }
  },
  msgProvisionFileTree(data: DMsgProvisionFileTree): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.provisionFileTree[0],
      value: fileTreeTypes.provisionFileTree[1].fromPartial(data),
    }
  },
  msgRemoveEditors(data: MsgRemoveEditors): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.removeEditors[0],
      value: fileTreeTypes.removeEditors[1].fromPartial(data),
    }
  },
  msgRemoveViewers(data: MsgRemoveViewers): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.removeViewers[0],
      value: fileTreeTypes.removeViewers[1].fromPartial(data),
    }
  },
  msgResetEditors(data: MsgResetEditors): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.resetEditors[0],
      value: fileTreeTypes.resetEditors[1].fromPartial(data),
    }
  },
  msgResetViewers(data: MsgResetViewers): DEncodeObject {
    return {
      typeUrl: fileTreeTypes.resetViewers[0],
      value: fileTreeTypes.resetViewers[1].fromPartial(data),
    }
  },

  /* Deprecated */
  msgPostkey(_?: any): void {
    deprecated('[FileTree] msgPostkey', 'v2.0.0', {
      abort: true,
      replacement: 'msgPostKey',
    }).catch((err) => {
      throw err
    })
  },
  msgMakeRoot(_?: any): void {
    deprecated('[FileTree] msgMakeRoot', 'v1.3.0', {
      abort: true,
      replacement: 'msgProvisionFileTree',
    }).catch((err) => {
      throw err
    })
  },
  msgMakeRootV2(_?: any): void {
    deprecated('[FileTree] msgMakeRootV2', 'v2.0.0', {
      abort: true,
      replacement: 'msgProvisionFileTree',
    }).catch((err) => {
      throw err
    })
  },
}
