import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

import { AppProviders } from '@/providers/AppProviders';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pmdi-pondokdarulihsan.vercel.app'),

  title: {
    default: 'Pondok Modern "Darul Ihsan"',
    template: '%s | Pondok Modern Darul-Ihsan',
  },

  description:
    'Website resmi Pondok Modern "Darul Ihsan" Payaman, Nganjuk, Jawa Timur. Mengintegrasikan Kurikulum Pondok Modern, Kurikulum Kementerian Agama, dan Kurikulum Salafiyah untuk mencetak generasi beriman, berilmu, berakhlakul karimah, dan berprestasi.',

  keywords: [
    'Pondok Modern Darul Ihsan',
    'Pondok Darul Ihsan',
    'Pesantren Nganjuk',
    'Pesantren Modern',
    'Pondok Modern Jawa Timur',
    'MTs Darul Ihsan',
    'MA Darul Ihsan',
    'Tahfidz',
    'Bahasa Arab',
    'Bahasa Inggris',
    'Pendidikan Islam',
    'Pesantren Tahfidz',
    'Payaman Nganjuk',
  ],

  authors: [
    {
      name: 'Pondok Modern "Darul Ihsan"',
    },
  ],

  creator: 'Pondok Modern "Darul Ihsan"',

  publisher: 'Pondok Modern "Darul Ihsan"',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://pmdi-pondokdarulihsan.vercel.app',
    siteName: 'Pondok Modern "Darul Ihsan"',
    title: 'Pondok Modern "Darul Ihsan"',
    description:
      'Website resmi Pondok Modern "Darul Ihsan" Payaman Nganjuk.',

    images: [
      {
        url: '/logopondok.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pondok Modern "Darul Ihsan"',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pondok Modern "Darul Ihsan"',
    description:
      'Website resmi Pondok Modern "Darul Ihsan" Payaman Nganjuk.',
    images: ['/logopondok.jpeg'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  manifest: '/site.webmanifest',

  category: 'education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable}`}
    >
      <body
        className="
          min-h-screen
          bg-white
          text-slate-900
          dark:bg-slate-950
          dark:text-slate-100
          transition-colors
          duration-300
        "
      >
        <AppProviders>
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1 pt-20">
              {children}
            </main>

            <Footer />
            <BackToTop />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}