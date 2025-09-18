// app/blog/page.js

import Link from 'next/link';

export default function BlogPage() {
  const articulos = [
    {
      slug: 'introduccion-nextjs',
      titulo: 'Introducción Next.js',
      descripcion: 'Conoce los conceptos básicos de Next.js y cómo comenzar de cero.'
    },
    {
      slug: 'react-server-components',
      titulo: 'React Server Components',
      descripcion: 'Explora cómo funcionan los componentes del lado del servidor.'
    },
    {
      slug: 'app-router-guia',
      titulo: 'App Router Guía',
      descripcion: 'Guía paso a paso para usar el App Router en Next.js 13+.'
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">Blog</h1>
      <div className="max-w-3xl mx-auto divide-y divide-gray-300 dark:divide-gray-700">
        {articulos.map((art) => (
          <Link 
            key={art.slug} 
            href={`/blog/${art.slug}`} 
            className="block py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{art.titulo}</h2>
              <p className="text-gray-700 dark:text-gray-300">{art.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
