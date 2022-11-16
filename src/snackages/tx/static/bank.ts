import { MsgMultiSend, MsgSend, MsgSetSendEnabled, MsgUpdateParams } from '@/postgen/cosmos/bank/v1beta1/tx'

export default {
  multiSend: ['cosmos.bank.v1beta1.MsgMultiSend', MsgMultiSend],
  send: ['cosmos.bank.v1beta1.MsgSend', MsgSend],
  setSendEnabled: ['cosmos.bank.v1beta1.MsgSetSendEnabled', MsgSetSendEnabled],
  updateParams: ['cosmos.bank.v1beta1.MsgUpdateParams', MsgUpdateParams]
}
