/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'swiperjs.com',
      }
    ],
  },
}

module.exports = nextConfig
