import IProtoBuilder from '@/interfaces/classes/IProtoBuilder'
import { OfflineSigner } from '@cosmjs/proto-signing'
import {
  GrpcWebImpl,
  IABCIGrpc,
  IBankGrpc,
  IDistributionGrpc,
  IFileTreeGrpc,
  IGovGrpc,
  IJklMintGrpc,
  INotificationsGrpc,
  IOracleGrpc,
  IRnsGrpc,
  ISlashingGrpc,
  IStakingGrpc,
  IStorageGrpc,
  TGrpc
} from '@/interfaces/IGrpcWebImpl'
import { genBroadcaster, IGenBroadcaster } from '@/customBroadcast'
import IAllQuery from '@/interfaces/IAllQuery'
import IAllTx from '@/interfaces/IAllTx'
import IQueryFileTree from '@/interfaces/classes/IQueryFileTree'
import QueryFileTree from '@/snackages/query/custom/fileTree'
import { ITxFileTree, TxFileTree } from '@/snackages/tx/custom/fileTree'
import IQueryJklMint from '@/interfaces/classes/IQueryJklMint'
import QueryJklMint from '@/snackages/query/custom/jklMint'
import IQueryNotifications from '@/interfaces/classes/IQueryNotifications'
import QueryNotifications from '@/snackages/query/custom/notifications'
import {
  ITxNotifications,
  TxNotifications
} from '@/snackages/tx/custom/notifications'
import IQueryOracle from '@/interfaces/classes/IQueryOracle'
import QueryOracle from '@/snackages/query/custom/oracle'
import { ITxOracle, TxOracle } from '@/snackages/tx/custom/oracle'
import IQueryRns from '@/interfaces/classes/IQueryRns'
import QueryRns from '@/snackages/query/custom/rns'
import { ITxRns, TxRns } from '@/snackages/tx/custom/rns'
import IQueryStorage from '@/interfaces/classes/IQueryStorage'
import QueryStorage from '@/snackages/query/custom/storage'
import { ITxStorage, TxStorage } from '@/snackages/tx/custom/storage'
import IQueryABCI from '@/interfaces/classes/IQueryABCI'
import QueryABCI from '@/snackages/query/static/abci'
import IQueryBank from '@/interfaces/classes/IQueryBank'
import QueryBank from '@/snackages/query/static/bank'
import { ITxBank, TxBank } from '@/snackages/tx/static/bank'
import IQueryDistribution from '@/interfaces/classes/IQueryDistribution'
import QueryDistribution from '@/snackages/query/static/distribution'
import {
  ITxDistribution,
  TxDistribution
} from '@/snackages/tx/static/distribution'
import IQueryGov from '@/interfaces/classes/IQueryGov'
import QueryGov from '@/snackages/query/static/gov'
import { ITxGov, TxGov } from '@/snackages/tx/static/gov'
import IQuerySlashing from '@/interfaces/classes/IQuerySlashing'
import QuerySlashing from '@/snackages/query/static/slashing'
import { ITxSlashing, TxSlashing } from '@/snackages/tx/static/slashing'
import IQueryStaking from '@/interfaces/classes/IQueryStaking'
import QueryStaking from '@/snackages/query/static/staking'
import { ITxStaking, TxStaking } from '@/snackages/tx/static/staking'
import IQueryBuilder from '@/interfaces/classes/IQueryBuilder'

export class QueryBuilder implements IQueryBuilder {
  protected readonly GRpc: TGrpc

  constructor(queryUrl?: string) {
    const qUrl = queryUrl || 'http://localhost:9091'
    this.GRpc = new GrpcWebImpl(qUrl, {})
  }

  /** General */

  makeAllQuery(): IAllQuery {
    return {
      /** Custom */
      fileTree: this.makeFileTreeQuery(),
      jklMint: this.makeJklMintQuery(),
      notifications: this.makeNotificationsQuery(),
      oracle: this.makeOracleQuery(),
      rns: this.makeRnsQuery(),
      storage: this.makeStorageQuery(),
      /** Static */
      abci: this.makeABCIQuery(),
      bank: this.makeBankQuery(),
      distribution: this.makeDistributionQuery(),
      gov: this.makeGovQuery(),
      slashing: this.makeSlashingQuery(),
      staking: this.makeStakingQuery()
    }
  }

  /** Custom */
  makeFileTreeQuery(): IQueryFileTree {
    return new QueryFileTree(this.GRpc as IFileTreeGrpc)
  }

  makeJklMintQuery(): IQueryJklMint {
    return new QueryJklMint(this.GRpc as IJklMintGrpc)
  }

  makeNotificationsQuery(): IQueryNotifications {
    return new QueryNotifications(this.GRpc as INotificationsGrpc)
  }

  makeOracleQuery(): IQueryOracle {
    return new QueryOracle(this.GRpc as IOracleGrpc)
  }

  makeRnsQuery(): IQueryRns {
    return new QueryRns(this.GRpc as IRnsGrpc)
  }

  makeStorageQuery(): IQueryStorage {
    return new QueryStorage(this.GRpc as IStorageGrpc)
  }

  /** Static */
  makeABCIQuery(): IQueryABCI {
    return new QueryABCI(this.GRpc as IABCIGrpc)
  }

  makeBankQuery(): IQueryBank {
    return new QueryBank(this.GRpc as IBankGrpc)
  }

  makeDistributionQuery(): IQueryDistribution {
    return new QueryDistribution(this.GRpc as IDistributionGrpc)
  }

  makeGovQuery(): IQueryGov {
    return new QueryGov(this.GRpc as IGovGrpc)
  }

  makeSlashingQuery(): IQuerySlashing {
    return new QuerySlashing(this.GRpc as ISlashingGrpc)
  }

  makeStakingQuery(): IQueryStaking {
    return new QueryStaking(this.GRpc as IStakingGrpc)
  }
}

export class ProtoBuilder extends QueryBuilder implements IProtoBuilder {
  private readonly signer: OfflineSigner
  private readonly txUrl: string

  constructor(signer: OfflineSigner, txUrl?: string, queryUrl?: string) {
    super(queryUrl)
    this.signer = signer
    this.txUrl = txUrl || 'http://localhost:26657'
  }

  /** General */
  makeMasterBroadcaster(): Promise<IGenBroadcaster> {
    return genBroadcaster(this.signer, { addr: this.txUrl }).catch((err) => {
      throw err
    })
  }

  makeAllTx(): IAllTx {
    return {
      /** Custom */
      fileTree: this.makeFileTreeTx(),
      jklMint: null,
      notifications: this.makeNotificationsTx(),
      oracle: this.makeOracleTx(),
      rns: this.makeRnsTx(),
      storage: this.makeStorageTx(),
      /** Static */
      bank: this.makeBankTx(),
      distribution: this.makeDistributionTx(),
      gov: this.makeGovTx(),
      slashing: this.makeSlashingTx(),
      staking: this.makeStakingTx()
    }
  }

  /** Custom */

  makeFileTreeTx(): ITxFileTree {
    return new TxFileTree()
  }

  makeNotificationsTx(): ITxNotifications {
    return new TxNotifications()
  }

  makeOracleTx(): ITxOracle {
    return new TxOracle()
  }

  makeRnsTx(): ITxRns {
    return new TxRns()
  }

  makeStorageTx(): ITxStorage {
    return new TxStorage()
  }

  /** Static */

  makeBankTx(): ITxBank {
    return new TxBank()
  }

  makeDistributionTx(): ITxDistribution {
    return new TxDistribution()
  }

  makeGovTx(): ITxGov {
    return new TxGov()
  }

  makeSlashingTx(): ITxSlashing {
    return new TxSlashing()
  }

  makeStakingTx(): ITxStaking {
    return new TxStaking()
  }
}
