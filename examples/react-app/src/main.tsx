import { ThemeProvider, theme } from 'bako-ui';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
