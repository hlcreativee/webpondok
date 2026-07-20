import React from 'react';
import CurriculumTimeline from '@/components/curriculum/components/CurriculumTimeline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurikulum - Pondok Modern Darul Ihsan',
  description:
    'Kurikulum terintegrasi mencakup Kemenag, KMI Gontor, Program Tahfidz, Bahasa Arab & Inggris aktif, Kepemimpinan, dan Muhadloroh.',
};

export default function CurriculumPage() {
  return (
    <main className="bg-white dark:bg-[#090f0c]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="max-w-3xl mx-auto text-center mb-16">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
            Kurikulum
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Sistem Kurikulum Terintegrasi
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
            Tatanan materi pengajaran yang meramu kurikulum nasional dengan
            karakteristik khas kepesantrenan modern.
          </p>

        </div>

        <CurriculumTimeline />

      </div>
    </main>
  );
}