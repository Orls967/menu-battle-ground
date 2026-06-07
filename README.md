# Menu Battle Ground (MBG)

## Overview

Menu Battle Ground (MBG) is a decentralized voting application built on the Stellar Soroban Smart Contract platform.

The application allows users to connect their Freighter Wallet and vote for their favorite menu item. Every vote is recorded directly on the Stellar blockchain through a Soroban smart contract, ensuring transparency, security, and immutability.

---

## Features

- Freighter Wallet integration
- On-chain voting using Soroban Smart Contracts
- Real-time leaderboard
- Decentralized vote storage
- React-based user interface
- Stellar Testnet deployment

---

## Available Menus

- Ayam Geprek
- Mie Ayam
- Bakso
- Es Teh

---

## Live Demo

https://menu-battle-ground.vercel.app/

---

## Smart Contract Information

### Contract ID

CAKA636NFFHH75IY2JTEJNS7TLSHCB4RAETPOLFB5GIRAXR4NLNBID6C

### Network

Stellar Mainnet

### Read Functions

- get_geprek()
- get_mie()
- get_bakso()
- get_esteh()

### Write Functions

- vote_geprek()
- vote_mie()
- vote_bakso()
- vote_esteh()

---

## Technology Stack

- Stellar Soroban
- Rust
- React
- Vite
- Stellar Contracts Kit (SCK)
- Freighter Wallet

---

## How It Works

1. Connect a Freighter Wallet.
2. Select a menu item.
3. Sign the transaction through Freighter.
4. The smart contract records the vote on Stellar Testnet.
5. The leaderboard updates automatically with the latest vote count.

---

## Project Structure

text menu-battle-ground │ ├── contracts │   └── hello-world │       ├── src │       │   ├── lib.rs │       │   └── test.rs │       ├── Cargo.toml │       └── Makefile │ ├── contracts/hello-world/frontend │   ├── src │   ├── contracts │   ├── public │   └── package.json │ ├── Cargo.toml └── README.md 

---

## Frontend Screenshot

Menu Battle Ground Screenshot

---

## Example Result

text Ayam Geprek : 1 Mie Ayam    : 0 Bakso       : 0 Es Teh      : 0 

The result above demonstrates that votes are successfully stored and retrieved from the Stellar Testnet blockchain.

---

## Author

Orlando Sugian

Information Technology Student

Universitas Lambung Mangkurat

---

## Workshop Submission

This project was developed as part of the Stellar Smart Contract Workshop and demonstrates:

- Soroban Smart Contract Development
- Stellar Testnet Deployment
- Freighter Wallet Integration
- React Frontend Development
- On-chain Data Storage
- Decentralized Voting Mechanism