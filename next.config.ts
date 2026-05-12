import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // 🟢 1. Oprava pre 404 na podstránkach
  trailingSlash: true,

  // 🟢 2. Oprava pre nenačítané logo a obrázky
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
