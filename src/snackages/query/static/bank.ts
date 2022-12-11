import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial, GrpcWebImpl, Query,
  QueryAllBalancesRequest,
  QueryAllBalancesResponse,
  QueryBalanceRequest,
  QueryBalanceResponse, QueryClientImpl,
  QueryDenomMetadataRequest,
  QueryDenomMetadataResponse,
  QueryDenomsMetadataRequest, QueryDenomsMetadataResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QuerySpendableBalancesRequest,
  QuerySpendableBalancesResponse,
  QuerySupplyOfRequest,
  QuerySupplyOfResponse,
  QueryTotalSupplyRequest,
  QueryTotalSupplyResponse
} from '@/postgen/cosmos/bank/v1beta1/query'
import IQueryBank from '@/interfaces/classes/IQueryBank'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryBank implements IQueryBank {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Balance queries the balance of a single coin for a single account. */
  async queryBalance (
    request: DeepPartial<QueryBalanceRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryBalanceResponse>> {
    return await this.queryClient.Balance(request, metadata)
      .then((resp: QueryBalanceResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryBalanceResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Bank] queryBalance: ${err}`)
        const errRet: SuccessNoUndefined<QueryBalanceResponse> = {
          success: false,
          balance: {
            denom: '',
            amount: ''
          }
        }
        return errRet
      })
  }

  /** AllBalances queries the balance of all coins for a single account. */
  async queryAllBalances (
    request: DeepPartial<QueryAllBalancesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryAllBalancesResponse>> {
    return await this.queryClient.AllBalances(request, metadata)
      .then((resp: QueryAllBalancesResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryAllBalancesResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Bank] queryAllBalances: ${err}`)
        const errRet: SuccessNoUndefined<QueryAllBalancesResponse> = {
          success: false,
          balances: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   */
  async querySpendableBalances (
    request: DeepPartial<QuerySpendableBalancesRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QuerySpendableBalancesResponse>> {
    return await this.queryClient.SpendableBalances(request, metadata)
      .then((resp: QuerySpendableBalancesResponse) => {
        const thenRet = resp as SuccessNoUndefined<QuerySpendableBalancesResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Bank] querySpendableBalances: ${err}`)
        const errRet: SuccessNoUndefined<QuerySpendableBalancesResponse> = {
          success: false,
          balances: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** TotalSupply queries the total supply of all coins. */
  async queryTotalSupply (
    request: DeepPartial<QueryTotalSupplyRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryTotalSupplyResponse>> {
    return await this.queryClient.TotalSupply(request, metadata)
      .then((resp: QueryTotalSupplyResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryTotalSupplyResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Bank] queryTotalSupply: ${err}`)
        const errRet: SuccessNoUndefined<QueryTotalSupplyResponse> = {
          success: false,
          supply: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }

  /** SupplyOf queries the supply of a single coin. */
  async querySupplyOf (
    request: DeepPartial<QuerySupplyOfRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QuerySupplyOfResponse>> {
    return await this.queryClient.SupplyOf(request, metadata)
      .then((resp: QuerySupplyOfResponse) => {
        const thenRet = resp as SuccessNoUndefined<QuerySupplyOfResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Bank] querySupplyOf: ${err}`)
        const errRet: SuccessNoUndefined<QuerySupplyOfResponse> = {
          success: false,
          amount: {
            denom: '',
            amount: ''
          }
        }
        return errRet
      })
  }

  /** Params queries the parameters of x/bank module. */
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
        console.warn(`jackal.js-protos - [Bank] queryParams: ${err}`)
        const errRet: SuccessNoUndefined<QueryParamsResponse> = {
          success: false,
          params: {
            sendEnabled: [],
            defaultSendEnabled: false
          }
        }
        return errRet
      })
  }

  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  async queryDenomMetadata (
    request: DeepPartial<QueryDenomMetadataRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDenomMetadataResponse>> {
    return await this.queryClient.DenomMetadata(request, metadata)
      .then((resp: QueryDenomMetadataResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDenomMetadataResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Bank] queryDenomMetadata: ${err}`)
        const errRet: SuccessNoUndefined<QueryDenomMetadataResponse> = {
          success: false,
          metadata: {
            description: '',
            denomUnits: [],
            base: '',
            display: '',
            name: '',
            symbol: ''
          }
        }
        return errRet
      })
  }

  /** DenomsMetadata queries the client metadata for all registered coin denominations. */
  async queryDenomsMetadata (
    request: DeepPartial<QueryDenomsMetadataRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryDenomsMetadataResponse>> {
    return await this.queryClient.DenomsMetadata(request, metadata)
      .then((resp: QueryDenomsMetadataResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryDenomsMetadataResponse>
        thenRet.success = true
        thenRet.pagination = resp.pagination || {nextKey: new Uint8Array(), total: 0}
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [Bank] queryDenomsMetadata: ${err}`)
        const errRet: SuccessNoUndefined<QueryDenomsMetadataResponse> = {
          success: false,
          metadatas: [],
          pagination: {nextKey: new Uint8Array(), total: 0}
        }
        return errRet
      })
  }
}
