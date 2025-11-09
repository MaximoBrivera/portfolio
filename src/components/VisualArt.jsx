import React, { useContext } from 'react'
import { ImageModalContext } from '../contexts/ImageModalContext'
import bonesCover from '../assets/Covers/Bones.webp'
import briarCover from '../assets/Covers/Briar.webp'
import chainsCover from '../assets/Covers/Chains.webp'
import devilTwinsCover from '../assets/Covers/DevilTwins.webp'
import queenCover from '../assets/Covers/Queen.webp'
import salariManCover from '../assets/Covers/SalariMan.webp'
import msProblemCover from '../assets/Covers/Ms.Problem.webp'

const VisualArt = () => {
  const { openModal } = useContext(ImageModalContext)

  const coverArts = [
    {
      id: 1,
      title: 'Bones',
      description: 'Dark and atmospheric album cover design with striking visual elements and bold typography.',
      image: bonesCover,
      alt: 'Bones Album Cover by MrBanika',
    },
    {
      id: 2,
      title: 'Briar',
      description: 'Elegant and sophisticated album cover with intricate details and refined typography.',
      image: briarCover,
      alt: 'Briar Album Cover by MrBanika',
    },
    {
      id: 3,
      title: 'Chains',
      description: 'Powerful and symbolic album cover with industrial elements and strong visual impact.',
      image: chainsCover,
      alt: 'Chains Album Cover by MrBanika',
    },
    {
      id: 4,
      title: 'Devil Twins',
      description: 'Dark and mysterious album cover with dual character design and gothic elements.',
      image: devilTwinsCover,
      alt: 'Devil Twins Album Cover by MrBanika',
    },
    {
      id: 5,
      title: 'Queen',
      description: 'Regal and majestic album cover with royal aesthetics and elegant design elements.',
      image: queenCover,
      alt: 'Queen Album Cover by MrBanika',
    },
    {
      id: 6,
      title: 'Salaryman',
      description: 'Corporate and professional album cover with business aesthetics and modern design elements.',
      image: salariManCover,
      alt: 'Salaryman Album Cover by MrBanika',
    },
    {
      id: 7,
      title: 'Ms.Problem',
      description: 'Bold and striking album cover design with powerful visual elements and contemporary aesthetics.',
      image: msProblemCover,
      alt: 'Ms.Problem Album Cover by MrBanika',
    },
  ]

  const handleCoverClick = (image, alt) => {
    openModal(image, alt)
  }

  return (
    <section
      id="visual-art"
      className="py-10 tablet:py-20 desktop:py-32 xl-desktop:py-40 px-5 tablet:px-[8%] desktop:px-[15%] xl-desktop:px-[18%] pb-10 tablet:pb-20 desktop:pb-16 xl-desktop:pb-20 text-center mx-4 tablet:mx-6 desktop:mx-0 mt-4 tablet:mt-0 desktop:mt-[-60px] mb-32 tablet:mb-40 desktop:mb-0 bg-white/[0.02] tablet:bg-white/[0.01] desktop:bg-transparent rounded-2xl tablet:rounded-3xl desktop:rounded-none border border-white/10 tablet:border-white/8 desktop:border-none backdrop-blur-lg tablet:backdrop-blur-xl desktop:backdrop-blur-none shadow-[0_8px_32px_rgba(0,0,0,0.3)] tablet:shadow-[0_12px_40px_rgba(0,0,0,0.4)] desktop:shadow-none transition-all duration-300 hover:bg-white/[0.03] tablet:hover:bg-white/[0.02] desktop:hover:bg-transparent hover:border-white/15 tablet:hover:border-white/12 desktop:hover:border-none hover:-translate-y-0.5 tablet:hover:-translate-y-1 desktop:hover:translate-y-0 visual-art-section"
      role="main"
    >
      <h2 className="text-2xl tablet:text-3xl desktop:text-4xl xl-desktop:text-5xl font-montserrat font-bold mb-4 tablet:mb-6 desktop:mb-8 xl-desktop:mb-10 text-white">
        Visual Art
      </h2>
      <p className="text-sm tablet:text-base desktop:text-lg xl-desktop:text-xl text-gray-300 mb-8 tablet:mb-10 desktop:mb-12 xl-desktop:mb-16 max-w-3xl mx-auto leading-relaxed font-inter">
        A collection of my visual design work including cover arts, branding, and digital illustrations.
      </p>

      {/* Cover Arts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 max-w-6xl lg:max-w-5xl xl:max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 visual-art-grid">
        {coverArts.map((cover) => (
          <article
            key={cover.id}
            className="bg-gray-900 p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 rounded-lg md:rounded-xl lg:rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-4 md:hover:-translate-y-4 lg:hover:-translate-y-5 hover:scale-105 md:hover:scale-105 lg:hover:scale-105 xl:hover:scale-[1.02] hover:bg-gray-800 md:hover:bg-gray-800 lg:hover:bg-gray-800 xl:hover:bg-gray-800 hover:shadow-xl md:hover:shadow-xl lg:hover:shadow-2xl xl:hover:shadow-2xl visual-art-card group"
          >
            <div className="relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-xl">
              <picture className="block">
                <source media="(max-width: 768px)" srcSet={cover.image} type="image/webp" />
                <source srcSet={cover.image} type="image/webp" />
                <img
                  src={cover.image}
                  alt={cover.alt}
                  loading="lazy"
                  width="400"
                  height="300"
                  className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[280px] xl:h-[300px] object-cover object-center block rounded-lg md:rounded-xl lg:rounded-xl mb-3 sm:mb-4 md:mb-5 lg:mb-4 xl:mb-5 transition-transform duration-300 group-hover:scale-105"
                />
              </picture>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 rounded-lg md:rounded-xl lg:rounded-xl visual-art-overlay pointer-events-none group-hover:pointer-events-auto">
                <button
                  onClick={() => handleCoverClick(cover.image, cover.alt)}
                  className="bg-gray-700 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold text-sm md:text-base hover:bg-gray-600 hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 btn-animated relative z-10"
                >
                  <i className="fas fa-eye text-sm"></i>
                  View Details
                </button>
              </div>
            </div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-montserrat mb-2 sm:mb-2 md:mb-3 lg:mb-2 xl:mb-3 mt-2 sm:mt-3 visual-art-title">
              {cover.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-300 leading-relaxed md:leading-loose font-inter font-normal visual-art-description">
              {cover.description}
            </p>
          </article>
        ))}
      </div>

    </section>
  )
}

export default VisualArt
