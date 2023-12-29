import {
  fileTreeResponses,
  notificationsResponses,
  oracleResponses,
  rnsResponses,
  storageResponses,
} from '@/snackages/tx'
import { TMsgResponseParsers } from '@/types'
import { IMsgResponse } from '@/interfaces'

export const txResponseLibrary: TMsgResponseParsers = {
  ...fileTreeResponses,
  ...notificationsResponses,
  ...oracleResponses,
  ...rnsResponses,
  ...storageResponses,
}

export function parseMsgResponse(msgResponse: IMsgResponse) {
  return txResponseLibrary[msgResponse.msgType](msgResponse.data)
}
