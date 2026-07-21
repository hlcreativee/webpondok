import React from 'react';
import CurriculumTimeline from '@/components/curriculum/components/CurriculumTimeline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurikulum - Pondok Modern Darul-Ihsan',
  description:
    'Sistem pendidikan Pondok Modern Darul-Ihsan yang mengintegrasikan Kurikulum Pondok Modern, Kurikulum Kementerian Agama (Kemenag), dan Kurikulum Salafiyah untuk membentuk santri yang beriman, berilmu, berakhlak mulia, serta berjiwa kepemimpinan.',
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
            Sistem Pendidikan Terpadu
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
            Pondok Modern Darul-Ihsan menerapkan sistem pendidikan yang
            mengintegrasikan <strong>Kurikulum Pondok Modern</strong>,
            <strong> Kurikulum Kementerian Agama (Kemenag)</strong>, dan
            <strong> Kurikulum Salafiyah</strong> untuk mewujudkan
            keseimbangan antara ilmu agama, ilmu pengetahuan, pembentukan
            akhlak, penguasaan bahasa Arab dan Bahasa Inggris, serta
            pengembangan karakter dan kepemimpinan santri.
          </p>

        </div>

        <CurriculumTimeline />

      </div>
    </main>
  );
}