import React from "react";
import { motion } from "framer-motion";

const KlasifikasiAbrasi = () => {
  return (
    <section className="bg-blue-50 py-16 px-8">
      <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-blue-900">Klasifikasi Sebaran Wilayah Abrasi di Indonesia</h2>
        <p className="text-lg text-blue-700 mt-4">Abrasi terjadi di berbagai wilayah pesisir Indonesia, dengan tingkat keparahan yang bervariasi. Berikut adalah klasifikasi sebaran wilayah abrasi:</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Wilayah Abrasi Ringan */}
        <motion.div className="bg-white shadow-md p-6 rounded-lg text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-blue-800">Wilayah Abrasi Ringan</h3>
          <p className="text-gray-700 mt-2">Pengikisan pantai terjadi perlahan tanpa dampak besar terhadap pemukiman dan ekosistem pesisir.</p>
        </motion.div>

        {/* Wilayah Abrasi Sedang */}
        <motion.div className="bg-white shadow-md p-6 rounded-lg text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-blue-800">Wilayah Abrasi Sedang</h3>
          <p className="text-gray-700 mt-2">Terdapat ancaman bagi infrastruktur, tetapi masih dapat dikendalikan dengan mitigasi yang tepat.</p>
        </motion.div>

        {/* Wilayah Abrasi Berat */}
        <motion.div className="bg-white shadow-md p-6 rounded-lg text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-blue-800">Wilayah Abrasi Berat</h3>
          <p className="text-gray-700 mt-2">Abrasi sangat cepat dan menyebabkan hilangnya lahan secara signifikan dalam waktu singkat.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default KlasifikasiAbrasi;
