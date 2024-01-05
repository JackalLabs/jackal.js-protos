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
import { forAmino, wasAmino } from '@/utils/converters'

export function createNotificationsAminoConverters(): AminoConverters {
  return {
    '/canine_chain.notifications.MsgCreateNotifications': {
      aminoType: 'notifications/CreateNotifications',
      toAmino: (
        value: MsgCreateNotifications
      ): AminoMsgCreateNotifications['value'] => {
        return forAmino(value)
      },
      fromAmino: (
        value: AminoMsgCreateNotifications['value']
      ): MsgCreateNotifications => {
        return wasAmino(value)
      }
    },
    '/canine_chain.notifications.MsgUpdateNotifications': {
      aminoType: 'notifications/UpdateNotifications',
      toAmino: (
        value: MsgUpdateNotifications
      ): AminoMsgUpdateNotifications['value'] => {
        return forAmino(value)
      },
      fromAmino: (
        value: AminoMsgUpdateNotifications['value']
      ): MsgUpdateNotifications => {
        return wasAmino(value)
      }
    },
    '/canine_chain.notifications.MsgDeleteNotifications': {
      aminoType: 'notifications/DeleteNotifications',
      toAmino: (
        value: MsgDeleteNotifications
      ): AminoMsgDeleteNotifications['value'] => {
        return forAmino(value)
      },
      fromAmino: (
        value: AminoMsgDeleteNotifications['value']
      ): MsgDeleteNotifications => {
        return wasAmino(value)
      }
    },
    '/canine_chain.notifications.MsgSetCounter': {
      aminoType: 'notifications/SetCounter',
      toAmino: (value: MsgSetCounter): AminoMsgSetCounter['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgSetCounter['value']): MsgSetCounter => {
        return wasAmino(value)
      }
    },
    '/canine_chain.notifications.MsgBlockSenders': {
      aminoType: 'notifications/BlockSenders',
      toAmino: (value: MsgBlockSenders): AminoMsgBlockSenders['value'] => {
        return forAmino(value)
      },
      fromAmino: (value: AminoMsgBlockSenders['value']): MsgBlockSenders => {
        return wasAmino(value)
      }
    }
  }
}
