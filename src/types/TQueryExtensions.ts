import type { QueryClient } from '@cosmjs/stargate'
import {
  ICosmwasmExtension,
  IFileTreeExtension,
  IJklMintExtension,
  INotificationsExtension,
  IOracleExtension,
  IRnsExtension,
  IStorageExtension,
} from '@/interfaces/snackages'

/**
 * Wrapper of all Extensions enabled by Jackal.js-protos
 */
export type TQueryExtensions = QueryClient &
  /* Jackal Extensions */
  IFileTreeExtension &
  IJklMintExtension &
  INotificationsExtension &
  IOracleExtension &
  IRnsExtension &
  IStorageExtension &
  ICosmwasmExtension

export type THostQueryExtensions = QueryClient & ICosmwasmExtension
