import kepsekImage from '../assets/images/kepsek.jpeg';

export default function Kepsek() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-blue-100 dark:bg-gray-800">
      {/* kolom kiri */}
      <div className="w-full md:w-1/2 h-[80vh]">
        <img
          src={kepsekImage}
          alt="Kepala Sekolah"
          className="w-full h-full object-cover md:rounded-r-4xl"
        />
      </div>

      {/* kolom kanan */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 md:px-12 py-8 text-center md:text-left">
        <div className="border-4 border-black/20 dark:border-white/20 rounded-full px-4 py-2 inline-block mb-4">
          <h2 className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 font-semibold">
            Meet the{' '}
            <span
              className="text-blue-400 italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Principal
            </span>
          </h2>
        </div>

        <p className="text-gray-800 dark:text-gray-100 mb-6 text-base md:text-lg italic font-mono tracking-tight leading-tight">
          Thank God, I never stop saying it because thanks to His grace, grace
          and guidance, our beloved school website, SMK Antarctica 2 Sidoarjo
          was successfully published. I would like to thank the team behind the
          scenes on this website because thanks to its hard work this website
          was finally published to the general public.
        </p>

        <button className="bg-blue-500 border border-blue-500 rounded-full px-6 py-2 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition">
          <p className="text-gray-100 dark:text-gray-100 text-base md:text-lg font-semibold">
            Learn More
          </p>
        </button>
      </div>
    </section>
  );
}