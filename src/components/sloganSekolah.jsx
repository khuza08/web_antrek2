// components/SchoolSlogan.jsx
import { FaGraduationCap, FaBookOpen, FaUsers } from 'react-icons/fa';

export default function SloganSekolah() {
  return (
    <section className="min-h-screen flex justify-center items-center py-16 bg-gradient-to-b from-white to-blue-100 dark:from-gray-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 dark:text-blue-200 dark:bg-blue-900 rounded-full mb-4">
            Visi Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Membangun Generasi</span>
            <span
              className="text-blue-600 dark:text-blue-400 italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Cerdas dan Berkarakter
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            "Berinovasi dalam pendidikan untuk menciptakan pemimpin masa depan yang kompeten dan berintegritas"
          </p>
        </div>

        {/* Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Pillar 1 */}
          <div className="bg-white dark:bg-white/5 border-2 border-white/15 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
              <FaGraduationCap />
            </div>
            <h3
              className="text-2xl font-bold mb-3 text-gray-900 dark:text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Pendidikan Holistik
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Mengembangkan potensi akademik dan karakter secara seimbang
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white dark:bg-white/5 p-8 border-2 border-white/15 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
              <FaBookOpen />
            </div>
            <h3
              className="text-2xl font-bold mb-3 text-gray-900 dark:text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Kurikulum Modern
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Materi pembelajaran terkini yang relevan dengan kebutuhan industri
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white dark:bg-white/5 p-8 border-2 border-white/15 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
              <FaUsers />
            </div>
            <h3
              className="text-2xl font-bold mb-3 text-gray-900 dark:text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Komunitas Inklusif
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Lingkungan belajar yang mendukung dan penuh kolaborasi
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}