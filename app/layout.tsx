import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { seoDefaults, siteUrl } from '@/lib/seo';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoDefaults.title,
    template: '%s | Kognifx',
  },
  description: seoDefaults.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/kognifx-mark.png', type: 'image/png', sizes: '64x64' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    title: seoDefaults.title,
    description: seoDefaults.description,
    siteName: seoDefaults.siteName,
    locale: seoDefaults.locale,
    images: [
      {
        url: '/showgoogle.png',
        width: 3310,
        height: 1908,
        alt: 'Kognifx brand preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoDefaults.title,
    description: seoDefaults.description,
    images: ['/showgoogle.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
