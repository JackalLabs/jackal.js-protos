import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryAllBalancesRequest,
  QueryAllBalancesResponse,
  QueryBalanceRequest,
  QueryBalanceResponse,
  QueryClientImpl,
  QueryDenomMetadataRequest,
  QueryDenomMetadataResponse,
  QueryDenomsMetadataRequest,
  QueryDenomsMetadataResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QuerySpendableBalancesRequest,
  QuerySpendableBalancesResponse,
  QuerySupplyOfRequest,
  QuerySupplyOfResponse,
  QueryTotalSupplyRequest,
  QueryTotalSupplyResponse
} from '@/postgen/cosmos/bank/v1beta1/query'
import { IQueryBank } from '@/interfaces/classes/IQueryBank'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryBank implements IQueryBank {
  private readonly queryClient: Query

  constructor(rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Balance queries the balance of a single coin for a single account. */
  async queryBalance(
    request: DeepPartial<QueryBalanceRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryBalanceResponse>> {
    return await this.queryClient
      .Balance(request, metadata)
      .then((resp: QueryBalanceResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Bank] queryBalance: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            balance: {
              denom: '',
              amount: ''
            }
          }
        }
      })
  }

  /** AllBalances queries the balance of all coins for a single account. */
  async queryAllBalances(
    request: DeepPartial<QueryAllBalancesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllBalancesResponse>> {
    return await this.queryClient
      .AllBalances(request, metadata)
      .then((resp: QueryAllBalancesResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Bank] queryAllBalances: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            balances: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   */
  async querySpendableBalances(
    request: DeepPartial<QuerySpendableBalancesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QuerySpendableBalancesResponse>> {
    return await this.queryClient
      .SpendableBalances(request, metadata)
      .then((resp: QuerySpendableBalancesResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Bank] querySpendableBalances: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            balances: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** TotalSupply queries the total supply of all coins. */
  async queryTotalSupply(
    request: DeepPartial<QueryTotalSupplyRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryTotalSupplyResponse>> {
    return await this.queryClient
      .TotalSupply(request, metadata)
      .then((resp: QueryTotalSupplyResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Bank] queryTotalSupply: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            supply: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }

  /** SupplyOf queries the supply of a single coin. */
  async querySupplyOf(
    request: DeepPartial<QuerySupplyOfRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QuerySupplyOfResponse>> {
    return await this.queryClient
      .SupplyOf(request, metadata)
      .then((resp: QuerySupplyOfResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Bank] querySupplyOf: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            amount: {
              denom: '',
              amount: ''
            }
          }
        }
      })
  }

  /** Params queries the parameters of x/bank module. */
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
        console.warn(`jackal.js-protos - [Bank] queryParams: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            params: {
              sendEnabled: [],
              defaultSendEnabled: false
            }
          }
        }
      })
  }

  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  async queryDenomMetadata(
    request: DeepPartial<QueryDenomMetadataRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDenomMetadataResponse>> {
    return await this.queryClient
      .DenomMetadata(request, metadata)
      .then((resp: QueryDenomMetadataResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Bank] queryDenomMetadata: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            metadata: {
              description: '',
              denomUnits: [],
              base: '',
              display: '',
              name: '',
              symbol: ''
            }
          }
        }
      })
  }

  /** DenomsMetadata queries the client metadata for all registered coin denominations. */
  async queryDenomsMetadata(
    request: DeepPartial<QueryDenomsMetadataRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDenomsMetadataResponse>> {
    return await this.queryClient
      .DenomsMetadata(request, metadata)
      .then((resp: QueryDenomsMetadataResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Bank] queryDenomsMetadata: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            metadatas: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }
}
