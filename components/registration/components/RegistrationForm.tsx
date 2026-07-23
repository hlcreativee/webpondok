'use client';

import React, { useState } from 'react';
import { useRegistration } from '../hooks/useRegistration';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { CheckCircle2, AlertCircle, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegistrationForm() {
  const [successRegId, setSuccessRegId] = useState<string | null>(null);

  const handleSuccess = (regId: string) => {
    setSuccessRegId(regId);
  };

  const {
    register,
    errors,
    isLoading,
    processStatus,
    successMessage,
    errorMessage,
    setSuccessMessage,
    setErrorMessage,
    submitForm,
  } = useRegistration(handleSuccess);


  return (
    <div
      className="
      max-w-4xl 
      mx-auto 
      w-full 
      relative 
      px-4 
      py-8
      text-foreground
      "
    >


      {/* SUCCESS TOAST */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="
            fixed 
            top-24 
            left-1/2 
            -translate-x-1/2 
            z-50 
            w-full 
            max-w-md 
            bg-emerald-600 
            text-white 
            rounded-2xl 
            shadow-xl 
            p-4 
            flex 
            gap-3
            "
          >

            <CheckCircle2 className="w-5 h-5 mt-0.5" />

            <div className="flex-grow">
              <p className="text-sm font-bold">
                Pendaftaran Sukses!
              </p>

              <p className="text-xs text-emerald-100">
                {successMessage}
              </p>
            </div>


            <button
              onClick={() => setSuccessMessage(null)}
              className="
              text-white/80
              hover:text-white
              "
            >
              Tutup
            </button>

          </motion.div>
        )}



        {errorMessage && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="
            fixed
            top-24
            left-1/2
            -translate-x-1/2
            z-50
            w-full
            max-w-md
            bg-destructive
            text-white
            rounded-2xl
            shadow-xl
            p-4
            flex
            gap-3
            "
          >

            <AlertCircle className="w-5 h-5" />


            <div className="flex-grow">

              <p className="text-sm font-bold">
                Terjadi Kesalahan
              </p>

              <p className="text-xs">
                {errorMessage}
              </p>

            </div>


            <button
              onClick={() => setErrorMessage(null)}
              className="
              text-white/80
              hover:text-white
              "
            >
              Tutup
            </button>


          </motion.div>

        )}

      </AnimatePresence>




      {/* SUCCESS MODAL */}

      <AnimatePresence>

        {successRegId && (

          <div
            className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        backdrop-blur-sm
        p-4
        "
          >


            <motion.div

              initial={{
                opacity: 0,
                scale: 0.95
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              exit={{
                opacity: 0,
                scale: 0.95
              }}


              className="
        bg-card
        text-card-foreground
        border
        border-border
        p-8
        rounded-3xl
        max-w-md
        w-full
        shadow-2xl
        text-center
        flex
        flex-col
        gap-6
        "

            >


              <div
                className="
          w-16
          h-16
          rounded-full
          bg-primary/10
          text-primary
          flex
          items-center
          justify-center
          mx-auto
          "
              >

                <CheckCircle2 className="w-10 h-10" />

              </div>



              <div>

                <h3
                  className="
            text-xl
            font-bold
            text-foreground
            "
                >
                  Formulir Dikirim!
                </h3>


                <p
                  className="
            text-xs
            text-muted-foreground
            mt-2
            "
                >
                  Data calon santri berhasil tersimpan.
                  Catat nomor ujian Anda.
                </p>


              </div>



              <div
                className="
          bg-muted
          border
          border-border
          rounded-2xl
          p-4
          "
              >

                <span
                  className="
            text-[10px]
            text-muted-foreground
            font-bold
            "
                >
                  NO. UJIAN REGISTRASI
                </span>


                <p
                  className="
            text-xl
            font-mono
            font-bold
            text-primary
            "
                >
                  {successRegId}
                </p>


              </div>



              <div className="flex gap-3 justify-center">


                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.print()}
                >

                  <Printer className="w-4 h-4 mr-2" />
                  Cetak Bukti

                </Button>



                <Button
                  size="sm"
                  onClick={() => setSuccessRegId(null)}
                >

                  Selesai

                </Button>

              </div>

            </motion.div>

          </div>

        )}

      </AnimatePresence>

      {/* MAIN CARD */}

      <Card
        className="
      bg-card
      text-card-foreground
      border-border
      shadow-lg
      "
      >

        <CardHeader
          className="
        border-b
        border-border
        pb-5
        "
        >

          <CardTitle
            className="
          text-xl
          md:text-2xl
          text-primary
          "
          >
            Formulir Pendaftaran Online PSB
          </CardTitle>


          <CardDescription
            className="text-muted-foreground">
            Isi formulir pendaftaran santri baru Pondok Modern "Darul-Ihsan" tahun ajaran 2027/2028 secara lengkap dan benar.
          </CardDescription>

        </CardHeader>
        <CardContent className="pt-6">
          <form
            onSubmit={submitForm}
            className="flex flex-col gap-6 ">

            {/* Section A: Personal Details */}
            <div>
              <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest border-l-3 border-emerald-600 pl-2.5 mb-4">
                1. Data Pribadi Calon Santri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Fullname */}
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Nama Lengkap *</label>
                  <Input {...register('fullName')} error={!!errors.fullName} placeholder="e.g. Faza Muhammad" />
                  {errors.fullName && <p className="text-[11px] text-red-500 font-semibold">{errors.fullName.message}</p>}
                </div>

                {/* Gender */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Jenis Kelamin *</label>
                  <select
                    {...register('gender')}
                    className="
                    flex h-11 w-full rounded-xl
                    border border-input
                    bg-background
                    text-foreground
                    px-4 py-2 text-sm
                    "
                  >
                    <option
                      value=""
                      className="bg-background text-foreground"
                    >
                      -- Pilih Jenis Kelamin --
                    </option>

                    <option
                      value="male"
                      className="bg-background text-foreground"
                    >
                      Laki-laki
                    </option>

                    <option
                      value="female"
                      className="bg-background text-foreground"
                    >
                      Perempuan
                    </option>

                  </select>
                  {errors.gender && <p className="text-[11px] text-red-500 font-semibold">{errors.gender.message}</p>}
                </div>

                {/* Asal Sekolah */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Asal Sekolah *</label>
                  <Input {...register('prevSchool')} error={!!errors.prevSchool} placeholder="Nama SD/MI / SMP/MTs Asal" />
                  {errors.prevSchool && <p className="text-[11px] text-red-500 font-semibold">{errors.prevSchool.message}</p>}
                </div>

                {/* TTL Place */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Tempat Lahir *</label>
                  <Input {...register('birthPlace')} error={!!errors.birthPlace} placeholder="Kota/Kabupaten Lahir" />
                  {errors.birthPlace && <p className="text-[11px] text-red-500 font-semibold">{errors.birthPlace.message}</p>}
                </div>

                {/* TTL Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Tanggal Lahir *</label>
                  <Input type="date" {...register('birthDate')} error={!!errors.birthDate} />
                  {errors.birthDate && <p className="text-[11px] text-red-500 font-semibold">{errors.birthDate.message}</p>}
                </div>
              </div>
            </div>

            {/* Section B: Parents / Guardian */}
            <div>
              <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest border-l-3 border-emerald-600 pl-2.5 mb-4">
                2. Data Orang Tua / Wali
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Father */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Nama Ayah *</label>
                  <Input {...register('fatherName')} error={!!errors.fatherName} placeholder="Nama Lengkap Ayah" />
                  {errors.fatherName && <p className="text-[11px] text-red-500 font-semibold">{errors.fatherName.message}</p>}
                </div>

                {/* Mother */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Nama Ibu *</label>
                  <Input {...register('motherName')} error={!!errors.motherName} placeholder="Nama Lengkap Ibu" />
                  {errors.motherName && <p className="text-[11px] text-red-500 font-semibold">{errors.motherName.message}</p>}
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">No. HP / WhatsApp Orang Tua *</label>
                  <Input {...register('guardianPhone')} error={!!errors.guardianPhone} placeholder="e.g. 081234567890" />
                  {errors.guardianPhone && <p className="text-[11px] text-red-500 font-semibold">{errors.guardianPhone.message}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Alamat Email *</label>
                  <Input type="email" {...register('email')} error={!!errors.email} placeholder="alamat-email@gmail.com" />
                  {errors.email && <p className="text-[11px] text-red-500 font-semibold">{errors.email.message}</p>}
                </div>

                {/* Address */}
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Alamat Rumah Lengkap *</label>
                  <Textarea {...register('address')} error={!!errors.address} placeholder="Jalan, RT/RW, Dusun, Desa, Kecamatan, Kabupaten/Provinsi" />
                  {errors.address && <p className="text-[11px] text-red-500 font-semibold">{errors.address.message}</p>}
                </div>
              </div>
            </div>

            {/* Section C: Programs Selection */}
            <div>
              <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest border-l-3 border-emerald-600 pl-2.5 mb-4">
                3. Pilihan Program &amp; Berkas Upload
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* School Level */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Jenjang Pilihan *</label>
                  <select
                    {...register('schoolLevel')}
                    className="
                    flex
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-input
                    bg-background
                    text-foreground
                    px-4
                    py-2
                    text-sm
                    outline-none
                    focus:ring-2
                    focus:ring-ring
                    "
                  >
                    <option value="">-- Pilih Jenjang --</option>
                    <option value="Kelas 1 Reguler KMI PMDI (Jenjang SMP/MTs)">
                      Kelas 1 Reguler KMI PMDI (Jenjang SMP/MTs)
                    </option>

                    <option value="Kelas 1 Tahfidzul Qur&apos;an KMI PMDI (Jenjang SMP/MTs)">
                      Kelas 1 Tahfidzul Qur&apos;an KMI PMDI (Jenjang SMP/MTs)
                    </option>

                    <option value="Kelas 1 Intensif KMI PMDI (Jenjang SMA/MA)">
                      Kelas 1 Intensif KMI PMDI (Jenjang SMA/MA)
                    </option>
                  </select>
                  {errors.schoolLevel && <p className="text-[11px] text-red-500 font-semibold">{errors.schoolLevel.message}</p>}
                </div>

                {/* Upload Foto */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Upload Foto Santri (3x4)</label>
                  <div className="relative">
                    <input type="file" {...register('photo')} className="w-full text-xs text-gray-400 file:mr-3 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 dark:file:bg-emerald-950/20 file:text-emerald-700 dark:file:text-emerald-400 border border-gray-250 dark:border-gray-800 rounded-xl" />
                  </div>
                </div>

                {/* Upload KK */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Upload Kartu Keluarga (KK)</label>
                  <input type="file" {...register('familyCard')} className="w-full text-xs text-gray-400 file:mr-3 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 dark:file:bg-emerald-950/20 file:text-emerald-700 dark:file:text-emerald-400 border border-gray-250 dark:border-gray-800 rounded-xl" />
                </div>

                {/* Upload Akta */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Upload Akta Kelahiran</label>
                  <input type="file" {...register('birthCert')} className="w-full text-xs text-gray-400 file:mr-3 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 dark:file:bg-emerald-950/20 file:text-emerald-700 dark:file:text-emerald-400 border border-gray-250 dark:border-gray-800 rounded-xl" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <Button
                type="submit"
                loading={isLoading}
                className="w-full h-12 rounded-xl text-base font-bold shadow-lg"
              >
                {processStatus || "Submit Pendaftaran Santri Baru"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
