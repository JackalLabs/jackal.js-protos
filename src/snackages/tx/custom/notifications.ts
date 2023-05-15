import {
  MsgBlockSenders,
  MsgCreateNotifications,
  MsgDeleteNotifications,
  MsgSetCounter,
  MsgUpdateNotifications
} from '@/postgen/canine_chain/notifications/tx'
import { EncodeObject } from '@cosmjs/proto-signing'
import ITypeTuple from '@/interfaces/ITypeTuple'

const notificationsTypes: ITypeTuple = {
  createNotifications: [
    '/canine_chain.notifications.MsgCreateNotifications',
    MsgCreateNotifications
  ],
  updateNotifications: [
    '/canine_chain.notifications.MsgUpdateNotifications',
    MsgUpdateNotifications
  ],
  deleteNotifications: [
    '/canine_chain.notifications.MsgDeleteNotifications',
    MsgDeleteNotifications
  ],
  setCounter: ['/canine_chain.notifications.MsgSetCounter', MsgSetCounter],
  blockSenders: ['/canine_chain.notifications.MsgBlockSenders', MsgBlockSenders]
}

export default notificationsTypes

export interface ITxNotifications {
  msgCreateNotifications(data: MsgCreateNotifications): EncodeObject
  msgUpdateNotifications(data: MsgUpdateNotifications): EncodeObject
  msgDeleteNotifications(data: MsgDeleteNotifications): EncodeObject
  msgSetCounter(data: MsgSetCounter): EncodeObject
  msgBlockSenders(data: MsgBlockSenders): EncodeObject
}

export class TxNotifications implements ITxNotifications {
  msgCreateNotifications(data: MsgCreateNotifications): EncodeObject {
    return {
      typeUrl: notificationsTypes.createNotifications[0],
      value: notificationsTypes.createNotifications[1].fromPartial(data)
    }
  }
  msgUpdateNotifications(data: MsgUpdateNotifications): EncodeObject {
    return {
      typeUrl: notificationsTypes.updateNotifications[0],
      value: notificationsTypes.updateNotifications[1].fromPartial(data)
    }
  }
  msgDeleteNotifications(data: MsgDeleteNotifications): EncodeObject {
    return {
      typeUrl: notificationsTypes.deleteNotifications[0],
      value: notificationsTypes.deleteNotifications[1].fromPartial(data)
    }
  }
  msgSetCounter(data: MsgSetCounter): EncodeObject {
    return {
      typeUrl: notificationsTypes.setCounter[0],
      value: notificationsTypes.setCounter[1].fromPartial(data)
    }
  }
  msgBlockSenders(data: MsgBlockSenders): EncodeObject {
    return {
      typeUrl: notificationsTypes.blockSenders[0],
      value: notificationsTypes.blockSenders[1].fromPartial(data)
    }
  }
}
