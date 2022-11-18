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

export default class QueryStaking implements IQueryStaking {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Validators queries all validators that match the given status. */
  queryValidators(request: DeepPartial<QueryValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorsResponse> {
    return this.queryClient.Validators(request, metadata)
  }
  /** Validator queries validator info for given validator address. */
  queryValidator(request: DeepPartial<QueryValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorResponse> {
    return this.queryClient.Validator(request, metadata)
  }
  /** ValidatorDelegations queries delegate info for given validator. */
  queryValidatorDelegations(
    request: DeepPartial<QueryValidatorDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorDelegationsResponse> {
    return this.queryClient.ValidatorDelegations(request, metadata)
  }
  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  queryValidatorUnbondingDelegations(
    request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorUnbondingDelegationsResponse> {
    return this.queryClient.ValidatorUnbondingDelegations(request, metadata)
  }
  /** Delegation queries delegate info for given validator delegator pair. */
  queryDelegation(request: DeepPartial<QueryDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationResponse> {
    return this.queryClient.Delegation(request, metadata)
  }
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  queryUnbondingDelegation(
    request: DeepPartial<QueryUnbondingDelegationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUnbondingDelegationResponse> {
    return this.queryClient.UnbondingDelegation(request, metadata)
  }
  /** DelegatorDelegations queries all delegations of a given delegator address. */
  queryDelegatorDelegations(
    request: DeepPartial<QueryDelegatorDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorDelegationsResponse> {
    return this.queryClient.DelegatorDelegations(request, metadata)
  }
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  queryDelegatorUnbondingDelegations(
    request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    return this.queryClient.DelegatorUnbondingDelegations(request, metadata)
  }
  /** Redelegations queries redelegations of given address. */
  queryRedelegations(
    request: DeepPartial<QueryRedelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRedelegationsResponse> {
    return this.queryClient.Redelegations(request, metadata)
  }
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  queryDelegatorValidators(
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorValidatorsResponse> {
    return this.queryClient.DelegatorValidators(request, metadata)
  }
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  queryDelegatorValidator(
    request: DeepPartial<QueryDelegatorValidatorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorValidatorResponse> {
    return this.queryClient.DelegatorValidator(request, metadata)
  }
  /** HistoricalInfo queries the historical info for given height. */
  queryHistoricalInfo(
    request: DeepPartial<QueryHistoricalInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryHistoricalInfoResponse> {
    return this.queryClient.HistoricalInfo(request, metadata)
  }
  /** Pool queries the pool info. */
  queryPool(request: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse> {
    return this.queryClient.Pool(request, metadata)
  }
  /** Parameters queries the staking parameters. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.queryClient.Params(request, metadata)
  }
}
