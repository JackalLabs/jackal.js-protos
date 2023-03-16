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
  createNotifications: ['/canine_chain.notifications.MsgCreateNotifications', MsgCreateNotifications],
  updateNotifications: ['/canine_chain.notifications.MsgUpdateNotifications', MsgUpdateNotifications],
  deleteNotifications: ['/canine_chain.notifications.MsgDeleteNotifications', MsgDeleteNotifications],
  setCounter: ['/canine_chain.notifications.MsgSetCounter', MsgSetCounter],
  blockSenders: ['/canine_chain.notifications.MsgBlockSenders', MsgBlockSenders]
}

export default notificationsTypes

export interface ITxNotifications {
  msgCreateNotifications (data: MsgCreateNotifications): EncodeObject
  msgUpdateNotifications (data: MsgUpdateNotifications): EncodeObject
  msgDeleteNotifications (data: MsgDeleteNotifications): EncodeObject
  msgSetCounter (data: MsgSetCounter): EncodeObject
  msgBlockSenders (data: MsgBlockSenders): EncodeObject
}

export class TxNotifications implements ITxNotifications {
  msgCreateNotifications (data: MsgCreateNotifications): EncodeObject {
    return { typeUrl: notificationsTypes.postFile[0], value: notificationsTypes.postFile[1].fromPartial( data ) }
  }
  msgUpdateNotifications (data: MsgUpdateNotifications): EncodeObject {
    return { typeUrl: notificationsTypes.addViewers[0], value: notificationsTypes.addViewers[1].fromPartial( data ) }
  }
  msgDeleteNotifications (data: MsgDeleteNotifications): EncodeObject {
    return { typeUrl: notificationsTypes.postkey[0], value: notificationsTypes.postkey[1].fromPartial( data ) }
  }
  msgSetCounter (data: MsgSetCounter): EncodeObject {
    return { typeUrl: notificationsTypes.deleteFile[0], value: notificationsTypes.deleteFile[1].fromPartial( data ) }
  }
  msgBlockSenders (data: MsgBlockSenders): EncodeObject {
    return { typeUrl: notificationsTypes.removeViewers[0], value: notificationsTypes.removeViewers[1].fromPartial( data ) }
  }
}
