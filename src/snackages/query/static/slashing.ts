import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
  GrpcWebImpl,
  Query,
  QueryClientImpl,
  QueryParamsRequest,
  QueryParamsResponse,
  QuerySigningInfoRequest,
  QuerySigningInfoResponse,
  QuerySigningInfosRequest,
  QuerySigningInfosResponse
} from '@/postgen/cosmos/slashing/v1beta1/query'
import { IQuerySlashing } from '@/interfaces/classes/IQuerySlashing'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QuerySlashing implements IQuerySlashing {
  private readonly queryClient: Query

  constructor(rpc: GrpcWebImpl) {
    this.queryClient = new QueryClientImpl(rpc)
  }

  /** Params queries the parameters of slashing module */
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
        console.warn(`jackal.js-protos - [Slashing] queryParams: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            params: {
              signedBlocksWindow: 0,
              minSignedPerWindow: new Uint8Array([]),
              downtimeJailDuration: {
                seconds: 0,
                nanos: 0
              },
              slashFractionDoubleSign: new Uint8Array([]),
              slashFractionDowntime: new Uint8Array([])
            }
          }
        }
      })
  }

  /** SigningInfo queries the signing info of given cons address */
  async querySigningInfo(
    request: DeepPartial<QuerySigningInfoRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QuerySigningInfoResponse>> {
    return await this.queryClient
      .SigningInfo(request, metadata)
      .then((resp: QuerySigningInfoResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Slashing] querySigningInfo: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            valSigningInfo: {
              address: '',
              startHeight: 0,
              indexOffset: 0,
              jailedUntil: new Date(),
              tombstoned: false,
              missedBlocksCounter: 0
            }
          }
        }
      })
  }

  /** SigningInfos queries signing info of all validators */
  async querySigningInfos(
    request: DeepPartial<QuerySigningInfosRequest>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<QuerySigningInfosResponse>> {
    return await this.queryClient
      .SigningInfos(request, metadata)
      .then((resp: QuerySigningInfosResponse) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [Slashing] querySigningInfos: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            info: [],
            pagination: { nextKey: new Uint8Array([]), total: 0 }
          }
        }
      })
  }
}
