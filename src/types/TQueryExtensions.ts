import type { SlashingExtension } from '@cosmjs/stargate/build/modules'
import type {
  BankExtension,
  DistributionExtension,
  GovExtension,
  QueryClient,
  StakingExtension
} from '@cosmjs/stargate'
import type {
  IFileTreeExtension,
  IJklMintExtension,
  INotificationsExtension,
  IOracleExtension,
  IRnsExtension,
  IStorageExtension
} from '@/interfaces/snackages'

/**
 * Wrapper of all Extensions enabled by Jackal.js-protos
 */
export type TQueryExtensions = QueryClient
  /* Jackal Extensions */
  & IFileTreeExtension
  & IJklMintExtension
  & INotificationsExtension
  & IOracleExtension
  & IRnsExtension
  & IStorageExtension
  /* Cosmos Extensions */
  & BankExtension
  & DistributionExtension
  & GovExtension
  & SlashingExtension
  & StakingExtension
