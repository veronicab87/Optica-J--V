import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <section className="p-10 space-y-16">

     {/* ------------------ HERO PROFESIONAL ÓPTICA J&V ------------------ */}
<motion.section
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    relative
    overflow-hidden
    rounded-3xl
    bg-gradient-to-br
    from-purple-600
    via-purple-400
    to-purple-200
    shadow-2xl
  "
>
  {/* ---------------- LOGO GRANDE DE FONDO ---------------- */}
  <img
  src="/logo_small.png"
  alt="Logo Fondo"
  className="
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[520px]
    opacity-[0.10]
    pointer-events-none
    select-none
    z-0
  "
/>
  {/* ---------------- EFECTOS DE LUZ ---------------- */}
  <div
    className="
      absolute
      -top-28
      -left-28
      w-96
      h-96
      bg-white/40
      rounded-full
      blur-3xl
    "
  >
  </div>

  <div
    className="
      absolute
      bottom-0
      right-0
      w-[450px]
      h-[450px]
      bg-purple-100/40
      rounded-full
      blur-3xl
    "
  >
  </div>

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-white/10
      via-transparent
      to-white/20
    "
  >
  </div>

  {/* ---------------- CONTENIDO ---------------- */}

  <div
    className="
      relative
      z-20
      grid
      lg:grid-cols-2
      items-center
      gap-12
      px-5
      lg:py-16
      py-10
    "
  >
    {/* ---------------- TEXTO IZQUIERDA ---------------- */}
    <div>
      {/* ETIQUETA */}
      <span
        className="
          inline-flex
          items-center
          bg-white/25
          backdrop-blur-xl
          border
          border-white/30
          px-6
          py-3
          rounded-full
          text-sm
          uppercase
          tracking-widest
          text-white
          mb-6
          shadow-lg
        "
      >
        👁️ Tu visión, nuestra prioridad en tu optica virtual J & V
      </span>
      {/* TITULO */}

      <h1
        className="
          text-3xl
          lg:text-5xl
          sm:text-4xl
          font-black
          text-white
          leading-tight
          drop-shadow-lg
        "
      >
        Óptica

        <br />
        <span
          className="
            text-purple-100
          "
        >
          J & V
        </span>

      </h1>
      {/* SLOGAN */}
      <h2
        className="
          mt-6
          text-3xl
          font-bold
          text-white
        "
      >✨ Cuidamos tu visión, realzamos tu estilo.
      </h2>

      {/* DESCRIPCIÓN */}
      <p
        className="
          mt-5
          text-lg
          lg:text-xl
          text-purple-50
          leading-9
          max-w-xl
        "
      >
     Descubre monturas exclusivas, lentes oftálmicos de alta precisión y lentes de contacto de las mejores marcas. Cuida tu salud visual con tecnología de última generación, calidad garantizada y diseños que resaltan tu estilo.
      </p>
      {/* BOTONES */}
      <div
        className="
          flex
          flex-wrap
          gap-5
          mt-10
        "
      >
        <Link
          to="/contacto"
          className="
            bg-white
            text-purple-600
            font-bold
            px-8
            py-4
            rounded-full
            shadow-xl
            hover:scale-105
            hover:bg-purple-50
            transition
          "
        >
          📅 Agendar Cita
        </Link>
        <Link
          to="/catalogo"
          className="
            border-2
            border-white
            text-white
            font-semibold
            px-8
            py-4
            rounded-full
            hover:bg-white
            hover:text-purple-600
            transition
          "
        >
          🛍️ Ver Catálogo
        </Link>

      </div>

      {/* BENEFICIOS */}
      <div

        className="
          mt-12
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-6
        "
      >
      </div>


    </div>

    {/* ---------------- IMAGEN DERECHA ---------------- */}
    <div
      className="
        relative
        flex
        items-center
        justify-center
        min-h-[520px]
      "
    >
      {/* CIRCULO DETRAS DE GAFAS */}
      <div
        className="
          absolute
          w-[430px]
          h-[430px]
          bg-white/20
          rounded-full
          blur-2xl
          z-0
        "
      >
      </div>

      {/* LOGO MARCA DE AGUA CENTRAL */}

      <motion.img
        src="/logo_small.png"
        alt="Logo Óptica J&V"
        animate={{
          opacity:[0.08,0.15,0.08],
          scale:[1,1.05,1]
        }}
        transition={{
          duration:5,
          repeat:Infinity
        }}
        className="
          absolute
          w-[350px]
          opacity-10
          z-10
          pointer-events-none
        "
      />
      {/* GAFAS PRINCIPALES */}
      <motion.img
        src="/home/vero 1.jpeg"
        alt="Gafas Óptica J&V"
        animate={{
          y:[0,-15,0],
          rotate:[0,2,0,-2,0],
          scale:[1,1.03,1],
        }}
        transition={{
          duration:5,
          repeat:Infinity,
        }}
        className="
          relative
          z-20
          w-[500px]
          lg:w-[600px]
          rounded-3xl
          shadow-2xl
          border
          border-white/40
        "
      />
    </div>
  </div>
</motion.section>
      {/* ------------------ BOTONES RÁPIDOS ------------------ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <Link
          to="/contacto"
          className="p-5 bg-white shadow-lg rounded-xl hover:bg-morado hover:text-white transition duration-300"
        >
          <span className="text-3xl block">📅</span>
          <span className="font-semibold">Agendar</span>
        </Link>

        <Link
          to="/catalogo"
          className="p-5 bg-white shadow-lg rounded-xl hover:bg-morado hover:text-white transition duration-300"
        >
          <span className="text-3xl block">🛍️</span>
          <span className="font-semibold">Productos</span>
        </Link>

        <Link
          to="/carrito"
          className="p-5 bg-white shadow-lg rounded-xl hover:bg-morado hover:text-white transition duration-300"
        >
          <span className="text-3xl block">🛒</span>
          <span className="font-semibold">Carrito</span>
        </Link>

        <Link
          to="/servicios"
          className="p-5 bg-white shadow-lg rounded-xl hover:bg-morado hover:text-white transition duration-300"
        >
          <span className="text-3xl block">👁️</span>
          <span className="font-semibold">Citas</span>
        </Link>
      </div>
      {/* ------------------ CARRUSEL ------------------ */}
      <div>
        <h2 className="text-3xl font-bold text-morado mb-4">
          Promociones
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          loop
          className="rounded-2xl shadow-xl"
        >
          <SwiperSlide>
            <img
              src="/home/carru2.jpeg"
              alt="Promoción"
             className="w-full
h-[260px]
sm:h-[350px]
lg:h-[450px]
object-cover
rounded-2xl
"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/home/niños.jpg"
              alt="Promoción"
              className="w-full h-[450px] object-cover rounded-2xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/home/gafas 26.png"
              alt="Promoción"
              className="w-full h-[450px] object-cover rounded-2xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
  {/* ---------------- COLUMNA IZQUIERDA ---------------- */}
  <div className="lg:col-span-2 space-y-12">
    {/* CATEGORÍAS */}
    <div>
      <h2 className="text-3xl font-bold text-morado mb-6">
        Categorías
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { img: "/home/img1.png", title: "Gafas de Sol" },
          { img: "/home/img2.png", title: "Gafas Oftálmicas" },
          { img: "/home/img3.png", title: "Lentes de Contacto" },
        ].map((cat) => (
          <motion.div
            key={cat.title}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-56 object-cover"
            />

            <h3 className="text-xl font-semibold p-4 text-center">
              {cat.title}
            </h3>

          </motion.div>
        ))}

      </div>
    </div>
    {/* PORTAFOLIO */}
    <div>
      <h2 className="text-3xl font-bold text-morado mb-6">
        Portafolio
      </h2>

<div className="
grid
grid-cols-2
sm:grid-cols-3
lg:grid-cols-4
gap-4
sm:gap-6
">        {[
          "piloto.png",
          "rayban 1.jpeg",
          "carolina h sol.png",
          "of carolina.png",
          "caroaga.jpeg",
          "pradah.jpeg",
          "pramcolor.jpeg",
          "lacostesh.jpeg",
        ].map((img, i) => (

          <img
            key={i}
            src={`/home/${img}`}
            alt=""
            className="rounded-xl h-44 w-full object-cover shadow-lg hover:scale-105 transition"
          />

        ))}
      </div>
    </div>
  </div>
  {/* ---------------- COLUMNA DERECHA ---------------- */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    className="bg-white rounded-2xl shadow-xl p-6 h-fit sticky top-24"
  >
    <img
      src="/home/post1.jpeg"
      alt="Consejo"
      className="rounded-xl w-full mb-6"
    />
    <h2 className="text-3xl font-bold text-morado mb-4">
      Consejos de Salud Visual
    </h2>
    <div className="space-y-5">
  <div className="bg-purple-50 border-l-4 border-morado rounded-xl p-4">
    <h3 className="text-xl font-semibold text-morado flex items-center gap-2">
      💻 Descansa tu vista
    </h3>
    <p className="text-gray-700 mt-2 leading-7">
      Si pasas muchas horas frente a computadores, celulares o tabletas,
      aplica la regla <strong>20-20-20</strong>: cada 20 minutos mira un
      objeto ubicado a 20 pies (6 metros) durante al menos 20 segundos.
      Esto ayuda a disminuir la fatiga visual y el cansancio ocular.
    </p>
  </div>
  <div className="border-t border-gray-200"></div>
  <div className="bg-purple-50 border-l-4 border-morado rounded-xl p-4">
    <h3 className="text-xl font-semibold text-morado flex items-center gap-2">
      🌙 Cuida tus ojos antes de dormir
    </h3>
    <p className="text-gray-700 mt-2 leading-7">
      Reduce el uso de pantallas al menos <strong>una hora antes de acostarte</strong>.
      La luz azul puede interferir con la producción de melatonina, afectando
      la calidad del sueño. Si debes usar dispositivos electrónicos, considera
      lentes con filtro Blue Block o activa el modo nocturno de tus equipos.
    </p>
  </div>
</div>
    <button className="mt-6 bg-morado text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
      Leer más
    </button>
  </motion.div>
</div>
      {/* ------------------ gama ------------------ */}
      <div>
        <h2 className="text-3xl font-bold text-morado mb-6">
          Gama de Productos
        </h2>
        <div className="
grid
grid-cols-2
md:grid-cols-4
gap-3
">
          {[
            "piloto c.png",
            "Group-445-1.jpg",
            "sw.jpeg",
            "oak.jpeg",
          ].map((img, i) => (
            <img
              key={i}
              src={`/home/${img}`}
              alt={`Producto ${i + 1}`}
              className="rounded-xl h-40 w-full object-cover shadow-lg"
            />
          ))}

        </div>
      </div>
      {/* ------------------ SECCIÓN MEJORADA: CUIDADOS Y ACCESORIOS ------------------ */}
      <section className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-stretch"
        >
          {/* COLUMNA IZQUIERDA: Consejos Profesionales */}
          <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-l-8 border-purple-600 rounded-3xl shadow-xl flex flex-col justify-center">
            <span className="text-purple-600 font-extrabold uppercase tracking-wider text-xs mb-2">
              Salud y Prevención
            </span>
            <h2 className="text-3xl font-black mb-6 text-gray-800">
              Protege tu Salud Visual
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">👁️</span>
                <div>
                  <strong>Control Anual:</strong> Agenda tu examen de la vista mínimo una vez al año para prevenir fatiga y actualizar tu fórmula.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">🌞</span>
                <div>
                  <strong>Protección UV Total:</strong> El sol también daña tus ojos. Usa siempre lentes de sol o tratamientos fotosensibles certificados.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">💻</span>
                <div>
                  <strong>Regla 20-20-20:</strong> Cada 20 minutos de pantalla, mira un objeto a 6 metros durante 20 segundos para relajar la vista.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">🧼</span>
                <div>
                  <strong>Higiene Correcta:</strong> Limpia tus cristales exclusivamente con líquido óptico especial y paños de microfibra para evitar rayones.
                </div>
              </li>
            </ul>
          </div>
          {/* COLUMNA DERECHA: Espacio Comercial de Accesorios */}
          <div className="bg-white border border-purple-100 rounded-3xl shadow-xl p-8 flex flex-col justify-between overflow-hidden relative group">
        
            {/* Texto Comercial */}
            <div>
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Complementos Premium
              </span>
              <h3 className="text-2xl font-black text-gray-800 mt-3 mb-2">
                Accesorios para tus Gafas
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mantén tus lentes impecables y protegidos con nuestra línea exclusiva de estuches rígidos, cordones de moda y kits de limpieza profesional.
              </p>
            </div>
            {/* CONTENEDOR DE LA IMAGEN */}
            <div className="my-6 relative rounded-2xl overflow-hidden bg-purple-50 h-52 flex items-center justify-center border border-dashed border-purple-200">
              <img 
                src="/accesorios.jpeg" // Recuerda meter tu imagen en la carpeta 'public' con el nombre accesorios.png
                alt="Accesorios Óptica J&V" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            </div>
            {/* Enlace o Botón Comercial */}
            <a 
              href="/catalogo" 
              className="block text-center bg-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-purple-700 active:scale-98 transition-all"
            >
              Ver Catálogo de Accesorios
            </a>
          </div>
        </motion.div>
      </section> 
{/* ------------------ FILTROS Y TECNOLOGÍAS ------------------ */}
<div>
  <h2 className="text-3xl font-bold text-morado mb-8 text-center">
    Filtros y Tecnologías
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        titulo: "💙 Blue Block",
        descripcion: "Protege tus ojos de la luz azul emitida por computadores, celulares y televisores."
      },
      {
        titulo: "🕶️ Fotocromáticos",
        descripcion: "Se oscurecen automáticamente con la luz solar y recuperan su transparencia en interiores."
      },
      {
        titulo: "🌈 Fotocromáticos de Colores",
        descripcion: "Disponibles en gris, café, verde, azul, rosa y otros tonos modernos."
      },
      {
        titulo: "🔍 Alto Índice",
        descripcion: "Lentes más delgados y livianos para fórmulas altas, ofreciendo mayor comodidad y estética."
      },
      {
        titulo: "✨ Antirreflejo",
        descripcion: "Reduce reflejos molestos, mejora la visión nocturna y brinda mayor transparencia."
      },
      {
        titulo: "☀️ Protección UV 400",
        descripcion: "Bloquea hasta el 100% de los rayos ultravioleta para proteger la salud visual."
      },
      {
        titulo: "💧 Hidrofóbico",
        descripcion: "Repele agua, polvo y grasa, facilitando la limpieza de los lentes."
      },
      {
        titulo: "🛡️ Antirrayas",
        descripcion: "Mayor resistencia a rayones para prolongar la vida útil de tus lentes."
      },
      {
        titulo: "👓 Lentes Progresivos",
        descripcion: "Permiten ver de cerca, media y larga distancia sin cambiar de gafas."
      }
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-morado hover:shadow-2xl hover:-translate-y-1 transition duration-300"
      >
        <h3 className="text-xl font-bold text-morado mb-3">
          {item.titulo}
        </h3>

        <p className="text-gray-600 leading-7">
          {item.descripcion}
        </p>
      </div>
    ))}

  </div>
</div>
    </section>
  );
}