/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: "https://pit2-api.nubling.dev",
  },
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
};

module.exports = nextConfig;
