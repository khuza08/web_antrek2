export default function CardPrestasi({ prestasi }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="font-bold text-xl">{prestasi.judul}</h3>
      <p>{prestasi.deskripsi}</p>
      <small className="text-gray-500">{prestasi.tanggal}</small>
    </div>
  )
}
