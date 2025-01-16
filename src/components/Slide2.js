import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slide2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("slide2");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      id="slide2"
      className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/2.jpeg')" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Judul */}
      <motion.h2 className="text-4xl md:text-5xl font-bold" initial={{ opacity: 0, y: -30 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }} transition={{ duration: 0.6, delay: 0.2 }}>
        Mengapa Abrasi Begitu Mengancam?
      </motion.h2>

      <motion.p className="mt-3 text-lg" initial={{ opacity: 0, y: -20 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }} transition={{ duration: 0.6, delay: 0.4 }}>
        Mari kita simak beberapa berita yang beredar di berbagai media
      </motion.p>

      {/* Kartu Berita */}
      <motion.div
        className="relative mt-8 w-11/12 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex flex-col items-center">
          {/* Gambar Berita dari public/img/4.jpeg */}
          <div className="w-full">
            <img src="/img/4.jpeg" alt="Berita Abrasi" className="w-full h-80 object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">Abrasi Mengancam Pesisir Pantai Indonesia, Upaya Pencegahan Harus Diperkuat</h3>
            <p className="text-gray-600 mt-2">Dampak abrasi semakin meluas, menyebabkan kehilangan lahan di pesisir.</p>
            <button className="mt-4 px-6 py-2 bg-pink-500 text-white font-bold rounded-full flex items-center gap-2">
              Baca Berita <span>👁</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Tombol Navigasi Kiri & Kanan */}
      <motion.button
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        ←
      </motion.button>
      <motion.button
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        →
      </motion.button>
    </motion.section>
  );
};

export default Slide2;
