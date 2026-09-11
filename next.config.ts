import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? "/Growth-Labs" : "";

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: githubPages ? "/Growth-Labs" : undefined,
  trailingSlash: githubPages,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
