// app/blog/layout.js
import Link from 'next/link';

export default function BlogLayout({ children }) {
  return (
    <>
      <h2>Sección de Blog</h2>
      <nav>
        <ul>
          <li><Link href="/blog/introduccion-nextjs">Introducción Next.js</Link></li>
          <li><Link href="/blog/react-server-components">React Server Components</Link></li>
          <li><Link href="/blog/app-router-guia">App Router Guía</Link></li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
