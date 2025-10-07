// ========================================
// PORTFOLIO WEBSITE - MAIN JAVASCRIPT FILE
// ========================================

// ========================================
// 1. HERO PARALLAX EFFECT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero');
    const mouseParallaxFactor = 0.02;

    // Initialize hero position based on screen size
    function initializeHeroPosition() {
        if (heroSection) {
            const heroPicture = heroSection.querySelector('picture img');
            if (heroPicture) {
                if (window.innerWidth >= 1920) {
                    heroPicture.style.objectPosition = 'center -80px';
                } else if (window.innerWidth >= 1280) {
                    heroPicture.style.objectPosition = 'center -50px';
                } else {
                    heroPicture.style.objectPosition = 'center center';
                }
                heroPicture.offsetHeight; // Force reflow
            }
        }
    }

    // Apply mouse parallax effect (desktop only)
    function applyMouseParallax(e) {
        if (window.innerWidth < 1280) return;

        const rect = heroSection.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const moveX = mouseX * mouseParallaxFactor;
        const moveY = mouseY * mouseParallaxFactor;

        // Movement limits
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const maxMoveX = screenWidth >= 1280 ? 8 : 3;
        const maxMoveY = screenHeight >= 800 ? 12 : 5;

        const limitedMoveX = Math.max(-maxMoveX, Math.min(maxMoveX, moveX));
        const baseLimitedMoveY = Math.max(-maxMoveY, Math.min(maxMoveY, moveY));

        // Safety verification
        const safeMoveX = Math.max(-10, Math.min(10, limitedMoveX));
        const safeMoveY = Math.max(-15, Math.min(15, baseLimitedMoveY));
        const ultraSafeMoveX = Math.max(-8, Math.min(8, safeMoveX));
        const ultraSafeMoveY = Math.max(-12, Math.min(12, safeMoveY));

        // Apply movement to picture element
        const limitedMoveY = ultraSafeMoveY > 0 ? ultraSafeMoveY : ultraSafeMoveY * 0.3;
        const heroPicture = heroSection.querySelector('picture img');

        if (heroPicture) {
            if (window.innerWidth >= 1920) {
                heroPicture.style.objectPosition = `calc(50% + ${ultraSafeMoveX}px) calc(-80px + ${limitedMoveY}px)`;
            } else if (window.innerWidth >= 1280) {
                heroPicture.style.objectPosition = `calc(50% + ${ultraSafeMoveX}px) calc(-50px + ${limitedMoveY}px)`;
            }
        }
    }

    // Reset parallax when mouse leaves hero (desktop only)
    function resetParallax() {
        if (window.innerWidth < 1280) return;

        const heroPicture = heroSection.querySelector('picture img');
        if (heroPicture) {
            if (window.innerWidth >= 1920) {
                heroPicture.style.objectPosition = 'center -80px';
            } else if (window.innerWidth >= 1280) {
                heroPicture.style.objectPosition = 'center -50px';
            }
        }
    }

    // Initialize and add event listeners
    initializeHeroPosition();
    heroSection.addEventListener('mousemove', applyMouseParallax);
    heroSection.addEventListener('mouseleave', resetParallax);
    window.addEventListener('resize', initializeHeroPosition);
});

// ========================================
// 2. SMOOTH NAVIGATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const isMobile = window.innerWidth <= 1023;

                if (isMobile) {
                    // Close mobile menu if open
                    const navLinks = document.querySelector('.nav-links');
                    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        if (mobileMenuToggle) {
                            const icon = mobileMenuToggle.querySelector('i');
                            if (icon) {
                                icon.classList.remove('fa-times');
                                icon.classList.add('fa-bars');
                            }
                        }
                    }

                    // Mobile: Precise centering with header offset
                    const headerHeight = document.querySelector('.main-header').offsetHeight || 70;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    let offsetPosition;

                    // Section-specific adjustment for better centering
                    if (targetId === '#about') {
                        offsetPosition = elementPosition - headerHeight - 10;
                    } else if (targetId === '#work') {
                        offsetPosition = elementPosition - headerHeight - 30;
                    } else {
                        offsetPosition = elementPosition - headerHeight - 20;
                    }

                    setTimeout(() => {
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }, 100);
                } else {
                    // Desktop: Use scrollIntoView with scroll-snap
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                }
            }
        });
    });
});

// ========================================
// 3. HEADER SCROLL EFFECT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    const scrollThreshold = 50;

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Execute once on page load
});

// ========================================
// 4. MOBILE MENU FUNCTIONALITY
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.main-header');
    const icon = mobileMenuToggle?.querySelector('i');

    console.log('Mobile menu elements found:', {
        mobileMenuToggle: !!mobileMenuToggle,
        navLinks: !!navLinks,
        header: !!header,
        icon: !!icon
    });

    if (!mobileMenuToggle || !navLinks || !header) {
        console.error('Mobile menu elements not found!');
        return;
    }

    const toggleMenu = (isOpen) => {
        console.log('toggleMenu called with isOpen:', isOpen);
        navLinks.classList.toggle('active', isOpen);
        header.classList.toggle('menu-open', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
        console.log('Classes after toggle:', {
            navLinksActive: navLinks.classList.contains('active'),
            headerMenuOpen: header.classList.contains('menu-open'),
            bodyMenuOpen: document.body.classList.contains('menu-open')
        });

        if (icon) {
            icon.className = '';
            icon.innerHTML = '';

            if (isOpen) {
                icon.className = 'fas fa-times';
                console.log('Menu opened - showing X icon');
            } else {
                icon.className = 'fas fa-bars';
                icon.style.transform = 'rotate(0deg) scale(1)';
                setTimeout(() => {
                    icon.className = 'fas fa-bars';
                    icon.style.transform = 'rotate(0deg) scale(1)';
                    console.log('Menu closed - forced hamburger icon to be horizontal');
                }, 50);
            }
            console.log('Menu toggled:', isOpen ? 'X' : 'Hamburger (3 horizontal lines)', 'Class:', icon.className);
        }
    };

    // Event listeners
    mobileMenuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Mobile menu toggle clicked!');
        const isCurrentlyOpen = navLinks.classList.contains('active');
        console.log('Currently open:', isCurrentlyOpen);
        toggleMenu(!isCurrentlyOpen);
    });

    // Close menu when clicking on navigation links
    const navLinksItems = navLinks.querySelectorAll('a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu(false);
            }
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            toggleMenu(false);
        }
    });
});

// ========================================
// 5. PROJECT CARD HOVER EFFECTS (SIMPLE)
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Simple hover effects - no complex click logic
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        // Add hover class on mouseenter
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });

        // Remove hover class on mouseleave
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });

    console.log('Project card hover effects initialized');
});

// ========================================
// 6. TYPEWRITER ANIMATION (DESKTOP ONLY)
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    function initTypewriterAnimation() {
        // Only apply on desktop (1280px and above)
        if (window.innerWidth < 1280) return;

        const titleElement = document.getElementById('title-text');
        if (!titleElement) return;

        const textToType = "Web & UI Designer · Visual Artist";
        let animationInterval;

        function startTypingAnimation() {
            // Clear any existing interval
            if (animationInterval) {
                clearInterval(animationInterval);
            }

            // Clear the text initially but show cursor immediately
            titleElement.innerHTML = '<span class="typewriter-text"></span><span class="typewriter-cursor">|</span>';

            // Add CSS for blinking cursor animation
            if (!document.getElementById('typewriter-cursor-style')) {
                const style = document.createElement('style');
                style.id = 'typewriter-cursor-style';
                style.textContent = `
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }
                    .typewriter-text {
                        font-family: 'Inter', sans-serif;
                        font-weight: 600;
                        color: white;
                        text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
                    }
                    .typewriter-cursor {
                        animation: blink 1s infinite;
                        font-weight: 600;
                        color: white;
                        text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
                    }
                `;
                document.head.appendChild(style);
            }

            // Get references to text and cursor elements
            const textElement = titleElement.querySelector('.typewriter-text');
            const cursorElement = titleElement.querySelector('.typewriter-cursor');

            // Cursor control functions
            function startBlinking() {
                if (cursorElement && !cursorElement.classList.contains('blinking')) {
                    cursorElement.style.animation = 'blink 1s infinite';
                    cursorElement.classList.add('blinking');
                }
            }

            function stopBlinking() {
                if (cursorElement && cursorElement.classList.contains('blinking')) {
                    cursorElement.style.animation = 'none';
                    cursorElement.classList.remove('blinking');
                }
            }

            // Start blinking immediately
            startBlinking();

            let index = 0;
            const baseTypingSpeed = 120;
            const displayDuration = 8000;

            function typeCharacter() {
                if (index < textToType.length) {
                    // Stop blinking while actively typing
                    stopBlinking();
                    const currentChar = textToType.charAt(index);

                    // Variable typing speed for more realistic effect
                    let currentSpeed = baseTypingSpeed;

                    // Speed variations based on character type
                    if (currentChar === ' ') {
                        currentSpeed = baseTypingSpeed * 2.5; // Thinking pause
                    } else if (currentChar === '&' || currentChar === '/' || currentChar === '|') {
                        currentSpeed = baseTypingSpeed * 2; // Reading pause
                    } else if (currentChar >= 'A' && currentChar <= 'Z') {
                        currentSpeed = baseTypingSpeed * 1.3; // Capital letters
                    } else {
                        currentSpeed = baseTypingSpeed; // Normal speed
                    }

                    // Add realistic randomness
                    const randomVariation = Math.random() * 40 - 20;
                    currentSpeed += randomVariation;

                    // Occasional longer pauses (human hesitation)
                    if (Math.random() < 0.15) {
                        currentSpeed += Math.random() * 200 + 100;
                    }

                    // Update text only (cursor stays separate)
                    textElement.textContent = textToType.substring(0, index + 1);
                    index++;

                    // Extra pause after certain characters
                    if (currentChar === '&') {
                        currentSpeed += 150;
                    }

                    // Blink cursor during long pauses
                    if (currentSpeed > 200) {
                        startBlinking();
                        setTimeout(() => {
                            stopBlinking();
                            setTimeout(typeCharacter, Math.max(currentSpeed - 200, 30));
                        }, 200);
                    } else {
                        setTimeout(typeCharacter, Math.max(currentSpeed, 30));
                    }
                } else {
                    // Animation complete, start blinking cursor
                    startBlinking();
                    startCountdownToRestart();
                }
            }

            function startCountdownToRestart() {
                setTimeout(() => {
                    eraseText();
                }, displayDuration);
            }

            function eraseText() {
                let currentText = textElement.textContent;
                const baseErasingSpeed = 60;

                function eraseCharacter() {
                    if (currentText.length > 0) {
                        // Stop blinking while actively erasing
                        stopBlinking();
                        currentText = currentText.slice(0, -1);

                        // Variable erasing speed
                        let currentSpeed = baseErasingSpeed;

                        if (currentText.length > 0 && currentText.charAt(currentText.length - 1) === ' ') {
                            currentSpeed = baseErasingSpeed * 1.5;
                        } else if (currentText.length > 0 && (currentText.charAt(currentText.length - 1) === '&' ||
                                 currentText.charAt(currentText.length - 1) === '/')) {
                            currentSpeed = baseErasingSpeed * 1.3;
                        }

                        // Add realistic randomness
                        const randomVariation = Math.random() * 30 - 15;
                        currentSpeed += randomVariation;

                        // Occasional hesitation while erasing
                        if (Math.random() < 0.1) {
                            currentSpeed += Math.random() * 100 + 50;
                        }

                        // Update text only (cursor stays separate)
                        textElement.textContent = currentText;

                        // Blink cursor during long pauses
                        if (currentSpeed > 120) {
                            startBlinking();
                            setTimeout(() => {
                                stopBlinking();
                                setTimeout(eraseCharacter, Math.max(currentSpeed - 120, 20));
                            }, 120);
                        } else {
                            setTimeout(eraseCharacter, Math.max(currentSpeed, 20));
                        }
                    } else {
                        // Text completely erased, start blinking cursor
                        textElement.textContent = '';
                        startBlinking();
                        setTimeout(() => {
                            startTypingAnimation();
                        }, 5000);
                    }
                }

                // Small delay before starting to erase
                setTimeout(eraseCharacter, 200);
            }

            // Start typing animation immediately
            typeCharacter();
        }

        // Start the animation cycle
        startTypingAnimation();

        // Return controller for cleanup
        return {
            stop: () => {
                if (animationInterval) {
                    clearInterval(animationInterval);
                }
            }
        };
    }

    // Initialize typewriter animation
    let typewriterController = initTypewriterAnimation();

    // Re-initialize on window resize (only if switching to desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1280) {
            const titleElement = document.getElementById('title-text');
            if (titleElement && !titleElement.hasAttribute('data-typed')) {
                titleElement.setAttribute('data-typed', 'true');
                if (typewriterController) {
                    typewriterController.stop();
                }
                typewriterController = initTypewriterAnimation();
            }
        } else {
            // Stop animation on mobile/tablet
            if (typewriterController) {
                typewriterController.stop();
                typewriterController = null;
            }
        }
    });
});

// ========================================
// END OF FILE
// ========================================
