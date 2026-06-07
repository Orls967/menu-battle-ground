#![no_std]

use soroban_sdk::{contract, contractimpl, symbol_short, Env, Symbol};

#[contract]
pub struct Contract;

const GEPREK: Symbol = symbol_short!("GEPREK");
const MIE: Symbol = symbol_short!("MIE");
const BAKSO: Symbol = symbol_short!("BAKSO");
const ESTEH: Symbol = symbol_short!("ESTEH");

#[contractimpl]
impl Contract {
    pub fn vote_geprek(env: Env) {
        let count: u32 = env.storage().persistent().get(&GEPREK).unwrap_or(0);
        env.storage().persistent().set(&GEPREK, &(count + 1));
    }

    pub fn vote_mie(env: Env) {
        let count: u32 = env.storage().persistent().get(&MIE).unwrap_or(0);
        env.storage().persistent().set(&MIE, &(count + 1));
    }

    pub fn vote_bakso(env: Env) {
        let count: u32 = env.storage().persistent().get(&BAKSO).unwrap_or(0);
        env.storage().persistent().set(&BAKSO, &(count + 1));
    }

    pub fn vote_esteh(env: Env) {
        let count: u32 = env.storage().persistent().get(&ESTEH).unwrap_or(0);
        env.storage().persistent().set(&ESTEH, &(count + 1));
    }

    pub fn get_geprek(env: Env) -> u32 {
        env.storage().persistent().get(&GEPREK).unwrap_or(0)
    }

    pub fn get_mie(env: Env) -> u32 {
        env.storage().persistent().get(&MIE).unwrap_or(0)
    }

    pub fn get_bakso(env: Env) -> u32 {
        env.storage().persistent().get(&BAKSO).unwrap_or(0)
    }

    pub fn get_esteh(env: Env) -> u32 {
        env.storage().persistent().get(&ESTEH).unwrap_or(0)
    }
}

mod test;