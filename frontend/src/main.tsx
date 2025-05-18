import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeProvider from './theme/index.tsx'
import { store } from './app/store.ts';
import { Provider as ReduxProvider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,
)
