import React, { useState } from 'react'

const Work = () => {
  const [activeCard, setActiveCard] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Website Project | CoderHouse',
      description: 'Educational platform design focused on user experience and intuitive interface.',
      imageDesktop: 'src/assets/images/web11.webp',
      imageMobile: 'src/assets/images/web11-mobile.webp',
      link: 'https://www.figma.com/proto/CtHIa13H8GWdNsoGn2iy2x?node-id=0-1&t=UkDoAGipecgeUzJ1-6',
      alt: 'CoderHouse Educational Platform Design - Modern UI UX Interface Web Design Project by MrBanika',
    },
    {
      id: 2,
      title: 'Website Project | Style',
      description: 'Modern e-commerce with responsive design and optimized shopping experience.',
      imageDesktop: 'src/assets/images/web.webp',
      imageMobile: 'src/assets/images/web-mobile.webp',
      link: 'https://www.figma.com/proto/CjS86HpjDMpQUUvkYJUQri/ECOMMERCE-style?page-id=0%3A1&node-id=50-238&viewport=-287%2C40%2C0.18&t=DwvAGQFhRzzunP5V-1&scaling=contain&content-scaling=fixed',
      alt: 'Style Fashion E-commerce Website Design - Modern Responsive Online Store UI UX Design Project by MrBanika',
    },
    {
      id: 3,
      title: 'Mobile App | Design',
      description: 'Innovative mobile interface design with focus on user experience and modern aesthetics.',
      imageDesktop: 'src/assets/images/q2.webp',
      imageMobile: 'src/assets/images/q2-mobile.webp',
      link: 'https://www.figma.com/design/CtHIa13H8GWdNsoGn2iy2x/CoderHouse?node-id=0-1&t=dYZQA17KDUJQoUBN-1',
      alt: 'Mobile App Design Project - Modern UI UX Interface Design for iOS Android by MrBanika',
    },
  ]

  return (
    <section
      id="work"
      className="py-10 sm:py-12 md:py-16 lg:py-32 px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center mx-4 sm:mx-6 lg:mx-0 mt-10 sm:mt-0 lg:mt-0 mb-32 sm:mb-40 lg:mb-0 bg-white/[0.02] sm:bg-white/[0.01] lg:bg-transparent rounded-2xl sm:rounded-3xl lg:rounded-none border border-white/10 sm:border-white/8 lg:border-none backdrop-blur-lg sm:backdrop-blur-xl lg:backdrop-blur-none shadow-[0_8px_32px_rgba(0,0,0,0.3)] sm:shadow-[0_12px_40px_rgba(0,0,0,0.4)] lg:shadow-none transition-all duration-300 hover:bg-white/[0.03] sm:hover:bg-white/[0.02] lg:hover:bg-transparent hover:border-white/15 sm:hover:border-white/12 lg:hover:border-none hover:-translate-y-0.5 sm:hover:-translate-y-1 lg:hover:translate-y-0 work-section"
      role="main"
      aria-label="Work section"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-white">
          Work
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed font-inter px-2">
          A collection of my digital design projects including web applications, mobile interfaces, and user experience
          solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12 visual-art-grid">
          {projects.filter((project) => project.title !== 'Mobile App | Design').map((project) => (
            <article
              key={project.id}
              className={`bg-gray-900 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-5 hover:scale-[1.02] hover:bg-gray-800 hover:shadow-2xl visual-art-card group ${
                activeCard === project.id ? 'active' : ''
              }`}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setActiveCard(activeCard === project.id ? null : project.id)
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024) {
                  setActiveCard(null)
                }
              }}
            >
              <div className="relative overflow-hidden rounded-lg md:rounded-xl">
                <picture className="block">
                  <source media="(max-width: 768px)" srcSet={project.imageMobile} type="image/webp" />
                  <source srcSet={project.imageDesktop} type="image/webp" />
                  <img
                    src={project.imageDesktop}
                    alt={project.alt}
                    loading="lazy"
                    width="400"
                    height="300"
                    className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] object-cover object-top rounded-lg md:rounded-xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 transition-transform duration-300 group-hover:scale-105"
                  />
                </picture>

                {/* Overlay - Visible on hover (desktop) or click (mobile) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-black/75 to-black/60 transition-all duration-300 flex flex-col items-center justify-center gap-3 sm:gap-4 rounded-lg md:rounded-xl visual-art-overlay ${
                    activeCard === project.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'
                  }`}
                >
                  <a
                    href={project.link}
                    className="bg-red-600 hover:bg-red-700 backdrop-blur-sm text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-lg relative z-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} design`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-figma text-xs sm:text-sm"></i>
                    View Design
                  </a>
                </div>
              </div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat mb-2 sm:mb-2 md:mb-3 lg:mb-4 mt-2 sm:mt-3 visual-art-title">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed md:leading-loose font-inter font-normal visual-art-description">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
