/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@xircus-web3/dust',
    '@xircus-web3/dust-chakra',
    '@xircus-web3/dust-chakra-common',
    '@xircus-web3/dust-chakra-ton',
    '@xircus-web3/ton-react',
    '@xircus-web3/graph-ton',    
    '@maneki/dust-premium'
  ]
};

export default nextConfig;
