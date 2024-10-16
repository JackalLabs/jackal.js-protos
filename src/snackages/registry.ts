import { defaultRegistryTypes } from '@cosmjs/stargate'
import { Registry } from '@cosmjs/proto-signing'
import {
  fileTreeTypes,
  notificationsTypes,
  oracleTypes,
  rnsTypes,
  storageTypes,
} from '@/snackages/tx'
import type { TModuleType } from '@/types'

export const jackalDefaultRegistryEntries: Array<TModuleType> = [
  ...defaultRegistryTypes,
  ...Object.values(fileTreeTypes),
  /* No JklMint tx */
  ...Object.values(notificationsTypes),
  ...Object.values(oracleTypes),
  ...Object.values(rnsTypes),
  ...Object.values(storageTypes),
]

export function createDefaultRegistry(): Registry {
  return new Registry(jackalDefaultRegistryEntries)
}
