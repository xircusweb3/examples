import Head from "next/head"
import { setupTonSDK } from "@xircus-web3/ton-react"
import { DustProvider } from "@xircus-web3/dust"
import { DustChakraProvider, DustEditor } from "@xircus-web3/dust-chakra"
import { COMMON_DEFS, NAV_DEFS, DustEditorPublisher, NAV_HEADERS, NAV_FOOTERS, BaseGramLayout } from "@xircus-web3/dust-chakra-ton"
import { LAYOUTS, GUARD_DEFS, QuestPreset } from "@maneki/dust-premium"

const sdk = setupTonSDK('mainnet', {})

const UI_DEFS = {
  ...COMMON_DEFS,
  ...NAV_DEFS,
  ...GUARD_DEFS,
}

const app = QuestPreset

export default function DustApp({ router }) {
  return (
     <DustProvider
       sdk={sdk}
       app={app}
       router={router} 
       uiDefs={UI_DEFS}
       head={Head}>
       <DustChakraProvider layouts={LAYOUTS}>
         <DustEditor>
           <DustEditorPublisher />
         </DustEditor>
       </DustChakraProvider>
     </DustProvider>     
    )
}