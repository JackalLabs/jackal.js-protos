/**
 *
 * @interface IMsgResponse
 * @property {string} msgType
 * @property {Uint8Array} data
 */
export interface IMsgResponse {
  msgType: string
  data: Uint8Array
}
