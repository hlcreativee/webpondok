'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { galleryItems } from '@/lib/data';

export default function MasonryGallery() {

  const [activeFilter, setActiveFilter] = useState<string>('all');


  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'belajar', label: 'Kegiatan Belajar' },
    { id: 'asrama', label: 'Kegiatan Asrama' },
    { id: 'muhadloroh', label: 'Muhadloroh' },
    { id: 'sorogan', label: 'Sorogan' },
    { id: 'opmada', label: 'OPMADA' },
    { id: 'pengasuhan', label: 'Pengasuhan' },
    { id: 'santri', label: 'Santri' },
    { id: 'pimpinan', label: 'Pimpinan' },
    { id: 'asatidz', label: 'Asatidz' },
    { id: 'tahfidz', label: 'Tahfidz' },
    { id: 'wisuda', label: 'Wisuda' },
    { id: 'pramuka', label: 'Pramuka' },
    { id: 'paskibra', label: 'Paskibra' },
    { id: 'pekan-perkenalan', label: 'Pekan Perkenalan' },
    { id: 'kunjungan', label: 'Kunjungan' },
    { id: 'akhiru-khidmat', label: 'Akhiru Khidmat' },
  ];



  const filteredItems = useMemo(() => {

    if (activeFilter === 'all') {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeFilter
    );

  }, [activeFilter]);



  return (
    <div className="flex flex-col gap-10 w-full">


      {/* FILTER CATEGORY */}

      <div
        className="
          flex
          flex-wrap
          justify-center
          items-center
          gap-2
          border-b
          border-gray-200
          dark:border-gray-800
          pb-5
        "
      >

        {categories.map((cat) => (

          <button

            key={cat.id}

            onClick={() =>
              setActiveFilter(cat.id)
            }

            className={`
              px-4
              py-2
              text-xs
              md:text-sm
              font-semibold
              rounded-xl
              transition-all
              duration-200
              cursor-pointer
              border

              ${activeFilter === cat.id

                ?
                'bg-primary text-white border-primary shadow-md'

                :

                'bg-white dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800 hover:text-primary'
              }
            `}

          >

            {cat.label}

          </button>

        ))}

      </div>

      {/* GALLERY */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white z-10">
                  {item.category}
                </span>
              </div>





              {/* TITLE */}
              <div className="p-4">
                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-200">
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