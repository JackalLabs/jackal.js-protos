import {
  MsgBeginRedelegate,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate
} from '@/postgen/cosmos/staking/v1beta1/tx'
import { EncodeObject } from '@cosmjs/proto-signing'
import ITypeTuple from '@/interfaces/ITypeTuple'

const stakingTypes: ITypeTuple = {
  beginRedelegate: [
    '/cosmos.staking.v1beta1.MsgBeginRedelegate',
    MsgBeginRedelegate
  ],
  msgCreateValidator: [
    '/cosmos.staking.v1beta1.MsgCreateValidator',
    MsgCreateValidator
  ],
  delegate: ['/cosmos.staking.v1beta1.MsgDelegate', MsgDelegate],
  editValidator: ['/cosmos.staking.v1beta1.MsgEditValidator', MsgEditValidator],
  undelegate: ['/cosmos.staking.v1beta1.MsgUndelegate', MsgUndelegate]
}

export default stakingTypes

export interface ITxStaking {
  msgBeginRedelegate(data: MsgBeginRedelegate): EncodeObject
  msgCreateValidator(data: MsgCreateValidator): EncodeObject
  msgDelegate(data: MsgDelegate): EncodeObject
  msgEditValidator(data: MsgEditValidator): EncodeObject
  msgUndelegate(data: MsgUndelegate): EncodeObject
}

export class TxStaking implements ITxStaking {
  msgBeginRedelegate(data: MsgBeginRedelegate): EncodeObject {
    return {
      typeUrl: stakingTypes.beginRedelegate[0],
      value: stakingTypes.beginRedelegate[1].fromPartial(data)
    }
  }
  msgCreateValidator(data: MsgCreateValidator): EncodeObject {
    return {
      typeUrl: stakingTypes.msgCreateValidator[0],
      value: stakingTypes.msgCreateValidator[1].fromPartial(data)
    }
  }
  msgDelegate(data: MsgDelegate): EncodeObject {
    return {
      typeUrl: stakingTypes.delegate[0],
      value: stakingTypes.delegate[1].fromPartial(data)
    }
  }
  msgEditValidator(data: MsgEditValidator): EncodeObject {
    return {
      typeUrl: stakingTypes.editValidator[0],
      value: stakingTypes.editValidator[1].fromPartial(data)
    }
  }
  msgUndelegate(data: MsgUndelegate): EncodeObject {
    return {
      typeUrl: stakingTypes.undelegate[0],
      value: stakingTypes.undelegate[1].fromPartial(data)
    }
  }
}
