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

export default class QueryBank implements IQueryBank {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Balance queries the balance of a single coin for a single account. */
  queryBalance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse> {
    return this.queryClient.Balance(request, metadata)
  }
  /** AllBalances queries the balance of all coins for a single account. */
  queryAllBalances(
    request: DeepPartial<QueryAllBalancesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllBalancesResponse> {
    return this.queryClient.AllBalances(request, metadata)
  }
  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   */
  querySpendableBalances(
    request: DeepPartial<QuerySpendableBalancesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySpendableBalancesResponse> {
    return this.queryClient.SpendableBalances(request, metadata)
  }
  /** TotalSupply queries the total supply of all coins. */
  queryTotalSupply(
    request: DeepPartial<QueryTotalSupplyRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalSupplyResponse> {
    return this.queryClient.TotalSupply(request, metadata)
  }
  /** SupplyOf queries the supply of a single coin. */
  querySupplyOf(request: DeepPartial<QuerySupplyOfRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyOfResponse> {
    return this.queryClient.SupplyOf(request, metadata)
  }
  /** Params queries the parameters of x/bank module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.queryClient.Params(request, metadata)
  }
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  queryDenomMetadata(
    request: DeepPartial<QueryDenomMetadataRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomMetadataResponse> {
    return this.queryClient.DenomMetadata(request, metadata)
  }
  /** DenomsMetadata queries the client metadata for all registered coin denominations. */
  queryDenomsMetadata(
    request: DeepPartial<QueryDenomsMetadataRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomsMetadataResponse> {
    return this.queryClient.DenomsMetadata(request, metadata)
  }
}