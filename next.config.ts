import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // This project sits beside other lockfiles; pin the root so Turbopack
  // doesn't infer a parent directory.
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
