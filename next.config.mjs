import { createRequire } from "module"
import { dirname } from "path"
import { fileURLToPath } from "url"

const require = createRequire(import.meta.url)
const { loadEnvConfig } = require("@next/env")

const __dirname = dirname(fileURLToPath(import.meta.url))
loadEnvConfig(__dirname)

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
