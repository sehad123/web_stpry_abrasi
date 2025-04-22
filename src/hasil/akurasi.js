import React from "react";
import { motion } from "framer-motion";

const Akurasi = () => {
  return (
    <section className="px-4 py-12 bg-white text-gray-800">
      <motion.div className="max-w-4xl mx-auto space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold text-center">Analisis Tabel Uji Akurasi</h2>

        <div className="flex justify-center">
          <img src="/img/Hasil/Akurasi/uji akurasi.png" alt="Tabel Uji Akurasi" className="rounded-xl shadow-md max-w-full object-contain" />
        </div>

        <p className=" text-justify bg-gray-100 p-4 rounded-lg shadow-inner">
          Tabel uji akurasi menunjukkan bahwa hasil klasifikasi citra satelit untuk tahun 2014, 2019, dan 2024 memiliki tingkat keakuratan yang tinggi. Nilai <strong>Overall Accuracy</strong> berkisar antara <strong>92,78%</strong> hingga{" "}
          <strong>94,33%</strong>. Sementara itu, nilai <strong>Indeks Kappa</strong> berada di kisaran <strong>0,851</strong> hingga <strong>0,883</strong>, yang mengindikasikan tingkat kesesuaian yang sangat baik antara hasil klasifikasi
          dan data referensi.
        </p>
      </motion.div>
    </section>
  );
};

export default Akurasi;
