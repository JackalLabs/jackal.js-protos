/* eslint-disable */

export const protobufPackage = "jackaldao.canine.static";

/** Msg defines the Msg service. */
export interface SdkStatic {
}

export class SdkStaticClientImpl implements SdkStatic {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "jackaldao.canine.static.SdkStatic";
    this.rpc = rpc;
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
