/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';

const initialState = {
  model: 'system',
  setModel: () => null,
};

const theme = {
  light: {
    color: '#0b1926',
    themeColor1: '#a7d8e8 ',
    themeColor2: '#c6a5b3',
    bottomColor1: '#70a2e1',
    bottomColor2: '#ffbaba',
    background:
      'linear-gradient(180deg, #4069E4 0%, rgba(255, 255, 255, 0.00) 100%)',
    fontColor: '#0b1926',
    cardBackground: `linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.5)
    ),
    linear-gradient(
      135deg,
      rgba(255, 0, 150, 0.2),
      rgba(0, 200, 255, 0.2),
      rgba(255, 255, 0, 0.2)
    )`,
  },
  dark: {
    color: '#ffffff',
    background: '#0F103F',
    fontColor: '#ffffff',
    themeColor1: '#4b5c68 ',
    themeColor2: '#7a8b9d ',
    bottomColor1: '#1c3f6e',
    bottomColor2: '#7D2A2A',
    cardBackground: `linear-gradient(
    135deg,
    rgba(70, 80, 90, 0.8),
    rgba(100, 110, 120, 0.6)
  ),
  linear-gradient(
    135deg,
    rgba(150, 200, 255, 0.5) 0%,
    rgba(100, 150, 200, 0.5) 50%,
    rgba(180, 180, 230, 0.5) 100%
  )`,
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
