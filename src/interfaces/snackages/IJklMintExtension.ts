import {
  DQueryInflation,
  DQueryJklMintParams,
  TQueryInflationResponseStrict,
  TQueryJklMintParamsResponseStrict
} from '@/types/queries'

export interface IJklMintExtension {
  readonly jklMint: {
    readonly inflation: (request: DQueryInflation) => Promise<TQueryInflationResponseStrict>
    readonly params: (request: DQueryJklMintParams) => Promise<TQueryJklMintParamsResponseStrict>
  }
}
