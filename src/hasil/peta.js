import React from "react";
import { motion } from "framer-motion";

const Peta = () => {
  const grafik = [
    {
      src: "/img/Hasil/Peta sebaran/grafik luas lahan terbangun.png",
    },
  ];

  const maps = [
    {
      src: "/img/Hasil/Peta sebaran/1. 2014 LULC Administrasi (Legenda).png",
      year: "2014",
    },
    {
      src: "/img/Hasil/Peta sebaran/2. 2019 LULC Administrasi (Legenda).png",
      year: "2019",
    },
    {
      src: "/img/Hasil/Peta sebaran/3. 2024 LULC Administrasi (Legenda).png",
      year: "2024",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white text-gray-800">
      <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        {/* Grafik sebagai gambar */}
        <div className="mb-12 text-center">
          {grafik.map((item, index) => (
            <img key={index} src={item.src} alt="Grafik Luas Lahan Terbangun" className="mx-auto rounded-xl shadow-md w-full max-w-4xl object-contain" />
          ))}
        </div>

        {/* Peta Sebaran */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-6">Peta Sebaran Lahan Terbangun</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {maps.map((map, index) => (
              <div key={index} className="text-center">
                <img src={map.src} alt={`Peta ${map.year}`} className="rounded-xl shadow-md w-full object-contain" />
                <p className="mt-2 text-sm font-medium">{`LULC ${map.year}`}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Analisis */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-inner leading-relaxed">
          <h4 className="font-semibold mb-2">Analisis Grafik:</h4>
          <p>Luas lahan terbangun mengalami peningkatan dari tahun 2014 ke tahun 2019, dan terus meningkat hingga tahun 2024. Sebaliknya, lahan bukan terbangun secara konsisten mengalami penurunan luas.</p>

          <h4 className="font-semibold mt-4 mb-2">Analisis Peta:</h4>
          <p>
            Secara visual, sebaran lahan terbangun cenderung memusat di wilayah ibukota provinsi yaitu Kota Surabaya dan sekitarnya, seperti Kabupaten Sidoarjo dan Gresik. Pada tahun 2019, mulai meluas ke wilayah Kabupaten Lamongan dan
            Tuban, serta pada tahun 2024 meluas hingga ke wilayah Kabupaten Bojonegoro, Pasuruan, dan Probolinggo.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Peta;
