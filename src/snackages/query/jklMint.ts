import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate'
import { assertDefined } from '@cosmjs/utils'
import { QueryClientImpl } from '@/postgen/canine_chain/jklmint/query'
import { warnError } from '@/utils/misc'
import type { IJklMintExtension } from '@/interfaces/snackages'
import type {
  DQueryInflation,
  DQueryJklMintParams
} from '@/types/queries'
import type {
  TQueryInflationResponseStrict,
  TQueryJklMintParamsResponseStrict
} from '@/types/queries/responses'

export function createJklMintExtension(base: QueryClient): IJklMintExtension {
  const rpc = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpc)

  return {
    jklMint: {
      inflation: async (request: DQueryInflation): Promise<TQueryInflationResponseStrict> => {
        const resp = await queryService
          .Inflation(request)
          .catch((err) => {
            warnError('[jklMint] inflation', err)
            throw err
          })
        assertDefined(resp.inflation)
        return resp as TQueryInflationResponseStrict
      },
      params: async (request: DQueryJklMintParams): Promise<TQueryJklMintParamsResponseStrict> => {
        const resp = await queryService
          .Params(request)
          .catch((err) => {
            warnError('[jklMint] params', err)
            throw err
          })
        assertDefined(resp.params)
        return resp as TQueryJklMintParamsResponseStrict
      }
    }
  }
}
