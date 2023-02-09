import { OfflineSigner } from '@cosmjs/proto-signing'
import { genBroadcaster, IGenBroadcaster, TMasterBroadcaster } from '@/customBroadcast'
import IQueryABCI from '@/interfaces/classes/IQueryABCI'
import IProtoBuilder from '@/interfaces/classes/IProtoBuilder'
import IQueryFileTree from '@/interfaces/classes/IQueryFileTree'
import IQueryJklMint from '@/interfaces/classes/IQueryJklMint'
import IQueryOracle from '@/interfaces/classes/IQueryOracle'
import IQueryRns from '@/interfaces/classes/IQueryRns'
import IQueryStorage from '@/interfaces/classes/IQueryStorage'
import IQueryBank from '@/interfaces/classes/IQueryBank'
import IQueryDistribution from '@/interfaces/classes/IQueryDistribution'
import IQueryGov from '@/interfaces/classes/IQueryGov'
import IQueryStaking from '@/interfaces/classes/IQueryStaking'
import {
  GrpcWebImpl,
  IABCIGrpc,
  IFileTreeGrpc,
  IJklMintGrpc,
  IOracleGrpc,
  IRnsGrpc,
  IStorageGrpc,
  IBankGrpc,
  IDistributionGrpc,
  IGovGrpc,
  IStakingGrpc,
  TGrpc
} from '@/interfaces/IGrpcWebImpl'

import QueryABCI from '@/snackages/query/static/abci'
import QueryFileTree from '@/snackages/query/custom/fileTree'
import QueryJklMint from '@/snackages/query/custom/jklMint'
import QueryRns from '@/snackages/query/custom/rns'
import QueryStorage from '@/snackages/query/custom/storage'
import QueryBank from '@/snackages/query/static/bank'
import QueryDistribution from '@/snackages/query/static/distribution'
import QueryGov from '@/snackages/query/static/gov'
import QueryOracle from '@/snackages/query/custom/oracle'
import QueryStaking from '@/snackages/query/static/staking'

import { ITxFileTree, TxFileTree } from '@/snackages/tx/custom/fileTree'
import { ITxOracle, TxOracle } from '@/snackages/tx/custom/oracle'
import { ITxRns, TxRns } from '@/snackages/tx/custom/rns'
import { ITxStorage, TxStorage } from '@/snackages/tx/custom/storage'
import { ITxBank, TxBank } from '@/snackages/tx/static/bank'
import { ITxDistribution, TxDistribution } from '@/snackages/tx/static/distribution'
import { ITxGov, TxGov } from '@/snackages/tx/static/gov'
import { ITxStaking, TxStaking } from '@/snackages/tx/static/staking'
import IAllQuery from '@/interfaces/IAllQuery'
import IAllTx from '@/interfaces/IAllTx'

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

  /** General */
  makeMasterBroadcaster (): Promise<IGenBroadcaster> {
    return genBroadcaster(this.signer, { addr: this.txUrl })
  }
  makeAllQuery (): IAllQuery {
    return {
      /** Custom */
      fileTree: this.makeFileTreeQuery(),
      jklMint: this.makeJklMintQuery(),
      oracle: this.makeOracleQuery(),
      rns: this.makeRnsQuery(),
      storage: this.makeStorageQuery(),
      /** Static */
      abci: this.makeABCIQuery(),
      bank: this.makeBankQuery(),
      distribution: this.makeDistributionQuery(),
      gov: this.makeGovQuery(),
      staking: this.makeStakingQuery()
    }
  }
  makeAllTx (): IAllTx {
    return {
      /** Custom */
      fileTree: this.makeFileTreeTx(),
      jklMint: null,
      oracle: this.makeOracleTx(),
      rns: this.makeRnsTx(),
      storage: this.makeStorageTx(),
      /** Static */
      bank: this.makeBankTx(),
      distribution: this.makeDistributionTx(),
      gov: this.makeGovTx(),
      staking: this.makeStakingTx()
    }
  }

  /** Custom */
  makeFileTreeQuery (): IQueryFileTree {
    return new QueryFileTree(this.GRpc as IFileTreeGrpc)
  }
  makeFileTreeTx (): ITxFileTree {
    return new TxFileTree()
  }
  makeJklMintQuery (): IQueryJklMint {
    return new QueryJklMint(this.GRpc as IJklMintGrpc)
  }
  makeOracleQuery (): IQueryOracle {
    return new QueryOracle(this.GRpc as IOracleGrpc)
  }
  makeOracleTx (): ITxOracle {
    return new TxOracle()
  }
  makeRnsQuery (): IQueryRns {
    return new QueryRns(this.GRpc as IRnsGrpc)
  }
  makeRnsTx (): ITxRns {
    return new TxRns()
  }
  makeStorageQuery (): IQueryStorage {
    return new QueryStorage(this.GRpc as IStorageGrpc)
  }
  makeStorageTx (): ITxStorage {
    return new TxStorage()
  }

  /** Static */
  makeABCIQuery (): IQueryABCI {
    return new QueryABCI(this.GRpc as IABCIGrpc)
  }
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
}

export {
  /** General */
  IAllQuery,
  IAllTx,
  IGenBroadcaster,
  IProtoBuilder,
  TMasterBroadcaster,

  /** Custom */
  IQueryFileTree,
  ITxFileTree,
  IQueryJklMint,
  IQueryOracle,
  ITxOracle,
  IQueryRns,
  ITxRns,
  IQueryStorage,
  ITxStorage,

  /** Static */
  IQueryABCI,
  IQueryBank,
  ITxBank,
  IQueryDistribution,
  ITxDistribution,
  IQueryGov,
  ITxGov,
  IQueryStaking,
  ITxStaking
}
