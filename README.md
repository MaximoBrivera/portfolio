# MrBanika Portfolio

Professional portfolio website for **Máximo Batista (MrBanika)** - UI Designer & Visual Designer

## 🎨 About

This is a modern, responsive portfolio website showcasing my expertise as a **UI Designer & Visual Designer**. The site features a clean, minimalist design with smooth animations, optimized performance, and a focus on visual storytelling that reflects my design philosophy.

## ✨ Key Features

- **Responsive Design**: Seamlessly optimized for mobile, tablet, and desktop experiences
- **Modern UI/UX**: Clean, professional design with smooth animations and micro-interactions
- **Performance Optimized**: Fast loading with WebP images, critical CSS, and optimized code
- **SEO Friendly**: Comprehensive meta tags, structured data, and semantic HTML
- **Accessibility First**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **Interactive Elements**: Typewriter animation, hover effects, and scroll snap functionality
- **Visual Storytelling**: Carefully crafted layouts that showcase design skills and creativity

## 🚀 Technologies & Tools

- **HTML5**: Semantic markup with accessibility features and structured data
- **CSS3**: Modern CSS with custom properties, animations, and responsive design
- **JavaScript (ES6+)**: Vanilla JavaScript for smooth interactions and animations
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Font Awesome**: Professional icon library
- **WebP Images**: Optimized image format for superior performance
- **Google Fonts**: Inter and Poppins for modern typography

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file with semantic structure
├── src/
│   ├── css/
│   │   └── style.css       # Main stylesheet with custom animations
│   ├── js/
│   │   └── script.js       # JavaScript for interactions and animations
│   └── assets/
│       ├── images/         # Optimized project images (WebP format)
│       │   ├── maximo.webp # Professional headshot
│       │   ├── q2.webp     # Hero background
│   │   │   ├── web11.webp  # Project showcase images
│   │   │   └── web.webp    # Additional project assets
│   │   └── icons/          # Custom icon assets
├── docs/                   # Project documentation
├── package.json            # Project configuration and scripts
└── README.md              # This documentation
```

## 🛠️ Development Setup

### Prerequisites

- Node.js (v16 or higher)
- Modern web browser with ES6+ support
- Git for version control

### Quick Start

1. **Clone the repository:**

```bash
git clone https://github.com/mrbanika/portfolio.git
cd portfolio
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start development server:**

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Available Scripts

- `npm start`: Start production server
- `npm run dev`: Start development server with live reload
- `npm run build`: Build optimized production version
- `npm run lint`: Run code quality checks

## 📱 Responsive Design System

### Breakpoints

- **Mobile**: < 768px (Optimized for touch interactions)
- **Tablet**: 768px - 1279px (iPad and tablet-friendly layouts)
- **Desktop**: 1280px - 1439px (Standard desktop experience)
- **XL Desktop**: 1440px+ (Large screens and ultra-wide displays)

### Design Principles

- **Mobile-First**: Designed with mobile users as the primary focus
- **Progressive Enhancement**: Core functionality works everywhere, enhanced on capable devices
- **Consistent Spacing**: 8px grid system for visual harmony
- **Typography Scale**: Responsive typography that scales beautifully across devices

## 🎯 Performance Optimizations

- **Image Optimization**: WebP format with responsive images and lazy loading
- **CSS Optimization**: Critical CSS inlined, non-critical CSS loaded asynchronously
- **JavaScript Optimization**: Deferred loading, minimal bundle size, and efficient event handling
- **Font Optimization**: Preloaded Google Fonts with font-display: swap
- **Caching Strategy**: Proper cache headers, versioning, and service worker ready
- **Core Web Vitals**: Optimized for LCP, FID, and CLS metrics

## 🎨 Design System

### Color Palette

- **Primary**: Pure white (#FFFFFF) for text and accents
- **Background**: Deep black (#000000) for contrast
- **Secondary**: Subtle grays (#aaa, #999) for supporting text
- **Accents**: Semi-transparent whites for overlays and effects

### Typography

- **Primary Font**: Inter (Modern, clean, highly readable)
- **Display Font**: Poppins (For headings and emphasis)
- **Font Weights**: 300 (Light), 400 (Regular), 600 (Semibold)

### Animation Principles

- **Smooth Transitions**: 300ms ease-out for most interactions
- **Subtle Hover Effects**: Transform and shadow changes
- **Scroll Animations**: Fade-in and slide-up effects
- **Performance Focused**: GPU-accelerated transforms only

## 🔧 Customization Guide

### Adding New Projects

1. **Prepare Images:**

   - Create WebP versions of project images
   - Optimize for web (compress, resize)
   - Add to `src/assets/images/`

2. **Update HTML Structure:**

   ```html
   <article class="project-card">
     <div class="project-image">
       <img src="src/assets/images/your-project.webp" alt="Project description" />
     </div>
     <div class="project-content">
       <h3 class="project-title">Your Project Title</h3>
       <p class="project-description">Project description</p>
     </div>
   </article>
   ```

3. **Follow Design Patterns:**
   - Maintain consistent spacing and typography
   - Use hover effects and transitions
   - Ensure responsive behavior

### Styling Guidelines

- **Use Tailwind Classes**: Prefer utility classes for consistency
- **Custom CSS**: Only for complex animations or unique components
- **Responsive Design**: Always consider mobile-first approach
- **Performance**: Avoid heavy CSS animations on mobile

### JavaScript Functionality

- **Modular Structure**: Keep functions focused and reusable
- **Event Delegation**: Use efficient event handling
- **Performance**: Debounce scroll events, use requestAnimationFrame
- **Accessibility**: Ensure keyboard navigation works

## 📊 SEO & Analytics

### SEO Features

- **Meta Tags**: Comprehensive Open Graph and Twitter Card data
- **Structured Data**: JSON-LD for rich snippets
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Performance**: Core Web Vitals optimization

### Analytics Ready

- **Google Analytics**: Easy integration point
- **Event Tracking**: Hover, click, and scroll tracking ready
- **Conversion Tracking**: Contact form and project view tracking

## 🚀 Deployment

### GitHub Pages

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Custom Domain

To use a custom domain:

1. Add CNAME file to repository root
2. Configure DNS settings
3. Enable HTTPS in repository settings

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Designer

**Máximo Batista (MrBanika)**

- **Role**: Web & UI Designer · Visual Artist
- **Specialties**: User Interface Design, Visual Storytelling, Digital Experiences
- **Philosophy**: Creating bold, clean, and impactful designs that solve user problems and deliver business results

### Contact & Links

- **Email**: [maximo.bxxiv@hotmail.com](mailto:maximo.bxxiv@hotmail.com)
- **LinkedIn**: [Máximo Batista](https://www.linkedin.com/in/maximo-batista-2954b1226/)
- **Instagram**: [@maxbatistar](https://www.instagram.com/maxbatistar/)
- **GitHub**: [@mrbanika](https://github.com/mrbanika)
- **Portfolio**: [Live Site](https://mrbanika.github.io/portfolio/)

## 🙏 Acknowledgments

- **Font Awesome** for comprehensive icon library
- **Google Fonts** for beautiful typography (Inter & Poppins)
- **Tailwind CSS** for utility-first CSS framework
- **WebP** for next-generation image format
- **Open Source Community** for the amazing tools that make modern web development possible

---

_Built with ❤️ by MrBanika - UI Designer & Visual Designer_
