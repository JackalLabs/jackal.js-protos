import { QueryClient } from '@cosmjs/stargate'
import type { IIbcExtension } from '@/interfaces'

export function createIbcExtension(_: QueryClient): IIbcExtension {
  return {
    ibc: {},
  }
}
