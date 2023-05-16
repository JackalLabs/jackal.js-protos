import { grpc } from '@improbable-eng/grpc-web'
import {
  ABCIApplication,
  ABCIApplicationClientImpl,
  DeepPartial,
  GrpcWebImpl,
  RequestApplySnapshotChunk,
  RequestBeginBlock,
  RequestCheckTx,
  RequestCommit,
  RequestDeliverTx,
  RequestEcho,
  RequestEndBlock,
  RequestFlush,
  RequestInfo,
  RequestInitChain,
  RequestListSnapshots,
  RequestLoadSnapshotChunk,
  RequestOfferSnapshot,
  RequestQuery,
  RequestSetOption,
  ResponseApplySnapshotChunk,
  ResponseBeginBlock,
  ResponseCheckTx,
  ResponseCommit,
  ResponseDeliverTx,
  ResponseEcho,
  ResponseEndBlock,
  ResponseFlush,
  ResponseInfo,
  ResponseInitChain,
  ResponseListSnapshots,
  ResponseLoadSnapshotChunk,
  ResponseOfferSnapshot,
  ResponseQuery,
  ResponseSetOption
} from '@/postgen/tendermint/abci/types'
import { IQueryABCI } from '@/interfaces/classes/IQueryABCI'
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export default class QueryABCI implements IQueryABCI {
  private readonly ABCIApplicationClient: ABCIApplication

  constructor(rpc: GrpcWebImpl) {
    this.ABCIApplicationClient = new ABCIApplicationClientImpl(rpc)
  }

  /** Returns a message (or echo) */
  async echo(
    request: DeepPartial<RequestEcho>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseEcho>> {
    return await this.ABCIApplicationClient.Echo(request, metadata)
      .then((resp: ResponseEcho) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] echo: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            message: ''
          }
        }
      })
  }

  /** Returns flush  */
  async flush(
    request: DeepPartial<RequestFlush>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseFlush>> {
    return await this.ABCIApplicationClient.Flush(request, metadata)
      .then((resp: ResponseFlush) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] flush: ${err}`)
        return {
          message: '',
          success: false,
          value: {}
        }
      })
  }

  /** Returns the details of a block by requesting versions */
  async info(
    request: DeepPartial<RequestInfo>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseInfo>> {
    return await this.ABCIApplicationClient.Info(request, metadata)
      .then((resp: ResponseInfo) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] info: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            data: '',
            version: '',
            appVersion: 0,
            lastBlockHeight: 0,
            lastBlockAppHash: new Uint8Array([])
          }
        }
      })
  }

  /** Returns set options */
  async setOption(
    request: DeepPartial<RequestSetOption>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseSetOption>> {
    return await this.ABCIApplicationClient.SetOption(request, metadata)
      .then((resp: ResponseSetOption) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] setOption: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            code: 0,
            log: '',
            info: ''
          }
        }
      })
  }

  /** Returns initialization of chains */
  async initChain(
    request: DeepPartial<RequestInitChain>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseInitChain>> {
    return await this.ABCIApplicationClient.InitChain(request, metadata)
      .then((resp: ResponseInitChain) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] initChain: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            consensusParams: undefined,
            validators: [],
            appHash: new Uint8Array([])
          }
        }
      })
  }

  /** Returns Returns */
  async query(
    request: DeepPartial<RequestQuery>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseQuery>> {
    return await this.ABCIApplicationClient.Query(request, metadata)
      .then((resp: ResponseQuery) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] query: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            code: 0,
            log: '',
            info: '',
            index: 0,
            key: new Uint8Array([]),
            value: new Uint8Array([]),
            proofOps: undefined,
            height: 0,
            codespace: ''
          }
        }
      })
  }

  /** Returns events that begin blocks */
  async beginBlock(
    request: DeepPartial<RequestBeginBlock>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseBeginBlock>> {
    return await this.ABCIApplicationClient.BeginBlock(request, metadata)
      .then((resp: ResponseBeginBlock) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] beginBlock: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            events: []
          }
        }
      })
  }

  /** Returns stuffs that check transactions */
  async checkTx(
    request: DeepPartial<RequestCheckTx>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseCheckTx>> {
    return await this.ABCIApplicationClient.CheckTx(request, metadata)
      .then((resp: ResponseCheckTx) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] checkTx: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            code: 0,
            data: new Uint8Array([]),
            log: '',
            info: '',
            gasWanted: 0,
            gasUsed: 0,
            events: [],
            codespace: '',
            sender: '',
            priority: 0,
            mempoolError: ''
          }
        }
      })
  }

  /** Returns stuffs that deliver transactions */
  async deliverTx(
    request: DeepPartial<RequestDeliverTx>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseDeliverTx>> {
    return await this.ABCIApplicationClient.DeliverTx(request, metadata)
      .then((resp: ResponseDeliverTx) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] deliverTx: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            code: 0,
            data: new Uint8Array([]),
            log: '',
            info: '',
            gasWanted: 0,
            gasUsed: 0,
            events: [],
            codespace: '',
            sender: '',
            priority: 0,
            mempoolError: ''
          }
        }
      })
  }

  /** Returns events that end blocks */
  async endBlock(
    request: DeepPartial<RequestEndBlock>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseEndBlock>> {
    return await this.ABCIApplicationClient.EndBlock(request, metadata)
      .then((resp: ResponseEndBlock) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] endBlock: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            validatorUpdates: [],
            consensusParamUpdates: undefined,
            events: []
          }
        }
      })
  }

  /** Returns commit data */
  async commit(
    request: DeepPartial<RequestCommit>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseCommit>> {
    return await this.ABCIApplicationClient.Commit(request, metadata)
      .then((resp: ResponseCommit) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] commit: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            data: new Uint8Array([]),
            retainHeight: 0
          }
        }
      })
  }

  /** Returns a list of snapshots */
  async listSnapshots(
    request: DeepPartial<RequestListSnapshots>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseListSnapshots>> {
    return await this.ABCIApplicationClient.ListSnapshots(request, metadata)
      .then((resp: ResponseListSnapshots) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] listSnapshots: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            snapshots: []
          }
        }
      })
  }

  /** Returns results that offer snapshot */
  async offerSnapshot(
    request: DeepPartial<RequestOfferSnapshot>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseOfferSnapshot>> {
    return await this.ABCIApplicationClient.OfferSnapshot(request, metadata)
      .then((resp: ResponseOfferSnapshot) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] offerSnapshot: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            result: 0
          }
        }
      })
  }

  /** Returns chunks */
  async loadSnapshotChunk(
    request: DeepPartial<RequestLoadSnapshotChunk>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseLoadSnapshotChunk>> {
    return await this.ABCIApplicationClient.LoadSnapshotChunk(request, metadata)
      .then((resp: ResponseLoadSnapshotChunk) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] loadSnapshotChunk: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            chunk: new Uint8Array([])
          }
        }
      })
  }

  /** Returns results that apply snapshot chunks */
  async applySnapshotChunk(
    request: DeepPartial<RequestApplySnapshotChunk>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseApplySnapshotChunk>> {
    return await this.ABCIApplicationClient.ApplySnapshotChunk(
      request,
      metadata
    )
      .then((resp: ResponseApplySnapshotChunk) => {
        return {
          message: '',
          success: true,
          value: resp
        }
      })
      .catch((err) => {
        console.warn(`jackal.js-protos - [ABCI] applySnapshotChunk: ${err}`)
        return {
          message: '',
          success: false,
          value: {
            result: 0,
            refetchChunks: [],
            rejectSenders: []
          }
        }
      })
  }
}
