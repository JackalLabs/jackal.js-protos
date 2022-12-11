import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryClientImpl,
  QueryInflationRequest, QueryInflationResponse,
  QueryParamsRequest, QueryParamsResponse
} from '@/postgen/canine_chain/jklmint/query'
import IQueryJklMint from '@/interfaces/classes/IQueryJklMint'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryJklMint implements IQueryJklMint {
  private readonly queryClient: Query

  constructor (rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Parameters queries the parameters of the module. */
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
        console.warn(`jackal.js-protos - [JklMint] queryParams: ${err}`)
        const errRet: SuccessNoUndefined<QueryParamsResponse> = {
          success: false,
          params: {
            mintDenom: ''
          }
        }
        return errRet
      })
  }

  /** Inflation returns the current minting inflation value. */
  async queryInflation (
    request: DeepPartial<QueryInflationRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QueryInflationResponse>> {
    return await this.queryClient.Inflation(request, metadata)
      .then((resp: QueryInflationResponse) => {
        const thenRet = resp as SuccessNoUndefined<QueryInflationResponse>
        thenRet.success = true
        return thenRet
      })
      .catch(err => {
        console.warn(`jackal.js-protos - [JklMint] queryInflation: ${err}`)
        const errRet: SuccessNoUndefined<QueryInflationResponse> = {
          success: false,
          inflation: new Uint8Array()
        }
        return errRet
      })
  }
}
