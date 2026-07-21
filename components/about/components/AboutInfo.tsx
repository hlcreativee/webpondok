'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, User } from 'lucide-react';

export default function AboutInfo() {
  const missions = [
    "Menyelenggarakan pendidikan Islam yang memadukan Kurikulum Pondok Modern, Kurikulum Kementerian Agama (Kemenag), dan Kurikulum Salafiyah.",

    "Menanamkan nilai-nilai Panca Jiwa Pondok, yaitu keikhlasan, kesederhanaan, berdikari, ukhuwah Islamiyah, dan kebebasan yang bertanggung jawab.",

    "Membentuk santri yang beriman, bertakwa, berakhlak mulia, disiplin, mandiri, dan berjiwa kepemimpinan.",

    "Mengembangkan kemampuan berbahasa Arab dan Inggris sebagai bekal dakwah dan komunikasi global.",

    "Mendorong prestasi akademik, keagamaan, organisasi, serta keterampilan hidup melalui pendidikan berasrama selama 24 jam.",

    "Membina generasi yang siap mengabdi kepada agama, bangsa, masyarakat, dan umat."
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
                Pondok Modern Darul-Ihsan didirikan pada <strong>20 Februari 1999 </strong>
                sebagai lembaga pendidikan Islam berbasis pesantren yang berkomitmen
                mencetak generasi muslim yang beriman, berilmu, berakhlak mulia,
                mandiri, serta siap mengabdi kepada agama, masyarakat, bangsa, dan
                negara melalui perpaduan sistem pendidikan pesantren dan pendidikan
                modern.
              </p>

              <p>
                Dalam penyelenggaraan pendidikannya, Pondok Modern Darul-Ihsan
                mengintegrasikan <strong>Kurikulum Pondok Modern</strong>,
                <strong> Kurikulum Kementerian Agama (Kemenag)</strong>, dan
                <strong> Kurikulum Salafiyah</strong>. Perpaduan tersebut membentuk
                keseimbangan antara penguasaan ilmu agama, ilmu pengetahuan umum,
                kemampuan berbahasa Arab dan Inggris, serta pembinaan karakter dan
                kepemimpinan santri.
              </p>

              <p>
                Berlandaskan <strong>Panca Jiwa Pondok</strong>, yaitu keikhlasan,
                kesederhanaan, berdikari, ukhuwah Islamiyah, dan kebebasan yang
                bertanggung jawab, Pondok Modern Darul-Ihsan terus membina santri
                melalui sistem pendidikan berasrama selama 24 jam agar menjadi pribadi
                yang disiplin, berkarakter, berprestasi, serta mampu memberikan
                manfaat bagi umat, bangsa, dan negara.
              </p>

            </div>

          </motion.div>

        </div>

        {/* Right */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {[
              {
                name: "KH. Masrukin Wibowo",
                role: "Yayasan",
              },
              {
                name: "KH. Muhsin Dahlan",
                role: "Yayasan",
              },
              {
                name: "Drs. Badrudin, M.M.",
                role: "Yayasan",
              },
              {
                name: "K. Nur Kholis, S.Pd.I.",
                role: "Yayasan",
              },
              {
                name: "KH. Imam Masyhadi",
                role: "Yayasan",
              },
              {
                name: "H. Ali Musthofa, Lc., M.Pd.I.",
                role: "Direktur",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-gradient-to-br
                  from-emerald-800
                  to-emerald-950
                  border
                  border-emerald-700/40
                  p-6
                  text-center
                  text-white
                  shadow-xl
                "
              >
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-emerald-500/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-700">
                    <User className="w-8 h-8" />
                  </div>

                  <h3 className="text-base font-bold leading-snug">
                    {person.name}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-emerald-300">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
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
              Menjadi lembaga pendidikan Islam yang unggul dalam membentuk generasi
              muslim yang beriman, berilmu, berakhlak mulia, mandiri, berjiwa
              kepemimpinan, serta siap mengabdi kepada agama, bangsa, dan masyarakat.
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