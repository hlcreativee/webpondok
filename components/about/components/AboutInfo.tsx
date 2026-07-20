'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, User } from 'lucide-react';

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

      {/* ================= Sejarah ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* Left */}
        <div className="lg:col-span-7 flex flex-col gap-5 text-left">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <h2 className="relative inline-block text-3xl font-bold text-slate-900 dark:text-white after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-14 after:rounded-full after:bg-emerald-600">
              Sejarah Singkat
            </h2>

            <div className="mt-8 space-y-5 text-slate-600 dark:text-slate-300 leading-8">

              <p>
                Pondok Modern Darul Ihsan didirikan pada tahun 2012 dengan
                komitmen memadukan pendidikan pesantren yang berlandaskan
                Al-Qur'an dan As-Sunnah dengan perkembangan ilmu pengetahuan
                serta teknologi modern.
              </p>

              <p>
                Berawal dari puluhan santri, pondok berkembang menjadi lembaga
                pendidikan Islam yang menerapkan sistem KMI (Kulliyatul
                Mu'allimin Al-Islamiyyah), pembelajaran kitab kuning,
                tahfidz Al-Qur'an, serta pembiasaan Bahasa Arab dan Bahasa
                Inggris dalam kehidupan sehari-hari.
              </p>

              <p>
                Dengan sistem pendidikan berasrama selama 24 jam, santri dibina
                agar memiliki akhlak mulia, disiplin, mandiri, berprestasi, dan
                siap menjadi pemimpin umat di masa depan.
              </p>

            </div>

          </motion.div>

        </div>

        {/* Right */}
        <div className="lg:col-span-5 flex justify-center">

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="
              relative
              overflow-hidden
              w-full
              max-w-[360px]
              rounded-3xl
              bg-gradient-to-br
              from-emerald-800
              to-emerald-950
              border
              border-emerald-700/40
              p-8
              text-center
              text-white
              shadow-2xl
            "
          >

            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative z-10">

              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border-4 border-emerald-600 bg-emerald-700 shadow-lg">
                <User className="w-12 h-12" />
              </div>

              <h3 className="text-xl font-bold">
                K.H. Ahmad Husaini, M.A.
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-emerald-300">
                Pendiri &amp; Pimpinan Pondok
              </p>

              <div className="mx-auto my-5 h-px w-16 bg-emerald-500" />

              <p className="italic text-sm leading-7 text-emerald-100">
                "Mendidik hati sebelum mendidik akal, menanamkan keikhlasan
                sebelum kecakapan ilmu."
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= Visi Misi ================= */}

      <section
        className="
          rounded-3xl
          border
          border-slate-200
          dark:border-slate-700
          bg-slate-50
          dark:bg-slate-900/50
          backdrop-blur
          px-6
          py-12
          md:px-12
          md:py-16
        "
      >

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Vision */}

          <div
            className="
              lg:col-span-5
              rounded-3xl
              bg-gradient-to-br
              from-emerald-800
              to-emerald-950
              border
              border-emerald-700/30
              p-8
              text-white
              shadow-xl
              flex
              flex-col
              justify-center
            "
          >

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
              VISI
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-relaxed">
              Menjadi lembaga pendidikan Islam modern yang menghasilkan
              generasi berilmu, beriman, berakhlakul karimah, serta mampu
              bersaing di tingkat nasional maupun internasional.
            </h3>

            <div className="mt-6 h-1 w-14 rounded-full bg-amber-400" />

          </div>

          {/* Mission */}

          <div className="lg:col-span-7">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
              MISI
            </span>

            <h3 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
              Misi Pendidikan Pondok
            </h3>

            <ul className="mt-8 space-y-5">

              {missions.map((mission, index) => (

                <li
                  key={index}
                  className="flex items-start gap-4"
                >

                  <div
                    className="
                      rounded-xl
                      border
                      border-emerald-200
                      dark:border-emerald-800
                      bg-emerald-100
                      dark:bg-emerald-900/30
                      p-2
                      text-emerald-700
                      dark:text-emerald-400
                      shrink-0
                    "
                  >
                    <ShieldCheck className="w-4 h-4" />
                  </div>

                  <span className="text-slate-600 dark:text-slate-300 leading-7">
                    {mission}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>

    </div>
  );
}