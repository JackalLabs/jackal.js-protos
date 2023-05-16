import { grpc } from '@improbable-eng/grpc-web'
import {
  DeepPartial,
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
import SuccessNoUndefined from '@/types/TSuccessNoUndefined'

export interface IQueryABCI {
  /** Returns a message (or echo) */
  echo(
    request: DeepPartial<RequestEcho>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseEcho>>

  /** Returns flush  */
  flush(
    request: DeepPartial<RequestFlush>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseFlush>>

  /** Returns the details of a block by requesting versions */
  info(
    request: DeepPartial<RequestInfo>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseInfo>>

  /** Returns set options */
  setOption(
    request: DeepPartial<RequestSetOption>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseSetOption>>

  /** Returns initialization of chains */
  initChain(
    request: DeepPartial<RequestInitChain>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseInitChain>>

  /** Returns Returns */
  query(
    request: DeepPartial<RequestQuery>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseQuery>>

  /** Returns events that begin blocks */
  beginBlock(
    request: DeepPartial<RequestBeginBlock>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseBeginBlock>>

  /** Returns stuffs that check transactions */
  checkTx(
    request: DeepPartial<RequestCheckTx>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseCheckTx>>

  /** Returns stuffs that deliver transactions */
  deliverTx(
    request: DeepPartial<RequestDeliverTx>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseDeliverTx>>

  /** Returns events that end blocks */
  endBlock(
    request: DeepPartial<RequestEndBlock>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseEndBlock>>

  /** Returns commit data */
  commit(
    request: DeepPartial<RequestCommit>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseCommit>>

  /** Returns a list of snapshots */
  listSnapshots(
    request: DeepPartial<RequestListSnapshots>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseListSnapshots>>

  /** Returns results that offer snapshot */
  offerSnapshot(
    request: DeepPartial<RequestOfferSnapshot>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseOfferSnapshot>>

  /** Returns chunks */
  loadSnapshotChunk(
    request: DeepPartial<RequestLoadSnapshotChunk>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseLoadSnapshotChunk>>

  /** Returns results that apply snapshot chunks */
  applySnapshotChunk(
    request: DeepPartial<RequestApplySnapshotChunk>,
    metadata?: grpc.Metadata
  ): Promise<SuccessNoUndefined<ResponseApplySnapshotChunk>>
}
