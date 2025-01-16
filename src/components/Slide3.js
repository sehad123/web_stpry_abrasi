import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slide3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("slide3");
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
    <section id="slide3" className="bg-blue-100 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center min-h-screen" style={{ backgroundImage: "url('/img/3.jpeg')", backgroundSize: "cover" }}>
      {/* Bagian Kiri: Gambar dan Ilustrasi */}
      <motion.div className="w-full md:w-1/2 flex justify-center" initial={{ opacity: 0, x: -50 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="bg-yellow-300 rounded-xl p-6 md:p-10 shadow-lg">
          <img src="/img/7.jpeg" alt="Ilustrasi Stunting" className="w-full h-auto rounded-lg" />
        </div>
      </motion.div>

      {/* Bagian Kanan: Teks dan Informasi */}
      <motion.div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12" initial={{ opacity: 0, x: 50 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
        <h4 className="text-gray-600 text-lg font-semibold">Bagian 1</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">Mengenal Stunting Lebih Dekat</h2>

        <div className="mt-6">
          <h3 className="text-lg font-bold text-blue-900">Apa itu stunting?</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            Stunting adalah gangguan pertumbuhan dan perkembangan anak akibat kekurangan gizi kronis dan infeksi berulang, yang ditandai dengan panjang atau tinggi badannya berada di bawah standar yang ditetapkan oleh menteri yang
            menyelenggarakan urusan pemerintahan di bidang kesehatan.
          </p>
          <p className="text-gray-700 mt-4 font-semibold">
            Perpres No. 72 Tahun 2021 <br />
            Tentang Percepatan Penurunan Stunting
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Slide3;
