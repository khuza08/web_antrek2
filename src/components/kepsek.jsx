import kepsekImage from '../assets/images/kepsek.jpeg';

export default function Kepsek() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* foto*/}
        <div>
          <img
            src={kepsekImage}
            alt="Kepala Sekolah"
            className="w-full rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* desc kanan */}
        <div>
          <button className="border border-black rounded-full px-4 py-1 font-semibold mb-6 hover:bg-black hover:text-white transition-colors duration-300">
            Meet the Chancellor
          </button>

          <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            A member of the CUNY community for two decades, Chancellor Matos Rodriguez is using his platform as the first educator of color and first Latino in the role to ensure that the University excels at our mission to serve and elevate New Yorkers of all backgrounds.
          </p>

          <button className="border border-blue-600 text-blue-600 rounded-full px-5 py-2 font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
