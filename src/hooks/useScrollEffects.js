import { useEffect } from 'react'

export const useScrollEffects = () => {
  useEffect(() => {
    // Performance-optimized scroll animations using Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

    // Image loading animations
    const images = document.querySelectorAll('img')

    images.forEach((img) => {
      img.classList.add('image-loading')

      const handleLoad = () => {
        img.classList.remove('image-loading')
        img.classList.add('image-loaded')
      }

      img.addEventListener('load', handleLoad)

      // If image is already loaded
      if (img.complete) {
        handleLoad()
      }
    })

    return () => {
      observer.disconnect()
      images.forEach((img) => {
        img.removeEventListener('load', () => {})
      })
    }
  }, [])
}
