import { forAmino, wasAmino } from '@/utils/converters'
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
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgCreateNotification => {
        return wasAmino(value)
      },
    },
    '/canine_chain.notifications.MsgDeleteNotification': {
      aminoType: 'notifications/DeleteNotification',
      toAmino: (value: DMsgDeleteNotification): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgDeleteNotification => {
        return wasAmino(value)
      },
    },
    '/canine_chain.notifications.MsgBlockSenders': {
      aminoType: 'notifications/BlockSenders',
      toAmino: (value: DMsgBlockSenders): any => {
        return forAmino(value)
      },
      fromAmino: (value: any): DMsgBlockSenders => {
        return wasAmino(value)
      },
    },
  }
}
