import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'ik.imagekit.io',
        pathname: '/**' ,
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      }

    ],
  },
  /* config options here */
};

export default nextConfig;
