import '@/styles/globals.css'
import { setupSDK, tonClient } from '@xircus-web3/react'
import { DustProvider } from '@xircus-web3/dust'
import { DustChakraProvider } from '@xircus-web3/dust-chakra'

const sdk = setupSDK('ton', {
  ton: tonClient
})

export default function App({ Component, pageProps, router }) {
  return (
    <DustProvider router={router} app={{}} sdk={sdk}>
      <DustChakraProvider>

      </DustChakraProvider>
    </DustProvider>
  )

  // return <Component {...pageProps} />
}
