// app/productos/electronicos/page.js

export default function ElectronicosPage() {
  const productos = ['Laptop', 'Smart TV', 'Cámara'];
  return (
    <>
      <h1>Productos &gt; Electrónicos</h1>
      <p>{productos.length} productos encontrados</p>
      <ul>
        {productos.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </>
  );
}
