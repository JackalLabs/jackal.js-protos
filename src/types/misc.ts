import { OfflineAminoSigner } from '@cosmjs/amino'
import { OfflineDirectSigner } from '@cosmjs/proto-signing'

export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>

export type TSigner = OfflineAminoSigner & OfflineDirectSigner
