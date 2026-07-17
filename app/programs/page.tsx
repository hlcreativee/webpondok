import React from 'react';
import ProgramList from '@/components/program/components/ProgramList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Pendidikan - Pondok Modern Darul Ihsan',
  description: 'Program pendidikan formal (MTs, MA), Tahfidzul Qur\'an, kajian kitab kuning, teknologi informasi, dan pembiasaan bahasa asing.',
};

export default function ProgramsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center flex flex-col gap-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-900 dark:text-white">
          Program Pendidikan
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Pilihan jenjang akademik formal dan program kepesantrenan terpadu di Pondok Modern Darul Ihsan.
        </p>
      </div>

      <ProgramList />
    </div>
  );
}
