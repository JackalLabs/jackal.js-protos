import {
  cosmwasmResponses,
  fileTreeResponses,
  notificationsResponses,
  oracleResponses,
  rnsResponses,
  storageResponses,
} from '@/snackages/tx'
import { bankResponses } from '@/snackages/cosmos'
import { warnError } from '@/utils/misc'
import type { TMsgResponseParsers } from '@/types'
import type { TPossibleTxEvents } from '@jackallabs/banshee'

export const txResponseLibrary: TMsgResponseParsers = {
  ...fileTreeResponses,
  ...notificationsResponses,
  ...oracleResponses,
  ...rnsResponses,
  ...storageResponses,
  /* cosmos */
  ...bankResponses,
  ...cosmwasmResponses,
}

export function parseMsgResponse(
  msgType: string,
  msgResponse: TPossibleTxEvents,
) {
  if (!msgResponse.result.data) {
    throw warnError('parseMsgResponse', 'No response data')
  }
  return txResponseLibrary[msgType](msgResponse.result.data)
}

const queryKeyLibrary: Record<string, string> = {
  /* cosmwasm */
  '/cosmwasm.wasm.v1.MsgExecuteContract': 'execute._contract_address',
  '/cosmwasm.wasm.v1.MsgInstantiateContract': 'instantiate._contract_address',
  /* fileTree */
  '/canine_chain.filetree.MsgAddEditors': 'editors_added.singer',
  '/canine_chain.filetree.MsgAddViewers': 'viewers_added.signer',
  '/canine_chain.filetree.MsgChangeOwner': 'owner_changed.signer',
  '/canine_chain.filetree.MsgDeleteFile': 'file_removed.signer',
  '/canine_chain.filetree.MsgPostFile': 'file_posted.signer',
  '/canine_chain.filetree.MsgPostKey': 'key_posted.signer',
  '/canine_chain.filetree.MsgProvisionFileTree': 'root_made.signer',
  '/canine_chain.filetree.MsgRemoveEditors': 'editors_removed.signer',
  '/canine_chain.filetree.MsgRemoveViewers': 'viewers_removed.signer',
  '/canine_chain.filetree.MsgResetEditors': 'editors_reset.signer',
  '/canine_chain.filetree.MsgResetViewers': 'viewers_reset.signer',
  /* notifications */
  '/canine_chain.notifications.MsgCreateNotification': 'xx',
  '/canine_chain.notifications.MsgDeleteNotification': 'xx',
  '/canine_chain.notifications.MsgBlockSenders': 'xx',
  /* oracle */
  '/canine_chain.oracle.MsgCreateFeed': 'xx',
  '/canine_chain.oracle.MsgUpdateFeed': 'xx',
  /* rns */
  '/canine_chain.rns.MsgAcceptBid': 'xx',
  '/canine_chain.rns.MsgAddRecord': 'xx',
  '/canine_chain.rns.MsgBid': 'xx',
  '/canine_chain.rns.MsgBuy': 'xx',
  '/canine_chain.rns.MsgCancelBid': 'xx',
  '/canine_chain.rns.MsgDelist': 'xx',
  '/canine_chain.rns.MsgDelRecord': 'xx',
  '/canine_chain.rns.MsgInit': 'xx',
  '/canine_chain.rns.MsgList': 'xx',
  '/canine_chain.rns.MsgRegister': 'xx',
  '/canine_chain.rns.MsgTransfer': 'xx',
  '/canine_chain.rns.MsgUpdate': 'xx',
  /* storage */
  '/canine_chain.storage.MsgAddClaimer': 'xx',
  '/canine_chain.storage.MsgAttest': 'xx',
  '/canine_chain.storage.MsgBuyStorage': 'buy_storage.buyer',
  '/canine_chain.storage.MsgDeleteFile': 'delete_file.signer',
  '/canine_chain.storage.MsgInitProvider': 'xx',
  '/canine_chain.storage.MsgPostFile': 'post_file.signer',
  '/canine_chain.storage.MsgPostProof': 'xx',
  '/canine_chain.storage.MsgRemoveClaimer': 'xx',
  '/canine_chain.storage.MsgReport': 'xx',
  '/canine_chain.storage.MsgRequestAttestationForm': 'xx',
  '/canine_chain.storage.MsgRequestReportForm': 'xx',
  '/canine_chain.storage.MsgSetProviderIP': 'xx',
  '/canine_chain.storage.MsgSetProviderKeybase': 'xx',
  '/canine_chain.storage.MsgSetProviderTotalSpace': 'xx',
  '/canine_chain.storage.MsgShutdownProvider': 'xx',
}

export function findQueryKey(msgTypeUrl: string): string {
  return queryKeyLibrary[msgTypeUrl]
}
