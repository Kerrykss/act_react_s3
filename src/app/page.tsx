// app/page.tsx

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background text-foreground">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-5xl font-bold">Bienvenido a Nuestro Sitio</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Aquí encontrarás productos seleccionados con cuidado, artículos de blog informativos, y cómo contactarnos si tienes dudas o deseas más información.
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="/productos" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Productos
          </Link>
          <Link href="/blog" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Blog
          </Link>
          <Link href="/contacto" className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
