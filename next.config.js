/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'unsplash.com',
    },
  ],
}

module.exports = nextConfig
