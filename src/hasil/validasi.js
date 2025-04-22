import React from "react";
import { motion } from "framer-motion";

const Validasi = () => {
  return (
    <section className="px-4 py-12 bg-white text-gray-800">
      <motion.div className="max-w-4xl mx-auto space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold text-center">Analisis Tabel Uji Akurasi</h2>

        <div className="flex justify-center">
          <img src="/img/Hasil/Validasi simulasi/validasi simulasi.png" alt="Tabel Uji Akurasi" className="rounded-xl shadow-md max-w-full object-contain" />
        </div>

        <p className=" text-justify bg-gray-100 p-4 rounded-lg shadow-inner">
          Table menunjukkan hasil evaluasi klasifikasi citra satelit menggunakan berbagai metrik: <strong>Akurasi</strong> sebesar <strong>95,83%</strong> menunjukkan bahwa sebagian besar piksel berhasil diklasifikasikan dengan benar.
          <strong>Presisi</strong> sebesar <strong>79,17%</strong> mengindikasikan bahwa dari seluruh prediksi lahan terbangun, sekitar 79% memang benar.
          <strong>Recall</strong> sebesar <strong>94,49%</strong> menandakan model sangat baik dalam menangkap lahan terbangun yang sesungguhnya.
          <strong>F1-Score</strong> sebesar <strong>85,85%</strong> mencerminkan keseimbangan antara presisi dan recall. Sementara itu, <strong>Indeks Kappa</strong> sebesar <strong>83,72%</strong> mengindikasikan kesesuaian yang sangat
          baik antara hasil klasifikasi dan data referensi, mengoreksi kemungkinan kesepakatan acak.
        </p>
      </motion.div>
    </section>
  );
};

export default Validasi;
