import type { Names } from '@/postgen/canine_chain/rns/names'
import type { Bids } from '@/postgen/canine_chain/rns/bids'
import type { Forsale } from '@/postgen/canine_chain/rns/forsale'
import type { Init } from '@/postgen/canine_chain/rns/init'

/**
 * Name Documentation
 * @prop {string} name - RNS name without extension.
 * @prop {number} expires - Registration expiration as block height.
 * @prop {string} value - Jackal wallet address of owner.
 * @prop {string} data - Stringified JSON object of arbitrary data.
 * @prop {DName[]} subdomains - RNS sub-instances.
 * @prop {string} tld - Extension of RNS, only supports .jkl and this time.
 * @prop {number} locked - 0 if unlocked, > 0 otherwise.
 * */
export type DName = Documentation<{
  name: string;
  expires: number;
  value: string;
  data: string;
  subdomains: DName[];
  tld: string;
  locked: number;
}, Names>

/**
 * Bid Documentation
 * @prop {string} index - Index of bid in list of bids for RNS name.
 * @prop {string} name - Name of RNS.
 * @prop {string} bidder - Jackal wallet address of bid creator.
 * @prop {string} price - Value of bid in ujkl, for example 200ujkl.
 */
export type DBid = Documentation<{
  index: string;
  name: string;
  bidder: string;
  price: string;
}, Bids>

/**
 * Forsale Documentation
 * @prop {string} name - Name of RNS.
 * @prop {string} price - List price of name in ujkl, for example 200ujkl.
 * @prop {string} owner - Jackal wallet address of owner.
 */
export type DForsale = Documentation<{
  name: string;
  price: string;
  owner: string;
}, Forsale>

/**
 * Init Documentation
 * @prop {string} address - Jackal wallet addressx.
 * @prop {string} complete - True if wallet has created a RNS account.
 */
export type DInit = Documentation<{
  address: string;
  complete: boolean;
}, Init>
