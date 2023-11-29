import type { StargateClient } from '@cosmjs/stargate'
import type { IFileTreeExtension } from '@/interfaces'

export interface IJackalStargateClient extends StargateClient {
  readonly queries: IFileTreeExtension
}
