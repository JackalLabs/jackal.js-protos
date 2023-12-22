import { Event } from '@cosmjs/stargate'

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

/**
 * IndexedTx declaration for compatibility with Jackal chain
 * @interface IIndexedTx
 * @property {number} height
 * @property {number} txIndex
 * @property {string} hash
 * @property {number} code
 * @property {readonly Event[]} events
 * @property {string} rawLog
 * @property {Uint8Array} [data]
 * @property {Uint8Array} tx
 * @property {Array<{ readonly typeUrl: string; readonly value: Uint8Array }>} msgResponses
 * @property {number} gasUsed
 * @property {number} gasWanted
 */
export interface IIndexedTx {
  readonly height: number;
  readonly txIndex: number;
  readonly hash: string;
  readonly code: number;
  readonly events: readonly Event[];
  readonly rawLog: string;
  readonly data?: Uint8Array;
  readonly tx: Uint8Array;
  readonly msgResponses: Array<{ readonly typeUrl: string; readonly value: Uint8Array }>;
  readonly gasUsed: number;
  readonly gasWanted: number;
}

