import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';

import './index.css'
import ContextApp from './ContextApp';
import { AuthProvider } from './context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ContextApp />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
