/**
 * Jackal Custom Protos
 */
import { OfflineSigner } from '@cosmjs/proto-signing'
import GRpc from '@grpc/grpc-js'

import IProtoBuilder from './interfaces/classes/IProtoBuilder'
import IRpc from './interfaces/IRpc'

import { TxRns, ITxRns } from './snackages/tx/custom/rns'
import QueryRns from './snackages/query/custom/rns'

import { genBroadcaster } from './customBroadcast'
import IQueryRns from './interfaces/classes/IQueryRns'


export default class ProtoBuilder implements IProtoBuilder {
  private readonly signer: OfflineSigner
  private readonly txUrl: string
  private readonly rpc: IRpc

  constructor (signer: OfflineSigner, txUrl?: string, queryUrl?: string) {
    const qUrl = (queryUrl) ? cleanUrl(queryUrl) : 'localhost:9090'

    this.signer = signer
    this.txUrl = txUrl || 'http://localhost:26657'

    const GRpcClient = new GRpc.Client(qUrl, GRpc.credentials.createInsecure())
    this.rpc = {
      request (service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
          function resultCallback (err, result) {
            if (err) {
              return reject(err)
            } else {
              resolve(result)
            }
          }
          GRpcClient.makeUnaryRequest(`/${service}/${method}`, passThrough, passThrough, data, resultCallback)
        })
      }
    }
  }

  /** Class Gen Methods */
  /** General */
  makeMasterBroadcaster () {
    return genBroadcaster(this.signer, { addr: this.txUrl })
  }

  /** Static */


  /** Custom */
  makeRnsQuery (): IQueryRns {
    return new QueryRns(this.rpc)
  }
  makeRnsTx (): ITxRns {
    return new TxRns()
  }

}


/** Helpers */
function cleanUrl (queryUrl: string) {
  return queryUrl.replace(/.+?:\/\//, '').replace(/\/+$/, '')
}
function passThrough (arg) {
  return arg
}



/**
 * Jackal Custom Protos
 */

// export { txClient as dsigTxClient, queryClient as dsigQueryClient } from './protos/jackal-dao/canine/jackaldao.canine.dsig/module'
// export { txClient as filetreeTxClient, queryClient as filetreeQueryClient } from './protos/jackal-dao/canine/jackaldao.canine.filetree/module'
// export { txClient as jklMintTxClient, queryClient as jklMintQueryClient } from './protos/jackal-dao/canine/jackaldao.canine.jklmint/module'
// export { txClient as lpTxClient, queryClient as lpQueryClient } from './protos/jackal-dao/canine/jackaldao.canine.lp/module'
// export { txClient as notificationTxClient, queryClient as notificationQueryClient } from './protos/jackal-dao/canine/jackaldao.canine.notifications/module'
// export { txClient as rnsTxClient, queryClient as rnsQueryClient } from './protos/jackal-dao/canine/jackaldao.canine.rns/module'
// export { txClient as storageTxClient, queryClient as storageQueryClient } from './protos/jackal-dao/canine/jackaldao.canine.storage/module'

// export { Api as dsigQueryApi } from './protos/jackal-dao/canine/jackaldao.canine.dsig/module/rest'
// export { Api as filetreeQueryApi } from './protos/jackal-dao/canine/jackaldao.canine.filetree/module/rest'
// export { Api as jklMintQueryApi } from './protos/jackal-dao/canine/jackaldao.canine.jklmint/module/rest'
// export { Api as lpQueryApi } from './protos/jackal-dao/canine/jackaldao.canine.lp/module/rest'
// export { Api as notificationQueryApi } from './protos/jackal-dao/canine/jackaldao.canine.notifications/module/rest'
// export { Api as rnsQueryApi } from './protos/jackal-dao/canine/jackaldao.canine.rns/module/rest'
// export { Api as storageQueryApi } from './protos/jackal-dao/canine/jackaldao.canine.storage/module/rest'

/**
 * Jackal Stock CosmosSDK Protos
 */

// export { txClient as cosmTxClient, queryClient as cosmQueryClient } from './protos/CosmWasm/wasmd/cosmwasm.wasm.v1/module'

// export { txClient as bankTxClient, queryClient as bankQueryClient } from './protos/cosmos/cosmos-sdk/cosmos.bank.v1beta1/module'
// export { txClient as distributionTxClient, queryClient as distributionQueryClient } from './protos/cosmos/cosmos-sdk/cosmos.distribution.v1beta1/module'
// export { txClient as govTxClient, queryClient as govQueryClient } from './protos/cosmos/cosmos-sdk/cosmos.gov.v1beta1/module'
// export { txClient as stakingTxClient, queryClient as stakingQueryClient } from './protos/cosmos/cosmos-sdk/cosmos.staking.v1beta1/module'

// export { Api as cosmQueryApi } from './protos/CosmWasm/wasmd/cosmwasm.wasm.v1/module/rest'

// export { Api as bankQueryApi } from './protos/cosmos/cosmos-sdk/cosmos.bank.v1beta1/module/rest'
// export { Api as distributionQueryApi } from './protos/cosmos/cosmos-sdk/cosmos.distribution.v1beta1/module/rest'
// export { Api as govQueryApi } from './protos/cosmos/cosmos-sdk/cosmos.gov.v1beta1/module/rest'
// export { Api as stakingQueryApi } from './protos/cosmos/cosmos-sdk/cosmos.staking.v1beta1/module/rest'
