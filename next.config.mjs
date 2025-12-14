/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: false },
  // Turbopack configuration for Next.js 16+
  turbopack: {}
};

export default nextConfig;

