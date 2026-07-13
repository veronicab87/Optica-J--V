import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  // Mensaje comercial predeterminado codificado para la URL
  const whatsappMessage = encodeURIComponent(
    "Hola Óptica J&V, deseo recibir asesoría personalizada para mis lentes o agendar un examen visual. ¡Gracias!"
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      
      {/* Etiqueta / Globo de texto comercial (Aparece estático y resalta al pasar el mouse) */}
      <div 
        className="
          mr-3 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-xl shadow-2xl 
          border border-purple-100 hidden sm:flex items-center gap-2
          transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 
          transition-all duration-300 pointer-events-none whitespace-nowrap
        "
      >
        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping" />
        ¿Necesitas cita o cotizar? ¡Escríbenos!
      </div>

      {/* Botón de WhatsApp Principal */}
      <a
        href={`https://wa.me/573107663235?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500 text-white rounded-full p-4 shadow-[0_8px_30px_rgb(34,197,94,0.4)]
          hover:bg-green-600 hover:scale-110 active:scale-95
          transition-all duration-300 relative flex items-center justify-center
          animate-bounce [animation-duration:3s]
        "
        aria-label="Agendar cita por WhatsApp"
      >
        {/* Efecto de pulso de ondas de fondo (para llamar la atención profesionalmente) */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-ping [animation-duration:2s]" />
        
        {/* Icono de mensaje */}
        <MessageCircle size={28} className="relative z-10" />
      </a>

    </div>
  );
}