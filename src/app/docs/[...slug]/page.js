// app/docs/[...slug]/page.js

export default function DocsPage({ params }) {
  // params.slug será un array o undefined si no hay segmentos
  const slugArray = params.slug || [];
  // construir breadcrumbs
  const breadcrumbs = ['Docs', ...slugArray];
  return (
    <>
      <h1>Documentación: {slugArray.join(' / ') || 'Principal'}</h1>
      <nav>
        <p>{breadcrumbs.join(' > ')}</p>
      </nav>
      <div>
        <p>Contenido de docs para la ruta: {slugArray.join('/') || 'Home de docs'}</p>
      </div>
    </>
  );
}
