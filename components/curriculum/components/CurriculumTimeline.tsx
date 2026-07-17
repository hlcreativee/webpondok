'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import { curriculumData } from '@/lib/data';

const container: Variants = {
  hidden: {
    opacity: 0,
  },
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
    <div className="relative max-w-4xl mx-auto px-4 text-left">
      {/* Garis timeline desktop */}
      <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-0.5 bg-emerald-100 dark:bg-emerald-900/60 -translate-x-1/2 hidden md:block" />

      {/* Garis timeline mobile */}
      <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-emerald-100 dark:bg-emerald-900/60 md:hidden" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        {curriculumData.map((curr, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={curr.id}
              variants={itemVariant}
              className={`relative flex flex-col md:flex-row items-stretch ${isEven ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Titik timeline */}
              <div className="absolute left-6 md:left-1/2 top-4 w-4 h-4 rounded-full bg-amber-500 border-4 border-white dark:border-[#090f0c] shadow -translate-x-1/2 z-10" />

              <div className="hidden md:block w-1/2" />

              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 backdrop-blur-md p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                      Kurikulum Tahap {idx + 1}
                    </span>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {curr.title}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {curr.desc}
                    </p>

                    <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Fokus Pembelajaran
                      </h4>

                      <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                        {curr.focus.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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