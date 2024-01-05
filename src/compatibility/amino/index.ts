import {
  createAuthzAminoConverters,
  createBankAminoConverters,
  createDistributionAminoConverters,
  createFeegrantAminoConverters,
  createGovAminoConverters,
  createIbcAminoConverters,
  createStakingAminoConverters,
  createVestingAminoConverters,
} from '@cosmjs/stargate/build/modules'
import { AminoConverters } from '@cosmjs/stargate/build/aminotypes'
import { createFileTreeAminoConverters } from '@/compatibility/amino/fileTreeConverters'
import { createNotificationsAminoConverters } from '@/compatibility/amino/notificationsConverters'
import { createOracleAminoConverters } from '@/compatibility/amino/oracleConverters'
import { createRnsAminoConverters } from '@/compatibility/amino/rnsConverters'
import { createStorageAminoConverters } from '@/compatibility/amino/storageConverters'

export function createCompatibilityDefaultAminoConverters(): AminoConverters {
  return {
    ...createAuthzAminoConverters(),
    ...createBankAminoConverters(),
    ...createDistributionAminoConverters(),
    ...createGovAminoConverters(),
    ...createStakingAminoConverters(),
    ...createIbcAminoConverters(),
    ...createFeegrantAminoConverters(),
    ...createVestingAminoConverters(),
  }
}

export function createCompatibilityJackalAminoConverters(): AminoConverters {
  return {
    ...createFileTreeAminoConverters(),
    ...createNotificationsAminoConverters(),
    ...createOracleAminoConverters(),
    ...createRnsAminoConverters(),
    ...createStorageAminoConverters(),
  }
}
