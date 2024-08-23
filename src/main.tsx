import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux';
import AuthProvider from './providers/AuthProvider.tsx'
import { store } from './store'
import NotificationProvider from './contexts/NotificationContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <AuthProvider>
        <NotificationProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </NotificationProvider>
      </AuthProvider>
    </ReduxProvider>
  </StrictMode>,
)
