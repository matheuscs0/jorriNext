/** @type {import('next').NextConfig} */
const nextConfig = {
async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:3002/api/products',
          },
        ];
      },
}

module.exports = nextConfig
