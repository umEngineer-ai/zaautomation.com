import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: projectRoot,
  output: "export",
  basePath: "/zaautomation.com",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
