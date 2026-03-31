import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/site_transcriber",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
