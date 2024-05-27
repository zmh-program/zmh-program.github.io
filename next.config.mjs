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
  }
});

export default nextConfig;
