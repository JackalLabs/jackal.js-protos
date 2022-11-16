import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted } from '@/postgen/cosmos/gov/v1beta1/tx'

export default {
  deposit: ['cosmos.gov.v1beta1.MsgDeposit', MsgDeposit],
  submitProposal: ['cosmos.gov.v1beta1.MsgSubmitProposal', MsgSubmitProposal],
  vote: ['cosmos.gov.v1beta1.MsgVote', MsgVote],
  voteWeighted: ['cosmos.gov.v1beta1.MsgVoteWeighted', MsgVoteWeighted]
}
