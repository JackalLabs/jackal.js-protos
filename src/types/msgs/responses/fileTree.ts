import {
  MsgAddEditorsResponse,
  MsgAddViewersResponse,
  MsgChangeOwnerResponse,
  MsgDeleteFileResponse,
  MsgPostFileResponse,
  MsgPostKeyResponse,
  MsgProvisionFileTreeResponse,
  MsgRemoveEditorsResponse,
  MsgRemoveViewersResponse,
  MsgResetEditorsResponse,
  MsgResetViewersResponse,
} from '@/postGen/canine_chain/filetree/tx'

/**
 * MsgFileTreePostFileResponse Documentation
 * @prop {string} path - Address of stored FileTree entry.
 */
export type DMsgFileTreePostFileResponse = Documentation<
  {
    path: string
  },
  MsgPostFileResponse
>

/**
 * MsgAddViewersResponse Documentation
 */
export type DMsgAddViewersResponse = Documentation<{}, MsgAddViewersResponse>

/**
 * MsgPostKeyResponse Documentation
 */
export type DMsgPostKeyResponse = Documentation<{}, MsgPostKeyResponse>

/**
 * MsgFileTreeDeleteFileResponse Documentation
 */
export type DMsgFileTreeDeleteFileResponse = Documentation<
  {},
  MsgDeleteFileResponse
>

/**
 * MsgRemoveViewersResponse Documentation
 */
export type DMsgRemoveViewersResponse = Documentation<
  {},
  MsgRemoveViewersResponse
>

/**
 * MsgProvisionFileTreeResponse Documentation
 */
export type DMsgProvisionFileTreeResponse = Documentation<
  {},
  MsgProvisionFileTreeResponse
>

/**
 * MsgAddEditorsResponse Documentation
 */
export type DMsgAddEditorsResponse = Documentation<{}, MsgAddEditorsResponse>

/**
 * MsgRemoveEditorsResponse Documentation
 */
export type DMsgRemoveEditorsResponse = Documentation<
  {},
  MsgRemoveEditorsResponse
>

/**
 * MsgResetEditorsResponse Documentation
 */
export type DMsgResetEditorsResponse = Documentation<
  {},
  MsgResetEditorsResponse
>

/**
 * MsgResetViewersResponse Documentation
 */
export type DMsgResetViewersResponse = Documentation<
  {},
  MsgResetViewersResponse
>

/**
 * MsgChangeOwnerResponse Documentation
 */
export type DMsgChangeOwnerResponse = Documentation<{}, MsgChangeOwnerResponse>
