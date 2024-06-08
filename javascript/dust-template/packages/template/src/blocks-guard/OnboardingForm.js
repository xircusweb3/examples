import { useDustComponent, FormInput } from "@xircus-web3/dust-chakra-common"
import { Box, Heading } from "@chakra-ui/react"

export const OnboardingForm = () => {
  const { data, theme } = useDustComponent()

  return (
    <Box p={10} bg="black" {...theme?.wrap}>
      <Heading mb={8} {...theme?.title}>{data?.title}</Heading>
      <FormInput 

      />
    </Box>
  )
}