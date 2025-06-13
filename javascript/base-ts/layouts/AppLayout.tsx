import React from "react"
import { Box } from "@chakra-ui/react"
import { TbShoppingBag, TbUser, TbWorld } from "react-icons/tb"
// import { ControlNavBar, GramLayout, GramLayoutProps } from "@xw3/maki-ts-chakra"
import { geist } from "@/theme/font"
import { NavBar } from "@/components/NavBar"
import { GramLayout } from "./GramLayout"

export const AppLayout = ({ children, onRefresh, ...props }: any) => {
  const routes = [
    {
      path: '/',
      label: 'Discover',
      renderIcon: () => <TbWorld />
    },
    {
      path: '/shop',
      label: 'Shop',
      renderIcon: () => <TbShoppingBag />
    },
    {
      path: '/account',
      label: 'Account',
      renderIcon: () => <TbUser  />
    },
  ]

  return (
    <GramLayout className={geist.className} onRefresh={onRefresh} {...props}>
      <Box as="main">
        {children}
      </Box>
      <Box as="nav" bottom={0} w="full" pos="fixed" bg="#fff" _dark={{ bg: '#000' }} maxW="4xl">
        <NavBar 
          routes={routes}
          theme={{
            navs: { },
            nav: { pt: 1, gap: 0, _dark: { color: 'gray.400' } },
            navActive: { _dark: { color: 'white', textShadow: '0px 0px 15px #fff' } },
            navLabel: { fontSize: '10px', display: 'block' }
          }}
          />
      </Box>
    </GramLayout>
  )
}