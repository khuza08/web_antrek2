import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* dim */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-lg z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 border-b border-white/25 text-white z-50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold uppercase tracking-wide hover:text-yellow-300 transition"
          >
            SMK ANTARTIKA 2 SIDOARJO
          </Link>

          {/* mobile menu btn */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* desktop nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-yellow-300 transition">Beranda</Link>
            <Link to="/tentang" className="hover:text-yellow-300 transition">Tentang</Link>
            <Link to="/guru" className="hover:text-yellow-300 transition">Guru</Link>
            <Link to="/achievements" className="hover:text-yellow-300 transition">Prestasi</Link>
            <Link to="/gallery" className="hover:text-yellow-300 transition">Galeri</Link>
            <Link
              to="/contact"
              className="px-4 py-2 border border-white/25 rounded-lg hover:bg-white/10 hover:border-white/30 transition"
            >
              Hubungi
            </Link>
          </nav>
        </div>

        {/* mobile menu */}
        <div
          className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-black/90 backdrop-blur-lg pb-4 relative z-50`}
        >
          <div className="flex flex-col space-y-4 px-6 py-2">
            <Link 
              to="/" 
              className="hover:text-yellow-300 transition py-2 border-b border-white/30"
              onClick={() => setMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link 
              to="/tentang" 
              className="hover:text-yellow-300 transition py-2 border-b border-white/30"
              onClick={() => setMenuOpen(false)}
            >
              Tentang
            </Link>
            <Link 
              to="/guru" 
              className="hover:text-yellow-300 transition py-2 border-b border-white/30"
              onClick={() => setMenuOpen(false)}
            >
              Guru
            </Link>
            <Link 
              to="/achievements" 
              className="hover:text-yellow-300 transition py-2 border-b border-white/30"
              onClick={() => setMenuOpen(false)}
            >
              Prestasi
            </Link>
            <Link 
              to="/gallery" 
              className="hover:text-yellow-300 transition py-2 border-b border-white/30"
              onClick={() => setMenuOpen(false)}
            >
              Galeri
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 border border-white/25 rounded-lg hover:bg-white/30 hover:border-white/30 transition text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Hubungi
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}