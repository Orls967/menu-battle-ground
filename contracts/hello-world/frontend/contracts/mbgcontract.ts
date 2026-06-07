import type { ContractMethodFn } from 'stellar-contracts-kit'

// Contract Interface

export interface MBGContract {
  get_mie: ContractMethodFn<number, []>
  vote_mie: ContractMethodFn<void, []>
  get_bakso: ContractMethodFn<number, []>
  get_esteh: ContractMethodFn<number, []>
  get_geprek: ContractMethodFn<number, []>
  vote_bakso: ContractMethodFn<void, []>
  vote_esteh: ContractMethodFn<void, []>
  vote_geprek: ContractMethodFn<void, []>
}

export const CONTRACT_ID = 'CAKA636NFFHH75IY2JTEJNS7TLSHCB4RAETPOLFB5GIRAXR4NLNBID6C' as const
