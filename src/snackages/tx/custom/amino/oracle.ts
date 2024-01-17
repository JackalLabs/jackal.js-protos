import { MsgCreateFeed, MsgUpdateFeed } from '@/postgen/canine_chain/oracle/tx'
import { AminoConverters } from '@cosmjs/stargate'
import { sortAmino } from '@/utils/converters'

export function createOracleAminoConverters(): AminoConverters {
  return {
    '/canine_chain.oracle.MsgCreateFeed': {
      aminoType: 'oracle/CreateFeed',
      toAmino: (value: MsgCreateFeed): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgCreateFeed => {
        return {
          creator: value.creator,
          name: value.name
        }
      }
    },
    '/canine_chain.oracle.MsgUpdateFeed': {
      aminoType: 'oracle/UpdateFeed',
      toAmino: (value: MsgUpdateFeed): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgUpdateFeed => {
        return {
          creator: value.creator,
          name: value.name,
          data: value.data
        }
      }
    }
  }
}
