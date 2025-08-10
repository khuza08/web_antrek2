import heroImage from '../assets/images/smk.jpg'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center px-4 py-12 sm:py-16 md:p-8 rounded-b-xl w-full min-h-screen md:h-screen overflow-hidden">
      {/* bg Image */}
      <img
        src={heroImage}
        alt="SMK Antartika 2 Sidoarjo"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-50"
      />

      {/* main */}
      <div className="relative flex flex-col items-center max-w-4xl w-full gap-3 sm:gap-4 md:gap-6 text-center z-10 px-2 sm:px-4">
        <p className="text-xs sm:text-sm md:text-xl text-white/80 font-mono leading-tight">
          Selamat Datang Di SMK ANTARTIKA 2 SIDOARJO
        </p>

        {/* h1 */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono leading-snug sm:leading-tight md:leading-none">
          Meet New Friends and <br className="hidden sm:block" />Learn from Experts.
        </h1>

        {/* btn */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto">
          <button className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-yellow-500 transition text-sm sm:text-base w-full sm:w-auto">
            Lihat Karya
          </button>
          <button className="bg-transparent backdrop-blur-lg border border-yellow-400 text-yellow-400 font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition text-sm sm:text-base w-full sm:w-auto">
            Kontak Kami
          </button>
        </div>
      </div>
    </section>
  )
}
