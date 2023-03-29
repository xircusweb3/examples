import Head from 'next/head'
import { ChangeNetwork, ConnectModal, DisconnectButton, Wallet } from '@xircus-web3/components'
import { Box, Container, Heading, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Xircus | with Components</title>
        <meta name="description" content="Template created by Xircus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <VStack h="100vh" justify="center">
          <Heading>Xircus with Components</Heading>
          <ConnectModal>
            <Wallet />
            <DisconnectButton>Disconnect</DisconnectButton>
            <ChangeNetwork maxW="300px" />
            <Box>
              This is a wallet gated content
            </Box>
          </ConnectModal>
        </VStack>
      </Container>
    </>
  )
}
