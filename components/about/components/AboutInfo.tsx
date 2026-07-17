'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, ShieldCheck, Heart, User, Milestone } from 'lucide-react';

export default function AboutInfo() {
  const missions = [
    'Menanamkan aqidah Islam yang benar.',
    'Membentuk karakter santri yang disiplin dan mandiri.',
    'Mengembangkan kemampuan akademik dan keislaman.',
    'Membiasakan penggunaan Bahasa Arab dan Bahasa Inggris.',
    'Membentuk jiwa kepemimpinan.',
    'Mengembangkan kemampuan teknologi dan keterampilan.',
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* 1. Sejarah Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 flex flex-col gap-5 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 dark:text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-[3px] after:bg-emerald-600">
              Sejarah Singkat
            </h2>
            <div className="space-y-4 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mt-6">
              <p>
                Pondok Modern Darul Ihsan didirikan pada tahun 2012 dengan komitmen luhur menyatukan tradisi keilmuan pesantren yang otentik dengan akselerasi sains modern. Berlokasi di Sleman, Yogyakarta, pesantren ini lahir untuk menjawab dahaga wali santri akan pendidikan berkarakter religius sekaligus cakap menghadapi perubahan global.
              </p>
              <p>
                Dimulai dari puluhan santri perdana, pondok menerapkan sistem KMI (Kulliyatul Mu&apos;allimin Al-Islamiyyah) yang mensinergikan pembelajaran kitab klasik, hafalan Al-Qur&apos;an mutqin, serta praktik percakapan aktif Bahasa Arab &amp; Inggris setiap harinya.
              </p>
              <p>
                Melalui pengawasan ketat kepengasuhan asrama 24 jam, santri dibimbing mandiri secara spiritual maupun intelektual. Kini, ratusan alumni Darul Ihsan telah tersebar mengabdi dan meneruskan studi di berbagai perguruan tinggi bergengsi di Indonesia maupun Timur Tengah.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Founder Card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-gray-150 bg-emerald-950 p-6 md:p-8 text-white text-center shadow-xl w-full max-w-[360px] relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-900/40 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-900/40 rounded-full blur-2xl -z-10" />

            <div className="w-24 h-24 rounded-full bg-emerald-900 border-4 border-emerald-800/40 flex items-center justify-center shadow-inner mx-auto mb-4 text-emerald-100">
              <User className="w-12 h-12" />
            </div>

            <h3 className="text-lg font-bold font-display leading-tight">
              K.H. Ahmad Husaini, M.A.
            </h3>
            <p className="text-[10px] text-emerald-300 font-semibold tracking-wider uppercase mt-1">
              Pendiri &amp; Pimpinan Pondok
            </p>
            
            <div className="border-t border-emerald-850 w-16 my-4 mx-auto" />
            
            <p className="text-xs text-emerald-100/70 italic leading-relaxed">
              &quot;Mendidik hati sebelum mendidik akal, menanamkan keikhlasan sebelum kecakapan ilmu.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Visi & Misi Section */}
      <section className="bg-gray-50/50 dark:bg-gray-900/10 py-12 md:py-16 px-6 md:px-12 rounded-3xl border border-gray-150 dark:border-gray-850">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Vision */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0c1913] to-[#040e0b] text-white p-8 rounded-2xl flex flex-col justify-center gap-4 shadow-xl border border-emerald-900/30">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">VISI</span>
            <h3 className="text-xl sm:text-2xl font-bold font-display leading-relaxed text-left">
              &quot;Menjadi lembaga pendidikan Islam modern yang menghasilkan generasi berilmu, beriman, berakhlakul karimah, serta mampu bersaing di tingkat nasional maupun internasional.&quot;
            </h3>
            <div className="w-12 h-1 bg-brand-gold rounded-full mt-2" />
          </div>

          {/* Mission */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-5 text-left">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">MISI</span>
            <h3 className="text-xl md:text-2xl font-bold font-display text-gray-900 dark:text-white">
              Misi Pendidikan Pondok
            </h3>
            
            <ul className="space-y-4 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 border border-emerald-100 dark:border-emerald-900/40">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
