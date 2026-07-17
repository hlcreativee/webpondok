import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AppProviders } from '@/providers/AppProviders';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pondok Modern Darul Ihsan - Sleman, Yogyakarta',
  description: 'Mencetak Generasi Qurani, Berakhlak Mulia, Berprestasi, dan Berwawasan Global. Portal Informasi Resmi Pondok Pesantren Modern Darul Ihsan.',
  keywords: ['pesantren', 'pondok modern', 'darul ihsan', 'tahfidz', 'sleman', 'yogyakarta', 'sekolah islam', 'kmi'],
  openGraph: {
    title: 'Pondok Modern Darul Ihsan',
    description: 'Mencetak Generasi Qurani, Berakhlak Mulia, Berprestasi, dan Berwawasan Global.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans antialiased text-foreground bg-background">
        <AppProviders>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
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
