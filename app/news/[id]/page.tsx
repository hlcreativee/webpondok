import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { newsArticles } from '@/lib/data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id,
  }));
}

interface NewsDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { id } = await params;

  const article = newsArticles.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  const related = newsArticles
    .filter((item) => item.id !== id)
    .slice(0, 2);

  return (
    <main className="bg-slate-50 dark:bg-[#090f0c] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Back */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Berita
        </Link>

        {/* Article */}
        <article className="mt-8 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg p-6 sm:p-8">

          {/* Category */}
          <span className="inline-flex rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="mt-5 text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 dark:text-white">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-6 border-y border-slate-200 dark:border-slate-700 py-4 text-sm text-slate-600 dark:text-slate-400">

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              <span>{article.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              <span>{article.author}</span>
            </div>

          </div>

          {/* Content */}
          <div className="mt-8 space-y-6 text-base leading-8 text-slate-800 dark:text-slate-300">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-12">

            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              Berita Lainnya
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400 line-clamp-3">
                    {item.summary}
                  </p>
                </Link>
              ))}
            </div>

          </section>
        )}

      </div>
    </main>
  );
}