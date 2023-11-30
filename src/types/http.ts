import type { HttpEndpoint } from '@cosmjs/tendermint-rpc'

/**
 * HttpEndpoint Documentation
 * @prop {string} url - The URL of the HTTP endpoint.
 * @prop {Record<string, string>} headers - HTTP headers that are sent with every request.
 */
export type DHttpEndpoint = Documentation<{
  readonly url: string;
  readonly headers: Record<string, string>;
}, HttpEndpoint>
