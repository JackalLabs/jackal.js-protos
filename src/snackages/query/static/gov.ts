import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryClientImpl,
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
import { IQueryGov } from '@/interfaces/classes/IQueryGov'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryGov implements IQueryGov {
  private readonly queryClient: Query

  constructor(rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Proposal queries proposal details based on ProposalID. */
  async queryProposal(
    request: DeepPartial<QueryProposalRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryProposalResponse>> {
    return await this.queryClient
      .Proposal(request, metadata)
      .then((resp: QueryProposalResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Gov] queryProposal: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            proposal: {
              proposalId: 0,
              content: {
                typeUrl: '',
                value: new Uint8Array([])
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
        }
      })
  }

  /** Proposals queries all proposals based on given status. */
  async queryProposals(
    request: DeepPartial<QueryProposalsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryProposalsResponse>> {
    return await this.queryClient
      .Proposals(request, metadata)
      .then((resp: QueryProposalsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Gov] queryProposals: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            proposals: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Vote queries voted information based on proposalID, voterAddr. */
  async queryVote(
    request: DeepPartial<QueryVoteRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryVoteResponse>> {
    return await this.queryClient
      .Vote(request, metadata)
      .then((resp: QueryVoteResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Gov] queryVote: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            vote: {
              proposalId: 0,
              voter: '',
              option: -1,
              options: []
            }
          }
        }
      })
  }

  /** Votes queries votes of a given proposal. */
  async queryVotes(
    request: DeepPartial<QueryVotesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryVotesResponse>> {
    return await this.queryClient
      .Votes(request, metadata)
      .then((resp: QueryVotesResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Gov] queryVotes: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            votes: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Params queries all parameters of the gov module. */
  async queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>> {
    return await this.queryClient
      .Params(request, metadata)
      .then((resp: QueryParamsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Gov] queryParams: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            depositParams: {
              minDeposit: [],
              maxDepositPeriod: {
                seconds: 0,
                nanos: 0
              }
            },
            tallyParams: {
              quorum: new Uint8Array([]),
              threshold: new Uint8Array([]),
              vetoThreshold: new Uint8Array([])
            },
            votingParams: {
              votingPeriod: {
                seconds: 0,
                nanos: 0
              }
            }
          }
        }
      })
  }

  /** Deposit queries single deposit information based proposalID, depositAddr. */
  async queryDeposit(
    request: DeepPartial<QueryDepositRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDepositResponse>> {
    return await this.queryClient
      .Deposit(request, metadata)
      .then((resp: QueryDepositResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Gov] queryDeposit: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            deposit: {
              proposalId: 0,
              depositor: '',
              amount: []
            }
          }
        }
      })
  }

  /** Deposits queries all deposits of a single proposal. */
  async queryDeposits(
    request: DeepPartial<QueryDepositsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDepositsResponse>> {
    return await this.queryClient
      .Deposits(request, metadata)
      .then((resp: QueryDepositsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Gov] queryDeposits: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            deposits: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** TallyResult queries the tally of a proposal vote. */
  async queryTallyResult(
    request: DeepPartial<QueryTallyResultRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryTallyResultResponse>> {
    return await this.queryClient
      .TallyResult(request, metadata)
      .then((resp: QueryTallyResultResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Gov] queryTallyResult: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            tally: {
              yes: '',
              abstain: '',
              no: '',
              noWithVeto: ''
            }
          }
        }
      })
  }
}
