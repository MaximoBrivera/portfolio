# Image Optimization Guide

## Mobile Image Sizes Needed

### Hero Image (q2)
- **Desktop**: 1920x1080px (current q2.webp)
- **Mobile**: 768x432px (q2-mobile.webp) - 40% smaller file size

### Portfolio Images
- **Desktop**: 400x300px (current web11.webp, web.webp)
- **Mobile**: 300x225px (web11-mobile.webp, web-mobile.webp) - 25% smaller file size

## Optimization Commands (if you have ImageMagick or similar)

```bash
# Convert to WebP with mobile optimization
magick q2.jpg -resize 768x432 -quality 85 q2-mobile.webp
magick web11.jpg -resize 300x225 -quality 85 web11-mobile.webp
magick web.jpg -resize 300x225 -quality 85 web-mobile.webp

# Create JPG fallbacks
magick q2.webp q2.jpg
magick q2-mobile.webp q2-mobile.jpg
magick web11.webp web11.jpg
magick web11-mobile.webp web11-mobile.jpg
magick web.webp web.jpg
magick web-mobile.webp web-mobile.jpg
```

## Performance Impact
- **Mobile images**: 40-60% smaller file size
- **Faster loading**: Especially on slow mobile connections
- **Better LCP**: Largest Contentful Paint improvement
- **Reduced bandwidth**: Important for mobile users

## Current Status
✅ HTML optimized with responsive images
✅ Lazy loading implemented
✅ Critical CSS inlined
✅ Fonts optimized with preload
✅ JavaScript deferred
✅ Server optimizations (.htaccess)
⏳ Mobile images need to be created with proper dimensions
