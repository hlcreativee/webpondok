import React from 'react';
import ProgramList from '@/components/program/components/ProgramList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Pendidikan - Pondok Modern Darul Ihsan',
  description:
    "Program pendidikan formal (MTs, MA), Tahfidzul Qur'an, Tahfidzul Qur'an, kajian kitab kuning, teknologi informasi, dan pembiasaan bahasa asing.",
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
            Program Pendidikan
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Pilihan jenjang akademik formal dan program kepesantrenan
            terpadu di Pondok Modern Darul Ihsan.
          </p>

        </div>

        <ProgramList />

      </div>
    </main>
  );
}