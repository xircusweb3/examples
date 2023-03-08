import { useWallet, useNetwork } from '@xircus-web3/react'
import { useState } from 'react'

// @xircus-web3/sdk
// lodash
// @walletconnect/ethereum-provider
// @walletconnect/logger

export default function Index() {
  const wallet = useWallet()
  const { network } = useNetwork()
  const [chain, setChain] = useState(1)

  const handleSwitch = () => {
    wallet.switchNetwork(chain)
    // network.switchNetwork(chain)
  }

  if (wallet.status == 'connected') {
    return (
      <div>
        <div>Address: {wallet.account}</div>
        <div>Balance: {wallet.balance}</div>
        <div>Name: {network?.name}</div>
        <div>Symbol: {network?.symbol}</div>
        <div>Decimals: {network?.decimals}</div>
        <div>RPC: {network?.rpc}</div>        
        <div>Explorer: {network?.explorer}</div>    
        <button onClick={wallet.disconnect}>Disconnect</button>
        <div>
          <select onChange={({ target: { value } }) => setChain(value)}>
            {
              (wallet.chains || []).map(chain => 
                <option 
                  key={chain.short} 
                  value={chain.networkId}>
                  {chain.name}
                </option>
              )
            }
          </select>
          <div>Selected Chain ID: {chain}</div>
          <button onClick={handleSwitch}>Switch Network</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <button onClick={wallet.connectMetamask}>Metamask</button>
      <button onClick={wallet.connectWalletConnect}>Wallet Connect</button>      
      <button onClick={wallet.connectCoinbase}>Coinbase</button>            
    </div>
  )
}
