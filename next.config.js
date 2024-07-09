/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    loader: 'default',
    domains: [
      '192.168.100.53',
    ],
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: '192.168.100.53',
    //     port: "3333",
    //     pathname: '/api/image/get/**',
    //   },
    // ],
  },
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false };

  //   return config;
  // },
};

module.exports = nextConfig;
