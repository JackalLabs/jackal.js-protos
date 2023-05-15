import { MsgMultiSend, MsgSend } from '@/postgen/cosmos/bank/v1beta1/tx'
import { EncodeObject } from '@cosmjs/proto-signing'
import ITypeTuple from '@/interfaces/ITypeTuple'

const bankTypes: ITypeTuple = {
  multiSend: ['/cosmos.bank.v1beta1.MsgMultiSend', MsgMultiSend],
  send: ['/cosmos.bank.v1beta1.MsgSend', MsgSend]
}

export default bankTypes

export interface ITxBank {
  msgMultiSend(data: MsgMultiSend): EncodeObject
  msgSend(data: MsgSend): EncodeObject
}

export class TxBank implements ITxBank {
  msgMultiSend(data: MsgMultiSend): EncodeObject {
    return {
      typeUrl: bankTypes.multiSend[0],
      value: bankTypes.multiSend[1].fromPartial(data)
    }
  }
  msgSend(data: MsgSend): EncodeObject {
    return {
      typeUrl: bankTypes.send[0],
      value: bankTypes.send[1].fromPartial(data)
    }
  }
}
