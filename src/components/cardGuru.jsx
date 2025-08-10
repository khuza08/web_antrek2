export default function CardGuru({ guru }) {
  return (
    <div className="border rounded p-4 text-center shadow hover:shadow-lg transition">
      <img src={guru.photo} alt={guru.nama} className="w-24 h-24 rounded-full mx-auto mb-2" />
      <h3 className="font-bold text-lg">{guru.nama}</h3>
      <p>{guru.jabatan}</p>
    </div>
  )
}
