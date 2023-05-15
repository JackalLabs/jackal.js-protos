import {
  MsgDeposit,
  MsgSubmitProposal,
  MsgVote,
  MsgVoteWeighted
} from '@/postgen/cosmos/gov/v1beta1/tx'
import { EncodeObject } from '@cosmjs/proto-signing'
import ITypeTuple from '@/interfaces/ITypeTuple'

const govTypes: ITypeTuple = {
  deposit: ['/cosmos.gov.v1beta1.MsgDeposit', MsgDeposit],
  submitProposal: ['/cosmos.gov.v1beta1.MsgSubmitProposal', MsgSubmitProposal],
  vote: ['/cosmos.gov.v1beta1.MsgVote', MsgVote],
  voteWeighted: ['/cosmos.gov.v1beta1.MsgVoteWeighted', MsgVoteWeighted]
}

export default govTypes

export interface ITxGov {
  msgDeposit(data: MsgDeposit): EncodeObject
  msgSubmitProposal(data: MsgSubmitProposal): EncodeObject
  msgVote(data: MsgVote): EncodeObject
  msgVoteWeighted(data: MsgVoteWeighted): EncodeObject
}

export class TxGov implements ITxGov {
  msgDeposit(data: MsgDeposit): EncodeObject {
    return {
      typeUrl: govTypes.deposit[0],
      value: govTypes.deposit[1].fromPartial(data)
    }
  }
  msgSubmitProposal(data: MsgSubmitProposal): EncodeObject {
    return {
      typeUrl: govTypes.submitProposal[0],
      value: govTypes.submitProposal[1].fromPartial(data)
    }
  }
  msgVote(data: MsgVote): EncodeObject {
    return {
      typeUrl: govTypes.vote[0],
      value: govTypes.vote[1].fromPartial(data)
    }
  }
  msgVoteWeighted(data: MsgVoteWeighted): EncodeObject {
    return {
      typeUrl: govTypes.voteWeighted[0],
      value: govTypes.voteWeighted[1].fromPartial(data)
    }
  }
}
