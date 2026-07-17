import React from 'react';
import CurriculumTimeline from '@/components/curriculum/components/CurriculumTimeline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurikulum - Pondok Modern Darul Ihsan',
  description: 'Kurikulum terintegrasi mencakup Kemenag, KMI Gontor, Program Tahfidz, Bahasa Arab & Inggris aktif, Kepemimpinan, dan Muhadloroh.',
};

export default function CurriculumPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center flex flex-col gap-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-900 dark:text-white">
          Sistem Kurikulum Terintegrasi
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Tatanan materi pengajaran yang meramu kurikulum nasional dengan karakteristik khas kepesantrenan modern.
        </p>
      </div>

      <CurriculumTimeline />
    </div>
  );
}
