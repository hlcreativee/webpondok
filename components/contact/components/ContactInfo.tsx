'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch text-left">
      {/* Contact Details Column */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <h2 className="text-xl md:text-2xl font-bold font-display text-gray-900 dark:text-white">
          Detail Kontak
        </h2>
        
        <div className="flex flex-col gap-4">
          {/* Address */}
          <div className="flex gap-4 items-start bg-gray-50 dark:bg-gray-900/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-850">
            <div className="p-3 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400 rounded-xl shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Lokasi Pondok</span>
              <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-semibold mt-1 leading-relaxed">
                Jl. Raya Darul Ihsan No. 12, Sleman, D.I. Yogyakarta, Indonesia 55581
              </span>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex gap-4 items-start bg-gray-50 dark:bg-gray-900/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-850">
            <div className="p-3 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400 rounded-xl shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">WhatsApp</span>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-emerald-800 dark:text-emerald-400 font-bold mt-1 hover:underline">
                +62 (812) 3456-7890
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-start bg-gray-50 dark:bg-gray-900/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-850">
            <div className="p-3 bg-amber-50 text-amber-600 dark:bg-amber-950/20 dark:text-amber-400 rounded-xl shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email Resmi</span>
              <a href="mailto:info@darulihsan.sch.id" className="text-xs md:text-sm text-amber-600 dark:text-amber-400 font-bold mt-1 hover:underline">
                info@darulihsan.sch.id
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div className="flex gap-4 items-start bg-gray-50 dark:bg-gray-900/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-850">
            <div className="p-3 bg-indigo-50 text-indigo-600 dark:bg-indigo-950/20 dark:text-indigo-400 rounded-xl shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Jam Pelayanan</span>
              <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-semibold mt-1 leading-relaxed">
                Senin - Sabtu: 08.00 - 15.00 WIB
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Message and Maps Column */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <h2 className="text-xl md:text-2xl font-bold font-display text-gray-900 dark:text-white">
          Kirim Pesan
        </h2>

        {success ? (
          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400 p-6 rounded-2xl flex flex-col items-center gap-4 text-center animate-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-12 h-12" />
            <div>
              <h4 className="font-bold text-base">Pesan Terkirim!</h4>
              <p className="text-xs text-gray-500 mt-1">Terima kasih atas pesan Anda. Kami akan menghubungi Anda segera.</p>
            </div>
            <Button onClick={() => setSuccess(false)}>Kirim Pesan Baru</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/50 dark:bg-gray-900/20 p-6 rounded-3xl border border-gray-150 dark:border-gray-800">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Nama Lengkap *</label>
              <Input required name="name" value={formData.name} onChange={handleChange} placeholder="Nama Anda" />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Email *</label>
              <Input type="email" required name="email" value={formData.email} onChange={handleChange} placeholder="alamat-email@gmail.com" />
            </div>

            <div className="md:col-span-2 flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Subjek *</label>
              <Input required name="subject" value={formData.subject} onChange={handleChange} placeholder="Perihal pesan" />
            </div>

            <div className="md:col-span-2 flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Pesan *</label>
              <Textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Tulis pesan Anda disini..." />
            </div>

            <div className="md:col-span-2 mt-2">
              <Button type="submit" loading={loading} className="w-full h-11">
                <span>Kirim Pesan</span>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        )}

        {/* Embedded Google Maps Placeholder */}
        <div className="mt-2 bg-emerald-50/20 dark:bg-emerald-950/10 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden aspect-video relative flex flex-col justify-end p-4">
          <svg viewBox="0 0 500 250" className="absolute inset-0 w-full h-full text-emerald-800/10 dark:text-emerald-500/5 select-none pointer-events-none">
            <rect width="500" height="250" fill="none" />
            <path d="M 0 150 L 500 155" stroke="currentColor" strokeWidth="12" />
            <path d="M 250 0 L 250 250" stroke="currentColor" strokeWidth="10" />
            <g className="animate-bounce">
              <path d="M 250 95 C 242 95, 238 100, 238 108 C 238 118, 250 130, 250 130 C 250 130, 262 118, 262 108 C 262 100, 258 95, 250 95 Z" fill="var(--color-accent)" stroke="white" strokeWidth="1.5" />
              <circle cx="250" cy="105" r="4" fill="white" />
            </g>
          </svg>
          
          <div className="relative z-10 bg-white/90 dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 p-4 rounded-2xl flex items-center justify-between text-left">
            <div>
              <h4 className="text-xs font-bold text-gray-800 dark:text-white">Peta Kampus Darul Ihsan</h4>
              <p className="text-[10px] text-gray-500">Sleman, Daerah Istimewa Yogyakarta</p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary text-white rounded-xl hover:scale-105 active:scale-95 transition-all text-xs font-bold flex items-center gap-1 shrink-0"
            >
              <span>Buka Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
