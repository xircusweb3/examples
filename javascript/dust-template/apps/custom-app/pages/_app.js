import Head from "next/head"
import { setupTonSDK } from "@xircus-web3/ton-react"
import { DustProvider } from "@xircus-web3/dust"
import { DustChakraProvider, DustEditor } from "@xircus-web3/dust-chakra"
import { COMMON_DEFS, NAV_DEFS, DustEditorPublisher } from "@xircus-web3/dust-chakra-ton"
import { LAYOUTS, ALL_DEFS, QuestPreset } from "@dust/template"

const sdk = setupTonSDK('mainnet', {})

const UI_DEFS = {
  ...COMMON_DEFS,
  ...NAV_DEFS,
  ...ALL_DEFS,
}

export default function DustApp({ router }) {
  return (
     <DustProvider
       sdk={sdk}
       app={QuestPreset}
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