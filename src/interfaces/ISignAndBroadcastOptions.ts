import { StdFee } from '@cosmjs/amino'

export interface ISignAndBroadcastOptions {
  fee?: StdFee
  memo?: string
}
