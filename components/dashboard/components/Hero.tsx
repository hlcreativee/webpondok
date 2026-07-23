'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 bg-gradient-to-b from-emerald-100 via-white to-white dark:from-[#0d1612] dark:via-[#0b120f] dark:to-[#090f0c]">

      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl -z-10" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .6 }}
          className="w-24 h-24 rounded-3xl bg-white p-2 flex items-center justify-center shadow-xl mb-8 overflow-hidden"
        >
          <Image
            src="/logopondok.jpeg"
            alt="Logo Pondok Modern Darul Ihsan"
            width={96}
            height={96}
            className="object-contain rounded-2xl"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight max-w-4xl"
        >
          Pondok Modern{' '}
          <span className="block sm:inline text-emerald-700 dark:text-emerald-400">
            Darul Ihsan
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed italic text-slate-600 dark:text-slate-300"
        >
          &quot;Terbentuknya generasi yang <span className="font-semibold">Mutafaqqihina Fii al-Diin</span>,
          yang mempunyai militansi yang tinggi dalam perjuangan serta berkarakter Islam
          dan tanggap terhadap perkembangan ilmu pengetahuan dan teknologi.&quot;
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >

          <Link
            href="/registration"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 shadow-lg transition-all hover:-translate-y-1"
          >
            Daftar Sekarang
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-2xl px-8 py-3.5 font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:-translate-y-1"
          >
            Tentang Pondok
          </Link>

        </motion.div>

      </div>
    </section>
  );
}