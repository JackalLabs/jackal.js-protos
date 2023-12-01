import type { Feed } from '@/postGen/canine_chain/oracle/feed'

/**
 * Feed Documentation
 * @prop {string} owner - Jackal address of wallet creator.
 * @prop {string} data - Source for oracle feed.
 * @prop {Date | undefined} lastUpdate - Date of last update, undefined until MsgUpdateFeed is used.
 * @prop {string} name - Unique identifier of feed.
 */
export type DFeed = Documentation<{
  owner: string;
  data: string;
  lastUpdate: Date | undefined;
  name: string;
}, Feed>
