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
  alternates: {
    canonical: `${siteUrl}/`,
  },
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/`,
    title: seoDefaults.title,
    description:
      'Kognifx turns complexity into clarity and clarity into working systems.',
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
    description:
      'Kognifx helps organizations structure complexity into scalable working systems with AI.',
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
