/** @type {import('next').NextConfig} */
const nextConfig = {
async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:3002/api/produtos/:path*',
          },
        ];
      },
}

module.exports = nextConfig
