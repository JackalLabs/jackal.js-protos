import { MsgCreateFeed, MsgUpdateFeed } from '@/postgen/canine_chain/oracle/tx'
import {
  AminoMsgCreateFeed,
  AminoMsgUpdateFeed
} from '@/interfaces/amino/IAminoOracle'
import { AminoConverters } from '@cosmjs/stargate'
import { forAmino, wasAmino } from '@/utils/converters'

export function createOracleAminoConverters(): AminoConverters {
  return {
    '/canine_chain.oracle.MsgCreateFeed': {
      aminoType: 'oracle/CreateFeed',
      toAmino: (value: MsgCreateFeed): AminoMsgCreateFeed['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgCreateFeed['value']): MsgCreateFeed => {
        return wasAmino(value)
      }
    },
    '/canine_chain.oracle.MsgUpdateFeed': {
      aminoType: 'oracle/UpdateFeed',
      toAmino: (value: MsgUpdateFeed): AminoMsgUpdateFeed['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgUpdateFeed['value']): MsgUpdateFeed => {
        return wasAmino(value)
      }
    }
  }
}
