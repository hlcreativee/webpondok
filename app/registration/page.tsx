import React from 'react';
import RegistrationForm from '@/components/registration/components/RegistrationForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pendaftaran Santri Baru - Pondok Modern Darul Ihsan',
  description: 'Pendaftaran Online Penerimaan Santri Baru (PSB) Pondok Modern Darul Ihsan Sleman, Yogyakarta tahun ajaran 2026/2027.',
};

export default function RegistrationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center flex flex-col gap-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-900 dark:text-white">
          Penerimaan Santri Baru (PSB)
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Silakan isi formulir online pendaftaran calon santri baru di bawah ini secara lengkap untuk mengajukan seleksi masuk.
        </p>
      </div>

      <RegistrationForm />
    </div>
  );
}
