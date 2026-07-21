import type { Metadata } from 'next';
import AboutInfo from '@/components/about/components/AboutInfo';

export const metadata: Metadata = {
  title: 'Tentang Pondok | Pondok Modern Darul Ihsan',
  description:
    'Sejarah singkat, visi, misi, serta profil Pondok Modern Darul Ihsan Payaman Nganjuk Jawa Timur.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
            Tentang Pondok
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Profil Pondok Pesantren
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            Mengenal visi luhur, sejarah berdirinya pondok, visi, misi,
            serta sosok pimpinan Pondok Modern Darul Ihsan sebagai lembaga
            pendidikan Islam yang berkomitmen mencetak generasi Qurani,
            berakhlak mulia, dan berwawasan global.
          </p>

        </div>

        {/* Content */}
        <AboutInfo />

      </section>

    </main>
  );
}