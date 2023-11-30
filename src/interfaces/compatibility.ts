/**
 * MsgData declaration for compatibility with Jackal chain
 * @interface IMsgData
 * @property {string} msgType
 * @property {Uint8Array} data
 */
export interface IMsgData {
  msgType: string;
  data: Uint8Array;
}
