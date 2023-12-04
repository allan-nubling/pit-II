/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "nubling-dev.s3.amazonaws.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost", "pit2.nubling.dev"],
    },
  },
};

module.exports = nextConfig;
