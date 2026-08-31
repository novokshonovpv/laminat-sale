/** @type {import("next").NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/laminat-sale" : "",
  assetPrefix: isGitHubPages ? "/laminat-sale" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 1,
    workerThreads: true,
    webpackBuildWorker: false,
    useTypeScriptCli: false,
  },
};

export default nextConfig;
