import { FaGraduationCap, FaBookOpen, FaUsers } from 'react-icons/fa';

export default function SloganSekolah() {
  return (
    <section className="flex justify-center items-center py-8 sm:py-12 md:py-16 xl:py-20 2xl:py-24 bg-gradient-to-b from-white to-blue-100 dark:from-gray-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-blue-600 bg-blue-100 dark:text-blue-200 dark:bg-blue-900 rounded-full mb-3 sm:mb-4">
            Visi Kami
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5 md:mb-6">
            <span className="block">Membangun Generasi</span>
            <span
              className="text-blue-600 dark:text-blue-400 italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Cerdas dan Berkarakter
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            "Berinovasi dalam pendidikan untuk menciptakan pemimpin masa depan yang kompeten dan berintegritas"
          </p>
        </div>

        {/* Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
          {/* Pillar 1 */}
          <div className="bg-white dark:bg-white/5 border-2 border-white/15 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              <FaGraduationCap />
            </div>
            <h3
              className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Pendidikan Holistik
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Mengembangkan potensi akademik dan karakter secara seimbang
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white dark:bg-white/5 p-4 sm:p-6 md:p-8 border-2 border-white/15 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              <FaBookOpen />
            </div>
            <h3
              className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Kurikulum Modern
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Materi pembelajaran terkini yang relevan dengan kebutuhan industri
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white dark:bg-white/5 p-4 sm:p-6 md:p-8 border-2 border-white/15 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              <FaUsers />
            </div>
            <h3
              className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Komunitas Inklusif
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Lingkungan belajar yang mendukung dan penuh kolaborasi
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium text-sm sm:text-base rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition shadow-lg hover:shadow-blue-500/20">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}