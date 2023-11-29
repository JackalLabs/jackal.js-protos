import { Feed } from '@/postgen/canine_chain/oracle/feed'

export type DFeed = Documentation<{
  owner: string;
  data: string;
  lastUpdate: Date | undefined;
  name: string;
}, Feed>
