import React from 'react';
import type { Metadata } from 'next';
import RegistrationForm from '@/components/registration/components/RegistrationForm';

export const metadata: Metadata = {
  title: 'Pendaftaran Santri Baru - Pondok Modern Darul Ihsan',
  description:
    'Pendaftaran Online Penerimaan Santri Baru (PSB) Pondok Modern Darul Ihsan Sleman, Yogyakarta tahun ajaran 2026/2027.',
};

export default function RegistrationPage() {
  return (
    <main className="relative isolate bg-slate-50 dark:bg-[#08110d]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
            Pendaftaran Santri
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Penerimaan Santri Baru (PSB)
          </h1>

          <p className="mt-5 text-lg font-medium leading-8 text-slate-700 dark:text-slate-300">
            Silakan isi formulir pendaftaran online di bawah ini secara lengkap
            dan benar untuk mengikuti proses seleksi calon santri baru Pondok
            Modern Darul Ihsan Tahun Ajaran 2027/2028.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 backdrop-blur-md shadow-lg p-6 md:p-8">
          <RegistrationForm />
        </div>
      </div>
    </main>
  );
}