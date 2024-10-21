import Script from "next/script";
import { Box, ChakraProvider, Spinner } from "@chakra-ui/react";
import { MakiProvider, useInitApp } from "@xw3/maki";
import theme from "@/theme";
import { TEST_CHAT_DATA } from "@/constants/testData";
import { XircusLoader } from '@xw3/maki-chakra'

const API_URL = process?.env?.NEXT_PUBLIC_API_URL
const IS_PROD = process.env.NEXT_PUBLIC_ENV == 'production'

export default function App({ Component, pageProps, router }) {
  const { app, loading, onReady, gram } = useInitApp(API_URL)

  if (loading || !app) {
    return <XircusLoader />
  }

  return (
    <MakiProvider
      app={app}
      chatData={IS_PROD ? null : TEST_CHAT_DATA}      
      gram={gram}
      router={router} 
      apiUrl={API_URL}>
      <Script src="https://telegram.org/js/telegram-web-app.js" id="telegram" onReady={onReady} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </MakiProvider>
  )
}
