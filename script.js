document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar el elemento al que aplicaremos el parallax
    const heroSection = document.getElementById('hero');

    // 2. Definir el factor de movimiento del mouse parallax.
    const mouseParallaxFactor = 0.02; // Factor para el movimiento del mouse

    // 3. Inicializar la imagen centrada al cargar la página (solo una vez)
    function initializeHeroPosition() {
        if (heroSection) {
            // Set initial position for the picture element
            const heroPicture = heroSection.querySelector('picture img');
            if (heroPicture) {
                if (window.innerWidth >= 1920) {
                    heroPicture.style.objectPosition = 'center -80px';
                } else if (window.innerWidth >= 1280) {
                    heroPicture.style.objectPosition = 'center -50px';
                } else {
                    heroPicture.style.objectPosition = 'center center';
                }
                // Force a reflow to ensure the change is applied
                heroPicture.offsetHeight;
            }
            
            // También resetear cualquier transform del contenido
            const heroContent = heroSection.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = 'translate(0px, 0px)';
            }
            
        }
    }

    // Ejecutar inicialización solo una vez al cargar
    initializeHeroPosition();

    // Mouse parallax function - Only for desktop
    function applyMouseParallax(e) {
        // Only apply parallax on desktop (1280px and above)
        if (window.innerWidth < 1280) {
            return;
        }
        
        // Obtener las dimensiones del hero section
        const rect = heroSection.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calcular la posición del mouse relativa al centro del hero section
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Aplicar el movimiento del mouse al fondo (simple como el otro proyecto)
        const moveX = mouseX * mouseParallaxFactor;
        const moveY = mouseY * mouseParallaxFactor;
        
        // Movement limits
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        // Increased movement limits while preventing black borders
        const maxMoveX = screenWidth >= 1280 ? 8 : 3;
        const maxMoveY = screenHeight >= 800 ? 12 : 5;
        
        const limitedMoveX = Math.max(-maxMoveX, Math.min(maxMoveX, moveX));
        const baseLimitedMoveY = Math.max(-maxMoveY, Math.min(maxMoveY, moveY));
        
        // Additional safety verification
        const safeMoveX = Math.max(-10, Math.min(10, limitedMoveX));
        const safeMoveY = Math.max(-15, Math.min(15, baseLimitedMoveY));
        
        // Final verification with increased movement
        const ultraSafeMoveX = Math.max(-8, Math.min(8, safeMoveX));
        const ultraSafeMoveY = Math.max(-12, Math.min(12, safeMoveY));
        
        // Apply mouse movement to the picture element
        // Apply parallax based on screen size with limited upward movement
        const limitedMoveY = ultraSafeMoveY > 0 ? ultraSafeMoveY : ultraSafeMoveY * 0.3; // Reduce upward movement
        
        const heroPicture = heroSection.querySelector('picture img');
        if (heroPicture) {
            if (window.innerWidth >= 1920) {
                heroPicture.style.objectPosition = `calc(50% + ${ultraSafeMoveX}px) calc(-80px + ${limitedMoveY}px)`;
            } else if (window.innerWidth >= 1280) {
                heroPicture.style.objectPosition = `calc(50% + ${ultraSafeMoveX}px) calc(-50px + ${limitedMoveY}px)`;
            }
        }
        
        // Apply slight movement to content
        const heroContent = heroSection.querySelector('.hero-content');
        if (heroContent) {
            const contentMoveX = mouseX * (mouseParallaxFactor * 0.5);
            const contentMoveY = mouseY * (mouseParallaxFactor * 0.5);
            heroContent.style.transform = `translate(${contentMoveX}px, ${contentMoveY}px)`;
        }
    }

    // Reset parallax when mouse leaves hero - Only for desktop
    function resetParallax() {
        // Only reset parallax on desktop (1280px and above)
        if (window.innerWidth < 1280) {
            return;
        }
        
        // Return to original position based on screen size
        const heroPicture = heroSection.querySelector('picture img');
        if (heroPicture) {
            if (window.innerWidth >= 1920) {
                heroPicture.style.objectPosition = 'center -80px';
            } else if (window.innerWidth >= 1280) {
                heroPicture.style.objectPosition = 'center -50px';
            }
        }
        
        const heroContent = heroSection.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = 'translate(0px, 0px)';
        }
    }

    // Add mouse event listeners
    heroSection.addEventListener('mousemove', applyMouseParallax);
    heroSection.addEventListener('mouseleave', resetParallax);
    
    // Add resize listener to reinitialize on window resize
    window.addEventListener('resize', function() {
        initializeHeroPosition();
    });

    // Navigation with improved scroll-snap and mobile centering
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
                    
                    // Small delay to ensure menu closes before scroll
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

document.addEventListener('DOMContentLoaded', () => {
    // Select header element
    const header = document.querySelector('.main-header');
    
    // Define scroll threshold for background activation
    const scrollThreshold = 50; 

    // Function to handle header style changes on scroll
    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Execute function once on page load
    handleScroll();

});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.main-header');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle header and body background when menu is open
            if (navLinks.classList.contains('active')) {
                header.classList.add('menu-open');
                document.body.classList.add('menu-open');
            } else {
                header.classList.remove('menu-open');
                document.body.classList.remove('menu-open');
            }
            
            // Toggle hamburger to X
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                header.classList.remove('menu-open');
                document.body.classList.remove('menu-open');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                header.classList.remove('menu-open');
                document.body.classList.remove('menu-open');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});