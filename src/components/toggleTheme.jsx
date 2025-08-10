// src/components/toggleTheme.jsx
import { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';

export default function ToggleTheme() {
  const [theme, setTheme] = useState('system'); // Default system

  // 1. Deteksi perubahan tema sistem dan localStorage
  useEffect(() => {
    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'system';
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    setTheme(savedTheme);
    
    if (savedTheme === 'system') {
      document.documentElement.classList.toggle('dark', systemDark.matches);
    } else {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }

    // Listen for system theme changes
    systemDark.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      systemDark.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  // 2. Handle manual toggle
  const toggleTheme = () => {
    const newTheme = 
      theme === 'light' ? 'dark' :
      theme === 'dark' ? 'system' :
      'light';
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    // Force apply theme
    if (newTheme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', systemDark);
    } else {
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  };

  // 3. Tentukan ikon berdasarkan tema aktual yang sedang aktif
  const getCurrentActiveTheme = () => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  };

  const activeTheme = getCurrentActiveTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 bg-white dark:bg-gray-800 rounded-full shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-110 transition-all z-50"
      aria-label="Toggle theme"
    >
      {activeTheme === 'light' ? (
        <FiSun className="w-5 h-5 text-yellow-500" />
      ) : activeTheme === 'dark' ? (
        <FiMoon className="w-5 h-5 text-blue-400" />
      ) : (
        <FiMonitor className="w-5 h-5 text-gray-500" />
      )}
    </button>
  );
}