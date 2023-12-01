import {
  MsgAddClaimer,
  MsgAttest,
  MsgBuyStorage,
  MsgDeleteFile,
  MsgInitProvider,
  MsgPostFile,
  MsgPostProof,
  MsgRemoveClaimer,
  MsgReport,
  MsgRequestAttestationForm,
  MsgRequestReportForm,
  MsgSetProviderIP,
  MsgSetProviderKeybase,
  MsgSetProviderTotalSpace,
  MsgShutdownProvider,
  protobufPackage
} from '@/postGen/canine_chain/storage/tx'
import { deprecated } from '@/utils/misc'
import type {
  DEncodeObject,
  DMsgAddClaimer,
  DMsgAttest,
  DMsgBuyStorage,
  DMsgInitProvider,
  DMsgPostProof,
  DMsgRemoveClaimer,
  DMsgReport,
  DMsgRequestAttestationForm,
  DMsgRequestReportForm,
  DMsgSetProviderIP,
  DMsgSetProviderKeybase,
  DMsgSetProviderTotalSpace,
  DMsgShutdownProvider,
  DMsgStorageDeleteFile,
  DMsgStoragePostFile
} from '@/types/msgs'
import type { TJackalModuleTypeMap } from '@/types'

export const storageTypes: TJackalModuleTypeMap = {
  addClaimer: [`/${protobufPackage}.MsgAddClaimer`, MsgAddClaimer],
  attest: [`/${protobufPackage}.MsgAttest`, MsgAttest],
  buyStorage: [`/${protobufPackage}.MsgBuyStorage`, MsgBuyStorage],
  deleteFile: [`/${protobufPackage}.MsgDeleteFile`, MsgDeleteFile],
  initProvider: [`/${protobufPackage}.MsgInitProvider`, MsgInitProvider],
  postFile: [`/${protobufPackage}.MsgPostFile`, MsgPostFile],
  postProof: [`/${protobufPackage}.MsgPostProof`, MsgPostProof],
  removeClaimer: [`/${protobufPackage}.MsgRemoveClaimer`, MsgRemoveClaimer],
  report: [`/${protobufPackage}.MsgReport`, MsgReport],
  requestAttestationForm: [`/${protobufPackage}.MsgRequestAttestationForm`, MsgRequestAttestationForm],
  requestReportForm: [`/${protobufPackage}.MsgRequestReportForm`, MsgRequestReportForm],
  setProviderIP: [`/${protobufPackage}.MsgSetProviderIP`, MsgSetProviderIP],
  setProviderKeybase: [`/${protobufPackage}.MsgSetProviderKeybase`, MsgSetProviderKeybase],
  setProviderTotalSpace: [`/${protobufPackage}.MsgSetProviderTotalSpace`, MsgSetProviderTotalSpace],
  shutdownProvider: [`/${protobufPackage}.MsgShutdownProvider`, MsgShutdownProvider]
}

/**
 * All functions for creating Storage Tx.
 *
 * @property {msgPostFile} msgPostFile()
 * @property {msgPostProof} msgPostProof()
 * @property {msgDeleteFile} msgDeleteFile()
 * @property {msgSetProviderIP} msgSetProviderIP()
 * @property {msgSetProviderKeybase} msgSetProviderKeybase()
 * @property {msgSetProviderTotalSpace} msgSetProviderTotalSpace()
 * @property {msgShutdownProvider} msgShutdownProvider()
 * @property {msgBuyStorage} msgBuyStorage()
 * @property {msgAddClaimer} msgAddClaimer()
 * @property {msgRemoveClaimer} msgRemoveClaimer()
 * @property {msgRequestAttestationForm} msgRequestAttestationForm()
 * @property {msgAttest} msgAttest()
 * @property {msgRequestReportForm} msgRequestReportForm()
 * @property {msgReport} msgReport()
 * @property {msgPostContract} msgPostContract() deprecated
 * @property {msgSignContract} msgSignContract() deprecated
 * @property {msgCancelContract} msgCancelContract() deprecated
 * @property {msgClaimStray} msgClaimStray() deprecated
 * @property {msgUpgradeStorage} msgUpgradeStorage() deprecated
 */
export type ITxStorage = {
  msgPostFile(data: DMsgStoragePostFile): DEncodeObject
  msgPostProof(data: DMsgPostProof): DEncodeObject
  msgDeleteFile(data: DMsgStorageDeleteFile): DEncodeObject
  msgSetProviderIP(data: DMsgSetProviderIP): DEncodeObject
  msgSetProviderKeybase(data: DMsgSetProviderKeybase): DEncodeObject
  msgSetProviderTotalSpace(data: DMsgSetProviderTotalSpace): DEncodeObject
  msgInitProvider(data: DMsgInitProvider): DEncodeObject
  msgShutdownProvider(data: DMsgShutdownProvider): DEncodeObject
  msgBuyStorage(data: DMsgBuyStorage): DEncodeObject
  msgAddClaimer(data: DMsgAddClaimer): DEncodeObject
  msgRemoveClaimer(data: DMsgRemoveClaimer): DEncodeObject
  msgRequestAttestationForm(data: DMsgRequestAttestationForm): DEncodeObject
  msgAttest(data: DMsgAttest): DEncodeObject
  msgRequestReportForm(data: DMsgRequestReportForm): DEncodeObject
  msgReport(data: DMsgReport): DEncodeObject

  /**
   * @deprecated since v2.0.0
   */
  msgPostContract(_?: any): void

  /**
   * @deprecated since v2.0.0
   */
  msgSignContract(_?: any): void

  /**
   * @deprecated since v2.0.0
   */
  msgCancelContract(_?: any): void

  /**
   * @deprecated since v2.0.0
   */
  msgClaimStray(_?: any): void

  /**
   * @deprecated since v2.0.0
   */
  msgUpgradeStorage(_?: any): void
}

export const TxStorage: ITxStorage = {
  msgPostFile(data: DMsgStoragePostFile): DEncodeObject {
    return {
      typeUrl: storageTypes.postFile[0],
      value: storageTypes.postFile[1].fromPartial(data)
    }
  },
  msgPostProof(data: DMsgPostProof): DEncodeObject {
    return {
      typeUrl: storageTypes.postProof[0],
      value: storageTypes.postProof[1].fromPartial(data)
    }
  },
  msgDeleteFile(data: DMsgStorageDeleteFile): DEncodeObject {
    return {
      typeUrl: storageTypes.deleteFile[0],
      value: storageTypes.deleteFile[1].fromPartial(data)
    }
  },
  msgSetProviderIP(data: DMsgSetProviderIP): DEncodeObject {
    return {
      typeUrl: storageTypes.setProviderIP[0],
      value: storageTypes.setProviderIP[1].fromPartial(data)
    }
  },
  msgSetProviderKeybase(data: DMsgSetProviderKeybase): DEncodeObject {
    return {
      typeUrl: storageTypes.setProviderKeybase[0],
      value: storageTypes.setProviderKeybase[1].fromPartial(data)
    }
  },
  msgSetProviderTotalSpace(data: DMsgSetProviderTotalSpace): DEncodeObject {
    return {
      typeUrl: storageTypes.setProviderTotalSpace[0],
      value: storageTypes.setProviderTotalSpace[1].fromPartial(data)
    }
  },
  msgInitProvider(data: DMsgInitProvider): DEncodeObject {
    return {
      typeUrl: storageTypes.initProvider[0],
      value: storageTypes.initProvider[1].fromPartial(data)
    }
  },
  msgShutdownProvider(data: DMsgShutdownProvider): DEncodeObject {
    return {
      typeUrl: storageTypes.shutdownProvider[0],
      value: storageTypes.shutdownProvider[1].fromPartial(data)
    }
  },
  msgBuyStorage(data: DMsgBuyStorage): DEncodeObject {
    return {
      typeUrl: storageTypes.buyStorage[0],
      value: storageTypes.buyStorage[1].fromPartial(data)
    }
  },
  msgAddClaimer(data: DMsgAddClaimer): DEncodeObject {
    return {
      typeUrl: storageTypes.addClaimer[0],
      value: storageTypes.addClaimer[1].fromPartial(data)
    }
  },
  msgRemoveClaimer(data: DMsgRemoveClaimer): DEncodeObject {
    return {
      typeUrl: storageTypes.removeClaimer[0],
      value: storageTypes.removeClaimer[1].fromPartial(data)
    }
  },
  msgRequestAttestationForm(data: DMsgRequestAttestationForm): DEncodeObject {
    return {
      typeUrl: storageTypes.requestAttestationForm[0],
      value: storageTypes.requestAttestationForm[1].fromPartial(data)
    }
  },
  msgAttest(data: DMsgAttest): DEncodeObject {
    return {
      typeUrl: storageTypes.attest[0],
      value: storageTypes.attest[1].fromPartial(data)
    }
  },
  msgRequestReportForm(data: DMsgRequestReportForm): DEncodeObject {
    return {
      typeUrl: storageTypes.requestReportForm[0],
      value: storageTypes.requestReportForm[1].fromPartial(data)
    }
  },
  msgReport(data: DMsgReport): DEncodeObject {
    return {
      typeUrl: storageTypes.report[0],
      value: storageTypes.report[1].fromPartial(data)
    }
  },

  /* Deprecated */
  msgPostContract(_?: any): void {
    deprecated('[Storage] msgPostContract', 'v2.0.0', {
      abort: true
    }).catch((err) => {
      throw err
    })
  },
  msgSignContract(_?: any): void {
    deprecated('[Storage] msgSignContract', 'v2.0.0', {
      abort: true
    }).catch((err) => {
      throw err
    })
  },
  msgCancelContract(_?: any): void {
    deprecated('[Storage] msgCancelContract', 'v2.0.0', {
      abort: true
    }).catch((err) => {
      throw err
    })
  },
  msgClaimStray(_?: any): void {
    deprecated('[Storage] msgClaimStray', 'v2.0.0', {
      abort: true
    }).catch((err) => {
      throw err
    })
  },
  msgUpgradeStorage(_?: any): void {
    deprecated('[Storage] msgUpgradeStorage', 'v2.0.0', {
      replacement: 'msgBuyStorage'
    }).catch((err) => {
      throw err
    })
  }
}
