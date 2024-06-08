import { BaseGramLayout, NAV_HEADERS, NAV_FOOTERS } from "@xircus-web3/dust-chakra-ton"
import { GUARD_SECTIONS } from '../blocks-guard'

export const ManekiQuestLayout = () => {
  return (
    <BaseGramLayout 
      sections={{ ...GUARD_SECTIONS }}
      headers={{ ...NAV_HEADERS }}
      footers={{ ...NAV_FOOTERS }}
      />
  )
}