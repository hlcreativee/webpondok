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
  title: 'Pondok Modern Darul Ihsan - Payaman Nganjuk Jawa Timur',
  description:
    'Mencetak Generasi Qurani, Berakhlak Mulia, Berprestasi, dan Berwawasan Global.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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