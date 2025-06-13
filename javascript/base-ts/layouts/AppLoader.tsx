import { config } from "@/theme"
import { Box, Heading, Spinner, Center, HStack, Text, Image, VStack, ChakraProvider, createSystem, defaultConfig, Stack, Icon } from "@chakra-ui/react"
import { TbApps } from "react-icons/tb"

const system = createSystem(defaultConfig, config)

export const AppLoader = () => {
  return (
    <ChakraProvider value={system}>
      <Box pos="relative" h="100vh" fontWeight="bold" bgSize="cover" bgPos="center center">
        <Center h="100vh">
          <VStack gap={8}>
            <Icon as={TbApps} animation="pulse" fontSize="100px" />
            <HStack>
              <Spinner size="xs" mr={2} />
              <Heading size="sm">Initializing App</Heading>
            </HStack>
          </VStack>      
        </Center>
        <Stack pos="absolute" textAlign="center" bottom={10} left={0} fontSize={12} gap={1} w="full">
          <Text color="whiteAlpha.700">Built on <b>Xircus</b></Text>
        </Stack>
      </Box>
    </ChakraProvider>
  )
}