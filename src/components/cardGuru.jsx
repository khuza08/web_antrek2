import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CardGuru({ guru }) {
  return (
    <div
      className="relative aspect-[3/4] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-cover bg-center overflow-hidden group"
      style={{ backgroundImage: `url(${guru.photo})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent group-hover:from-black/60 group-hover:via-black/20 transition-all duration-300"></div>

      {/* Content */}
      <div className="relative z-10 p-3 sm:p-4 md:p-6 flex flex-col justify-end h-full">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-lg sm:text-xl text-white mb-1">{guru.nama}</h3>
          <p className="text-blue-300 text-xs sm:text-sm">{guru.jabatan}</p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 sm:mt-4">
          <p className="text-white/80 text-xs sm:text-sm line-clamp-3">{guru.desc || "Guru profesional dengan pengalaman mengajar bertahun-tahun"}</p>
        </div>
      </div>
    </div>
  );
}

export default function GuruSlider() {
  const guruData = [
    {
      id: 2,
      nama: "Ir. Jendral Huza",
      jabatan: "Guru Jumpshot Perang Dunia II",
      photo: "https://cdn5.telesco.pe/file/jlTlu9415OsKqtyLsS9tgVcl08c3jCWiLRit4tQq_Wm53aRiYydqF97ukTzDNxKgVNeFiEBwnVHv26beTvrazTP_2h3nabndsFqV24kuBaT9xd5-nVdWg59m2VGJ-AMQQvNwFKQpsTC2EXPWHNIM3GL_7tMrPDOikdLt2h8Pz6rPkUM1_1JDG_13HINQKqmxTR7LF7fhWPaSuHCQ1fj4KW4jp4Q2wLBy5JkI56uGdz-ps03AT0gRU_fjPmTQs7_SJlBo0dITGgQ4Ggh3vJnhyLSJqOm4G81FNIh0mXZx3WUDtvApubMA3q7nc96eI8gPJ_VjdEbLMtmhU3AcN5AfRw.jpg",
      desc: "Pakar strategi militer dengan pengalaman lapangan langsung"
    },
    {
      id: 3,
      nama: "Ms. Lisa Chen",
      jabatan: "Guru Kimia",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop",
      desc: "Spesialis kimia organik dengan metode pengajaran yang inovatif"
    },
    {
      id: 4,
      nama: "Dr. Michael Brown",
      jabatan: "Guru Biologi",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      desc: "Ahli biologi molekuler dengan penelitian di bidang genetika"
    },
    {
      id: 5,
      nama: "Ms. Emma Wilson",
      jabatan: "Guru Bahasa Inggris",
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&h=400&fit=crop",
      desc: "Native speaker dengan sertifikasi TESOL dan pengalaman internasional"
    },
    {
      id: 6,
      nama: "Dr. Robert Kim",
      jabatan: "Guru Sejarah",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop",
      desc: "Sejarawan dengan spesialisasi sejarah Asia Tenggara"
    }
  ];

  return (
    <section className="w-full bg-blue-100 dark:bg-slate-900 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
                Guru <span className="text-blue-600 dark:text-blue-400 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Terbaik</span> di Sekolah Kami
              </h2>
              <p className="text-gray-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Bergabunglah dengan ribuan siswa yang telah merasakan pengalaman belajar luar biasa bersama guru-guru profesional dan berpengalaman dari berbagai bidang.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                "Guru bersertifikat dan berpengalaman",
                "Pembelajaran yang disesuaikan dengan kebutuhan",
                "Jadwal fleksibel dan metode pengajaran modern"
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-slate-300 text-sm sm:text-base">{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-1 sm:pt-2">
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base rounded-full transition duration-200 shadow-lg hover:shadow-blue-500/20">
                Mulai Belajar Sekarang
              </button>
            </div>
          </div>

          {/* Right Column - Slider */}
          <div className="w-full lg:w-1/2 relative">
            <div className="overflow-hidden">
              <div className="mask-gradient">
                <Swiper
                  modules={[Navigation, Pagination, Mousewheel]}
                  spaceBetween={20}
                  slidesPerView={1.5}
                  slidesOffsetBefore={112}
                  mousewheel={{ forceToAxis: true }}
                  grabCursor={true}        
                  simulateTouch={true}      
                  touchStartPreventDefault={false} 
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 1.5, centeredSlides: false }
                  }}
                  className="pb-8 sm:pb-12"
                >
                  {guruData.map((guru) => (
                    <SwiperSlide key={guru.id} className="w-full max-w-xs">
                      <CardGuru guru={guru} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}