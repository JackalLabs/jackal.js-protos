import type { Event } from '@cosmjs/stargate/build/events'
import type { Coin, DeliverTxResponse } from '@cosmjs/stargate'
import type { EncodeObject } from '@cosmjs/proto-signing'
import { IMsgData } from '@/interfaces'

export type DDeliverTxResponse = Documentation<{
  readonly height: number;
  readonly txIndex: number;
  readonly code: number;
  readonly transactionHash: string;
  readonly events: readonly Event[];
  readonly rawLog?: string;
  readonly data?: readonly IMsgData[];
  readonly msgResponses: Array<{
    readonly typeUrl: string;
    readonly value: Uint8Array;
  }>;
  readonly gasUsed: number;
  readonly gasWanted: number;
}, DeliverTxResponse>

export type DEncodeObject = Documentation<{
  readonly typeUrl: string;
  readonly value: any;
}, EncodeObject>

export type DCoin = Documentation<{
  denom: string;
  amount: string;
}, Coin>




/*

/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
export interface Coin {
  denom: string;
  amount: string;
}


 */





// export interface DeliverTxResponse {
//   readonly height: number;
//   /** The position of the transaction within the block. This is a 0-based index. */
//   readonly txIndex: number;
//   /** Error code. The transaction suceeded iff code is 0. */
//   readonly code: number;
//   readonly transactionHash: string;
//   readonly events: readonly Event[];
//   /**
//    * A string-based log document.
//    *
//    * This currently seems to merge attributes of multiple events into one event per type
//    * (https://github.com/tendermint/tendermint/issues/9595). You might want to use the `events`
//    * field instead.
//    */
//   readonly rawLog?: string;
//   /** @deprecated Use `msgResponses` instead. */
//   readonly data?: readonly MsgData[];
//   /**
//    * The message responses of the [TxMsgData](https://github.com/cosmos/cosmos-sdk/blob/v0.46.3/proto/cosmos/base/abci/v1beta1/abci.proto#L128-L140)
//    * as `Any`s.
//    * This field is an empty list for chains running Cosmos SDK < 0.46.
//    */
//   readonly msgResponses: Array<{
//     readonly typeUrl: string;
//     readonly value: Uint8Array;
//   }>;
//   readonly gasUsed: number;
//   readonly gasWanted: number;
// }
