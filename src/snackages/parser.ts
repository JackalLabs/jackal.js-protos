import {
  fileTreeResponses,
  notificationsResponses,
  oracleResponses,
  rnsResponses,
  storageResponses
} from '@/snackages/tx'
import { bankResponses } from '@/snackages/cosmos'
import type { TMsgResponseParsers } from '@/types'
import type { IMsgResponse } from '@/interfaces'

export const txResponseLibrary: TMsgResponseParsers = {
  ...fileTreeResponses,
  ...notificationsResponses,
  ...oracleResponses,
  ...rnsResponses,
  ...storageResponses,
  /* cosmos */
  ...bankResponses,
}

export function parseMsgResponse(msgResponse: IMsgResponse) {
  return txResponseLibrary[msgResponse.msgType](msgResponse.data)
}
