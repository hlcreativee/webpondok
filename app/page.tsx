'use client';

import React from 'react';
import Hero from '@/components/dashboard/components/Hero';
import Stats from '@/components/dashboard/components/Stats';
import Link from 'next/link';
import { BookOpen, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-16">
      {/* 1. Hero banner */}
      <Hero />

      {/* 2. Stats bar */}
      <Stats />

      {/* 3. Welcome block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
        <div className="rounded-3xl border border-gray-100 bg-white/60 p-6 md:p-10 shadow-md dark:border-gray-850 dark:bg-gray-900/40 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Badge Card */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center bg-gradient-to-br from-emerald-800 to-emerald-600 p-8 rounded-2xl text-white text-center shadow-lg relative overflow-hidden min-h-[250px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent)]" />
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold font-display leading-tight">Mencetak Pemimpin</h3>
            <p className="text-[10px] text-emerald-100 uppercase tracking-widest mt-1">Generasi Qurani &amp; Global</p>
            <div className="border-t border-white/20 w-12 my-3" />
            <p className="text-xs text-emerald-50/70 italic">
              Integrasi Kurikulum Kemenag, KMI Gontor, &amp; Tahfidzul Qur&apos;an 30 Juz.
            </p>
          </div>

          {/* Description */}
          <div className="lg:col-span-8 flex flex-col justify-center gap-4 text-left">
            <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-450 uppercase tracking-widest">
              Selamat Datang
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 dark:text-white leading-tight">
              Prakata Pimpinan Pondok Pesantren
            </h2>
            <div className="space-y-4 text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-2">
              <p>
                Assalamu&apos;alaikum Warahmatullahi Wabarakatuh. Segala puji bagi Allah SWT yang senantiasa melimpahkan taufiq dan hidayah-Nya. Kami menyambut hangat kehadiran Anda di portal informasi resmi Pondok Modern Darul Ihsan Sleman, Yogyakarta.
              </p>
              <p>
                Pesantren kami didirikan untuk melahirkan kader ulama dan intelektual muslim yang mandiri, berkarakter mulia, cakap berbahasa internasional (Arab &amp; Inggris), serta siap berkontribusi positif bagi peradaban global. Di sini, santri dibimbing mengintegrasikan ilmu akidah, sains modern, teknologi digital, dan jiwa kepemimpinan.
              </p>
            </div>
            
            <div className="flex gap-4 items-center mt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-500 transition-all group/link"
              >
                <span>Baca Profil Selengkapnya</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Portal Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
        <div className="bg-gradient-to-br from-[#0c1913] to-[#040e0b] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden border border-emerald-950/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
          
          <div className="text-left flex flex-col gap-2 max-w-xl z-10">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">PORTAL PENDAFTARAN</span>
            <h3 className="text-xl md:text-3xl font-bold font-display leading-tight">
              Penerimaan Santri Baru (PSB) Telah Dibuka!
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed mt-1">
              Daftarkan putra-putri Anda secara online ke jenjang pendidikan pilihan (MTs / MA). Isi formulir, upload berkas, dan dapatkan nomor ujian secara instan.
            </p>
          </div>

          <div className="z-10 shrink-0 w-full md:w-auto">
            <Link
              href="/registration"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-amber-500/10 active:scale-[0.98]"
            >
              <span>Daftar PSB Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
