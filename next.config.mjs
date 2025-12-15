/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: false },
  // Keep Turbopack from doing work in our local-only _dev scratchpad.
  turbopack: { rules: { '**/_dev/**': { loaders: [], as: '*.js' } } }
};

export default nextConfig;

