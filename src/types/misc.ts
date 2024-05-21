import type {
  IIbcEngageBundle,
  TPossibleTxEvents,
} from '@jackallabs/banshee'
import type { tendermint37, TxEvent } from '@cosmjs/tendermint-rpc'

export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>

export type T37TxEvent = tendermint37.TxEvent
export {
  IIbcEngageBundle,
  TPossibleTxEvents,
}
export { TxEvent }
