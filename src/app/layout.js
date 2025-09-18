// app/layout.js
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground min-h-screen font-sans">
        <header className="bg-white/90 shadow-md sticky top-0 z-10">
          <nav className="max-w-4xl mx-auto px-4 py-4">
            <ul className="flex space-x-6">
              <li>
                <Link href="/">
                  <a className="text-lg font-medium hover:text-blue-500 transition-colors">Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/productos">
                  <a className="text-lg font-medium hover:text-blue-500 transition-colors">Productos</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-lg font-medium hover:text-blue-500 transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <a className="text-lg font-medium hover:text-blue-500 transition-colors">Contacto</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="mt-12 text-center text-sm text-gray-500 pb-4">
          © {new Date().getFullYear()} Mi sitio
        </footer>
      </body>
    </html>
  );
}
