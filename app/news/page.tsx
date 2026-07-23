import React from 'react';
import NewsList from '@/components/news/components/NewsList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Berita & Informasi - Pondok Modern "Darul Ihsan"',
  description:
    'Informasi pengumuman PSB, liputan prestasi, agenda wisuda tahfidz, studi banding alumni, perlombaan futsal, dan agenda pesantren.',
};

export default function NewsPage() {
  return (
    <main className="bg-slate-50 dark:bg-[#090f0c]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
            Berita Pesantren
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
            Warta &amp; Kabar Pesantren
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
            Kumpulan berita resmi, dokumentasi agenda tahunan,
            informasi pengumuman penting, dan catatan prestasi
            santri Pondok Modern "Darul-Ihsan".
          </p>

        </div>

        <NewsList />

      </div>
    </main>
  );
}