import { OfflineSigner } from '@cosmjs/proto-signing'
import IQueryRns from '@/interfaces/classes/IQueryRns'
import { ITxRns } from '@/snackages/tx/custom/rns'

export default interface IProtoBuilder {
  /** General */
  makeMasterBroadcaster(signer: OfflineSigner, { addr: string })

  /** Static */

  /** Custom */
  makeRnsQuery (): IQueryRns
  makeRnsTx (): ITxRns

}
