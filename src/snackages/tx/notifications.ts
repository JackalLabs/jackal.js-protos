import {
  MsgBlockSenders,
  MsgCreateNotification,
  MsgDeleteNotification,
  protobufPackage
} from '@/postGen/canine_chain/notifications/tx'
import { deprecated } from '@/utils/misc'
import type { DEncodeObject, DMsgBlockSenders, DMsgCreateNotification, DMsgDeleteNotification } from '@/types/msgs'
import type { TJackalModuleTypeMap } from '@/types'

export const notificationsTypes: TJackalModuleTypeMap = {
  createNotification: [`/${protobufPackage}.MsgCreateNotification`, MsgCreateNotification],
  deleteNotification: [`/${protobufPackage}.MsgDeleteNotification`, MsgDeleteNotification],
  blockSenders: [`/${protobufPackage}.MsgBlockSenders`, MsgBlockSenders]
}

/**
 * All functions for creating Notifications Tx.
 *
 * @property {msgCreateNotification} msgCreateNotification()
 * @property {msgDeleteNotification} msgDeleteNotification()
 * @property {msgBlockSenders} msgBlockSenders()
 * @property {msgCreateNotifications} msgCreateNotifications() deprecated
 * @property {msgUpdateNotifications} msgUpdateNotifications() deprecated
 * @property {msgDeleteNotifications} msgDeleteNotifications() deprecated
 * @property {msgSetCounter} msgSetCounter() deprecated
 */
export type ITxNotifications = {
  msgCreateNotification (data: DMsgCreateNotification): DEncodeObject
  msgDeleteNotification (data: DMsgDeleteNotification): DEncodeObject
  msgBlockSenders (data: DMsgBlockSenders): DEncodeObject

  /**
   * @deprecated since v2.0.0
   */
  msgCreateNotifications (_?: any): void

  /**
   * @deprecated since v2.0.0
   */
  msgUpdateNotifications (_?: any): void

  /**
   * @deprecated since v2.0.0
   */
  msgDeleteNotifications (_?: any): void

  /**
   * @deprecated since v2.0.0
   */
  msgSetCounter (_?: any): void
}

export const TxNotifications: ITxNotifications = {
  msgCreateNotification (data: DMsgCreateNotification): DEncodeObject {
    return {
      typeUrl: notificationsTypes.createNotification[0],
      value: notificationsTypes.createNotification[1].fromPartial(data)
    }
  },
  msgDeleteNotification (data: DMsgDeleteNotification): DEncodeObject {
    return {
      typeUrl: notificationsTypes.deleteNotification[0],
      value: notificationsTypes.deleteNotification[1].fromPartial(data)
    }
  },
  msgBlockSenders (data: DMsgBlockSenders): DEncodeObject {
    return {
      typeUrl: notificationsTypes.blockSenders[0],
      value: notificationsTypes.blockSenders[1].fromPartial(data)
    }
  },

  /* Deprecated */
  msgCreateNotifications (_?: any): void {
    deprecated('[Notifications] msgCreateNotifications', 'v2.0.0', {
      abort: true,
      replacement: 'msgCreateNotification'
    }).catch((err) => {
      throw err
    })
  },
  msgUpdateNotifications (_?: any): void {
    deprecated('[Notifications] msgUpdateNotifications', 'v2.0.0', {
      abort: true
    }).catch((err) => {
      throw err
    })
  },
  msgDeleteNotifications (_?: any): void {
    deprecated('[Notifications] msgDeleteNotifications', 'v2.0.0', {
      abort: true,
      replacement: 'msgDeleteNotification'
    }).catch((err) => {
      throw err
    })
  },
  msgSetCounter (_?: any): void {
    deprecated('[Notifications] msgSetCounter', 'v2.0.0', {
      abort: true
    }).catch((err) => {
      throw err
    })
  }
}
