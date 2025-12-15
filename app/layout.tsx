import { Analytics } from '@vercel/analytics/next';
import { type Metadata } from 'next';
import type React from 'react';
import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Stratos API Documentation',
  description: 'Decentralized marketplace infrastructure for the creation, discovery, and monetization of DeFi intelligence.',
  generator: 'cipher',
  icons: {
    icon: [{ url: '/stratos-rook.png', media: '(prefers-color-scheme: light)' }, {
      url: '/icon-dark-32x32.png',
      media: '(prefers-color-scheme: dark)'
    }, { url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/stratos-rook.png'
  }
};

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
