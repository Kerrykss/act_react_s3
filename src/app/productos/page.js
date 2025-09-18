// app/productos/page.js

import Link from 'next/link';

export default function ProductosPage() {
  const categorias = [
    { nombre: 'Electrónicos', ruta: '/productos/electronicos', descripcion: 'Gadgets, computadoras y tecnología moderna' },
    { nombre: 'Ropa', ruta: '/productos/ropa', descripcion: 'Moda, estilo y comodidad en cada prenda' }
  ];

  const productos = [
    { id: '1', nombre: 'Laptop', descripcion: 'Laptop de alto rendimiento para trabajo y entretenimiento.' },
    { id: '2', nombre: 'Smartphone', descripcion: 'Smartphone con cámara avanzada y batería duradera.' },
    { id: '3', nombre: 'Tablet', descripcion: 'Tablet ligera ideal para navegación, lectura y ocio.' }
  ];

  return (
    <div className="space-y-10 px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Productos</h1>

      {/* Categorías */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categorias.map(cat => (
          <Link
            key={cat.nombre}
            href={cat.ruta}
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{cat.nombre}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{cat.descripcion}</p>
          </Link>
        ))}
      </div>

      {/* Productos destacados */}
      <div>
        <h2 className="text-2xl font-semibold">Productos disponibles</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map(prod => (
            <Link
              key={prod.id}
              href={`/productos/${prod.id}`}
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 duration-200"
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">{prod.nombre}</h3>
              <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">{prod.descripcion}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
