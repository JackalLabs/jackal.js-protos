import { MsgUnjail } from '@/postgen/cosmos/slashing/v1beta1/tx'
import { EncodeObject } from '@cosmjs/proto-signing'
import ITypeTuple from '@/interfaces/ITypeTuple'

const slashingTypes: ITypeTuple = {
  unjail: ['/cosmos.slashing.v1beta1.MsgUnjail', MsgUnjail]
}

export default slashingTypes

export interface ITxSlashing {
  msgUnjail(data: MsgUnjail): EncodeObject
}

export class TxSlashing implements ITxSlashing {
  msgUnjail(data: MsgUnjail): EncodeObject {
    return {
      typeUrl: slashingTypes.unjail[0],
      value: slashingTypes.unjail[1].fromPartial(data)
    }
  }
}
