"use client"

import { Box } from "@chakra-ui/react"
import { useGramSetup, useIsFullScreen } from "@xw3/maki-ts"
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export interface GramLayoutProps {
  theme?: any, 
  children?: React.ReactNode
}

export const GramLayout = ({ children, theme }: GramLayoutProps) => {
  useGramSetup()
  return (
    <Box maxW="4xl" mx="auto" bg="#fff" _dark={{ bg: '#000' }} transition="all 100ms ease" pos="relative" h="100vh" pt={useIsFullScreen() ? 90 : 4} className={geist.className} {...theme?.layout}>
      {children}
    </Box>
  )
}