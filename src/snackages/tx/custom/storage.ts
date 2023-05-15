import {
  MsgAddClaimer,
  MsgBuyStorage,
  MsgCancelContract,
  MsgClaimStray,
  MsgInitProvider,
  MsgPostContract,
  MsgPostproof,
  MsgRemoveClaimer,
  MsgSetProviderIP,
  MsgSetProviderKeybase,
  MsgSetProviderTotalspace,
  MsgSignContract,
  MsgUpgradeStorage
} from '@/postgen/canine_chain/storage/tx'
import { EncodeObject } from '@cosmjs/proto-signing'
import ITypeTuple from '@/interfaces/ITypeTuple'

const storageTypes: ITypeTuple = {
  postContract: ['/canine_chain.storage.MsgPostContract', MsgPostContract],
  postproof: ['/canine_chain.storage.MsgPostproof', MsgPostproof],
  signContract: ['/canine_chain.storage.MsgSignContract', MsgSignContract],
  setProviderIP: ['/canine_chain.storage.MsgSetProviderIP', MsgSetProviderIP],
  setProviderKeybase: [
    '/canine_chain.storage.MsgSetProviderKeybase',
    MsgSetProviderKeybase
  ],
  setProviderTotalspace: [
    '/canine_chain.storage.MsgSetProviderTotalspace',
    MsgSetProviderTotalspace
  ],
  initProvider: ['/canine_chain.storage.MsgInitProvider', MsgInitProvider],
  addClaimer: ['/canine_chain.storage.MsgAddClaimer', MsgAddClaimer],
  removeClaimer: ['/canine_chain.storage.MsgRemoveClaimer', MsgRemoveClaimer],
  cancelContract: [
    '/canine_chain.storage.MsgCancelContract',
    MsgCancelContract
  ],
  buyStorage: ['/canine_chain.storage.MsgBuyStorage', MsgBuyStorage],
  claimStray: ['/canine_chain.storage.MsgClaimStray', MsgClaimStray],
  upgradeStorage: ['/canine_chain.storage.MsgUpgradeStorage', MsgUpgradeStorage]
}

export default storageTypes

export interface ITxStorage {
  msgPostContract(data: MsgPostContract): EncodeObject
  msgPostproof(data: MsgPostproof): EncodeObject
  msgSignContract(data: MsgSignContract): EncodeObject
  msgSetProviderIP(data: MsgSetProviderIP): EncodeObject
  msgSetProviderKeybase(data: MsgSetProviderKeybase): EncodeObject
  msgSetProviderTotalspace(data: MsgSetProviderTotalspace): EncodeObject
  msgInitProvider(data: MsgInitProvider): EncodeObject
  msgAddClaimer(data: MsgAddClaimer): EncodeObject
  msgRemoveClaimer(data: MsgRemoveClaimer): EncodeObject
  msgCancelContract(data: MsgCancelContract): EncodeObject
  msgBuyStorage(data: MsgBuyStorage): EncodeObject
  msgClaimStray(data: MsgClaimStray): EncodeObject
  msgUpgradeStorage(data: MsgUpgradeStorage): EncodeObject
}

export class TxStorage implements ITxStorage {
  msgPostContract(data: MsgPostContract): EncodeObject {
    return {
      typeUrl: storageTypes.postContract[0],
      value: storageTypes.postContract[1].fromPartial(data)
    }
  }
  msgPostproof(data: MsgPostproof): EncodeObject {
    return {
      typeUrl: storageTypes.postproof[0],
      value: storageTypes.postproof[1].fromPartial(data)
    }
  }
  msgSignContract(data: MsgSignContract): EncodeObject {
    return {
      typeUrl: storageTypes.signContract[0],
      value: storageTypes.signContract[1].fromPartial(data)
    }
  }
  msgSetProviderIP(data: MsgSetProviderIP): EncodeObject {
    return {
      typeUrl: storageTypes.setProviderIP[0],
      value: storageTypes.setProviderIP[1].fromPartial(data)
    }
  }
  msgSetProviderKeybase(data: MsgSetProviderKeybase): EncodeObject {
    return {
      typeUrl: storageTypes.setProviderKeybase[0],
      value: storageTypes.setProviderKeybase[1].fromPartial(data)
    }
  }
  msgSetProviderTotalspace(data: MsgSetProviderTotalspace): EncodeObject {
    return {
      typeUrl: storageTypes.setProviderTotalspace[0],
      value: storageTypes.setProviderTotalspace[1].fromPartial(data)
    }
  }
  msgInitProvider(data: MsgInitProvider): EncodeObject {
    return {
      typeUrl: storageTypes.initProvider[0],
      value: storageTypes.initProvider[1].fromPartial(data)
    }
  }
  msgAddClaimer(data: MsgAddClaimer): EncodeObject {
    return {
      typeUrl: storageTypes.addClaimer[0],
      value: storageTypes.addClaimer[1].fromPartial(data)
    }
  }
  msgRemoveClaimer(data: MsgRemoveClaimer): EncodeObject {
    return {
      typeUrl: storageTypes.removeClaimer[0],
      value: storageTypes.removeClaimer[1].fromPartial(data)
    }
  }
  msgCancelContract(data: MsgCancelContract): EncodeObject {
    return {
      typeUrl: storageTypes.cancelContract[0],
      value: storageTypes.cancelContract[1].fromPartial(data)
    }
  }
  msgBuyStorage(data: MsgBuyStorage): EncodeObject {
    return {
      typeUrl: storageTypes.buyStorage[0],
      value: storageTypes.buyStorage[1].fromPartial(data)
    }
  }
  msgClaimStray(data: MsgClaimStray): EncodeObject {
    return {
      typeUrl: storageTypes.claimStray[0],
      value: storageTypes.claimStray[1].fromPartial(data)
    }
  }
  msgUpgradeStorage(data: MsgUpgradeStorage): EncodeObject {
    return {
      typeUrl: storageTypes.upgradeStorage[0],
      value: storageTypes.upgradeStorage[1].fromPartial(data)
    }
  }
}
