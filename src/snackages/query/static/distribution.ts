import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryClientImpl,
  QueryCommunityPoolRequest,
  QueryCommunityPoolResponse,
  QueryDelegationRewardsRequest,
  QueryDelegationRewardsResponse,
  QueryDelegationTotalRewardsRequest,
  QueryDelegationTotalRewardsResponse,
  QueryDelegatorValidatorsRequest,
  QueryDelegatorValidatorsResponse,
  QueryDelegatorWithdrawAddressRequest,
  QueryDelegatorWithdrawAddressResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryValidatorCommissionRequest,
  QueryValidatorCommissionResponse,
  QueryValidatorOutstandingRewardsRequest,
  QueryValidatorOutstandingRewardsResponse,
  QueryValidatorSlashesRequest,
  QueryValidatorSlashesResponse
} from '@/postgen/cosmos/distribution/v1beta1/query'
import { IQueryDistribution } from '@/interfaces/classes/IQueryDistribution'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryDistribution implements IQueryDistribution {
  private readonly queryClient: Query

  constructor(rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Params queries params of the distribution module. */
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
        console.warn(`jackal.js-protos - [Distribution] queryParams: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            params: {
              communityTax: '',
              baseProposerReward: '',
              bonusProposerReward: '',
              withdrawAddrEnabled: false
            }
          }
        }
      })
  }

  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  async queryValidatorOutstandingRewards(
    request: DeepPartial<QueryValidatorOutstandingRewardsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorOutstandingRewardsResponse>> {
    return await this.queryClient
      .ValidatorOutstandingRewards(request, metadata)
      .then((resp: QueryValidatorOutstandingRewardsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Distribution] queryValidatorOutstandingRewards: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            rewards: {
              rewards: []
            }
          }
        }
      })
  }

  /** ValidatorCommission queries accumulated commission for a validator. */
  async queryValidatorCommission(
    request: DeepPartial<QueryValidatorCommissionRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorCommissionResponse>> {
    return await this.queryClient
      .ValidatorCommission(request, metadata)
      .then((resp: QueryValidatorCommissionResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Distribution] queryValidatorCommission: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            commission: {
              commission: []
            }
          }
        }
      })
  }

  /** ValidatorSlashes queries slash events of a validator. */
  async queryValidatorSlashes(
    request: DeepPartial<QueryValidatorSlashesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryValidatorSlashesResponse>> {
    return await this.queryClient
      .ValidatorSlashes(request, metadata)
      .then((resp: QueryValidatorSlashesResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Distribution] queryValidatorSlashes: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            slashes: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** DelegationRewards queries the total rewards accrued by a delegation. */
  async queryDelegationRewards(
    request: DeepPartial<QueryDelegationRewardsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegationRewardsResponse>> {
    return await this.queryClient
      .DelegationRewards(request, metadata)
      .then((resp: QueryDelegationRewardsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Distribution] queryDelegationRewards: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            rewards: []
          }
        }
      })
  }

  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  async queryDelegationTotalRewards(
    request: DeepPartial<QueryDelegationTotalRewardsRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegationTotalRewardsResponse>> {
    return await this.queryClient
      .DelegationTotalRewards(request, metadata)
      .then((resp: QueryDelegationTotalRewardsResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Distribution] queryDelegationTotalRewards: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            rewards: [],
            total: []
          }
        }
      })
  }

  /** DelegatorValidators queries the validators of a delegator. */
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
          `jackal.js-protos - [Distribution] queryDelegatorValidators: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            validators: []
          }
        }
      })
  }

  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  async queryDelegatorWithdrawAddress(
    request: DeepPartial<QueryDelegatorWithdrawAddressRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDelegatorWithdrawAddressResponse>> {
    return await this.queryClient
      .DelegatorWithdrawAddress(request, metadata)
      .then((resp: QueryDelegatorWithdrawAddressResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Distribution] queryDelegatorWithdrawAddress: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            withdrawAddress: ''
          }
        }
      })
  }

  /** CommunityPool queries the community pool coins. */
  async queryCommunityPool(
    request: DeepPartial<QueryCommunityPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryCommunityPoolResponse>> {
    return await this.queryClient
      .CommunityPool(request, metadata)
      .then((resp: QueryCommunityPoolResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(
          `jackal.js-protos - [Distribution] queryCommunityPool: ${err}`
        )
        return {
          message: '',
          success: false,
          value: {
            pool: []
          }
        }
      })
  }
}
