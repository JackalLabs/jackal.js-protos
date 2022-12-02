import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
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

export default interface IQueryStaking {
  /** Validators queries all validators that match the given status. */
  queryValidators(request: DeepPartial<QueryValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorsResponse>;
  /** Validator queries validator info for given validator address. */
  queryValidator(request: DeepPartial<QueryValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorResponse>;
  /** ValidatorDelegations queries delegate info for given validator. */
  queryValidatorDelegations(
    request: DeepPartial<QueryValidatorDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorDelegationsResponse>;
  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  queryValidatorUnbondingDelegations(
    request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorUnbondingDelegationsResponse>;
  /** Delegation queries delegate info for given validator delegator pair. */
  queryDelegation(request: DeepPartial<QueryDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationResponse>;
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  queryUnbondingDelegation(
    request: DeepPartial<QueryUnbondingDelegationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUnbondingDelegationResponse>;
  /** DelegatorDelegations queries all delegations of a given delegator address. */
  queryDelegatorDelegations(
    request: DeepPartial<QueryDelegatorDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorDelegationsResponse>;
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  queryDelegatorUnbondingDelegations(
    request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorUnbondingDelegationsResponse>;
  /** Redelegations queries redelegations of given address. */
  queryRedelegations(
    request: DeepPartial<QueryRedelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRedelegationsResponse>;
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  queryDelegatorValidators(
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorValidatorsResponse>;
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  queryDelegatorValidator(
    request: DeepPartial<QueryDelegatorValidatorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorValidatorResponse>;
  /** HistoricalInfo queries the historical info for given height. */
  queryHistoricalInfo(
    request: DeepPartial<QueryHistoricalInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryHistoricalInfoResponse>;
  /** Pool queries the pool info. */
  queryPool(request: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse>;
  /** Parameters queries the staking parameters. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
