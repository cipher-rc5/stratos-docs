import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://stratos-docs.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [{ url: siteUrl, lastModified }, { url: `${siteUrl}/docs`, lastModified }, { url: `${siteUrl}/api/reference`, lastModified }];
}
