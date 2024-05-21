import type {
  IExtendedSigningStargateClientOptions,
  IExtendedStargateClientOptions,
  IIbcQueryClient,
  IIbcSigningClient,
  TMergedSigner,
} from '@jackallabs/banshee'
import { IbcQueryClient, IbcSigningClient } from '@jackallabs/banshee'
import {
  createFileTreeExtension,
  createJklMintExtension,
  createNotificationsExtension,
  createOracleExtension,
  createRnsExtension,
  createStorageExtension,
} from '@/snackages/query'
import {
  fileTreeTypes,
  notificationsTypes,
  oracleTypes,
  rnsTypes,
  storageTypes,
  TxBank,
  TxFileTree,
  TxNotifications,
  TxOracle,
  TxRns,
  TxStorage,
} from '@/snackages'
import { IHostTxLibrary, ITxLibrary } from '@/interfaces'
import { THostQueryExtensions, TQueryExtensions } from '@/types'
import { AminoTypes } from '@cosmjs/stargate'
import {
  createCompatibilityDefaultAminoConverters,
  createCompatibilityJackalAminoConverters,
} from '@/compatibility'
import { createCosmwasmExtension } from '@/snackages/query/cosmwasm'
import { cosmwasmTypes, TxCosmwasm } from '@/snackages/tx/cosmwasm'

export type TJackalQueryClient = IIbcQueryClient<TQueryExtensions>
export type THostQueryClient = IIbcQueryClient<THostQueryExtensions>
export type TJackalSigningClient = IIbcSigningClient<
  TQueryExtensions,
  ITxLibrary
>
export type THostSigningClient = IIbcSigningClient<
  THostQueryExtensions,
  IHostTxLibrary
>

export async function connectJackalQueryClient(
  endpoint: string,
  options: IExtendedStargateClientOptions,
): Promise<TJackalQueryClient> {
  options.queryExtensions = [
    createFileTreeExtension,
    createJklMintExtension,
    createNotificationsExtension,
    createOracleExtension,
    createRnsExtension,
    createStorageExtension,
    createCosmwasmExtension
  ]

  return await IbcQueryClient.connect<TQueryExtensions>(endpoint, options)
}

export async function connectHostQueryClient(
  endpoint: string,
  options: IExtendedStargateClientOptions,
): Promise<THostQueryClient> {
  options.queryExtensions = [
    createCosmwasmExtension
  ]

  return await IbcQueryClient.connect<THostQueryExtensions>(endpoint, options)
}

export async function connectJackalSigningClient(
  endpoint: string,
  signer: TMergedSigner,
  options: IExtendedSigningStargateClientOptions,
): Promise<TJackalSigningClient> {
  const customModules = [
    fileTreeTypes,
    notificationsTypes,
    oracleTypes,
    rnsTypes,
    storageTypes,
    cosmwasmTypes,
  ]
  const queryExtensions = [
    createFileTreeExtension,
    createJklMintExtension,
    createNotificationsExtension,
    createOracleExtension,
    createRnsExtension,
    createStorageExtension,
    createCosmwasmExtension
  ]
  const txLibrary = {
    fileTree: TxFileTree,
    /* No jklMint tx */
    notifications: TxNotifications,
    oracle: TxOracle,
    rns: TxRns,
    storage: TxStorage,
    /* cosmos tx */
    bank: TxBank,
    cosmwasm: TxCosmwasm,
  }
  const aminoTypes = new AminoTypes({
    ...createCompatibilityDefaultAminoConverters(),
    ...createCompatibilityJackalAminoConverters(),
  })

  return await IbcSigningClient.connectWithSigner<TQueryExtensions, ITxLibrary>(
    endpoint,
    signer,
    {
      ...options,
      customModules,
      queryExtensions,
      txLibrary,
      aminoTypes,
    },
  )
}

export async function connectHostSigningClient(
  endpoint: string,
  signer: TMergedSigner,
  options: IExtendedSigningStargateClientOptions,
): Promise<THostSigningClient> {
  const customModules = [
    cosmwasmTypes,
  ]
  const queryExtensions = [
    createCosmwasmExtension
  ]
  const txLibrary = {
    cosmwasm: TxCosmwasm,
  }
  const aminoTypes = new AminoTypes({
    ...createCompatibilityDefaultAminoConverters(),
  })

  return await IbcSigningClient.connectWithSigner<THostQueryExtensions, IHostTxLibrary>(
    endpoint,
    signer,
    {
      ...options,
      customModules,
      queryExtensions,
      txLibrary,
      aminoTypes,
    },
  )
}

export {
  IIbcQueryClient,
  IIbcSigningClient,
  IExtendedSigningStargateClientOptions,
  IExtendedStargateClientOptions,
  TMergedSigner,
}
