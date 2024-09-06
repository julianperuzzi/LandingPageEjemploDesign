import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 flex items-center justify-center md:min-h-screen md:py-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Imagen y Mapa */}
        <div className="hidden md:flex flex-col gap-8">
          <img
            src="https://images.pexels.com/photos/19101719/pexels-photo-19101719/free-photo-of-arte-francia-paris-pintura.jpeg"
            alt="Contáctanos"
            className=" shadow-lg object-cover h-[400px] w-full transform hover:scale-105 transition-transform duration-500"
          />

          <div className=" overflow-hidden shadow-lg">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.557736501233!2d-68.57650632578754!3d-31.5378757082577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96815022d91f615f%3A0xe70f25631ba7a5c9!2sSan%20Juan%2C%20Argentina!5e0!3m2!1ses!2sar!4v1693930272815!5m2!1ses!2sar"
              className="w-full h-80 border-none"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Sección de Contacto */}
        <div className="bg-dark-blue p-10  shadow-xl flex flex-col justify-center mx-4 md:mx-0 border-2 border-gold ">
          <h2 className="text-5xl font-bold mb-6 text-gray-100 text-center uppercase">Contáctanos</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-200 text-center">
            ¡Conéctate con nosotros! Si tienes preguntas o ideas, estamos aquí para ayudarte. Nos encantaría escucharte.
          </p>

          {/* Información de Contacto */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center space-x-4 justify-center">
              <FaPhone className="text-gold" />
              <p className="text-lg text-gray-100">+54 123 456 789</p>
            </div>
            <div className="flex items-center space-x-4 justify-center">
              <FaEnvelope className="text-gold" />
              <p className="text-lg text-gray-100">info@tuempresa.com</p>
            </div>
            <div className="flex items-center space-x-4 justify-center">
              <FaMapMarkerAlt className="text-gold" />
              <p className="text-lg text-gray-100">San Juan, Argentina</p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="flex justify-center space-x-5 mb-10">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500">
              <FaWhatsapp size={28} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-600">
              <FaInstagram size={28} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
              <FaFacebookF size={28} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
              <FaTwitter size={28} />
            </a>
          </div>

          {/* Botones Prioritarios */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-3 px-8 shadow-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white py-3 px-8  shadow-lg hover:bg-gold/90 transition-transform duration-300 transform hover:scale-105"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
