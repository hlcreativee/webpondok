'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Set mounted state to true once the client side renders to prevent hydration mismatch for theme
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled
          ? 'bg-white/95 dark:bg-[#090f0c]/95 shadow-md py-2 backdrop-blur-md border-b border-gray-150 dark:border-gray-800/80'
          : 'bg-white/90 dark:bg-[#090f0c]/90 py-3.5 border-b border-gray-100 dark:border-gray-850/40'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo & School Name */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden shadow-lg shadow-emerald-800/20 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logopondok.jpeg"
                alt="Logo Pondok Modern Darul Ihsan"
                width={40}
                height={40}
                className="object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-bold font-display tracking-tight text-emerald-800 dark:text-emerald-400 leading-none">
                Darul Ihsan
              </span>
              <span className="text-[9px] text-gray-500 dark:text-gray-400 font-semibold tracking-wider uppercase mt-1">
                Pondok Modern
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-2.5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 uppercase',
                    isActive
                      ? 'text-emerald-800 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-sm border border-emerald-800/10'
                      : 'text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800/40 border border-transparent'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action panel (Theme Switch & CTA) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-150 dark:border-gray-800"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-500" />
                ) : (
                  <Moon className="w-4 h-4 text-emerald-800" />
                )}
              </button>
            )}

            {/* CTA Button */}
            <Link
              href="/registration"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-wide text-white bg-gradient-to-r from-emerald-800 to-emerald-600 hover:from-emerald-750 hover:to-emerald-550 shadow-md shadow-emerald-800/10 hover:shadow-lg transition-all active:scale-[0.98] border border-emerald-800/20"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile Right Bar controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-150 dark:border-gray-850"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4.5 h-4.5 text-amber-500" />
                ) : (
                  <Moon className="w-4.5 h-4.5 text-emerald-800" />
                )}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:text-emerald-750 dark:hover:text-emerald-450 hover:bg-gray-50 dark:hover:bg-gray-850 border border-gray-150 dark:border-gray-850 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Slide-out Overlay */}
      {isOpen && (
        <>
          <div className="fixed inset-0 top-[60px] bg-black/45 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsOpen(false)}></div>
          <div className="absolute top-[60px] left-0 right-0 bg-white dark:bg-[#090f0c] border-b border-gray-150 dark:border-gray-800 px-4 py-6 shadow-xl z-50 flex flex-col gap-4 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1.5 text-left">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 uppercase',
                      isActive
                        ? 'text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-850'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <hr className="border-gray-100 dark:border-gray-800 my-1" />
            <Link
              href="/registration"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-800 to-emerald-600 shadow-md shadow-emerald-800/10"
            >
              Daftar Sekarang
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
