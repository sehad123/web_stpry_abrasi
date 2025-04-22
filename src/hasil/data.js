import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Data = forwardRef((props, ref) => {
  const imagesUtama = ["/img/Hasil/Data utama/4a. 2014.jpg", "/img/Hasil/Data utama/4b. 2019.jpg", "/img/Hasil/Data utama/4c. 2024.jpg"];

  const imagesPendukung = ["/img/Hasil/Data pendukung/Badan Air.png", "/img/Hasil/Data pendukung/DEM.png", "/img/Hasil/Data pendukung/Jalan.png"];

  return (
    <section className="py-12 px-4 bg-white text-gray-800">
      <motion.div ref={ref} id="data" className="max-w-7xl mx-auto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-center mb-8">Hasil Penelitian</h2>

        {/* Data Utama */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Data Utama</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {imagesUtama.map((src, idx) => (
              <img key={idx} src={src} alt={`data-utama-${idx}`} className="rounded-xl shadow-md w-full h-64 object-cover" />
            ))}
          </div>
        </div>

        {/* Data Pendukung */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Data Pendukung</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {imagesPendukung.map((src, idx) => (
              <img key={idx} src={src} alt={`data-pendukung-${idx}`} className="rounded-xl shadow-md w-full h-64 object-cover border-2 border-gray-700" />
            ))}
          </div>
        </div>

        {/* Metode */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-inner leading-relaxed">
          <h4 className="font-semibold mb-2">Metode yang digunakan:</h4>
          <p>
            1. Identifikasi lahan terbangun: <strong>Maximum Likelihood Classification (MLC)</strong>
          </p>
          <p>
            2. Prediksi perkembangan lahan terbangun: <strong>Cellular Automata dan ANN</strong>
          </p>
        </div>
      </motion.div>
    </section>
  );
});

export default Data;
