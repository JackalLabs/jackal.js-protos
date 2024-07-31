import {
  MsgAddClaimer,
  MsgAddClaimerResponse,
  MsgAttest,
  MsgAttestResponse,
  MsgBuyStorage,
  MsgBuyStorageResponse,
  MsgDeleteFile,
  MsgDeleteFileResponse,
  MsgInitProvider,
  MsgInitProviderResponse,
  MsgPostFile,
  MsgPostFileResponse,
  MsgPostProof,
  MsgPostProofResponse,
  MsgRemoveClaimer,
  MsgRemoveClaimerResponse,
  MsgReport,
  MsgReportResponse,
  MsgRequestAttestationForm,
  MsgRequestAttestationFormResponse,
  MsgRequestReportForm,
  MsgRequestReportFormResponse,
  MsgSetProviderIP,
  MsgSetProviderIPResponse,
  MsgSetProviderKeybase,
  MsgSetProviderKeybaseResponse,
  MsgSetProviderTotalSpace,
  MsgSetProviderTotalSpaceResponse,
  MsgShutdownProvider,
  MsgShutdownProviderResponse,
  protobufPackage,
} from '@/postGen/canine_chain/storage/tx'
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
  DMsgStoragePostFile,
} from '@/types/msgs'
import type { TJackalModuleTypeMap, TMsgResponseParsers } from '@/types'
import _m0 from 'protobufjs/minimal'
import { uintArrayToString } from '@/utils/converters'

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
  requestAttestationForm: [
    `/${protobufPackage}.MsgRequestAttestationForm`,
    MsgRequestAttestationForm,
  ],
  requestReportForm: [
    `/${protobufPackage}.MsgRequestReportForm`,
    MsgRequestReportForm,
  ],
  setProviderIP: [`/${protobufPackage}.MsgSetProviderIP`, MsgSetProviderIP],
  setProviderKeybase: [
    `/${protobufPackage}.MsgSetProviderKeybase`,
    MsgSetProviderKeybase,
  ],
  setProviderTotalSpace: [
    `/${protobufPackage}.MsgSetProviderTotalSpace`,
    MsgSetProviderTotalSpace,
  ],
  shutdownProvider: [
    `/${protobufPackage}.MsgShutdownProvider`,
    MsgShutdownProvider,
  ],
}

export const storageResponses: TMsgResponseParsers = {
  [storageTypes.addClaimer[0]]: (data: Uint8Array) =>
    MsgAddClaimerResponse.decode(_m0.Reader.create(data)),
  [storageTypes.attest[0]]: (data: Uint8Array) =>
    MsgAttestResponse.decode(_m0.Reader.create(data)),
  [storageTypes.buyStorage[0]]: (data: Uint8Array) =>
    MsgBuyStorageResponse.decode(_m0.Reader.create(data)),
  [storageTypes.deleteFile[0]]: (data: Uint8Array) =>
    MsgDeleteFileResponse.decode(_m0.Reader.create(data)),
  [storageTypes.initProvider[0]]: (data: Uint8Array) =>
    MsgInitProviderResponse.decode(_m0.Reader.create(data)),
  [storageTypes.postFile[0]]: (data: Uint8Array) =>
    MsgPostFileResponse.decode(_m0.Reader.create(data)),
  [storageTypes.postProof[0]]: (data: Uint8Array) =>
    MsgPostProofResponse.decode(_m0.Reader.create(data)),
  [storageTypes.removeClaimer[0]]: (data: Uint8Array) =>
    MsgRemoveClaimerResponse.decode(_m0.Reader.create(data)),
  [storageTypes.report[0]]: (data: Uint8Array) =>
    MsgReportResponse.decode(_m0.Reader.create(data)),
  [storageTypes.requestAttestationForm[0]]: (data: Uint8Array) =>
    MsgRequestAttestationFormResponse.decode(_m0.Reader.create(data)),
  [storageTypes.requestReportForm[0]]: (data: Uint8Array) =>
    MsgRequestReportFormResponse.decode(_m0.Reader.create(data)),
  [storageTypes.setProviderIP[0]]: (data: Uint8Array) =>
    MsgSetProviderIPResponse.decode(_m0.Reader.create(data)),
  [storageTypes.setProviderKeybase[0]]: (data: Uint8Array) =>
    MsgSetProviderKeybaseResponse.decode(_m0.Reader.create(data)),
  [storageTypes.setProviderTotalSpace[0]]: (data: Uint8Array) =>
    MsgSetProviderTotalSpaceResponse.decode(_m0.Reader.create(data)),
  [storageTypes.shutdownProvider[0]]: (data: Uint8Array) =>
    MsgShutdownProviderResponse.decode(_m0.Reader.create(data)),
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
 */
export type ITxStorage = {
  msgAddClaimer(data: DMsgAddClaimer): DEncodeObject
  msgAttest(data: DMsgAttest): DEncodeObject
  msgBuyStorage(data: DMsgBuyStorage): DEncodeObject
  msgDeleteFile(data: DMsgStorageDeleteFile): DEncodeObject
  msgInitProvider(data: DMsgInitProvider): DEncodeObject
  msgPostFile(data: DMsgStoragePostFile): DEncodeObject
  msgPostProof(data: DMsgPostProof): DEncodeObject
  msgRemoveClaimer(data: DMsgRemoveClaimer): DEncodeObject
  msgReport(data: DMsgReport): DEncodeObject
  msgRequestAttestationForm(data: DMsgRequestAttestationForm): DEncodeObject
  msgRequestReportForm(data: DMsgRequestReportForm): DEncodeObject
  msgSetProviderIP(data: DMsgSetProviderIP): DEncodeObject
  msgSetProviderKeybase(data: DMsgSetProviderKeybase): DEncodeObject
  msgSetProviderTotalSpace(data: DMsgSetProviderTotalSpace): DEncodeObject
  msgShutdownProvider(data: DMsgShutdownProvider): DEncodeObject
  writerPostFile(data: DMsgStoragePostFile): DEncodeObject
  writerPostProof(data: DMsgPostProof): DEncodeObject
  writerDeleteFile(data: DMsgStorageDeleteFile): DEncodeObject
  writerSetProviderIP(data: DMsgSetProviderIP): DEncodeObject
  writerSetProviderKeybase(data: DMsgSetProviderKeybase): DEncodeObject
  writerSetProviderTotalSpace(data: DMsgSetProviderTotalSpace): DEncodeObject
  writerInitProvider(data: DMsgInitProvider): DEncodeObject
  writerShutdownProvider(data: DMsgShutdownProvider): DEncodeObject
  writerBuyStorage(data: DMsgBuyStorage): DEncodeObject
  writerAddClaimer(data: DMsgAddClaimer): DEncodeObject
  writerRemoveClaimer(data: DMsgRemoveClaimer): DEncodeObject
  writerRequestAttestationForm(data: DMsgRequestAttestationForm): DEncodeObject
  writerAttest(data: DMsgAttest): DEncodeObject
  writerRequestReportForm(data: DMsgRequestReportForm): DEncodeObject
  writerReport(data: DMsgReport): DEncodeObject
}

export const TxStorage: ITxStorage = {
  msgPostFile(data: DMsgStoragePostFile): DEncodeObject {
    return {
      typeUrl: storageTypes.postFile[0],
      value: storageTypes.postFile[1].fromPartial(data),
    }
  },
  msgPostProof(data: DMsgPostProof): DEncodeObject {
    return {
      typeUrl: storageTypes.postProof[0],
      value: storageTypes.postProof[1].fromPartial(data),
    }
  },
  msgDeleteFile(data: DMsgStorageDeleteFile): DEncodeObject {
    return {
      typeUrl: storageTypes.deleteFile[0],
      value: storageTypes.deleteFile[1].fromPartial(data),
    }
  },
  msgSetProviderIP(data: DMsgSetProviderIP): DEncodeObject {
    return {
      typeUrl: storageTypes.setProviderIP[0],
      value: storageTypes.setProviderIP[1].fromPartial(data),
    }
  },
  msgSetProviderKeybase(data: DMsgSetProviderKeybase): DEncodeObject {
    return {
      typeUrl: storageTypes.setProviderKeybase[0],
      value: storageTypes.setProviderKeybase[1].fromPartial(data),
    }
  },
  msgSetProviderTotalSpace(data: DMsgSetProviderTotalSpace): DEncodeObject {
    return {
      typeUrl: storageTypes.setProviderTotalSpace[0],
      value: storageTypes.setProviderTotalSpace[1].fromPartial(data),
    }
  },
  msgInitProvider(data: DMsgInitProvider): DEncodeObject {
    return {
      typeUrl: storageTypes.initProvider[0],
      value: storageTypes.initProvider[1].fromPartial(data),
    }
  },
  msgShutdownProvider(data: DMsgShutdownProvider): DEncodeObject {
    return {
      typeUrl: storageTypes.shutdownProvider[0],
      value: storageTypes.shutdownProvider[1].fromPartial(data),
    }
  },
  msgBuyStorage(data: DMsgBuyStorage): DEncodeObject {
    return {
      typeUrl: storageTypes.buyStorage[0],
      value: storageTypes.buyStorage[1].fromPartial(data),
    }
  },
  msgAddClaimer(data: DMsgAddClaimer): DEncodeObject {
    return {
      typeUrl: storageTypes.addClaimer[0],
      value: storageTypes.addClaimer[1].fromPartial(data),
    }
  },
  msgRemoveClaimer(data: DMsgRemoveClaimer): DEncodeObject {
    return {
      typeUrl: storageTypes.removeClaimer[0],
      value: storageTypes.removeClaimer[1].fromPartial(data),
    }
  },
  msgRequestAttestationForm(data: DMsgRequestAttestationForm): DEncodeObject {
    return {
      typeUrl: storageTypes.requestAttestationForm[0],
      value: storageTypes.requestAttestationForm[1].fromPartial(data),
    }
  },
  msgAttest(data: DMsgAttest): DEncodeObject {
    return {
      typeUrl: storageTypes.attest[0],
      value: storageTypes.attest[1].fromPartial(data),
    }
  },
  msgRequestReportForm(data: DMsgRequestReportForm): DEncodeObject {
    return {
      typeUrl: storageTypes.requestReportForm[0],
      value: storageTypes.requestReportForm[1].fromPartial(data),
    }
  },
  msgReport(data: DMsgReport): DEncodeObject {
    return {
      typeUrl: storageTypes.report[0],
      value: storageTypes.report[1].fromPartial(data),
    }
  },
  writerPostFile(data: DMsgStoragePostFile): DEncodeObject {
    try {
      const asWriter = storageTypes.postFile[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.postFile[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerPostProof(data: DMsgPostProof): DEncodeObject {
    try {
      const asWriter = storageTypes.postProof[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.postProof[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerDeleteFile(data: DMsgStorageDeleteFile): DEncodeObject {
    try {
      const asWriter = storageTypes.deleteFile[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.deleteFile[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerSetProviderIP(data: DMsgSetProviderIP): DEncodeObject {
    try {
      const asWriter = storageTypes.setProviderIP[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.setProviderIP[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerSetProviderKeybase(data: DMsgSetProviderKeybase): DEncodeObject {
    try {
      const asWriter = storageTypes.setProviderKeybase[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.setProviderKeybase[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerSetProviderTotalSpace(data: DMsgSetProviderTotalSpace): DEncodeObject {
    try {
      const asWriter = storageTypes.setProviderTotalSpace[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.setProviderTotalSpace[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerInitProvider(data: DMsgInitProvider): DEncodeObject {
    try {
      const asWriter = storageTypes.initProvider[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.initProvider[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerShutdownProvider(data: DMsgShutdownProvider): DEncodeObject {
    try {
      const asWriter = storageTypes.shutdownProvider[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.shutdownProvider[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerBuyStorage(data: DMsgBuyStorage): DEncodeObject {
    try {
      const asWriter = storageTypes.buyStorage[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.buyStorage[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerAddClaimer(data: DMsgAddClaimer): DEncodeObject {
    try {
      const asWriter = storageTypes.addClaimer[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.addClaimer[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerRemoveClaimer(data: DMsgRemoveClaimer): DEncodeObject {
    try {
      const asWriter = storageTypes.removeClaimer[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.removeClaimer[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerRequestAttestationForm(data: DMsgRequestAttestationForm): DEncodeObject {
    try {
      const asWriter = storageTypes.requestAttestationForm[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.requestAttestationForm[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerAttest(data: DMsgAttest): DEncodeObject {
    try {
      const asWriter = storageTypes.attest[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.attest[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerRequestReportForm(data: DMsgRequestReportForm): DEncodeObject {
    try {
      const asWriter = storageTypes.requestReportForm[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.requestReportForm[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
  writerReport(data: DMsgReport): DEncodeObject {
    try {
      const asWriter = storageTypes.report[1].encode(data)
      const asUint = asWriter.finish()
      const final = btoa(uintArrayToString(asUint))
      return {
        typeUrl: storageTypes.report[0],
        value: final,
      }
    } catch (err) {
      throw err
    }
  },
}
