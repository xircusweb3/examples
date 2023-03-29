import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { XircusProvider } from '@xircus-web3/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <XircusProvider>
        <Component {...pageProps} />
      </XircusProvider>
    </ChakraProvider>
  )
}

export default MyApp