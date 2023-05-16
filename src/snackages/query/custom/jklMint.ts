import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryClientImpl,
  QueryInflationRequest,
  QueryInflationResponse,
  QueryParamsRequest,
  QueryParamsResponse
} from '@/postgen/canine_chain/jklmint/query'
import { IQueryJklMint } from '@/interfaces/classes/IQueryJklMint'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryJklMint implements IQueryJklMint {
  private readonly queryClient: Query

  constructor(rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
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
        console.warn(`jackal.js-protos - [JklMint] queryParams: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            params: {
              mintDenom: ''
            }
          }
        }
      })
  }

  /** Inflation returns the current minting inflation value. */
  async queryInflation(
    request: DeepPartial<QueryInflationRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryInflationResponse>> {
    return await this.queryClient
      .Inflation(request, metadata)
      .then((resp: QueryInflationResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [JklMint] queryInflation: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            inflation: new Uint8Array([])
          }
        }
      })
  }
}
