import { ITxFileTree, ITxOracle, ITxRns, ITxStorage } from '@/snackages'

export interface ITxLibrary {
  fileTree: ITxFileTree
  oracle: ITxOracle
  rns: ITxRns,
  storage: ITxStorage
}
