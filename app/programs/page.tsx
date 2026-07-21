import React from 'react';
import ProgramList from '@/components/program/components/ProgramList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Pendidikan - Pondok Modern Darul-Ihsan',
  description:
    'Program pendidikan Pondok Modern Darul-Ihsan yang mengintegrasikan Kurikulum Pondok Modern, Kurikulum Kementerian Agama (Kemenag), dan Kurikulum Salafiyah untuk membentuk santri yang beriman, berilmu, berakhlak, dan berjiwa kepemimpinan.',
};

export default function ProgramsPage() {
  return (
    <main className="relative isolate bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
            Program Pendidikan
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-foreground">
            Program Pendidikan Pondok Modern Darul-Ihsan
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Pondok Modern Darul-Ihsan menyelenggarakan pendidikan yang
            mengintegrasikan <strong>Kurikulum Pondok Modern</strong>,
            <strong> Kurikulum Kementerian Agama (Kemenag)</strong>, dan
            <strong> Kurikulum Salafiyah</strong> sebagai upaya membentuk
            santri yang unggul dalam ilmu agama, ilmu pengetahuan, akhlak
            mulia, penguasaan bahasa Arab dan Inggris, serta memiliki jiwa
            kepemimpinan dan kemandirian.
          </p>
        </div>

        <ProgramList />
      </div>
    </main>
  );
}