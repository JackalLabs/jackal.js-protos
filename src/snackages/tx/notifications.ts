import {
  MsgBlockSenders,
  MsgBlockSendersResponse,
  MsgCreateNotification,
  MsgCreateNotificationResponse,
  MsgDeleteNotification,
  MsgDeleteNotificationResponse,
  protobufPackage,
} from '@/postGen/canine_chain/notifications/tx'
import type {
  DEncodeObject,
  DMsgBlockSenders,
  DMsgCreateNotification,
  DMsgDeleteNotification,
} from '@/types/msgs'
import type { TJackalModuleTypeMap, TMsgResponseParsers } from '@/types'
import _m0 from 'protobufjs/minimal'
import { uintArrayToString } from '@/utils/converters'

export const notificationsTypes: TJackalModuleTypeMap = {
  createNotification: [
    `/${protobufPackage}.MsgCreateNotification`,
    MsgCreateNotification,
  ],
  deleteNotification: [
    `/${protobufPackage}.MsgDeleteNotification`,
    MsgDeleteNotification,
  ],
  blockSenders: [`/${protobufPackage}.MsgBlockSenders`, MsgBlockSenders],
}

export const notificationsResponses: TMsgResponseParsers = {
  [notificationsTypes.createNotification[0]]: (data: Uint8Array) =>
    MsgCreateNotificationResponse.decode(_m0.Reader.create(data)),
  [notificationsTypes.deleteNotification[0]]: (data: Uint8Array) =>
    MsgDeleteNotificationResponse.decode(_m0.Reader.create(data)),
  [notificationsTypes.blockSenders[0]]: (data: Uint8Array) =>
    MsgBlockSendersResponse.decode(_m0.Reader.create(data)),
}

/**
 * All functions for creating Notifications Tx.
 *
 * @property {msgCreateNotification} msgCreateNotification()
 * @property {msgDeleteNotification} msgDeleteNotification()
 * @property {msgBlockSenders} msgBlockSenders()
 */
export type ITxNotifications = {
  msgCreateNotification(data: DMsgCreateNotification): DEncodeObject
  msgDeleteNotification(data: DMsgDeleteNotification): DEncodeObject
  msgBlockSenders(data: DMsgBlockSenders): DEncodeObject
  writerCreateNotification(data: DMsgCreateNotification): DEncodeObject
  writerDeleteNotification(data: DMsgDeleteNotification): DEncodeObject
  writerBlockSenders(data: DMsgBlockSenders): DEncodeObject
}

export const TxNotifications: ITxNotifications = {
  msgCreateNotification(data: DMsgCreateNotification): DEncodeObject {
    return {
      typeUrl: notificationsTypes.createNotification[0],
      value: notificationsTypes.createNotification[1].fromPartial(data),
    }
  },
  msgDeleteNotification(data: DMsgDeleteNotification): DEncodeObject {
    return {
      typeUrl: notificationsTypes.deleteNotification[0],
      value: notificationsTypes.deleteNotification[1].fromPartial(data),
    }
  },
  msgBlockSenders(data: DMsgBlockSenders): DEncodeObject {
    return {
      typeUrl: notificationsTypes.blockSenders[0],
      value: notificationsTypes.blockSenders[1].fromPartial(data),
    }
  },
  writerCreateNotification(data: DMsgCreateNotification): DEncodeObject {
    try {
      const asWriter = notificationsTypes.createNotification[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: notificationsTypes.createNotification[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerDeleteNotification(data: DMsgDeleteNotification): DEncodeObject {
    try {
      const asWriter = notificationsTypes.deleteNotification[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: notificationsTypes.deleteNotification[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerBlockSenders(data: DMsgBlockSenders): DEncodeObject {
    try {
      const asWriter = notificationsTypes.blockSenders[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: notificationsTypes.blockSenders[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
}
