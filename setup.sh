#!/bin/bash

# Buat folder sesuai struktur
mkdir -p src/{assets/{images,videos,icons},components,pages,layouts,data,hooks,styles,utils}

# Buat file di components
touch src/components/navbar.jsx \
      src/components/footer.jsx \
      src/components/hero.jsx \
      src/components/sectionTitle.jsx \
      src/components/cardPrestasi.jsx \
      src/components/cardGuru.jsx \
      src/components/galleryGrid.jsx \
      src/components/testimonialCard.jsx \
      src/components/contactForm.jsx \
      src/components/faq.jsx

# Buat file di pages
touch src/pages/home.jsx \
      src/pages/tentang.jsx \
      src/pages/guru.jsx \
      src/pages/achievements.jsx \
      src/pages/gallery.jsx \
      src/pages/contact.jsx \
      src/pages/news.jsx \
      src/pages/ppdb.jsx \
      src/pages/404.jsx

# Buat file di layouts
touch src/layouts/layout.jsx

# Buat file data JSON
touch src/data/guru.json \
      src/data/prestasi.json \
      src/data/berita.json \
      src/data/gallery.json

# Buat hooks dan utils
touch src/hooks/useFetch.js
touch src/utils/fetchData.js \
      src/utils/formatDate.js

# Buat file styles
touch src/styles/index.css

# Buat main entry dan App.jsx
touch src/main.jsx \
      src/App.jsx

echo "Struktur folder dan file sudah berhasil dibuat!"

