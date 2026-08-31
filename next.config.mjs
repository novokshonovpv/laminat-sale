/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1,
    workerThreads: true,
    webpackBuildWorker: false,
    useTypeScriptCli: false,
  },
};

export default nextConfig;
