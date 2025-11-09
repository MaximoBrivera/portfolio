export const useSmoothScroll = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault()

    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      // Get header height dynamically
      const header = document.querySelector('.main-header')
      const headerHeight = header ? header.offsetHeight : 80

      // Calculate target position with proper offset
      const elementRect = targetElement.getBoundingClientRect()
      const elementPosition = elementRect.top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      // Get current scroll position
      const startPosition = window.pageYOffset || window.scrollY || document.documentElement.scrollTop
      const distance = offsetPosition - startPosition

      // Determine duration based on distance (longer scrolls take more time)
      const maxDistance = Math.abs(distance)
      const baseDuration = 600
      const duration = Math.min(baseDuration, Math.max(300, maxDistance * 0.5))

      // Improved easing function (ease-in-out-cubic)
      const easeInOutCubic = (t) => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2
      }

      // Animation start time
      const startTime = performance.now()

      // Cancel any existing scroll animation
      let animationFrameId = null

      function animateScroll(currentTime) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Apply easing
        const ease = easeInOutCubic(progress)

        // Calculate current position
        const currentPosition = startPosition + distance * ease

        // Scroll to position
        window.scrollTo({
          top: currentPosition,
          behavior: 'auto' // We handle the animation manually
        })

        // Continue animation if not complete
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateScroll)
        } else {
          // Ensure we end at the exact target position
          window.scrollTo({
            top: offsetPosition,
            behavior: 'auto'
          })
        }
      }

      // Start animation
      animationFrameId = requestAnimationFrame(animateScroll)
    }
  }

  return { handleNavClick }
}
