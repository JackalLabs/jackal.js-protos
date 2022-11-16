import {
  MsgBeginRedelegate,
  MsgCancelUnbondingDelegation,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate,
  MsgUpdateParams
} from '@/postgen/cosmos/staking/v1beta1/tx'

export default {
  beginRedelegate: ['cosmos.staking.v1beta1.MsgBeginRedelegate', MsgBeginRedelegate],
  cancelUnbondingDelegation: ['cosmos.staking.v1beta1.MsgCancelUnbondingDelegation', MsgCancelUnbondingDelegation],
  msgCreateValidator: ['cosmos.staking.v1beta1.MsgCreateValidator', MsgCreateValidator],
  delegate: ['cosmos.staking.v1beta1.MsgDelegate', MsgDelegate],
  editValidator: ['cosmos.staking.v1beta1.MsgEditValidator', MsgEditValidator],
  undelegate: ['cosmos.staking.v1beta1.MsgUndelegate', MsgUndelegate],
  updateParams: ['cosmos.staking.v1beta1.MsgUpdateParams', MsgUpdateParams]
}
