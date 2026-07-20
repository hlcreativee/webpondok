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
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
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
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
    >
      {programsData.map((prog) => (
        <motion.div
          key={prog.id}
          variants={itemVariant}
          whileHover={{ y: -6 }}
          className="
            group
            flex
            flex-col
            gap-5
            rounded-3xl
            border
            border-border
            bg-card
            p-7
            shadow-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-emerald-100
              text-emerald-700
              transition-transform
              duration-300
              group-hover:scale-110
              dark:bg-emerald-900/30
              dark:text-emerald-400
            "
          >
            {getProgramIcon(prog.iconName)}
          </div>

          <div className="space-y-3">

            <h3 className="text-xl font-bold text-foreground">
              {prog.title}
            </h3>

            <p className="text-sm leading-7 text-muted-foreground">
              {prog.desc}
            </p>

          </div>

        </motion.div>
      ))}
    </motion.div>
  );
}