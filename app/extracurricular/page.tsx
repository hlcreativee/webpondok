import React from 'react';
import ExtracurricularList from '@/components/extracurricular/components/ExtracurricularList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ekstrakurikuler - Pondok Modern Darul Ihsan',
  description: 'Pengembangan diri santri lewat organisasi OPMADA, latihan pidato muhadloroh, pramuka, sholawat hadrah, olahraga voli/futsal, dan IT.',
};

export default function ExtracurricularPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center flex flex-col gap-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-900 dark:text-white">
          Ekstrakurikuler &amp; Pengembangan Diri
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Wadah menyalurkan minat, bakat, fisik, mental, dan kepemimpinan santri di luar jam belajar formal.
        </p>
      </div>

      <ExtracurricularList />
    </div>
  );
}
