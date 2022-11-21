import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  QueryAllBalancesRequest, QueryAllBalancesResponse,
  QueryBalanceRequest, QueryBalanceResponse,
  QueryDenomMetadataRequest, QueryDenomMetadataResponse,
  QueryDenomsMetadataRequest, QueryDenomsMetadataResponse,
  QueryParamsRequest, QueryParamsResponse,
  QuerySpendableBalancesRequest, QuerySpendableBalancesResponse,
  QuerySupplyOfRequest, QuerySupplyOfResponse,
  QueryTotalSupplyRequest, QueryTotalSupplyResponse
} from '@/postgen/cosmos/bank/v1beta1/query'

export default interface IQueryBank {
  /** Balance queries the balance of a single coin for a single account. */
  queryBalance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse>;
  /** AllBalances queries the balance of all coins for a single account. */
  queryAllBalances(
    request: DeepPartial<QueryAllBalancesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllBalancesResponse>;
  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   */
  querySpendableBalances(
    request: DeepPartial<QuerySpendableBalancesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySpendableBalancesResponse>;
  /** TotalSupply queries the total supply of all coins. */
  queryTotalSupply(
    request: DeepPartial<QueryTotalSupplyRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalSupplyResponse>;
  /** SupplyOf queries the supply of a single coin. */
  querySupplyOf(request: DeepPartial<QuerySupplyOfRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyOfResponse>;
  /** Params queries the parameters of x/bank module. */
  queryParams(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  queryDenomMetadata(
    request: DeepPartial<QueryDenomMetadataRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomMetadataResponse>;
  /** DenomsMetadata queries the client metadata for all registered coin denominations. */
  queryDenomsMetadata(
    request: DeepPartial<QueryDenomsMetadataRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomsMetadataResponse>;
}
