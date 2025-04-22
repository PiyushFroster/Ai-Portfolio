/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,  // Fixed typo here
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;

