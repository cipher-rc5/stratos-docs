/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: false },
  // Turbopack configuration for Next.js 16+
  turbopack: {},
  // Exclude development files from build and watch
  experimental: { turbo: { rules: { '**/_dev/**': { loaders: [], as: '*.js' } } } }
};

export default nextConfig;
