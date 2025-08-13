export default function News() {
  const news = [
    {
      img: "https://picsum.photos/800/800?random=1",
      category: "Miscellaneous",
      title: "Punk rocker with a PhD: The Offspring’s Dexter Holland is also a virologist",
      large: true,
    },
    {
      img: "https://picsum.photos/400/400?random=2",
      category: "Supporting Veterans",
      title: "USC Master of Business for Veterans program helps combat medic give back",
    },
    {
      img: "https://picsum.photos/400/400?random=3",
      category: "Space Research",
      title: "Alum connects NASA space research to earthbound lawmakers",
    },
    {
      img: "https://picsum.photos/400/400?random=4",
      category: "Public Service",
      title: "New City Council member credits time at USC for inspiring his run for office",
    },
    {
      img: "https://picsum.photos/800/800?random=5",
      category: "Aging Research",
      title: "Rethinking the study of Black health and aging",
      large: true,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-800 to-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {news.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${
                item.large ? "row-span-2" : "row-span-1"
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25 hover:bg-black/40 transition"></div>
              <div className="absolute bottom-0 p-4">
                <p className="text-blue-400 text-sm font-semibold">
                  {item.category}
                </p>
                <h2 className="text-white font-bold text-lg leading-snug">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}