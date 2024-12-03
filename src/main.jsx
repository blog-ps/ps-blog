import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';
import './index.css';
import { ThemesProvider } from './provider/theme-provider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemesProvider>
  </StrictMode>
);
