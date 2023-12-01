import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import {
  QueryClient,
  setupBankExtension,
  setupDistributionExtension,
  setupGovExtension,
  setupSlashingExtension,
  setupStakingExtension,
  StargateClient
} from '@cosmjs/stargate'
import {
  createFileTreeExtension,
  createJklMintExtension,
  createNotificationsExtension,
  createOracleExtension,
  createRnsExtension,
  createStorageExtension
} from '@/snackages/query'
import type { StargateClientOptions } from '@cosmjs/stargate'
import type { IJackalStargateClient } from '@/interfaces/classes'
import type { DHttpEndpoint, TQueryExtensions } from '@/types'

/**
 * @class {IJackalStargateClient} JackalStargateClient
 */
export class JackalStargateClient extends StargateClient implements IJackalStargateClient {
  public readonly queries: TQueryExtensions

  /**
   * @function connect
   * @memberof JackalStargateClient
   * @async
   * @static
   */
  public static async connect(
    endpoint: string | DHttpEndpoint,
    options: StargateClientOptions = {},
  ): Promise<JackalStargateClient> {
    if (!endpoint) throw new Error("A valid endpoint is required!")
    const tmClient = await Tendermint34Client.connect(endpoint)
    if (!tmClient) throw new Error("Tendermint34Client creation failed")
    return new JackalStargateClient(tmClient, options)
  }

  protected constructor(tmClient: Tendermint34Client, options: StargateClientOptions) {
    super(tmClient, options)
    this.queries = QueryClient.withExtensions(
      tmClient,
      /* Jackal Extensions */
      createFileTreeExtension,
      createJklMintExtension,
      createNotificationsExtension,
      createOracleExtension,
      createRnsExtension,
      createStorageExtension,
      /* Cosmos Extensions */
      setupBankExtension,
      setupDistributionExtension,
      setupGovExtension,
      setupSlashingExtension,
      setupStakingExtension
    )
  }
}
