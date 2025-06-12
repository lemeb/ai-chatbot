import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
  rewrites: async () => {
    return [
      // {
      //   source: '/api/:path*',
      //   destination:
      //     process.env.NODE_ENV === 'development'
      //       ? 'http://127.0.0.1:8000/api/:path*'
      //       : '/api/',
      // },
      {
        source: '/api/chat',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:8000/api/chat'
            : '/api/chat',
      },
      {
        source: '/docs',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:8000/docs'
            : '/api/docs',
      },
      {
        source: '/openapi.json',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:8000/openapi.json'
            : '/api/openapi.json',
      },
    ];
  },
};

export default nextConfig;
