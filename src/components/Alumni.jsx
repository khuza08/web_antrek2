import SectionTitle from './sectionTitle';

export default function Alumni() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Alumni 2015",
      message:
        "Sekolah ini memberikan banyak pengalaman berharga, tidak hanya akademik tetapi juga pengembangan karakter. Saya sangat berterima kasih kepada para guru.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Siti Aisyah",
      role: "Alumni 2018",
      message:
        "Lingkungan belajar yang nyaman dan guru yang peduli membuat saya merasa seperti di rumah sendiri. Ilmu yang saya dapatkan sangat bermanfaat di dunia kerja.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Andi Wijaya",
      role: "Alumni 2020",
      message:
        "Kegiatan ekstrakurikuler di sini membantu saya menemukan minat dan bakat yang akhirnya menjadi karir saya sekarang.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Rahma Putri",
      role: "Alumni 2017",
      message:
        "Belajar di sini membuat saya siap menghadapi tantangan di perguruan tinggi. Dukungan guru sangat luar biasa.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Dewi Kartika",
      role: "Alumni 2016",
      message:
        "Selain akademik, saya mendapatkan banyak soft skill yang sangat berguna di dunia kerja.",
      img: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
      name: "Fajar Pratama",
      role: "Alumni 2019",
      message:
        "Sekolah ini memberikan banyak kesempatan untuk berkembang dan berprestasi.",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-slate-900 py-16 flex items-center justify-center">
  <div className="max-w-7xl mx-auto px-4 w-full">
    <div className='text-center py-4'>
      <SectionTitle>
        Apa Kata <span className='italic text-blue-600 dark:text-blue-400' style={{ fontFamily: "'Instrument Serif', serif" }}>
          Alumni?
        </span>
      </SectionTitle>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {testimonials.map((alumni, i) => (
        <div
          key={i}
          className="bg-white/5 rounded-xl p-6 shadow hover:shadow-lg transition h-64 w-full flex flex-col"
        >
          <div className="flex items-center mb-4">
            <img
              src={alumni.img}
              alt={alumni.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-blue-400 font-semibold text-lg">{alumni.name}</h3>
              <p className="text-sm text-gray-100">{alumni.role}</p>
            </div>
          </div>
          <p className="text-gray-300 line-clamp-4 flex-grow">
            {alumni.message}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
