import { AminoConverters } from '@cosmjs/stargate'
import {
  MsgBlockSenders,
  MsgCreateNotifications,
  MsgDeleteNotifications,
  MsgSetCounter,
  MsgUpdateNotifications
} from '@/postgen/canine_chain/notifications/tx'
import { sortAmino, wasAmino } from '@/utils/converters'

export function createNotificationsAminoConverters(): AminoConverters {
  return {
    '/canine_chain.notifications.MsgCreateNotifications': {
      aminoType: 'notifications/CreateNotifications',
      toAmino: (value: MsgCreateNotifications): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgCreateNotifications => {
        return {
          creator: value.creator,
          notification: value.notification,
          address: value.address
        }
      }
    },
    '/canine_chain.notifications.MsgUpdateNotifications': {
      aminoType: 'notifications/UpdateNotifications',
      toAmino: (value: MsgUpdateNotifications): any => {
        return {
          address: value.address,
          ...(value.count && { count: value.count }),
          creator: value.creator,
          notification: value.notification
        }
      },
      fromAmino: (value: any): MsgUpdateNotifications => {
        return {
          creator: value.creator,
          count: value.count || 0,
          notification: value.notification,
          address: value.address
        }
      }
    },
    '/canine_chain.notifications.MsgDeleteNotifications': {
      aminoType: 'notifications/DeleteNotifications',
      toAmino: (value: MsgDeleteNotifications): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgDeleteNotifications => {
        return wasAmino(value)
      }
    },
    '/canine_chain.notifications.MsgSetCounter': {
      aminoType: 'notifications/SetCounter',
      toAmino: (value: MsgSetCounter): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgSetCounter => {
        return wasAmino(value)
      }
    },
    '/canine_chain.notifications.MsgBlockSenders': {
      aminoType: 'notifications/BlockSenders',
      toAmino: (value: MsgBlockSenders): any => {
        return sortAmino(value)
      },
      fromAmino: (value: any): MsgBlockSenders => {
        return {
          creator: value.creator,
          senderIds: value.senderIds
        }
      }
    }
  }
}
