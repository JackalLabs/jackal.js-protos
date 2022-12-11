import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryClientImpl,
  QueryDelegationRequest, QueryDelegationResponse,
  QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse,
  QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse,
  QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse,
  QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse,
  QueryHistoricalInfoRequest, QueryHistoricalInfoResponse,
  QueryParamsRequest, QueryParamsResponse,
  QueryPoolRequest, QueryPoolResponse,
  QueryRedelegationsRequest, QueryRedelegationsResponse,
  QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse,
  QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse,
  QueryValidatorRequest, QueryValidatorResponse,
  QueryValidatorsRequest, QueryValidatorsResponse,
  QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse
} from '@/postgen/cosmos/staking/v1beta1/query'
import IQueryStaking from '@/interfaces/classes/IQueryStaking'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryStaking implements IQueryStaking {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Validators queries all validators that match the given status. */
  async queryValidators (
    request: DeepPartial<QueryValidatorsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorsResponse>> {
    return await this.queryClient.Validators(request, metadata)
      .then((resp: QueryValidatorsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryValidatorsResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryValidators: ${err}`)
        const errRet: SuccessNoUndefined<QueryValidatorsResponse> = {
          success: false,
          validators: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Validator queries validator info for given validator address. */
  async queryValidator (
    request: DeepPartial<QueryValidatorRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorResponse>> {
    return await this.queryClient.Validator(request, metadata)
      .then((resp: QueryValidatorResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryValidatorResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryValidator: ${err}`)
        const errRet: SuccessNoUndefined<QueryValidatorResponse> = {
          success: false,
          validator: {
            operatorAddress: '',
            consensusPubkey: {
              typeUrl: '',
              value: new Uint8Array()
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
        return errRet
      })
  }

  /** ValidatorDelegations queries delegate info for given validator. */
  async queryValidatorDelegations (
    request: DeepPartial<QueryValidatorDelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorDelegationsResponse>> {
    return await this.queryClient.ValidatorDelegations(request, metadata)
      .then((resp: QueryValidatorDelegationsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryValidatorDelegationsResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryValidatorDelegations: ${err}`)
        const errRet: SuccessNoUndefined<QueryValidatorDelegationsResponse> = {
          success: false,
          delegationResponses: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  async queryValidatorUnbondingDelegations (
    request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorUnbondingDelegationsResponse>> {
    return await this.queryClient.ValidatorUnbondingDelegations(request, metadata)
      .then((resp: QueryValidatorUnbondingDelegationsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryValidatorUnbondingDelegationsResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryValidatorUnbondingDelegations: ${err}`)
        const errRet: SuccessNoUndefined<QueryValidatorUnbondingDelegationsResponse> = {
          success: false,
          unbondingResponses: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Delegation queries delegate info for given validator delegator pair. */
  async queryDelegation (
    request: DeepPartial<QueryDelegationRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegationResponse>> {
    return await this.queryClient.Delegation(request, metadata)
      .then((resp: QueryDelegationResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDelegationResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryDelegation: ${err}`)
        const errRet: SuccessNoUndefined<QueryDelegationResponse> = {
          success: false,
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
        return errRet
      })
  }

  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  async queryUnbondingDelegation (
    request: DeepPartial<QueryUnbondingDelegationRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryUnbondingDelegationResponse>> {
    return await this.queryClient.UnbondingDelegation(request, metadata)
      .then((resp: QueryUnbondingDelegationResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryUnbondingDelegationResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryUnbondingDelegation: ${err}`)
        const errRet: SuccessNoUndefined<QueryUnbondingDelegationResponse> = {
          success: false,
          unbond: {
            delegatorAddress: '',
            validatorAddress: '',
            entries: []
          }
        }
        return errRet
      })
  }

  /** DelegatorDelegations queries all delegations of a given delegator address. */
  async queryDelegatorDelegations (
    request: DeepPartial<QueryDelegatorDelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorDelegationsResponse>> {
    return await this.queryClient.DelegatorDelegations(request, metadata)
      .then((resp: QueryDelegatorDelegationsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDelegatorDelegationsResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryDelegatorDelegations: ${err}`)
        const errRet: SuccessNoUndefined<QueryDelegatorDelegationsResponse> = {
          success: false,
          delegationResponses: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  async queryDelegatorUnbondingDelegations (
    request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorUnbondingDelegationsResponse>> {
    return await this.queryClient.DelegatorUnbondingDelegations(request, metadata)
      .then((resp: QueryDelegatorUnbondingDelegationsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDelegatorUnbondingDelegationsResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryDelegatorUnbondingDelegations: ${err}`)
        const errRet: SuccessNoUndefined<QueryDelegatorUnbondingDelegationsResponse> = {
          success: false,
          unbondingResponses: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** Redelegations queries redelegations of given address. */
  async queryRedelegations (
    request: DeepPartial<QueryRedelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryRedelegationsResponse>> {
    return await this.queryClient.Redelegations(request, metadata)
      .then((resp: QueryRedelegationsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryRedelegationsResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryRedelegations: ${err}`)
        const errRet: SuccessNoUndefined<QueryRedelegationsResponse> = {
          success: false,
          redelegationResponses: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  async queryDelegatorValidators (
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorValidatorsResponse>> {
    return await this.queryClient.DelegatorValidators(request, metadata)
      .then((resp: QueryDelegatorValidatorsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDelegatorValidatorsResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryDelegatorValidators: ${err}`)
        const errRet: SuccessNoUndefined<QueryDelegatorValidatorsResponse> = {
          success: false,
          validators: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  async queryDelegatorValidator (
    request: DeepPartial<QueryDelegatorValidatorRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorValidatorResponse>> {
    return await this.queryClient.DelegatorValidator(request, metadata)
      .then((resp: QueryDelegatorValidatorResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDelegatorValidatorResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryDelegatorValidator: ${err}`)
        const errRet: SuccessNoUndefined<QueryDelegatorValidatorResponse> = {
          success: false,
          validator: {
            operatorAddress: '',
            consensusPubkey: {
              typeUrl: '',
              value: new Uint8Array()
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
        return errRet
      })
  }

  /** HistoricalInfo queries the historical info for given height. */
  async queryHistoricalInfo (
    request: DeepPartial<QueryHistoricalInfoRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryHistoricalInfoResponse>> {
    return await this.queryClient.HistoricalInfo(request, metadata)
      .then((resp: QueryHistoricalInfoResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryHistoricalInfoResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryHistoricalInfo: ${err}`)
        const errRet: SuccessNoUndefined<QueryHistoricalInfoResponse> = {
          success: false,
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
                hash: new Uint8Array(),
                partSetHeader: {
                  total: 0,
                  hash: new Uint8Array()
                }
              },
              lastCommitHash: new Uint8Array(),
              dataHash: new Uint8Array(),
              validatorsHash: new Uint8Array(),
              nextValidatorsHash: new Uint8Array(),
              consensusHash: new Uint8Array(),
              appHash: new Uint8Array(),
              lastResultsHash: new Uint8Array(),
              evidenceHash: new Uint8Array(),
              proposerAddress: new Uint8Array()
            }
          }
        }
        return errRet
      })
  }

  /** Pool queries the pool info. */
  async queryPool (
    request: DeepPartial<QueryPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryPoolResponse>> {
    return await this.queryClient.Pool(request, metadata)
      .then((resp: QueryPoolResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryPoolResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Staking] queryPool: ${err}`)
        const errRet: SuccessNoUndefined<QueryPoolResponse> = {
          success: false,
          pool: {
            notBondedTokens: '',
            bondedTokens: ''
          }
        }
        return errRet
      })
  }

  /** Parameters queries the staking parameters. */
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
        console.warn(`jackal.js-protos - [Staking] queryParams: ${err}`)
        const errRet: SuccessNoUndefined<QueryParamsResponse> = {
          success: false,
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
        return errRet
      })
  }
}
