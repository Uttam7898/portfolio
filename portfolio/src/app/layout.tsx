import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Uttam Kumar Portfolio',
  description:
    'Interactive portfolio for Uttam Kumar Sirmour, a full-stack developer building AI-powered web applications.',
  keywords: [
    'Uttam Kumar Sirmour',
    'Portfolio',
    'Developer',
    'AI',
    'Interactive',
    'Memoji',
    'Web Development',
    'Full Stack',
    'Next.js',
    'React',
  ],
  authors: [
    {
      name: 'Uttam Kumar Sirmour',
    },
  ],
  creator: 'Uttam Kumar Sirmour',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Uttam Kumar Portfolio',
    description:
      'Interactive portfolio for Uttam Kumar Sirmour.',
    siteName: 'Uttam Kumar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uttam Kumar Portfolio',
    description:
      'Interactive portfolio for Uttam Kumar Sirmour.',
    creator: '@Uttam7898',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        sizes: 'any',
      },
    ],
    shortcut: '/favicon.svg?v=2',
    apple: '/apple-touch-icon.svg?v=2',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <Script defer />
      </head>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          inter.variable
        )}
      >
        <main className="flex min-h-screen flex-col">{children}</main>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
