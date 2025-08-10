import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p>Halaman tidak ditemukan.</p>
      <Link to="/" className="text-blue-600 underline">Kembali ke Beranda</Link>
    </div>
  )
}
