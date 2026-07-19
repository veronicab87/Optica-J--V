import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";


export default function Header() {


  const [menuOpen, setMenuOpen] = useState(false);


  return (

<header
className="
sticky
top-0
z-50
bg-white/90
backdrop-blur-md
border-b
border-gray-200
shadow-sm
"
>

<div

className="
max-w-7xl
mx-auto
px-4
sm:px-6
py-3
flex
justify-between
items-center

"

>

{/* LOGO + MARCA */}

<Link

to="/"

onClick={()=>setMenuOpen(false)}

className="
flex
items-center
gap-3
sm:gap-4
group

"
>
<img

src="/logo_small.png"

alt="Logo Óptica J&V"

className="
w-12
h-12
sm:w-16
sm:h-16
object-contain
transition
group-hover:scale-110

"

/>
<div>
<h2

className="
text-xl
sm:text-2xl
font-extrabold
text-gray-800
tracking-wide

"

>

Óptica

<span className="text-purple-500">

{" "}J & V

</span>
</h2>
<p

className="
hidden
sm:block
text-xs
text-gray-500
tracking-widest

"

>

SALUD VISUAL

</p>
</div>
</Link>

{/* BOTONES CELULAR */}

<div

className="
flex
items-center
gap-3
md:hidden

"

>

{/* CARRITO */}

<Link

to="/carrito"

className="
bg-purple-500
text-white
w-10
h-10
rounded-full
flex
items-center
justify-center
shadow-md
hover:bg-purple-600
transition

"

>

🛒

</Link>





{/* MENU */}

<button

onClick={()=>setMenuOpen(!menuOpen)}

className="
text-purple-600

"

>


{

menuOpen ?

<X size={30}/>

:

<Menu size={30}/>

}

</button>
</div>

{/* MENU ESCRITORIO */}

<nav

className="
hidden
md:flex
items-center
gap-8
text-gray-700
font-medium

"

>
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

{/* MENU MOVIL */}
{

menuOpen && (

<div

className="
md:hidden
bg-white
border-t
border-gray-200
shadow-lg
px-6
py-5
"
>
<nav
className="
flex
flex-col
gap-5
font-medium
text-gray-700
"
>
<Link

to="/"

onClick={()=>setMenuOpen(false)}

className="hover:text-purple-500"
>
Inicio
</Link>
<Link
to="/catalogo"
onClick={()=>setMenuOpen(false)}
className="hover:text-purple-500"
>

Catálogo

</Link>
<Link

to="/servicios"

onClick={()=>setMenuOpen(false)}

className="hover:text-purple-500"
>
Servicios
</Link>
<Link
to="/nosotros"
onClick={()=>setMenuOpen(false)}
className="hover:text-purple-500"
>

Nosotros
</Link>

<Link

to="/contacto"

onClick={()=>setMenuOpen(false)}

className="hover:text-purple-500"

>
Contacto
</Link>

</nav>


</div>

)

}

</header>

  );
}