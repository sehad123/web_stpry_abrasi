import React from "react";
import { motion } from "framer-motion";

const FaktorAbrasi = () => {
  return (
    <section className="bg-white py-16 px-8">
      <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-blue-900">Faktor Penyebab Abrasi</h2>
        <p className="text-lg text-blue-700 mt-4">Berikut adalah faktor utama yang berkontribusi terhadap abrasi di Indonesia:</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {/* Faktor 1 */}
        <motion.div className="bg-blue-100 p-6 rounded-lg shadow-md text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-blue-800">Perubahan Iklim</h3>
          <p className="text-gray-700 mt-2">Naiknya permukaan laut mempercepat pengikisan daratan pesisir.</p>
        </motion.div>

        {/* Faktor 2 */}
        <motion.div className="bg-red-100 p-6 rounded-lg shadow-md text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-red-800">Eksploitasi Lahan</h3>
          <p className="text-gray-700 mt-2">Penebangan hutan mangrove mempercepat abrasi di banyak wilayah.</p>
        </motion.div>

        {/* Faktor 3 */}
        <motion.div className="bg-green-100 p-6 rounded-lg shadow-md text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-green-800">Gelombang & Arus Laut</h3>
          <p className="text-gray-700 mt-2">Gelombang kuat secara alami mengikis garis pantai.</p>
        </motion.div>

        {/* Faktor 4 */}
        <motion.div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.8 }} viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-yellow-800">Kurangnya Mitigasi</h3>
          <p className="text-gray-700 mt-2">Minimnya upaya perlindungan memperparah kerusakan akibat abrasi.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FaktorAbrasi;
