import type { PageRequest } from '@/postgen/cosmos/base/query/v1beta1/pagination'
import type {
  QueryActiveProviders,
  QueryAllAttestations,
  QueryAllFiles,
  QueryAllProofs,
  QueryAllProviders,
  QueryAllReports,
  QueryAllStoragePaymentInfo,
  QueryAttestation,
  QueryClientFreeSpace,
  QueryFile,
  QueryFileUploadCheck,
  QueryFindFile,
  QueryFreeSpace,
  QueryOpenFiles,
  QueryParams,
  QueryPayData,
  QueryPriceCheck,
  QueryProof,
  QueryProofsByAddress,
  QueryProvider,
  QueryReport,
  QueryStoragePaymentInfo,
  QueryStorageStats,
  QueryStoreCount
} from '@/postgen/canine_chain/storage/query'

export type DQueryAllProofs = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllProofs>

export type DQueryStorageAllFiles = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllFiles>

export type DQueryAllAttestations = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllAttestations>

export type DQueryAllProviders = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllProviders>

export type DQueryAllReports = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllReports>

export type DQueryAllStoragePaymentInfo = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllStoragePaymentInfo>

export type DQueryOpenFiles = Documentation<{
  providerAddress: string;
  pagination: PageRequest | undefined;
}, QueryOpenFiles>

export type DQueryProofsByAddress = Documentation<{
  providerAddress: string;
  pagination: PageRequest | undefined;
}, QueryProofsByAddress>

export type DQueryStorageFile = Documentation<{
  merkle: Uint8Array;
  owner: string;
  start: number;
}, QueryFile>

export type DQueryProvider = Documentation<{
  address: string;
}, QueryProvider>

export type DQueryProof = Documentation<{
  providerAddress: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, QueryProof>

export type DQueryAttestation = Documentation<{
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, QueryAttestation>

export type DQueryReport = Documentation<{
  prover: string;
  merkle: Uint8Array;
  owner: string;
  start: number;
}, QueryReport>

export type DQueryFreeSpace = Documentation<{
  address: string;
}, QueryFreeSpace>

export type DQueryStoreCount = Documentation<{
  address: string;
}, QueryStoreCount>

export type DQueryFindFile = Documentation<{
  merkle: Uint8Array;
}, QueryFindFile>

export type DQueryClientFreeSpace = Documentation<{
  address: string;
}, QueryClientFreeSpace>

export type DQueryPayData = Documentation<{
  address: string;
}, QueryPayData>

export type DQueryStoragePaymentInfo = Documentation<{
  address: string;
}, QueryStoragePaymentInfo>

export type DQueryFileUploadCheck = Documentation<{
  address: string;
  bytes: number;
}, QueryFileUploadCheck>

export type DQueryPriceCheck = Documentation<{
  duration: string;
  bytes: number;
}, QueryPriceCheck>

export type DQueryActiveProviders = Documentation<{}, QueryActiveProviders>

export type DQueryStorageStats = Documentation<{}, QueryStorageStats>

export type DQueryStorageParams = Documentation<{}, QueryParams>
