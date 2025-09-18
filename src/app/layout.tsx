// src/app/layout.tsx

import Link from 'next/link';
import './globals.css';  // nombre corregido

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <header className="bg-white/90 dark:bg-gray-900 shadow-md sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Mi Sitio</div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-blue-500 dark:hover:text-blue-300">Inicio</Link></li>
                <li><Link href="/productos" className="hover:text-blue-500 dark:hover:text-blue-300">Productos</Link></li>
                <li><Link href="/blog" className="hover:text-blue-500 dark:hover:text-blue-300">Blog</Link></li>
                <li><Link href="/contacto" className="hover:text-blue-500 dark:hover:text-blue-300">Contacto</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow max-w-5xl mx-auto px-6 py-10">
          {children}
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-6">
          <div className="max-w-5xl mx-auto text-center">
            © {new Date().getFullYear()} Mi Sitio. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
