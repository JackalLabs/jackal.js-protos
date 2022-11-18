import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryClientImpl,
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
import IQueryDistribution from '@/interfaces/classes/IQueryDistribution'

export default class QueryDistribution implements IQueryDistribution {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Params queries params of the distribution module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.queryClient.Params(request, metadata)
  }
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  queryValidatorOutstandingRewards(
    request: DeepPartial<QueryValidatorOutstandingRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorOutstandingRewardsResponse> {
    return this.queryClient.ValidatorOutstandingRewards(request, metadata)
  }
  /** ValidatorCommission queries accumulated commission for a validator. */
  queryValidatorCommission(
    request: DeepPartial<QueryValidatorCommissionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorCommissionResponse> {
    return this.queryClient.ValidatorCommission(request, metadata)
  }
  /** ValidatorSlashes queries slash events of a validator. */
  queryValidatorSlashes(
    request: DeepPartial<QueryValidatorSlashesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorSlashesResponse> {
    return this.queryClient.ValidatorSlashes(request, metadata)
  }
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  queryDelegationRewards(
    request: DeepPartial<QueryDelegationRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegationRewardsResponse> {
    return this.queryClient.DelegationRewards(request, metadata)
  }
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  queryDelegationTotalRewards(
    request: DeepPartial<QueryDelegationTotalRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegationTotalRewardsResponse> {
    return this.queryClient.DelegationTotalRewards(request, metadata)
  }
  /** DelegatorValidators queries the validators of a delegator. */
  queryDelegatorValidators(
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorValidatorsResponse> {
    return this.queryClient.DelegatorValidators(request, metadata)
  }
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  queryDelegatorWithdrawAddress(
    request: DeepPartial<QueryDelegatorWithdrawAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorWithdrawAddressResponse> {
    return this.queryClient.DelegatorWithdrawAddress(request, metadata)
  }
  /** CommunityPool queries the community pool coins. */
  queryCommunityPool(
    request: DeepPartial<QueryCommunityPoolRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCommunityPoolResponse> {
    return this.queryClient.CommunityPool(request, metadata)
  }
}
