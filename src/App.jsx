import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import VisualArt from './components/VisualArt'
import Footer from './components/Footer'
import ImageModal from './components/ImageModal'
import { ImageModalProvider } from './contexts/ImageModalContext'
import { useScrollEffects } from './hooks/useScrollEffects'

function App() {
  useScrollEffects()

  return (
    <ImageModalProvider>
      <div className="bg-black text-white font-inter leading-relaxed min-h-screen text-sm md:text-base scroll-smooth">
        <Header />
        <main>
          <Hero />
          <About />
          <Work />
          <VisualArt />
        </main>
        <Footer />
        <ImageModal />
      </div>
    </ImageModalProvider>
  )
}

export default App
