import type { Files } from '@/postgen/canine_chain/filetree/files'
import type { Pubkey } from '@/postgen/canine_chain/filetree/pubkey'

export type DFiles = Documentation<{
  address: string;
  contents: string;
  owner: string;
  viewingAccess: string;
  editAccess: string;
  trackingNumber: string;
}, Files>

export type DPubkey = Documentation<{
  address: string;
  key: string;
}, Pubkey>
