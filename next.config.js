/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ['m.media-amazon.com'],
  },
};

module.exports = nextConfig;
