import { XircusProvider } from '@xircus-web3/react'

function MyApp({ Component, pageProps }) {
  return (
    <XircusProvider>
      <Component {...pageProps} />
    </XircusProvider>
  )
}

export default MyApp
