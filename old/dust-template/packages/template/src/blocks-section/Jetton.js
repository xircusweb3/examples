import { Box } from "@chakra-ui/react"
import { DustComponent } from "@xircus-web3/dust-chakra-common"

export const JettonDefs = {
  name: 'Jetton',
  label: 'Jetton',
  image: '',
  theme: {
    wrap: {} 
  },
  data: {
    address: ''
  }
}

const fields = {
  address: 'String'
}

const labels = {
  address: 'Jetton Address'
}

export const Jetton = props => {
  return (
    <DustComponent props={props} labels={labels} fields={fields}>
      <Box>Jetton</Box>
    </DustComponent>
  )
}