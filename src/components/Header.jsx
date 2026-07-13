import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="
      sticky top-0 z-50
      bg-white/90
      backdrop-blur-md
      border-b border-gray-200
      shadow-sm
    ">

      <div className="
        max-w-7xl mx-auto
        px-6 py-3
        flex
        justify-between
        items-center
      ">


        {/* LOGO + MARCA */}
        <Link 
          to="/"
          className="flex items-center gap-4 group"
        >

          <img
            src="/logo_small.png"
            alt="Logo Óptica J&V"
            className="
              w-16 h-16
              object-contain
              transition
              group-hover:scale-110
            "
          />


          <div>
            <h2 className="
              text-2xl
              font-extrabold
              text-gray-800
              tracking-wide
            ">
              Óptica
              <span className="text-purple-500">
                {" "}J & V
              </span>
            </h2>

            <p className="
              text-xs
              text-gray-500
              tracking-widest
            ">
              SALUD VISUAL
            </p>

          </div>


        </Link>



        {/* MENÚ */}
        <nav className="
          hidden
          md:flex
          items-center
          gap-8
          text-gray-700
          font-medium
        ">


          <Link
            to="/"
            className="
              hover:text-purple-500
              transition
            "
          >
            Inicio
          </Link>


          <Link
            to="/catalogo"
            className="
              hover:text-purple-500
              transition
            "
          >
            Catálogo
          </Link>


          <Link
            to="/servicios"
            className="
              hover:text-purple-500
              transition
            "
          >
            Servicios
          </Link>


          <Link
            to="/nosotros"
            className="
              hover:text-purple-500
              transition
            "
          >
            Nosotros
          </Link>


          <Link
            to="/contacto"
            className="
              hover:text-purple-500
              transition
            "
          >
            Contacto
          </Link>



          {/* CARRITO */}
          <Link
            to="/carrito"
            className="
              relative
              bg-purple-500
              text-white
              px-5
              py-2
              rounded-full
              shadow-md
              hover:bg-purple-600
              hover:scale-105
              transition
            "
          >
            🛒
          </Link>


        </nav>


      </div>

    </header>
  );
}