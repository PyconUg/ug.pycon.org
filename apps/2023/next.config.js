/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
