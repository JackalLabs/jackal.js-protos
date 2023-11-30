import type { SigningStargateClient } from '@cosmjs/stargate'
import type { ISignAndBroadcastOptions, ITxLibrary } from '@/interfaces'
import type { DDeliverTxResponse, DEncodeObject, TQueryExtensions } from '@/types'

/**
 * @interface IJackalSigningStargateClient
 * @extends SigningStargateClient - [More here](https://cosmos.github.io/cosmjs/latest/stargate/classes/SigningStargateClient.html)
 * @property {TQueryExtensions} queries
 * @property {ITxLibrary} txLibrary
 * @property {selfSignAndBroadcast} selfSignAndBroadcast
 */
export interface IJackalSigningStargateClient extends SigningStargateClient {
  readonly queries: TQueryExtensions
  readonly txLibrary: ITxLibrary

  /**
   * @function selfSignAndBroadcast
   * @param {DEncodeObject[]} msgs
   * @param {ISignAndBroadcastOptions} [options]
   * @returns Promise<DDeliverTxResponse>
   */
  selfSignAndBroadcast(msgs: DEncodeObject[], options?: ISignAndBroadcastOptions): Promise<DDeliverTxResponse>
}
