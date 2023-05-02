/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
