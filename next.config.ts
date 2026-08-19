import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  basePath: githubPages ? "/Growth-Labs" : "",
  assetPrefix: githubPages ? "/Growth-Labs" : undefined,
  trailingSlash: githubPages,
};

export default nextConfig;
