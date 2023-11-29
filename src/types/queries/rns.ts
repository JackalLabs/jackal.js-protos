import type { PageRequest } from '@/postgen/cosmos/base/query/v1beta1/pagination'
import {
  QueryAllBids,
  QueryAllForSale,
  QueryAllInits,
  QueryAllNames,
  QueryBid,
  QueryForSale,
  QueryInit,
  QueryListOwnedNames,
  QueryName,
  QueryParams
} from '@/postgen/canine_chain/rns/query'
import { DName } from '@/types'

export type DQueryAllBids = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllBids>

export type DQueryAllForSale = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllForSale>

export type DQueryAllInits = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllInits>

export type DQueryAllNames = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllNames>

export type DQueryBid = Documentation<{
  name: string;
}, QueryBid>

export type DQueryForSale = Documentation<{
  name: string;
}, QueryForSale>

export type DQueryInit = Documentation<{
  address: string;
}, QueryInit>

export type DQueryListOwnedNames = Documentation<{
  names: DName[];
  pagination: PageRequest | undefined;
}, QueryListOwnedNames>

export type DQueryName = Documentation<{
  name: string;
}, QueryName>

export type DQueryRnsParams = Documentation<{}, QueryParams>
