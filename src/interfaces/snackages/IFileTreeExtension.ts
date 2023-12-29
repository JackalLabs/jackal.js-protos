import type {
  DQueryAllPubKeys,
  DQueryFileTreeAllFiles,
  DQueryFileTreeFile,
  DQueryFileTreeParams,
  DQueryPubKey,
} from '@/types/queries'
import type {
  TQueryAllPubKeysResponseStrict,
  TQueryFileTreeAllFilesResponseStrict,
  TQueryFileTreeFileResponseStrict,
  TQueryFileTreeParamsResponseStrict,
  TQueryPubKeyResponseStrict,
} from '@/types/queries/responses'

/**
 * @interface IFileTreeExtension
 * @property {IFileTreeExtensionMembers} fileTree
 */
export interface IFileTreeExtension {
  readonly fileTree: IFileTreeExtensionMembers
}

/**
 * All functions for querying data from the FileTree module.
 *
 * @interface IFileTreeExtensionMembers
 * @property {allFiles} allFiles()
 * @property {allPubKeys} allPubKeys()
 * @property {file} file()
 * @property {params} params()
 * @property {pubKey} pubKey()
 */
export interface IFileTreeExtensionMembers {
  /**
   * @function allFiles
   * @param {DQueryFileTreeAllFiles} request
   * @returns Promise<TQueryFileTreeAllFilesResponseStrict>
   */
  readonly allFiles: (
    request: DQueryFileTreeAllFiles,
  ) => Promise<TQueryFileTreeAllFilesResponseStrict>

  /**
   * @function allPubKeys
   * @param {DQueryAllPubKeys} request
   * @returns Promise<TQueryAllPubKeysResponseStrict>
   */
  readonly allPubKeys: (
    request: DQueryAllPubKeys,
  ) => Promise<TQueryAllPubKeysResponseStrict>

  /**
   * @function file
   * @param {DQueryFileTreeFile} request
   * @returns Promise<TQueryFileTreeFileResponseStrict>
   */
  readonly file: (
    request: DQueryFileTreeFile,
  ) => Promise<TQueryFileTreeFileResponseStrict>

  /**
   * @function params
   * @param {DQueryFileTreeParams} request
   * @returns Promise<TQueryFileTreeParamsResponseStrict>
   */
  readonly params: (
    request: DQueryFileTreeParams,
  ) => Promise<TQueryFileTreeParamsResponseStrict>

  /**
   * @function pubKey
   * @param {DQueryPubKey} request
   * @returns Promise<TQueryPubKeyResponseStrict>
   */
  readonly pubKey: (
    request: DQueryPubKey,
  ) => Promise<TQueryPubKeyResponseStrict>
}
