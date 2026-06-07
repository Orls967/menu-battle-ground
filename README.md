# Menu Battle Ground (MBG)

Menu Battle Ground (MBG) is a decentralized voting application built on the Stellar Soroban Smart Contract platform. Users can connect their Freighter Wallet and vote for their favorite menu directly on the Stellar Testnet blockchain.

All voting data is stored on-chain through a smart contract, ensuring transparency and immutability.

---

## Features

- Connect wallet using Freighter Wallet
- Vote for your favorite food or drink
- Store votes on Stellar Testnet Blockchain
- Real-time leaderboard display
- Smart contract interaction using Soroban
- React-based frontend interface

---

## Available Menus

- Ayam Geprek
- Mie Ayam
- Bakso
- Es Teh

---

## Smart Contract Information

### Contract ID

```text
CAFBSSDUIFAHPTJJW4MCESAQKYBSUCGE6J4WPLZYBBQVGT6XXU3JPZTD
```

### Network

```text
Stellar Testnet
```

### Contract Functions

#### Read Functions

- get_geprek()
- get_mie()
- get_bakso()
- get_esteh()

#### Write Functions

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

1. User connects their Freighter Wallet.
2. User selects a menu item.
3. A transaction is signed through Freighter Wallet.
4. The smart contract records the vote on Stellar Testnet.
5. The leaderboard updates with the latest vote count.

---

## Project Structure

```text
menu-battle-ground
│
├── contracts
│   └── hello-world
│       ├── src
│       │   ├── lib.rs
│       │   └── test.rs
│       ├── Cargo.toml
│       └── Makefile
│
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── contracts
│   │   └── mbgcontract.ts
│   └── package.json
│
├── Cargo.toml
└── README.md
```

---

## Frontend Screenshot

### Main Interface

Add your application screenshot below:

![Menu Battle Ground Screenshot](./screenshot.png)

---

## Demo Result

Example leaderboard:

```text
Ayam Geprek : 1
Mie Ayam    : 0
Bakso       : 0
Es Teh      : 0
```

This demonstrates that votes are successfully stored and retrieved from the Stellar Testnet blockchain.

---

## Author

Orlando Sugian

Information Technology Student

Universitas Lambung Mangkurat

---

## Workshop Submission

This project was developed as part of the Stellar Smart Contract Workshop and demonstrates:

- Smart Contract Development using Soroban
- Smart Contract Deployment on Stellar Testnet
- Wallet Integration with Freighter
- Frontend Integration using React
- On-chain Data Storage and Retrieval