import type { FileProof, UnifiedFile } from '@/postgen/canine_chain/storage/active_deals'
import type {
  ActiveProviders,
  Attestation,
  AttestationForm,
  Providers,
  ReportForm
} from '@/postgen/canine_chain/storage/providers'
import type { StoragePaymentInfo } from '@/postgen/canine_chain/storage/payment_info'
import type { DCoin } from '@/types/msgs'

export type DActiveProvider = Documentation<{
  address: string;
}, ActiveProviders>

export type DAttestationForm = Documentation<{
  attestations: Attestation[];
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, AttestationForm>

export type DFileProof = Documentation<{
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
  lastProven: number;
  chunkToProve: number;
}, FileProof>

export type DProvider = Documentation<{
  address: string;
  ip: string;
  totalspace: string;
  burnedContracts: string;
  creator: string;
  keybaseIdentity: string;
  authClaimers: string[];
}, Providers>

export type DReportForm = Documentation<{
  attestations: Attestation[];
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, ReportForm>

export type DStoragePaymentInfo = Documentation<{
  start: Date | undefined;
  end:
    | Date
    | undefined;
  spaceAvailable: number;
  spaceUsed: number;
  address: string;
  coins: DCoin[];
}, StoragePaymentInfo>

export type DUnifiedFile = Documentation<{
  merkle: Uint8Array;
  owner: string;
  start: number;
  expires: number;
  fileSize: number;
  proofInterval: number;
  proofType: number;
  proofs: string[];
  maxProofs: number;
  note: string;
}, UnifiedFile>
