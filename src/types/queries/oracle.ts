import type { PageRequest } from '@/postgen/cosmos/base/query/v1beta1/pagination'
import { QueryAllFeeds, QueryFeed, QueryParams } from '@/postgen/canine_chain/oracle/query'

export type DQueryAllFeeds = Documentation<{
  pagination: PageRequest | undefined;
}, QueryAllFeeds>

export type DQueryFeed = Documentation<{
  name: string;
}, QueryFeed>

export type DQueryOracleParams = Documentation<{}, QueryParams>
