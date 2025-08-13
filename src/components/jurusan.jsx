import React from 'react';

const Jurusan = () => {
  // data jurusan
  const jurusanList = [
    { id: 1, name: 'Multimedia' },
    { id: 2, name: 'Perbankan' },
    { id: 3, name: 'Akutansi' },
    { id: 4, name: 'Rekayasa Perangkat Lunak' },
    { id: 5, name: 'Teknik Mekatronika' },
    { id: 6, name: 'Teknik Komputer & Jaringan' },
  ];

  const leftColumn = jurusanList.slice(0, 3);
  const rightColumn = jurusanList.slice(3);

  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-gray-800 p-24 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-100">Program <span className='italic text-blue-600 dark:text-blue-400' style={{ fontFamily: "'Instrument Serif', serif" }}>Keahlian</span></h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* kiri */}
          <div className="w-full md:w-1/2">
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-xl mb-4 text-slate-300 border-b border-slate-700 pb-3">Teknologi Informasi</h3>
              <ul className="space-y-3">
                {leftColumn.map((jurusan) => (
                  <li key={jurusan.id} className="flex items-center text-slate-200 hover:text-white transition-colors">
                    <span className="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center mr-3 font-medium">
                      {jurusan.id}
                    </span>
                    <span className="text-lg">{jurusan.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* kanan */}
          <div className="w-full md:w-1/2">
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-xl mb-4 text-slate-300 border-b border-slate-700 pb-3">Teknik & Bisnis</h3>
              <ul className="space-y-3">
                {rightColumn.map((jurusan) => (
                  <li key={jurusan.id} className="flex items-center text-slate-200 hover:text-white transition-colors">
                    <span className="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center mr-3 font-medium">
                      {jurusan.id}
                    </span>
                    <span className="text-lg">{jurusan.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jurusan;