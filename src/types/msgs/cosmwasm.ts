import {
  MsgExecuteContract,
  MsgInstantiateContract,
} from '@/postGen/cosmwasm/wasm/v1/tx'
import { Coin } from '@/postGen/cosmos/base/v1beta1/coin'

/**
 * MsgCreateNotification Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} to - Jackal wallet address to receive the notification.
 * @prop {string} contents - Stringified JSON object of arbitrary data.
 * @prop {string} privateContents - Arbitrary byte array, intended to be encrypted compressed JSON stringified data.
 */
export type DMsgExecuteContract = Documentation<
  {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: Coin[];
  },
  MsgExecuteContract
>

/**
 * MsgDeleteNotification Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} from - Jackal wallet address which received the notification.
 * @prop {number} time - Unix timestamp of notification in microseconds.
 */
export type DMsgInstantiateContract = Documentation<
  {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: number;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
  },
  MsgInstantiateContract
>
