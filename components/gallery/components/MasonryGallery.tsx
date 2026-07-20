'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems, GalleryItem } from '@/lib/data';
import { Image as ImageIcon } from 'lucide-react';

export default function MasonryGallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'belajar', label: 'Kegiatan Belajar' },
    { id: 'asrama', label: 'Kegiatan Asrama' },
    { id: 'muhadloroh', label: 'Muhadloroh' },
    { id: 'sorogan', label: 'Sorogan' },
    { id: 'opmada', label: 'OPMADA' },
    { id: 'tahfidz', label: 'Tahfidz' },
    { id: 'wisuda', label: 'Wisuda' },
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // SVG graphic renderers for each type to avoid blank image slots
  const renderGallerySVG = (type: string) => {
    switch (type) {
      case 'classroom':
        return (
          <svg viewBox="0 0 350 250" className="w-full h-full object-cover text-emerald-800 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-[#0d1612] dark:to-[#0f241a]">
            <rect width="350" height="250" fill="none" />
            <rect x="50" y="40" width="250" height="120" rx="6" fill="#1e293b" />
            {/* Diubah ke fill="#10b981" agar di background hitam papan tulis tetap kontras */}
            <text x="175" y="105" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold" fontFamily="monospace">E = mc²</text>
            <circle cx="85" cy="200" r="15" fill="currentColor" opacity="0.15" />
            <circle cx="265" cy="200" r="15" fill="currentColor" opacity="0.15" />
          </svg>
        );
      case 'dormitory':
        return (
          <svg viewBox="0 0 350 250" className="w-full h-full object-cover text-indigo-800 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-[#0d1016] dark:to-[#111928]">
            <rect width="350" height="250" fill="none" />
            <rect x="80" y="80" width="190" height="15" rx="2" fill="currentColor" opacity="0.8" />
            <line x1="80" y1="80" x2="80" y2="180" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <line x1="270" y1="80" x2="270" y2="180" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <rect x="90" y="65" width="30" height="15" rx="3" fill="#e5e7eb" />
          </svg>
        );
      case 'speech':
        return (
          <svg viewBox="0 0 350 250" className="w-full h-full object-cover text-amber-900 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-[#1b150f] dark:to-[#2e1d0f]">
            <rect width="350" height="250" fill="none" />
            <path d="M150 150 L 200 150 L 190 70 L 160 70 Z" fill="currentColor" opacity="0.8" />
            <line x1="175" y1="70" x2="175" y2="50" stroke="#475569" strokeWidth="4" />
            <circle cx="175" cy="45" r="8" fill="#94a3b8" />
            <path d="M190 40 Q 200 45, 190 50" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
            <path d="M160 40 Q 150 45, 160 50" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'quran':
        return (
          <svg viewBox="0 0 350 250" className="w-full h-full object-cover text-teal-900 bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-[#091515] dark:to-[#0f2425]">
            <rect width="350" height="250" fill="none" />
            <path d="M110 160 C 150 165, 170 145, 175 140 C 180 145, 200 165, 240 160 L 250 100 C 210 105, 190 85, 175 90 C 160 85, 140 105, 100 100 Z" fill="currentColor" opacity="0.85" />
            <line x1="175" y1="90" x2="175" y2="145" stroke="#1f2937" strokeWidth="2" />
            <polygon points="150,185 200,185 210,160 140,160" fill="#0d9488" />
          </svg>
        );
      case 'leadership':
        return (
          <svg viewBox="0 0 350 250" className="w-full h-full object-cover text-blue-900 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-[#0d121c] dark:to-[#111624]">
            <rect width="350" height="250" fill="none" />
            <circle cx="175" cy="90" r="18" fill="#2563eb" />
            <circle cx="120" cy="110" r="14" fill="currentColor" opacity="0.6" />
            <circle cx="230" cy="110" r="14" fill="currentColor" opacity="0.6" />
            <path d="M150 130 H 200 V 160 H 150 Z" fill="#2563eb" opacity="0.9" />
          </svg>
        );
      case 'sports':
        return (
          <svg viewBox="0 0 350 250" className="w-full h-full object-cover text-emerald-950 bg-gradient-to-br from-emerald-50 to-green-100 dark:from-[#09160f] dark:to-[#0f2d1d]">
            <rect width="350" height="250" fill="none" />
            <ellipse cx="175" cy="125" rx="70" ry="35" fill="none" stroke="white" strokeWidth="2.5" opacity="0.25" />
            <line x1="175" y1="0" x2="175" y2="250" stroke="white" strokeWidth="2" opacity="0.25" />
            <path d="M155 90 H 195 V 125 C 195 140, 155 140, 155 125 Z" fill="#059669" />
            <rect x="165" y="140" width="20" height="15" fill="#475569" />
          </svg>
        );
      case 'graduation':
        return (
          <svg viewBox="0 0 350 250" className="w-full h-full object-cover text-indigo-950 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-[#0c0f1c] dark:to-[#17112d]">
            <rect width="350" height="250" fill="none" />
            <polygon points="175,70 245,95 175,120 105,95" fill="#312e81" />
            <polygon points="135,107 135,130 175,145 215,130 215,107 175,120" fill="#1e1b4b" opacity="0.9" />
            <path d="M175 95 L 230 112 V 125" fill="none" stroke="#4f46e5" strokeWidth="3" />
            <rect x="226" y="125" width="8" height="12" rx="1" fill="#4f46e5" />
          </svg>
        );
      case 'tahfidz':
      default:
        return (
          <svg viewBox="0 0 350 250" className="w-full h-full object-cover text-teal-900 bg-gradient-to-br from-teal-50 to-emerald-100 dark:from-[#081513] dark:to-[#0c2420]">
            <rect width="350" height="250" fill="none" />
            <path d="M175 60 C 130 60, 120 100, 120 100 C 120 100, 130 80, 175 80 C 220 80, 230 100, 230 100 C 230 100, 220 60, 175 60 Z" fill="currentColor" opacity="0.8" />
            <path d="M172 110 A 10 10 0 1 1 182 120 A 8 8 0 1 0 172 110" fill="#0d9488" />
            <polygon points="185,100 187,105 192,105 188,108 190,113 185,110 180,113 182,108 178,105 183,105" fill="#ffffff" />
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${activeFilter === cat.id
                ? 'bg-primary text-white shadow-md shadow-emerald-800/10'
                : 'bg-white dark:bg-gray-800/30 text-gray-750 dark:text-gray-300 hover:text-primary border border-gray-200 dark:border-gray-800/50'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Responsive Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              key={item.id}
              className="group rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-850 bg-white/90 shadow hover:shadow-lg dark:bg-gray-900/40 backdrop-blur-md flex flex-col hover:-translate-y-0.5 transition-all duration-300 text-left"
            >
              {/* Graphic container */}
              <div className="aspect-video w-full overflow-hidden relative border-b border-gray-200 dark:border-gray-850">
                {renderGallerySVG(item.svgType)}

                {/* Category overlay */}
                <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/10 select-none">
                  {item.category}
                </span>
              </div>

              {/* Title info */}
              <div className="p-4">
                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-200 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}