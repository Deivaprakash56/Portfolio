import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { QuickActions } from './components/QuickActions'
import { NumbersProvider } from './lib/numbers'
import { ThemeProvider } from './lib/theme'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <ThemeProvider>
      <NumbersProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <div className="min-h-screen bg-bg pb-20 text-ink">
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-accent focus:px-3 focus:py-2 focus:text-on-accent"
            >
              Skip to content
            </a>
            <Nav />
            <main id="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <QuickActions />
          </div>
        </BrowserRouter>
      </NumbersProvider>
    </ThemeProvider>
  )
}
