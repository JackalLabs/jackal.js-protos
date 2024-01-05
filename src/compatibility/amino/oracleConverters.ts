import { forAmino, wasAmino } from '@/utils/converters'
import type { AminoConverters } from '@cosmjs/stargate/build/aminotypes'
import type { DMsgCreateFeed, DMsgUpdateFeed } from '@/types'

export function createOracleAminoConverters(): AminoConverters {
  return {
    '/canine_chain.oracle.MsgCreateFeed': {
      aminoType: 'oracle/CreateFeed',
      toAmino: (value: DMsgCreateFeed): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgCreateFeed => {
        return wasAmino(value)
      },
    },
    '/canine_chain.oracle.MsgUpdateFeed': {
      aminoType: 'oracle/UpdateFeed',
      toAmino: (value: DMsgUpdateFeed): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgUpdateFeed => {
        return wasAmino(value)
      },
    },
  }
}
