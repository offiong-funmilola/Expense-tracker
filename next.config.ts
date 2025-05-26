import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
    ignoreBuildErrors: true,

  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // BASE_URL="http://localhost:3000"
  /* config options here */
};

export default nextConfig;


