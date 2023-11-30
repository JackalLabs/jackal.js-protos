import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate'
import { assertDefined } from '@cosmjs/utils'
import { QueryClientImpl } from '@/postgen/canine_chain/storage/query'
import { warnError } from '@/utils/misc'
import type { IStorageExtension } from '@/interfaces/snackages'
import type {
  DQueryActiveProviders,
  DQueryAllAttestations,
  DQueryAllProofs,
  DQueryAllProviders,
  DQueryAllReports,
  DQueryAllStoragePaymentInfo,
  DQueryAttestation,
  DQueryClientFreeSpace,
  DQueryFileUploadCheck,
  DQueryFindFile,
  DQueryFreeSpace,
  DQueryOpenFiles,
  DQueryPayData,
  DQueryPriceCheck,
  DQueryProof,
  DQueryProofsByAddress,
  DQueryProvider,
  DQueryReport,
  DQueryStorageAllFiles,
  DQueryStorageFile,
  DQueryStorageParams,
  DQueryStoragePaymentInfo,
  DQueryStorageStats,
  DQueryStoreCount
} from '@/types/queries'
import type {
  TQueryActiveProvidersResponseStrict,
  TQueryAllAttestationsResponseStrict,
  TQueryAllProofsResponseStrict,
  TQueryAllProvidersResponseStrict,
  TQueryAllReportsResponseStrict,
  TQueryAllStoragePaymentInfoResponseStrict,
  TQueryAttestationResponseStrict,
  TQueryClientFreeSpaceResponseStrict,
  TQueryFileUploadCheckResponseStrict,
  TQueryFindFileResponseStrict,
  TQueryFreeSpaceResponseStrict,
  TQueryPayDataResponseStrict,
  TQueryPriceCheckResponseStrict,
  TQueryProofResponseStrict,
  TQueryProofsByAddressResponseStrict,
  TQueryProviderResponseStrict,
  TQueryReportResponseStrict,
  TQueryStorageAllFilesResponseStrict,
  TQueryStorageFileResponseStrict,
  TQueryStorageParamsResponseStrict,
  TQueryStoragePaymentInfoResponseStrict,
  TQueryStorageStatsResponseStrict,
  TQueryStoreCountResponseStrict
} from '@/types/queries/responses'

export function createStorageExtension(base: QueryClient): IStorageExtension {
  const rpc = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpc)

  return {
    storage: {
      activeProviders: async (request: DQueryActiveProviders): Promise<TQueryActiveProvidersResponseStrict> => {
        const resp = await queryService
          .ActiveProviders(request)
          .catch((err) => {
            warnError('[Storage] activeProviders', err)
            throw err
          })
        assertDefined(resp.providers)
        return resp as TQueryActiveProvidersResponseStrict
      },
      allAttestations: async (request: DQueryAllAttestations): Promise<TQueryAllAttestationsResponseStrict> => {
        const resp = await queryService
          .AllAttestations(request)
          .catch((err) => {
            warnError('[Storage] allAttestations', err)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllAttestationsResponseStrict
      },
      allFiles: async (request: DQueryStorageAllFiles): Promise<TQueryStorageAllFilesResponseStrict> => {
        const resp = await queryService
          .AllFiles(request)
          .catch((err) => {
            warnError('[Storage] allFiles', err)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryStorageAllFilesResponseStrict
      },
      allProofs: async (request: DQueryAllProofs): Promise<TQueryAllProofsResponseStrict> => {
        const resp = await queryService
          .AllProofs(request)
          .catch((err) => {
            warnError('[Storage] allProofs', err)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllProofsResponseStrict
      },
      allProviders: async (request: DQueryAllProviders): Promise<TQueryAllProvidersResponseStrict> => {
        const resp = await queryService
          .AllProviders(request)
          .catch((err) => {
            warnError('[Storage] allProviders', err)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllProvidersResponseStrict
      },
      allReports: async (request: DQueryAllReports): Promise<TQueryAllReportsResponseStrict> => {
        const resp = await queryService
          .AllReports(request)
          .catch((err) => {
            warnError('[Storage] allReports', err)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllReportsResponseStrict
      },
      allStoragePaymentInfo: async (request: DQueryAllStoragePaymentInfo): Promise<TQueryAllStoragePaymentInfoResponseStrict> => {
        const resp = await queryService
          .AllStoragePaymentInfo(request)
          .catch((err) => {
            warnError('[Storage] allStoragePaymentInfo', err)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllStoragePaymentInfoResponseStrict
      },
      attestation: async (request: DQueryAttestation): Promise<TQueryAttestationResponseStrict> => {
        const resp = await queryService
          .Attestation(request)
          .catch((err) => {
            warnError('[Storage] attestation', err)
            throw err
          })
        assertDefined(resp.attestation)
        return resp as TQueryAttestationResponseStrict
      },
      clientFreeSpace: async (request: DQueryClientFreeSpace): Promise<TQueryClientFreeSpaceResponseStrict> => {
        const resp = await queryService
          .GetClientFreeSpace(request)
          .catch((err) => {
            warnError('[Storage] clientFreeSpace', err)
            throw err
          })
        assertDefined(resp.bytesFree)
        return resp as TQueryClientFreeSpaceResponseStrict
      },
      file: async (request: DQueryStorageFile): Promise<TQueryStorageFileResponseStrict> => {
        const resp = await queryService
          .File(request)
          .catch((err) => {
            warnError('[Storage] file', err)
            throw err
          })
        assertDefined(resp.file)
        return resp as TQueryStorageFileResponseStrict
      },
      fileUploadCheck: async (request: DQueryFileUploadCheck): Promise<TQueryFileUploadCheckResponseStrict> => {
        const resp = await queryService
          .FileUploadCheck(request)
          .catch((err) => {
            warnError('[Storage] fileUploadCheck', err)
            throw err
          })
        assertDefined(resp.valid)
        return resp as TQueryFileUploadCheckResponseStrict
      },
      findFile: async (request: DQueryFindFile): Promise<TQueryFindFileResponseStrict> => {
        const resp = await queryService
          .FindFile(request)
          .catch((err) => {
            warnError('[Storage] findFile', err)
            throw err
          })
        assertDefined(resp.providerIps)
        return resp as TQueryFindFileResponseStrict
      },
      freeSpace: async (request: DQueryFreeSpace): Promise<TQueryFreeSpaceResponseStrict> => {
        const resp = await queryService
          .FreeSpace(request)
          .catch((err) => {
            warnError('[Storage] freeSpace', err)
            throw err
          })
        assertDefined(resp.space)
        return resp as TQueryFreeSpaceResponseStrict
      },
      openFiles: async (request: DQueryOpenFiles): Promise<TQueryStorageAllFilesResponseStrict> => {
        const resp = await queryService
          .OpenFiles(request)
          .catch((err) => {
            warnError('[Storage] openFiles', err)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryStorageAllFilesResponseStrict
      },
      payData: async (request: DQueryPayData): Promise<TQueryPayDataResponseStrict> => {
        const resp = await queryService
          .GetPayData(request)
          .catch((err) => {
            warnError('[Storage] payData', err)
            throw err
          })
        assertDefined(resp.bytes)
        return resp as TQueryPayDataResponseStrict
      },
      priceCheck: async (request: DQueryPriceCheck): Promise<TQueryPriceCheckResponseStrict> => {
        const resp = await queryService
          .PriceCheck(request)
          .catch((err) => {
            warnError('[Storage] priceCheck', err)
            throw err
          })
        assertDefined(resp.price)
        return resp as TQueryPriceCheckResponseStrict
      },
      proof: async (request: DQueryProof): Promise<TQueryProofResponseStrict> => {
        const resp = await queryService
          .Proof(request)
          .catch((err) => {
            warnError('[Storage] proof', err)
            throw err
          })
        assertDefined(resp.proof)
        return resp as TQueryProofResponseStrict
      },
      proofsByAddress: async (request: DQueryProofsByAddress): Promise<TQueryProofsByAddressResponseStrict> => {
        const resp = await queryService
          .ProofsByAddress(request)
          .catch((err) => {
            warnError('[Storage] proofsByAddress', err)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryProofsByAddressResponseStrict
      },
      provider: async (request: DQueryProvider): Promise<TQueryProviderResponseStrict> => {
        const resp = await queryService
          .Provider(request)
          .catch((err) => {
            warnError('[Storage] provider', err)
            throw err
          })
        assertDefined(resp.provider)
        return resp as TQueryProviderResponseStrict
      },
      report: async (request: DQueryReport): Promise<TQueryReportResponseStrict> => {
        const resp = await queryService
          .Report(request)
          .catch((err) => {
            warnError('[Storage] report', err)
            throw err
          })
        assertDefined(resp.report)
        return resp as TQueryReportResponseStrict
      },
      storagePaymentInfo: async (request: DQueryStoragePaymentInfo): Promise<TQueryStoragePaymentInfoResponseStrict> => {
        const resp = await queryService
          .StoragePaymentInfo(request)
          .catch((err) => {
            warnError('[Storage] storagePaymentInfo', err)
            throw err
          })
        assertDefined(resp.storagePaymentInfo)
        return resp as TQueryStoragePaymentInfoResponseStrict
      },
      storageStats: async (request: DQueryStorageStats): Promise<TQueryStorageStatsResponseStrict> => {
        const resp = await queryService
          .StorageStats(request)
          .catch((err) => {
            warnError('[Storage] storageStats', err)
            throw err
          })
        assertDefined(resp.purchased)
        return resp as TQueryStorageStatsResponseStrict
      },
      storeCount: async (request: DQueryStoreCount): Promise<TQueryStoreCountResponseStrict> => {
        const resp = await queryService
          .StoreCount(request)
          .catch((err) => {
            warnError('[Storage] storeCount', err)
            throw err
          })
        assertDefined(resp.count)
        return resp as TQueryStoreCountResponseStrict
      },
      params: async (request: DQueryStorageParams): Promise<TQueryStorageParamsResponseStrict> => {
        const resp = await queryService
          .Params(request)
          .catch((err) => {
            warnError('[Storage] params', err)
            throw err
          })
        assertDefined(resp.params)
        return resp as TQueryStorageParamsResponseStrict
      }
    }
  }
}
