import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/">Beranda</Link></li>
        <li><Link to="/tentang">Tentang</Link></li>
        <li><Link to="/guru">Guru</Link></li>
        <li><Link to="/achievements">Prestasi</Link></li>
        <li><Link to="/gallery">Galeri</Link></li>
        <li><Link to="/contact">Kontak</Link></li>
      </ul>
    </nav>
  )
}
