import { defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    '::-webkit-scrollbar': {
      height: '0 !important',
      width: '0 !important'
    },
    '*': {
      scrollbar: 'hidden',
    },
    ':root': {
      '--popover-bg': 'orange'
    },
    body: {
      outline: '0px !important',
      h: '100vh',
      overflow: 'hidden',
    },
    '#tc-widget-root': {
      zIndex: 4000,
      pos: 'absolute'
    },
  },
  theme: {
    tokens: {
      fonts: {
        // heading: { value: 'DM Sans' },
        // body: { value: 'DM Sans' },
        // // mono: { value: 'DM Mono' }
      }
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _dark: "#000" }
          },
          panel: {
            value: { _dark: "#040404" }
          },
        },
      }
    }
  }
})

export {
  config
}