import type { ISignAndBroadcastOptions, ITxLibrary } from '@/interfaces'
import type {
  DDeliverTxResponse,
  DEncodeObject,
  TQueryExtensions,
} from '@/types'
import { SigningStargateCompatibilityClient } from '@/compatibility'

/**
 * @interface IJackalSigningStargateClient
 * @extends SigningStargateCompatibilityClient - [More here](https://cosmos.github.io/cosmjs/latest/stargate/classes/SigningStargateClient.html)
 * @property {TQueryExtensions} queries
 * @property {ITxLibrary} txLibrary
 * @property {selfSignAndBroadcast} selfSignAndBroadcast
 */
export interface IJackalSigningStargateClient
  extends SigningStargateCompatibilityClient {
  readonly queries: TQueryExtensions
  readonly txLibrary: ITxLibrary

  /**
   * @function selfSignAndBroadcast
   * @param {DEncodeObject[]} msgs
   * @param {ISignAndBroadcastOptions} [options]
   * @returns Promise<DDeliverTxResponse>
   */
  selfSignAndBroadcast(
    msgs: DEncodeObject[],
    options?: ISignAndBroadcastOptions,
  ): Promise<DDeliverTxResponse>
}
