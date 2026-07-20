'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { newsArticles } from '@/lib/data';

// SVG graphic renderers
function renderNewsSVG(type: string) {
  switch (type) {
    case 'announcement':
      return (
        <svg
          viewBox="0 0 350 200"
          className="w-full h-full object-cover text-emerald-800 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-[#0c1511] dark:to-[#0f241a] transition-transform duration-500 group-hover:scale-105"
        >
          <circle cx="175" cy="100" r="50" fill="currentColor" opacity="0.1" />
          <path d="M120 100 L140 85 V115 Z" fill="var(--color-accent)" />
          <rect x="105" y="95" width="15" height="10" rx="1.5" fill="var(--color-accent)" opacity="0.8" />
          <path d="M205 90 Q215 100 205 110" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M215 80 Q230 100 215 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      );

    case 'trophy':
      return (
        <svg
          viewBox="0 0 350 200"
          className="w-full h-full object-cover text-amber-800 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-[#1c1610] dark:to-[#2e1d0f] transition-transform duration-500 group-hover:scale-105"
        >
          <circle cx="175" cy="100" r="55" fill="currentColor" opacity="0.1" />
          <path d="M140 65 H210 V100 C210 120 140 120 140 100 Z" fill="var(--color-accent)" />
          <path d="M165 115 H185 V140 H165 Z" fill="var(--color-accent)" opacity="0.9" />
          <rect x="150" y="140" width="50" height="12" rx="2" fill="#475569" />
        </svg>
      );

    case 'tahfidz':
      return (
        <svg
          viewBox="0 0 350 200"
          className="w-full h-full object-cover text-teal-800 bg-gradient-to-br from-teal-50 to-emerald-100 dark:from-[#091513] dark:to-[#0f2420] transition-transform duration-500 group-hover:scale-105"
        >
          <circle cx="175" cy="95" r="45" fill="currentColor" opacity="0.08" />
          <path
            d="M110 130 C145 135 170 115 175 110 C180 115 205 135 240 130 L250 80 C210 85 190 65 175 70 C160 65 140 85 100 80 Z"
            fill="currentColor"
            opacity="0.8"
          />
          <line x1="175" y1="70" x2="175" y2="120" stroke="#1f2937" strokeWidth="2.5" />
          <polygon points="150,150 200,150 210,130 140,130" fill="var(--color-accent)" />
        </svg>
      );

    case 'academic':
      return (
        <svg
          viewBox="0 0 350 200"
          className="w-full h-full object-cover text-blue-800 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-[#0b1020] dark:to-[#101b35] transition-transform duration-500 group-hover:scale-105"
        >
          <polygon points="175,60 235,82 175,105 115,82" fill="#312e81" />
          <polygon points="140,92 140,115 175,130 210,115 210,92" fill="#1e1b4b" opacity="0.9" />
          <path d="M175 82 L222 96 V110" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" />
        </svg>
      );

    case 'sports':
      return (
        <svg
          viewBox="0 0 350 200"
          className="w-full h-full object-cover text-emerald-900 bg-gradient-to-br from-emerald-50 to-green-100 dark:from-[#09170f] dark:to-[#102d1d] transition-transform duration-500 group-hover:scale-105"
        >
          <ellipse cx="175" cy="100" rx="50" ry="30" fill="none" stroke="white" strokeWidth="2" opacity="0.25" />
          <line x1="175" y1="0" x2="175" y2="200" stroke="white" strokeWidth="2" opacity="0.25" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 350 200"
          className="w-full h-full object-cover text-indigo-900 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-[#0c0f1d] dark:to-[#18112d] transition-transform duration-500 group-hover:scale-105"
        >
          <polygon points="175,55 240,78 175,102 110,78" fill="#312e81" />
          <polygon points="135,90 135,115 175,128 215,115 215,90" fill="#1e1b4b" />
        </svg>
      );
  }
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export default function NewsList() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {newsArticles.map((article) => (
        <motion.article
          key={article.id}
          variants={itemVariant}
          className="
            group
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <div className="relative aspect-video overflow-hidden border-b border-slate-200 dark:border-slate-700">
            {renderNewsSVG(article.svgType)}

            <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
              {article.category}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Calendar className="h-4 w-4" />
              {article.date}
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2">
              {article.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-7 text-slate-700 dark:text-slate-300 line-clamp-3">
              {article.summary}
            </p>

            <Link
              href={`/news/${article.id}`}
              className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              Baca Selengkapnya
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}