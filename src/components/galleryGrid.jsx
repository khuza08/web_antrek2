import bgImage from "../assets/images/begal.jpg";

export default function GalleryGrid() {
  const COUNT = 10;
  const HEIGHT = 300;
  const images = Array.from({ length: COUNT }, (_, i) => {
    return `https://picsum.photos/seed/tworows${i}/600/${HEIGHT}`;
  });

  return (
    <section className="relative p-6 sm:p-12 lg:p-24">
      {/* dim */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* konten */}
      <div className="relative">
        {/* grid gambar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-64 rounded-lg object-cover"
            />
          ))}
        </div>

        {/* tombol view more */}
        <div className="flex justify-center">
          <button className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
