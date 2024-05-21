import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate'
import { assertDefined } from '@cosmjs/utils'
import {
  QueryAllContractStateRequest,
  QueryClientImpl,
  QueryCodeRequest,
  QueryCodesRequest,
  QueryContractHistoryRequest,
  QueryContractInfoRequest,
  QueryContractsByCodeRequest,
  QueryContractsByCreatorRequest, QueryPinnedCodesRequest, QueryRawContractStateRequest, QuerySmartContractStateRequest,
} from '@/postGen/cosmwasm/wasm/v1/query'
import { warnError } from '@/utils/misc'
import type {
} from '@/postGen/cosmwasm/wasm/v1/query'
import type { ICosmwasmExtension } from '@/interfaces/snackages'
import {
  DQueryAllContractStateRequest,
  DQueryCodeRequest,
  DQueryCodesRequest,
  DQueryContractHistoryRequest,
  DQueryContractInfoRequest,
  DQueryContractsByCodeRequest,
  DQueryContractsByCreatorRequest, DQueryParamsRequest,
  DQueryPinnedCodesRequest,
  DQueryRawContractStateRequest, DQuerySmartContractStateRequest,
  type TQueryAllContractStateResponseStrict,
  type TQueryCodeResponse,
  type TQueryCodesResponseStrict,
  type TQueryContractHistoryResponseStrict,
  type TQueryContractInfoResponse,
  type TQueryContractsByCodeResponseStrict,
  type TQueryContractsByCreatorResponseStrict,
  type TQueryPinnedCodesResponseStrict,
  type TQueryRawContractStateResponseStrict, type TQuerySmartContractStateResponseStrict,
} from '@/types/queries'
import type {
} from '@/types/queries/responses'

export function createCosmwasmExtension(base: QueryClient): ICosmwasmExtension {
  const rpc = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpc)

  return {
    cosmwasm: {
      allContractState: async (
        request: DQueryAllContractStateRequest,
      ): Promise<TQueryAllContractStateResponseStrict> => {
        const resp = await queryService
          .AllContractState(request as QueryAllContractStateRequest)
          .catch((err) => {
            warnError('[Cosmwasm] allContractState', err)
            throw err
          })
        // assertDefined(resp.providers)
        return resp as TQueryAllContractStateResponseStrict
      },
      code: async (
        request: DQueryCodeRequest,
      ): Promise<TQueryCodeResponse> => {
        const resp = await queryService
          .Code(request as QueryCodeRequest)
          .catch((err) => {
            warnError('[Cosmwasm] code', err)
            throw err
          })
        // assertDefined(resp.paginationionon)
        return resp as TQueryCodeResponse
      },
      codes: async (
        request: DQueryCodesRequest,
      ): Promise<TQueryCodesResponseStrict> => {
        const resp = await queryService
          .Codes(request as QueryCodesRequest)
          .catch((err) => {
            warnError('[Cosmwasm] codes', err)
            throw err
          })
        // assertDefined(resp.pagination)
        return resp as TQueryCodesResponseStrict
      },
      contractHistory: async (
        request: DQueryContractHistoryRequest,
      ): Promise<TQueryContractHistoryResponseStrict> => {
        const resp = await queryService
          .ContractHistory(request as QueryContractHistoryRequest)
          .catch((err) => {
            warnError('[Cosmwasm] contractHistory', err)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryContractHistoryResponseStrict
      },
      contractInfo: async (
        request: DQueryContractInfoRequest,
      ): Promise<TQueryContractInfoResponse> => {
        const resp = await queryService
          .ContractInfo(request as QueryContractInfoRequest)
          .catch((err) => {
            warnError('[Cosmwasm] contractInfo', err)
            throw err
          })
        // assertDefined(resp.pagination)
        return resp as TQueryContractInfoResponse
      },
      contractsByCode: async (
        request: DQueryContractsByCodeRequest,
      ): Promise<TQueryContractsByCodeResponseStrict> => {
        const resp = await queryService
          .ContractsByCode(request as QueryContractsByCodeRequest)
          .catch((err) => {
            warnError('[Cosmwasm] contractsByCode', err)
            throw err
          })
        // assertDefined(resp.pagination)
        return resp as TQueryContractsByCodeResponseStrict
      },
      contractsByCreator: async (
        request: DQueryContractsByCreatorRequest,
      ): Promise<TQueryContractsByCreatorResponseStrict> => {
        const resp = await queryService
          .ContractsByCreator(request as QueryContractsByCreatorRequest)
          .catch((err) => {
            warnError('[Cosmwasm] contractsByCreator', err)
            throw err
          })
        // assertDefined(resp.pagination)
        return resp as TQueryContractsByCreatorResponseStrict
      },
      pinnedCodes: async (
        request: DQueryPinnedCodesRequest,
      ): Promise<TQueryPinnedCodesResponseStrict> => {
        const resp = await queryService
          .PinnedCodes(request as QueryPinnedCodesRequest)
          .catch((err) => {
            warnError('[Cosmwasm] pinnedCodes', err)
            throw err
          })
        // assertDefined(resp.pagination)
        return resp as TQueryPinnedCodesResponseStrict
      },
      rawContractState: async (
        request: DQueryRawContractStateRequest,
      ): Promise<TQueryRawContractStateResponseStrict> => {
        const resp = await queryService
          .RawContractState(request as QueryRawContractStateRequest)
          .catch((err) => {
            warnError('[Cosmwasm] rawContractState', err)
            throw err
          })
        // assertDefined(resp.pagination)
        return resp as TQueryRawContractStateResponseStrict
      },
      smartContractState: async (
        request: DQuerySmartContractStateRequest,
      ): Promise<TQuerySmartContractStateResponseStrict> => {
        const resp = await queryService
          .SmartContractState(request as QuerySmartContractStateRequest)
          .catch((err) => {
            warnError('[Cosmwasm] smartContractState', err)
            throw err
          })
        // assertDefined(resp.bytesFree)
        return resp as TQuerySmartContractStateResponseStrict
      },
      params: async (
        request: DQueryParamsRequest = {},
      ): Promise<DQueryParamsRequest> => {
        const resp = await queryService.Params(request).catch((err) => {
          warnError('[Cosmwasm] file', err)
          throw err
        })
        // assertDefined(resp.file)
        return resp as DQueryParamsRequest
      },
    },
  }
}
