import { MsgCreateFeed, MsgUpdateFeed } from '@/postgen/canine_chain/oracle/tx'
import {
  AminoMsgCreateFeed,
  AminoMsgUpdateFeed
} from '@/interfaces/amino/IAminoOracle'
import { AminoConverters } from '@cosmjs/stargate'

export function createOracleAminoConverters(): AminoConverters {
  return {
    '/canine_chain.oracle.MsgCreateFeed': {
      aminoType: 'oracle/CreateFeed',
      toAmino: (value: MsgCreateFeed): AminoMsgCreateFeed['value'] => ({
        creator: value.creator,
        name: value.name
      }),
      fromAmino: (value: AminoMsgCreateFeed['value']): MsgCreateFeed => ({
        creator: value.creator,
        name: value.name
      })
    },
    '/canine_chain.oracle.MsgUpdateFeed': {
      aminoType: 'oracle/UpdateFeed',
      toAmino: (value: MsgUpdateFeed): AminoMsgUpdateFeed['value'] => ({
        creator: value.creator,
        name: value.name,
        data: value.data
      }),
      fromAmino: (value: AminoMsgUpdateFeed['value']): MsgUpdateFeed => ({
        creator: value.creator,
        name: value.name,
        data: value.data
      })
    }
  }
}
