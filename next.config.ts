import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Importante: desactiva características de servidor
  distDir: "out",
};

export default nextConfig;