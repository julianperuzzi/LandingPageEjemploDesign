import React from "react";
import videoSrc from "../assets/5008927-hd_1080_1920_25fps.mp4";


const HeroSection = () => {
  return (
    <div id="hero" className="relative h-screen flex flex-col items-center justify-center text-center text-gray-100">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Filtro de sombra para mejorar la legibilidad */}
      <div className="absolute inset-0 "></div>

      {/* Contenido sobre el video */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg text-gold uppercase">
          Nombre Empresa
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-shadow-md">
          Landing Page de Ejemplo / Frase Introductoria
        </p>

        {/* Botón de contáctanos */}
        <a
          href="#contact" // Enlace a la sección de contacto
          className="inline-flex items-center bg-blue-purple hover:bg-blue-purple-dark text-gold py-3 px-6  font-bold transition-colors duration-300 mt-8"
        >
          Contáctanos
        </a>
      </div>

      {/* Filtro de sombra para el video */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
};

export default HeroSection;
