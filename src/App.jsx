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
  const [phase, setPhase] = useState("countdown");
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    if (phase === "countdown") {
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setPhase("explosion");

            // Espera a que termine la explosión
            setTimeout(() => {
              setLoading(false);
            }, 800);

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
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            }}
          >
            {/* Efecto visual de explosión */}
            {phase === "explosion" && (
              <motion.div
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 10, opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute w-40 h-40 bg-purple-500 rounded-full blur-xl"
              />
            )}

            {/* Logo */}
            <motion.div
              animate={
                phase === "countdown"
                  ? {
                      scale: [1, 1.03, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 1,
                      },
                    }
                  : phase === "explosion"
                  ? {
                      scale: 0.3,
                      opacity: 0,
                    }
                  : {}
              }
              className="text-center z-10"
            >
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
                {phase === "countdown" &&
                  "¡Estamos preparando tu experiencia en Óptica J & V!"}

                {phase === "explosion" && "¡BIENVENIDO!"}
              </p>

              {/* Conteo */}
              <motion.div
                key={counter}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 text-7xl md:text-8xl font-black tabular-nums text-amber-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]"
              >
                {counter > 0 ? counter : "💥"}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTENIDO */}
      <motion.div
        className="min-h-screen flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={!loading ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
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