import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Slide5 = () => {
  const data = {
    labels: ["2010", "2011", "2012", "2013", "2014"], // Sumbu Y (Tahun)
    datasets: [
      {
        label: "Jumlah",
        data: [50, 100, 150, 200, 250], // Sumbu X (Jumlah)
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Warna batang
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Grafik Batang: Tahun vs Jumlah",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Jumlah",
        },
      },
      y: {
        title: {
          display: true,
          text: "Tahun",
        },
        // Set this scale to be horizontal
        beginAtZero: true, // Ensure the bar starts from zero
      },
    },
    indexAxis: "y", // Set to 'y' to make the bars horizontal
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/6.jpeg')" }}>
      {" "}
      <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-white">Indeks Indikator Pengaruh Abrasi</h2>
        <p className="text-lg mt-4 text-white">Berikut adalah indikator utama dalam pengaruh abrasi:</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {/* Card 1 */}
        <motion.div
          className="bg-orange-50 p-6 rounded-2xl shadow-md w-full h-auto flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Bar data={data} options={options} />
        </motion.div>
        <motion.div
          className="bg-orange-50 p-6 rounded-2xl shadow-md w-full h-auto flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="bg-orange-200 p-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-home text-orange-600 text-2xl"></i>
          </div>

          {/* Text Content */}
          <div className="ml-4 flex-1">
            <h3 className="text-sm font-bold text-orange-600">Faktor 4. Lingkungan Pemukiman</h3>
            <p className="text-4xl font-bold text-orange-600 mt-2">60.66%</p>
            <p className="text-sm text-orange-500 mt-1">Persentase Rumah Tangga yang Memiliki Akses Terhadap Hunian Yang Layak Dan Terjangkau</p>
          </div>

          {/* Info Icon */}
          <div>
            <i className="fas fa-info-circle text-orange-400 text-lg"></i>
          </div>
        </motion.div>
        <motion.div
          className="bg-orange-50 p-6 rounded-2xl shadow-md w-full h-auto flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="bg-orange-200 p-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-home text-orange-600 text-2xl"></i>
          </div>

          {/* Text Content */}
          <div className="ml-4 flex-1">
            <h3 className="text-sm font-bold text-orange-600">Faktor 4. Lingkungan Pemukiman</h3>
            <p className="text-4xl font-bold text-orange-600 mt-2">60.66%</p>
            <p className="text-sm text-orange-500 mt-1">Persentase Rumah Tangga yang Memiliki Akses Terhadap Hunian Yang Layak Dan Terjangkau</p>
          </div>

          {/* Info Icon */}
          <div>
            <i className="fas fa-info-circle text-orange-400 text-lg"></i>
          </div>
        </motion.div>
        <motion.div
          className="bg-orange-50 p-6 rounded-2xl shadow-md w-full h-auto flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="bg-orange-200 p-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-home text-orange-600 text-2xl"></i>
          </div>

          {/* Text Content */}
          <div className="ml-4 flex-1">
            <h3 className="text-sm font-bold text-orange-600">Faktor 4. Lingkungan Pemukiman</h3>
            <p className="text-4xl font-bold text-orange-600 mt-2">60.66%</p>
            <p className="text-sm text-orange-500 mt-1">Persentase Rumah Tangga yang Memiliki Akses Terhadap Hunian Yang Layak Dan Terjangkau</p>
          </div>

          {/* Info Icon */}
          <div>
            <i className="fas fa-info-circle text-orange-400 text-lg"></i>
          </div>
        </motion.div>
        {/* Other cards omitted for brevity */}
      </div>
    </section>
  );
};

export default Slide5;
