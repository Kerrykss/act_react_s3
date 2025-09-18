// app/productos/layout.js
import Link from 'next/link';

export default function ProductosLayout({ children }) {
  return (
    <>
      <h2>Sección de Productos</h2>
      <nav>
        <ul>
          <li><Link href="/productos/electronicos">Electrónicos</Link></li>
          <li><Link href="/productos/ropa">Ropa</Link></li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
