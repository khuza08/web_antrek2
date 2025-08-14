import bgImage from "../assets/images/begal.jpg";

export default function GalleryGrid() {
  const COUNT = 12;
  const HEIGHT = 300;
  const images = Array.from({ length: COUNT }, (_, i) => {
    return `https://picsum.photos/seed/tworows${i}/600/${HEIGHT}`;
  });

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* dim */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover brightness-50 dark:brightness-75"
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      </div>

      {/* konten */}
      <div className="relative max-w-7xl mx-auto">
        {/* title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Our <span className="italic text-blue-400" style={{ fontFamily: "'Instrument Serif', serif" }}>Gallery</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore moments captured from our school community
          </p>
        </div>

        {/* image grid */}
        <div className="grid grid-rows-2 grid-cols-4 gap-4 mb-10">
          {images.slice(0, 8).map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg shadow-md aspect-square">
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 p-2 w-full">
                <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Event #{i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* btn */}
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition duration-200 shadow-lg hover:shadow-blue-500/20">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
}