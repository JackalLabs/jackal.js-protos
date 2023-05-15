import { MsgCreateFeed, MsgUpdateFeed } from '@/postgen/canine_chain/oracle/tx'
import { EncodeObject } from '@cosmjs/proto-signing'
import ITypeTuple from '@/interfaces/ITypeTuple'

const oracleTypes: ITypeTuple = {
  createFeed: ['/canine_chain.oracle.MsgCreateFeed', MsgCreateFeed],
  updateFeed: ['/canine_chain.oracle.MsgUpdateFeed', MsgUpdateFeed]
}

export default oracleTypes

export interface ITxOracle {
  msgCreateFeed(data: MsgCreateFeed): EncodeObject
  msgUpdateFeed(data: MsgUpdateFeed): EncodeObject
}

export class TxOracle implements ITxOracle {
  msgCreateFeed(data: MsgCreateFeed): EncodeObject {
    return {
      typeUrl: oracleTypes.createFeed[0],
      value: oracleTypes.createFeed[1].fromPartial(data)
    }
  }
  msgUpdateFeed(data: MsgUpdateFeed): EncodeObject {
    return {
      typeUrl: oracleTypes.updateFeed[0],
      value: oracleTypes.updateFeed[1].fromPartial(data)
    }
  }
}
