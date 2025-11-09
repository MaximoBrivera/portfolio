import React, { useState, useEffect } from 'react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import { useMobileMenu } from '../hooks/useMobileMenu'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const { handleNavClick } = useSmoothScroll()
  const { menuOpen, toggleMenu, closeMenu } = useMobileMenu()

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50
      setScrolled(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Execute once on page load

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[70px] sm:h-[75px] md:h-[80px] lg:h-[80px] px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center bg-transparent z-[1000] transition-all duration-300 main-header ${
        scrolled ? 'scrolled' : ''
      } ${menuOpen ? 'menu-open' : ''}`}
      role="banner"
    >
      <nav className="flex justify-between items-center w-full navbar" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            handleNavClick(e, '#hero')
            closeMenu()
          }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white font-poppins logo z-[1001]"
          aria-label="Go to home - MrBanika"
        >
          MrBanika
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="desktop:hidden relative z-[1001] w-10 h-10 flex items-center justify-center bg-transparent border-none text-white text-2xl cursor-pointer rounded-lg transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black mobile-menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true"></i>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden desktop:flex desktop:items-center desktop:gap-8">
          {/* Navigation Links */}
          <div className="flex gap-6 xl:gap-8">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="text-white text-base xl:text-lg font-medium no-underline transition-colors duration-300 hover:text-red-600"
              aria-label="Return to top"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-white text-base xl:text-lg font-medium no-underline transition-colors duration-300 hover:text-red-600"
              aria-label="Learn more about me"
            >
              About
            </a>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, '#work')}
              className="text-white text-base xl:text-lg font-medium no-underline transition-colors duration-300 hover:text-red-600"
              aria-label="View work and projects"
            >
              Work
            </a>
            <a
              href="#visual-art"
              onClick={(e) => handleNavClick(e, '#visual-art')}
              className="text-white text-base xl:text-lg font-medium no-underline transition-colors duration-300 hover:text-red-600"
              aria-label="View visual art and design work"
            >
              Visual Art
            </a>
          </div>

          {/* Separator */}
          <div className="w-px h-6 bg-white/30 mx-2"></div>

          {/* Social Icons */}
          <div className="flex gap-3 xl:gap-4 social-icons">
            <a
              href="https://www.linkedin.com/in/maximo-batista-2954b1226/"
              className="text-white text-base xl:text-lg no-underline transition-colors duration-300 hover:text-red-600"
              aria-label="Max Batista's LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a
              href="mailto:maximo.bxxiv@hotmail.com?subject=Contact%20from%20Portfolio"
              className="text-white text-base xl:text-lg no-underline transition-colors duration-300 hover:text-red-600"
              aria-label="Send email to Max Batista"
            >
              <i className="far fa-envelope" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com/mrbanika/"
              className="text-white text-base xl:text-lg no-underline transition-colors duration-300 hover:text-red-600"
              aria-label="Max Batista's Instagram profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/MrBanika"
              className="text-white text-base xl:text-lg no-underline transition-colors duration-300 hover:text-red-600"
              aria-label="Max Batista's GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed desktop:hidden top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-[1000] transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeMenu()
            }
          }}
        >
          <ul className="flex flex-col justify-center items-center h-full gap-6 list-none px-6 pt-20 nav-links">
            <li>
              <a
                href="#hero"
                onClick={(e) => {
                  handleNavClick(e, '#hero')
                  closeMenu()
                }}
                className="text-white text-2xl sm:text-3xl font-semibold no-underline transition-all duration-300 py-4 px-6 hover:text-red-600 hover:scale-110 block"
                aria-label="Return to top"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  handleNavClick(e, '#about')
                  closeMenu()
                }}
                className="text-white text-2xl sm:text-3xl font-semibold no-underline transition-all duration-300 py-4 px-6 hover:text-red-600 hover:scale-110 block"
                aria-label="Learn more about me"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={(e) => {
                  handleNavClick(e, '#work')
                  closeMenu()
                }}
                className="text-white text-2xl sm:text-3xl font-semibold no-underline transition-all duration-300 py-4 px-6 hover:text-red-600 hover:scale-110 block"
                aria-label="View work and projects"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#visual-art"
                onClick={(e) => {
                  handleNavClick(e, '#visual-art')
                  closeMenu()
                }}
                className="text-white text-2xl sm:text-3xl font-semibold no-underline transition-all duration-300 py-4 px-6 hover:text-red-600 hover:scale-110 block"
                aria-label="View visual art and design work"
              >
                Visual Art
              </a>
            </li>

            {/* Social Links in Mobile Menu */}
            <li className="mt-8 pt-8 border-t border-white/20 w-full">
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/maximo-batista-2954b1226/"
                  className="text-white text-2xl transition-colors duration-300 hover:text-red-600"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a
                  href="mailto:maximo.bxxiv@hotmail.com?subject=Contact%20from%20Portfolio"
                  className="text-white text-2xl no-underline transition-colors duration-300 hover:text-red-600"
                  aria-label="Send email to Max Batista"
                  onClick={closeMenu}
                >
                  <i className="far fa-envelope" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/mrbanika/"
                  className="text-white text-2xl transition-colors duration-300 hover:text-red-600"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/MrBanika"
                  className="text-white text-2xl transition-colors duration-300 hover:text-red-600"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
