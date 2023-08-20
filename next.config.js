/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/tickets',
        destination: 'https://qkt.io/w31vDE',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
