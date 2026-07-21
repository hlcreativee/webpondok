'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  Languages,
  Monitor,
  Hammer,
  ChefHat,
  Scissors,
} from 'lucide-react';

import { programsData } from '@/lib/data';

function getProgramIcon(iconName: string) {
  switch (iconName) {
    case 'book':
      return <BookOpen className="w-6 h-6" />;

    case 'lang-ar':
      return (
        <span className="text-xl font-bold font-serif">
          ع
        </span>
      );

    case 'lang-en':
      return (
        <span className="text-lg font-bold tracking-wide">
          EN
        </span>
      );

    case 'cpu':
      return <Monitor className="w-6 h-6" />;

    case 'flame':
      return <Hammer className="w-6 h-6" />;

    case 'key':
      return <ChefHat className="w-6 h-6" />;

    case 'cap':
      return <Scissors className="w-6 h-6" />;

    default:
      return <GraduationCap className="w-6 h-6" />;
  }
}

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

export default function ProgramList() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4"
    >
      {programsData.map((prog) => (
        <motion.div
          key={prog.id}
          variants={itemVariant}
          whileHover={{
            y: -8,
            transition: { duration: 0.2 },
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-900
            p-7
            shadow-md
            transition-all
            duration-300
            hover:shadow-2xl
          "
        >
          {/* Background Blur */}
          <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-emerald-500/10 blur-3xl" />

          {/* Icon */}
          <div
            className="
              relative
              z-10
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-emerald-100
              dark:bg-emerald-900/30
              text-emerald-700
              dark:text-emerald-400
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
            {getProgramIcon(prog.iconName)}
          </div>

          {/* Content */}
          <div className="relative z-10 mt-6 space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {prog.title}
            </h3>

            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              {prog.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}