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
      },
        {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      pathname: '/**',
    },

      {
      protocol: 'https',
      hostname: 'miapp.com',
      pathname: '/uploads/**',
    },
    
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: '/**',
    }


    ],
  },
  /* config options here */
};

export default nextConfig;
