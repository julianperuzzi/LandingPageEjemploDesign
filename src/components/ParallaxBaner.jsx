import React from "react";
import { Parallax } from "react-parallax";

const ParallaxBaner = () => {
  return (
    <Parallax
      bgImage="https://images.pexels.com/photos/6925108/pexels-photo-6925108.jpeg"
      strength={300}
      className="relative flex items-center justify-center bg-cover bg-center"
      bgImageStyle={{ objectFit: 'cover' }} // Asegura que la imagen cubra el área sin estirarse
    >
      <div className="flex items-center justify-center w-full h-[20vh] md:h-[30vh]">
        <div className="text-center text-white p-4 text-shadow">
          <h2 className="text-3xl md:text-4xl font-bold">
            Sos Arte
          </h2>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxBaner;
