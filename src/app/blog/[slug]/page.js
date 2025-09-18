// app/blog/[slug]/page.js
import Link from 'next/link';

export default function ArticuloIndividual({ params }) {
  const { slug } = params;
  return (
    <>
      <h1>Artículo: {slug}</h1>
      <p>Contenido simple para el artículo {slug}.</p>
      <p><Link href="/blog">Volver al blog</Link></p>
    </>
  );
}
