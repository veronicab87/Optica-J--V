import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-800 to-fuchsia-700 text-white mt-16">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-pink-300 blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-5 py-10">
        {/* Contenido */}
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-10">

          {/* Empresa */}
          <div>
            <img
              src="/logo_small.png"
              alt="Óptica J & V"
              className="w-20 mb-4"
            />

            <h2 className="text-2xl font-bold tracking-wide">
              Óptica J & V
            </h2>

            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-widest">
              Óptica Virtual
            </span>

            <p className="mt-5 text-purple-100 text-sm leading-7">
              Especialistas en lentes formulados, monturas modernas,
              gafas de sol y accesorios. Compra desde cualquier lugar
              de Colombia con asesoría personalizada y envíos seguros.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contáctanos
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>310 766 3235</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>opticajyv@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Bogotá D.C. - Colombia</span>
              </div>

            </div>

            <a
              href="https://wa.me/573107663235"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-green-500 px-5 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
            >
              <MessageCircle size={18} />
              Comprar por WhatsApp
            </a>
          </div>

          {/* Redes + Pagos */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Síguenos
            </h3>

            <div className="flex gap-3">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/15 flex justify-center items-center hover:bg-blue-600 transition"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/15 flex justify-center items-center hover:bg-pink-500 transition"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/15 flex justify-center items-center hover:bg-red-600 transition"
              >
                <Youtube size={20} />
              </a>

            </div>

            <h4 className="mt-8 mb-3 text-sm font-semibold uppercase tracking-wider text-purple-200">
              Métodos de Pago
            </h4>

            <div className="flex flex-wrap gap-3">

              <img
                src="/pagos/VISA.jpeg"
                alt="Visa"
                className="h-8 bg-white rounded-md p-1 shadow"
              />

              <img
                src="/pagos/MASTER.jpeg"
                alt="Mastercard"
                className="h-8 bg-white rounded-md p-1 shadow"
              />

              <img
                src="/pagos/NEQUI.jpeg"
                alt="Nequi"
                className="h-8 bg-white rounded-md p-1 shadow"
              />

              <img
                src="/pagos/pse.png"
                alt="PSE"
                className="h-8 bg-white rounded-md p-1 shadow"
              />

              <img
                src="/pagos/BANCOLOMBIA.jpeg"
                alt="Bancolombia"
                className="h-8 bg-white rounded-md p-1 shadow"
              />

              <img
                src="/pagos/DAVIPLATA.jpg"
                alt="Daviplata"
                className="h-8 bg-white rounded-md p-1 shadow"
              />

            </div>
          </div>

        </div>

        {/* Línea */}
        <hr className="border-white/15 my-8" />

        {/* Footer inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-purple-200">

          <p>
            © 2026 <strong>Óptica J & V</strong>. Todos los derechos reservados.
          </p>

          <p className="flex items-center gap-2">
            Hecho con
            <Heart
              size={14}
              className="fill-red-500 text-red-500"
            />
            para cuidar tu visión.
          </p>

        </div>
      </div>
    </footer>
  );
}