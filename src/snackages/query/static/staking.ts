import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryClientImpl,
  QueryDelegationRequest,
  QueryDelegationResponse,
  QueryDelegatorDelegationsRequest,
  QueryDelegatorDelegationsResponse,
  QueryDelegatorUnbondingDelegationsRequest,
  QueryDelegatorUnbondingDelegationsResponse,
  QueryDelegatorValidatorRequest,
  QueryDelegatorValidatorResponse,
  QueryDelegatorValidatorsRequest,
  QueryDelegatorValidatorsResponse,
  QueryHistoricalInfoRequest,
  QueryHistoricalInfoResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryPoolRequest,
  QueryPoolResponse,
  QueryRedelegationsRequest,
  QueryRedelegationsResponse,
  QueryUnbondingDelegationRequest,
  QueryUnbondingDelegationResponse,
  QueryValidatorDelegationsRequest,
  QueryValidatorDelegationsResponse,
  QueryValidatorRequest,
  QueryValidatorResponse,
  QueryValidatorsRequest,
  QueryValidatorsResponse,
  QueryValidatorUnbondingDelegationsRequest,
  QueryValidatorUnbondingDelegationsResponse
} from '@/postgen/cosmos/staking/v1beta1/query'
import { IQueryStaking } from '@/interfaces/classes/IQueryStaking'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryStaking implements IQueryStaking {
  private readonly queryClient: Query

  constructor(rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Validators queries all validators that match the given status. */
  async queryValidators(
    request: DeepPartial<QueryValidatorsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorsResponse>> {
    return await this.queryClient
      .Validators(request, metadata)
      .then((resp: QueryValidatorsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Staking] queryValidators: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            validators: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Validator queries validator info for given validator address. */
  async queryValidator(
    request: DeepPartial<QueryValidatorRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorResponse>> {
    return await this.queryClient
      .Validator(request, metadata)
      .then((resp: QueryValidatorResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Staking] queryValidator: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            validator: {
              operatorAddress: '',
              consensusPubkey: {
                typeUrl: '',
                value: new Uint8Array([])
              },
              jailed: false,
              status: -1,
              tokens: '',
              delegatorShares: '',
              description: {
                moniker: '',
                identity: '',
                website: '',
                securityContact: '',
                details: ''
              },
              unbondingHeight: 0,
              unbondingTime: new Date(),
              commission: {
                commissionRates: {
                  rate: '',
                  maxRate: '',
                  maxChangeRate: ''
                },
                updateTime: new Date()
              },
              minSelfDelegation: ''
            }
          }
        }
      })
  }

  /** ValidatorDelegations queries delegate info for given validator. */
  async queryValidatorDelegations(
    request: DeepPartial<QueryValidatorDelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorDelegationsResponse>> {
    return await this.queryClient
      .ValidatorDelegations(request, metadata)
      .then((resp: QueryValidatorDelegationsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Staking] queryValidatorDelegations: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            delegationResponses: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  async queryValidatorUnbondingDelegations(
    request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorUnbondingDelegationsResponse>> {
    return await this.queryClient
      .ValidatorUnbondingDelegations(request, metadata)
      .then((resp: QueryValidatorUnbondingDelegationsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Staking] queryValidatorUnbondingDelegations: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            unbondingResponses: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Delegation queries delegate info for given validator delegator pair. */
  async queryDelegation(
    request: DeepPartial<QueryDelegationRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegationResponse>> {
    return await this.queryClient
      .Delegation(request, metadata)
      .then((resp: QueryDelegationResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Staking] queryDelegation: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            delegationResponse: {
              delegation: {
                delegatorAddress: '',
                validatorAddress: '',
                shares: ''
              },
              balance: {
                denom: '',
                amount: ''
              }
            }
          }
        }
      })
  }

  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  async queryUnbondingDelegation(
    request: DeepPartial<QueryUnbondingDelegationRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryUnbondingDelegationResponse>> {
    return await this.queryClient
      .UnbondingDelegation(request, metadata)
      .then((resp: QueryUnbondingDelegationResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Staking] queryUnbondingDelegation: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            unbond: {
              delegatorAddress: '',
              validatorAddress: '',
              entries: []
            }
          }
        }
      })
  }

  /** DelegatorDelegations queries all delegations of a given delegator address. */
  async queryDelegatorDelegations(
    request: DeepPartial<QueryDelegatorDelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorDelegationsResponse>> {
    return await this.queryClient
      .DelegatorDelegations(request, metadata)
      .then((resp: QueryDelegatorDelegationsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Staking] queryDelegatorDelegations: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            delegationResponses: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  async queryDelegatorUnbondingDelegations(
    request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorUnbondingDelegationsResponse>> {
    return await this.queryClient
      .DelegatorUnbondingDelegations(request, metadata)
      .then((resp: QueryDelegatorUnbondingDelegationsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Staking] queryDelegatorUnbondingDelegations: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            unbondingResponses: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** Redelegations queries redelegations of given address. */
  async queryRedelegations(
    request: DeepPartial<QueryRedelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryRedelegationsResponse>> {
    return await this.queryClient
      .Redelegations(request, metadata)
      .then((resp: QueryRedelegationsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Staking] queryRedelegations: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            redelegationResponses: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  async queryDelegatorValidators(
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorValidatorsResponse>> {
    return await this.queryClient
      .DelegatorValidators(request, metadata)
      .then((resp: QueryDelegatorValidatorsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Staking] queryDelegatorValidators: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            validators: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  async queryDelegatorValidator(
    request: DeepPartial<QueryDelegatorValidatorRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorValidatorResponse>> {
    return await this.queryClient
      .DelegatorValidator(request, metadata)
      .then((resp: QueryDelegatorValidatorResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Staking] queryDelegatorValidator: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            validator: {
              operatorAddress: '',
              consensusPubkey: {
                typeUrl: '',
                value: new Uint8Array([])
              },
              jailed: false,
              status: -1,
              tokens: '',
              delegatorShares: '',
              description: {
                moniker: '',
                identity: '',
                website: '',
                securityContact: '',
                details: ''
              },
              unbondingHeight: 0,
              unbondingTime: new Date(),
              commission: {
                commissionRates: {
                  rate: '',
                  maxRate: '',
                  maxChangeRate: ''
                },
                updateTime: new Date()
              },
              minSelfDelegation: ''
            }
          }
        }
      })
  }

  /** HistoricalInfo queries the historical info for given height. */
  async queryHistoricalInfo(
    request: DeepPartial<QueryHistoricalInfoRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryHistoricalInfoResponse>> {
    return await this.queryClient
      .HistoricalInfo(request, metadata)
      .then((resp: QueryHistoricalInfoResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Staking] queryHistoricalInfo: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            hist: {
              valset: [],
              header: {
                version: {
                  block: 0,
                  app: 0
                },
                chainId: '',
                height: 0,
                time: new Date(),
                lastBlockId: {
                  hash: new Uint8Array([]),
                  partSetHeader: {
                    total: 0,
                    hash: new Uint8Array([])
                  }
                },
                lastCommitHash: new Uint8Array([]),
                dataHash: new Uint8Array([]),
                validatorsHash: new Uint8Array([]),
                nextValidatorsHash: new Uint8Array([]),
                consensusHash: new Uint8Array([]),
                appHash: new Uint8Array([]),
                lastResultsHash: new Uint8Array([]),
                evidenceHash: new Uint8Array([]),
                proposerAddress: new Uint8Array([])
              }
            }
          }
        }
      })
  }

  /** Pool queries the pool info. */
  async queryPool(
    request: DeepPartial<QueryPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryPoolResponse>> {
    return await this.queryClient
      .Pool(request, metadata)
      .then((resp: QueryPoolResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Staking] queryPool: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            pool: {
              notBondedTokens: '',
              bondedTokens: ''
            }
          }
        }
      })
  }

  /** Parameters queries the staking parameters. */
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
        console.warn(`jackal.js-protos - [Staking] queryParams: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            params: {
              unbondingTime: {
                seconds: 0,
                nanos: 0
              },
              maxValidators: 0,
              maxEntries: 0,
              historicalEntries: 0,
              bondDenom: ''
            }
          }
        }
      })
  }
}
