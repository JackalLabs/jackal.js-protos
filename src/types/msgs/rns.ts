import type {
    MsgAcceptBid,
    MsgAddRecord,
    MsgBid,
    MsgBuy,
    MsgCancelBid,
    MsgDelist,
    MsgDelRecord,
    MsgInit,
    MsgList,
    MsgMakePrimary,
    MsgRegister,
    MsgRegisterName,
    MsgTransfer,
    MsgUpdate,
} from '@/postGen/canine_chain/rns/tx'
import type {DCoin} from '@/types'

/**
 * MsgAcceptBid Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 * @prop {string} from - Jackal address of submitted bid being accepted.
 */
export type DMsgAcceptBid = Documentation<
  {
    creator: string
    name: string
    from: string
  },
  MsgAcceptBid
>

/**
 * MsgAddRecord Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 * @prop {string} value - Record details to set.
 * @prop {string} data - Record details to set.
 * @prop {string} record - Record details to set.
 */
export type DMsgAddRecord = Documentation<
  {
    creator: string
    name: string
    value: string
    data: string
    record: string
  },
  MsgAddRecord
>

/**
 * MsgBid Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 * @prop {DCoin} bid - Bid value as Coin.
 */
export type DMsgBid = Documentation<
  {
    creator: string
    name: string
    bid: DCoin | undefined
  },
  MsgBid
>

/**
 * MsgBuy Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 */
export type DMsgBuy = Documentation<
  {
    creator: string
    name: string
  },
  MsgBuy
>

/**
 * MsgCancelBid Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 */
export type DMsgCancelBid = Documentation<
  {
    creator: string
    name: string
  },
  MsgCancelBid
>

/**
 * MsgDelist Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 */
export type DMsgDelist = Documentation<
  {
    creator: string
    name: string
  },
  MsgDelist
>

/**
 * MsgDelRecord Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 */
export type DMsgDelRecord = Documentation<
  {
    creator: string
    name: string
  },
  MsgDelRecord
>

/**
 * MsgInit Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 */
export type DMsgInit = Documentation<
  {
    creator: string
  },
  MsgInit
>

/**
 * MsgList Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 * @prop {DCoin} price - List price as Coin.
 */
export type DMsgList = Documentation<
  {
    creator: string
    name: string
    price: DCoin | undefined
  },
  MsgList
>

/**
 * MsgMakePrimary Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 */
export type DMsgMakePrimary = Documentation<
  {
    creator: string
    name: string
  },
  MsgMakePrimary
>

/**
 * MsgRegister Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 * @prop {number} years - Number of years to register new RNS for.
 * @prop {string} data - Details about the RNS.
 */
export type DMsgRegister = Documentation<
  {
    creator: string
    name: string
    years: number
    data: string
  },
  MsgRegister
>

/**
 * MsgRegisterName Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 * @prop {number} years - Number of years to register new RNS for.
 * @prop {string} data - Details about the RNS.
 * @prop {boolean} setPrimary - If RNS is primary for wallet.
 */
export type DMsgRegisterName = Documentation<
  {
    creator: string
    name: string
    years: number
    data: string
    setPrimary: boolean
  },
  MsgRegisterName
>

/**
 * MsgTransfer Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 * @prop {string} receiver - Jackal address of receiving party.
 */
export type DMsgTransfer = Documentation<
  {
    creator: string
    name: string
    receiver: string
  },
  MsgTransfer
>

/**
 * MsgUpdate Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - RNS address.
 * @prop {string} data - Details about the RNS.
 */
export type DMsgUpdate = Documentation<
  {
    creator: string
    name: string
    data: string
  },
  MsgUpdate
>
