'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Users, GraduationCap, BookOpen, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Stats() {
  const stats = [
    {
      id: 'santri',
      label: 'Jumlah Santri',
      value: '850+',
      desc: 'Santri aktif tingkat MTs & MA',
      icon: <Users className="w-6 h-6" />,
      colorClass:
        'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400',
    },
    {
      id: 'ustadz',
      label: 'Jumlah Ustadz',
      value: '60+',
      desc: 'Ustadz & Ustadzah bersanad',
      icon: <GraduationCap className="w-6 h-6" />,
      colorClass:
        'bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400',
    },
    {
      id: 'program',
      label: 'Program Pendidikan',
      value: '8',
      desc: 'Pendidikan formal & kajian keagamaan',
      icon: <BookOpen className="w-6 h-6" />,
      colorClass:
        'bg-amber-50 text-amber-600 dark:bg-amber-950/20 dark:text-amber-400',
    },
    {
      id: 'alumni',
      label: 'Alumni',
      value: '15+',
      desc: 'Negara studi & pengabdian alumni',
      icon: <Award className="w-6 h-6" />,
      colorClass:
        'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/20 dark:text-indigo-400',
    },
  ];

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-12 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={item}
              className="rounded-3xl border border-gray-100 bg-white/60 p-6 shadow-md hover:shadow-lg dark:border-gray-850 dark:bg-gray-900/40 backdrop-blur-md flex items-start gap-4 hover:-translate-y-1 transition-all duration-300 text-left group"
            >
              <div
                className={cn(
                  'p-3 rounded-2xl shrink-0 group-hover:scale-105 transition-transform duration-300',
                  stat.colorClass
                )}
              >
                {stat.icon}
              </div>

              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white font-display">
                  {stat.value}
                </span>

                <span className="text-xs font-bold text-gray-700 dark:text-gray-300 mt-0.5">
                  {stat.label}
                </span>

                <span className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  {stat.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}