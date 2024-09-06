import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-purple-dark via-blue-purple to-dark-blue text-white py-10 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,0V60L1200,0V120H0Z"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Newsletter Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 text-blue-100">Suscríbete a nuestro Newsletter</h3>
            <p className="mb-4 text-blue-200">
              Mantente al tanto de nuestras últimas noticias y ofertas exclusivas. (opcional)
            </p>
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="p-2 mb-2 md:mb-0 md:mr-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 py-2 px-4 rounded-lg text-white font-bold hover:bg-blue-500 transition duration-300 shadow-lg"
              >
                Suscribirse
              </button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-end mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-blue-100">Síguenos</h3>
            <div className="flex space-x-4 text-3xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <p className="text-sm text-blue-200">&copy; 2024 JulianPeruzzi.dev Soluciones Digitales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
