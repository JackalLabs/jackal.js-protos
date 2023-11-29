import { MsgCreateFeed, MsgUpdateFeed } from '@/postgen/canine_chain/oracle/tx'

export type DMsgCreateFeed = Documentation<{
  creator: string;
  name: string;
}, MsgCreateFeed>

export type DMsgUpdateFeed = Documentation<{
  creator: string;
  name: string;
  data: string;
}, MsgUpdateFeed>
