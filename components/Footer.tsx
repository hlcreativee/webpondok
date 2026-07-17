'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang Pondok' },
    { href: '/programs', label: 'Program' },
    { href: '/curriculum', label: 'Kurikulum' },
    { href: '/extracurricular', label: 'Ekstrakurikuler' },
    { href: '/news', label: 'Berita' },
    { href: '/gallery', label: 'Galeri' },
    { href: '/registration', label: 'Pendaftaran' },
    { href: '/contact', label: 'Kontak' },
  ];

  return (
    <footer className="bg-emerald-950 text-white border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: School Identity */}
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <span className="text-lg font-bold font-display tracking-tight text-white leading-none">
                Darul Ihsan
                <span className="block text-[9px] uppercase text-emerald-450 font-semibold tracking-wider mt-1">Pondok Modern</span>
              </span>
            </div>
            <p className="text-xs md:text-sm text-emerald-100/70 leading-relaxed mt-2">
              Mencetak Generasi Qurani, Berakhlak Mulia, Berprestasi, dan Berwawasan Global.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-900/60 hover:bg-emerald-600 text-emerald-100 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-900/60 hover:bg-emerald-600 text-emerald-100 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-900/60 hover:bg-emerald-600 text-emerald-100 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Youtube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left">
            <h3 className="text-white font-bold font-display text-sm uppercase tracking-wider mb-5 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-[2px] after:bg-brand-gold">
              Pilihan Menu
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 mt-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-emerald-100/70 hover:text-white text-xs md:text-sm hover:translate-x-0.5 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-left">
            <h3 className="text-white font-bold font-display text-sm uppercase tracking-wider mb-5 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-[2px] after:bg-brand-gold">
              Hubungi Kami
            </h3>
            <ul className="space-y-4 text-xs md:text-sm text-emerald-100/70 mt-2">
              <li className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span>Jl. Raya Darul Ihsan No. 12, Sleman, D.I. Yogyakarta, Indonesia 55581</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                <a href="tel:+62274123456" className="hover:text-white transition-colors">
                  +62 (274) 123-456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                <a href="mailto:info@darulihsan.sch.id" className="hover:text-white transition-colors">
                  info@darulihsan.sch.id
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational Hours */}
          <div className="text-left">
            <h3 className="text-white font-bold font-display text-sm uppercase tracking-wider mb-5 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-[2px] after:bg-brand-gold">
              Pelayanan Kantor
            </h3>
            <div className="text-xs md:text-sm text-emerald-100/70 space-y-2 mt-2 leading-relaxed">
              <p className="font-semibold text-white">Jam Operasional Sekretariat:</p>
              <p>Senin - Sabtu: 08.00 - 15.00 WIB</p>
              <p className="text-[10px] text-emerald-200/50 mt-2">* Hari Ahad &amp; Libur Nasional Kantor Sekretariat Tutup.</p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-emerald-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-100/40">
          <p>&copy; {new Date().getFullYear()} Pondok Modern Darul Ihsan. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Ketentuan Layanan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
