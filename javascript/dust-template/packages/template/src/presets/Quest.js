import { createDefsWithKey } from '@xircus-web3/dust'
import { NAV_DEFS } from '@xircus-web3/dust-chakra-ton'
import pages from './pages'

export const QuestPreset = {
  appId: '',
  name: 'Quest',
  url: 'quest',
  ownerAddr: 'UQAoDVyWY8JNOojERBXbm6VYIXGkdlrVSZqqC4lGOo8z9gIt', // change to your wallet address
  logo: "QmUdzpZkVQhkogPLA3vBSmGtZ9Sg6G2fnyZnHf7NMKdYbq",
  pages,
  theme: {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    fonts: {
      heading: 'Space Grotesk',
      body: 'Space Grotesk'
    },
    colors: {
      gray: {

      },
      brand: {

      }
    }
  },
  layout: {
    variant: 'MyCustomLayout', // --- change this layout
    theme: {
      wrap: { fontFamily: 'Space Grotesk', _dark: { bg: 'black' } },
      header: {},
      footer: {},
      main: {},
    },
    header: [
      createDefsWithKey(NAV_DEFS.AppHeader, {}, {})
    ],
    footer: [
      createDefsWithKey(NAV_DEFS.AppNavBar, {}, {})
    ],
  },
  locales: {
    en: { "/": { welcome: "Welcome" } },
    zh: { "/": { welcome: "欢迎" } },
    ar: { "/": { welcome: "مرحباً" } },
  },
  fonts: [
    {
      name: "Space Grotesk",
      url: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@100;300;500;700&display=swap",
    },
  ],
  metas: [
    { name: "title", content: "My Custom Template" }, // change to your title
  ]
}
