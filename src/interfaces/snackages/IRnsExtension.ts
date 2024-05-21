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
  DQueryRnsParams,
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
  TQueryRnsParamsResponseStrict,
} from '@/types/queries/responses'

/**
 * @interface IRnsExtension
 * @property {IRnsExtensionMembers} rns
 */
export interface IRnsExtension
  extends Record<string, IRnsExtensionMembers> {
  readonly rns: IRnsExtensionMembers
}

/**
 * All functions for querying data from the RNS module.
 *
 * @interface IRnsExtensionMembers
 * @property {allBids} allBids()
 * @property {allForSale} allForSale()
 * @property {allInits} allInits()
 * @property {allNames} allNames()
 * @property {bid} bid()
 * @property {forSale} forSale()
 * @property {init} init()
 * @property {listOwnedNames} listOwnedNames()
 * @property {name} name()
 * @property {params} params()
 */
export interface IRnsExtensionMembers
  extends Record<string, (request?: any) => Promise<any>> {
  /**
   * @function allBids
   * @param {DQueryAllBids} [request]
   * @returns Promise<TQueryAllBidsResponseStrict>
   */
  readonly allBids: (
    request?: DQueryAllBids,
  ) => Promise<TQueryAllBidsResponseStrict>

  /**
   * @function allForSale
   * @param {DQueryAllForSale} [request]
   * @returns Promise<TQueryAllForSaleResponseStrict>
   */
  readonly allForSale: (
    request?: DQueryAllForSale,
  ) => Promise<TQueryAllForSaleResponseStrict>

  /**
   * @function allInits
   * @param {DQueryAllInits} [request]
   * @returns Promise<TQueryAllInitsResponseStrict>
   */
  readonly allInits: (
    request?: DQueryAllInits,
  ) => Promise<TQueryAllInitsResponseStrict>

  /**
   * @function allNames
   * @param {DQueryAllNames} [request]
   * @returns Promise<TQueryAllNamesResponseStrict>
   */
  readonly allNames: (
    request?: DQueryAllNames,
  ) => Promise<TQueryAllNamesResponseStrict>

  /**
   * @function bid
   * @param {DQueryBid} request
   * @returns Promise<TQueryBidResponseStrict>
   */
  readonly bid: (request: DQueryBid) => Promise<TQueryBidResponseStrict>

  /**
   * @function forSale
   * @param {DQueryForSale} request
   * @returns Promise<TQueryForSaleResponseStrict>
   */
  readonly forSale: (
    request: DQueryForSale,
  ) => Promise<TQueryForSaleResponseStrict>

  /**
   * @function init
   * @param {DQueryInit} request
   * @returns Promise<TQueryInitResponseStrict>
   */
  readonly init: (request: DQueryInit) => Promise<TQueryInitResponseStrict>

  /**
   * @function listOwnedNames
   * @param {DQueryListOwnedNames} request
   * @returns Promise<TQueryListOwnedNamesResponseStrict>
   */
  readonly listOwnedNames: (
    request: DQueryListOwnedNames,
  ) => Promise<TQueryListOwnedNamesResponseStrict>

  /**
   * @function name
   * @param {DQueryName} request
   * @returns Promise<TQueryNameResponseStrict>
   */
  readonly name: (request: DQueryName) => Promise<TQueryNameResponseStrict>
  /**
   * @function params
   * @param {DQueryRnsParams} [request]
   * @returns Promise<TQueryRnsParamsResponseStrict>
   */
  readonly params: (
    request?: DQueryRnsParams,
  ) => Promise<TQueryRnsParamsResponseStrict>
}
