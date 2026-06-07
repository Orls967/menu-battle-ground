import { useEffect, useState } from 'react'
import './App.css'

import { StellarContractsKit } from 'stellar-contracts-kit'
import { CONTRACT_ID } from '../contracts/mbgcontract'
import '../contracts/mbgcontract'

const kit = new StellarContractsKit({
  network: 'testnet',
})

function App() {
  const [contract, setContract] = useState(null)

  const [geprek, setGeprek] = useState(0)
  const [mie, setMie] = useState(0)
  const [bakso, setBakso] = useState(0)
  const [esteh, setEsteh] = useState(0)

  async function loadVotes(client) {
    try {
      const { result: geprekVote } =
        await client.get_geprek.read()

      const { result: mieVote } =
        await client.get_mie.read()

      const { result: baksoVote } =
        await client.get_bakso.read()

      const { result: estehVote } =
        await client.get_esteh.read()

      setGeprek(Number(geprekVote))
      setMie(Number(mieVote))
      setBakso(Number(baksoVote))
      setEsteh(Number(estehVote))
    } catch (err) {
      console.error(err)
    }
  }

  async function connectWallet() {
    try {
      await kit.connect()

      const client =
        await kit.contract(CONTRACT_ID)

      setContract(client)

      await loadVotes(client)
    } catch (err) {
      console.error(err)
    }
  }

  async function voteGeprek() {
    if (!contract) return

    await contract.vote_geprek.invoke()
    await loadVotes(contract)
  }

  async function voteMie() {
    if (!contract) return

    await contract.vote_mie.invoke()
    await loadVotes(contract)
  }

  async function voteBakso() {
    if (!contract) return

    await contract.vote_bakso.invoke()
    await loadVotes(contract)
  }

  async function voteEsteh() {
    if (!contract) return

    await contract.vote_esteh.invoke()
    await loadVotes(contract)
  }

  useEffect(() => {
    connectWallet()
  }, [])

  return (
    <div className="container">
      <h1>🍜 Menu Battle Ground (MBG)</h1>

      <p>Voting menu favorit berbasis Stellar Blockchain</p>

      <button
        style={{ marginBottom: '20px' }}
        onClick={connectWallet}
      >
        Connect Wallet
      </button>

      <div className="menu">
        <button onClick={voteGeprek}>
          Vote Ayam Geprek
        </button>

        <button onClick={voteMie}>
          Vote Mie Ayam
        </button>

        <button onClick={voteBakso}>
          Vote Bakso
        </button>

        <button onClick={voteEsteh}>
          Vote Es Teh
        </button>
      </div>

      <div className="result">
        <h2>Leaderboard</h2>

        <p>Ayam Geprek : {geprek}</p>
        <p>Mie Ayam : {mie}</p>
        <p>Bakso : {bakso}</p>
        <p>Es Teh : {esteh}</p>
      </div>
    </div>
  )
}

export default App