import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { EncodeObject } from '@cosmjs/proto-signing'
import ITypeTuple from '@/interfaces/ITypeTuple'

const cosmwasmTypes: ITypeTuple = {
  executeContract: ['/cosmwasm.wasm.v1.MsgExecuteContract', MsgExecuteContract],
}

export default cosmwasmTypes

export interface ITxCosmWasm {
  msgExecuteContract(data: MsgExecuteContract): EncodeObject

}

export class TxCosmWasm implements ITxCosmWasm {
  msgExecuteContract(data: MsgExecuteContract): EncodeObject {
    return {
      typeUrl: cosmwasmTypes.executeContract[0],
      value: cosmwasmTypes.executeContract[1].fromPartial(data)
    }
  }
}

