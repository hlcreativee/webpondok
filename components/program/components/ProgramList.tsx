'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  Flame,
  Languages,
  Key,
  Cpu,
  Compass,
} from 'lucide-react';
import { programsData } from '@/lib/data';

function getProgramIcon(iconName: string) {
  switch (iconName) {
    case 'cap':
      return <GraduationCap className="w-6 h-6" />;
    case 'book':
      return <BookOpen className="w-6 h-6" />;
    case 'flame':
      return <Flame className="w-6 h-6" />;
    case 'lang-ar':
    case 'lang-en':
      return <Languages className="w-6 h-6" />;
    case 'key':
      return <Key className="w-6 h-6" />;
    case 'cpu':
      return <Cpu className="w-6 h-6" />;
    default:
      return <Compass className="w-6 h-6" />;
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

export default function ProgramList() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left"
    >
      {programsData.map((prog) => (
        <motion.div
          key={prog.id}
          variants={itemVariant}
          className="rounded-3xl border border-gray-100 bg-white/70 p-6 shadow-md hover:shadow-lg dark:border-gray-850 dark:bg-gray-900/40 backdrop-blur-md flex flex-col gap-4"
        >
          <div className="p-3 bg-emerald-50 rounded-2xl w-fit">
            {getProgramIcon(prog.iconName)}
          </div>

          <div>
            <h3 className="text-lg font-bold">{prog.title}</h3>
            <p>{prog.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}