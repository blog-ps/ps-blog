import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemesProvider } from './providers/theme-provider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemesProvider>
      <App />
    </ThemesProvider>
  </StrictMode>
);
