import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 min-h-[80vh] flex items-center " data-aos="fade-up">
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/2 mb-8 md:mb-0 w-full relative">
          {/* Imagen Principal */}
          <div className="relative">
            <img
              src="https://i.pinimg.com/1200x/c5/34/1b/c5341bbfab938d81587c15924a785279.jpg"
              alt="Sobre Nosotros"
              className="md:w-10/12 w-11/12 md:h-96 h-48  shadow-lg object-cover mx-auto border-4 border-blue-purple-dark "
            />
            {/* Imagen Superpuesta */}
            <img
              src="https://i.pinimg.com/736x/ff/16/8b/ff168ba077987de683dc6e6d875ff256.jpg"
              alt="Detalle Artístico"
              className="absolute top-8 right-8 md:right-16 w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Elemento decorativo */}
          <div className="absolute top-4 left-4 w-10 h-10 bg-gold rounded-full shadow-lg"></div>
        </div>

        {/* Texto a la derecha */}
        <div className="md:w-1/2 text-center md:text-left relative">
          <h2 className="text-5xl font-extrabold mb-6 text-white">Sobre Nosotros</h2>
          <p className="text-lg leading-relaxed mx-2 p-8  text-dark-blue bg-white shadow-lg border-2 border-gold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe soluta, minima cupiditate explicabo libero, quia voluptas, delectus molestiae veniam deserunt est. Minima pariatur quibusdam sunt velit nostrum distinctio praesentium similique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
