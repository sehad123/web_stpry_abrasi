import React, { useEffect, useState, forwardRef } from "react";
import { motion } from "framer-motion";

const Slide2 = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const images = [
    "/img/berita/pembangunan infrastruktur (2).png",
    "/img/berita/pembangunan infrastruktur (3).png",
    "/img/berita/pembangunan infrastruktur (4).png",
    "/img/berita/pertumbuhan industri (1).png",
    "/img/berita/pertumbuhan industri (3).png",
    "/img/berita/pertumbuhan industri (4).png",
  ];

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const togglePreview = () => {
    setIsPreviewVisible(!isPreviewVisible);
  };

  return (
    <motion.section
      ref={ref} // Menambahkan ref untuk mengakses Slide2
      id="slide2"
      className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/2.jpeg')" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Judul */}
      <motion.h2 className="text-3xl md:text-4xl mx-20 font-bold" initial={{ opacity: 0, y: -30 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }} transition={{ duration: 0.6, delay: 0.2 }}>
        Bagaimana kondisi lahan terbangun di Jawa Timur saat ini?
      </motion.h2>

      <motion.p className="mt-3 text-lg mx-64" initial={{ opacity: 0, y: -20 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }} transition={{ duration: 0.6, delay: 0.4 }}>
        Keberadaan lahan terbangun di suatu wilayah dapat dipengaruhi oleh beberapa faktor, seperti kawasan industri, pembangunan infrastruktur, kepadatan penduduk, dan sebagainya. Mari kita simak beritanya!
      </motion.p>

      {/* Slide Show */}
      <motion.div
        className="relative mt-8 w-11/12 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex flex-col items-center">
          {/* Gambar Berita */}
          <div className="w-full">
            <img src={images[currentIndex]} alt="Berita" className="w-full h-80 object-cover" />
          </div>
          <div className="p-6">
            <button onClick={togglePreview} className="mt-4 px-6 py-2 bg-pink-500 text-white font-bold rounded-full flex items-center gap-2">
              Lihat Berita <span>👁</span>
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
        onClick={prevSlide}
      >
        ←
      </motion.button>
      <motion.button
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={nextSlide}
      >
        →
      </motion.button>

      {/* Preview Modal */}
      {isPreviewVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-lg">
            {/* Tombol Tutup Preview di Pojok Kanan Atas */}
            <button onClick={togglePreview} className="absolute rounded-full p-1 top-0 right-0 text-3xl font-bold  bg-pink-500 text-white">
              ×
            </button>
            <img src={images[currentIndex]} alt="Preview" className="w-full h-96 object-cover mb-4" />
          </div>
        </div>
      )}
    </motion.section>
  );
});

export default Slide2;
