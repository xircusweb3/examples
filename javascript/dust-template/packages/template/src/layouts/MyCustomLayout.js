import { BaseGramLayout, NAV_HEADERS, NAV_FOOTERS } from "@xircus-web3/dust-chakra-ton"
import { WEB3_SECTIONS } from "../blocks-section"

export const MyCustomLayout = () => {
  return (
    <BaseGramLayout 
      sections={{ ...WEB3_SECTIONS }}
      headers={{ ...NAV_HEADERS }}
      footers={{ ...NAV_FOOTERS }}
      />
  )
}