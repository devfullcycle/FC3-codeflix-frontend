/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['loremflickr.com'],
  },
};

module.exports = nextConfig
