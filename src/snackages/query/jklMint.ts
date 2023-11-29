import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate'
import { assertDefined } from '@cosmjs/utils'
import { QueryClientImpl } from '@/postgen/canine_chain/jklmint/query'
import type { IJklMintExtension } from '@/interfaces/snackages'
import {
  DQueryInflation,
  DQueryJklMintParams,
  TQueryInflationResponseStrict,
  TQueryJklMintParamsResponseStrict
} from '@/types/queries'

export function createJklMintExtension(base: QueryClient): IJklMintExtension {
  const rpc = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpc)

  return {
    jklMint: {
      inflation: async (request: DQueryInflation): Promise<TQueryInflationResponseStrict> => {
        const resp = await queryService
          .Inflation(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [jklMint] inflation: ${err}`)
            throw err
          })
        assertDefined(resp.inflation)
        return resp as TQueryInflationResponseStrict
      },
      params: async (request: DQueryJklMintParams): Promise<TQueryJklMintParamsResponseStrict> => {
        const resp = await queryService
          .Params(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [jklMint] params: ${err}`)
            throw err
          })
        assertDefined(resp.params)
        return resp as TQueryJklMintParamsResponseStrict
      }
    }
  }
}
