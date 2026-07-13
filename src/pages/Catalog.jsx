import { useState } from "react";

export default function Catalog() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "accesorios.jpeg","cadena 1.jpg","cadena 3.jpg","image1 (3).jpeg",
    "image1 (4).jpeg","image1 (47).jpeg","image1 (49).jpeg","image1 (5).jpeg",
    "image1 (10).jpeg","image1 (11).jpeg","image1 (12).jpeg","image1 (13).jpeg",
    "image1 (14).jpeg","image1 (15).jpeg","image1 (16).jpeg","image1 (17).jpeg",
    "image1 (18).jpeg","image1 (19).jpeg","image1 (21).jpeg","image1 (22).jpeg",
    "image1 (25).jpeg","piloto.png","image1 (28).jpeg","image1 (29).jpeg",
    "image1 (30).jpeg","image1 (31).jpeg","image1 (32).jpeg","image1 (33).jpeg",
    "image1 (34).jpeg","image1 (35).jpeg","image1 (36).jpeg","image1 (37).jpeg",
    "image1 (38).jpeg","image1 (39).jpeg","image1 (40).jpeg","image1 (41).jpeg",
    "image1 (42).jpeg","image1 (43).jpeg","image1 (44).jpeg","image1 (45).jpeg",
    "image1 (46).jpeg","image1 (47).jpeg","image1 (48).jpeg","image1 (49).jpeg",
    "image1 (50).jpeg","image1 (51).jpeg","image1 (52).jpeg","caroaga.jpeg",
    "image1 (54).jpeg","rayban 1.png","image1 (56).jpeg","image1.jpeg",
    "image2 (2).jpeg","img 1 (5).jpeg","img 1 (20).jpeg","piloto c.png",
    "imagen 11.jpeg","imagen 8.jpeg","imagen 9.jpeg","imagen 10.jpeg",
    "pradah.jpeg","of carolina.png",
  ];

  // Generador de precios automáticos desde 50.000
  const generatePrice = () =>
    Math.floor(50000 + Math.random() * 20000);

  return (
    <section className="p-10">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-6 text-center">
        Catálogo Óptica J & V
      </h1>
      <p className="mb-8 text-center text-gray-600">
  Monturas de alta calidad a precios accesibles  
  <br />
  <span className="italic text-sm text-purple-700">
    *Precios y características sujetos a cambios y mejoras.*
  </span>
</p>

      {/* SECCIÓN DESTACADA: LENTES DE CONTACTO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
          <img src="/optica/acuvue.jpg" alt="Lentes de contacto 1" className="w-full h-64 object-cover rounded-lg mb-4"/>
          <h3 className="text-xl font-bold text-purple-700">Lentes de Contacto</h3>
          <p className="text-gray-600 mt-2">Comodidad y visión clara para tu día a día.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
          <img src="/optica/airoptix.jpeg" alt="Lentes de contacto 2" className="w-full h-64 object-cover rounded-lg mb-4"/>
          <h3 className="text-xl font-bold text-purple-700">Lentes de Contacto Premium</h3>
          <p className="text-gray-600 mt-2">Tecnología avanzada para mayor confort.</p>
        </div>
      </div>

      {/* GALERÍA DE MONTURAS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md bg-white border hover:shadow-2xl transition-transform hover:scale-105 p-3 cursor-pointer"
          >
            {/* Imagen */}
            <div
              className="aspect-square overflow-hidden rounded-md"
              onClick={() => setSelectedImage(`/optica/${img}`)}
            >
              <img
                src={`/optica/${img}`}
                alt={`Producto ${index}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Info: precio + botón */}
            <div className="mt-3 text-center">
              <p className="text-lg font-bold text-purple-700">
                ${generatePrice().toLocaleString("es-CO")}
              </p>
              <button
                className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors"
              >
                Agregar al carrito 🛒
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full">
            <img
              src={selectedImage}
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="mt-4 text-center text-white font-semibold">
              Montura exclusiva desde $50.000
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
