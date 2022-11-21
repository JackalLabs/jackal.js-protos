import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryCommunityPoolRequest, QueryCommunityPoolResponse,
  QueryDelegationRewardsRequest, QueryDelegationRewardsResponse,
  QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse,
  QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse,
  QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse,
  QueryParamsRequest, QueryParamsResponse,
  QueryValidatorCommissionRequest, QueryValidatorCommissionResponse,
  QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse,
  QueryValidatorSlashesRequest, QueryValidatorSlashesResponse
} from '@/postgen/cosmos/distribution/v1beta1/query'

export default interface IQueryDistribution {
  /** Params queries params of the distribution module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  queryValidatorOutstandingRewards(
    request: DeepPartial<QueryValidatorOutstandingRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorOutstandingRewardsResponse>;
  /** ValidatorCommission queries accumulated commission for a validator. */
  queryValidatorCommission(
    request: DeepPartial<QueryValidatorCommissionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */
  queryValidatorSlashes(
    request: DeepPartial<QueryValidatorSlashesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  queryDelegationRewards(
    request: DeepPartial<QueryDelegationRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  queryDelegationTotalRewards(
    request: DeepPartial<QueryDelegationTotalRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegationTotalRewardsResponse>;
  /** DelegatorValidators queries the validators of a delegator. */
  queryDelegatorValidators(
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  queryDelegatorWithdrawAddress(
    request: DeepPartial<QueryDelegatorWithdrawAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorWithdrawAddressResponse>;
  /** CommunityPool queries the community pool coins. */
  queryCommunityPool(
    request: DeepPartial<QueryCommunityPoolRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCommunityPoolResponse>;
}