/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  transpilePackages: ["geist"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
