import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/index.tsx'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store.ts'
import { Toaster } from './components/ui/sonner.tsx'
import { ThemeProvider } from './components/module/about/providers/theme.provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> 
    <RouterProvider router={router}/>
     <Toaster richColors />
    </ThemeProvider>

    </ReduxProvider>
  </StrictMode>,
)
