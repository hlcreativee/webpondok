'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Users,
  Volume2,
  BookOpen,
  Heart,
  Monitor,
  Hammer,
  ChefHat,
  Scissors,
  Activity,
} from 'lucide-react';

import { extraData } from '@/lib/data';

function getExtraIcon(iconName: string) {
  switch (iconName) {
    case 'users':
      return <Users className="w-5 h-5" />;

    case 'volume':
      return <Volume2 className="w-5 h-5" />;

    case 'book':
      return <BookOpen className="w-5 h-5" />;

    case 'heart':
      return <Heart className="w-5 h-5" />;

    case 'lang-ar':
      return (
        <span className="text-xl font-bold font-serif">
          ع
        </span>
      );

    case 'lang-en':
      return (
        <span className="text-sm font-bold tracking-wider">
          EN
        </span>
      );

    case 'laptop':
      return <Monitor className="w-5 h-5" />;

    case 'shield':
      return <Hammer className="w-5 h-5" />;

    case 'activity':
      return <ChefHat className="w-5 h-5" />;

    case 'palette':
      return <Scissors className="w-5 h-5" />;

    default:
      return <Activity className="w-5 h-5" />;
  }
}

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

export default function ExtracurricularList() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {extraData.map((extra) => (
        <motion.div
          key={extra.id}
          variants={itemVariant}
          whileHover={{
            y: -6,
            transition: { duration: 0.2 },
          }}
          className="
            group
            rounded-2xl
            border
            border-slate-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-900
            p-6
            shadow-md
            hover:shadow-xl
            transition-all
            duration-300
            flex
            flex-col
            gap-4
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-emerald-100
              text-emerald-700
              dark:bg-emerald-900/40
              dark:text-emerald-400
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
            {getExtraIcon(extra.iconName)}
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {extra.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              {extra.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}