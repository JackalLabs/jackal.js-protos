import { StdFee } from '@cosmjs/amino'

/**
 * @interface ISignAndBroadcastOptions
 * @property {StdFee} [fee]
 * @property {string} [memo]
 */
export interface ISignAndBroadcastOptions {
  fee?: StdFee
  memo?: string
}
