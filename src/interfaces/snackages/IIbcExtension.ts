/**
 * @interface IIbcExtension
 * @property {IIbcExtensionMembers} ibc
 */
export interface IIbcExtension extends Record<string, IIbcExtensionMembers> {
  readonly ibc: IIbcExtensionMembers
}

/**
 * Some functions for querying data from the IBC module.
 *
 * @interface IIbcExtensionMembers

 */
export interface IIbcExtensionMembers
  extends Record<string, (request?: any) => Promise<any>> {}
