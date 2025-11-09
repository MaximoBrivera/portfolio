import React from 'react'
import maximoImage from '../assets/images/maximo.webp'

const About = () => {
  return (
    <section
      id="about"
      className="py-10 sm:py-12 md:py-16 lg:py-32 px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center mx-4 sm:mx-6 lg:mx-0 mt-10 sm:mt-0 lg:mt-0 mb-32 sm:mb-40 lg:mb-0 bg-white/[0.02] sm:bg-white/[0.01] lg:bg-transparent rounded-2xl sm:rounded-3xl lg:rounded-none border border-white/10 sm:border-white/8 lg:border-none backdrop-blur-lg sm:backdrop-blur-xl lg:backdrop-blur-none shadow-[0_8px_32px_rgba(0,0,0,0.3)] sm:shadow-[0_12px_40px_rgba(0,0,0,0.4)] lg:shadow-none transition-all duration-300 hover:bg-white/[0.03] sm:hover:bg-white/[0.02] lg:hover:bg-transparent hover:border-white/15 sm:hover:border-white/12 lg:hover:border-none hover:-translate-y-0.5 sm:hover:-translate-y-1 lg:hover:translate-y-0 about-section"
      role="main"
      aria-label="About section"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 md:mb-8 uppercase font-montserrat font-bold">
          About
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter font-normal text-white mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-snug about-subtitle">
          UI/UX Designer & Visual Designer
        </h3>

        {/* Profile Photo for Mobile/Tablet */}
        <div className="lg:hidden mb-8 flex justify-center">
          <div className="w-full max-w-[280px] sm:max-w-[320px]">
            <div className="w-full h-[300px] sm:h-[350px] bg-gray-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={maximoImage}
                alt="Max Batista MrBanika Professional Headshot - UI/UX Designer & Visual Designer"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                width="320"
                height="350"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-3xl mx-auto about-content">
          <div className="text-content mb-8 sm:mb-10 md:mb-12">
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose font-inter font-light about-intro">
              Hey, I'm Máximo Batista (MrBanika) — a UI/UX & Visual Designer who bridges logic and creativity to
              craft digital experiences that truly connect with people.
            </p>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose font-inter font-light about-text">
              My background in IT support gave me a deep understanding of how users think, feel, and struggle with
              technology. That empathy guides my design decisions, ensuring that every interface I create feels
              intuitive, human, and purposeful.
            </p>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose font-inter font-light about-text">
              With a foundation in front-end development, I pay attention not only to visual impact but also to
              feasibility and performance — turning creative concepts into practical, polished solutions.
            </p>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose font-inter font-light about-text">
              I focus on crafting intuitive and visually engaging interfaces that merge usability with strong
              aesthetics.
            </p>
          </div>

          {/* Skills List */}
          <div
            className="mt-4 sm:mt-6 md:mt-8 text-center skills-list"
            role="complementary"
            aria-label="Technical skills"
          >
            <span className="font-inter font-normal text-sm sm:text-base md:text-lg lg:text-xl block p-4 sm:p-5 md:p-6 bg-white/5 border border-white/10 rounded-lg md:rounded-xl">
              Figma | Illustrator | Photoshop | HTML/CSS | JavaScript | Prototyping
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
