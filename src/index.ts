import { OfflineSigner } from '@cosmjs/proto-signing'
import { genBroadcaster } from '@/customBroadcast'
import IProtoBuilder from '@/interfaces/classes/IProtoBuilder'
import IQueryRns from '@/interfaces/classes/IQueryRns'
import IQueryJklMint from '@/interfaces/classes/IQueryJklMint'
import IQueryBank from '@/interfaces/classes/IQueryBank'
import IQueryDistribution from '@/interfaces/classes/IQueryDistribution'
import IQueryGov from '@/interfaces/classes/IQueryGov'
import IQueryStaking from '@/interfaces/classes/IQueryStaking'
import {
  GrpcWebImpl,
  IBankGrpc,
  IDistributionGrpc,
  IGovGrpc,
  IStakingGrpc,
  IJklMintGrpc,
  IRnsGrpc,
  TGrpc
} from '@/interfaces/IGrpcWebImpl'

import QueryJklMint from '@/snackages/query/custom/jklMint'
import QueryRns from '@/snackages/query/custom/rns'
import QueryDistribution from '@/snackages/query/static/distribution'
import QueryGov from '@/snackages/query/static/gov'
import QueryStaking from '@/snackages/query/static/staking'
import QueryBank from '@/snackages/query/static/bank'

import { TxRns, ITxRns } from '@/snackages/tx/custom/rns'
import { TxBank, ITxBank } from '@/snackages/tx/static/bank'
import { ITxDistribution, TxDistribution } from '@/snackages/tx/static/distribution'
import { ITxGov, TxGov } from '@/snackages/tx/static/gov'
import { ITxStaking, TxStaking } from '@/snackages/tx/static/staking'

export default class ProtoBuilder implements IProtoBuilder {
  private readonly signer: OfflineSigner
  private readonly txUrl: string
  private readonly GRpc: TGrpc

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
  makeBankQuery (): IQueryBank {
    return new QueryBank(this.GRpc as IBankGrpc)
  }
  makeBankTx (): ITxBank {
    return new TxBank()
  }
  makeDistributionQuery (): IQueryDistribution {
    return new QueryDistribution(this.GRpc as IDistributionGrpc)
  }
  makeDistributionTx (): ITxDistribution {
    return new TxDistribution()
  }
  makeGovQuery (): IQueryGov {
    return new QueryGov(this.GRpc as IGovGrpc)
  }
  makeGovTx (): ITxGov {
    return new TxGov()
  }
  makeStakingQuery (): IQueryStaking {
    return new QueryStaking(this.GRpc as IStakingGrpc)
  }
  makeStakingTx (): ITxStaking {
    return new TxStaking()
  }

  /** Custom */
  makeJklMintQuery (): IQueryJklMint {
    return new QueryJklMint(this.GRpc as IJklMintGrpc)
  }
  makeRnsQuery (): IQueryRns {
    return new QueryRns(this.GRpc as IRnsGrpc)
  }
  makeRnsTx (): ITxRns {
    return new TxRns()
  }

}
