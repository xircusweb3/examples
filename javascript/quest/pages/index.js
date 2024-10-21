import { AppLayout } from "@/layouts/AppLayout"
import { Heading, VStack } from "@chakra-ui/react"
import { QuestorPoints } from "@xw3/maki-quest"

export default function Home() {
  return (
    <AppLayout>
      <Heading>Home</Heading>
      <VStack>
        <Heading size="md">Total Points</Heading>
        <Heading size="4xl"><QuestorPoints /></Heading>
      </VStack>
    </AppLayout>
  )
}