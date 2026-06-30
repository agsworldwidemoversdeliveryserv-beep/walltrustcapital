'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-walltrust-border dark:hover:bg-walltrust-border-dark transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} className="text-walltrust-secondary" /> : <Moon size={20} />}
    </button>
  );
}
