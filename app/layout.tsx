import { Analytics } from '@vercel/analytics/next';
import { type Metadata, type Viewport } from 'next';
import type React from 'react';
import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://stratos-docs.vercel.app';
const title = 'Stratos API Documentation';
const description = 'Decentralized marketplace infrastructure for the creation, discovery, and monetization of DeFi intelligence.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'Stratos Docs',
  generator: 'cipher',
  category: 'documentation',
  keywords: ['Stratos', 'DeFi strategies', 'API documentation', 'strategy marketplace', 'X402', 'crypto'],
  authors: [{ name: 'Stratos' }],
  icons: { icon: [{ url: '/stratos-rook.svg', type: 'image/svg+xml' }], shortcut: '/stratos-rook.svg', apple: '/apple-icon.png' },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Stratos',
    images: [{ url: '/stratos-rook.png', width: 1024, height: 1024, alt: 'Stratos rook mark' }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/stratos-rook.png'] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 }
  },
  alternates: { canonical: '/' }
};

export const viewport: Viewport = { themeColor: '#0b0b0f' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className='font-sans antialiased'>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
