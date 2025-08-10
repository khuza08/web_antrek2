export default function GalleryGrid({ items }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, idx) => (
        <div key={idx} className="border rounded overflow-hidden">
          <img src={item.src} alt={item.alt} className="w-full h-40 object-cover" />
        </div>
      ))}
    </div>
  )
}
