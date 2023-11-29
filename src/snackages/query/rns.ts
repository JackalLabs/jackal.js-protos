import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate'
import { assertDefined } from '@cosmjs/utils'
import { QueryClientImpl } from '@/postgen/canine_chain/rns/query'
import type {
  DQueryAllBids,
  DQueryAllForSale,
  DQueryAllInits,
  DQueryAllNames,
  DQueryBid,
  DQueryForSale,
  DQueryInit,
  DQueryListOwnedNames,
  DQueryName,
  DQueryRnsParams
} from '@/types/queries'
import type {
  TQueryAllBidsResponseStrict,
  TQueryAllForSaleResponseStrict,
  TQueryAllInitsResponseStrict,
  TQueryAllNamesResponseStrict,
  TQueryBidResponseStrict,
  TQueryForSaleResponseStrict,
  TQueryInitResponseStrict,
  TQueryListOwnedNamesResponseStrict,
  TQueryNameResponseStrict,
  TQueryRnsParamsResponseStrict
} from '@/types/queries/responses'
import { IRnsExtension } from '@/interfaces/snackages/IRnsExtension'

export function createRnsExtension(base: QueryClient): IRnsExtension {
  const rpc = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpc)

  return {
    rns: {
      allBids: async (request: DQueryAllBids): Promise<TQueryAllBidsResponseStrict> => {
        const resp = await queryService
          .AllBids(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [RNS] allBids: ${err}`)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllBidsResponseStrict
      },
      allForSale: async (request: DQueryAllForSale): Promise<TQueryAllForSaleResponseStrict> => {
        const resp = await queryService
          .AllForSale(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [RNS] allForSale: ${err}`)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllForSaleResponseStrict
      },
      allInits: async (request: DQueryAllInits): Promise<TQueryAllInitsResponseStrict> => {
        const resp = await queryService
          .AllInits(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [RNS] allInits: ${err}`)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllInitsResponseStrict
      },
      allNames: async (request: DQueryAllNames): Promise<TQueryAllNamesResponseStrict> => {
        const resp = await queryService
          .AllNames(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [RNS] allNames: ${err}`)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryAllNamesResponseStrict
      },
      bid: async (request: DQueryBid): Promise<TQueryBidResponseStrict> => {
        const resp = await queryService
          .Bid(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [RNS] bid: ${err}`)
            throw err
          })
        assertDefined(resp.bids)
        return resp as TQueryBidResponseStrict
      },
      forSale: async (request: DQueryForSale): Promise<TQueryForSaleResponseStrict> => {
        const resp = await queryService
          .ForSale(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [RNS] forSale: ${err}`)
            throw err
          })
        assertDefined(resp.forSale)
        return resp as TQueryForSaleResponseStrict
      },
      init: async (request: DQueryInit): Promise<TQueryInitResponseStrict> => {
        const resp = await queryService
          .Init(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [RNS] init: ${err}`)
            throw err
          })
        assertDefined(resp.init)
        return resp as TQueryInitResponseStrict
      },
      listOwnedNames: async (request: DQueryListOwnedNames): Promise<TQueryListOwnedNamesResponseStrict> => {
        const resp = await queryService
          .ListOwnedNames(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [RNS] listOwnedNames: ${err}`)
            throw err
          })
        assertDefined(resp.pagination)
        return resp as TQueryListOwnedNamesResponseStrict
      },
      name: async (request: DQueryName): Promise<TQueryNameResponseStrict> => {
        const resp = await queryService
          .Name(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [RNS] name: ${err}`)
            throw err
          })
        assertDefined(resp.name)
        return resp as TQueryNameResponseStrict
      },
      params: async (request: DQueryRnsParams): Promise<TQueryRnsParamsResponseStrict> => {
        const resp = await queryService
          .Params(request)
          .catch((err) => {
            console.warn(`jackal.js-protos - [RNS] params: ${err}`)
            throw err
          })
        assertDefined(resp.params)
        return resp as TQueryRnsParamsResponseStrict
      }
    }
  }
}
