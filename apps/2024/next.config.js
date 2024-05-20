/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // fix the rewrites bug
  async rewrites() {
    return [
      {
        source: "/2023/:path*",
        destination: `${process.env.NODE_ENV
          === "development" ? "http://localhost:3002" : "https://ug.pycon.org"
        }/:path*`,
      },
      {
        source: "/2023",
        destination: `${process.env.NODE_ENV
          === "development" ? "http://localhost:3002" : "https://ug.pycon.org"
        }/:path*`,
      },
      {
        source: "/2024/:path*",
        destination: `${process.env.NODE_ENV
          === "development" ? "http://localhost:3001" : "https://ug.pycon.org"
        }/:path*`,
      },
      {
        source: "/:path*",
        destination: `${process.env.NODE_ENV
          === "development" ? "http://localhost:3001" : "https://ug.pycon.org"
        }/:path*`,
      },
    ];
  },
};
