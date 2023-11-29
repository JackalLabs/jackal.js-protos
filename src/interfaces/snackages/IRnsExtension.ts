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

export interface IRnsExtension {
  readonly rns: {
    readonly allBids: (request: DQueryAllBids) => Promise<TQueryAllBidsResponseStrict>
    readonly allForSale: (request: DQueryAllForSale) => Promise<TQueryAllForSaleResponseStrict>
    readonly allInits: (request: DQueryAllInits) => Promise<TQueryAllInitsResponseStrict>
    readonly allNames: (request: DQueryAllNames) => Promise<TQueryAllNamesResponseStrict>
    readonly bid: (request: DQueryBid) => Promise<TQueryBidResponseStrict>
    readonly forSale: (request: DQueryForSale) => Promise<TQueryForSaleResponseStrict>
    readonly init: (request: DQueryInit) => Promise<TQueryInitResponseStrict>
    readonly listOwnedNames: (request: DQueryListOwnedNames) => Promise<TQueryListOwnedNamesResponseStrict>
    readonly name: (request: DQueryName) => Promise<TQueryNameResponseStrict>
    readonly params: (request: DQueryRnsParams) => Promise<TQueryRnsParamsResponseStrict>
  }
}
