export default {
  name: 'definixswap',
  timestamp: '2020-08-25T15:41:29.665Z',
  version: {
    major: 1,
    minor: 3,
    patch: 1
  },
  tags: {},
  logoURI: '/images/coins/wbnb.png',
  keywords: ['definix', 'default'],
  tokens: [
    {
      name: 'FINIX Token',
      symbol: 'FINIX',
      address: process.env.REACT_APP_FINIX_ADDRESS_TESTNET,
      chainId: 97,
      decimals: 18,
      logoURI: '/images/coins/FINIX.png'
    },
    {
      name: 'SIX Token',
      symbol: 'SIX',
      address: process.env.REACT_APP_SIX_ADDRESS_TESTNET,
      chainId: 97,
      decimals: 18,
      logoURI: '/images/coins/SIX.png'
    },
    {
      name: 'BUSD Token',
      symbol: 'BUSD',
      address: process.env.REACT_APP_BUSD_ADDRESS_TESTNET,
      chainId: 97,
      decimals: 18,
      logoURI: '/images/coins/BTC.png'
    },
    {
      name: 'USDT Token',
      symbol: 'USDT',
      address: process.env.REACT_APP_USDT_ADDRESS_TESTNET,
      chainId: 97,
      decimals: 18,
      logoURI: '/images/coins/USDT.png'
    },
    {
      name: 'FINIX Token',
      symbol: 'FINIX',
      address: process.env.REACT_APP_FINIX_ADDRESS_MAINNET,
      chainId: 56,
      decimals: 18,
      logoURI: '/images/coins/FINIX.png'
    },
    {
      name: 'SIX Token',
      symbol: 'SIX',
      address: process.env.REACT_APP_SIX_ADDRESS_MAINNET,
      chainId: 56,
      decimals: 18,
      logoURI: '/images/coins/SIX.png'
    },
    {
      name: 'BUSD Token',
      symbol: 'BUSD',
      address: process.env.REACT_APP_BUSD_ADDRESS_MAINNET,
      chainId: 56,
      decimals: 18,
      logoURI: '/images/coins/BTC.png'
    },
    {
      name: 'USDT Token',
      symbol: 'USDT',
      address: process.env.REACT_APP_USDT_ADDRESS_MAINNET,
      chainId: 56,
      decimals: 18,
      logoURI: '/images/coins/USDT.png'
    },
  ]
}
