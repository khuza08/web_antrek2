import React from 'react';

// CardGuru component with export default format
function CardGuru({ guru }) {
  return (
    <div className="border border-slate-600 rounded-lg p-4 text-center shadow hover:shadow-lg transition bg-slate-800 hover:border-blue-500">
      <img src={guru.photo} alt={guru.nama} className="w-24 h-24 rounded-full mx-auto mb-2 object-cover" />
      <h3 className="font-bold text-lg text-white">{guru.nama}</h3>
      <p className="text-blue-400">{guru.jabatan}</p>
    </div>
  )
}

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GuruSlider() {
  // Data dummy untuk guru
  const guruData = [
    {
      id: 1,
      nama: "Dr. Sarah Johnson",
      jabatan: "Guru Matematika",
      photo: "https://images.unsplash.com/photo-1494790108755-2616c5e8b2e8?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      nama: "Prof. Ahmad Rahman", 
      jabatan: "Guru Fisika",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      nama: "Ms. Lisa Chen",
      jabatan: "Guru Kimia", 
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 4,
      nama: "Dr. Michael Brown",
      jabatan: "Guru Biologi",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 5,
      nama: "Ms. Emma Wilson", 
      jabatan: "Guru Bahasa Inggris",
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 6,
      nama: "Dr. Robert Kim",
      jabatan: "Guru Sejarah", 
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="mx-auto bg-slate-900 py-16 px-4">
      <div className="px-12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri - Teks */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Temukan <span className="text-blue-400">Guru Terbaik</span> untuk Kesuksesan Anda
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Bergabunglah dengan ribuan siswa yang telah merasakan pengalaman belajar luar biasa 
                bersama guru-guru profesional dan berpengalaman dari berbagai bidang.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-slate-300">Guru bersertifikat dan berpengalaman</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-slate-300">Pembelajaran yang disesuaikan dengan kebutuhan</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-slate-300">Jadwal fleksibel dan harga terjangkau</span>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
                Mulai Belajar Sekarang
              </button>
            </div>
          </div>

          {/* Kolom Kanan - Slider Cards */}
          <div className="relative">
            <div className="overflow-hidden">
              <Swiper
                spaceBetween={20}
                slidesPerView={1.5}
                className="pb-12"
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
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
      </div>
  );
}