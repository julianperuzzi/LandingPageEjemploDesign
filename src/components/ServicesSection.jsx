import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 min-h-[80vh] flex flex-col justify-center ">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Obras Artísticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-4">
          {/* Producto 1 */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-600 p-6  shadow-2xl transform transition-transform duration-500 hover:scale-105 relative">
            <div className="overflow-hidden  relative mb-4">
              <img
                src="https://i.pinimg.com/1200x/00/78/a4/0078a438f55c53c1ca076c4669c2a616.jpg"
                alt="Producto 1"
                className="w-full md:h-96 h-64 object-cover transition-opacity duration-500"
              />
              <img
                src="https://i.pinimg.com/1200x/c8/bf/b8/c8bfb8d595cd41690f4fbdfc0dd38cc3.jpg"
                alt="Producto 1 Hover"
                className="w-full md:h-96 h-64 object-cover absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="absolute top-[-20px] md:right-[-20px] right-[-10px] w-16 h-16 bg-gold rounded-full shadow-md"></div>
            <div className="mt-6 text-white">
              <h3 className="text-3xl font-bold mb-2">Pintura Contemporánea</h3>
              <p className="text-gray-300 text-base italic">
                Una exploración única en el mundo del arte contemporáneo, utilizando colores vibrantes.
              </p>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-600 p-6  shadow-2xl transform transition-transform duration-500 hover:scale-105 relative">
            <div className="overflow-hidden  relative mb-4">
              <img
                src="https://i.pinimg.com/1200x/5b/9e/36/5b9e360888692bc1cfbe40f7218abd78.jpg"
                alt="Producto 2"
                className="w-full md:h-96 h-64 object-cover transition-opacity duration-500"
              />
              <img
                src="https://i.pinimg.com/1200x/93/b5/03/93b503bd84f3ce2691b5e5b1c82620f3.jpg"
                alt="Producto 2 Hover"
                className="w-full md:h-96 h-64 object-cover absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="absolute top-[-20px] md:right-[-20px] right-[-10px] w-16 h-16 bg-gold rounded-full shadow-md"></div>
            <div className="mt-6 text-white">
              <h3 className="text-3xl font-bold mb-2">Escultura Abstracta</h3>
              <p className="text-gray-300 text-base italic">
                Una pieza que captura la esencia del arte abstracto con formas dinámicas y fluidas.
              </p>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-600 p-6  shadow-2xl transform transition-transform duration-500 hover:scale-105 relative">
            <div className="overflow-hidden  relative mb-4">
              <img
                src="https://i.pinimg.com/1200x/d3/34/c1/d334c18449ccda4ade984f5576797fad.jpg"
                alt="Producto 3"
                className="w-full md:h-96 h-64 object-cover transition-opacity duration-500"
              />
              <img
                src="https://i.pinimg.com/1200x/31/be/63/31be63e95e963d682841769dae39f0a6.jpg"
                alt="Producto 3 Hover"
                className="w-full md:h-96 h-64 object-cover absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="absolute top-[-20px] md:right-[-20px] right-[-10px] w-16 h-16 bg-gold rounded-full shadow-md"></div>
            <div className="mt-6 text-white">
              <h3 className="text-3xl font-bold mb-2">Fotografía Conceptual</h3>
              <p className="text-gray-300 text-base italic">
                Una serie de imágenes que desafían las convenciones de la fotografía tradicional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
