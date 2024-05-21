import {
  TxCosmwasm,
  TxFileTree,
  TxNotifications,
  TxOracle,
  TxRns,
  TxStorage,
} from '@/snackages/tx'
import type { DEncodeObject } from '@/types'

const encodingLibrary: Record<string, (data: any) => DEncodeObject> = {
  /* cosmwasm */
  '/cosmwasm.wasm.v1.MsgExecuteContract': TxCosmwasm.writerExecuteContract,
  '/cosmwasm.wasm.v1.MsgInstantiateContract':
    TxCosmwasm.writerInstantiateContract,
  /* fileTree */
  '/canine_chain.filetree.MsgAddEditors': TxFileTree.writerAddEditors,
  '/canine_chain.filetree.MsgAddViewers': TxFileTree.writerAddViewers,
  '/canine_chain.filetree.MsgChangeOwner': TxFileTree.writerChangeOwner,
  '/canine_chain.filetree.MsgDeleteFile': TxFileTree.writerDeleteFile,
  '/canine_chain.filetree.MsgPostFile': TxFileTree.writerPostFile,
  '/canine_chain.filetree.MsgPostKey': TxFileTree.writerPostKey,
  '/canine_chain.filetree.MsgProvisionFileTree':
    TxFileTree.writerProvisionFileTree,
  '/canine_chain.filetree.MsgRemoveEditors': TxFileTree.writerRemoveEditors,
  '/canine_chain.filetree.MsgRemoveViewers': TxFileTree.writerRemoveViewers,
  '/canine_chain.filetree.MsgResetEditors': TxFileTree.writerResetEditors,
  '/canine_chain.filetree.MsgResetViewers': TxFileTree.writerResetViewers,
  /* notifications */
  '/canine_chain.notifications.MsgCreateNotification':
    TxNotifications.writerCreateNotification,
  '/canine_chain.notifications.MsgDeleteNotification':
    TxNotifications.writerDeleteNotification,
  '/canine_chain.notifications.MsgBlockSenders':
    TxNotifications.writerBlockSenders,
  /* oracle */
  '/canine_chain.oracle.MsgCreateFeed': TxOracle.writerCreateFeed,
  '/canine_chain.oracle.MsgUpdateFeed': TxOracle.writerUpdateFeed,
  /* rns */
  '/canine_chain.rns.MsgAcceptBid': TxRns.writerAcceptBid,
  '/canine_chain.rns.MsgAddRecord': TxRns.writerAddRecord,
  '/canine_chain.rns.MsgBid': TxRns.writerBid,
  '/canine_chain.rns.MsgBuy': TxRns.writerBuy,
  '/canine_chain.rns.MsgCancelBid': TxRns.writerCancelBid,
  '/canine_chain.rns.MsgDelist': TxRns.writerDelist,
  '/canine_chain.rns.MsgDelRecord': TxRns.writerDelRecord,
  '/canine_chain.rns.MsgInit': TxRns.writerInit,
  '/canine_chain.rns.MsgList': TxRns.writerList,
  '/canine_chain.rns.MsgRegister': TxRns.writerRegister,
  '/canine_chain.rns.MsgTransfer': TxRns.writerTransfer,
  '/canine_chain.rns.MsgUpdate': TxRns.writerUpdate,
  /* storage */
  '/canine_chain.storage.MsgAddClaimer': TxStorage.writerAddClaimer,
  '/canine_chain.storage.MsgAttest': TxStorage.writerAttest,
  '/canine_chain.storage.MsgBuyStorage': TxStorage.writerBuyStorage,
  '/canine_chain.storage.MsgDeleteFile': TxStorage.writerDeleteFile,
  '/canine_chain.storage.MsgInitProvider': TxStorage.writerInitProvider,
  '/canine_chain.storage.MsgPostFile': TxStorage.writerPostFile,
  '/canine_chain.storage.MsgPostProof': TxStorage.writerPostProof,
  '/canine_chain.storage.MsgRemoveClaimer': TxStorage.writerRemoveClaimer,
  '/canine_chain.storage.MsgReport': TxStorage.writerReport,
  '/canine_chain.storage.MsgRequestAttestationForm':
    TxStorage.writerRequestAttestationForm,
  '/canine_chain.storage.MsgRequestReportForm':
    TxStorage.writerRequestReportForm,
  '/canine_chain.storage.MsgSetProviderIP': TxStorage.writerSetProviderIP,
  '/canine_chain.storage.MsgSetProviderKeybase':
    TxStorage.writerSetProviderKeybase,
  '/canine_chain.storage.MsgSetProviderTotalSpace':
    TxStorage.writerSetProviderTotalSpace,
  '/canine_chain.storage.MsgShutdownProvider': TxStorage.writerShutdownProvider,
}

export function reencodeEncodedObject(msg: DEncodeObject): DEncodeObject {
  return encodingLibrary[msg.typeUrl](msg.value)
}
