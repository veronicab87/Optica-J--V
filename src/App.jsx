import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Cart from "./pages/Cart";

import { Routes, Route } from "react-router-dom";

export default function App() {
  // --- ESTADOS PARA LA ANIMACIÓN DE INTRODUCCIÓN ---
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState("counting-up"); // 'counting-up', 'countdown', 'explosion'
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    if (phase === "counting-up") {
      // Conteo rápido inicial de 10 en 10 hasta el 90
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev >= 50) {
            clearInterval(interval);
            setPhase("countdown");
            return 10; // Reinicia a 10 para la cuenta regresiva dramática
          }
          return prev + 10;
        });
      }, 150); // Velocidad ajustable (150ms por salto)
      return () => clearInterval(interval);
    }

    if (phase === "countdown") {
      // Cuenta regresiva de 1 en 1 segundo real (del 10 al 1)
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setPhase("explosion");
            
            // Espera a que termine la animación de expansión antes de quitar el loader
            setTimeout(() => setLoading(false), 800);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [phase]);

  return (
    <>
      {/* PANTALLA DE INTRO (LOADER) */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-purple-950 via-slate-900 to-black select-none overflow-hidden"
            exit={{
              scale: 4,
              opacity: 0,
              filter: "blur(20px)",
              transition: { duration: 0.8, ease: "easeOut" }
            }}
          >
            {/* Efecto visual de onda expansiva al estallar */}
            {phase === "explosion" && (
              <motion.div 
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 10, opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute w-40 h-40 bg-purple-500 rounded-full blur-xl"
              />
            )}

            {/* Contenedor principal del Logo */}
            <motion.div
              animate={
                phase === "countdown"
                  ? { scale: [1, 1.03, 1], transition: { repeat: Infinity, duration: 1 } }
                  : phase === "explosion"
                  ? { scale: 0.3, opacity: 0 }
                  : {}
              }
              className="text-center z-10"
            >
              {/* Logo con resplandor óptico */}
              <motion.img
                src="/logo_small.png"
                alt="Óptica J&V"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-44 h-44 object-contain mx-auto mb-6 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
              />

              <h1 className="text-white font-black text-2xl tracking-widest uppercase mb-1">
                Óptica J & V
              </h1>

              <p className="text-purple-300 text-xs font-semibold tracking-wider h-5">
                {phase === "counting-up" && "Cargando sistemas visuales..."}
                {phase === "countdown" && "¡Estamos preparando tu experiencia en Óptica J & V!"}
                {phase === "explosion" && "¡BIENVENIDO!"}
              </p>

              {/* Número Animado */}
              <motion.div 
                key={counter}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`mt-6 font-black tabular-nums ${
                  phase === "countdown" 
                    ? "text-7xl md:text-8xl text-amber-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]" 
                    : "text-5xl text-purple-400"
                }`}
              >
                {phase === "counting-up" ? `${counter}%` : counter > 0 ? counter : "💥"}
              </motion.div>
            </motion.div>

            {/* Barra de progreso sutil (solo fase 1) */}
            {phase === "counting-up" && (
              <div className="w-40 h-1 bg-slate-800 rounded-full mt-4 overflow-hidden">
                <motion.div 
                  className="h-full bg-purple-500"
                  animate={{ width: `${counter}%` }}
                  transition={{ duration: 0.15 }}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTENIDO DE TU APLICACIÓN COMPLETA */}
      <motion.div
        className="min-h-screen flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={!loading ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
        <WhatsappButton />
      </motion.div>
    </>
  );
}