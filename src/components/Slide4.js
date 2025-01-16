import React from "react";
import { motion } from "framer-motion";

const Slide4 = () => {
  // Variasi animasi untuk elemen
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Animasi awal (tersembunyi dan bergeser ke bawah)
    visible: { opacity: 1, y: 0 }, // Animasi ketika muncul
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/5.jpeg')" }}>
      {/* Judul */}
      <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} variants={variants}>
        Peta Persebaran Daerah Abrasi di Pulau Panaitan
      </motion.h2>

      {/* Gambar Peta dan Legenda */}
      <motion.div className="w-full max-w-xl h-96 rounded-lg shadow-lg overflow-hidden flex" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} variants={variants}>
        {/* Gambar Peta */}
        <div className="flex-grow">
          <img src="/img/9.png" alt="Peta Persebaran Tingkat Prevalensi Stunting" className="w-full h-full object-cover" />
        </div>
        {/* Penjelasan Warna */}
        <div className="w-48 flex flex-col justify-center items-start pl-4">
          <motion.div className="flex items-center mb-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.3 }} variants={variants}>
            <span className="w-6 h-6 bg-red-500 inline-block mr-2"></span>
            <span className="text-gray-700 text-sm">Rendah</span>
          </motion.div>
          <motion.div className="flex items-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.5 }} variants={variants}>
            <span className="w-6 h-6 bg-yellow-200 inline-block mr-2"></span>
            <span className="text-gray-700 text-sm">Tinggi</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Sumber Data */}
      <motion.p className="text-sm text-gray-500 mt-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.6 }} variants={variants}>
        Sumber: SSGI - Kemenkes
      </motion.p>

      {/* Deskripsi */}
      <motion.div className="w-full max-w-5xl mt-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.8 }} variants={variants}>
        <div className="flex items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, fuga repellat. Beatae in assumenda sint recusandae ipsa repudiandae aspernatur repellendus voluptatem laboriosam eum. Odio, tempore dolorum magnam officiis voluptas
            consequuntur incidunt adipisci quae totam. Consequuntur possimus facere amet! Maiores cupiditate quisquam molestiae error odit debitis a voluptatibus amet at alias minima quis quaerat accusantium, aspernatur tempora! Numquam ad
            voluptate ea in veniam sit officia quidem, perferendis quam deserunt dignissimos itaque ducimus placeat est quis sunt esse voluptatibus et dolores porro cum accusamus temporibus eaque aliquam? Minus, numquam quos? Molestiae
            iste, neque aliquam minima delectus fuga nemo dolore recusandae quos. Error.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Slide4;
