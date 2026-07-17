import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, AlertCircle } from 'lucide-react';
import { newsArticles } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';

// Static params generation for Next.js build optimization
export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id,
  }));
}

interface NewsDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;
  const article = newsArticles.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  // Related suggestions
  const related = newsArticles
    .filter((item) => item.id !== id)
    .slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8 text-left">
      {/* Back link */}
      <Link
        href="/news"
        className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-emerald-800 dark:text-emerald-450 hover:text-emerald-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Berita</span>
      </Link>

      <article className="flex flex-col gap-6">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-gray-900 dark:text-white leading-tight">
          {article.title}
        </h1>

        {/* Metadata bar */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 border-y border-gray-150 dark:border-gray-800 py-4 font-medium">
          <span className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-450 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-emerald-100/10">
            {article.category}
          </span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-450 shrink-0" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-emerald-600 dark:text-emerald-450 shrink-0" />
            <span>{article.author}</span>
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans mt-4">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      {/* Related News sections */}
      <section className="border-t border-gray-150 dark:border-gray-800 pt-10 mt-6 flex flex-col gap-6">
        <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white">
          Warta Terkait Lainnya
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {related.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="rounded-2xl border border-gray-100 bg-white/70 p-5 shadow hover:shadow-md dark:border-gray-850 dark:bg-gray-900/40 backdrop-blur-md flex flex-col gap-3 group transition-all"
            >
              <span className="text-[10px] text-emerald-750 dark:text-emerald-450 font-bold uppercase tracking-wider">
                {item.category}
              </span>
              <h4 className="text-sm md:text-base font-bold font-display text-gray-950 dark:text-white group-hover:text-emerald-750 dark:group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                {item.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
