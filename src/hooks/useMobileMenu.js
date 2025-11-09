import { useState, useEffect, useCallback } from 'react'

export const useMobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  useEffect(() => {
    const header = document.querySelector('.main-header')

    if (header) {
      if (menuOpen) {
        header.classList.add('menu-open')
        document.body.classList.add('menu-open')
        // Prevent scroll on body when menu is open
        document.body.style.overflow = 'hidden'
      } else {
        header.classList.remove('menu-open')
        document.body.classList.remove('menu-open')
        // Restore scroll
        document.body.style.overflow = ''
      }
    }

    // Close menu on escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }

    // Close menu when clicking outside (on backdrop)
    const handleClickOutside = (e) => {
      if (menuOpen) {
        const mobileMenu = document.querySelector('.nav-links')
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')

        if (
          mobileMenu &&
          mobileMenuToggle &&
          !mobileMenu.contains(e.target) &&
          !mobileMenuToggle.contains(e.target)
        ) {
          setMenuOpen(false)
        }
      }
    }

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      // Cleanup: restore scroll
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return { menuOpen, toggleMenu, closeMenu }
}
