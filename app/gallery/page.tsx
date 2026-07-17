import React from 'react';
import MasonryGallery from '@/components/gallery/components/MasonryGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri Aktivitas - Pondok Modern Darul Ihsan',
  description: 'Dokumentasi visual kegiatan belajar, asrama, muhadloroh, sorogan kitab kuning, organisasi OPMADA, wisuda tahfidz, dan perlombaan.',
};

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center flex flex-col gap-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-900 dark:text-white">
          Galeri Aktivitas Santri
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Mengintip keseharian, momen berprestasi, kebersamaan di asrama, dan ragam agenda penting Pondok Modern Darul Ihsan.
        </p>
      </div>

      <MasonryGallery />
    </div>
  );
}
