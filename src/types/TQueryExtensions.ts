import { SlashingExtension } from '@cosmjs/stargate/build/modules'
import {
  BankExtension,
  DistributionExtension,
  GovExtension,
  QueryClient,
  StakingExtension
} from '@cosmjs/stargate'
import {
  IFileTreeExtension,
  IJklMintExtension,
  IOracleExtension,
  IRnsExtension,
  IStorageExtension
} from '@/interfaces/snackages'

export type TQueryExtensions = QueryClient
  /* Jackal Extensions */
  & IFileTreeExtension
  & IJklMintExtension
  & IOracleExtension
  & IRnsExtension
  & IStorageExtension
  /* Cosmos Extensions */
  & BankExtension
  & DistributionExtension
  & GovExtension
  & SlashingExtension
  & StakingExtension
