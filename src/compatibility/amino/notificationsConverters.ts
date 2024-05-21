import { sortAndSnake } from '@/utils/converters'
import type { AminoConverters } from '@cosmjs/stargate/build/aminotypes'
import type {
  DMsgBlockSenders,
  DMsgCreateNotification,
  DMsgDeleteNotification,
} from '@/types'

export function createNotificationsAminoConverters(): AminoConverters {
  return {
    '/canine_chain.notifications.MsgCreateNotification': {
      aminoType: 'notifications/CreateNotification',
      toAmino: (value: DMsgCreateNotification): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgCreateNotification => {
        return {
          creator: value.xx,
          to: value.to,
          contents: value.contents,
          privateContents: value.private_contents,
        }
      },
    },
    '/canine_chain.notifications.MsgDeleteNotification': {
      aminoType: 'notifications/DeleteNotification',
      toAmino: (value: DMsgDeleteNotification): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgDeleteNotification => {
        return {
          creator: value.creator,
          from: value.from,
          time: value.time,
        }
      },
    },
    '/canine_chain.notifications.MsgBlockSenders': {
      aminoType: 'notifications/BlockSenders',
      toAmino: (value: DMsgBlockSenders): any => {
        return sortAndSnake(value)
      },
      fromAmino: (value: any): DMsgBlockSenders => {
        return {
          creator: value.creator,
          toBlock: value.to_block,
        }
      },
    },
  }
}
