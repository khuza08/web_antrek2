// components/SchoolSlogan.jsx
import { FaGraduationCap, FaBookOpen, FaUsers } from 'react-icons/fa';

export default function sloganSekolah() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Visi Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="block">Membangun Generasi</span>
            <span 
              className="text-blue-600 italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Cerdas dan Berkarakter
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "Berinovasi dalam pendidikan untuk menciptakan pemimpin masa depan yang kompeten dan berintegritas"
          </p>
        </div>

        {/* Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Pillar 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">
              <FaGraduationCap />
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Pendidikan Holistik
            </h3>
            <p className="text-gray-600">
              Mengembangkan potensi akademik dan karakter secara seimbang
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">
              <FaBookOpen />
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Kurikulum Modern
            </h3>
            <p className="text-gray-600">
              Materi pembelajaran terkini yang relevan dengan kebutuhan industri
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Komunitas Inklusif
            </h3>
            <p className="text-gray-600">
              Lingkungan belajar yang mendukung dan penuh kolaborasi
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}