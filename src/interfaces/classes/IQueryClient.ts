import type { StargateClient } from '@cosmjs/stargate'
import type { TQueryExtensions } from '@/types'

/**
 * @interface IJackalStargateClient
 * @extends StargateClient - [More here](https://cosmos.github.io/cosmjs/latest/stargate/classes/StargateClient.html)
 * @property {TQueryExtensions} queries
 */
export interface IJackalStargateClient extends StargateClient {
  readonly queries: TQueryExtensions
}
