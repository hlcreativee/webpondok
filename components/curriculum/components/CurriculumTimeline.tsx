'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import { curriculumData } from '@/lib/data';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function CurriculumTimeline() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 text-left">

      <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-0.5 bg-emerald-200 dark:bg-emerald-900 -translate-x-1/2 hidden md:block" />

      <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-emerald-200 dark:bg-emerald-900 md:hidden" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-12"
      >
        {curriculumData.map((curr, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={curr.id}
              variants={itemVariant}
              className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className="absolute left-6 md:left-1/2 top-5 w-4 h-4 rounded-full bg-amber-500 border-4 border-white dark:border-[#090f0c] shadow-lg -translate-x-1/2 z-20" />

              <div className="hidden md:block w-1/2" />

              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">

                <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-7 shadow-lg hover:shadow-xl transition">

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-400">
                    Kurikulum Tahap {idx + 1}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                    {curr.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
                    {curr.desc}
                  </p>

                  <div className="mt-6 border-t border-slate-200 dark:border-slate-700 pt-5">

                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4">
                      Fokus Pembelajaran
                    </h4>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {curr.focus.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                        >
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />

                          <span className="text-sm font-medium">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>

              </div>

            </motion.div>
          );
        })}
      </motion.div>

    </div>
  );
}