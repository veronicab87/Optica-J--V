import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: "👁️",
      title: "Examen de Optometría",
      description:
        "Evaluación visual completa para conocer el estado de tu visión y encontrar la solución adecuada para tus ojos.",
    },
    {
      icon: "🕶️",
      title: "Lentes Oftálmicos",
      description:
        "Diseñamos tus lentes con monturas modernas y fórmulas personalizadas para mejorar tu calidad visual.",
    },
    {
      icon: "🌞",
      title: "Lentes de Sol",
      description:
        "Protege tus ojos de los rayos UV con diseños elegantes y lentes de alta calidad.",
    },
    {
      icon: "🔵",
      title: "Lentes de Contacto",
      description:
        "Asesoría para elegir lentes de contacto cómodos, seguros y adaptados a tus necesidades.",
    },
    {
      icon: "⚙️",
      title: "Asesoría Visual",
      description:
        "Te orientamos en la elección de monturas, tratamientos y tecnologías para tus lentes.",
    },
    {
      icon: "🚚",
      title: "Entrega Personalizada",
      description:
        "Seguimiento del proceso y entrega de tus productos según el tiempo indicado.",
    },
  ];


  return (
    <section
      className="
        min-h-screen
        bg-gradient-to-b
        from-purple-50
        to-white
        px-6
        py-16
      "
    >


      {/* HEADER SERVICIOS */}

      <motion.div
        initial={{ opacity:0, y:-30 }}
        animate={{ opacity:1, y:0 }}
        transition={{duration:0.7}}
        className="
          text-center
          max-w-3xl
          mx-auto
          mb-14
        "
      >

        <span
          className="
            inline-block
            bg-purple-100
            text-purple-600
            px-5
            py-2
            rounded-full
            font-semibold
            mb-5
          "
        >
          👓 Servicios Ópticos
        </span>


        <h1
          className="
            text-4xl
            lg:text-5xl
            font-black
            text-gray-800
          "
        >
          Cuidamos tu visión con
          <span className="text-purple-600">
            {" "}calidad y tecnología
          </span>
        </h1>


        <p
          className="
            mt-5
            text-lg
            text-gray-600
            leading-8
          "
        >
          En Óptica J & V ofrecemos soluciones visuales
          personalizadas para que veas mejor y luzcas increíble.
        </p>


      </motion.div>





      {/* TARJETAS */}

      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          max-w-6xl
          mx-auto
        "
      >

        {
          services.map((service,index)=>(

            <motion.div
              key={index}
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5, delay:index*0.1}}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                border
                border-purple-100
                hover:shadow-2xl
                hover:-translate-y-2
                transition
              "
            >

              <div
                className="
                  w-16
                  h-16
                  flex
                  items-center
                  justify-center
                  bg-purple-100
                  rounded-2xl
                  text-3xl
                  mb-5
                "
              >
                {service.icon}
              </div>


              <h2
                className="
                  text-xl
                  font-bold
                  text-gray-800
                  mb-3
                "
              >
                {service.title}
              </h2>


              <p
                className="
                  text-gray-600
                  leading-7
                "
              >
                {service.description}
              </p>


            </motion.div>

          ))
        }

      </div>





      {/* SECCION FINAL */}

      <div
        className="
          max-w-5xl
          mx-auto
          mt-16
          bg-gradient-to-r
          from-purple-600
          to-purple-400
          rounded-3xl
          p-10
          text-center
          shadow-xl
        "
      >

        <h2
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          ¿Necesitas mejorar tu visión?
        </h2>


        <p
          className="
            mt-4
            text-purple-100
            text-lg
          "
        >
          Agenda una cita con nuestros especialistas
          y recibe atención personalizada.
        </p>


        <Link
          to="/contacto"
          className="
            inline-block
            mt-8
            bg-white
            text-purple-600
            px-8
            py-4
            rounded-full
            font-bold
            shadow-lg
            hover:scale-105
            transition
          "
        >
          📅 Agendar cita
        </Link>


      </div>



    </section>
  );
}