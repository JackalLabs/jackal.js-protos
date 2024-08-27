import type { Feed } from '@/postGen/canine_chain/oracle/feed'

/**
 * Feed Documentation
 * @prop {string} owner - Jackal address of wallet creator.
 * @prop {string} data - Source for oracle feed.
 * @prop {string} lastUpdate - Stringified Date of last update, defaults to creation date.
 * @prop {string} name - Unique identifier of feed.
 */
export type DFeed = Documentation<
  {
    owner: string
    data: string
    lastUpdate: string
    name: string
  },
  Feed
>

export { Feed }
