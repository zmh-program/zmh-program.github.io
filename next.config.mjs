/** @type {import('next').NextConfig} */
import PWABuilder from 'next-pwa';

const withPWA = PWABuilder({
  dest: 'public',
});

const nextConfig = withPWA({
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
