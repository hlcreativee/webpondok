'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Users,
  Volume2,
  BookOpen,
  Award,
  Heart,
  MessageSquare,
  Laptop,
  Palette,
  Shield,
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
    case 'award':
      return <Award className="w-5 h-5" />;
    case 'heart':
      return <Heart className="w-5 h-5" />;
    case 'msg':
      return <MessageSquare className="w-5 h-5" />;
    case 'laptop':
      return <Laptop className="w-5 h-5" />;
    case 'palette':
      return <Palette className="w-5 h-5" />;
    case 'shield':
      return <Shield className="w-5 h-5" />;
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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left"
    >
      {extraData.map((extra) => (
        <motion.div
          key={extra.id}
          variants={itemVariant}
          className="rounded-2xl border border-gray-100 bg-white/70 p-5 shadow-sm hover:shadow-md dark:border-gray-850 dark:bg-gray-900/40 backdrop-blur-md flex flex-col gap-3 hover:-translate-y-0.5 transition-all duration-200 group"
        >
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400 w-fit shrink-0 group-hover:scale-105 transition-transform duration-300">
            {getExtraIcon(extra.iconName)}
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-sm md:text-base font-bold font-display text-gray-950 dark:text-white leading-tight">
              {extra.title}
            </h3>

            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {extra.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}