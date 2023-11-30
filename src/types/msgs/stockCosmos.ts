import type { Event } from '@cosmjs/stargate/build/events'
import type { Coin, DeliverTxResponse } from '@cosmjs/stargate'
import type { EncodeObject } from '@cosmjs/proto-signing'
import type { IMsgData } from '@/interfaces'

/**
 * DeliverTxResponse Documentation
 *
 * DeliverTxResponse define the response after successfully broadcasting a transaction.
 * @prop {number} height - Block height of the transaction.
 * @prop {number} txIndex - 0-based index of the transaction within the block.
 * @prop {number} code - Error code, success is always 0.
 * @prop {string} transactionHash - Hash of transaction.
 * @prop {Event[]} events - Tendermint34 events in response.
 * @prop {string} [rawLog] - A string-based log document.
 * @prop {IMsgData[]} [data] - Message responses of included Msgs.
 * @prop {DTxMsgData[]} msgResponses - Always empty list for Jackal, typed for compatibility.
 * @prop {number} gasUsed - Total gas used as calculated by chain.
 * @prop {number} gasWanted - Maximum gas allowed as submitted in transaction.
 */
export type DDeliverTxResponse = Documentation<{
  readonly height: number;
  readonly txIndex: number;
  readonly code: number;
  readonly transactionHash: string;
  readonly events: readonly Event[];
  readonly rawLog?: string;
  readonly data?: readonly IMsgData[];
  readonly msgResponses: readonly DTxMsgData[];
  readonly gasUsed: number;
  readonly gasWanted: number;
}, DeliverTxResponse>

/**
 * TxMsgData Documentation
 *
 * TxMsgData defines a msg object returned from the chain.
 * @prop {string} typeUrl - Identifier composed of msg type's package and its name.
 * @prop {Uint8Array} value - Object created from msg parameters.
 */
export type DTxMsgData = {
  typeUrl: string
  value: Uint8Array
}

/**
 * EncodeObject Documentation
 *
 * EncodeObject defines a msg object ready to be sent to chain.
 * @prop {string} typeUrl - Identifier composed of msg type's package and its name.
 * @prop {any} value - Object created from msg parameters.
 */
export type DEncodeObject = Documentation<{
  readonly typeUrl: string;
  readonly value: any;
}, EncodeObject>

/**
 * Coin Documentation
 *
 * Coin defines a token with a denomination and an amount.
 * @prop {string} denom - Denom of token, should be ujkl for Jackal.
 * @prop {string} amount - String of value parsable to number.
 */
export type DCoin = Documentation<{
  denom: string;
  amount: string;
}, Coin>
