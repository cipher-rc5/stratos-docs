import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: false },
  turbopack: { rules: { '**/_dev/**': { loaders: [], as: '*.js' } } }
};

export default nextConfig;
