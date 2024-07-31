import type { PageRequest } from '@/postGen/cosmos/base/query/v1beta1/pagination'
import {
  QueryAllContractStateRequest, QueryCodeRequest, QueryCodesRequest,
  QueryContractHistoryRequest, QueryContractInfoRequest,
  QueryContractsByCodeRequest, QueryContractsByCreatorRequest, QueryParamsRequest, QueryPinnedCodesRequest,
  QueryRawContractStateRequest,
  QuerySmartContractStateRequest,
} from '@/postGen/cosmwasm/wasm/v1/query'
import { WithOptional } from '@/types/misc'

/**
 * QueryAllContractStateRequest Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryAllContractStateRequest = Documentation<
  {
    address: string
    pagination?: PageRequest
  },
  WithOptional<QueryAllContractStateRequest, 'pagination'>
>

/**
 * QueryContractHistoryRequest Documentation
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryContractHistoryRequest = Documentation<
  {
    address: string
    pagination?: PageRequest
  },
  WithOptional<QueryContractHistoryRequest, 'pagination'>
>

/**
 * QueryContractsByCodeRequest Documentation
 * @prop {Uint8Array} merkle - Merkle root of target file.
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryContractsByCodeRequest = Documentation<
  {
    codeId: number
    pagination?: PageRequest
  },
  WithOptional<QueryContractsByCodeRequest, 'pagination'>
>

/**
 * QueryContractsByCreatorRequest Documentation
 * @prop {Uint8Array} merkle - Merkle root of target file.
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryContractsByCreatorRequest = Documentation<
  {
    creatorAddress: string
    pagination?: PageRequest
  },
  WithOptional<QueryContractsByCreatorRequest, 'pagination'>
>

/**
 * QueryCodesRequest Documentation
 * @prop {Uint8Array} merkle - Merkle root of target file.
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryCodesRequest = Documentation<
  {
    pagination?: PageRequest
  },
  WithOptional<QueryCodesRequest, 'pagination'>
>

/**
 * QueryPinnedCodesRequest Documentation
 * @prop {Uint8Array} merkle - Merkle root of target file.
 * @prop {PageRequest} [pagination] - Optional pagination, defaults to first 100 results.
 */
export type DQueryPinnedCodesRequest = Documentation<
  {
    pagination?: PageRequest
  },
  WithOptional<QueryPinnedCodesRequest, 'pagination'>
>

/**
 * QueryRawContractStateRequest Documentation
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal wallet address of file owner.
 * @prop {number} start - Block height when file was stored.
 */
export type DQueryRawContractStateRequest = Documentation<
  {
    address: string
    queryData: Uint8Array
  },
  QueryRawContractStateRequest
>

/**
 * QuerySmartContractStateRequest Documentation
 * @prop {string} address - Jackal wallet address of provider.
 */
export type DQuerySmartContractStateRequest = Documentation<
  {
    address: string
    queryData: Uint8Array
  },
  QuerySmartContractStateRequest
>

/**
 * QueryContractInfoRequest Documentation
 * @prop {string} address - Jackal wallet address of provider.
 */
export type DQueryContractInfoRequest = Documentation<
  {
    address: string
  },
  QueryContractInfoRequest
>

/**
 * QueryCodeRequest Documentation
 * @prop {string} providerAddress - Jackal wallet address of provider.
 * @prop {Uint8Array} merkle - Merkle tree root of file.
 * @prop {string} owner - Jackal wallet address of file owner.
 * @prop {number} start - Block height when file was stored.
 */
export type DQueryCodeRequest = Documentation<
  {
    codeId: number
  },
  QueryCodeRequest
>

/**
 * QueryParamsRequest Documentation
 *
 * No parameters.
 */
export type DQueryParamsRequest = Documentation<{}, QueryParamsRequest>
