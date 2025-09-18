// app/productos/ropa/page.js

export default function RopaPage() {
  const productos = ['Camisa', 'Pantalón', 'Chaqueta'];
  return (
    <>
      <h1>Productos &gt; Ropa</h1>
      <p>{productos.length} productos encontrados</p>
      <ul>
        {productos.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </>
  );
}
