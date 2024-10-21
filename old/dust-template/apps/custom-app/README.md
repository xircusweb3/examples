## Custom App Template

This template is design to create custom templates with web2 or web3 functionality.

This template can be published as an npm library and sellable/shareable in the Xircus skin marketplace.

This template can be integrated by any hosting provider or you can spin your own hosting instance to let app owners use your custom template using subscription contracts

> Authentication not functional as GraphQL API is not setup yet.

### The Xircus SDK

- @xircus-web3/dust-chakra-common -- contains basic ui components and blocks that you can use for your apps
- @xircus-web3/dust-chakra-ton -- contains web3 components and blocks that you can use for your apps
- @xircus-web3/ton-react -- contains hooks that allows you to transact with TON blockchain, TON apis, wallet providers, smart contracts, and upload to decentralized storage
- @xircus-web3/graph-ton -- optional unless you want instant GraphQL api following Xircus schema

### Running your custom app

1. Install dependencies from **root**
```
yarn
```

2. Run the custom app from **/apps/custom-app**
```
yarn dev
```

3. Start adding UI blocks in **/packages/template**
4. To begin, go to **/pages/template/presets/Quest.js**
5. Change the **ownerAddr** to your own TON wallet address so you can see the editing controls
6. To extract the app configuration after you added blocks, you can use

```
import { useDustApp } from "@xircus-web3/dust"
const app = useDustApp()
```


### Anatomy of a template
- layouts -- contains the layouts whose names are reference inside a preset file
- blocks -- contains all the blocks that implements the DustComponent
- components -- contains reusable components for blocks
- hooks -- contains the react hooks
- presets -- contains the data definition of the app 
- services -- contains api methods



### Variants of Template Layout
- GramLayout -- Telegram Mini app template layout, allows you to use telegram native functions, provides you with telegram user metadata on load via **onTelegram** property
- GemLayout -- TON Web app template layout, doesn't have telegram native functions