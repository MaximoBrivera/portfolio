import { useEffect } from 'react'

export const useHeroParallax = () => {
  useEffect(() => {
    const heroSection = document.getElementById('hero')
    const mouseParallaxFactor = 0.02

    // Initialize hero position based on screen size
    function initializeHeroPosition() {
      if (heroSection) {
        const heroPicture = heroSection.querySelector('picture img')
        if (heroPicture) {
          if (window.innerWidth >= 1920) {
            heroPicture.style.objectPosition = 'center -80px'
          } else if (window.innerWidth >= 1280) {
            heroPicture.style.objectPosition = 'center -50px'
          } else {
            heroPicture.style.objectPosition = 'center center'
          }
          heroPicture.offsetHeight // Force reflow
        }
      }
    }

    // Apply mouse parallax effect (desktop only)
    function applyMouseParallax(e) {
      if (window.innerWidth < 1280 || !heroSection) return

      const rect = heroSection.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      const moveX = mouseX * mouseParallaxFactor
      const moveY = mouseY * mouseParallaxFactor

      // Movement limits
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      const maxMoveX = screenWidth >= 1280 ? 8 : 3
      const maxMoveY = screenHeight >= 800 ? 12 : 5

      const limitedMoveX = Math.max(-maxMoveX, Math.min(maxMoveX, moveX))
      const baseLimitedMoveY = Math.max(-maxMoveY, Math.min(maxMoveY, moveY))

      // Safety verification
      const safeMoveX = Math.max(-10, Math.min(10, limitedMoveX))
      const safeMoveY = Math.max(-15, Math.min(15, baseLimitedMoveY))
      const ultraSafeMoveX = Math.max(-8, Math.min(8, safeMoveX))
      const ultraSafeMoveY = Math.max(-12, Math.min(12, safeMoveY))

      // Apply movement to picture element
      const limitedMoveY = ultraSafeMoveY > 0 ? ultraSafeMoveY : ultraSafeMoveY * 0.3
      const heroPicture = heroSection.querySelector('picture img')

      if (heroPicture) {
        if (window.innerWidth >= 1920) {
          heroPicture.style.objectPosition = `calc(50% + ${ultraSafeMoveX}px) calc(-80px + ${limitedMoveY}px)`
        } else if (window.innerWidth >= 1280) {
          heroPicture.style.objectPosition = `calc(50% + ${ultraSafeMoveX}px) calc(-50px + ${limitedMoveY}px)`
        }
      }
    }

    // Reset parallax when mouse leaves hero (desktop only)
    function resetParallax() {
      if (window.innerWidth < 1280 || !heroSection) return

      const heroPicture = heroSection.querySelector('picture img')
      if (heroPicture) {
        if (window.innerWidth >= 1920) {
          heroPicture.style.objectPosition = 'center -80px'
        } else if (window.innerWidth >= 1280) {
          heroPicture.style.objectPosition = 'center -50px'
        }
      }
    }

    // Initialize and add event listeners
    initializeHeroPosition()
    if (heroSection) {
      heroSection.addEventListener('mousemove', applyMouseParallax)
      heroSection.addEventListener('mouseleave', resetParallax)
    }

    const handleResize = () => initializeHeroPosition()
    window.addEventListener('resize', handleResize)

    return () => {
      if (heroSection) {
        heroSection.removeEventListener('mousemove', applyMouseParallax)
        heroSection.removeEventListener('mouseleave', resetParallax)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])
}
