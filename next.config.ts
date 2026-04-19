import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build",  // Cambia 'out' por 'build'
  images: {
    unoptimized: true,
  },
};

export default nextConfig;