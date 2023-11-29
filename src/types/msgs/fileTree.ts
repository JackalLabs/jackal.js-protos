import type {
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
  MsgResetViewers
} from '@/postgen/canine_chain/filetree/tx'

export type DMsgAddEditors = Documentation<{
  creator: string;
  editorIds: string;
  editorKeys: string;
  address: string;
  fileOwner: string;
}, MsgAddEditors>

export type DMsgAddViewers = Documentation<{
  creator: string;
  viewerIds: string;
  viewerKeys: string;
  address: string;
  fileOwner: string;
}, MsgAddViewers>

export type DMsgChangeOwner = Documentation<{
  creator: string;
  address: string;
  fileOwner: string;
  newOwner: string;
}, MsgChangeOwner>

export type DMsgFileTreeDeleteFile = Documentation<{
  creator: string;
  hashPath: string;
  account: string;
}, MsgDeleteFile>

export type DMsgFileTreePostFile = Documentation<{
  creator: string;
  account: string;
  hashParent: string;
  hashChild: string;
  contents: string;
  viewers: string;
  editors: string;
  trackingNumber: string;
}, MsgPostFile>

export type DMsgPostKey = Documentation<{
  creator: string;
  key: string;
}, MsgPostKey>

export type DMsgProvisionFileTree = Documentation<{
  creator: string;
  editors: string;
  viewers: string;
  trackingNumber: string;
}, MsgProvisionFileTree>

export type DMsgRemoveEditors = Documentation<{
  creator: string;
  editorIds: string;
  address: string;
  fileOwner: string;
}, MsgRemoveEditors>

export type DMsgRemoveViewers = Documentation<{
  creator: string;
  viewerIds: string;
  address: string;
  fileOwner: string;
}, MsgRemoveViewers>

export type DMsgResetEditors = Documentation<{
  creator: string;
  address: string;
  fileOwner: string;
}, MsgResetEditors>

export type DMsgResetViewers = Documentation<{
  creator: string;
  address: string;
  fileOwner: string;
}, MsgResetViewers>
