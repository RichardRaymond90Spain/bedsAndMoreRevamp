/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bedsandmore.es',
      }
    ]
  },
  basePath: '/bedsAndMoreRevamp',
  assetPrefix: '/bedsAndMoreRevamp/',
  trailingSlash: true,
}

module.exports = nextConfig 