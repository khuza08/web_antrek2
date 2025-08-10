import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        darkMode: 'class',
        content: ['./src/**/*.{js,jsx,ts,tsx}'],
        theme: {
          extend: {
            fontFamily: {
              sans: ['"Inter"', 'sans-serif'],
              inter: ['"Inter"', 'sans-serif']
            },
            colors: {
              // Pastikan ada warna dark mode
              gray: {
                50: '#f9fafb',
                100: '#f3f4f6',
                // ... tambahkan hingga 900
                900: '#111827',
              }
            }
          }
        }
      }
    })
  ]
})