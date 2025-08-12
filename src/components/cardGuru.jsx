import React from 'react';

function CardGuru({ guru }) {
  return (
    <div
      className="relative min-h-100 rounded-lg shadow hover:shadow-lg transition bg-cover bg-center border border-slate-600 hover:border-blue-500 overflow-hidden"
      style={{ backgroundImage: `url(${guru.photo})` }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/60 hover:bg-black/0 transition"></div>

      {/* Konten teks */}
      <div className="relative z-10 p-4 flex flex-col justify-end h-full text-white">
        <h3 className="font-bold text-lg">{guru.nama}</h3>
        <p className="text-blue-300">{guru.jabatan}</p>
      </div>
    </div>
  )
}

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GuruSlider() {
  const guruData = [
    {
      id: 2,
      nama: "Prof. Ahmad Rahman",
      jabatan: "Guru Fisika",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      nama: "Ms. Lisa Chen",
      jabatan: "Guru Kimia",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      nama: "Dr. Michael Brown",
      jabatan: "Guru Biologi",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      nama: "Ms. Emma Wilson",
      jabatan: "Guru Bahasa Inggris",
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      nama: "Dr. Robert Kim",
      jabatan: "Guru Sejarah",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="bg-slate-900 py-16 px-4">
      <div className="px-12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Kolom Kiri */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Temukan <span className="text-blue-400">Guru Terbaik</span> untuk Kesuksesan Anda
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Bergabunglah dengan ribuan siswa yang telah merasakan pengalaman belajar luar biasa
                bersama <br />guru-guru profesional dan berpengalaman dari berbagai bidang.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Guru bersertifikat dan berpengalaman",
                "Pembelajaran yang disesuaikan dengan kebutuhan",
                "Jadwal fleksibel dan harga terjangkau"
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-300">{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
                Mulai Belajar Sekarang
              </button>
            </div>
          </div>

          {/* Kolom Kanan - Slider */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-30 h-full bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-30 h-full bg-gradient-to-l from-slate-900 via-slate-900/40 to-transparent z-10 pointer-events-none"></div>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1.5}
              slidesOffsetBefore={112}
              className="pb-12"
              breakpoints={{
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 1.5, spaceBetween: 20 },
              }}
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
  );
}
