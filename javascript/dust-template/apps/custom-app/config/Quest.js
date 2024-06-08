import { createDefsWithKey } from '@xircus-web3/dust'
import { NAV_DEFS } from '@xircus-web3/dust-chakra-ton'

export const Quest = {
  _id: "63bec740f2ed4d2ffe1a4a2b",
  name: "Quest",
  url: "quest",
  ownerAddr: 'UQAoDVyWY8JNOojERBXbm6VYIXGkdlrVSZqqC4lGOo8z9gIt',
  logo: "QmW97LciiMi119ddBnCwXPACUEF4N7QchXLRkW8drcfHH4",
  theme: {
    config: {
      initialColorMode: "dark",
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
  pages: {
    '/': []
  },
  layout: {
    variant: 'ManekiQuestLayout',
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
    { name: "title", content: "Maneki Neko" },
  ]
};
