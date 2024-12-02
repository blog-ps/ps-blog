import { useState } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem('theme');

    if (!theme) {
      localStorage.setItem('theme', 'light');
      return 'light';
    }

    return theme;
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return { theme, toggleTheme };
}

export default useDarkMode;
