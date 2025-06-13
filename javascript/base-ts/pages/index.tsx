import { AppLayout } from "@/layouts/AppLayout";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useWallet } from "@xw3/maki-ts";

export default function Index() {
  const wallet = useWallet()

  return (
    <AppLayout>
      <Box px={4}>
        <Heading>Base</Heading>        
        <Box>{wallet.address}</Box>
        <Button onClick={wallet.connect}>Connect</Button>
      </Box>
    </AppLayout>
  )
}
