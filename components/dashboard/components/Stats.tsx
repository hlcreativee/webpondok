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
        'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    },
    {
      id: 'ustadz',
      label: 'Jumlah Ustadz',
      value: '60+',
      desc: 'Ustadz & Ustadzah bersanad',
      icon: <GraduationCap className="w-6 h-6" />,
      colorClass:
        'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      id: 'program',
      label: 'Program Pendidikan',
      value: '8',
      desc: 'Pendidikan formal & kajian keagamaan',
      icon: <BookOpen className="w-6 h-6" />,
      colorClass:
        'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    },
    {
      id: 'alumni',
      label: 'Alumni',
      value: '15+',
      desc: 'Negara studi & pengabdian alumni',
      icon: <Award className="w-6 h-6" />,
      colorClass:
        'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
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
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-14 bg-transparent">
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
              whileHover={{ y: -6 }}
              className="
                rounded-3xl
                border
                border-slate-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-900/80
                backdrop-blur
                p-6
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                flex
                items-start
                gap-4
                group
              "
            >
              <div
                className={cn(
                  'p-3 rounded-2xl shrink-0 transition-transform duration-300 group-hover:scale-110',
                  stat.colorClass
                )}
              >
                {stat.icon}
              </div>

              <div className="flex flex-col">

                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {stat.value}
                </span>

                <span className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {stat.label}
                </span>

                <span className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
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