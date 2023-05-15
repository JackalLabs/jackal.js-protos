import {
  AminoMsgBlockSenders,
  AminoMsgCreateNotifications,
  AminoMsgDeleteNotifications,
  AminoMsgSetCounter,
  AminoMsgUpdateNotifications
} from '@/interfaces/amino/IAminoNotifications'
import { AminoConverters } from '@cosmjs/stargate'
import {
  MsgBlockSenders,
  MsgCreateNotifications,
  MsgDeleteNotifications,
  MsgSetCounter,
  MsgUpdateNotifications
} from '@/postgen/canine_chain/notifications/tx'

export function createNotificationsAminoConverters(): AminoConverters {
  return {
    '/canine_chain.notifications.MsgCreateNotifications': {
      aminoType: 'notifications/CreateNotifications',
      toAmino: (
        value: MsgCreateNotifications
      ): AminoMsgCreateNotifications['value'] => ({
        creator: value.creator,
        notification: value.notification,
        address: value.address
      }),
      fromAmino: (
        value: AminoMsgCreateNotifications['value']
      ): MsgCreateNotifications => ({
        creator: value.creator,
        notification: value.notification,
        address: value.address
      })
    },
    '/canine_chain.notifications.MsgUpdateNotifications': {
      aminoType: 'notifications/UpdateNotifications',
      toAmino: (
        value: MsgUpdateNotifications
      ): AminoMsgUpdateNotifications['value'] => ({
        creator: value.creator,
        count: value.count,
        notification: value.notification,
        address: value.address
      }),
      fromAmino: (
        value: AminoMsgUpdateNotifications['value']
      ): MsgUpdateNotifications => ({
        creator: value.creator,
        count: value.count,
        notification: value.notification,
        address: value.address
      })
    },
    '/canine_chain.notifications.MsgDeleteNotifications': {
      aminoType: 'notifications/DeleteNotifications',
      toAmino: (
        value: MsgDeleteNotifications
      ): AminoMsgDeleteNotifications['value'] => ({
        creator: value.creator
      }),
      fromAmino: (
        value: AminoMsgDeleteNotifications['value']
      ): MsgDeleteNotifications => ({
        creator: value.creator
      })
    },
    '/canine_chain.notifications.MsgSetCounter': {
      aminoType: 'notifications/SetCounter',
      toAmino: (value: MsgSetCounter): AminoMsgSetCounter['value'] => ({
        creator: value.creator
      }),
      fromAmino: (value: AminoMsgSetCounter['value']): MsgSetCounter => ({
        creator: value.creator
      })
    },
    '/canine_chain.notifications.MsgBlockSenders': {
      aminoType: 'notifications/BlockSenders',
      toAmino: (value: MsgBlockSenders): AminoMsgBlockSenders['value'] => ({
        creator: value.creator,
        senderIds: value.senderIds
      }),
      fromAmino: (value: AminoMsgBlockSenders['value']): MsgBlockSenders => ({
        creator: value.creator,
        senderIds: value.senderIds
      })
    }
  }
}
