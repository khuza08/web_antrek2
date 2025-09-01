# 🌐 Web Sekolah

Aplikasi web sekolah modern yang dibangun dengan **React (Vite) + Laravel + TailwindCSS** menggunakan database **MySQL**. Dilengkapi dengan fitur **Chatbot AI**, **Testimoni Alumni**, berita sekolah, galeri, serta sistem PPDB online.

## 🚀 Tech Stack

- **Frontend:** React (Vite) + TailwindCSS
- **Backend:** Laravel
- **Database:** MySQL
- **AI Integration:** Chatbot AI (API-based)

## 📂 Struktur Proyek

<details>
<summary>📁 Frontend Structure</summary>

```bash
src/
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── assets/
│   ├── react.svg
│   └── images/
│       ├── achievement.jpg
│       ├── begal.jpg
│       ├── favicon.png
│       ├── image.png
│       ├── kepsek.jpeg
│       └── smk.jpg
├── components/
│   ├── Alumni.jsx
│   ├── cardGuru.jsx
│   ├── cardPrestasi.jsx
│   ├── contactForm.jsx
│   ├── faq.jsx
│   ├── footer.jsx
│   ├── galleryGrid.jsx
│   ├── hero.jsx
│   ├── jurusan.jsx
│   ├── kepsek.jsx
│   ├── navbar.jsx
│   ├── news.jsx
│   ├── sectionTitle.jsx
│   ├── sekitar.jsx
│   ├── sloganSekolah.jsx
│   ├── spacer.jsx
│   └── toggleTheme.jsx
├── data/
│   ├── berita.json
│   ├── gallery.json
│   ├── guru.json
│   └── prestasi.json
├── hooks/
│   └── useFetch.js
├── layouts/
│   └── layout.jsx
├── pages/
│   ├── 404.jsx
│   ├── contact.jsx
│   ├── gallery.jsx
│   ├── guru.jsx
│   ├── home.jsx
│   ├── login.tsx
│   ├── news.jsx
│   ├── ppdb.jsx
│   ├── prestasi.jsx
│   ├── register.tsx
│   └── tentang.jsx
├── styles/
│   └── index.css
└── utils/
    ├── fetchData.js
    └── formatDate.js
```

</details>

## ✨ Fitur Utama

<details>
<summary>🏫 Informasi Sekolah</summary>

- Profil lengkap sekolah (visi, misi, sejarah)
- Data jurusan dan program studi
- Informasi kepala sekolah
- Slogan dan identitas sekolah

</details>

<details>
<summary>👥 Komunitas</summary>

- **Testimoni Alumni** - Pengalaman lulusan sekolah
- **Data Guru & Staff** - Profil lengkap tenaga pendidik
- **Prestasi Sekolah** - Pencapaian akademik dan non-akademik

</details>

<details>
<summary>📢 Informasi & Media</summary>

- **Berita Sekolah** - Update terkini kegiatan sekolah
- **Galeri Kegiatan** - Dokumentasi foto kegiatan
- **FAQ** - Pertanyaan yang sering diajukan

</details>

<details>
<summary>🤖 AI Features</summary>

- **Chatbot AI** - Asisten virtual untuk informasi sekolah
- Respons otomatis untuk pertanyaan umum

</details>

<details>
<summary>📝 Layanan Online</summary>

- **PPDB Online** - Formulir pendaftaran siswa baru
- **Formulir Kontak** - Komunikasi dengan pihak sekolah

</details>

<details>
<summary>🎨 User Experience</summary>

- **Dark/Light Mode** - Toggle tema terang/gelap
- **Responsive Design** - Optimized untuk semua perangkat
- **Modern UI/UX** - Interface yang clean dan user-friendly

</details>

### 📥 Quick Start

<details>
<summary>🔽 Clone Frontend & Backend</summary>

```bash
# Clone Frontend (React)
git clone -b frontend https://github.com/khuza08/web_antrek2.git frontend

# Clone Backend (Laravel)
git clone -b backend https://github.com/khuza08/web_antrek2.git backend
```

</details>

## ⚙️ Instalasi & Setup

<details>
<summary>🔧 Setup Frontend (React)</summary>

```bash
# Clone repository frontend
git clone -b frontend https://github.com/khuza08/web_antrek2.git frontend

# Masuk ke folder frontend
cd frontend

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

</details>

<details>
<summary>🔧 Setup Backend (Laravel)</summary>

```bash
# Clone repository backend
git clone -b backend https://github.com/khuza08/web_antrek2.git backend

# Masuk ke folder backend
cd backend

# Install dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Setup database connection di .env
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=web_sekolah
# DB_USERNAME=your_username
# DB_PASSWORD=your_password

# Migrate database
php artisan migrate

# Seed data (opsional)
php artisan db:seed

# Jalankan server
php artisan serve
```

</details>

<details>
<summary>🗄️ Setup Database</summary>

```sql
-- Buat database MySQL
CREATE DATABASE web_sekolah;

-- Import data dari file SQL (jika ada)
mysql -u username -p web_sekolah < database/web_sekolah.sql
```

</details>

## 🔧 Konfigurasi

### Environment Variables
```env
# Frontend (.env)
VITE_API_URL=http://localhost:8000/api
VITE_CHATBOT_API_KEY=your_ai_api_key

# Backend (.env)
APP_NAME="Web Sekolah"
APP_URL=http://localhost:8000
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=web_sekolah
```

## 📱 Halaman Website

| Halaman | Route | Komponen | Deskripsi |
|---------|-------|----------|-----------|
| Beranda | `/` | `home.jsx` | Landing page utama |
| Tentang | `/tentang` | `tentang.jsx` | Profil sekolah |
| Guru | `/guru` | `guru.jsx` | Daftar tenaga pendidik |
| Prestasi | `/prestasi` | `prestasi.jsx` | Pencapaian sekolah |
| Galeri | `/galeri` | `gallery.jsx` | Foto kegiatan |
| Berita | `/berita` | `news.jsx` | Informasi terkini |
| PPDB | `/ppdb` | `ppdb.jsx` | Pendaftaran online |
| Kontak | `/kontak` | `contact.jsx` | Hubungi sekolah |
| Login | `/login` | `login.tsx` | Sistem login |
| Register | `/register` | `register.tsx` | Pendaftaran akun |

## 🎯 Komponen Utama

### Core Components
- `navbar.jsx` - Navigasi header
- `footer.jsx` - Footer dengan informasi kontak
- `hero.jsx` - Section hero di homepage
- `layout.jsx` - Layout wrapper untuk semua halaman

### Feature Components
- `Alumni.jsx` - Testimoni dari alumni
- `cardGuru.jsx` - Card display untuk data guru
- `cardPrestasi.jsx` - Card display untuk prestasi
- `contactForm.jsx` - Form kontak sekolah
- `galleryGrid.jsx` - Grid layout untuk galeri foto
- `toggleTheme.jsx` - Switch dark/light mode

### Utility Components
- `sectionTitle.jsx` - Title component untuk section
- `spacer.jsx` - Spacing component
- `sloganSekolah.jsx` - Display slogan sekolah

## 📊 Data Management

### Static Data Files
- `berita.json` - Data berita dan pengumuman
- `gallery.json` - Data foto galeri kegiatan
- `guru.json` - Data profil guru dan staff
- `prestasi.json` - Data pencapaian sekolah

### Custom Hooks
- `useFetch.js` - Hook untuk API calls

### Utilities
- `fetchData.js` - Fungsi utilitas untuk fetching data
- `formatDate.js` - Fungsi formatting tanggal

## 🚀 Deployment

### Production Build
```bash
# Frontend
npm run build

# Backend
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Server Requirements
- PHP >= 8.1
- Node.js >= 16.0
- MySQL >= 8.0
- Composer
- Web server (Apache/Nginx)

## 🤝 Contributing

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- Email: support@sekolah.ac.id
- Website: https://sekolah.ac.id
- Issue Tracker: [GitHub Issues](https://github.com/username/web-sekolah/issues)

---

**made by alderlake with love**
