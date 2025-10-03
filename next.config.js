/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' to enable API routes
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Add this to handle API routes in production
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
