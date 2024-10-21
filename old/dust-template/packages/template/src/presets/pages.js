import { createDefsWithKey } from '@xircus-web3/dust'
import { WEB3_DEFS } from '../blocks-section'

const pages = {
  '/': [
    createDefsWithKey(WEB3_DEFS.Jetton)
  ]
}

export default pages