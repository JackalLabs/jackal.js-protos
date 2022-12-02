import { ITxFileTree } from '@/snackages/tx/custom/fileTree'
import { ITxRns } from '@/snackages/tx/custom/rns'
import { ITxStorage } from '@/snackages/tx/custom/storage'
import { ITxBank } from '@/snackages/tx/static/bank'
import { ITxDistribution } from '@/snackages/tx/static/distribution'
import { ITxGov } from '@/snackages/tx/static/gov'
import { ITxStaking } from '@/snackages/tx/static/staking'

export default interface IAllTx {
  /** Custom */
  fileTree: ITxFileTree,
  jklMint: null,
  rns: ITxRns,
  storage: ITxStorage,
  /** Static */
  bank: ITxBank,
  distribution: ITxDistribution,
  gov: ITxGov,
  staking: ITxStaking
}
