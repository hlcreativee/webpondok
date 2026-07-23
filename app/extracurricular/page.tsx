import React from 'react';
import ExtracurricularList from '@/components/extracurricular/components/ExtracurricularList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ekstrakurikuler - Pondok Modern "Darul Ihsan"',
  description:
    'Pengembangan diri santri lewat organisasi OPMADA, latihan pidato muhadloroh, pramuka, sholawat hadrah, olahraga voli/futsal, dan IT.',
};

export default function ExtracurricularPage() {
  return (
    <main className="bg-slate-50 dark:bg-[#090f0c]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
            Ekstrakurikuler
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
            Ekstrakurikuler &amp; Pengembangan Diri
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
            Wadah menyalurkan minat, bakat, fisik, mental, dan kepemimpinan
            santri di luar jam belajar formal.
          </p>

        </div>

        <ExtracurricularList />

      </div>
    </main>
  );
}