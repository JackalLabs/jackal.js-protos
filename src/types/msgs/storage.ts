import {
  MsgAddClaimer,
  MsgAttest,
  MsgBuyStorage,
  MsgDeleteFile,
  MsgInitProvider,
  MsgPostFile,
  MsgPostProof,
  MsgRemoveClaimer,
  MsgReport,
  MsgRequestAttestationForm,
  MsgRequestReportForm,
  MsgSetProviderIP,
  MsgSetProviderKeybase,
  MsgSetProviderTotalSpace,
  MsgShutdownProvider
} from '@/postgen/canine_chain/storage/tx'

export type DMsgStoragePostFile = Documentation<{
  creator: string;
  merkle: Uint8Array;
  fileSize: number;
  proofInterval: number;
  proofType: number;
  maxProofs: number;
  expires: number;
  note: string;
}, MsgPostFile>

export type DMsgPostProof = Documentation<{
  creator: string;
  item: Uint8Array;
  hashList: Uint8Array;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, MsgPostProof>

export type DMsgStorageDeleteFile = Documentation<{
  creator: string;
  merkle: Uint8Array;
  start: number;
}, MsgDeleteFile>

export type DMsgSetProviderIP = Documentation<{
  creator: string;
  ip: string;
}, MsgSetProviderIP>

export type DMsgSetProviderKeybase = Documentation<{
  creator: string;
  keybase: string;
}, MsgSetProviderKeybase>

export type DMsgSetProviderTotalSpace = Documentation<{
  creator: string;
  space: number;
}, MsgSetProviderTotalSpace>

export type DMsgAddClaimer = Documentation<{
  creator: string;
  claimAddress: string;
}, MsgAddClaimer>

export type DMsgRemoveClaimer = Documentation<{
  creator: string;
  claimAddress: string;
}, MsgRemoveClaimer>

export type DMsgInitProvider = Documentation<{
  creator: string;
  ip: string;
  keybase: string;
  totalSpace: number;
}, MsgInitProvider>

export type DMsgShutdownProvider = Documentation<{
  creator: string;
}, MsgShutdownProvider>

export type DMsgBuyStorage = Documentation<{
  creator: string;
  forAddress: string;
  durationDays: number;
  bytes: number;
  paymentDenom: string;
}, MsgBuyStorage>

export type DMsgRequestAttestationForm = Documentation<{
  creator: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, MsgRequestAttestationForm>

export type DMsgAttest = Documentation<{
  creator: string;
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, MsgAttest>

export type DMsgRequestReportForm = Documentation<{
  creator: string;
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, MsgRequestReportForm>

export type DMsgReport = Documentation<{
  creator: string;
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, MsgReport>
