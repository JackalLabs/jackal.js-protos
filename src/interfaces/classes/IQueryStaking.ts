import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
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
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export interface IQueryStaking {
  /** Validators queries all validators that match the given status. */
  queryValidators(
    request: DeepPartial<QueryValidatorsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorsResponse>>

  /** Validator queries validator info for given validator address. */
  queryValidator(
    request: DeepPartial<QueryValidatorRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorResponse>>

  /** ValidatorDelegations queries delegate info for given validator. */
  queryValidatorDelegations(
    request: DeepPartial<QueryValidatorDelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorDelegationsResponse>>

  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  queryValidatorUnbondingDelegations(
    request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorUnbondingDelegationsResponse>>

  /** Delegation queries delegate info for given validator delegator pair. */
  queryDelegation(
    request: DeepPartial<QueryDelegationRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegationResponse>>

  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  queryUnbondingDelegation(
    request: DeepPartial<QueryUnbondingDelegationRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryUnbondingDelegationResponse>>

  /** DelegatorDelegations queries all delegations of a given delegator address. */
  queryDelegatorDelegations(
    request: DeepPartial<QueryDelegatorDelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorDelegationsResponse>>

  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  queryDelegatorUnbondingDelegations(
    request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorUnbondingDelegationsResponse>>

  /** Redelegations queries redelegations of given address. */
  queryRedelegations(
    request: DeepPartial<QueryRedelegationsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryRedelegationsResponse>>

  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  queryDelegatorValidators(
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorValidatorsResponse>>

  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  queryDelegatorValidator(
    request: DeepPartial<QueryDelegatorValidatorRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorValidatorResponse>>

  /** HistoricalInfo queries the historical info for given height. */
  queryHistoricalInfo(
    request: DeepPartial<QueryHistoricalInfoRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryHistoricalInfoResponse>>

  /** Pool queries the pool info. */
  queryPool(
    request: DeepPartial<QueryPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryPoolResponse>>

  /** Parameters queries the staking parameters. */
  queryParams(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryParamsResponse>>
}
