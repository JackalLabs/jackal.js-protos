import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryClientImpl,
  QueryDepositRequest, QueryDepositResponse,
  QueryDepositsRequest, QueryDepositsResponse,
  QueryParamsRequest, QueryParamsResponse,
  QueryProposalRequest, QueryProposalResponse,
  QueryProposalsRequest, QueryProposalsResponse,
  QueryTallyResultRequest, QueryTallyResultResponse,
  QueryVoteRequest, QueryVoteResponse,
  QueryVotesRequest, QueryVotesResponse
} from '@/postgen/cosmos/gov/v1beta1/query'
import IQueryGov from '@/interfaces/classes/IQueryGov'

export default class QueryGov implements IQueryGov {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Proposal queries proposal details based on ProposalID. */
  queryProposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse> {
    return this.queryClient.Proposal(request, metadata)
  }
  /** Proposals queries all proposals based on given status. */
  queryProposals(request: DeepPartial<QueryProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsResponse> {
    return this.queryClient.Proposals(request, metadata)
  }
  /** Vote queries voted information based on proposalID, voterAddr. */
  queryVote(request: DeepPartial<QueryVoteRequest>, metadata?: grpc.Metadata): Promise<QueryVoteResponse> {
    return this.queryClient.Vote(request, metadata)
  }
  /** Votes queries votes of a given proposal. */
  queryVotes(request: DeepPartial<QueryVotesRequest>, metadata?: grpc.Metadata): Promise<QueryVotesResponse> {
    return this.queryClient.Votes(request, metadata)
  }
  /** Params queries all parameters of the gov module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.queryClient.Params(request, metadata)
  }
  /** Deposit queries single deposit information based proposalID, depositAddr. */
  queryDeposit(request: DeepPartial<QueryDepositRequest>, metadata?: grpc.Metadata): Promise<QueryDepositResponse> {
    return this.queryClient.Deposit(request, metadata)
  }
  /** Deposits queries all deposits of a single proposal. */
  queryDeposits(request: DeepPartial<QueryDepositsRequest>, metadata?: grpc.Metadata): Promise<QueryDepositsResponse> {
    return this.queryClient.Deposits(request, metadata)
  }
  /** TallyResult queries the tally of a proposal vote. */
  queryTallyResult(
    request: DeepPartial<QueryTallyResultRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTallyResultResponse> {
    return this.queryClient.TallyResult(request, metadata)
  }
}
