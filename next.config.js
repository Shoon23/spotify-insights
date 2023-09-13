/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/top-artists",
      },
    ];
  },
};

module.exports = nextConfig;
