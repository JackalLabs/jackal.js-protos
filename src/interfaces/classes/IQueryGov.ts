import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryDepositRequest,
  QueryDepositResponse,
  QueryDepositsRequest,
  QueryDepositsResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryProposalRequest,
  QueryProposalResponse,
  QueryProposalsRequest,
  QueryProposalsResponse,
  QueryTallyResultRequest,
  QueryTallyResultResponse,
  QueryVoteRequest,
  QueryVoteResponse,
  QueryVotesRequest,
  QueryVotesResponse
} from '@/postgen/cosmos/gov/v1beta1/query'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export interface IQueryGov {
  /** Proposal queries proposal details based on ProposalID. */
  queryProposal(
    request: DeepPartial<QueryProposalRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryProposalResponse>>

  /** Proposals queries all proposals based on given status. */
  queryProposals(
    request: DeepPartial<QueryProposalsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryProposalsResponse>>

  /** Vote queries voted information based on proposalID, voterAddr. */
  queryVote(
    request: DeepPartial<QueryVoteRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryVoteResponse>>

  /** Votes queries votes of a given proposal. */
  queryVotes(
    request: DeepPartial<QueryVotesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryVotesResponse>>

  /** Params queries all parameters of the gov module. */
  queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>>

  /** Deposit queries single deposit information based proposalID, depositAddr. */
  queryDeposit(
    request: DeepPartial<QueryDepositRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDepositResponse>>

  /** Deposits queries all deposits of a single proposal. */
  queryDeposits(
    request: DeepPartial<QueryDepositsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDepositsResponse>>

  /** TallyResult queries the tally of a proposal vote. */
  queryTallyResult(
    request: DeepPartial<QueryTallyResultRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryTallyResultResponse>>
}
