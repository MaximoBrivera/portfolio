import React, { useState, useEffect } from 'react'
import { useHeroParallax } from '../hooks/useHeroParallax'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useHeroParallax()

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const scrollToWork = () => {
    const workSection = document.querySelector('#work')
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Animated Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/8 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-red-600/3 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] hero-grid-pattern"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/70 z-[1]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-[2] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">

          {/* Text Content */}
          <div className={`flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl mx-auto lg:mx-0 hero-content-wrapper ${
            isVisible ? 'hero-content-visible' : ''
          }`}>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hero-badge">
              <span className="text-xs sm:text-sm text-white/70 font-medium uppercase tracking-wider">Available for Projects</span>
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            </div>

            {/* Title */}
            <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-montserrat font-bold leading-tight hero-title">
              <span className="block text-white mb-2">Hello, I'm</span>
              <span className="block hero-title-text text-red-600">Máximo Batista</span>
            </h1>

            {/* Subtitle */}
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-semibold text-white/90 hero-subtitle">
              UI/UX Designer
            </h2>

            {/* Description */}
            <p className="mb-8 sm:mb-10 text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl hero-description">
              I craft intuitive and beautiful digital experiences for web and mobile
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto hero-cta">
              <button
                onClick={scrollToWork}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-1 hero-cta-button"
                aria-label="Explore my work"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore My Work
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>

              <a
                href="mailto:maximo.bxxiv@hotmail.com?subject=Contact%20from%20Portfolio"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/30 hover:border-white/50 rounded-lg text-white font-medium text-base sm:text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer no-underline inline-flex items-center justify-center"
                aria-label="Contact me via email"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <i className="far fa-envelope"></i>
                  Get In Touch
                </span>
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>
          </div>

          {/* Profile Image - Hidden on mobile, visible on desktop */}
          <div className={`hidden lg:block flex-shrink-0 hero-image-wrapper ${
            isVisible ? 'hero-image-visible' : ''
          }`}>
            <div className="relative w-[380px] lg:h-[460px] xl:w-[420px] xl:h-[500px] mx-auto">
              {/* Decorative Corner Elements */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-red-600/40 rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-red-600/40 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-red-600/40 rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-red-600/40 rounded-br-lg"></div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-red-600/20 via-transparent to-red-600/10 rounded-3xl blur-xl"></div>

              {/* Image Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl group hover:border-red-600/30 transition-all duration-500">
                <img
                  src="src/assets/images/maximo.webp"
                  alt="Max Batista MrBanika Professional Headshot - UI/UX Designer"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="eager"
                  width="420"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-black/80 backdrop-blur-lg rounded-full border border-white/20 shadow-xl">
                <span className="text-sm font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                  Available for Hire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[2] scroll-indicator">
        <button
          onClick={scrollToWork}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors duration-300 group"
          aria-label="Scroll to work section"
        >
          <span className="text-xs uppercase tracking-wider font-medium mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 group-hover:border-red-600/60 transition-all duration-300">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce scroll-indicator-dot group-hover:bg-red-600/80"></div>
          </div>
          <i className="fas fa-chevron-down text-xs mt-1 group-hover:translate-y-1 transition-transform duration-300"></i>
        </button>
      </div>
    </section>
  )
}

export default Hero
