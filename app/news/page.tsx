import React from 'react';
import NewsList from '@/components/news/components/NewsList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Berita & Informasi - Pondok Modern Darul Ihsan',
  description: 'Informasi pengumuman PSB, liputan prestasi, agenda wisuda tahfidz, studi banding alumni, perlombaan futsal, dan agenda pesantren.',
};

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center flex flex-col gap-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-900 dark:text-white">
          Warta &amp; Kabar Pesantren
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Kumpulan berita resmi, dokumentasi agenda tahunan, informasi pengumuman penting, dan catatan prestasi santri Darul Ihsan.
        </p>
      </div>

      <NewsList />
    </div>
  );
}
