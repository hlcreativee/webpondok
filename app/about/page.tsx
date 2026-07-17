import React from 'react';
import AboutInfo from '@/components/about/components/AboutInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Pondok - Pondok Modern Darul Ihsan',
  description: 'Sejarah singkat pendirian, visi, misi, dan profil pendiri Pondok Modern Darul Ihsan Sleman, Yogyakarta.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center flex flex-col gap-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-900 dark:text-white">
          Profil Pondok Pesantren
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Mengenal visi luhur, tonggak sejarah pendirian, visi, misi, dan sosok pimpinan Pondok Modern Darul Ihsan.
        </p>
      </div>

      <AboutInfo />
    </div>
  );
}
