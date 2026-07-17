'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-emerald-50/50 via-transparent to-transparent dark:from-[#0d1612] overflow-hidden pt-12">
      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-emerald-600/5 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.02),transparent)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated School Logo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-600 flex items-center justify-center shadow-xl shadow-emerald-800/10 mb-8 text-white relative border border-emerald-700/10"
        >
          {/* Logo SVG */}
          <svg
            className="w-12 h-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <circle cx="12" cy="10" r="3" />
            <path d="M12 2v5" />
          </svg>
        </motion.div>

        {/* School Name */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xs md:text-sm font-bold tracking-widest text-emerald-800 dark:text-emerald-400 uppercase mb-2 font-display"
        >
          Pondok Modern
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white max-w-3xl leading-tight"
        >
          Pondok Modern <span className="text-emerald-850 dark:text-emerald-450 block sm:inline">Darul Ihsan</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed italic font-medium"
        >
          &quot;Mencetak Generasi Qurani, Berakhlak Mulia, Berprestasi, dan Berwawasan Global.&quot;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
        >
          <Link
            href="/registration"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-emerald-800 to-emerald-600 hover:from-emerald-700 hover:to-emerald-500 shadow-lg shadow-emerald-800/15 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.98] border border-emerald-800/10 cursor-pointer"
          >
            <span>Daftar Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-2xl text-sm font-bold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 border border-gray-250 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-850 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Tentang Pondok
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
