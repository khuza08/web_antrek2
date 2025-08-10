import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/50 border-b z-50 border-white/25 backdrop-blur-xl text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* logo */}
        <Link to="/" className="text-2xl font-bold uppercase tracking-wide hover:text-yellow-300 transition">
          SMK ANTARTIKA 2 SIDOARJO
        </Link>

        {/* nav */}
        <nav className="space-x-8 hidden md:flex">
          <ul className="flex space-x-8">
            <li><Link to="/" className="hover:text-yellow-300 transition">Beranda</Link></li>
            <li><Link to="/tentang" className="hover:text-yellow-300 transition">Tentang</Link></li>
            <li><Link to="/guru" className="hover:text-yellow-300 transition">Guru</Link></li>
            <li><Link to="/achievements" className="hover:text-yellow-300 transition">Prestasi</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-300 transition">Galeri</Link></li>
          </ul>
        </nav>

        {/* cta future paling */}
        <div>
          <Link to="/contact" className="px-4 py-2 border border-white/25 rounded-lg hover:bg-white/10 hover:border-white/30 transition">
            Hubungi
          </Link>
        </div>

        {/* mobile menu smol screen */}
        <div className="md:hidden">
          {/* menu icon */}
          <button aria-label="Open menu" className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
