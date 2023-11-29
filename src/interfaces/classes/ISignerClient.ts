import type { SigningStargateClient } from '@cosmjs/stargate'
import type { ISignAndBroadcastOptions, ITxLibrary } from '@/interfaces'
import type { DDeliverTxResponse, DEncodeObject, TQueryExtensions } from '@/types'

export interface IJackalSigningStargateClient extends SigningStargateClient {
  readonly queries: TQueryExtensions
  readonly txLibrary: ITxLibrary

  selfSignAndBroadcast(msgs: DEncodeObject[], options?: ISignAndBroadcastOptions): Promise<DDeliverTxResponse>
}
