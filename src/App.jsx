import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; // Tailwind CSS

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ParallaxSection from "./components/ParallaxSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Reservations from "./components/Reservations";
import ParallaxBaner from "./components/ParallaxBaner";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="ubuntu-regular bg-gradient-to-t from-blue-purple-dark to bg-neutral-200">
      <Navbar />
      <HeroSection />
      <ParallaxBaner/>
      <AboutSection />
      <ServicesSection />
      <Reservations/>
      <ParallaxSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
