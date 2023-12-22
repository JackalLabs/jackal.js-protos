import type { TQueryExtensions } from '@/types'
import { StargateCompatibilityClient } from '@/compatibility'

/**
 * @interface IJackalStargateClient
 * @extends StargateCompatibilityClient - [More here](https://cosmos.github.io/cosmjs/latest/stargate/classes/StargateClient.html)
 * @property {TQueryExtensions} queries
 */
export interface IJackalStargateClient extends StargateCompatibilityClient {
  readonly queries: TQueryExtensions
}
