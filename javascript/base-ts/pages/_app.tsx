import { Provider } from "@/components/ui/provider";
import { AppLoader } from "@/layouts/AppLoader";
import { MakiProvider, useInitGram } from "@xw3/maki-ts";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

const CHAT_STRING = process?.env?.NEXT_PUBLIC_CHAT_STRING

export default function App({ Component, pageProps }: AppProps) {
  const { gram, onReady } = useInitGram()

  return (
    <MakiProvider 
      gram={gram}
      chatDataString={CHAT_STRING}
      apis={{
        auth: 'https://iam.xircus.co',
        notifs: 'https://notifications.xircus.co/graph'
      }}>
      <Script src="https://telegram.org/js/telegram-web-app.js" id="telegram" onReady={onReady} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Provider>
        {
          gram
          ? <Component {...pageProps} />
          : <AppLoader />
        }
      </Provider>
    </MakiProvider>
  )
}
