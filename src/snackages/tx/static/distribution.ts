import {
  MsgCommunityPoolSpend,
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgUpdateParams,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission
} from '@/postgen/cosmos/distribution/v1beta1/tx'

export default {
  communityPoolSpend: ['cosmos.distribution.v1beta1.MsgCommunityPoolSpend', MsgCommunityPoolSpend],
  fundCommunityPool: ['cosmos.distribution.v1beta1.MsgFundCommunityPool', MsgFundCommunityPool],
  setWithdrawAddress: ['cosmos.distribution.v1beta1.MsgSetWithdrawAddress', MsgSetWithdrawAddress],
  updateParams: ['cosmos.distribution.v1beta1.MsgUpdateParams', MsgUpdateParams],
  withdrawDelegatorReward: ['cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward', MsgWithdrawDelegatorReward],
  withdrawValidatorCommission: ['cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission', MsgWithdrawValidatorCommission]
}
