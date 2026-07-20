'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';

import Hero from '@/components/dashboard/components/Hero';
import Stats from '@/components/dashboard/components/Stats';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-16">

      {/* Hero */}
      <Hero />

      {/* Statistik */}
      <Stats />

      {/* Welcome */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            items-center
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            md:p-10
            shadow-lg
            dark:border-slate-700
            dark:bg-slate-900
          "
        >

          {/* Card kiri */}

          <div
            className="
              lg:col-span-4
              rounded-3xl
              bg-gradient-to-br
              from-emerald-700
              to-emerald-900
              text-white
              p-8
              flex
              flex-col
              items-center
              justify-center
              text-center
              relative
              overflow-hidden
            "
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent)]" />

            <div className="relative z-10">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <GraduationCap className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold">
                Mencetak Pemimpin
              </h3>

              <p className="mt-2 text-sm uppercase tracking-widest text-emerald-100">
                Generasi Qurani &amp; Global
              </p>

              <div className="mx-auto my-5 h-px w-16 bg-white/30" />

              <p className="text-sm leading-7 text-emerald-50">
                Integrasi Kurikulum Kemenag,
                KMI Gontor,
                dan Tahfidz Al-Qur'an 30 Juz.
              </p>

            </div>

          </div>

          {/* Kanan */}

          <div className="lg:col-span-8">

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-400">
              Selamat Datang
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
              Prakata Pimpinan Pondok Pesantren
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700 dark:text-slate-300">

              <p>
                Assalamu&apos;alaikum Warahmatullahi Wabarakatuh.
                Segala puji bagi Allah SWT yang senantiasa melimpahkan
                rahmat dan hidayah-Nya.
                Kami mengucapkan selamat datang di website resmi
                Pondok Modern Darul Ihsan.
              </p>

              <p>
                Pondok Modern Darul Ihsan berkomitmen mencetak generasi
                muslim yang unggul dalam ilmu agama,
                akademik,
                teknologi,
                serta memiliki karakter islami,
                disiplin,
                mandiri,
                dan siap menghadapi tantangan zaman.
              </p>

            </div>

            <div className="mt-8">

              <Link
                href="/about"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-emerald-700
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-emerald-600
                "
              >
                Baca Profil Selengkapnya
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

        <div
          className="
            rounded-3xl
            bg-gradient-to-r
            from-emerald-900
            via-emerald-800
            to-emerald-700
            p-10
            text-white
            shadow-xl
          "
        >

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            <div>

              <span className="text-sm uppercase tracking-[0.25em] text-amber-300 font-semibold">
                PENERIMAAN SANTRI BARU
              </span>

              <h2 className="mt-3 text-3xl font-bold">
                Pendaftaran Santri Baru Telah Dibuka
              </h2>

              <p className="mt-4 max-w-2xl text-emerald-100 leading-8">
                Daftarkan putra-putri Anda menjadi bagian dari keluarga
                besar Pondok Modern Darul Ihsan dan raih pendidikan
                Islam yang unggul serta berwawasan global.
              </p>

            </div>

            <Link
              href="/registration"
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-amber-500
                px-8
                py-4
                font-bold
                text-white
                transition
                hover:bg-amber-400
              "
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}