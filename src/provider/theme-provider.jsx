/* eslint-disable react-refresh/only-export-components */
import { color } from 'framer-motion';
import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';

const initialState = {
  model: 'system',
  setModel: () => null,
};

const theme = {
  light: {
    background1: '#a7d8e8 ',
    background2: '#c6a5b3',
    background:
      'linear-gradient(180deg, #4069E4 0%, rgba(255, 255, 255, 0.00) 100%)',
    fontColor: '#0b1926',
    color: '#0b1926',
  },
  dark: {
    background: '#2c343b ',
    background1: '#4b5c68 ',
    background2: '#7a8b9d ',
    // background: '#0F103F',
    fontColor: '#ffffff',
    color: '#ffffff',
  },
};
const ThemeModelProviderContext = createContext(initialState);

function ThemeModelProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}) {
  const [model, setModel] = useState(() => {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme) return savedTheme;

    return defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (model === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    if (typeof model === 'string') {
      root.classList.add(model);
    }
  }, [model]);

  const value = {
    model: model,
    setModel: (newTheme) => {
      if (typeof newTheme === 'string') {
        localStorage.setItem(storageKey, newTheme);
        setModel(newTheme);
      } else {
        throw new Error('主题必须是字符串类型');
      }
    },
  };

  return (
    <ThemeModelProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeModelProviderContext.Provider>
  );
}

function ThemesProvider({ children }) {
  return (
    <ThemeModelProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModelProvider>
  );
}

const useThemeMode = () => {
  const context = useContext(ThemeModelProviderContext);

  if (context === undefined)
    throw new Error('useTheme 必须在 ThemeProvider 内部使用');

  return context;
};

const useThemeStyle = () => {
  const { model } = useThemeMode();
  const theme = useTheme();

  return theme[model] || theme.light;
};

export { ThemesProvider, useThemeMode, useThemeStyle };
