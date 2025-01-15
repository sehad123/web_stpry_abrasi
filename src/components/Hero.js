import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-blue-100">
      {/* Teks Animasi */}
      <h1 className="text-4xl md:text-6xl font-bold text-blue-800 leading-tight hover:animate-wobble">
        <span className="text-pink-500">Abrasi:</span> <br />
        Ancaman Hilangnya Pulau Panaitan <br />
        Ujung Kulon, Banten Akibat Abrasi
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg font-semibold text-blue-600 hover:scale-110 transition-transform duration-300">Scroll Ke Bawah ↓</p>

      {/* Gambar ilustrasi */}
      <div className="absolute bottom-0 w-full">
        <img src="/abrasi-illustration.png" alt="Abrasi Illustration" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
