// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgPostkey } from "./types/filetree/tx";
import { MsgMakeRoot } from "./types/filetree/tx";
import { MsgDeleteFile } from "./types/filetree/tx";
import { MsgRemoveViewers } from "./types/filetree/tx";
import { MsgChangeOwner } from "./types/filetree/tx";
import { MsgAddEditors } from "./types/filetree/tx";
import { MsgRemoveEditors } from "./types/filetree/tx";
import { MsgResetViewers } from "./types/filetree/tx";
import { MsgAddViewers } from "./types/filetree/tx";
import { MsgInitAll } from "./types/filetree/tx";
import { MsgResetEditors } from "./types/filetree/tx";
import { MsgPostFile } from "./types/filetree/tx";


export const types = [
  ["/jackaldao.canine.filetree.MsgPostkey", MsgPostkey],
  ["/jackaldao.canine.filetree.MsgMakeRoot", MsgMakeRoot],
  ["/jackaldao.canine.filetree.MsgDeleteFile", MsgDeleteFile],
  ["/jackaldao.canine.filetree.MsgRemoveViewers", MsgRemoveViewers],
  ["/jackaldao.canine.filetree.MsgChangeOwner", MsgChangeOwner],
  ["/jackaldao.canine.filetree.MsgAddEditors", MsgAddEditors],
  ["/jackaldao.canine.filetree.MsgRemoveEditors", MsgRemoveEditors],
  ["/jackaldao.canine.filetree.MsgResetViewers", MsgResetViewers],
  ["/jackaldao.canine.filetree.MsgAddViewers", MsgAddViewers],
  ["/jackaldao.canine.filetree.MsgInitAll", MsgInitAll],
  ["/jackaldao.canine.filetree.MsgResetEditors", MsgResetEditors],
  ["/jackaldao.canine.filetree.MsgPostFile", MsgPostFile],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgPostkey: (data: MsgPostkey): EncodeObject => ({ typeUrl: "/jackaldao.canine.filetree.MsgPostkey", value: MsgPostkey.fromPartial( data ) }),
    msgMakeRoot: (data: MsgMakeRoot): EncodeObject => ({ typeUrl: "/jackaldao.canine.filetree.MsgMakeRoot", value: MsgMakeRoot.fromPartial( data ) }),
    msgDeleteFile: (data: MsgDeleteFile): EncodeObject => ({ typeUrl: "/jackaldao.canine.filetree.MsgDeleteFile", value: MsgDeleteFile.fromPartial( data ) }),
    msgRemoveViewers: (data: MsgRemoveViewers): EncodeObject => ({ typeUrl: "/jackaldao.canine.filetree.MsgRemoveViewers", value: MsgRemoveViewers.fromPartial( data ) }),
    msgChangeOwner: (data: MsgChangeOwner): EncodeObject => ({ typeUrl: "/jackaldao.canine.filetree.MsgChangeOwner", value: MsgChangeOwner.fromPartial( data ) }),
    msgAddEditors: (data: MsgAddEditors): EncodeObject => ({ typeUrl: "/jackaldao.canine.filetree.MsgAddEditors", value: MsgAddEditors.fromPartial( data ) }),
    msgRemoveEditors: (data: MsgRemoveEditors): EncodeObject => ({ typeUrl: "/jackaldao.canine.filetree.MsgRemoveEditors", value: MsgRemoveEditors.fromPartial( data ) }),
    msgResetViewers: (data: MsgResetViewers): EncodeObject => ({ typeUrl: "/jackaldao.canine.filetree.MsgResetViewers", value: MsgResetViewers.fromPartial( data ) }),
    msgAddViewers: (data: MsgAddViewers): EncodeObject => ({ typeUrl: "/jackaldao.canine.filetree.MsgAddViewers", value: MsgAddViewers.fromPartial( data ) }),
    msgInitAll: (data: MsgInitAll): EncodeObject => ({ typeUrl: "/jackaldao.canine.filetree.MsgInitAll", value: MsgInitAll.fromPartial( data ) }),
    msgResetEditors: (data: MsgResetEditors): EncodeObject => ({ typeUrl: "/jackaldao.canine.filetree.MsgResetEditors", value: MsgResetEditors.fromPartial( data ) }),
    msgPostFile: (data: MsgPostFile): EncodeObject => ({ typeUrl: "/jackaldao.canine.filetree.MsgPostFile", value: MsgPostFile.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
