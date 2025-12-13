/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: false },
  turbopack: {},
  experimental: { turbo: { rules: { '**/_dev/**': { loaders: [], as: '*.js' } } } }
};

export default nextConfig;
