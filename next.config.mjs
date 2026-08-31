/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
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
