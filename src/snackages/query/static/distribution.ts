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
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryDistribution implements IQueryDistribution {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Params queries params of the distribution module. */
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
        console.warn(`jackal.js-protos - [Distribution] queryParams: ${err}`)
        const errRet: SuccessNoUndefined<QueryParamsResponse> = {
          success: false,
          params: {
            communityTax: '',
            baseProposerReward: '',
            bonusProposerReward: '',
            withdrawAddrEnabled: false
          }
        }
        return errRet
      })
  }

  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  async queryValidatorOutstandingRewards (
    request: DeepPartial<QueryValidatorOutstandingRewardsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorOutstandingRewardsResponse>> {
    return await this.queryClient.ValidatorOutstandingRewards(request, metadata)
      .then((resp: QueryValidatorOutstandingRewardsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryValidatorOutstandingRewardsResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Distribution] queryValidatorOutstandingRewards: ${err}`)
        const errRet: SuccessNoUndefined<QueryValidatorOutstandingRewardsResponse> = {
          success: false,
          rewards: {
            rewards: []
          }
        }
        return errRet
      })
  }

  /** ValidatorCommission queries accumulated commission for a validator. */
  async queryValidatorCommission (
    request: DeepPartial<QueryValidatorCommissionRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorCommissionResponse>> {
    return await this.queryClient.ValidatorCommission(request, metadata)
      .then((resp: QueryValidatorCommissionResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryValidatorCommissionResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Distribution] queryValidatorCommission: ${err}`)
        const errRet: SuccessNoUndefined<QueryValidatorCommissionResponse> = {
          success: false,
          commission: {
            commission: []
          }
        }
        return errRet
      })
  }

  /** ValidatorSlashes queries slash events of a validator. */
  async queryValidatorSlashes (
    request: DeepPartial<QueryValidatorSlashesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorSlashesResponse>> {
    return await this.queryClient.ValidatorSlashes(request, metadata)
      .then((resp: QueryValidatorSlashesResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryValidatorSlashesResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Distribution] queryValidatorSlashes: ${err}`)
        const errRet: SuccessNoUndefined<QueryValidatorSlashesResponse> = {
          success: false,
          slashes: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** DelegationRewards queries the total rewards accrued by a delegation. */
  async queryDelegationRewards (
    request: DeepPartial<QueryDelegationRewardsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegationRewardsResponse>> {
    return await this.queryClient.DelegationRewards(request, metadata)
      .then((resp: QueryDelegationRewardsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDelegationRewardsResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Distribution] queryDelegationRewards: ${err}`)
        const errRet: SuccessNoUndefined<QueryDelegationRewardsResponse> = {
          success: false,
          rewards: []
        }
        return errRet
      })
  }

  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  async queryDelegationTotalRewards (
    request: DeepPartial<QueryDelegationTotalRewardsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegationTotalRewardsResponse>> {
    return await this.queryClient.DelegationTotalRewards(request, metadata)
      .then((resp: QueryDelegationTotalRewardsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDelegationTotalRewardsResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Distribution] queryDelegationTotalRewards: ${err}`)
        const errRet: SuccessNoUndefined<QueryDelegationTotalRewardsResponse> = {
          success: false,
          rewards: [],
          total: []
        }
        return errRet
      })
  }

  /** DelegatorValidators queries the validators of a delegator. */
  async queryDelegatorValidators (
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorValidatorsResponse>> {
    return await this.queryClient.DelegatorValidators(request, metadata)
      .then((resp: QueryDelegatorValidatorsResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDelegatorValidatorsResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Distribution] queryDelegatorValidators: ${err}`)
        const errRet: SuccessNoUndefined<QueryDelegatorValidatorsResponse> = {
          success: false,
          validators: []
        }
        return errRet
      })
  }

  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  async queryDelegatorWithdrawAddress (
    request: DeepPartial<QueryDelegatorWithdrawAddressRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorWithdrawAddressResponse>> {
    return await this.queryClient.DelegatorWithdrawAddress(request, metadata)
      .then((resp: QueryDelegatorWithdrawAddressResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDelegatorWithdrawAddressResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Distribution] queryDelegatorWithdrawAddress: ${err}`)
        const errRet: SuccessNoUndefined<QueryDelegatorWithdrawAddressResponse> = {
          success: false,
          withdrawAddress: ''
        }
        return errRet
      })
  }

  /** CommunityPool queries the community pool coins. */
  async queryCommunityPool (
    request: DeepPartial<QueryCommunityPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryCommunityPoolResponse>> {
    return await this.queryClient.CommunityPool(request, metadata)
      .then((resp: QueryCommunityPoolResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryCommunityPoolResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Distribution] queryCommunityPool: ${err}`)
        const errRet: SuccessNoUndefined<QueryCommunityPoolResponse> = {
          success: false,
          pool: []
        }
        return errRet
      })
  }
}
