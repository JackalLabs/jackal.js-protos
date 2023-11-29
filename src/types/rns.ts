import { Names } from '@/postgen/canine_chain/rns/names'
import { Bids } from '@/postgen/canine_chain/rns/bids'
import { Forsale } from '@/postgen/canine_chain/rns/forsale'
import { Init } from '@/postgen/canine_chain/rns/init'

export type DName = Documentation<{
  name: string;
  expires: number;
  value: string;
  data: string;
  subdomains: DName[];
  tld: string;
  locked: number;
}, Names>

export type DBid = Documentation<{
  index: string;
  name: string;
  bidder: string;
  price: string;
}, Bids>

export type DForsale = Documentation<{
  name: string;
  price: string;
  owner: string;
}, Forsale>

export type DInit = Documentation<{
  address: string;
  complete: boolean;
}, Init>
