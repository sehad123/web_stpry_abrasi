import React from "react";
import { motion } from "framer-motion";

const Simulasi = () => {
  return (
    <section className="px-4 py-12 bg-white text-gray-800">
      <motion.div className="max-w-4xl mx-auto space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold text-center">Hasil Simulasi</h2>

        <div className="flex justify-center">
          <img src="/img/Hasil/Input dan hasil simulasi/6. Simulasi 2024 LULC Administrasi (Legenda).png" alt="Hasil Simulasi LULC 2024" className="rounded-xl shadow-md max-w-full object-contain" />
        </div>

        <p className=" text-justify bg-gray-100 p-4 rounded-lg shadow-inner">
          Pola sebaran lahan terbangun hasil simulasi cenderung mengikuti pola sebaran saat periode 2014-2019. Hal ini menunjukkan bahwa model yang telah dibuat dapat menangkap pola perkembangan yang telah terjadi.
        </p>
      </motion.div>
    </section>
  );
};

export default Simulasi;
