import React from 'react';
import type { Metadata } from 'next';
import MasonryGallery from '@/components/gallery/components/MasonryGallery';

export const metadata: Metadata = {
  title: 'Galeri Aktivitas - Pondok Modern Darul Ihsan',
  description:
    'Dokumentasi visual kegiatan belajar, asrama, muhadloroh, sorogan kitab kuning, organisasi OPMADA, wisuda tahfidz, dan perlombaan.',
};

export default function GalleryPage() {
  return (
    <main className="relative isolate bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] !text-emerald-700 dark:!text-emerald-400">
            Dokumentasi Pondok
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight !text-black dark:!text-white">
            Galeri Aktivitas Santri
          </h1>

          <p className="mt-5 text-lg font-medium leading-8 !text-slate-800 dark:!text-slate-300">
            Mengintip keseharian, momen berprestasi, kebersamaan di asrama,
            serta berbagai kegiatan pendidikan dan pembinaan karakter di
            Pondok Modern Darul Ihsan.
          </p>
        </div>

        <MasonryGallery />
      </div>
    </main>
  );
}