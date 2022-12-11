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
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryGov implements IQueryGov {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Proposal queries proposal details based on ProposalID. */
  async queryProposal (
    request: DeepPartial<QueryProposalRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryProposalResponse>> {
    return await this.queryClient.Proposal(request, metadata)
      .then((resp: QueryProposalResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryProposalResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Gov] queryProposal: ${err}`)
        const errRet: SuccessNoUndefined<QueryProposalResponse> = {
          success: false,
          proposal: {
            proposalId: 0,
            content: {
              typeUrl: '',
              value: new Uint8Array()
            },
            status: -1,
            finalTallyResult: {
              yes: '',
              abstain: '',
              no: '',
              noWithVeto: ''
            },
            submitTime: new Date(),
            depositEndTime: new Date(),
            totalDeposit: [],
            votingStartTime: new Date(),
            votingEndTime: new Date()
          }
        }
        return errRet
      })
  }

  /** Proposals queries all proposals based on given status. */
  async queryProposals (
    request: DeepPartial<QueryProposalsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryProposalsResponse>> {
    return await this.queryClient.Proposals(request, metadata)
      .then((resp: QueryProposalsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryProposalsResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Gov] queryProposals: ${err}`)
        const errRet: SuccessNoUndefined<QueryProposalsResponse> = {
          success: false,
          proposals: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Vote queries voted information based on proposalID, voterAddr. */
  async queryVote (
    request: DeepPartial<QueryVoteRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryVoteResponse>> {
    return await this.queryClient.Vote(request, metadata)
      .then((resp: QueryVoteResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryVoteResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Gov] queryVote: ${err}`)
        const errRet: SuccessNoUndefined<QueryVoteResponse> = {
          success: false,
          vote: {
            proposalId: 0,
            voter: '',
            option: -1,
            options: []
          }
        }
        return errRet
      })
  }

  /** Votes queries votes of a given proposal. */
  async queryVotes (
    request: DeepPartial<QueryVotesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryVotesResponse>> {
    return await this.queryClient.Votes(request, metadata)
      .then((resp: QueryVotesResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryVotesResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Gov] queryVotes: ${err}`)
        const errRet: SuccessNoUndefined<QueryVotesResponse> = {
          success: false,
          votes: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Params queries all parameters of the gov module. */
  async queryParams (
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>> {
    return await this.queryClient.Params(request, metadata)
      .then((resp: QueryParamsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryParamsResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Gov] queryParams: ${err}`)
        const errRet: SuccessNoUndefined<QueryParamsResponse> = {
          success: false,
          depositParams: {
            minDeposit: [],
            maxDepositPeriod: {
              seconds: 0,
              nanos: 0
            }
          },
          tallyParams: {
            quorum: new Uint8Array(),
            threshold: new Uint8Array(),
            vetoThreshold: new Uint8Array()
          },
          votingParams: {
            votingPeriod: {
              seconds: 0,
              nanos: 0
            }
          }
        }
        return errRet
      })
  }

  /** Deposit queries single deposit information based proposalID, depositAddr. */
  async queryDeposit (
    request: DeepPartial<QueryDepositRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDepositResponse>> {
    return await this.queryClient.Deposit(request, metadata)
      .then((resp: QueryDepositResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDepositResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Gov] queryDeposit: ${err}`)
        const errRet: SuccessNoUndefined<QueryDepositResponse> = {
          success: false,
          deposit: {
            proposalId: 0,
            depositor: '',
            amount: []
          }
        }
        return errRet
      })
  }

  /** Deposits queries all deposits of a single proposal. */
  async queryDeposits (
    request: DeepPartial<QueryDepositsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDepositsResponse>> {
    return await this.queryClient.Deposits(request, metadata)
      .then((resp: QueryDepositsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDepositsResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Gov] queryDeposits: ${err}`)
        const errRet: SuccessNoUndefined<QueryDepositsResponse> = {
          success: false,
          deposits: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** TallyResult queries the tally of a proposal vote. */
  async queryTallyResult (
    request: DeepPartial<QueryTallyResultRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryTallyResultResponse>> {
    return await this.queryClient.TallyResult(request, metadata)
      .then((resp: QueryTallyResultResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryTallyResultResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Gov] queryTallyResult: ${err}`)
        const errRet: SuccessNoUndefined<QueryTallyResultResponse> = {
          success: false,
          tally: {
            yes: '',
            abstain: '',
            no: '',
            noWithVeto: ''
          }
        }
        return errRet
      })
  }
}
