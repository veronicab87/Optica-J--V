import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- ESTADOS Y LÓGICA DEL CALENDARIO DINÁMICO ---
  const [selectedDate, setSelectedDate] = useState(null);
  
  // Inicializamos en el año 2026
  const [year] = useState(2026); 
  // Inicializamos en el mes actual (0 = Enero, 11 = Diciembre)
  const [month, setMonth] = useState(new Date().getMonth());

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  // Función para generar los días del mes respetando el día de la semana en que inicia
  const generateCalendarDays = () => {
    // Obtener el primer día del mes (ej: qué día cae el 1 de ese mes)
    // Restamos 1 o ajustamos para que la semana empiece en Lunes (0=Lunes, 6=Domingo)
    let firstDayIndex = new Date(year, month, 1).getDay();
    let startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

    // Obtener el total de días que tiene el mes actual
    const totalDays = new Date(year, month + 1, 0).getDate();

    const daysArray = [];

    // Rellenar con espacios en blanco los días de la semana anterior
    for (let i = 0; i < startOffset; i++) {
      daysArray.push(null);
    }

    // Rellenar con los números de los días
    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(i);
    }

    return daysArray;
  };

  const calendarDays = generateCalendarDays();

  // Resetear el día seleccionado si se cambia de mes
  const handleMonthChange = (newMonth) => {
    setSelectedDate(null);
    setMonth(newMonth);
  };

  // --- DATOS ESTÁTICOS ---
  const values = [
    {
      icon: "👁️",
      title: "Salud Visual",
      text: "Cuidamos tu visión con soluciones profesionales y personalizadas."
    },
    {
      icon: "🕶️",
      title: "Calidad",
      text: "Trabajamos con productos confiables y tecnología avanzada."
    },
    {
      icon: "🤝",
      title: "Atención Personalizada",
      text: "Te acompañamos para elegir los lentes ideales para ti."
    }
  ];

  const news = [
    "📰 Nueva colección de monturas modernas",
    "👓 Tecnología avanzada en lentes oftálmicos",
    "💡 Consejos para cuidar tu salud visual"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 px-6 py-14 space-y-16">
      
      {/* ================= BANNER ================= */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl h-80 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-300 shadow-2xl flex items-center justify-center text-center"
      >
        <img
          src="/logo_small.png"
          alt="Logo fondo"
          className="absolute w-[450px] opacity-10"
        />
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-6xl font-black text-white">
            Óptica J & V
          </h1>
          <p className="mt-4 text-xl text-purple-100">
            Cuidamos tu visión, resaltamos tu estilo
          </p>
        </div>
      </motion.div>

      {/* ================= QUIENES SOMOS ================= */}
      <section className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div>
          <span className="bg-purple-100 text-purple-600 px-5 py-2 rounded-full font-semibold">
            Sobre nosotros
          </span>
          <h2 className="mt-5 text-4xl font-black text-gray-800">
            Quiénes Somos
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-8">
            Somos una óptica familiar comprometida con el bienestar y la salud visual de cada uno de nuestros clientes. En Óptica J & V brindamos atención personalizada, asesoría profesional y productos de alta calidad, ofreciendo monturas, lentes oftálmicos y lentes de contacto con tecnología de última generación. Nuestro propósito es cuidar la visión de toda la familia, generando confianza, comodidad y satisfacción en cada visita.

          </p>
        </div>

        <motion.img
          src="/logo_small.png"
          alt="Óptica J&V"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-72 mx-auto drop-shadow-2xl"
        />
      </section>

      {/* ================= MISION Y VISION ================= */}
      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
          <h3 className="text-2xl font-bold text-purple-600">🎯 Nuestra Misión</h3>
          <p className="mt-4 text-gray-600 leading-7">
            Brindar soluciones visuales de calidad, con productos innovadores y atención cercana para mejorar la vida de nuestros clientes.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
          <h3 className="text-2xl font-bold text-purple-600">🚀 Nuestra Visión</h3>
          <p className="mt-4 text-gray-600 leading-7">
            Ser una óptica reconocida por la confianza, tecnología y excelencia en salud visual.
          </p>
        </div>
      </section>

      {/* ================= VALORES ================= */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-black text-gray-800 mb-10">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-lg p-8 text-center border border-purple-100"
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= NOTICIAS CALENDARIO LABORATORIOS ================= */}
      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* NOTICIAS */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-5">📰 Noticias</h2>
          {news.map((item, index) => (
            <p key={index} className="py-3 border-b text-gray-600">
              {item}
            </p>
          ))}
        </div>

        {/* CALENDARIO PREMIUM */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-purple-600">📅 Agenda tu cita</h2>
          <p className="mt-3 text-gray-600">Selecciona una fecha disponible.</p>

          {/* CAMBIO DE MES */}
          <div className="flex justify-between items-center mt-6 bg-purple-100 rounded-2xl p-4">
            <button
              onClick={() => handleMonthChange(month === 0 ? 11 : month - 1)}
              className="text-purple-700 font-bold text-xl"
            >
              ⬅
            </button>
            <h3 className="font-bold text-gray-700 text-lg">
              {months[month]} {year}
            </h3>
            <button
              onClick={() => handleMonthChange(month === 11 ? 0 : month + 1)}
              className="text-purple-700 font-bold text-xl"
            >
              ➡
            </button>
          </div>

          {/* DIAS SEMANA */}
          <div className="grid grid-cols-7 gap-2 mt-6">
            {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
              <div key={i} className="text-center font-bold text-purple-500">
                {d}
              </div>
            ))}

            {/* DIAS DEL MES */}
            {calendarDays.map((day, index) =>
              day ? (
                <button
                  key={index}
                  onClick={() => setSelectedDate(day)}
                  className={`p-2 rounded-xl border transition font-semibold ${
                    selectedDate === day
                      ? "bg-purple-600 text-white shadow-lg"
                      : "hover:bg-purple-100"
                  }`}
                >
                  {day}
                </button>
              ) : (
                <div key={index} />
              )
            )}
          </div>

          {/* FECHA ELEGIDA */}
          {selectedDate && (
            <div className="mt-6 bg-purple-50 rounded-2xl p-5 text-center">
              <p className="text-gray-600">Fecha seleccionada:</p>
              <strong className="text-purple-600 text-xl">
                {selectedDate} de {months[month]} de {year}
              </strong>
              <a
                href={`https://wa.me/573107663235?text=Hola%20%C3%93ptica%20J%26V%2C%20deseo%20agendar%20una%20cita%20para%20el%20${selectedDate}%20de%20${months[month]}%20de%20${year}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-5 bg-green-500 text-white py-3 rounded-full font-bold hover:bg-green-600 transition"
              >
                📲 Agendar por WhatsApp
              </a>
            </div>
          )}
        </div>

        {/* LABORATORIOS */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">
            🔬 Laboratorios Aliados
          </h2>
          <img src="public/lab/transitions.jpg" alt="Laboratorio ESSILOR" className="mx-auto mb-6 w-48"/>
          <p className="text-gray-600">
            Contamos con laboratorios certificados que garantizan la calidad de tus lentes y monturas.
           <img src="public/lab/Zeiss.jpg" alt="Laboratorio ESSILOR" className="mx-auto mb-6 w-48"/>

          </p>
        </div>

      </div>
    </section>
  );
}