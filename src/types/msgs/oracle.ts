import type { MsgCreateFeed, MsgUpdateFeed } from '@/postGen/canine_chain/oracle/tx'

/**
 * MsgCreateFeed Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - Unique name of Oracle feed to create.
 */
export type DMsgCreateFeed = Documentation<
  {
    creator: string
    name: string
  },
  MsgCreateFeed
>

/**
 * MsgUpdateFeed Documentation
 * @prop {string} creator - Jackal address of wallet creating the tx.
 * @prop {string} name - Unique name of Oracle feed to update.
 * @prop {string} data - Stringified JSON object of arbitrary data.
 */
export type DMsgUpdateFeed = Documentation<
  {
    creator: string
    name: string
    data: string
  },
  MsgUpdateFeed
>
