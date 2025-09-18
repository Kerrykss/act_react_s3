// app/productos/[id]/page.js
import Link from 'next/link';

export default function ProductoIndividual({ params }) {
  const { id } = params;
  return (
    <>
      <h1>Producto: {id}</h1>
      <p>Descripción simple del producto {id}.</p>
      <p><Link href="/productos">Volver a productos</Link></p>
    </>
  );
}
