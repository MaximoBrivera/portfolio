# Configuration Guide - MrBanika Portfolio

## ⚙️ Project Configuration

### Package.json Configuration
```json
{
  "name": "mrbanika-portfolio",
  "version": "1.0.0",
  "description": "Professional portfolio website for Máximo Batista (MrBanika)",
  "main": "index.html",
  "scripts": {
    "start": "npx live-server --port=3000 --open=/index.html",
    "dev": "npx live-server --port=3000 --open=/index.html --watch=src"
  }
}
```

### Development Server Configuration
```json
{
  "port": 3000,
  "host": "localhost",
  "root": ".",
  "open": "/index.html",
  "wait": 1000,
  "logLevel": 2
}
```

### Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false
}
```

## 🎨 CSS Configuration

### Custom Properties
```css
:root {
  --primary-bg: #0f0f0f;
  --secondary-bg: #1a1a1a;
  --accent-bg: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #d1d5db;
  --text-muted: #9ca3af;
  --border-color: rgba(255, 255, 255, 0.1);
  --hover-bg: rgba(255, 255, 255, 0.05);
}
```

### Breakpoints
```css
/* Mobile: < 768px */
/* Tablet: 768px - 1279px */
/* Desktop: 1280px - 1439px */
/* XL Desktop: 1440px+ */
```

## 🔧 VS Code Configuration

### Settings
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "tailwindCSS.includeLanguages": {
    "html": "html",
    "javascript": "javascript",
    "css": "css"
  }
}
```

### Recommended Extensions
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- Auto Rename Tag
- Path Intellisense
- Live Server

## 🚀 Deployment Configuration

### Apache (.htaccess)
```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain text/html text/css application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/webp "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### GitHub Pages
- Repository: `mrbanika/portfolio`
- Branch: `main`
- Folder: `/ (root)`
- Custom domain: Optional

## 📱 Responsive Configuration

### Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
```

### Image Responsive Configuration
```html
<picture>
  <source media="(max-width: 768px)" srcset="src/assets/images/image-mobile.webp">
  <source srcset="src/assets/images/image.webp">
  <img src="src/assets/images/image.webp" alt="Description">
</picture>
```

## 🔍 SEO Configuration

### Meta Tags
```html
<title>UI/UX Designer & Visual Artist | Máximo Batista - MrBanika</title>
<meta name="description" content="Professional portfolio showcasing UI/UX design work">
<meta name="author" content="Máximo Batista">
<meta name="robots" content="index, follow">
```

### Open Graph
```html
<meta property="og:title" content="MrBanika Portfolio">
<meta property="og:description" content="UI/UX Designer & Visual Artist">
<meta property="og:image" content="src/assets/images/og-image.jpg">
<meta property="og:url" content="https://mrbanika.github.io/portfolio">
```

## ♿ Accessibility Configuration

### ARIA Labels
```html
<nav role="navigation" aria-label="Main navigation">
<main role="main">
<footer role="contentinfo">
```

### Focus Management
```css
*:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

## 🎯 Performance Configuration

### Critical CSS
```html
<style>
  /* Critical CSS inlined in HTML head */
  body { margin: 0; font-family: Inter, sans-serif; }
  .hero { min-height: 100vh; }
</style>
```

### Lazy Loading
```html
<img src="image.webp" alt="Description" loading="lazy">
```

### Preload
```html
<link rel="preload" href="src/css/style.css" as="style">
<link rel="preload" href="src/assets/images/hero.webp" as="image">
```

## 🔄 Git Configuration

### .gitignore
```
node_modules/
.DS_Store
.env
*.log
dist/
build/
```

### Commit Convention
```
feat: add new feature
fix: bug fix
docs: documentation update
style: formatting changes
refactor: code refactoring
```

## 📊 Analytics Configuration

### Google Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console
- Verify domain ownership
- Submit sitemap
- Monitor search performance

## 🛠️ Development Workflow

### Local Development
1. Clone repository
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open browser to `http://localhost:3000`

### Production Build
1. Optimize images
2. Minify CSS and JavaScript
3. Test on multiple devices
4. Deploy to hosting platform

## 🔧 Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths
2. **CSS not applying**: Check file paths and syntax
3. **JavaScript errors**: Check console for errors
4. **Mobile issues**: Test responsive design

### Debug Tools
- Browser DevTools
- Mobile device emulation
- Performance tools
- Accessibility tools

---

*This configuration guide should be updated as the project evolves and new configurations are added.*
