import {
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission
} from '@/postgen/cosmos/distribution/v1beta1/tx'
import { EncodeObject } from '@cosmjs/proto-signing'
import ITypeTuple from '@/interfaces/ITypeTuple'

const distibutionTypes: ITypeTuple = {
  fundCommunityPool: [
    '/cosmos.distribution.v1beta1.MsgFundCommunityPool',
    MsgFundCommunityPool
  ],
  setWithdrawAddress: [
    '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress',
    MsgSetWithdrawAddress
  ],
  withdrawDelegatorReward: [
    '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
    MsgWithdrawDelegatorReward
  ],
  withdrawValidatorCommission: [
    '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
    MsgWithdrawValidatorCommission
  ]
}

export default distibutionTypes

export interface ITxDistribution {
  msgFundCommunityPool(data: MsgFundCommunityPool): EncodeObject
  msgSetWithdrawAddress(data: MsgSetWithdrawAddress): EncodeObject
  msgWithdrawDelegatorReward(data: MsgWithdrawDelegatorReward): EncodeObject
  msgWithdrawValidatorCommission(
    data: MsgWithdrawValidatorCommission
  ): EncodeObject
}

export class TxDistribution implements ITxDistribution {
  msgFundCommunityPool(data: MsgFundCommunityPool): EncodeObject {
    return {
      typeUrl: distibutionTypes.fundCommunityPool[0],
      value: distibutionTypes.fundCommunityPool[1].fromPartial(data)
    }
  }
  msgSetWithdrawAddress(data: MsgSetWithdrawAddress): EncodeObject {
    return {
      typeUrl: distibutionTypes.setWithdrawAddress[0],
      value: distibutionTypes.setWithdrawAddress[1].fromPartial(data)
    }
  }
  msgWithdrawDelegatorReward(data: MsgWithdrawDelegatorReward): EncodeObject {
    return {
      typeUrl: distibutionTypes.withdrawDelegatorReward[0],
      value: distibutionTypes.withdrawDelegatorReward[1].fromPartial(data)
    }
  }
  msgWithdrawValidatorCommission(
    data: MsgWithdrawValidatorCommission
  ): EncodeObject {
    return {
      typeUrl: distibutionTypes.withdrawValidatorCommission[0],
      value: distibutionTypes.withdrawValidatorCommission[1].fromPartial(data)
    }
  }
}
