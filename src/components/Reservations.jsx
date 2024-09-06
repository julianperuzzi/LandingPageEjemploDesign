import React from "react";
import {
  FaBriefcase,
  FaUtensils,
  FaChalkboardTeacher,
  FaWifi,
  FaParking,
  FaBuilding,
} from "react-icons/fa";

const Reservations = () => {
  return (
    <section id="reservations" className="py-20 min-h-screen ">
      <div className="container mx-auto px-6">
        <h3 className="text-5xl font-extrabold text-center mb-16 text-white">
          Nuestras Obras
        </h3>

        {/* Información de Reservas en diseño de cuadrícula */}
        <div className="space-y-12 md:space-y-0 md:w-10/12 mx-auto">
          {/* Tarjeta 1: Imagen a la izquierda, texto a la derecha */}
          <div className="grid md:grid-cols-2  items-center bg-blue-purple-dark/50">
            {/* Imagen */}
            <div className="relative">
            <img
              src="https://i.pinimg.com/1200x/09/29/c0/0929c0da227efc7db50e0f9d42f6f40d.jpg"
              alt="Sobre Nosotros"
              className="w-full md:h-96 h-48 shadow-lg object-cover mx-auto  "
            />
            </div>
            {/* Texto */}
            <div className="p-8 rounded-lg order-2 md:order-1">
              <h4 className="text-xl font-semibold mb-4 text-gray-200">
                Eventos Privados
              </h4>
              <p className="text-gray-100 text-base">
                Organizamos eventos privados con servicio de catering y
                tecnología audiovisual.
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Texto a la izquierda, imagen a la derecha */}
          <div className="grid md:grid-cols-2 items-center bg-blue-purple-dark/50">
            {/* Texto */}
            <div className="p-8 rounded-lg order-2 md:order-1">
              <h4 className="text-xl font-semibold mb-4 text-gray-200">
                Eventos Privados
              </h4>
              <p className="text-gray-100 text-base">
                Organizamos eventos privados con servicio de catering y
                tecnología audiovisual.
              </p>
            </div>
            {/* Imagen */}
            <div className="relative order-1 md:order-2">
            <img
              src="https://i.pinimg.com/1200x/8e/7c/0b/8e7c0be9a68610b3da787ea962fcf748.jpg"
              alt="Sobre Nosotros"
              className="w-full md:h-96 h-48 shadow-lg object-cover mx-auto  "
            />
            </div>
          </div>

          {/* Tarjeta 3: Imagen a la izquierda, texto a la derecha */}
          <div className="grid md:grid-cols-2  items-center bg-blue-purple-dark/50">
            {/* Imagen */}
            <div className="relative">
            <img
              src="https://i.pinimg.com/1200x/e7/ac/44/e7ac4427a48034464fc5779377514eac.jpg"
              alt="Sobre Nosotros"
              className="w-full md:h-96 h-48 shadow-lg object-cover mx-auto  "
            />
            </div>
            {/* Texto */}
            <div className="p-8 rounded-lg order-2 md:order-1">
              <h4 className="text-xl font-semibold mb-4 text-gray-200">
                Eventos Privados
              </h4>
              <p className="text-gray-100 text-base">
                Organizamos eventos privados con servicio de catering y
                tecnología audiovisual.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Reservations;
