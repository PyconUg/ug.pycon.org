/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "resources.jetbrains.com"
    ]
  },
  async redirects() {
    return [
      {
        source: '/tickets',
        destination: 'https://qkt.io/w31vDE',
        permanent: true,
      },
      {
        source: '/',
        destination: '/2024',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
