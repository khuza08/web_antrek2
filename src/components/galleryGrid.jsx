import bgImage from "../assets/images/begal.jpg";

export default function GalleryGrid() {
  const COUNT = 10;
  const HEIGHT = 300;
  const images = Array.from({ length: COUNT }, (_, i) => {
    return `https://picsum.photos/seed/tworows${i}/600/${HEIGHT}`;
  });

  return (
    <section className="relative p-24">
      {/* dim */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* card */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
    </section>
  );
}
