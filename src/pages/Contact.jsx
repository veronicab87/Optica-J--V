import { motion } from "framer-motion";

export default function Contact() {

  const whatsapp = "https://wa.me/573107663235";


  return (

    <section
      className="
        min-h-screen
        bg-gradient-to-b
        from-purple-50
        via-white
        to-purple-100
        px-6
        py-16
      "
    >


      {/* ENCABEZADO */}

      <motion.div
        initial={{opacity:0, y:-40}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}}
        className="
          max-w-4xl
          mx-auto
          text-center
          mb-14
        "
      >

        <span
          className="
            inline-block
            bg-purple-100
            text-purple-600
            px-6
            py-2
            rounded-full
            font-semibold
            mb-5
          "
        >
          👓 Óptica J & V
        </span>


        <h1
          className="
            text-4xl
            lg:text-5xl
            font-black
            text-gray-800
          "
        >
          Contáctanos y cuida
          <span className="text-purple-600">
            {" "}tu visión
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
          Estamos listos para asesorarte en la elección
          de tus lentes, monturas y soluciones visuales.
        </p>


      </motion.div>





      {/* INFORMACIÓN */}

      <div
        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-3
          gap-8
        "
      >



        {/* WHATSAPP */}

        <motion.div
          whileHover={{scale:1.05}}
          className="
            bg-white
            rounded-3xl
            p-8
            shadow-xl
            border
            border-purple-100
            text-center
          "
        >

          <div className="text-5xl mb-4">
            📲
          </div>


          <h2
            className="
              text-xl
              font-bold
              text-gray-800
            "
          >
            WhatsApp
          </h2>


          <p
            className="
              text-purple-600
              font-bold
              text-lg
              mt-3
            "
          >
            310 766 3235
          </p>


          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-5
              bg-green-500
              text-white
              px-7
              py-3
              rounded-full
              font-bold
              hover:bg-green-600
              transition
            "
          >
            Escribir ahora
          </a>


        </motion.div>





        {/* HORARIO */}

        <motion.div
          whileHover={{scale:1.05}}
          className="
            bg-white
            rounded-3xl
            p-8
            shadow-xl
            border
            border-purple-100
            text-center
          "
        >

          <div className="text-5xl mb-4">
            🕒
          </div>


          <h2
            className="
              text-xl
              font-bold
              text-gray-800
            "
          >
            Horario
          </h2>


          <p
            className="
              mt-4
              text-gray-600
              leading-8
            "
          >
            Lunes a Sábado
            <br/>
            8:00 AM - 6:00 PM
          </p>


        </motion.div>





        {/* SERVICIO */}

        <motion.div
          whileHover={{scale:1.05}}
          className="
            bg-white
            rounded-3xl
            p-8
            shadow-xl
            border
            border-purple-100
            text-center
          "
        >

          <div className="text-5xl mb-4">
            👁️
          </div>


          <h2
            className="
              text-xl
              font-bold
              text-gray-800
            "
          >
            Atención Visual
          </h2>


          <p
            className="
              mt-4
              text-gray-600
              leading-8
            "
          >
            Asesoría personalizada
            para encontrar los lentes
            ideales para ti.
          </p>


        </motion.div>


      </div>






      {/* PANEL WHATSAPP */}

      <div
        className="
          max-w-5xl
          mx-auto
          mt-16
          rounded-3xl
          bg-gradient-to-r
          from-purple-600
          to-purple-400
          p-10
          shadow-2xl
        "
      >

        <div
          className="
            text-center
          "
        >

          <h2
            className="
              text-3xl
              font-black
              text-white
            "
          >
            ¿Necesitas asesoría?
          </h2>


          <p
            className="
              mt-4
              text-purple-100
              text-lg
            "
          >
            Escríbenos directamente por WhatsApp
            y recibe atención personalizada.
          </p>


          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-8
              bg-white
              text-purple-600
              px-10
              py-4
              rounded-full
              font-bold
              shadow-lg
              hover:scale-105
              transition
            "
          >
            💬 Contactar ahora
          </a>


        </div>


      </div>



    </section>

  );
}