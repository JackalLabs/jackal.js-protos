import { OfflineSigner } from '@cosmjs/proto-signing'

import IProtoBuilder from '@/interfaces/classes/IProtoBuilder'

import { TxRns, ITxRns } from '@/snackages/tx/custom/rns'
import QueryRns from '@/snackages/query/custom/rns'

import { genBroadcaster } from './customBroadcast'
import IQueryRns from '@/interfaces/classes/IQueryRns'
import { GrpcWebImpl } from '@/postgen/canine-chain/rns/query'

export default class ProtoBuilder implements IProtoBuilder {
  private readonly signer: OfflineSigner
  private readonly txUrl: string
  private readonly GRpc: GrpcWebImpl

  constructor (signer: OfflineSigner, txUrl?: string, queryUrl?: string) {
    const qUrl = queryUrl || 'http://localhost:9091'
    this.signer = signer
    this.txUrl = txUrl || 'http://localhost:26657'
    this.GRpc = new GrpcWebImpl(qUrl, {})
  }

  /** Class Gen Methods */
  /** General */
  makeMasterBroadcaster () {
    return genBroadcaster(this.signer, { addr: this.txUrl })
  }

  /** Static */


  /** Custom */
  makeRnsQuery (): IQueryRns {
    return new QueryRns(this.GRpc)
  }
  makeRnsTx (): ITxRns {
    return new TxRns()
  }

}
